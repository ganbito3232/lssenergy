import Aos from "aos";
import { useEffect } from "react";

export default function OffGridBody() {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Duración de las animaciones en milisegundos
    });
  }, []);
  return (
    <div className="mt-[100px] w-full relative flex flex-col items-center italic lg:px-[74px]   ">
      <div className="lg:flex px-[20px] lg:px-0">
        <div className="w-full lg:w-1/2 lg:mt-2">
          <img
            data-aos="fade-up"
            src="16.webp"
            alt="Energía Solar"
            className="w-full h-[200px] lg:h-96 object-cover object-bottom"
            loading="lazy"
          />
        </div>
        <div className="w-full lg:w-1/2 lg:ml-8 mt-4 lg:mt-0">
          <p data-aos="fade-up" className="text-lg lg:text-xl font-bold">
            Energía Solar Offgrid
          </p>
          <p data-aos="fade-up" className="text-sm lg:text-base">
            Un kit fotovoltaico Offgrid, también conocido como sistema solar
            autónomo o in- dependiente, es un sistema de energía solar diseñado
            para generar electricidad mediante la conversión de la radiación
            solar en electricidad y almacenarla en baterías para su uso
            posterior, en lugar de estar conectado a la red eléctrica
            convencional. Estos sistemas son especialmente útiles en áreas
            remotas o en lu- gares donde la conexión a la red eléctrica no es
            una opción viable. Estos sistemas se componen principalmente de
            paneles solares fotovoltaicos, un inversor solar, Baterías,
            Controlador de Carga, Sistema de Distribución y otros componentes
            necesarios para su instalación.
          </p>
          <p data-aos="fade-up" className="lg:mt-2  text-sm lg:text-base">
            Los sistemas fotovoltaicos Offgrid son ideales en situaciones donde
            no hay acceso a la red eléctrica convencional, como en áreas
            rurales, cabañas, campa- mentos, refugios, y en aplicaciones
            especiales como sistemas de energía de res- paldo en caso de cortes
            de energía.
          </p>

          <p data-aos="fade-up" className="lg:mt-2 text-sm lg:text-base">
            Es importante destacar que, a diferencia de los sistemas Ongrid, los
            sistemas Offgrid no inyectan electricidad en la red y no generan
            créditos en la factura de electricidad. En su lugar, dependen
            completamente de la energía almacenada en las baterías.{" "}
          </p>
        </div>
      </div>
      <div className="mt-[30px] mb-[30px] w-full ">
        <div className="md:mt-4">
          <img
            data-aos="fade-up"
            src="kitoffgrid.webp"
            alt="Imagen"
            loading="lazy"
            className="w-full  h-auto"
          />
        </div>
      </div>
    </div>
  );
}
