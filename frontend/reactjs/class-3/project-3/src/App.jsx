import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchPhotos = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://picsum.photos/v2/list?page=${page}&limit=12`
      );
      setPhotos(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, [page]);

  return (
    <div className="min-h-screen bg-gray-600 from-black via-zinc-900 to-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-10 backdrop-blur bg-black/60 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-wide">Picsum Gallery</h1>
          <span className="text-sm text-gray-400">Page {page}</span>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        {loading ? (
          <div className="flex justify-center items-center h-[60vh]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-400"></div>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {photos.map((photo) => (
              <Card key={photo.id} elem={photo} />
            ))}
          </div>
        )}

        {/* Pagination */}
        <div className="flex justify-center items-center gap-6 mt-10">
          <button
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
            className="px-5 py-2 rounded-lg font-semibold bg-amber-400 text-black disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 transition"
          >
            Prev
          </button>
          <span className="text-sm text-gray-300">Page {page}</span>
          <button
            onClick={() => setPage((p) => p + 1)}
            className="px-5 py-2 rounded-lg font-semibold bg-amber-400 text-black active:scale-95 transition"
          >
            Next
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-xs text-gray-500 py-6">
        © {new Date().getFullYear()} Picsum Gallery · Built with React & Tailwind
      </footer>
    </div>
  );
};

export default App;