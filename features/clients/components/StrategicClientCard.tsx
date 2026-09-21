import { Card, CardContent } from "@/shared/components/ui/card"

import type { StrategicClient } from "../data/clients"

type StrategicClientCardProps = {
  client: StrategicClient
}

/** Outlined card on the navy band: client, what they do, and our engagement. */
export default function StrategicClientCard({
  client,
}: StrategicClientCardProps) {
  return (
    <Card className="h-full gap-0 rounded-2xl border border-line bg-transparent py-0 ring-0 transition-colors duration-300 hover:border-line-strong hover:bg-interactive-ghost">
      <CardContent className="flex h-full flex-col p-6">
        <h3 className="type-heading-sm text-content">{client.name}</h3>

        <p className="mt-2 type-body-sm text-content-subtle">
          {client.description}
        </p>

        <p className="mt-auto pt-4 font-mono text-xs leading-4 text-gold">
          {client.engagement}
        </p>
      </CardContent>
    </Card>
  )
}
