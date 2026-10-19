// src/components/AgendaSection.jsx
"use client";

import { useState, useEffect, useRef } from "react";

export default function AgendaSection() {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("todos");
  const [openMatchId, setOpenMatchId] = useState(null);
  const [modalData, setModalData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formattedDate, setFormattedDate] = useState("");
  
  const playerContainerRef = useRef(null);

  useEffect(() => {
    // Current date in Spanish format
    const today = new Date();
    const options = { weekday: "long", day: "numeric", month: "long" };
    const dateStr = today.toLocaleDateString("es-ES", options);
    const capitalizedDate = dateStr.charAt(0).toUpperCase() + dateStr.slice(1);
    setFormattedDate(capitalizedDate);

    // Fetch agenda data
    fetch("/api/agenda")
      .then((res) => res.json())
      .then((data) => {
        if (data.events) {
          setEvents(data.events);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching agenda:", err);
        setLoading(false);
      });
  }, []);

  // Fullscreen trigger function
  const toggleFullscreen = () => {
    if (playerContainerRef.current) {
      if (!document.fullscreenElement) {
        playerContainerRef.current.requestFullscreen().catch((err) => {
          console.error(`Error enabling fullscreen: ${err.message}`);
        });
      } else {
        document.exitFullscreen();
      }
    }
  };

  const categories = ["todos", ...new Set(events.map((e) => e.sport.toLowerCase()))];

  const filteredEvents = events.filter((e) => {
    const matchesCategory = filter === "todos" || e.sport.toLowerCase() === filter;
    const matchesSearch = e.title.toLowerCase().includes(search.toLowerCase().trim());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="agenda" className="mb-5">
      {/* Date Header */}
      <div className="rounded-t-lg bg-gradient-to-r from-emerald-800 to-green-700 p-2.5 text-center text-white shadow-md">
        <h2 className="text-base font-bold">
          📅 Agenda deportiva - {formattedDate || "Cargando fecha..."}
        </h2>
      </div>

      {/* Search & Filter Bar */}
      <div className="mb-4 mt-3 flex items-center gap-2.5">
        <input
          type="text"
          placeholder="Buscar por evento…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 rounded-md border border-gray-300 p-2.5 text-sm outline-none focus:border-emerald-600"
        />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="flex-1 rounded-md border border-gray-300 bg-white p-2.5 text-sm outline-none focus:border-emerald-600"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat === "todos" ? "Todas las categorías" : cat.toUpperCase()}
            </option>
          ))}
        </select>
      </div>

      {/* Matches List */}
      <ul className="min-h-[250px] rounded-b-lg bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1)] divide-y divide-gray-200">
        {loading ? (
          <li className="p-6 text-center text-gray-500 text-sm">Cargando agenda en tiempo real...</li>
        ) : filteredEvents.length === 0 ? (
          <li className="p-6 text-center text-gray-500 text-sm">No hay partidos disponibles.</li>
        ) : (
          filteredEvents.map((event) => {
            const isOpen = openMatchId === event.id;
            return (
              <li key={event.id} className="border-b border-gray-200 last:border-0">
                <button
                  onClick={() => setOpenMatchId(isOpen ? null : event.id)}
                  className="flex w-full items-center justify-between px-3 py-2.5 text-left text-sm text-gray-900 transition-colors hover:bg-emerald-700 hover:text-white"
                >
                  <span className="flex items-center gap-2">
                    <time className="w-12 text-center font-bold text-xs">{event.time}</time>
                    {event.flag && <img src={event.flag} alt="" className="h-4 w-5 object-cover rounded-sm" />}
                    <span className="ml-1 font-semibold">{event.title}</span>
                  </span>
                  <span className="ml-3 text-xs font-bold">{isOpen ? "▴" : "▾"}</span>
                </button>

                {/* Multiple Backup Players Dropdown */}
                {isOpen && (
                  <ul className="mb-2 ml-8 mr-4 border-l-2 border-emerald-200 pl-3 py-2 space-y-1.5 bg-gray-50 rounded-r-md">
                    <p className="text-[11px] font-bold text-gray-500 mb-1">Opciones de Reproducción:</p>
                    {event.embeds.map((embed, idx) => (
                      <li key={idx} className="flex items-center justify-between gap-2 py-1">
                        <button
                          onClick={() => setModalData({ title: `${event.title} - ${embed.name}`, url: embed.iframe })}
                          className="flex items-center gap-1.5 text-xs text-gray-700 transition-colors hover:text-emerald-700 font-semibold"
                        >
                          <span className="text-emerald-700">▶</span>
                          {embed.name}
                          {embed.lang && (
                            <span className="rounded bg-gray-200 px-1 py-0.5 text-[9px] text-gray-600">
                              {embed.lang}
                            </span>
                          )}
                        </button>
                        <a
                          href={`/reproducir/?url=${encodeURIComponent(embed.iframe)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-gray-500 hover:text-emerald-700 font-bold px-2 py-0.5 border border-gray-300 rounded bg-white"
                        >
                          Abrir externo ↗
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })
        )}
      </ul>

      {/* Improved Cinematic Modal Player */}
      {modalData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-3 md:p-6 backdrop-blur-sm">
          <div className="w-full max-w-4xl overflow-hidden rounded-2xl bg-gray-950 border border-gray-800 shadow-2xl flex flex-col">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between bg-gray-900/90 px-4 py-3 border-b border-gray-800 text-white">
              <span className="font-bold text-xs md:text-sm truncate max-w-[60%] md:max-w-[75%]">
                🔴 {modalData.title}
              </span>
              <div className="flex items-center gap-2">
                {/* Fullscreen Button */}
                <button
                  onClick={toggleFullscreen}
                  className="flex items-center gap-1 rounded-lg bg-gray-800 px-2.5 py-1.5 text-xs font-semibold hover:bg-emerald-700 text-gray-200 transition-colors"
                  title="Pantalla completa"
                >
                  ⛶ <span className="hidden sm:inline">Pantalla Completa</span>
                </button>

                {/* Close Button */}
                <button
                  onClick={() => setModalData(null)}
                  className="rounded-lg bg-red-600/80 px-3 py-1.5 text-xs font-bold hover:bg-red-600 text-white transition-colors"
                >
                  ✕ Cerrar
                </button>
              </div>
            </div>

            {/* Video Container (No Scrollbar, Screen Fit) */}
            <div ref={playerContainerRef} className="relative w-full aspect-video bg-black overflow-hidden flex items-center justify-center">
              <iframe
                src={modalData.url}
                className="w-full h-full border-0 overflow-hidden"
                scrolling="no"
                allowFullScreen
                allow="autoplay; encrypted-media; picture-in-picture; accelerometer; gyroscope"
              ></iframe>
            </div>

            {/* Modal Footer Bar */}
            <div className="bg-gray-900/90 p-3 text-center border-t border-gray-800 flex justify-center items-center gap-3">
              <button
                onClick={() => {
                  const iframe = document.querySelector("iframe");
                  if (iframe) iframe.src = iframe.src;
                }}
                className="rounded-full bg-emerald-700 px-5 py-2 font-bold text-white transition-colors hover:bg-emerald-800 text-xs shadow-lg flex items-center gap-1.5"
              >
                ↻ Recargar canal
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}