import { Link } from "react-router-dom"
import Nav from "../features/website/Nav"
import ImageSection from "../features/website/ImageSection"
import TextArea from "../features/website/TextArea"
import Slider from "../features/website/Slider"
import Footer from "../features/website/Footer"

export default function Website() {
  return (
    <div className="bg-white">
      <Nav />
      <section className="bg-gray-100 py-1">
        <h3 className="my-4 mr-5 text-balance text-3xl">حمل و نقل راحت تر</h3>

        <h3 className="my-4 mr-5 text-balance text-3xl">سریع تر و بهتر با</h3>
        <h3 className="my-4 mr-5 text-balance text-3xl">اور!</h3>
        <h4 className="my-4 mr-5 text-balance text-xl">
          حمل ونقل عمومی حوشمند
        </h4>
        <Link
          to="/"
          className="mx-auto mt-5 block w-1/2 rounded-lg bg-primary px-4 py-2 text-center"
        >
          ورود به اپلیکیشن
        </Link>
        <h4 className="my-4 mr-4 text-center text-lg">
          حمل و نقل شهر تو دستته!
        </h4>
      </section>
      <ImageSection>
        <img src="/assets/map.png" alt="aks" className="mx-auto block" />
      </ImageSection>
      <TextArea className="bg-white p-2">
        <h4 className="my-4 mr-5 text-xl">مسیریابی</h4>
        <p className="my-4 mr-5 text-balance">
          دارای قابلیت پیش‌بینی ترافیک و تاخیرات، اطلاعات، اطلاعات دقیق درباره
          خطوط حمل و نقل و نقشه های زنده مسیر است. کاربران می‌توانند به سرعت و
          با کارایی بالا، به مقصد خود برسند و سفری راحت و آسان را تجربه کنند.
        </p>
      </TextArea>
      <ImageSection>
        <img src="/assets/hand.png" alt="aks" className="mx-auto block" />
      </ImageSection>
      <TextArea className="bg-white p-2">
        <h4 className="my-4 mr-5 text-xl">صرفه جویی در زمان</h4>
        <p className="my-4 mr-5 text-balance">
          دارای قابلیت پیش‌بینی ترافیک و تاخیرات، اطلاعات دقیق درباره خطوط حمل و
          نقل و نقشه‌های زنده مسیر است. ، کاربران می‌توانند به سرعت و با کارایی
          بالا، به مقصد خود برسند و تجربه سفری راحت و آسان را تجربه کنند.
        </p>
      </TextArea>
      <ImageSection>
        <img src="/assets/phone.png" alt="aks" className="mx-auto block" />
      </ImageSection>
      <TextArea className="bg-white p-2">
        <h4 className="my-4 mr-5 text-xl">پرداخت هوشمند</h4>
        <p className="my-4 mr-5 text-balance">
          پرداخت با گوشی هوشمند و کارت‌های هوشمند، به شهروندان این امکان را
          می‌دهد که به سرعت و با راحتی، هزینه‌های سفر خود را پرداخت کنند و از
          تجربه سفری آسان و مطمئن لذت ببرند.
        </p>
      </TextArea>
      <ImageSection>
        <Slider />
        <img src="assets/app.png" alt="" className="blocl mx-auto mb-5" />
      </ImageSection>
      <Footer />
    </div>
  )
}
