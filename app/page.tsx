import Image from "next/image";
import homepageImage from "../public/ori-pics/home-pic.jpeg";

export default function Home() {
  return (
    <main className=" md:pl-64">
      <div className="flex justify-center items-center p-4">
        <Image
          src={homepageImage}
          alt="steak with flower"
          width={456}
          className="hover:bg-white/50"
        />
      </div>
    </main>
  );
}
