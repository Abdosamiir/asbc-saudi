import CompletedProjects from "@/features/projects/components/CompletedProjects"
import FeaturedProjects from "@/features/projects/components/feature-projects"
import ProjectStats from "@/features/projects/components/ProjectStats"

export default function ProjectsPage() {
  return (
    <>
      <FeaturedProjects />
      <CompletedProjects />
      <ProjectStats />
    </>
  )
}
