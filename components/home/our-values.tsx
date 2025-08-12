import Container from '@/components/shared/container';

export const OurValues = () => {
  const values = [
    {
      letter: 'P',
      title: 'Pan-African',
      description:
        'Embracing our African heritage and fostering unity across the continent. We believe in the power of African leadership to transform our communities and create lasting positive change.',
      color: 'from-yellow-400 to-yellow-600',
    },
    {
      letter: 'A',
      title: 'Action',
      description:
        'Moving beyond words to create tangible impact. We believe in taking decisive steps to address challenges and implement solutions that drive real change in our communities.',
      color: 'from-blue-400 to-blue-600',
    },
    {
      letter: 'I',
      title: 'Integrity',
      description:
        'Upholding the highest standards of honesty, transparency, and ethical behavior. We believe that true leadership is built on a foundation of unwavering moral principles.',
      color: 'from-green-400 to-green-600',
    },
    {
      letter: 'R',
      title: 'Respect',
      description:
        'Valuing diversity, honoring different perspectives, and treating everyone with dignity. We believe that mutual respect is the cornerstone of effective leadership and collaboration.',
      color: 'from-purple-400 to-purple-600',
    },
  ];

  return (
    <section
      id="values"
      className="relative bg-gradient-to-r from-[#012956] via-[#013FB1] to-[#3F87FF] py-16 sm:py-20 lg:py-24 text-white overflow-hidden">
      <Container className="flex flex-col ">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <p className="mb-4 sm:mb-5 text-sm sm:text-base lg:text-lg font-semibold text-yellow-300 tracking-wide">
            "Values that Define Us"
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white">
            Our Values
          </h2>
        </div>

        {/* PAIR Acronym Display */}
        <div className="mb-12 sm:mb-16">
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="flex flex-col items-center group">
                {/* Letter Circle */}
                <div
                  className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br ${value.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 mb-4`}>
                  <span className="text-3xl sm:text-4xl font-semibold text-white">
                    {value.letter}
                  </span>
                </div>
                {/* Title */}
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-yellow-200 transition-colors duration-300">
                  {value.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Values Grid */}
        <div className="w-full max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {values.map((value, index) => (
              <div
                key={index}
                className="rounded-2xl sm:rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 px-6 sm:px-8 py-8 sm:py-10 lg:py-12 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-white/15 group">
                <div className="mb-4 sm:mb-5">
                  <div className="w-12 h-1 bg-yellow-300 rounded-full mb-4"></div>
                </div>
                <div className="flex items-center gap-4 mb-4 sm:mb-6">
                  {/* <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${value.color} flex items-center justify-center shadow-lg`}>
                    <span className="text-2xl font-bold text-white">
                      {value.letter}
                    </span>
                  </div> */}
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white group-hover:text-yellow-200 transition-colors duration-300">
                    {value.title}
                  </h3>
                </div>
                <p className="text-sm sm:text-base lg:text-lg text-gray-200 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurValues;
