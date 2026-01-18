import { Link, Outlet } from "react-router-dom"

const Product = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex justify-center gap-8 border-b border-gray-700 pb-4 mb-6">
        <Link to="men" className="hover:text-amber-400">MEN</Link>
        <Link to="women" className="hover:text-amber-400">WOMEN</Link>
        <Link to="kids" className="hover:text-amber-400">KIDS</Link>
      </div>

      <Outlet />
    </div>
  )
}

export default Product
