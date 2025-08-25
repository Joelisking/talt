import React from 'react';
import Container from '@/components/shared/container';
import SectionHeader from '@/components/shared/section-header';

export default function About() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#313131] via-[#000000] to-[#222222] py-28 sm:py-28 lg:py-48 text-white overflow-hidden">
        <Container className="flex flex-col items-center text-center">
          <div className="mb-8">
            <p className="mb-4 text-sm sm:text-base lg:text-lg font-semibold text-yellow-300 tracking-wide">
              "Established in 2015"
            </p>
            <SectionHeader size="xl" className="text-white mb-6">
              THE AKORA LEADERSHIP TRUST
            </SectionHeader>
            <p className="text-lg sm:text-xl text-gray-200 max-w-4xl">
              Developing a new generation of African leaders—young men
              and women of integrity, driven by purpose and equipped
              to be transformative global leaders.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <Container>
          <div className="space-y-8 sm:space-y-10">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none">
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                Like streams of living water, the alumni of Achimota
                School have flowed into various spheres of life,
                making their mark and contributing to society. Among
                these shining examples is{' '}
                <span className="font-semibold text-primary">
                  The Akora Leadership Trust (TALT)
                </span>
                , conceived by Akora Ewurasi Dei-Anang and brought to
                life by Akoras Elsie Adu (née Eninful) and Mark Cofie
                Jr. (all from the 1985 Year Group).
              </p>
            </div>

            {/* Vision */}
            <div className="prose prose-lg max-w-none">
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                TALT's vision quickly resonated with like-minded
                individuals who joined to launch and nurture the
                organization. Our commitment is to giving back to
                society and making a lasting difference in the lives
                of young people.
              </p>
            </div>

            {/* Mission */}
            <div className="prose prose-lg max-w-none">
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                Our mission is to develop a new generation of African
                leaders—young men and women of integrity, driven by
                purpose and equipped to be transformative global
                leaders. This mission is guided by our core values,
                which we call{' '}
                <span className="font-semibold text-primary">
                  PAIR
                </span>
                .
              </p>
            </div>

            {/* PAIR Values */}
            <div className="bg-gradient-to-r from-[#313131] via-[#000000] to-[#222222] rounded-2xl p-8 sm:p-10 text-white">
              <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-yellow-300">
                Our Core Values - PAIR
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold text-black">
                      P
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">
                      Pan-African Orientation
                    </h4>
                    <p className="text-gray-200 text-sm">
                      Embracing our African heritage and fostering
                      unity across the continent.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold text-white">
                      A
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">
                      Action-Driven
                    </h4>
                    <p className="text-gray-200 text-sm">
                      Moving beyond words to create tangible impact in
                      our communities.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-green-400 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold text-white">
                      I
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">
                      Integrity-Focused
                    </h4>
                    <p className="text-gray-200 text-sm">
                      Upholding the highest standards of honesty and
                      ethical behavior.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-purple-400 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold text-white">
                      R
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">
                      Respect-Centered
                    </h4>
                    <p className="text-gray-200 text-sm">
                      Valuing diversity and treating everyone with
                      dignity.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Activities and Impact */}
            <div className="prose prose-lg max-w-none">
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                Since our establishment in 2015, TALT has been
                supported by ten committed members and has provided
                comprehensive scholarships covering tuition, boarding,
                IT devices, counseling, mentoring, and coaching. These
                scholarships are awarded to exceptional Achimota
                School graduates pursuing higher education in Ghanaian
                universities.
              </p>
            </div>

            {/* Selection Criteria */}
            <div className="bg-gray-50 rounded-2xl p-8 sm:p-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
                Selection Criteria
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Our selection process prioritizes:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                  Consistent academic excellence
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                  Exemplary character
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                  Leadership potential
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                  Community service
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                  Strong foundation of three years at Achimota School
                  with an outstanding BECE score
                </li>
              </ul>
            </div>

            {/* Current Status */}
            <div className="prose prose-lg max-w-none">
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                Now in our tenth year, TALT has awarded scholarships
                to eight (8) students who have attended renowned
                institutions like the University of Ghana (Legon),
                Kwame Nkrumah University of Science and Technology
                (KNUST), and Ashesi University. Six of the eight (6/8)
                beneficiaries have already distinguished themselves as
                professionals, and we anticipate the graduation of
                three (3) additional scholars in 2027.
              </p>
            </div>

            {/* Future Vision */}
            <div className="prose prose-lg max-w-none">
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                Operating quietly yet effectively, TALT has sown seeds
                of success that are now flourishing. Our former
                beneficiaries are now accomplished professionals
                working with our founders to sustain the vision. The
                challenge ahead is to cultivate continued growth for
                TALT to become a lasting force for positive change.
              </p>
            </div>

            {/* Gratitude and Invitation */}
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 sm:p-10 border border-primary/20">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6">
                  We are grateful to God, and to everyone who has
                  supported this journey. This work is demanding but
                  immensely rewarding, offering us the opportunity to
                  extend impact beyond individual needs and uplift
                  society as a whole. Interdependence, after all, is
                  the bedrock of human progress.
                </p>
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-semibold">
                  We invite more like-minded individuals with a spirit
                  of service and a growth-oriented mindset to join us
                  in advancing the next phase of TALT's development.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
