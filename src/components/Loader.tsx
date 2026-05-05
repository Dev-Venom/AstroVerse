export default function Loader() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-999">

      <div className="text-center">

        <div className="w-24 h-24 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-8"></div>

        <h1 className="text-4xl font-bold tracking-[0.3em] text-white">
          ASTROVERSE
        </h1>

        <p className="text-gray-400 mt-4 tracking-widest">
          Initializing Universe...
        </p>

      </div>

    </div>
  );
}