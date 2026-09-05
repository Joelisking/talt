import Container from '@/components/shared/container';
import SectionHeader from '@/components/shared/section-header';
import { Compass, Target } from 'lucide-react';

const statements = [
  {
    icon: Target,
    title: 'Our Mission',
    text: 'To cultivate a new generation of African leaders who lead with integrity, live with purpose, and are empowered to drive transformative change on a global scale.',
  },
  {
    icon: Compass,
    title: 'Our Vision',
    text: 'A future where Africa is a recognized wellspring of ethical, purpose-driven global leadership, shaping a more just, innovative, and interconnected world.',
  },
];

export const MissionVision = () => {
  return (
    <section id="mission" className="py-20 lg:py-28 bg-secondary">
      <Container>
        {/* Section Header */}
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-sm font-semibold tracking-wide text-primary sm:mb-5 sm:text-base lg:text-lg">
            &quot;Why we exist.&quot;
          </p>
          <SectionHeader highlightedWord="Vision" size="base">
            Mission &amp; Vision
          </SectionHeader>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {statements.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="flex flex-col rounded-3xl bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-10">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                <Icon color="#FFFFFF" className="h-8 w-8" />
              </div>
              <h3 className="mt-8 mb-4 text-2xl font-bold">
                {title}
              </h3>
              <div className="mb-5 h-1 w-12 rounded-full bg-primary" />
              <p className="text-base leading-relaxed text-gray-800 sm:text-lg">
                {text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default MissionVision;
