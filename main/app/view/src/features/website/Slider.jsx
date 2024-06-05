import { useState } from "react"

export default function Slider() {
  const [activeImg, setActiveImg] = useState(1)

  const images = [
    { id: 1, src: "/assets/bus.png", alt: "Bus" },
    { id: 2, src: "/assets/man.png", alt: "Man" },
    { id: 3, src: "/assets/taxi.png", alt: "Taxi" },
  ]

  const handleRadioChange = (e) => {
    setActiveImg(parseInt(e.target.value))
  }

  return (
    <div className="my-5">
        <img
          src={images.find((image) => image.id === activeImg).src}
          alt={images.find((image) => image.id === activeImg).alt}
          className="mx-auto block"
        />
        <div className="mt-3 accent-black justify-center flex flex-row gap-5">
          {images.map((image) => (
            <label key={image.id}>
              <input
                type="radio"
                name="image"
                value={image.id}
                checked={activeImg === image.id}
                onChange={handleRadioChange}
              />
            </label>
          ))}
        </div>
    </div>
  )
}
