import Aos from "aos";
import { useEffect } from "react";

export default function OnGridBody() {
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
            src="ongrid1.webp"
            alt="Energía Solar"
            className="w-full h-[200px] lg:h-96 object-cover object-center"
            loading="lazy"
          />
        </div>
        <div className="w-full lg:w-1/2 lg:ml-8 mt-4 lg:mt-0">
          <p data-aos="fade-up" className="text-lg lg:text-xl font-bold">
            Energía Solar Ongrid
          </p>
          <p data-aos="fade-up" className="text-sm lg:text-base">
            Kit fotovoltaico Ongrid (conectado a la red) es un sistema de
            radiación solar diseñado para generar electricidad mediante la
            conversión de la luz solar en electricidad, y luego suministrar esta
            electricidad directamente a la red eléctrica convencional de tu
            área. Estos sistemas se componen principalmente de paneles solares
            fotovoltaicos, un inversor solar, un medidor Bidireccional y otros
            componentes necesarios para su instalación.
          </p>
          <p data-aos="fade-up" className="text-sm lg:text-base">
            Los kits fotovoltaicos Ongrid son populares en áreas donde la red
            eléctrica está disponible y ofrecen varias ventajas, como la
            capacidad de reducir tus facturas de electricidad, obtener créditos
            por la electricidad generada en exceso y contribuir a la reducción
            de emisiones de carbono al utilizar energía limpia y renovable. Sin
            embargo, estos sistemas no proporcionan energía durante cortes de
            energía, ya que están diseñados para operar en sincronización con la
            red eléctrica convencional.
          </p>
        </div>
      </div>

      <div className="mt-[30px] mb-[30px] w-full lg:flex lg:flex-col">
        <div className="lg:w-full w-full lg:mt-4">
          <img
            data-aos="fade-up"
            src="1erkit.webp"
            alt="Imagen"
            className="w-full h-auto"
            loading="lazy"
          />
        </div>
        <div className="lg:w-full mt-2 lg:mt-4">
          <img
            data-aos="fade-up"
            src="ongrid2.webp"
            alt="Imagen"
            className="w-full h-auto"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
