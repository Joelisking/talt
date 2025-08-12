import { Check } from 'lucide-react';
import React from 'react';

function MissionText({ mission }: { mission: string }) {
  return (
    <div className="flex items-center gap-2.5 bg-white px-3 py-2 rounded-lg">
      <div>
        <div className="bg-primary w-6 h-6 rounded-full flex justify-center items-center">
          <Check color="#ffffff" className="w-4" />
        </div>
      </div>
      <span className="">{mission}</span>
    </div>
  );
}

export default MissionText;
