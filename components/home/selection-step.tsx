import React from 'react';

interface SelectionStepProps {
  step: number;
  title: string;
  description: string;
}

const SelectionStep: React.FC<SelectionStepProps> = ({
  step,
  title,
  description,
}) => (
  <div className="relative p-6 rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:shadow-lg hover:border-primary/20 hover:bg-primary/5 group">
    {/* Step badge */}
    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium mb-4 bg-gray-100 text-gray-700 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
      {step}
    </div>

    <h3 className="text-lg font-semibold mb-3 text-gray-900 group-hover:text-primary transition-colors duration-300">
      {title}
    </h3>

    <p className="text-gray-600 text-sm leading-relaxed">
      {description}
    </p>
  </div>
);

export default SelectionStep;
