const Reviews = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center py-4 px-6">
        <h2 className="text-4xl font-bold text-center">Avaliações</h2>
        <p className="text-center text-gray-600 mt-2">
          Veja o que nossos visitantes estão dizendo! Experiências reais,
          emoções verdadeiras e momentos que marcaram.
        </p>
      </div>

      {/* Grid de avaliações */}
      <div className="grid grid-cols-1 gap-6 py-4 px-6 lg:grid-cols-2 items-stretch place-items-center">
        {/* João Silva */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex items-center gap-4 mb-4">
              <div className="avatar placeholder">
                <div className="bg-neutral-focus text-neutral-content rounded-full w-12 h-12 flex items-center justify-center">
                  <span className="text-lg">JS</span>
                </div>
              </div>
              <div>
                <p className="font-semibold">João Silva</p>
                <div className="rating rating-sm rating-half">
                  {[...Array(10)].map((_, i) => (
                    <input
                      key={i}
                      type="radio"
                      name="rating-joao"
                      className={`bg-yellow-400 mask mask-star-2 ${
                        i % 2 === 0 ? "mask-half-1" : "mask-half-2"
                      }`}
                      defaultChecked={i === 7}
                    />
                  ))}
                </div>
              </div>
            </div>
            <p>
              “Foi uma experiência incrível! As atividades são super seguras e
              divertidas. Recomendo para toda a família. Com certeza voltarei!”
            </p>
          </div>
        </div>

        {/* Maria Oliveira */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex items-center gap-4 mb-4">
              <div className="avatar placeholder">
                <div className="bg-neutral-focus text-neutral-content rounded-full w-12 h-12 flex items-center justify-center">
                  <span className="text-lg">MO</span>
                </div>
              </div>
              <div>
                <p className="font-semibold">Maria Oliveira</p>
                <div className="rating rating-sm rating-half">
                  {[...Array(10)].map((_, i) => (
                    <input
                      key={i}
                      type="radio"
                      name="rating-maria"
                      className={`bg-yellow-400 mask mask-star-2 ${
                        i % 2 === 0 ? "mask-half-1" : "mask-half-2"
                      }`}
                      defaultChecked={i === 6}
                    />
                  ))}
                </div>
              </div>
            </div>
            <p>
              “A atividade de escalada foi desafiadora, mas me senti super
              segura o tempo todo. Valeu cada momento!”
            </p>
          </div>
        </div>

        {/* Felipe Almeida */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex items-center gap-4 mb-4">
              <div className="avatar placeholder">
                <div className="bg-neutral-focus text-neutral-content rounded-full w-12 h-12 flex items-center justify-center">
                  <span className="text-lg">FA</span>
                </div>
              </div>
              <div>
                <p className="font-semibold">Felipe Almeida</p>
                <div className="rating rating-sm rating-half">
                  {[...Array(10)].map((_, i) => (
                    <input
                      key={i}
                      type="radio"
                      name="rating-felipe"
                      className={`bg-yellow-400 mask mask-star-2 ${
                        i % 2 === 0 ? "mask-half-1" : "mask-half-2"
                      }`}
                      defaultChecked={i === 10}
                    />
                  ))}
                </div>
              </div>
            </div>
            <p>
              “Adorei a experiência na tirolesa! Foi muito emocionante e a vista
              lá de cima é maravilhosa. Com certeza vou voltar para fazer tudo
              de novo.”
            </p>
          </div>
        </div>

        {/* Avaliação genérica - já estava ok */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex items-center gap-4 mb-4">
              <div className="avatar placeholder">
                <div className="bg-neutral-focus text-neutral-content rounded-full w-12 h-12 flex items-center justify-center">
                  <span className="text-lg">MX</span>
                </div>
              </div>
              <div>
                <p className="font-semibold">Algum Nome</p>
                <div className="rating rating-sm rating-half">
                  {[...Array(10)].map((_, i) => (
                    <input
                      key={i}
                      type="radio"
                      name="rating-mx"
                      className={`bg-yellow-400 mask mask-star-2 ${
                        i % 2 === 0 ? "mask-half-1" : "mask-half-2"
                      }`}
                      defaultChecked={i === 8}
                    />
                  ))}
                </div>
              </div>
            </div>
            <p>
              “A experiência de Airsoft foi muito divertida, desafiadora e cheia
              de adrenalina! Uma ótima atividade para quem gosta de ação e
              estratégia.”
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
