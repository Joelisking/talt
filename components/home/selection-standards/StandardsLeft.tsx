import React from 'react';
import StandardsText from './StandardsText';

const data = [
  {
    text: 'Integrity: We uphold the highest ethical standards in all our endeavors',
  },
  {
    text: 'Leadership: We develop transformational leaders who inspire positive change',
  },
  {
    text: 'Community: We foster a supportive network of like-minded individuals',
  },
  {
    text: 'Excellence: We strive for outstanding performance in academics and character',
  },
];

function StandardsLeft() {
  return (
    <div className="w-full md:w-1/2">
      <h2 className="text-3xl md:text-4xl font-bold">
        Selection Standards
      </h2>

      <div className="flex flex-col gap-3 mt-7">
        {data.map((d) => (
          <StandardsText mission={d.text} key={d.text} />
        ))}
      </div>
    </div>
  );
}

export default StandardsLeft;
