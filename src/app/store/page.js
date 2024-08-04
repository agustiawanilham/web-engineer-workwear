import Image from "next/image";
import Link from "next/link";
import { anonymousPro, dmMono, leagueSpartan } from "@/app/ui/fonts";
import Footer from "@/components/footer";
import LineWarning from "@/components/line-warning";

function HeaderHistory() {
  return (
    <header className="relative h-lvh">
      <Image
        src="/store-main.svg" // Replace with your image path
        alt="Background Image"
        layout="fill" // Fill the parent element
        objectFit="cover" // Cover the area
        className="z-0" // Behind other content
      />
      <div className="absolute inset-0 bg-black bg-opacity-10 z-10" />
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between z-20 relative">
        <h1
          className={`${leagueSpartan.className} text-[85px] sm:text-[60px] md:text-[70px] lg:text-[85px] font-extrabold text-yellow-2 leading-tight `}
        >
          ENGINEER
          <br />
          WORKWEAR
        </h1>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="text-center">
      <Image
        src="/hero.png"
        alt="Hero Image"
        width={1920}
        height={1080}
        className="w-full h-auto"
      />
    </section>
  );
}

function StoreMain() {
  return (
    <section id="store" className="bg-bg">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between z-20 relative">
        <h1
          className={`${leagueSpartan.className} text-[85px] sm:text-[60px] md:text-[70px] lg:text-[85px] font-extrabold text-white leading-tight `}
        >
          Store
        </h1>
        <div className="relative py-4">
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
                href="#contact"
              >
                Contact
              </Link>
              <Link
                className={`${leagueSpartan.className} text-[30px] sm:text-[20px] md:text-[25px] lg:text-[30px] hover:underline`}
                href="#product"
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
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between z-20 relative">
        <p
          className={`text-[24px] mb-4 w-1/2 text-justify font-light ${dmMono.className}`}
        >
          untuk toko kita ada sebuah toko offline, produk kita lebih
          mengutamakan pasar online agar produk bisa dikenal sekala satu
          indonesia hinnga mancanegara
        </p>
      </div>
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-end z-20 relative">
        <div className="flex space-x-8">
          <Image src="/shopee.svg" width={75} height={75} alt="Logo" />
          <Image src="/browse.svg" width={75} height={75} alt="Logo" />
          <Image src="/tokped.svg" width={75} height={75} alt="Logo" />
        </div>
      </div>
    </section>
  );
}

function Store2() {
  return (
    <section className="bg-primary-yellow py-10 ">
      <div className="h-[25rem] mx-auto py-6 sm:px-6 lg:px-8 mt-[3rem] flex justify-between items-center z-20 relative">
        <div className="absolute rounded-lg transform -translate-y-1/4">
          <Image
            src="/store-main-2.svg"
            width={1920}
            height={1080}
            className="w-full"
          />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1
          className={`${leagueSpartan.className} text-[85px] sm:text-[60px] md:text-[70px] lg:text-[85px] font-extrabold text-black leading-tight `}
        >
          Location
        </h1>
        <Image
          src="/store-map.svg"
          width={1920}
          height={1080}
          className="w-full"
        />
        <div className="py-4">
          <p
            className={`text-[36px] mb-4 w-1/2 text-justify text-black font-medium ${dmMono.className} leading-tight`}
          >
            Jalan Batik Kumeli No.40
            <br />
            RT RW 10/07, Sukaluyu,
            <br />
            Kec.Cibeunying Kaler,
            <br />
            Kota Bandung, Bandung 40123
          </p>
        </div>
      </div>
    </section>
  );
}

export default function Store() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderHistory />
      <LineWarning />
      <StoreMain />
      <LineWarning />
      <Store2 />
      <LineWarning />
      <Footer />
    </div>
  );
}
