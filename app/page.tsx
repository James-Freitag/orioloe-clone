import Image from "next/image";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <main className="max-w-[77rem] p-20 h-[200vh]">
      <Navigation />
    </main>
  );
}
