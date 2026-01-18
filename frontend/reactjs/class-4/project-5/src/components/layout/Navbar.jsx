import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-cyan-900 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        <h1 className="text-2xl font-bold tracking-wide">Sheryians</h1>

        <div className="flex gap-8">
          <Link to="/" className="hover:text-amber-400 transition">Home</Link>
          <Link to="/about" className="hover:text-amber-400 transition">About</Link>
          <Link to="/courses" className="hover:text-amber-400 transition">Courses</Link>
          <Link to="/product" className="hover:text-amber-400 transition">Product</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
