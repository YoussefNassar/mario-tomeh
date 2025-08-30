import './App.css'
import Navbar from "./components/navbar.tsx";
import Hero from "./components/hero.tsx";
import Skills from "./components/skills.tsx";
import Resume from "./components/resume.tsx";

function App() {
    return (
        <>
        <Navbar/>
        <div className="py-5 px-10 max-w-7xl mx-auto">
            <Hero/>
            <Skills/>
            <Resume/>
        </div>
        </>
    )
}

export default App
