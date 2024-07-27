import { useState } from "react"

import img1 from '../../../public/assets/bus.png'
import img2 from '../../../public/assets/man.png'
import img3 from '../../../public/assets/taxi.png'

export default function Slider() {
  const [activeImg, setActiveImg] = useState(1)

  const images = [
    { id: 1, src: img1, alt: "Bus" },
    { id: 2, src: img2, alt: "Man" },
    { id: 3, src: img3, alt: "Taxi" },
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
