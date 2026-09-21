"use client"

import { Fragment, useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { useLocale, useTranslations } from "next-intl"
import { getLocaleDirection } from "@/shared/i18n/routing"

const ACCENT = "#D9BC83"

/*
 * Glyphs fly in from the end of the line and tip over from their start edge.
 * Arabic is cursive, so splitting a word into separate inline-blocks would
 * break the joins between its letters: RTL animates whole words instead, at a
 * slower beat to match.
 */
const TYPING_BY_DIRECTION = {
  ltr: {
    splitWord: (word: string) => Array.from(word),
    enterXPercent: 160,
    enterRotate: 18,
    transformOrigin: "0% 100%",
    beat: 0.045,
  },
  rtl: {
    splitWord: (word: string) => [word],
    enterXPercent: -160,
    enterRotate: -18,
    transformOrigin: "100% 100%",
    beat: 0.14,
  },
}

export default function HeroHeadline() {
  // Translation
  const t = useTranslations("HomeHero")
  const locale = useLocale()
  // Ref
  const headingRef = useRef<HTMLHeadingElement>(null)
  const caretRef = useRef<HTMLSpanElement>(null)
  // Variables
  const direction = getLocaleDirection(locale)
  const typing = TYPING_BY_DIRECTION[direction]
  const lines = [
    { text: t("headlineLine1") },
    { text: t("headlineLine2") },
    { text: t("headlineLine3"), accent: true },
    { text: t("headlineLine4"), accent: true },
  ]

  // Effects
  useLayoutEffect(() => {
    const heading = headingRef.current
    const caret = caretRef.current
    if (!heading || !caret) return

    const ctx = gsap.context(() => {
      gsap.set(heading, { visibility: "visible" })

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

      const chars = gsap.utils.toArray<HTMLElement>("[data-char]", heading)
      const finalColors = chars.map((el) => getComputedStyle(el).color)
      const caretGap = parseFloat(getComputedStyle(heading).fontSize) * 0.04
      const isRtl = direction === "rtl"

      // Offsets are physical, so "after" a glyph is its left edge in RTL.
      const placeCaret = (el: HTMLElement, after = true) =>
        gsap.set(caret, {
          x:
            after !== isRtl
              ? el.offsetLeft + el.offsetWidth + caretGap
              : el.offsetLeft - caretGap,
          y: el.offsetTop + el.offsetHeight * 0.12,
          height: el.offsetHeight * 0.76,
        })

      chars.forEach((el) => {
        gsap.set(el, {
          opacity: 0,
          xPercent: typing.enterXPercent,
          rotate: typing.enterRotate,
          scale: 0.7,
          filter: "blur(10px)",
          color: el.dataset.accent ? "#ffffff" : ACCENT,
          transformOrigin: typing.transformOrigin,
        })
      })
      placeCaret(chars[0], false)

      const tl = gsap.timeline({ delay: 0.3 })
      tl.to(caret, { opacity: 1, duration: 0.2 }, 0)

      let t = 0.3
      chars.forEach((el, i) => {
        tl.to(
          el,
          {
            opacity: 1,
            xPercent: 0,
            rotate: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.9,
            ease: "expo.out",
            onStart: () => placeCaret(el),
          },
          t
        )
        tl.to(
          el,
          { color: finalColors[i], duration: 0.6, ease: "power2.out" },
          t + 0.25
        )

        // Typewriter rhythm: small pause on punctuation, words and line breaks
        t += typing.beat
        if (/[.,'،]/.test(el.textContent ?? "")) t += 0.08
        if (el.dataset.wordEnd) t += 0.06
        if (el.dataset.lineEnd) t += 0.18
      })

      // Blink the caret a few times, then let it go
      tl.to(
        caret,
        {
          opacity: 0,
          duration: 0.01,
          repeat: 5,
          yoyo: true,
          repeatDelay: 0.4,
        },
        t + 0.5
      ).to(caret, { opacity: 0, duration: 0.3 })
    }, heading)

    return () => ctx.revert()
  }, [direction, typing])

  return (
    <h1
      ref={headingRef}
      aria-label={lines.map((line) => line.text).join(" ")}
      className="invisible relative font-heading text-4xl leading-[1.05] font-extrabold tracking-tight text-content sm:text-5xl md:text-6xl xl:text-7xl rtl:tracking-normal"
    >
      {lines.map((line, li) => {
        const words = line.text.split(" ")

        return (
          <Fragment key={li}>
            <span aria-hidden className={line.accent ? "text-gold" : undefined}>
              {words.map((word, wi) => (
                <Fragment key={wi}>
                  {wi > 0 && " "}
                  <span className="inline-block whitespace-nowrap">
                    {typing.splitWord(word).map((char, ci, units) => {
                      const isWordEnd = ci === units.length - 1
                      const isLineEnd = isWordEnd && wi === words.length - 1

                      return (
                        <span
                          key={ci}
                          data-char
                          data-accent={line.accent || undefined}
                          data-word-end={isWordEnd || undefined}
                          data-line-end={isLineEnd || undefined}
                          className="inline-block will-change-transform"
                        >
                          {char}
                        </span>
                      )
                    })}
                  </span>
                </Fragment>
              ))}
            </span>
            {li < lines.length - 1 && <br />}
          </Fragment>
        )
      })}

      {/* Typing caret */}
      <span
        ref={caretRef}
        aria-hidden
        className="pointer-events-none absolute top-0 left-0 w-[0.06em] rounded-full bg-gold opacity-0 shadow-[0_0_18px_#D9BC83]"
      />
    </h1>
  )
}
