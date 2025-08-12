import Image from 'next/image';
import standards from '@/public/home/selection-standards.jpg';

function StandardsRight() {
  return (
    <div className="w-full md:w-1/2 rounded-2xl overflow-hidden">
      <Image
        src={standards}
        alt="Selection Standards Image"
        className="rounded-2xl"
      />
    </div>
  );
}

export default StandardsRight;
