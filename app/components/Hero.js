export default function Hero() {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat py-20 text-center"
      style={{ backgroundImage: "url('/rendering.avif')" }} // Replace with your image path
    >
      <div className=" p-10 rounded-lg max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Bringing Smiles to Families for Over 5 Decades.</h2>
        <p className="text-lg text-gray-800 mb-6 font-bold">Your Family’s Health, Our Lifelong Mission</p>
        <a href="/appointment" className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-400">
          Book Appointment
        </a>
      </div>
    </section>
  );
}
