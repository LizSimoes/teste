"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import arrow from "../images/arrow.png";
import Image from "next/image";
import computer from "../images/computer.jpg";

export default function Contact() {
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
            href="/"
            className="text-gray-800 hover:text-gray-400 duration-300"
          >
            Sobre mim
          </a>
          <a
            href="/contact"
            className="text-gray-800 font-bold hover:text-gray-400 duration-300"
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
              href="/about-me"
              className="text-gray-800  hover:text-gray-400 duration-300"
              onClick={() => setOpen(false)}
            >
              Sobre mim
            </a>
            <a
              href="/contact"
              className="text-gray-800 font-bold hover:text-gray-400 duration-300"
              onClick={() => setOpen(false)}
            >
              Contato
            </a>
          </div>
        )}
      </nav>

      <header className="flex items-center justify-center mt-40 mb-30">
        <h1 className="max-w-3xl text-5xl font-extrabold text-center text-gray-800">
          Entre em contacto
        </h1>
      </header>

      <section className="flex flex-col-reverse md:flex-row items-center md:items-start justify-center gap-10 md:gap-20 px-4 md:px-20 pb-32">
        <div className="max-w-xl w-full space-y-4 text-center md:text-left">
          <h1 className="text-2xl font-bold text-gray-800">Miguel Pereira</h1>
          <h2 className="text-lg text-gray-600">demo@webnode.com</h2>

          <p className="text-gray-600 leading-relaxed">
            Este é o lugar onde o seu texto começa. Pode clicar aqui e começar a
            digitar. Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem accusantium doloremque laudantium totam rem.
          </p>

          <form className="space-y-10 mt-10 w-full max-w-md mx-auto md:mx-0">
            <div className="relative flex flex-col">
              <input
                type="text"
                className="peer border-b border-gray-300 focus:border-blue-500 text-gray-800 bg-transparent outline-none py-2"
                required
              />
              <label
                className="
          absolute left-0 
          text-gray-600 
          transition-all duration-200 
          peer-focus:-top-3 peer-focus:text-blue-500 peer-focus:text-sm 
          peer-valid:-top-3 peer-valid:text-sm peer-valid:text-blue-500
        "
              >
                Nome *
              </label>
            </div>

            <div className="relative flex flex-col">
              <input
                type="email"
                className="peer border-b border-gray-300 focus:border-blue-500 text-gray-800 bg-transparent outline-none py-2"
                required
              />
              <label
                className="
          absolute left-0 
          text-gray-600 
          transition-all duration-200 
          peer-focus:-top-3 peer-focus:text-blue-500 peer-focus:text-sm
          peer-valid:-top-3 peer-valid:text-sm peer-valid:text-blue-500
        "
              >
                E-mail *
              </label>
            </div>

            <div className="relative flex flex-col">
              <input
                type="text"
                className="peer border-b border-gray-300 focus:border-blue-500 text-gray-800 bg-transparent outline-none py-2"
                required
              />
              <label
                className="
          absolute left-0
          text-gray-600 
          transition-all duration-200 
          peer-focus:-top-3 peer-focus:text-blue-500 peer-focus:text-sm
          peer-valid:-top-3 peer-valid:text-sm peer-valid:text-blue-500
        "
              >
                Mensagem
              </label>
            </div>

            <button
              type="submit"
              className="cursor-pointer text-gray-800 text-lg font-medium underline underline-offset-4 hover:text-gray-600 flex items-center justify-center md:justify-start gap-2"
            >
              Enviar
              <Image
                src={arrow}
                alt="Seta"
                width={20}
                height={20}
                className="inline-block max-w-3.5 "
              />
            </button>
          </form>
        </div>

        <Image
          src={computer}
          alt="Computador"
          className="rounded-xl shadow-sm w-full max-w-lg h-auto object-cover"
        />
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
