import { Link } from "react-router-dom";

const Project = () => {
  return (
    <main className="pt-[80px] flex flex-col items-start justify-start gap-y-8">
      <header className="w-full">
        <h1 className="text-xl sm:text-2xl md:text-4xl font-semibold relative w-fit before:absolute before:w-full before:h-[4px] before:rounded-full before:top-full before:bg-light">
          Experience
        </h1>
      </header>
      <div className="w-full grid grid-cols-1 place-content-center place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <Link
          to={"https://petpal-nu.vercel.app/login"}
          className="min-w-[260px] sm:min-w-[300px] max-w-[300px] sm:max-w-[350px] h-[450px] rounded-lg bg-gray-200 p-[4px] group"
        >
          <figure className="w-full h-full bg-acceent rounded-lg group-hover:-rotate-3 group-hover:translate-y-2 group-hover:translate-x-2 transition-all overflow-hidden">
            <img src="/assets/petpal.png" alt="" />
            <h1 className="p-2 font-semibold text-2xl">Petpal App</h1>
            <p className="px-2 text-base font-normal">
              Petpal app adalah website yang menyediakan layanan kesehatan untuk
              hewan
            </p>
          </figure>
        </Link>
        <Link
          to={"https://apart-real.vercel.app/"}
          className="min-w-[260px] sm:min-w-[300px] max-w-[300px] sm:max-w-[350px] h-[450px] rounded-lg bg-gray-200 p-[4px] group"
        >
          <figure className="w-full h-full bg-acceent rounded-lg group-hover:-rotate-3 group-hover:translate-y-2 group-hover:translate-x-2 transition-all overflow-hidden">
            <img src="/assets/apartreal.png" alt="" />
            <h1 className="p-2 font-semibold text-2xl">Apartreal</h1>
            <p className="px-2 text-base font-normal">
              Apartreal adalah sebuah website template untuk menyediakan atau
              menyewakan apartment
            </p>
          </figure>
        </Link>
        <Link
          to={"https://movie-list-kopal.vercel.app/"}
          className="min-w-[260px] sm:min-w-[300px] max-w-[300px] sm:max-w-[350px] h-[450px] rounded-lg bg-gray-200 p-[4px] group"
        >
          <figure className="w-full h-full bg-acceent rounded-lg group-hover:-rotate-3 group-hover:translate-y-2 group-hover:translate-x-2 transition-all overflow-hidden">
            <img src="/assets/movie-list.png" alt="" />
            <h1 className="p-2 font-semibold text-2xl">Movie List</h1>
            <p className="px-2 text-base font-normal">
              Movie List adalah website yang menyediakan kumpulan film popular,
              terbaru, ataupun film yang akan tayang
            </p>
          </figure>
        </Link>
        <Link
          to={"https://tabungan-bersama.vercel.app/"}
          className="min-w-[260px] sm:min-w-[300px] max-w-[300px] sm:max-w-[350px] h-[450px] rounded-lg bg-gray-200 p-[4px] group"
        >
          <figure className="w-full h-full bg-acceent rounded-lg group-hover:-rotate-3 group-hover:translate-y-2 group-hover:translate-x-2 transition-all overflow-hidden">
            <img src="/public/assets/tabungan-bersama.png" alt="" />
            <h1 className="p-2 font-semibold text-2xl">Tabungan</h1>
            <p className="px-2 text-base font-normal">
              Ini adalah website yang memungkinkan anda bisa menabung dan
              mengelola tabungan anda, website ini terhubung dengan google
              spreadsheet
            </p>
          </figure>
        </Link>
      </div>
      {/* Buatkan di bawah sini */}
    </main>
  );
};

export default Project;
