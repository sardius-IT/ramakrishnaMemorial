'use client';

import Image from 'next/image';
import Link from 'next/link';

const links = [
  {
    title: 'Find a doctor',
    icon: '/doctors-stethoscope-tool-in-cartoon-style-free-vector.jpg',
    href: '/find-doctor',
    borderColor: 'bg-orange-500',
  },
  {
    title: 'Find a location',
    icon: '/OIP.jpeg',
    href: '/locations',
    borderColor: 'bg-pink-500',
  },
];

const QuickLinks = () => {
  return (
    <section
      className="py-20  bg-[url('/doctor-is-preparing-syringe-shot.jpg')] bg-cover bg-center bg-no-repeat"
    >
      <div className=" p-10 rounded-xl">
        <div className="flex justify-center px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl w-full">
            {links.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="flex flex-col items-center bg-[#0A2A73] rounded-md overflow-hidden shadow-md transition-transform hover:scale-105"
              >
                <div className="flex flex-col items-center gap-4 py-8 px-6">
                  <div className="bg-white rounded-full p-4 w-20 h-20 flex items-center justify-center">
                    <Image
                      src={link.icon}
                      alt={link.title}
                      width={60}
                      height={60}
                    />
                  </div>
                  <p className="text-white text-lg font-medium underline-offset-4 underline decoration-transparent hover:decoration-white transition">
                    {link.title}
                  </p>
                </div>
                <div className={`${link.borderColor} h-2 w-full`} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
