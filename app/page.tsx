import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import FeaturedProject from "@/components/FeaturedProject";
import ProjectCard from "@/components/ProjectCard";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

export default function Page() {
  return (
    <div className="bg-paper text-ink">
      <Nav />
      <main>
        <Hero />
        <FeaturedProject />
        <section id="projects" className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
          <div className="flex items-center gap-6">
            <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">Projects</h2>
            <span aria-hidden="true" className="h-px flex-1 bg-ink/10" />
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.filter((p) => !p.featured).map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </section>
        <Skills />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}
