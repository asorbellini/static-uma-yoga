import HeroComponent from "../components/HeroComponent.jsx";
import logoNavakarana from "../assets/images/LogoNavakarana.png"
import FormazioniNVSummary from "../components/FormazioniNVSummary.jsx";
function FormazioniNV() {
  return (
    <>
    <div className="min-h-screen w-full bg-claro">
        <HeroComponent background="linear-gradient(135deg, #581414 0%, #921e1e 25%,  #a33c3c 50%, #b23d3d 75%, #b64c4c 100%)" mainColor="#581414" logo={logoNavakarana} title="FORMAZIONE DI NAVAKARAṆA VINYĀSA"
        subtitle="Partecipa all’unica formazione autorizzata di Navakaraṇa Vinyāsa in Italia" />
        <FormazioniNVSummary />  
    </div>
    </>
  );
}

export default FormazioniNV;