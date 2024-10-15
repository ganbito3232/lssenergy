import Aos from "aos";
import { useEffect } from "react";

export default function HibridoGridBody() {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Duración de las animaciones en milisegundos
    });
  }, []);
  return (
    <div className="mt-[100px] w-full relative flex flex-col items-center italic lg:px-[74px]  ">
      <div className="lg:flex  px-[20px] lg:px-0">
        <div className="w-full lg:w-1/2 lg:mt-2">
          <img
            data-aos="fade-up"
            src="hibrido.webp"
            alt="Energía Solar"
            className="w-full h-[200px] lg:h-96 object-cover object-bottom"
            loading="lazy"
          />
        </div>
        <div className="w-full lg:w-1/2 lg:ml-8 mt-4 lg:mt-0">
          <p data-aos="fade-up" className="text-lg lg:text-xl font-bold">
            Energía Solar Híbrido
          </p>
          <p data-aos="fade-up" className="text-sm lg:text-base">
            Un kit fotovoltaico híbrido es un sistema de energía solar que
            combina caracte- rísticas de los sistemas fotovoltaicos Ongrid
            (conectados a la red eléctrica) y Offgrid (autónomos o
            independientes) para ofrecer una solución energética más versátil y
            eficiente. Estos sistemas son particularmente adecuados para
            aquellos que desean aprovechar al máximo la energía solar y, al
            mismo tiempo, tener un respaldo de energía en caso de cortes de
            energía o para maximizar la autosufi- ciencia energética.{" "}
          </p>
          <p data-aos="fade-up" className="lg:mt-2  text-sm lg:text-base">
            Las principales características de un sistema fotovoltaico híbrido
            son: Paneles Solares Fotovoltaicos, Inversor Solar Híbrido,
            Baterías, Medidor Bidireccional y Co- nexión a la Red Eléctrica.{" "}
          </p>

          <p data-aos="fade-up" className="lg:mt-2 text-sm lg:text-base">
            Los sistemas fotovoltaicos híbridos ofrecen una mayor flexibilidad y
            confiabilidad en comparación con los sistemas puramente Ongrid o
            Offgrid. Te permiten apro- vechar la energía solar para reducir tus
            facturas de electricidad y contribuir a la sostenibilidad, al mismo
            tiempo que te brindan un suministro de energía ininte- rrumpido en
            caso de cortes de energía. Esto los convierte en una opción
            atractiva para muchas personas que desean lo mejor de ambos mundos
            en términos de energía solar.{" "}
          </p>
        </div>
      </div>
      <div className="mt-[30px] mb-[30px] w-full lg:flex lg:flex-col">
        <div className="lg:w-full mt-2 lg:mt-4">
          <img
            data-aos="fade-up"
            src="3erkit.webp"
            alt="Imagen"
            className="w-full h-auto"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
