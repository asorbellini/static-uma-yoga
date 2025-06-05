import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Classes from "./pages/Classes.jsx"
import NavakaranaVinyasa from "./pages/NavakaranaVinyasa.jsx"
import ContactUs from "./pages/ContactUs.jsx"
import RetreateWorkshop from "./pages/RetreateWorkshop.jsx"
import PersonalDetail from "./pages/PersonalDetail.jsx"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}/>
        <Route path="/about/:memberName" element={<PersonalDetail />}/>
        <Route path="/classes" element={<Classes />} />
        {/*<Route path="/classes/:nameClass" element={<ClassesDetail />} /> */}
        <Route path="/navakarana-vinyasa" element={<NavakaranaVinyasa />} />
        <Route path="/retreat-e-workshop" element={<RetreateWorkshop />} />
        <Route path="/contact-us" element={<ContactUs />} />  
        {/*<Route path="/press-e-media" element={<Press />} /> */}
        {/* <Route path="/events" element={<Events />} />        */}
      </Routes>
    </Router>
  )
}

export default App
