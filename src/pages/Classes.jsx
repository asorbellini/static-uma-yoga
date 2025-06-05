import Header from "../components/Header";

function Classes() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-stone-100">
        <Header />
        <section id="about" className="py-16 px-4 bg-neutral-100 text-center">
        <h3 className="text-3xl font-serif mb-4">Classi</h3>
        <p className="max-w-2xl mx-auto text-gray-700">
            UMĀ Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, culpa? Mollitia soluta blanditiis incidunt atque culpa magni sed dolores, fugiat earum corrupti! Voluptas deleniti voluptate assumenda ipsum vero repellendus quam!
        </p>
        </section>
    </div>
  );
}

export default Classes;