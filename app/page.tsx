import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TeamGrid from "@/components/TeamGrid";
import ProjectsGrid from "@/components/ProjectsGrid";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <TeamGrid />
      <ProjectsGrid />
      <Contact />
    </>
  );
}
