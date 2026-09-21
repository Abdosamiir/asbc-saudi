import ClientCard from "./ClientCard"
import type { ClientCategory } from "../data/clients"

type ClientCategoryGroupProps = {
  category: ClientCategory
}

/** One labelled row of client plates (Water Authorities, Industrial, …). */
export default function ClientCategoryGroup({
  category,
}: ClientCategoryGroupProps) {
  return (
    <div>
      <p className="text-center type-eyebrow-md text-muted-foreground">
        {category.label}
      </p>

      <ul className="mt-6 grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {category.clients.map((client) => (
          <li key={client}>
            <ClientCard name={client} />
          </li>
        ))}
      </ul>
    </div>
  )
}
