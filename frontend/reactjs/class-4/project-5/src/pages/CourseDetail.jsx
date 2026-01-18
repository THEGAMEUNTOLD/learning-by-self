import { useParams } from "react-router-dom"

const CourseDetail = () => {
  const { courseId } = useParams()

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-amber-400 mb-4">
        {courseId} Course
      </h1>
      <p className="text-gray-300">
        Detailed syllabus and learning roadmap for {courseId}.
      </p>
    </div>
  )
}

export default CourseDetail
