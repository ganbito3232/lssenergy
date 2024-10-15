const photo = ({ dataaos, title, ruta, texto }) => {
  return (
    <div data-aos={dataaos} className="max-w-[270px] mt-[20px] mx-auto">
      <img
        src={ruta}
        alt="Foto"
        className="w-[150px] h-[110px] mx-auto"
        loading="lazy"
      />
      <div className="text-center mt-4 italic">
        <h2 className="font-bold">{title}</h2>
        <p className="text-xs">{texto}</p>
      </div>
    </div>
  );
};

export default photo;
