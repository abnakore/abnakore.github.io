import Layout from '../components/layout/Layout';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import ProjectsPreview from '../components/sections/ProjectsPreview';
import Contact from '../components/sections/Contact';

export default function Home() {
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
