'use client';

const locations = [
  {
    name: 'Ramakrishna Memorial Nursing Home',
    address: 'Bhasker Theatre, Chilakaluripet, AP',
    phone: '991-230-0697',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.7403921702924!2d80.16445167508388!3d16.092474784623795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a636b1e93c3af%3A0xca0d730b5ac84141!2sRamakrishna%20Memorial%20Nursing%20Home!5e0!3m2!1sen!2sin!4v1716800000000!5m2!1sen!2sin',
  },
  // Add more if needed
];

export default function LocationsPage() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-7xl font-bold text-[#0A2A73] mb-8 text-center">
        Our Locations
      </h1>

      <div className="grid gap-8">
        {locations.map((location, index) => (
          <div
            key={index}
            className="rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow"
          >
            <h2 className="text-xl font-semibold text-[#0A2A73] mb-2">
              {location.name}
            </h2>
            <p className="text-gray-700 mb-1">{location.address}</p>
            <p className="text-gray-600 mb-4">Phone: {location.phone}</p>

            <div className="aspect-w-16 aspect-h-9 w-full">
              <iframe
                src={location.mapEmbedUrl}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-64 rounded-lg border"
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
