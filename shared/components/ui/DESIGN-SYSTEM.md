# ASBC design system

Source: https://www.figma.com/design/Wm57QWMzPNS20g1wduX0Ph/ASBC-Saudi?node-id=73-297

Preview at `/design-system`. Hover, press, and tab through controls. The example form demonstrates validation and an asynchronous loading state without sending data.

## Foundations

The raw palette is exposed through Tailwind colors such as `brand-primary`, `brand-action`, `brand-navy`, `accent-gold`, `neutral-500`, `success`, and `danger`. Shadcn semantic colors map onto these tokens. Body copy should use `text-muted-foreground`; headings use navy.

Fonts: Sora for headings (700/800), DM Sans for body and controls (400/500/600), and JetBrains Mono for technical text (400/700), self-hosted by Next.js.

Typography utilities include `type-display-{xl,lg,md}`, `type-heading-{xl,lg,md,sm,xs}`, `type-body-{lg,md,sm,xs}`, `type-label-{md,sm}`, `type-eyebrow-{md,sm}`, `type-data-md`, and `type-data-bold`. Eyebrow styles include uppercase and tracking. Font-only utilities are `font-heading`, `font-sans`, and `font-mono`.

## Controls

```tsx
<Button variant="primary" size="lg" loading={pending} loadingText="Sending…">
  Request a quotation
</Button>
<Input
  label="Work email"
  type="email"
  required
  helperText="Use your company email."
  error={errors.email?.message}
  loading={checking}
  {...register("email")}
/>
```

Buttons: primary, secondary, accent, ghost, danger, plus primary-on-navy, outline-on-navy, accent-on-navy, and glass-on-navy. Existing default, outline, destructive, and link names remain supported. Sizes sm/md/lg are 36/44/52px; the small button extends its pointer target to 44px. Icon sizes have at least a 44px target and require an accessible label.

Loading disables button activation. An optional `error` renders a persistent alert associated with the button. Inputs support native props/ref, default and filled surface variants, sm/default/lg sizes, disabled/read-only, loading, and errors. Loading inputs are read-only so their values stay in form submissions. Labels, helper text, error text, and loading status are linked to the input; caller-provided `aria-describedby` is preserved. Input `className` styles the control; `wrapperClassName` styles the field wrapper. Use a visible `label`, or provide an external label associated with `id`.

## Fidelity notes

Palette hex values, font families, typography sizes/weights, control dimensions, and documented focus/disabled rules come from the Figma specification. The component design-context, screenshot, and property tools failed during implementation. Hover/pressed fills and navy button fills are palette-based implementation choices awaiting visual verification. Loading behavior and the filled input surface extend the documented specimens. Dark mode maps the existing theme switch to navy surfaces; the Figma specification does not define a full dark theme. No Arabic type pairing is specified in Figma.
