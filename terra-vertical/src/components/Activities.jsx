import arvorismo from "../assets/arvorismo.jpg";
import escalada from "../assets/escalada.jpg";
import tirolesa from "../assets/tirolesa.jpg";
import airsoft from "../assets/airsoft.jpg";

const Activities = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center py-4 px-6">
        <h2 className="text-4xl font-bold text-center">Atividades</h2>
        <p className="text-center text-gray-600 mt-2">
          Descubra nossas atividades emocionantes e aproveite momentos
          inesquecíveis em meio à natureza!
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 py-4 px-6 lg:grid-cols-4 items-stretch place-items-center">
        <div className="card w-80 bg-base-100 shadow-xl">
          <figure>
            <img src={arvorismo} alt="Arvorismo" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Arvorismo
              <div className="badge badge-secondary">Novo</div>
            </h2>
            <p>
              Sinta a adrenalina deslizando por cabos suspensos e aproveite a
              vista lá do alto com total segurança.
            </p>
          </div>
        </div>{" "}
        <div className="card w-80 bg-base-100 shadow-xl">
          <figure>
            <img src={tirolesa} alt="Tirolesa" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Tirolesa
              <div className="badge badge-secondary">Novo</div>
            </h2>
            <p className="overflorow-hidden">
              Supere obstáculos em meio às copas das árvores em um circuito que
              une equilíbrio, diversão e natureza.
            </p>
          </div>
        </div>{" "}
        <div className="card w-80 bg-base-100 shadow-xl">
          <figure>
            <img src={escalada} alt="Escalada" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Escalada
              <div className="badge badge-secondary">Novo</div>
            </h2>
            <p>
              Desafie seus limites em um muro vertical, ideal para quem busca
              aventura e superação.
            </p>
          </div>
        </div>{" "}
        <div className="card w-80 bg-base-100 shadow-xl">
          <figure>
            <img src={airsoft} alt="Airsoft" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Airsoft
              <div className="badge badge-secondary">Novo</div>
            </h2>
            <p>
              Entre no jogo com estratégias e adrenalina em uma experiência de
              combate realista e emocionante.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Activities;
