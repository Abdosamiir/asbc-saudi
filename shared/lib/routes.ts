/** Every top-level page, keyed by its label in the `Navigation` messages. */
export const ROUTES = {
  home: "/",
  about: "/about",
  services: "/services",
  projects: "/projects",
  clients: "/clients",
  quality: "/quality",
  contact: "/contact",
} as const

export type RouteKey = keyof typeof ROUTES
