'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import Link from 'next/link';

const AlertCards = () => {
  const [showCard1, setShowCard1] = useState(true);
  const [showCard2, setShowCard2] = useState(true);

  return (
    <div className="flex flex-col items-center justify-start gap-6">
      {/* Card 1 */}
      {showCard1 && (
        <div className="bg-white rounded-lg border-l-8 border-red-600 shadow-md w-full max-w-4xl p-4 relative shadow-gray-300">
          <button
            className="absolute top-4 right-4 text-[#0A2A73]"
            onClick={() => setShowCard1(false)}
          >
            <X />
          </button>
          <h2 className="text-sm font-bold text-[#0A2A73]">
            Urgent need for blood donors
          </h2>
          <p className="mt-2 text-[#0A2A73] text-sm">
            We currently have a critical need for blood donations, specifically types O and B. Our supply is dangerously low, please donate today. Call{' '}
            <a
              href="tel:9912300697"
              className="text-blue-600 underline font-medium"
            >
             741-6424-300
            </a>{' '}
            or register online via the link below.
          </p>

          <div className="mt-4 font-bold text-[#0A2A73] flex items-center gap-2 text-sm">
            <Link
              href="/appointment"
              className="inline-flex items-center gap-2 font-bold text-[#0A2A73] text-sm  hover:text-blue-800 transition-colors"
            >
              <span>Register to donate</span>
              <div className="w-6 h-6 rounded-full border border-[#0A2A73] flex items-center justify-center">
                <span className="text-[#0A2A73]">&rarr;</span>
              </div>
            </Link>
          </div>
        </div>
      )}

      {/* Card 2 */}
      {showCard2 && (
        <div className="bg-white rounded-lg border-l-8 border-red-600 shadow-md w-full max-w-4xl p-6 relative shadow-gray-300">
          <button
            className="absolute top-4 right-4 text-[#0A2A73]"
            onClick={() => setShowCard2(false)}
          >
            <X />
          </button>
          <h2 className="text-sm font-bold text-[#0A2A73]">Holiday hours</h2>
          <p className="mt-2 text-sm text-[#0A2A73]">
            With the exception of Ramakrishna Memorial Hospital,{' '}
            <a href="#" className="text-blue-600 underline font-medium">
              Emergency Care
            </a>{' '}
            and{' '}
            <a href="#" className="text-blue-600 underline font-medium">
              Ramakrishna Memorial Nursing Home
            </a>
            , all RKM outpatient offices will be closed for the Memorial Day
            holiday – Monday, May 26.
          </p>
        </div>
      )}
    </div>
  );
};

export default AlertCards;
