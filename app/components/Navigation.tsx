"use client";
//Next
import Image from "next/image";
import Link from "next/link";
// Logo import
import Logo from "../../public/ori-pics/oriole-logo.png";
// Icons
import { RiFacebookFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";

const Navigation = () => {
  const mainNav = [
    "about",
    "reservations",
    "beverage",
    "contact",
    "events",
    "loft",
  ];
  const botNav = ["f.a.q", "careers"];
  return (
    <nav className="max-w-[14rem] fixed">
      <div>
        <Link href="/">
          <Image src={Logo} alt="Oriole Logo" width={225} />
        </Link>
      </div>
      <div className="flex flex-col">
        <ul className="capitalize text-[.81rem] space-y-2 pt-8 tracking-widest text-[#1F1F1F]">
          {mainNav.map((word: string, index: number) => (
            <li key={index} className="hover:text-gray-400">
              <Link href={`${word}`}>{word}</Link>
            </li>
          ))}
        </ul>
        <ul className="capitalize text-[.68rem] mt-0 italic pb-16 space-y-2 pt-8 tracking-widest text-[#1F1F1F]">
          {botNav.map((word: string, index: number) => (
            <li key={index} className="hover:text-gray-400">
              <Link href={`${word}`}>{word}</Link>
            </li>
          ))}
        </ul>
        <ul className="flex space-x-2 items-center hover:opacity-70">
          <li>
            <Link
              href="https://www.facebook.com/oriolechicago/?ref=aymt_homepage_panel"
              target="_blank"
            >
              <RiFacebookFill
                fill="#8b8b8b"
                size={18}
                className="hover:fill-[#666]"
              />
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/oriolechi" target="_blank">
              <FaInstagram
                fill="#8b8b8b"
                size={16}
                className="hover:fill-[#666]"
              />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
