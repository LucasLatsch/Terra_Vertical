import video from "../assets/heroVideo.mp4";
import hero from "../assets/hero.jpg";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center">
      <div className="absolute inset-0 -z-20 h-full w-full overflow-hidden">
        <video
          src={video}
          className="h-full w-full object-cover"
          muted
          autoPlay
          loop
          playsInline
          poster={hero}
        ></video>
      </div>
      <div className="absolute inset-0 -z-10 bg-black opacity-40"></div>
      <div className="relative z-20 flex h-screen flex-col justify-center">
        <div className="flex relative z-20 items-center overflow-hidden">
          <div className="container mx-auto px-6 flex relative py-16">
            <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20 ">
              <span className="w-20 h-2 bg-white mb-12"></span>
              <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none text-white">
                Terra
                <span className="text-5xl sm:text-7xl">Vertical</span>
              </h1>
              <p className="text-sm sm:text-base text-white mt-8">
                Viva a aventura com segurança e emoção! Curta atividades como
                arvorismo, muro de escalada e tirolesa, sempre com condutores
                experientes. Um dia ao ar livre, repleto de adrenalina e
                natureza te espera!
              </p>
              <div className="mt-8 animate-bounce">
                <a
                  href="#activities"
                  className="inline-flex gap-4 py-2 px-4 rounded-lg bg-blue-500 border-2 border-transparent text-white text-md mr-4 hover:bg-blue-400"
                >
                  Venha se aventurar
                  <ArrowDown />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
