"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const desktopImages = [
    "/ba.jpg",
    "/cb.jpg",
    "/dc.jpg",
    "/df.jpg",
    "/ed.jpg",
    "/gf.jpg",
  ];

  const mobileImages = [
    "/e.jpg",
    "/b.jpeg",
    "/c.jpg",
    "/ba.jpg",
    "/cb.jpg",
    "/dc.jpg",
    "/df.jpg",
    "/ed.jpg",
    "/gf.jpg",
  ];

  const nextImage = () => {
    if (desktopImages.length - 1 > currentImage) {
      setCurrentImage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (desktopImages.length - 1 > currentImage) {
        nextImage();
      } else {
        setCurrentImage(0);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <div className="container mx-auto px-4 my-5 lg:my-10 rounded w-[90vw]">
      <div className="h-56 md:h-72 w-full bg-slate-200 relative">
        {/** Desktop and tablet version */}
        <div className="hidden md:flex h-full w-full overflow-hidden">
          {desktopImages.map((imageURL, index) => (
            <div
              className="w-full h-full min-w-full min-h-full transition-all"
              key={index}
              style={{ transform: `translateX(-${currentImage * 100}%)` }}
            >
              <Image src={imageURL} priority height={0} width={0} sizes="100vw" className="w-full fit h-full" alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>

        {/** Mobile version */}
        <div className="flex h-full w-full overflow-hidden md:hidden">
          {mobileImages.map((imageURL, index) => (
            <div
              className="w-full h-full min-w-full min-h-full transition-all"
              key={index}
              style={{ transform: `translateX(-${currentImage * 100}%)` }}
            >
              <img src={imageURL} className="w-full h-full object-cover" alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
