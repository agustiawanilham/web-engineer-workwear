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
          src="/hero-product.svg"
          alt="Background Image"
          layout="fill" // Fill the parent element
          objectFit="cover" // Cover the area
          className="z-0" // Behind other content
        />
        <div className="flex items-center justify-start h-full z-20 relative">
          <div className="px-4">
            <div
              className={`${leagueSpartan.className} justify-start leading-none text-left text-[85px] sm:text-[60px] md:text-[70px] lg:text-[85px] font-extrabold text-white`}
            >
              SUMMER
              <br />
              SALE
            </div>
            <div>
              <button className="flex items-center justify-center px-4 py-2 bg-yellow-2 text-white rounded-full focus:outline-none">
                <p
                  className={`${leagueSpartan.className} text-[30px] sm:text-[20px] md:text-[25px] lg:text-[30px] hover:underline`}
                >
                  Order Now
                </p>
                <Image src="/arrow-right.svg" width={50} height={50} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Product() {
  return (
    <section className="bg-bg">
      <div className="p-12 text-white w-full pb-10 px-20">
        <h2
          className={`mb-4 ${leagueSpartan.className} text-[40px] font-extrabold`}
        >
          Product
        </h2>
        <div
          className="flex flex-wrap bg-primary-yellow p-4 my-8"
          style={{ overflowX: "auto" }}
        >
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4">
            <Image src="/item-1.svg" width={350} height={350} />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4">
            <Image src="/item-2.svg" width={350} height={350} />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4">
            <Image src="/item-3.svg" width={350} height={350} />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4">
            <Image src="/item-4.svg" width={350} height={350} />
          </div>
        </div>
        <div
          className="flex flex-wrap bg-primary-yellow p-4 my-8"
          style={{ overflowX: "auto" }}
        >
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4">
            <Image src="/pants-1.svg" width={350} height={350} />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4">
            <Image src="/pants-2.svg" width={350} height={350} />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4">
            <Image src="/pants-3.svg" width={350} height={350} />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4">
            <Image src="/pants-4.svg" width={350} height={350} />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image src="/arrow-down.svg" width={50} height={5} />
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
      <Product />
      <LineWarning />
      <Footer />
    </div>
  );
}
