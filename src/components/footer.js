import Image from "next/image";
import Link from "next/link";

export default () => {
  return (
    <div className="bg-bg text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-3 md:mb-0">
          <ul>
            <li className="mb-2">
              <a
                href="#"
                className="relative hover:text-yellow-2 flex items-center text-[20px] font-light"
              >
                About us
                <span className="absolute left-0 bottom-[-4px] w-full border-b-2 border-yellow-2"></span>
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="relative hover:text-yellow-2 flex items-center text-[20px] font-light"
              >
                How to Order
                <span className="absolute left-0 bottom-[-4px] w-full border-b-2 border-yellow-2"></span>
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="relative hover:text-yellow-2 flex items-center text-[20px] font-light"
              >
                FAQ
                <span className="absolute left-0 bottom-[-4px] w-full border-b-2 border-yellow-2"></span>
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="relative hover:text-yellow-2 flex items-center text-[20px] font-light"
              >
                Contact
                <span className="absolute left-0 bottom-[-4px] w-full border-b-2 border-yellow-2"></span>
              </a>
            </li>
          </ul>
          <div className="">
            <p className="mt-4 flex items-center text-sm">
              <span className="text-yellow-2 mr-2">©</span> 2024 ENGINEER
              WORKWEAR
            </p>
          </div>
        </div>
        <div className="flex space-x-8">
          <Image src="/shopee.svg" width={40} height={30} alt="Logo" />
          <Image src="/browse.svg" width={40} height={30} alt="Logo" />
          <Image src="/tokped.svg" width={40} height={30} alt="Logo" />
        </div>
      </div>
    </div>
  );
};
