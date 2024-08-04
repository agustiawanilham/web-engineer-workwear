import Image from "next/image";
import Link from "next/link";
import { anonymousPro, dmMono, leagueSpartan } from "@/app/ui/fonts";
import Footer from "@/components/footer";

function Header() {
  return (
    <header className="bg-primary-yellow text-black">
      <div className="mx-auto flex flex-col sm:flex-row justify-between py-4 px-4">
        <div className="flex items-center space-x-2">
          <h1
            className={`${leagueSpartan.className} text-[85px] sm:text-[60px] md:text-[70px] lg:text-[85px] font-extrabold text-black leading-tight `}
          >
            ENGINEER
            <br />
            WORKWEAR
          </h1>{" "}
        </div>
        <div className="relative bg-primary-yellow py-4">
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
              className="bg-black h-6 mt-2"
              style={{ width: "110%", position: "relative", left: "0" }}
            ></div>
          </div>
        </div>
      </div>
      <div className="bg-bg text-yellow-200 py-2 pl-4">
        <p
          className={`text-[50px] sm:text-[30px] md:text-[40px] lg:text-[50px] ${anonymousPro.className} text-[#FFD600]`}
        >
          “Safety with style”
        </p>
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

function LineWarning() {
  return (
    <Image
      src="/warning-line.png"
      alt="Hero Image"
      width={1920}
      height={50}
      className="w-full"
    />
  );
}

function AboutUs() {
  return (
    <section id="about" className="bg-bg">
      <div className="p-12 pr-36 bg-primary-yellow text-black w-full pb-[17rem]">
        <h2 className="mb-4 font-leagueSpartan text-[40px] font-extrabold">
          About Us
        </h2>
        <p className={`text-[20px] mb-4 font-light ${dmMono.className}`}>
          Engineer Workwear adalah Brand yang fokus mengembangkan Apparel yang
          dispesialisasikan untuk para Engineer dan anak teknik, hingga pekerja
          kasar lapangan. Engineer Workwear ingin mengajak para pekerja lapangan
          untuk lebih sadar tentang keselamatan kerja.
        </p>
        <p className={`text-[20px] mb-4 font-light ${dmMono.className}`}>
          Engineer Workwear membuat Apparel dengan standar industri dengan
          kualitas yang kuat dan bisa dipakai untuk bekerja.
        </p>
      </div>

      <div className="relative">
        <div className=" bg-bg w-full flex justify-center mt-[20rem] pb-[3rem]">
          <div className="absolute rounded-lg transform -translate-y-full">
            <div className="px-30">
              <Image
                src="/about-us.jpeg" // replace with your image path
                alt="Workwear"
                width={900}
                height={125}
                fill={false}
                style={{ objectFit: "contain" }}
                className="rounded-[134px]"
              />
              <p className={`text-[15px] py-4 ${dmMono.className} text-center`}>
                Dengan bangga mempersembahkan Apparel dengan bahan standar
                <br />
                industri yang membuat dirimu terlindungi dan tetap stylist.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <LineWarning />
      <AboutUs />
      <LineWarning />
      <Footer />
    </div>
  );
}
