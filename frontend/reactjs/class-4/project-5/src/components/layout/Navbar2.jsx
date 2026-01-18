import { useNavigate } from "react-router-dom"

const Navbar2 = () => {
  const navigate = useNavigate()

  return (
    <div className="bg-cyan-800 py-3 flex justify-center gap-4 shadow">
      <button
        onClick={() => navigate("/")}
        className="bg-amber-500 text-black px-6 py-2 rounded-lg font-semibold hover:bg-amber-400 active:scale-95 transition"
      >
        Home
      </button>

      <button
        onClick={() => navigate(-1)}
        className="bg-amber-500 text-black px-6 py-2 rounded-lg font-semibold hover:bg-amber-400 active:scale-95 transition"
      >
        Back
      </button>

      <button
        onClick={() => navigate(1)}
        className="bg-amber-500 text-black px-6 py-2 rounded-lg font-semibold hover:bg-amber-400 active:scale-95 transition"
      >
        Next
      </button>
    </div>
  )
}

export default Navbar2
