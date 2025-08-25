'use client';
import React from 'react';
import Container from '../container';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import { smoothScrollTo } from '@/lib/utils';

function Footer() {
  const handleScrollClick = (elementId: string) => {
    smoothScrollTo(elementId);
  };

  return (
    <div>
      <footer className="bg-secondary text-white py-20">
        <Container>
          {/* Top Section - Logo and Mission */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-12">
            <div className="space-y-4">
              <Image
                src="/logo.png"
                alt="TALT Logo"
                width={120}
                height={120}
                className="mb-4 "
              />
              <p className="text-lg leading-relaxed text-black max-w-md">
                Developing transformational global leaders in Ghana
                through character-based scholarships and leadership
                mentoring programs.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary mb-4">
                Quick Links
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium text-black mb-3">
                    About Us
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-800">
                    <li>
                      <button
                        onClick={() => handleScrollClick('about')}
                        className="hover:text-primary transition-colors duration-200 cursor-pointer">
                        Who We Are
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => handleScrollClick('values')}
                        className="hover:text-primary transition-colors duration-200 cursor-pointer">
                        Our Values
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => handleScrollClick('pillars')}
                        className="hover:text-primary transition-colors duration-200 cursor-pointer">
                        Our Pillars
                      </button>
                    </li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium text-black mb-3">
                    Programs
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-800">
                    <li>
                      <button
                        onClick={() =>
                          handleScrollClick('selection-process')
                        }
                        className="hover:text-primary transition-colors duration-200 cursor-pointer">
                        Selection Process
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() =>
                          handleScrollClick('selection-standards')
                        }
                        className="hover:text-primary transition-colors duration-200 cursor-pointer">
                        Selection Standards
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() =>
                          handleScrollClick('selection-criteria')
                        }
                        className="hover:text-primary transition-colors duration-200 cursor-pointer">
                        Selection Criteria
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <Separator className="opacity-30 my-10" />

          {/* Bottom Section - Copyright and Additional Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-2">
              <p className="text-sm text-gray-800">
                Copyright © 2025 The Akora Leadership Trust (TALT).
                All rights reserved.
              </p>
            </div>

            <div className="text-right lg:text-left">
              <div className="space-y-2">
                <button
                  onClick={() => handleScrollClick('testimonials')}
                  className="block text-sm text-gray-800 hover:text-primary transition-colors duration-200 cursor-pointer">
                  Testimonials
                </button>
                <button
                  onClick={() => handleScrollClick('contact')}
                  className="block text-sm text-gray-800 hover:text-primary transition-colors duration-200 cursor-pointer">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}

export default Footer;
