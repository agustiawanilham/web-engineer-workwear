import Image from "next/image";
import Link from "next/link";
import { anonymousPro, dmMono, leagueSpartan } from "@/app/ui/fonts";

function Header() {
  return (
    // <header className="flex justify-between items-center p-5 bg-[#F5E27A] text-white">
    <header className="bg-primary-yellow text-black">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-4">
          <h1
            className={`${leagueSpartan.className} text-[85px] font-extrabold text-black `}
          >
            ENGINEER
            <br />
            WORKWEAR
          </h1>
        </div>
        <nav className="flex space-x-6 text-white">
          <Link
            className="font-leagueSpartan text-xl hover:underline"
            href="#about"
          >
            About
          </Link>
          <Link
            className="font-leagueSpartan text-xl hover:underline"
            href="#history"
          >
            History
          </Link>
          <Link
            className="font-leagueSpartan text-xl hover:underline"
            href="#store"
          >
            Store
          </Link>
          <Link
            className="font-leagueSpartan text-xl hover:underline"
            href="#contact"
          >
            Contact
          </Link>
          <Link
            className="font-leagueSpartan text-xl hover:underline"
            href="#product"
          >
            Product
          </Link>
        </nav>
      </div>
      <div className="bg-bg text-yellow-200 py-2 pl-4">
        <p className={`text-[50px] ${anonymousPro.className} text-[#FFD600]`}>
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
    <section id="about" className="p-12 pr-36 bg-primary-yellow text-black">
      <div>
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
        <p className={`text-[20px] mb-4 font-light ${dmMono.className}`}>
          Dengan bangga mempersembahkan Apparel dengan bahan standar industri
          yang membuat dirimu terlindungi dan tetap stylish.
        </p>
      </div>
      <div>
        <div className="rounded-[134px] overflow-hidden shadow-lg mb-4">
          <Image
            src="/about-us.jpeg" // replace with your image path
            alt="Workwear"
            width={600}
            height={400}
            className="w-full h-auto"
          />
        </div>
        <p className="text-lg">
          Dengan bangga mempersembahkan Apparel dengan bahan standar industri
          yang membuat dirimu terlindungi dan tetap stylist.
        </p>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="p-5 bg-primary-yellow text-white text-center">
      <ul className="flex justify-center space-x-4 mb-4">
        <li>
          <Link href="#about">About us</Link>
        </li>
        <li>
          <Link href="#how-to-order">How to Order</Link>
        </li>
        <li>
          <Link href="#faq">FAQ</Link>
        </li>
        <li>
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
      <div>© 2024 ENGINEER WORKWEAR</div>
    </footer>
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
