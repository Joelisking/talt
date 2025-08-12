import Container from '@/components/shared/container';
import React from 'react';
import StandardsLeft from './StandardsLeft';
import StandardsRight from './StandardsRight';

async function SelectionStandards() {
  return (
    <section className="py-12 md:py-24" id="selection-standards">
      <Container className="px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <StandardsLeft />
          <StandardsRight />
        </div>
      </Container>
    </section>
  );
}

export default SelectionStandards;
