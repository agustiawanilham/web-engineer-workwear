import Image from "next/image";
import Link from "next/link";
import { anonymousPro, dmMono, leagueSpartan } from "@/app/ui/fonts";
import Footer from "@/components/footer";
import LineWarning from "@/components/line-warning";

function HeaderProduct() {
  return (
    <header className="bg-bg text-black">
      <div className="mx-auto flex flex-col sm:flex-row justify-between py-4 px-4">
        <div className="flex items-center space-x-2">
          <h1
            className={`${leagueSpartan.className} text-[85px] sm:text-[60px] md:text-[70px] lg:text-[85px] font-extrabold text-yellow-2 leading-tight `}
          >
            ENGINEER
            <br />
            WORKWEAR
          </h1>{" "}
        </div>
        <div className="relative bg-bg py-4">
          <div className="container mx-auto">
            <nav className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-white font-bold text-lg">
              <Link
                className={`${leagueSpartan.className} text-[30px] sm:text-[20px] md:text-[25px] lg:text-[30px] hover:underline`}
                href="/"
              >
                About
              </Link>
              <Link
                className={`${leagueSpartan.className} text-[30px] sm:text-[20px] md:text-[25px] lg:text-[30px] hover:underline`}
                href="/history"
              >
                History
              </Link>
              <Link
                className={`${leagueSpartan.className} text-[30px] sm:text-[20px] md:text-[25px] lg:text-[30px] hover:underline`}
                href="/store"
              >
                Store
              </Link>
              <Link
                className={`${leagueSpartan.className} text-[30px] sm:text-[20px] md:text-[25px] lg:text-[30px] hover:underline`}
                href="/contact"
              >
                Contact
              </Link>
              <Link
                className={`${leagueSpartan.className} text-[30px] sm:text-[20px] md:text-[25px] lg:text-[30px] hover:underline`}
                href="/product"
              >
                Product
              </Link>
            </nav>
          </div>
          <div className="relative">
            <div
              className="bg-yellow-2 h-6 mt-2"
              style={{ width: "110%", position: "relative", left: "0" }}
            ></div>
          </div>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="text-center">
      <div className="relative h-svh">
        <Image
          src="/about-us.jpeg"
          alt="Background Image"
          layout="fill" // Fill the parent element
          objectFit="cover" // Cover the area
          className="z-0" // Behind other content
        />
      </div>
    </section>
  );
}

function ContactUs() {
  return (
    <section id="about" className="bg-bg">
      <div className="p-12 py-44 pr-36 bg-bg text-black w-full pb-[17rem]">
        <h2 className="mb-4 font-leagueSpartan text-[40px] font-extrabold text-white">
          Contact Us
        </h2>
        <p
          className={`text-[36px] mb-4 font-light text-white ${dmMono.className}`}
        >
          untuk kebutuhan costumer service bisa langsung hubungi:
        </p>
        <p
          className={`text-[36px] mb-4 font-light text-white ${dmMono.className}`}
        >
          Jalan Batik Kumeli No.40 RT RW 10/07,
          <br />
          Sukaluyu, Kec.Cibeunying Kaler,
          <br />
          Kota Bandung, Bandung 40123
        </p>
        <p
          className={`text-[36px] py-4 mb-4 font-medium text-white ${dmMono.className}`}
        >
          +62 811-2354-433
        </p>
        <p
          className={`text-[36px] mb-4 font-medium text-white ${dmMono.className}`}
        >
          Jam Buka:
        </p>
        <p
          className={`text-[36px] mb-4 font-medium text-white ${dmMono.className}`}
        >
          Senin - Minggu
          <br />
          10 AM - 10 PM
        </p>
        <div className="max-w-7xl py-6 px-4 flex justify-start z-20 relative">
          <div className="flex space-x-8">
            <a
              href="https://api.whatsapp.com/send/?phone=628112354433&text=Hai+Kak.+Lihat+dari+Iklan,+ingin+Bertanya+Produknya+yaa%21%0A&type=phone_number&app_absent=0&utm_campaign=admin+cs&utm_source=linktree"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-yellow-2 p-2 rounded-full"
            >
              <Image src="/whatsapp.svg" width={75} height={75} alt="Logo" />
            </a>
            <a
              href="https://www.instagram.com/engineerworkwearstore/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-yellow-2 p-2 rounded-full"
            >
              <Image src="/instagram.svg" width={75} height={75} alt="Logo" />
            </a>

            <a
              href="mailto:nurdienfadli@gmail.com?subject=Bertanya%20Produk&body=Hai%20Kak.%20Ingin%20bertanya%20produk"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-yellow-2 p-2 rounded-full"
            >
              <Image src="/email.svg" width={75} height={75} alt="Logo" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderProduct />
      <Hero />
      <LineWarning />
      <ContactUs />
      <LineWarning />
      <Footer />
    </div>
  );
}
