import { Link } from "react-router-dom";
import Header from "../components/Header";

const Members = [
    {name: "Alba Muzzarelli", slug:"alba-muzzarelli"},
    {name: "Diletta Muzzarelli", slug:"diletta-muzzarelli"},
    {name: "Tiziano Sorbellini", slug:"tiziano-sorbellini"}
  ]

function About() {
  return (
    <div>
      <Header />
      <div className="relative h-screen flex items-center justify-center text-white">
          <div className="absolute inset-0 bg-[url('/images/homebg.png')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-black opacity-50">
            <div className="py-16 px-4 bg-neutral-100 text-center">
              <h3 className="text-3xl font-serif mb-4">Sobre UMĀ</h3>
              <p className="max-w-2xl mx-auto text-neutral-700">
                  UMĀ es un espacio dedicado a la práctica de yoga y bienestar espiritual. Nos enfocamos en brindar una experiencia serena y consciente para conectar cuerpo, mente y espíritu.
              </p>
            </div>
            <ul>
              {Members.map((m)=>(
                <li key={m.slug}>
                  <h1>{m.name}</h1>
                  <Link to={`/chi-siamo/${m.slug}`}>
                    <button className="bg-rose-600 text-white px-4 py-2 rounded">
                        Saber más
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
      </div>
    </div>
  );
}

export default About;
