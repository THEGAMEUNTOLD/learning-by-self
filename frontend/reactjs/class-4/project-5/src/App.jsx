import Navbar from "./components/layout/Navbar"
import Navbar2 from "./components/layout/Navbar2"
import Footer from "./components/layout/Footer"
import AppRoutes from "./routes/AppRoutes"

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 text-white">
      <Navbar />
      <Navbar2 />

      <main className="flex-1 px-6 py-8">
        <AppRoutes />
      </main>

      <Footer />
    </div>
  )
}

export default App
