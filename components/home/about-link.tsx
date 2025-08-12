import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';
import Container from '../shared/container';
import Link from 'next/link';

function AboutLink() {
  return (
    <section
      id="about"
      className="py-8 sm:py-14 md:py-20 lg:py-24 bg-secondary">
      <Container className="grid grid-cols-1 xl:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
        <div className="text-left md:order-1">
          <div className="mb-4">
            <h2 className="text-3xl md:text-5xl font-bold">
              About Us
            </h2>
          </div>
          <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
            In the early part of 1985, a few of us (parishioners) from
            the Church visited our Priest at the time, the Rev. Fr.
            Ivan Yangyouru, a Lecturer then of the Sociology
            Department (now of blessed memory). We were surprised to
            see several very happy students at what seemed like a
            party. Jokingly, we asked why we were not invited to the
            party! Fr. Ivan, in his usual very calm voice, said that
            it was a very normal Sunday afternoon at his house with
            &ldquo;small refreshments&rdquo;.
            <br />
            <br />
            We were very impressed that he had such an activity going
            on every Sunday afternoon on his meager Lecturer&apos;s
            salary, particularly at that time when there was a general
            shortage of almost everything in the country. Not long
            after this, we discovered that those were needy/poor
            students, he was supporting at the University all by
            himself.
          </p>
          <Link href="/about">
            <Button className="text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3">
              Learn More{' '}
              <MoveRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </Link>
        </div>
        <div className="relative min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[450px] rounded-xl sm:rounded-2xl overflow-hidden order-1 md:order-2">
          <Image
            src="/home/about-link.jpg"
            alt="Historical Image"
            fill
            className="object-cover rounded-xl sm:rounded-2xl"
          />
        </div>
      </Container>
    </section>
  );
}

export default AboutLink;
