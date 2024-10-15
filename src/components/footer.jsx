import "aos/dist/aos.css";

export default function Footer() {
  return (
    <>
      <div className="w-full h-auto relative hidden lg:block ">
        {/* Imagen de fondo */}
        <img
          src="1.png"
          alt="Imagen de fondo"
          className="absolute w-full h-full"
        />

        <div className="w-full h-auto relative">
          <svg
            data-aos="fade-up"
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="0"
            viewBox="0 0 7657 2169"
          >
            <path
              data-aos="fade-up"
              d="M2824 1737.74c-1240 269.6-2396.83-274-2822-579.5l0 1010h7655l0-2011.5c-513.2-100-2262.4 667.1-2833 948.5-570.6 281.4-1577.17 569.67-2000 632.5z"
              fill="#448030"
              stroke="black"
            />

            <path
              data-aos="fade-up"
              d="M6145.18 220.12c739.34-233.99 1311.27-241.61 1504.82-216.16l0 71.88c-524.54-88.63-2100.41 605.45-2523.16 793.75-422.75 188.3-756.29 335.34-953.12 410.19l-569.96 205.2c-357.57 100.48-924.46 240.95-1047.76 248.01c227.97-61.06 1309.13-480.99 1684.21-648.19c375.08-167.2 1165.63-630.7 1904.96-864.69z"
              fill="#87A11F"
              stroke="#87A11F"
            />

            {/* Texto sobre el área verde */}

            {/* Div que esté dentro del área verde */}
            <foreignObject y="1900" width="100%" height="500">
              <div className="text-white h-auto p-2 flex items-center justify-center">
                <img
                  src="whatsapp.png"
                  alt="WhatsApp"
                  className="w-[150px] h-full"
                />
                <div className="text-[100px] ml-8">+56 9 77988513</div>

                <img
                  src="mailer.png"
                  alt="Correo"
                  className="w-[150px] ml-32 h-full"
                />
                <div className="text-[100px] ml-8">
                  lssenergysolar@gmail.com
                </div>

                <img
                  src="instagram.png"
                  alt="Instagram"
                  className="w-[150px] h-full ml-32"
                />
                <div className="text-[100px] ml-8">@lss_energysolar</div>

                <img
                  src="ubicacion.png"
                  alt="Ubicación"
                  className="w-[150px] h-full ml-32"
                />
                <div className="text-[100px] ml-8">Calle Uno #850, Quilpué</div>
              </div>
            </foreignObject>
          </svg>
        </div>
      </div>

      <div className="text-white bg-green-700 w-full h-auto p-2 flex flex-col mt-[50px] sm:hidden md:hidden lg:hidden xl:hidden">
        <div className="mt-4 flex flex-col items-center mb-4">
          <img src="whatsapp.png" alt="WhatsApp" className="w-[20px] h-full" />
          <div className="text-auto mt-2">+56 9 77988513</div>
        </div>

        <div className="flex flex-col items-center mb-4">
          <img src="mailer.png" alt="Correo" className="w-[20px] h-full" />
          <div className="text-auto mt-2">lssenergysolar@gmail.com</div>
        </div>

        <div className="flex flex-col items-center mb-4">
          <img
            src="instagram.png"
            alt="Instagram"
            className="w-[20px] h-full"
          />
          <div className="text-auto mt-2">@lss_energysolar</div>
        </div>

        <div className="flex flex-col items-center mb-4">
          <img
            src="ubicacion.png"
            alt="Ubicación"
            className="w-[20px] h-full"
          />
          <div className="text-auto mt-2">Calle Uno #850, Quilpué</div>
        </div>
      </div>
    </>
  );
}
