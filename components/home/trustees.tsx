import Image from 'next/image';
import Container from '@/components/shared/container';
import SectionHeader from '@/components/shared/section-header';

interface Person {
  name: string;
  role: string;
  image: string;
  featured?: boolean;
}

// Founder first, then the Board of Trustees.
const board: Person[] = [
  {
    name: 'Akora Ewurasi Z. Dei-Anang',
    role: 'Founder',
    image: '/trustees/ewurasi-dei-anang.jpg',
    featured: true,
  },
  {
    name: 'Akora Elsie Eninful-Adu',
    role: 'Trustee',
    image: '/trustees/elsie-eninful-adu.jpg',
  },
  {
    name: 'Akora Mark Cofie',
    role: 'Trustee',
    image: '/trustees/mark-cofie.jpg',
  },
  {
    name: 'Akora Susan-Barbara Adjorkor Boye',
    role: 'Trustee',
    image: '/trustees/susan-barbara-boye.jpg',
  },
  {
    name: 'Akora Eugene Danquah',
    role: 'Trustee',
    image: '/trustees/eugene-danquah.jpg',
  },
  {
    name: 'Akora Jeff Nyanteh',
    role: 'Trustee',
    image: '/trustees/jeff-nyanteh.jpg',
  },
  {
    name: 'Akora Mary Asabea Ashun',
    role: 'Trustee',
    image: '/trustees/mary-asabea-ashun.jpg',
  },
  {
    name: 'Akora Kwaku Gyebi Duodu',
    role: 'Trustee',
    image: '/trustees/kwaku-gyebi-duodu.jpg',
  },
  {
    name: 'Akora Francis Odoom',
    role: 'Trustee',
    image: '/trustees/francis-odoom.jpg',
  },
  {
    name: 'Akora Michael Addo-Yobo',
    role: 'Trustee',
    image: '/trustees/michael-addo-yobo.jpg',
  },
  {
    name: 'Akora Kojo Lokko',
    role: 'Trustee',
    image: '/trustees/kojo-lokko.jpg',
  },
  {
    name: 'Akora Emmanuel Quansah',
    role: 'Trustee',
    image: '/trustees/emmanuel-quansah.jpg',
  },
];

const advocates: Person[] = [
  {
    name: 'Akora Frank Anim',
    role: 'TALT Advocate — Teacher, Cadbury Housemaster',
    image: '/trustees/frank-anim.jpg',
  },
];

function PersonCard({ person }: { person: Person }) {
  return (
    <div
      className={`group flex flex-col overflow-hidden rounded-3xl bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
        person.featured
          ? 'border-2 border-primary shadow-md'
          : 'border border-border shadow-sm'
      }`}>
      <div className="relative aspect-3/4 overflow-hidden bg-secondary">
        <Image
          src={person.image}
          alt={person.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-6">
        <div className="mb-3 h-1 w-10 rounded-full bg-primary" />
        <h3 className="text-sm font-bold leading-snug text-balance sm:text-base lg:text-lg">
          {person.name}
        </h3>
        <p
          className={`mt-1 text-xs sm:text-sm ${
            person.featured
              ? 'font-semibold text-primary'
              : 'text-gray-600'
          }`}>
          {person.role}
        </p>
      </div>
    </div>
  );
}

export const Trustees = () => {
  return (
    <section id="trustees" className="py-20 lg:py-28 bg-white">
      <Container>
        {/* Section Header */}
        <div className="mb-12 max-w-3xl sm:mb-16">
          <p className="mb-4 text-sm font-semibold tracking-wide text-primary sm:mb-5 sm:text-base lg:text-lg">
            &quot;Stewards of the vision.&quot;
          </p>
          <SectionHeader
            highlightedWord="Trustees"
            className="mb-6"
            size="base">
            Our Trustees
          </SectionHeader>
          <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
            The Akora Leadership Trust is guided by a board of Akoras
            who give their time, experience and networks to nurture
            the next generation of transformational leaders.
          </p>
        </div>

        {/* Board */}
        <div className="grid grid-cols-2 gap-4 sm:gap-8 md:grid-cols-3 lg:grid-cols-4">
          {board.map((person) => (
            <PersonCard key={person.name} person={person} />
          ))}
        </div>

        {/* Advocates */}
        <div className="mt-16 border-t border-border pt-12 sm:mt-20 sm:pt-16">
          <h3 className="mb-2 text-2xl font-bold sm:text-3xl">
            TALT Advocates
          </h3>
          <p className="mb-8 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
            Teachers and mentors who champion the work of the Trust
            from within Achimota School.
          </p>
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
            {advocates.map((person) => (
              <div
                key={person.name}
                className="group flex items-center gap-5 rounded-3xl border border-border bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:gap-6 sm:p-6">
                <div className="relative aspect-3/4 w-24 shrink-0 overflow-hidden rounded-2xl bg-secondary sm:w-28">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    sizes="120px"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div>
                  <div className="mb-3 h-1 w-10 rounded-full bg-primary" />
                  <h4 className="text-base font-bold leading-snug sm:text-lg">
                    {person.name}
                  </h4>
                  <p className="mt-1 text-sm text-gray-600">
                    {person.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Trustees;
