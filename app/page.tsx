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
    <div className="bg-[#FDFDFB] text-neutral-900">
      <Nav />
      <main>
        <Hero />
        <FeaturedProject />
        <section id="projects" className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-2xl font-semibold text-neutral-900">Projects</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
