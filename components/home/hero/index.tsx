import React from 'react';
import Carousel from '@/components/shared/carousel';
import Container from '@/components/shared/container';
import SectionHeader from '@/components/shared/section-header';
import { carouselImages } from '@/lib/data';

function Hero() {
  return (
    <section id="hero" className="mt-28 md:mt-40 mb-12 md:mb-28">
      <Container>
        <SectionHeader
          highlightedWord="Akora Leadership Trust"
          className="leading-snug hidden lg:block"
          size="base">
          Welcome to the Akora Leadership Trust
        </SectionHeader>
        <SectionHeader
          highlightedWord="Akora Leadership Trust"
          className="leading-snug lg:hidden"
          size="md">
          Welcome to the Akora Leadership Trust
        </SectionHeader>
        <p className="text-base sm:text-lg md:text-xl lg:text-[22px] leading-relaxed sm:leading-snug mt-2">
          An NGO dedicated to developing transformational global
          leaders in Ghana through character-based scholarships and
          leadership mentoring programs
        </p>
      </Container>

      <Carousel images={carouselImages} height="60vh" />
    </section>
  );
}

export default Hero;
