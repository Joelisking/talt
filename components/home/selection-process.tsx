import React from 'react';
import Container from '@/components/shared/container';
import SectionHeader from '@/components/shared/section-header';
import SelectionStep from '@/components/home/selection-step';
import Image from 'next/image';

function SelectionProcess() {
  const steps = [
    {
      step: 1,
      title: 'First Selection',
      description: 'First Selection by Achimota Staff and Peers.',
    },
    {
      step: 2,
      title: 'Second Selection',
      description:
        'Second Selection by an External Panel of notable (Akora and Non-Akora) leaders during an Assessment Centre.',
    },
    {
      step: 3,
      title: 'Final Selection',
      description: 'Final Selection will be done by TALT trustees.',
    },
  ];

  return (
    <section
      id="selection-process"
      className="py-20 lg:py-28 bg-secondary">
      <Container>
        <div className="mb-12">
          <SectionHeader
            highlightedWord="Selection"
            className="mb-6"
            size="base">
            Selection Process
          </SectionHeader>
        </div>

        {/* Main Content - Cards on left, Image on right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Selection Steps */}
          <div className="space-y-6">
            {steps.map((stepData) => (
              <SelectionStep
                key={stepData.step}
                step={stepData.step}
                title={stepData.title}
                description={stepData.description}
              />
            ))}
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="aspect-square relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/home/selection-process.jpg"
                alt="Selection Process Overview"
                fill
                className="object-cover"
                priority
              />
              {/* Optional overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default SelectionProcess;
