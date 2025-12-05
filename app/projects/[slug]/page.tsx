import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectGallery } from "@/components/ProjectGallery";
import { ProjectSidebar } from "@/components/ProjectSidebar";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allProjects } from "@/data/projects";

export async function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = allProjects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const galleryImages = project.galleryImages || [project.imageUrl];
  
  // Use default values for projects without detailed information
  const hasDetailedInfo = project.overview || project.challenges || project.results;

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-12">
            {/* Breadcrumb */}
            <div className="flex flex-wrap items-center gap-2">
              <Link
                href="/projects"
                className="text-[#8D6E63] dark:text-[#8D6E63]/80 text-base font-medium leading-normal hover:underline"
              >
                All Projects
              </Link>
              <span className="text-[#333333]/50 dark:text-[#E0E0E0]/50 text-base font-medium leading-normal">
                /
              </span>
              <span className="text-[#333333] dark:text-[#E0E0E0] text-base font-medium leading-normal">
                {project.title}
              </span>
            </div>

            {/* Project Header */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h1 className="font-handwriting text-5xl md:text-7xl font-bold text-[#5D4037] dark:text-[#8D6E63]">
                  {project.title}
                </h1>
                <p className="text-lg text-[#333333]/80 dark:text-[#E0E0E0]/80">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                {project.liveDemoUrl && (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-12 px-5 bg-[#8D6E63] text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#8D6E63]/90 transition-colors"
                  >
                    <span className="material-symbols-outlined">open_in_new</span>
                    <span className="truncate">Live Demo</span>
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-12 px-5 bg-gray-200 dark:bg-[#2C231A] text-[#333333] dark:text-[#E0E0E0] text-base font-bold leading-normal tracking-[0.015em] hover:bg-gray-300 dark:hover:bg-[#2C231A]/80 transition-colors"
                  >
                    <span className="material-symbols-outlined">code</span>
                    <span className="truncate">View on GitHub</span>
                  </a>
                )}
              </div>
            </div>

            {/* Project Gallery */}
            {galleryImages.length > 0 && (
              <ProjectGallery images={galleryImages} imageAlt={project.imageAlt} />
            )}

            {/* Project Details */}
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8 mt-8">
              {hasDetailedInfo && (
                <div className="flex flex-col gap-10 lg:col-span-2">
                  {project.overview && (
                    <section>
                      <h2 className="font-handwriting text-4xl font-bold text-[#5D4037] dark:text-[#8D6E63] mb-4">
                        Project Overview
                      </h2>
                      <p className="text-base leading-relaxed text-[#333333]/90 dark:text-[#E0E0E0]/90 font-body">
                        {project.overview}
                      </p>
                    </section>
                  )}

                  {project.challenges && project.challenges.length > 0 && (
                    <section>
                      <h2 className="font-handwriting text-4xl font-bold text-[#5D4037] dark:text-[#8D6E63] mb-4">
                        Challenges & Solutions
                      </h2>
                      <div className="space-y-4">
                        {project.challenges.map((challenge, index) => (
                          <p
                            key={index}
                            className="text-base leading-relaxed text-[#333333]/90 dark:text-[#E0E0E0]/90 font-body"
                          >
                            {challenge}
                          </p>
                        ))}
                      </div>
                    </section>
                  )}

                  {project.results && (
                    <section>
                      <h2 className="font-handwriting text-4xl font-bold text-[#5D4037] dark:text-[#8D6E63] mb-4">
                        Results & Impact
                      </h2>
                      <p className="text-base leading-relaxed text-[#333333]/90 dark:text-[#E0E0E0]/90 font-body">
                        {project.results}
                      </p>
                    </section>
                  )}
                </div>
              )}

              {/* Sidebar - Always show for technologies */}
              <ProjectSidebar
                role={project.role}
                roleDescription={project.roleDescription}
                technologies={project.technologies}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

