"use client";

import Image from "next/image";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import ImageOne from "./images/image-one.jpg";
import ImageTwo from "./images/image-two.jpg";
import ImageThree from "./images/image-three.jpg";
import ImageFour from "./images/image-four.jpg";
import ImageFive from "./images/image-five.jpg";
import ImageSix from "./images/image-six.png";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <nav className="fixed top-0 left-0 w-full bg-white z-50 flex items-center justify-between px-8 py-4 shadow-sm">
        <h1 className="text-2xl font-bold text-gray-800">Designer</h1>
        <div className="hidden md:flex gap-6">
          <a
            href="/"
            className="text-gray-800 font-bold hover:text-gray-400 duration-300"
          >
            Início
          </a>
          <a
            href="/about-me"
            className="text-gray-800 hover:text-gray-400 duration-300"
          >
            Sobre mim
          </a>
          <a
            href="/contact"
            className="text-gray-800 hover:text-gray-400 duration-300"
          >
            Contato
          </a>
        </div>

        <button
          className="md:hidden text-gray-800"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        {open && (
          <div className="absolute top-16 left-0 w-full bg-white flex flex-col items-center py-6 gap-6 shadow-lg md:hidden">
            <a
              href="/"
              className="text-gray-800 hover:text-gray-400 duration-300"
              onClick={() => setOpen(false)}
            >
              Início
            </a>
            <a
              href="/about"
              className="text-gray-800 font-bold hover:text-gray-400 duration-300"
              onClick={() => setOpen(false)}
            >
              Sobre mim
            </a>
            <a
              href="/contact"
              className="text-gray-800 hover:text-gray-400 duration-300"
              onClick={() => setOpen(false)}
            >
              Contato
            </a>
          </div>
        )}
      </nav>

      <header className="flex items-center justify-center mt-45 mb-40">
        <h1 className="max-w-3xl text-5xl font-extrabold text-center text-gray-800">
          Olá, eu sou o Miguel Pereira. Crio desenhos gráficos com alma.
        </h1>
      </header>

      <section className="grid grid-cols-2 gap-6 px-10 mt-12">
        {[ImageOne, ImageTwo, ImageThree, ImageFour, ImageFive, ImageSix].map(
          (img, i) => (
            <div
              key={i}
              className="relative w-full h-[500px] overflow-hidden rounded-lg shadow-md group"
            >
              <Image
                src={img}
                alt={`Imagem ${i + 1}`}
                fill
                className="object-cover transition-transform duration-500 transform cursor-pointer group-hover:scale-110"
              />
            </div>
          )
        )}
      </section>

      <footer className="flex flex-col items-center justify-center w-full h-20 mt-20 text-sm text-gray-500 bg-gray-100">
        <h1>© 2025 Todos os direitos reservados</h1>
        <h2>
          Desenvolvido por{" "}
          <a
            href="https://www.webnode.com/pt/"
            className="underline decoration-gray-400 transition-colors hover:text-gray-700"
          >
            Webnode
          </a>{" "}
          .{" "}
          <a
            href="#"
            className="underline decoration-gray-400 transition-colors hover:text-gray-700"
          >
            Cookies
          </a>
        </h2>
      </footer>
    </div>
  );
}
