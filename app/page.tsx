import Hero from '@/components/home/hero';
import MissionVision from '@/components/home/mission-vision';
import AboutLink from '@/components/home/about-link';
import Pillars from '@/components/home/pillars';
import Trustees from '@/components/home/trustees';
import OurValues from '@/components/home/our-values';
import SelectionProcess from '@/components/home/selection-process';
import SelectionStandards from '@/components/home/selection-standards';
import SelectionCriteria from '@/components/home/selection-criteria';
import Testimonials from '@/components/home/testimonials';
import ContactForm from '@/components/home/contact-form';

export default function Home() {
  return (
    <main>
      <Hero />
      <MissionVision />
      <OurValues />
      <AboutLink />
      <Pillars />
      <Trustees />
      <SelectionProcess />
      <SelectionStandards />
      <SelectionCriteria />
      <Testimonials />
      <ContactForm />
    </main>
  );
}
