"use client"

import { Fragment, useLayoutEffect, useRef } from "react"
import gsap from "gsap"

const ACCENT = "#D9BC83"

const LINES = [
  { text: "Precision" },
  { text: "Engineering." },
  { text: "Built for Arabia's", accent: true },
  { text: "Future.", accent: true },
]

export default function HeroHeadline() {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const caretRef = useRef<HTMLSpanElement>(null)

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

      const placeCaret = (el: HTMLElement, after = true) =>
        gsap.set(caret, {
          x: el.offsetLeft + (after ? el.offsetWidth + caretGap : -caretGap),
          y: el.offsetTop + el.offsetHeight * 0.12,
          height: el.offsetHeight * 0.76,
        })

      chars.forEach((el) => {
        gsap.set(el, {
          opacity: 0,
          xPercent: 160,
          rotate: 18,
          scale: 0.7,
          filter: "blur(10px)",
          color: el.dataset.accent ? "#ffffff" : ACCENT,
          transformOrigin: "0% 100%",
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
        t += 0.045
        if (/[.,']/.test(el.textContent ?? "")) t += 0.08
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
  }, [])

  return (
    <h1
      ref={headingRef}
      aria-label={LINES.map((line) => line.text).join(" ")}
      className="invisible relative font-heading text-4xl leading-[1.05] font-extrabold tracking-tight text-content sm:text-5xl md:text-6xl xl:text-7xl"
    >
      {LINES.map((line, li) => {
        const words = line.text.split(" ")

        return (
          <Fragment key={li}>
            <span aria-hidden className={line.accent ? "text-gold" : undefined}>
              {words.map((word, wi) => (
                <Fragment key={wi}>
                  {wi > 0 && " "}
                  <span className="inline-block whitespace-nowrap">
                    {Array.from(word).map((char, ci) => {
                      const isWordEnd = ci === word.length - 1
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
            {li < LINES.length - 1 && <br />}
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
