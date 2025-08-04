export default function ScubaCtaSection() {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <img
          src="/home/last.jpg" // Replace with your actual image path
          alt="Scuba Diving Adventure"
          className="mx-auto mb-6 rounded-lg shadow-lg w-full max-w-md"
        />
        <p className="text-sm uppercase text-gray-500 mb-2">Get in touch</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Dive into an extraordinary world
        </h2>
        <p className="text-gray-600 mb-6">
          Book your ultimate adventure with Goa Sports Adventure today and create memories that will last a lifetime.
        </p>
        <a
          href="https://wa.me/917678464517?text=Hello%2C%20I'm%20interested%20in%20the%20travel%20package"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-full transition-colors"
        >
          Chat With Us
        </a>
      </div>
    </section>
  );
}
