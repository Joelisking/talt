import Container from '@/components/shared/container';
import React from 'react';
import { Icon } from '../ui/icon';
import {
  Medal,
  BookOpen,
  GraduationCap,
  FileText,
  Users,
} from 'lucide-react';

function SelectionCriteria() {
  return (
    <section id="selection-criteria" className="py-24 bg-secondary">
      <Container className="px-8 xl:px-0">
        <h2 className="text-3xl md:text-4xl text-primary font-bold mb-4 lg:mb-8">
          Selection Criteria
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card One - Good Character */}
          <div className="flex flex-col items-center text-center bg-white rounded-3xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <div className="bg-primary p-5 rounded-full flex items-center justify-center w-16 h-16">
              <Medal color="#FFFFFF" className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
              Good Character
            </h3>
            <p className="text-sm text-gray-800 leading-relaxed">
              Must be of Good Character.
            </p>
          </div>

          {/* Card Two - Academic Excellence */}
          <div className="flex flex-col items-center text-center bg-white rounded-3xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <div className="bg-primary p-5 rounded-full flex items-center justify-center w-16 h-16">
              <BookOpen color="#FFFFFF" className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
              Academic Excellence
            </h3>
            <p className="text-sm text-gray-800 leading-relaxed">
              Demonstrated consistent good academic performance.
            </p>
          </div>

          {/* Card Three - Achimota Education */}
          <div className="flex flex-col items-center text-center bg-white rounded-3xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <div className="bg-primary p-5 rounded-full flex items-center justify-center w-16 h-16">
              <GraduationCap color="#FFFFFF" className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
              Achimota Education
            </h3>
            <p className="text-sm text-gray-800 leading-relaxed">
              Completed three (3) years of secondary education at
              Achimota School with good WASSCE grades.
            </p>
          </div>

          {/* Card Four - Higher Education Plans */}
          <div className="flex flex-col items-center text-center bg-white rounded-3xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <div className="bg-primary p-5 rounded-full flex items-center justify-center w-16 h-16">
              <FileText color="#FFFFFF" className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
              Leadership & Service
            </h3>
            <p className="text-sm text-gray-800 leading-relaxed">
              Demonstrated leadership values/abilities during student
              career at Achimota School, and/or participated in
              community service as a volunteer.
            </p>
          </div>

          {/* Card Five - Leadership & Service */}
          <div className="lg:col-span-2 flex flex-col items-center text-center bg-white rounded-3xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <div className="bg-primary p-5 rounded-full flex items-center justify-center w-16 h-16">
              <Users color="#FFFFFF" className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
              Higher Education Plans
            </h3>
            <p className="text-sm text-gray-800 leading-relaxed">
              Planning to enroll full-time in a bachelor's degree
              program at a major public higher educational institution
              in the semester directly following graduation from
              Achimota school.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default SelectionCriteria;
