'use client';

import { useState } from 'react';
import Container from '@/components/shared/container';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface Testimonial {
  id: number;
  image: string;
  name: string;
  tag?: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    image: '/testimonials/thomas.jpeg',
    name: 'Thomas Nana Kwantwi',
    tag: '2017 TALT Scholar',
    content: `As I reflect on my journey from the village of Assin Darmang to the Office of the President, I'm reminded that impossible dreams can become remarkable realities with the right support and guidance. The Akora Leadership Trust (TALT) has been that catalyst for me, providing me with the opportunity to attend Ashesi University and unlock my full potential.

    Through the TALT scholarship program, I've not only gained a world-class education but also developed the skills and confidence to make a meaningful impact. Today, I'm proud to be part of a community that shares my passion for creating positive change.

    TALT isn't just a scholarship program – it's a movement that empowers young leaders to become agents of transformation. As a TALT scholar, I've been part of a community that believes in nurturing exceptional leadership, and I'm grateful for the investment they've made in me.

    My story is a testament to the power of TALT's vision and mission. From Assin Darmang to the Office of the President, my journey is a reminder that with the right support, mentorship, and guidance, anything is possible.

    To all aspiring leaders, I encourage you to join the TALT community. This is a place where dreams are ignited, and destinies are shaped. With TALT, you'll be part of a legacy that empowers young minds to become the leaders of tomorrow.

    I'm eternally grateful for the TALT scholarship program, and I know that my story will inspire many more young students to pursue their dreams. Join me on this journey to greatness, and together, let's shape the future of our nation.`,
  },
  {
    id: 2,
    image: '/testimonials/eunice.jpg',
    name: 'Eunice Obenewaa Kyei-Baffour',
    tag: 'Akora 2019, TALT Scholar',
    content: `When I first walked through the gates of Achimota School, I never imagined that a conversation between a caring teacher would fundamentally change the trajectory of my life. The teacher who saw my potential shared my story with one of the Trustees from The Akora Leadership Trust (TALT); that moment changed everything for me.
    TALT stepped in at a crucial time not only supporting me financially with my education, accommodation, and upkeep, but also offering consistent mentorship and emotional support throughout my academic journey.

    TALT’s belief in nurturing transformational leaders through emotional intelligence, good character, and academic excellence was not just a concept, it was something I experienced firsthand. Through their mentorship, I learned that true leadership isn't just about academic achievement, but about understanding oneself and connecting authentically with others. This helped me navigate challenges with resilience and approach opportunities with wisdom. Their support allowed me to focus fully on my studies, and with their guidance, I graduated from Kwame Nkrumah University of Science and Technology with a First Class degree in Agribusiness Management.

    What truly set TALT apart was their holistic approach to development. They invested in my character, challenged my thinking, and consistently reminded me that I was being prepared not just for personal success, but to serve as a transformational leader in Africa. The confidence, integrity, and leadership principles TALT instilled in me opened doors I never thought possible. Today, I am proud to be working with GCB Bank PLC, an opportunity I could pursue because of the strong foundation TALT helped me build.

    TALT scholars aren't just recipients of generosity, we're part of a movement dedicated to Africa's transformation. The Trust saw potential in a young woman and helped her discover her capacity to lead with purpose and impact. I am forever grateful for the investment they made in me, not just financially, but emotionally and intellectually. I carry their values of Pan-Africanism, Integrity, and Respect with me every day, and I am committed to giving back and mentoring others, just as they did for me.

    Thank you, TALT, for believing in me.`,
  },
  {
    id: 3,
    image: '/testimonials/francis.jpg',
    name: 'Awusi Francis Anokye',
    content: ` I am Awusi Francis Anokye, a proud old student of Achimota School and a native of Adansi Akwanserem in the Adansi North District. Today, I am in my third year at Kwame Nkrumah University of Science and Technology (KNUST), pursuing a degree in Materials Engineering. This journey—one that has brought me this far, from humble beginnings to academic excellence—would not have been possible without the incredible support and vision of The Akora Leadership Trust (TALT).

    Growing up, the path to higher education often seemed like a distant dream due to financial and societal limitations. But TALT believed in my potential when many others didn’t see it. Through their support—financial, emotional, and motivational—I have not only entered the university but am thriving in a challenging and dynamic field. They gave me more than just an opportunity; they gave me a future.

    What makes TALT truly special is their genuine commitment to nurturing young minds. They don’t just offer assistance; they build leaders. Their investment in my life has changed my story, and I am forever grateful. I carry the values they instilled in me—discipline, leadership, and integrity—into every step I take.

    To The Akora Leadership Trust, thank you for lighting my path. Your belief in me has shaped the man I am becoming, and I promise to carry this torch forward, lighting the way for others just as you did for me.

    God richly bless you.`,
  },
  {
    id: 4,
    image: '/testimonials/samuel.jpeg',
    name: 'Samuel Eli Setsofia',
    tag: 'Akora 2016, TALT Scholar',
    content: `It's been almost a decade since I became a TALT scholar, and even though my formal time with the Trust was from 2016-2020, I am still very connected to the support I receive from my mentors. This enduring relationship speaksvolumes about the Akora Leadership Trust's genuine commitment to its scholars—they don't just invest in your education and walk away; they invest in you as a person for life.
    As a fully-funded scholarship recipient for my Biomedical Engineering degree program at the University of Ghana, I experienced firsthand the Trust's dedication to nurturing Africa's next generation of leaders.

    The personal mentorship and coaching I received from Dr. Eshun and Mr. Eugene Danquah was invaluable. Their guidance completely shifted my leadership perspective and fundamentally shaped my career trajectory. Through their wisdom and experience, I learned not just technical skills, but how to view leadership through a broader, more impactful lens.

    My personal experiences with Madam Dei Anang were particularly profound, deeply rooted in leadership values and Pan-Africanism. The constructive advice, honest rebukes, and necessary corrections she provided made the experience truly worthwhile. Her mentorship challenged me to grow beyond my comfort zone and embrace a vision of leadership that extends far beyond personal success.

    This experience with the Akora Leadership Trust has truly made me who I am today, and I am deeply grateful for every moment of guidance, challenge, and support. The Trust doesn't just provide education—it shapes character, instills values, and creates leaders who understand their responsibility to Africa and its people.

    I eagerly anticipate the opportunity to give back and contribute to the development of the next generation of TALT scholars.`,
  },
  {
    id: 5,
    image: '/testimonials/Nyamebabaa.jpg',
    name: 'Nyamebabaa Sikapa Safowaa Okley',
    tag: 'Akora 2016, TALT Scholar',
    content: `The Akora Leadership Trust (TALT) has been a cornerstone in my academic and personal
    journey. As a proud beneficiary of this remarkable initiative, I can confidently say that TALT has
    not only supported me financially, but has also mentored, shaped, and inspired me to become a
    leader who is committed to excellence, service, and impact.

    Through the support of TALT, I successfully earned my first degree in Biochemistry, Cell and
    Molecular Biology from Ghana’s premier institution, the University of Ghana. Prior to this, I had
    stayed home for three years after completing Achimota Senior High School, unable to pursue
    tertiary school due to financial constraints. It was during this difficult period that TALT came
    into my life, not just to offer financial aid, but to restore my hope and to provide a clear path
    forward. Thanks to their timely intervention, I was able to begin my academic journey with
    renewed confidence and purpose. Today, I am furthering my academic journey by pursuing an
    MPhil in Food Science and Technology at the CSIR College of Science and Technology, a
    milestone I may not have reached without the unwavering investment and guidance from TALT.

    Beyond the financial assistance, what stands out most about TALT is its commitment to
    developing the whole person. The leadership coaching, structured mentorship, and life
    guidance provided by the Trust have been pivotal in preparing me not just for academic
    success, but for meaningful leadership. I have been taught the values of integrity, purpose,
    resilience, and above all, the importance of giving back to society.

    TALT also instilled in me the spirit of Pan-Africanism. I have come to understand leadership not
    as a position of power, but as a call to serve first my immediate community, then Ghana, and
    eventually the African continent. The values of unity, heritage, and selfless commitment to
    national development run deep in all of TALT’s programming, and I carry these with me daily.

    Through TALT, I have come to believe in the power of mentorship, and the importance of lifting
    others as we rise. My ambition is not just to succeed for myself, but to be part of the
    generation of leaders who will help transform Ghana leaders who are grounded in ethics,
    compassion, and purpose.

    I remain eternally grateful to The Akora Leadership Trust for the immense role it has played in
    my life. TALT is not just a scholarship body; it is a life-shaping movement building a legacy of
    greatness, one leader at a time.`,
  },
  {
    id: 6,
    image: '/testimonials/julius.png',
    name: 'Julius Schandorf',
    content: `Being selected as a beneficiary of The Akora Leadership Trust Scholarship Program has
    been one of the most transformative experiences of my academic and professional journey. This
    scholarship has not only provided financial support, but also created a meaningful platform for
    me to grow as a leader committed to the values of Pan-Africanism, discipline, accountability,
    and service.

    Through this program, I have been challenged to think critically about the role of youth in shaping Africa’s future. The mentorship, training, and exposure I have received have strengthened my leadership capacity and inspired me to become a more intentional and ethical changemaker within my community. I am grateful for the coaches and mentors I have met within my journey in this program. Akora Ewurasi Zoë Dei-Anang, Akora Michael Addo-Yobo, and Akora Francis Odoom have been more than just mentors and coaches. Without their input in my life, I never would have tried anything new, or taken part in youth-led initiatives, and had thought-provoking conversations with myself.

    More than just a scholarship, this has been a journey of self-awareness and professional development. It has taught me the importance of discipline, purpose, and collaboration across cultures and borders. I now see my ambitions not just through a personal lens, but through the shared vision of a thriving, united Africa.

    I am deeply grateful to The Akora Leadership Trust for believing in my potential and investing in
    my growth. I carry this opportunity with pride and responsibility, knowing that it is a call to rise,
    lead, and give back.`,
  },
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section
      id="testimonials"
      className="relative bg-gradient-to-r from-[#012956] via-[#013FB1] to-[#3F87FF] py-16 sm:py-20 lg:py-24 text-white overflow-hidden">
      <Container className="flex flex-col items-center text-center">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <p className="mb-4 sm:mb-5 text-sm sm:text-base lg:text-lg font-semibold text-yellow-300 tracking-wide">
            "Voices of Transformation"
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 lg:mb-8 capitalize">
            What People Say About Us
          </h2>
        </div>

        {/* Testimonial Card with Navigation */}
        <Container className="w-full relative">
          {/* Left Navigation Button */}
          <div
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 lg:translate-x-0 z-10 hover:text-white border-0 bg-transparent hover:bg-transparent cursor-pointer hover:scale-110 duration-300 transition-all">
            <ChevronLeft className="h-7 w-7" />
          </div>

          {/* Right Navigation Button */}
          <div
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 lg:-translate-x-0 z-10 hover:text-white border-0 bg-transparent hover:bg-transparent cursor-pointer hover:scale-110 duration-300 transition-all">
            <ChevronRight className="h-7 w-7" />
          </div>

          <div className="rounded-2xl sm:rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 px-6 sm:px-8 md:px-12 py-8 sm:py-10 lg:py-12 shadow-xl">
            {/* Name and Tag */}
            <div className="mb-6 sm:mb-8">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                <Image
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white mb-2">
                {currentTestimonial.name}
              </h3>
              {currentTestimonial.tag && (
                <p className="text-sm sm:text-base text-yellow-300 font-medium">
                  {currentTestimonial.tag}
                </p>
              )}
            </div>

            {/* Content */}
            <blockquote className="text-sm sm:text-base lg:text-lg text-gray-200 leading-relaxed">
              {currentTestimonial.content
                .split('\n')
                .map((line, index) => (
                  <span key={index}>
                    {line}
                    {index <
                      currentTestimonial.content.split('\n').length -
                        1 && <br />}
                  </span>
                ))}
            </blockquote>
          </div>
        </Container>

        {/* Position Indicators */}
        <div className="mt-8 sm:mt-12 flex justify-center">
          <div className="flex items-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-yellow-300 scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
