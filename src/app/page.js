// src/app/page.js
import Header from "./components/Header";
import AgendaSection from "./components/AgendaSection";
import { sportsChannels } from "../data/channels";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Header />

      <main className="mx-auto my-4 w-[91.66%] max-w-3xl flex-1 space-y-8">
        {/* SEO Header Info */}
        <section className="text-center md:text-left space-y-3">
          <h1 className="text-3xl md:text-4xl font-extrabold text-emerald-800">
            Fútbol Libre
          </h1>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            <strong>Fútbol Libre</strong> organiza la agenda futbolística diaria con horarios, torneos y señales deportivas para consultar los principales partidos desde un solo lugar.
          </p>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Encuentra información sobre el fútbol de <strong>Argentina</strong>, <strong>México</strong>, <strong>Ecuador</strong>, <strong>Chile</strong>, <strong>España</strong>, <strong>Uruguay</strong>, <strong>Bolivia</strong> y <strong>Perú</strong>, además de ligas internacionales y competiciones de clubes y selecciones.
          </p>
        </section>

        {/* Agenda Section Component */}
        <AgendaSection />

        {/* Channels Grid Section */}
        <section>
          <h2 className="mb-5 text-center text-2xl font-bold text-emerald-800">
            Canales deportivos en vivo
          </h2>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {sportsChannels.map((channel) => (
              <div
                key={channel.id}
                className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_10px_15px_rgba(0,0,0,0.08)] border border-gray-100 transition-transform duration-300 hover:scale-[1.02]"
              >
                <div className="flex h-44 items-center justify-center bg-gray-50 p-4">
                  <img
                    src={channel.image}
                    alt={channel.name}
                    loading="lazy"
                    className="h-32 w-auto object-contain"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="mb-1 text-lg font-bold text-gray-800">{channel.name}</h3>
                    <p className="mb-4 text-gray-600 text-xs leading-relaxed">{channel.desc}</p>
                  </div>
                  <a
                    href={channel.link}
                    className="inline-block text-center rounded-full bg-emerald-700 py-2 font-bold text-white text-xs transition-colors hover:bg-emerald-800"
                  >
                    Ver Canal
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Informative SEO Content */}
        <section className="space-y-6 pt-4 text-gray-700 text-sm md:text-base leading-relaxed border-t border-gray-100">
          <div className="space-y-2">
            <h2 className="text-xl font-bold text-emerald-800">Partidos de hoy en Fútbol Libre</h2>
            <p>
              <strong>Fútbol Libre</strong> organiza los <strong>partidos de hoy</strong> por horario, campeonato y canal deportivo. La agenda permite consultar encuentros de ligas nacionales, competiciones sudamericanas, torneos internacionales y partidos de selecciones.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-bold text-emerald-800">Fútbol Libre Argentina y México</h2>
            <p>
              En <strong>Fútbol Libre Argentina</strong> puedes revisar la programación de la Liga Profesional Argentina, Copa Argentina y clubes como Boca Juniors, River Plate y Racing. En la sección de <strong>México</strong>, consulta la Liga MX con equipos como América, Chivas, Cruz Azul y Pumas.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-bold text-emerald-800">Copa Libertadores y Sudamericana</h2>
            <p>
              Sigue la programación completa de la <strong>Copa Libertadores</strong> y la <strong>Copa Sudamericana</strong>, con fechas, horarios y canales deportivos actualizados.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-12 bg-gray-900 py-6 text-white text-center">
        <div className="mx-auto w-[91.66%] max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-bold text-sm">Fútbol Libre TV 2026</span>
          <ul className="flex gap-4 text-xs font-semibold">
            <li><a href="#" className="hover:text-emerald-400">Telegram</a></li>
            <li><a href="#" className="hover:text-emerald-400">Facebook</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}