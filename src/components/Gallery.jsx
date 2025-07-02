function Gallery() {
  return (
    <section id="gallery" className="py-16 px-4 bg-arena text-center">
      <h3 className="text-3xl font-serif mb-4">Galería</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <img
            key={n}
            src={`/gallery${n}.jpg`}
            alt={`Imagen ${n}`}
            className="rounded shadow"
          />
        ))}
      </div>
    </section>
  );
}

export default Gallery;