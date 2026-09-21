import CompletedProjects from "@/features/projects/components/CompletedProjects"
import FeaturedProjects from "@/features/projects/components/feature-projects"
import ProjectStats from "@/features/projects/components/ProjectStats"
import { initPageLocale } from "@/shared/i18n/page-locale"

export default async function ProjectsPage({
  params,
}: PageProps<"/[locale]/projects">) {
  await initPageLocale(params)

  return (
    <>
      <FeaturedProjects />
      <CompletedProjects />
      <ProjectStats />
    </>
  )
}
