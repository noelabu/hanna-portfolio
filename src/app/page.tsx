import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import ProjectsGrid from '@/components/sections/ProjectsGrid';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-light-gray pt-24">
      <Hero />
      <About />
      {/* <ProjectsGrid /> */}
      <Contact />
    </main>
  );
}