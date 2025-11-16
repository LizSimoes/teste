"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import arrow from "../images/arrow.png";
import Image from "next/image";
import person from "../images/person.png";

export default function AboutMe() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <nav className="fixed top-0 left-0 w-full bg-white z-50 flex items-center justify-between px-8 py-4 shadow-sm">
        <h1 className="text-2xl font-bold text-gray-800">Designer</h1>

        <div className="hidden md:flex gap-6">
          <a
            href="/"
            className="text-gray-800 hover:text-gray-400 duration-300"
          >
            Início
          </a>
          <a
            href="/about"
            className="text-gray-800 font-bold hover:text-gray-400 duration-300"
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

        {/* Ícone mobile */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menu Mobile */}
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

      <header className="flex items-center justify-center mt-40 mb-30">
        <h1 className="max-w-3xl text-5xl font-extrabold text-center text-gray-800">
          Um pouco sobre mim
        </h1>
      </header>

      <section className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10 md:gap-20 px-4 md:px-20 pb-32">
        <Image
          src={person}
          alt="Foto da pessoa"
          className="rounded-xl shadow-sm w-full max-w-sm md:max-w-[600px] h-auto object-cover"
        />

        <div className="max-w-xl space-y-6 text-center md:text-left">
          <p className="text-gray-600 leading-relaxed">
            Este é o lugar onde o seu texto começa. Pode clicar aqui e começar a
            digitar. Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem accusantium doloremque laudantium totam rem aperiam eaque
            ipsa quae ab illo inventore veritatis et quasi architecto beatae
            vitae dicta sunt explicabo nemo enim ipsam voluptatem quia voluptas
            sit aspernatur aut odit aut fugit sed quia consequuntur magni
            dolores eos qui.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium totam rem aperiam eaque ipsa quae
            ab illo inventore veritatis et quasi architecto beatae vitae dicta
            sunt explicabo nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit sed quia consequuntur magni.
          </p>

          <a
            href="/contact"
            className="text-gray-800 text-lg font-medium underline underline-offset-4 flex items-center justify-center md:justify-start gap-2"
          >
            Contacto
            <Image
              src={arrow}
              alt="Seta"
              width={20}
              height={20}
              className="inline-block max-w-3.5"
            />
          </a>
        </div>
      </section>

      <footer className="flex flex-col items-center justify-center w-full h-20 text-sm text-gray-500 bg-gray-100">
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
