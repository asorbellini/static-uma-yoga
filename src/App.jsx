import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Classes from "./pages/Classes.jsx"
import NavakaranaVinyasa from "./pages/NavakaranaVinyasa.jsx"
import ContactUs from "./pages/ContactUs.jsx"
import RetreateWorkshop from "./pages/RetreateWorkshop.jsx"
import MemberDetail from "./pages/MemberDetail.jsx"
import Anubhuti from "./pages/Anubhuti.jsx"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chi-siamo" element={<About />}/>
        <Route path="/chi-siamo/:memberName" element={<MemberDetail />}/>
        <Route path="/classi" element={<Classes />} />
        {/*<Route path="/classi/:nameClass" element={<ClassesDetail />} /> */}
        <Route path="/navakarana-vinyasa" element={<NavakaranaVinyasa />} />
        <Route path="/anubhuti" element={<Anubhuti />} />
        <Route path="/retreat-e-workshop" element={<RetreateWorkshop />} />
        <Route path="/contatti" element={<ContactUs />} />  
        {/*<Route path="/press-e-media" element={<Press />} /> */}
        {/* <Route path="/events" element={<Events />} />        */}
      </Routes>
    </Router>
  )
}

export default App
