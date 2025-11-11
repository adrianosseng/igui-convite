import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function App() {
  const perfil = {
    nome: "Convite Especial - iGUi Conceito Barreiras",
    descricao:
      "Você é nosso convidado VIP para o pré-lançamento da nova iGUi Conceito Barreiras! 💙\nVenha conhecer a loja, brindar conosco e viver essa nova experiência.",
    data: "📅 Sexta-feira, 22 de novembro de 2025 - 19h30",
    local: "📍 Av. Ahylon Macêdo, 2450 - Barreiras/BA",
    imagem: process.env.PUBLIC_URL + "/convite.png",
  };

  const links = [
    {
      nome: "Confirmar Presença no WhatsApp",
      url: "https://wa.me/5577999364498?text=Confirmo%20minha%20presença%20no%20pré-lançamento%20da%20iGUi%20Conceito%20Barreiras!",
      cor: "#25D366",
      icone: <FaWhatsapp size={26} color="white" />,
    },
    {
      nome: "Ver Localização no Google Maps",
      url: "https://maps.app.goo.gl/6yVbH7h4PQrrrF6E7",
      cor: "#4285F4",
      icone: (
        <img
          src={process.env.PUBLIC_URL + "/maps.png"}
          alt="Maps"
          style={{ width: 26, height: 26 }}
        />
      ),
    },
    {
      nome: "Seguir no Instagram",
      url: "https://www.instagram.com/iguiconceitobarreiras/",
      cor: "#E4405F",
      icone: <FaInstagram size={26} color="white" />,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-sky-200 to-sky-500 text-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-md w-full bg-white shadow-2xl rounded-2xl p-6"
      >
        <motion.img
          src={perfil.imagem}
          alt="Convite"
          className="w-40 h-40 object-cover rounded-full mx-auto border-4 border-sky-400"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        <h1 className="text-2xl font-bold text-sky-700 mt-4">{perfil.nome}</h1>
        <p className="text-gray-600 mt-3 whitespace-pre-line">{perfil.descricao}</p>
        <p className="text-gray-700 mt-4 font-semibold">{perfil.data}</p>
        <p className="text-gray-700 mb-6">{perfil.local}</p>

        <div className="space-y-3">
          {links.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-3 text-white font-semibold py-3 rounded-xl shadow-lg"
              style={{ backgroundColor: link.cor }}
            >
              {link.icone}
              {link.nome}
            </motion.a>
          ))}
        </div>

        <footer className="text-gray-400 text-sm mt-8">
          © 2025 iGUi Conceito Barreiras
        </footer>
      </motion.div>
    </div>
  );
}
