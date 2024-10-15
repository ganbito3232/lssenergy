import NavBar from "./navBar";

const error404 = () => {
  return (
    <>
      <NavBar />
      <div className=" lg:mt-0 mt-[160px]">
        <img src="404.jpg" alt="Foto" className="w-full h-auto " />
      </div>
    </>
  );
};

export default error404;
