import { Link } from "react-router-dom"

const Courses = () => {
  const courses = ["React", "Node", "MongoDB"]

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-amber-400 mb-6">Courses</h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {courses.map(course => (
          <Link
            key={course}
            to={`/courses/${course}`}
            className="bg-zinc-900 p-6 rounded-xl shadow hover:scale-105 transition"
          >
            <h2 className="text-xl font-semibold">{course}</h2>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Courses
