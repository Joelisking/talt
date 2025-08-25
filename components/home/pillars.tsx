import Container from '@/components/shared/container';

export const Pillars = () => {
  return (
    <section
      id="pillars"
      className="relative bg-gradient-to-r from-[#313131] via-[#000000] to-[#222222] py-16 sm:py-20 lg:py-24 text-white overflow-hidden">
      <Container className="flex flex-col lg:flex-row items-start gap-10 sm:gap-14 lg:gap-28">
        {/* Left Side */}
        <div className="z-10 flex flex-col justify-center w-full lg:w-auto lg:sticky lg:top-8">
          <p className="mb-4 sm:mb-5 text-sm sm:text-base lg:text-lg font-semibold text-yellow-300 tracking-wide">
            &quot;Strong foundations shape great futures.&quot;
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            Our Pillars
          </h2>
        </div>

        {/* Right Side */}
        <div className="z-10 gap-6 sm:gap-8 grid grid-cols-1 sm:grid-cols-2 w-full lg:w-auto">
          <div className="rounded-2xl sm:rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 px-6 sm:px-8 py-8 sm:py-10 lg:py-12 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-white/15 group">
            <div className="mb-4 sm:mb-5">
              <div className="w-12 h-1 bg-yellow-300 rounded-full mb-4"></div>
            </div>
            <h3 className="mb-3 sm:mb-4 text-xl sm:text-2xl lg:text-3xl font-bold text-white group-hover:text-yellow-200 transition-colors duration-300">
              Our Foundation
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-200 leading-relaxed">
              Grooming and Nurturing Tomorrow's Transformational
              Global Leaders, from Africa. The Akora Leadership Trust
              (TALT) is an NGO registered under the Companies Act 1963
              (Act 179) of Ghana.
            </p>
          </div>
          <div className="rounded-2xl sm:rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 px-6 sm:px-8 py-8 sm:py-10 lg:py-12 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-white/15 group">
            <div className="mb-4 sm:mb-5">
              <div className="w-12 h-1 bg-yellow-300 rounded-full mb-4"></div>
            </div>
            <h3 className="mb-3 sm:mb-4 text-xl sm:text-2xl lg:text-3xl font-bold text-white group-hover:text-yellow-200 transition-colors duration-300">
              Our Approach
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-200 leading-relaxed">
              We therefore aim to encourage, enhance and support the
              nurturing of emotional intelligence as a critical factor
              in the nurturing of Transformational Global Leaders.
            </p>
          </div>
          <div className="rounded-2xl sm:rounded-3xl bg-white/15 backdrop-blur-sm border border-white/30 px-6 sm:px-8 py-8 sm:py-10 lg:py-12 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-white/20 group sm:col-span-2">
            <div className="mb-4 sm:mb-5">
              <div className="w-12 h-1 bg-yellow-300 rounded-full mb-4"></div>
            </div>
            <h3 className="mb-4 sm:mb-5 text-xl sm:text-2xl lg:text-3xl font-bold text-white group-hover:text-yellow-200 transition-colors duration-300">
              Our Purpose
            </h3>
            <p className="mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg text-gray-200 leading-relaxed">
              Academic Excellence is usually the criteria by which
              most academic institutions in Africa, reward students
              and yet, good character is one of the critical factors,
              which produce the exemplary leadership that positively
              impacts on society.
            </p>
            {/* <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button className="bg-card-foreground text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3">
                <Link href="/who-are-we">Who we are</Link>
                <MoveRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button className="bg-card-foreground text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3">
                <Link href="/what-we-do">What we do</Link>
                <MoveRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div> */}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Pillars;
