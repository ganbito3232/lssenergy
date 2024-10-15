

const photoMantencion = ({  dataaos, title, ruta,texto }) => {
  return (
    <div  data-aos={ dataaos} className="max-w-[270px] mt-[30px] lg:mx-[30px] mx-auto">
     
      <img
        src={ruta}
        alt="Foto"
        className="w-[150px] h-[110px] mx-auto object-cover object-center "
        loading="lazy"
      />
  
     
      <div className="text-center mt-4 italic">
        <h2 className="font-bold">{title}</h2>
        <p className="text-xs">{texto}</p>
      </div>
    </div>
  );
};

export default photoMantencion;




