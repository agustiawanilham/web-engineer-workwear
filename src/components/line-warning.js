import Image from "next/image";

export default function () {
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
