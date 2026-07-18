import Layout from '../components/layout/Layout';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import ProjectsPreview from '../components/sections/ProjectsPreview';
import Contact from '../components/sections/Contact';
import { useScrollToHash } from '../hooks/useScrollToHash';

export default function Home() {
  useScrollToHash();

  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <ProjectsPreview />
      <Contact />
    </Layout>
  );
}
