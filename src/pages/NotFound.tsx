import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col items-center justify-center px-6 md:px-15">
      <h1 className="text-6xl md:text-8xl font-black text-center mb-4 md:mb-6">
        404
      </h1>
      <h2 className="text-lg md:text-2xl font-normal text-center text-emerald-200 mb-8 md:mb-12">
        Page not found
      </h2>
      <div
        className="w-fit px-4 py-2 flex items-center gap-3 cursor-pointer border-1 border-white relative group"
        onClick={() => navigate("/")}
      >
        <div className="absolute left-0 w-full h-0 group-hover:h-full bg-white -z-10 transition-all"></div>
        <FaArrowLeft className="group-hover:text-black transition-all" />
        <p className="group-hover:text-black transition-all">Home</p>
      </div>
    </div>
  );
}
