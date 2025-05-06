export default function GallerySection() {
  const galleryImages = [
    {
      src: "/assets/images/887A4523.JPG",
      alt: "Food Gallery - Paneer Tikka"
    },
    {
      src: "/assets/images/staffs.jpg",
      alt: "Food Gallery - Indian Food"
    },
    {
      src: "/assets/images/eating.jpg",
      alt: "Restaurant Interior"
    },
    {
      src: "/assets/images/intone.JPG",
      alt: "Food Gallery - Indian Dishes"
    },
    {
      src: "/assets/images/inttwo.jpg",
      alt: "Restaurant Interior - Dining Area"
    },
    {
      src: "/assets/images/intthree.jpg",
      alt: "Chef Cooking"
    },
    {
      src: "/assets/images/intfour.jpg",
      alt: "Food Gallery - Chicken Tikka Masala"
    },
    {
      src: "/assets/images/intfive.jpg",
      alt: "Restaurant Interior - Full View"
    }
  ];

  return (
    <section id="gallery" className="py-16 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">Our Gallery</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg max-w-4xl mx-auto text-gray-600">
            A glimpse into our restaurant atmosphere and delicious food.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg cursor-pointer">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
