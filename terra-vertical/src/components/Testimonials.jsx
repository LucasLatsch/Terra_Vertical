import testimonial1 from "../assets/testimonial1.jpg";
import testimonial2 from "../assets/testimonial2.jpg";
import testimonial3 from "../assets/testimonial3.jpg";

const Testimonials = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center py-4 px-6">
        <h2 className="text-4xl font-bold text-center">
          Aventura, Adrenalina e Natureza
        </h2>
        <p className="text-center text-gray-600 mt-2">
          Desafie seus limites com experiências inesquecíveis em nossas trilhas,
          alturas e desafios!
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 py-4 px-6">
        <img
          className="rounded-md h-96 object-cover"
          src={testimonial1}
          alt="Cliente 1"
        />
        <img
          className="rounded-md h-96 object-cover"
          src={testimonial2}
          alt="Cliente 2"
        />
        <img
          className="rounded-md h-96 object-cover"
          src={testimonial3}
          alt="Cliente 3"
        />
      </div>
    </>
  );
};

export default Testimonials;
