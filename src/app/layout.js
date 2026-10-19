import "./globals.css";

export const metadata = {
  title: "Fútbol Libre - Partidos de Fútbol y Canales Deportivos Online en Vivo",
  description: "Fútbol Libre TV HD permite consultar partidos en vivo de Argentina, México, Chile, Ecuador, Perú, Bolivia y Uruguay.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-white text-slate-800 antialiased">
        {children}
      </body>
    </html>
  );
}