import { Routes, Route } from "react-router-dom"

import Home from "../pages/Home"
import About from "../pages/About"
import Courses from "../pages/Courses"
import CourseDetail from "../pages/CourseDetail"
import Product from "../pages/Product"
import Men from "../pages/Men"
import Women from "../pages/Women"
import Kids from "../pages/Kids"
import NotFound from "../pages/NotFound"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/courses/:courseId" element={<CourseDetail />} />

      <Route path="/product" element={<Product />}>
        <Route path="men" element={<Men />} />
        <Route path="women" element={<Women />} />
        <Route path="kids" element={<Kids />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes
