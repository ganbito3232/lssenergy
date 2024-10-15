import Aos from "aos";
import { useEffect } from "react";
import PhotoMantencion from "./component/photoMantencion";

export default function MantencionBody() {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Duración de las animaciones en milisegundos
    });
  }, []);
  return (
    <div className="relative mt-[100px] w-full  flex flex-col items-center italic">
      <img
        data-aos="fade-up"
        src="46.webp"
        alt="Fondo"
        className="w-full h-[150px] lg:h-[400px] opacity-90  object-cover object-center"
        loading="lazy"
      />

      <div className=" flex items-center justify-center lg:absolute top-[20%] bg-gray-500 bg-opacity-50 p-4 w-full  ">
        {/* Tu contenido de texto aquí */}
        <p data-aos="fade-up" className="text-white lg:text-[30px]">
          Garantiza el Óptimo Rendimiento de tu Inversión Solar
        </p>
      </div>

      <div className="flex lg:mx-[110px] flex-col items-center justify-center px-4 md:px-8 lg:px-16 italic">
        <div
          data-aos="fade-up"
          className="mt-4 md:mt-8 text-2xl md:text-3xl lg:text-4xl font-bold"
        >
          La Importancia de la Mantención Preventiva Anual
        </div>

        <div data-aos="fade-up" className="mt-2 md:mt-4">
          En nuestra empresa, no solo te ofrecemos la posibilidad de dar un paso
          hacia un futuro más sostenible con nuestros kits solares
          fotovoltaicos, sino que también estamos comprometidos en garantizar
          que tu inversión sea duradera y eficiente a lo largo del tiempo. Es
          por eso que te recomendamos encarecidamente considerar nuestra
          Mantención Preventiva Anual como un complemento esencial para tu
          sistema solar. Aquí te explicamos por qué esta decisión es beneficiosa
          para ti y tu inversión:
        </div>
      </div>

      <div data-aos="fade-up" className="mt-4 md:mt-12 flex flex-wrap ">
        <PhotoMantencion
          data-aos="fade-up"
          texto="Los sistemas solares fotovoltaicos son una
          inversión a largo plazo. Con el tiempo, la suciedad,
          el polvo, el desgaste y otros factores pueden
          afectar el rendimiento de tus paneles solares y
          otros componentes. Nuestra Mantención Preventiva
          asegura que tu sistema esté en óptimas
          condiciones, maximizando su eficiencia y
          generando la máxima cantidad de energía posible."
          ruta="mante1.PNG"
          title="Optimización del Rendimiento:"
        />
        <PhotoMantencion
          data-aos="fade-up"
          texto="Al programar un mantenimiento regular, aumentas
          la vida útil de tus componentes solares. Esto
          significa que tu inversión te beneficiará durante
          muchos más años, lo que a su vez aumentará tu
          retorno de inversión de manera eficiente y
          reduciendo tus gastos a lo largo del tiempo.
          No dejes al azar la eficiencia de tu sistema solar;
          elige la mantención preventiva y garantiza un
          rendimiento excepcional año tras año."
          ruta="mante2.PNG"
          title="Durabilidad y Longevidad:"
        />
        <PhotoMantencion
          data-aos="fade-up"
          texto="Durante la mantención anual, nuestros expertos
          examinarán minuciosamente tu sistema solar. Esto
          permite la identificación temprana de posibles
          problemas o desgastes, evitando costosas
          reparaciones mayores en el futuro."
          ruta="mante3.PNG"
          title="Identificación Temprana de Problemas:"
        />
      </div>

      <div data-aos="fade-up" className="mt-4 md:mt-12 flex flex-wrap">
        <PhotoMantencion
          data-aos="fade-up"
          texto="La seguridad es una prioridad, y un sistema solar
          en buen estado es un sistema seguro.
          La mantención anual garantiza que todos los
          componentes estén en condiciones óptimas
          y funcionando correctamente."
          ruta="mante4.png"
          title="Mayor Seguridad:"
        />
        <PhotoMantencion
          data-aos="fade-up"
          texto="En algunos casos, los fabricantes de equipos
          solares requieren un mantenimiento regular
          como parte de las condiciones de garantía.
          Al realizar la mantención, te aseguras de
          cumplir con estos requisitos, lo que puede ser
          fundamental en caso de reclamos de garantía."
          ruta="mante5.png"
          title="Cumplimiento de Garantías:"
        />
        <PhotoMantencion
          data-aos="fade-up"
          texto="Aunque la mantención preventiva tiene un costo
          inicial, te ayudará a evitar gastos mayores
          relacionados con reparaciones costosas o pérdida
          de eficiencia. Además, mantendrás tus facturas de
          electricidad bajas al garantizar que tu sistema esté
          funcionando en su punto máximo."
          ruta="mante6.png"
          title="Ahorro a Largo Plazo:"
        />
      </div>
    </div>
  );
}
