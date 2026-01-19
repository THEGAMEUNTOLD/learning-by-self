import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur border-b border-zinc-800">
      <div className="flex justify-between items-center px-10 py-5">
        <Link to="/" className="text-2xl font-bold tracking-wide text-indigo-400">
          MediaSearch
        </Link>

        <div className="flex gap-4">
          {['/', '/collection'].map((path, i) => (
            <NavLink
              key={i}
              to={path}
              className={({ isActive }) =>
                `px-5 py-2 rounded-lg font-medium transition
                 ${isActive
                  ? 'bg-indigo-600 text-white'
                  : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'}`
              }
            >
              {path === '/' ? 'Search' : 'Collection'}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
