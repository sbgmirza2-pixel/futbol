// src/app/en-vivo/[channel]/page.js
"use client";

import { use, Suspense, useRef } from "react";
import Header from "../../components/Header";

function ChannelContent({ paramsPromise }) {
  const params = use(paramsPromise);
  const channelSlug = params.channel;
  const playerContainerRef = useRef(null);

  const channelData = {
    "directv-sports-online": { name: "DSports", url: "https://futbollibrefullhd.org/embed/eventos.html?r=aHR0cHM6Ly90dmY5MC5jb20vMS5waHA/c3RyZWFtPWZveHNvY2NlcnBsdXM=" },
    "directv-sports-2": { name: "DSports 2", url: "https://futbollibrefullhd.org/embed/eventos.html?r=aHR0cHM6Ly90dmY5MC5jb20vMS5waHA/c3RyZWFtPWZveHNvY2NlcnBsdXM=" },
    "directv-sports-plus-online": { name: "DSports Plus", url: "https://futbollibrefullhd.org/embed/eventos.html?r=aHR0cHM6Ly90dmY5MC5jb20vMS5waHA/c3RyZWFtPWZveHNvY2NlcnBsdXM=" },
    "espn-1": { name: "ESPN 1", url: "https://futbollibrefullhd.org/embed/eventos.html?r=aHR0cHM6Ly90dmY5MC5jb20vMS5waHA/c3RyZWFtPWZveHNvY2NlcnBsdXM=" },
    "espn-2": { name: "ESPN 2", url: "https://futbollibrefullhd.org/embed/eventos.html?r=aHR0cHM6Ly90dmY5MC5jb20vMS5waHA/c3RyZWFtPWZveHNvY2NlcnBsdXM=" },
    "espn-3": { name: "ESPN 3", url: "https://futbollibrefullhd.org/embed/eventos.html?r=aHR0cHM6Ly90dmY5MC5jb20vMS5waHA/c3RyZWFtPWZveHNvY2NlcnBsdXM=" },
    "fox-sports-1": { name: "Fox Sports 1", url: "https://futbollibrefullhd.org/embed/eventos.html?r=aHR0cHM6Ly90dmY5MC5jb20vMS5waHA/c3RyZWFtPWZveHNvY2NlcnBsdXM=" },
    "fox-sports-2": { name: "Fox Sports 2", url: "https://futbollibrefullhd.org/embed/eventos.html?r=aHR0cHM6Ly90dmY5MC5jb20vMS5waHA/c3RyZWFtPWZveHNvY2NlcnBsdXM=" },
    "fox-sports-3": { name: "Fox Sports 3", url: "https://futbollibrefullhd.org/embed/eventos.html?r=aHR0cHM6Ly90dmY5MC5jb20vMS5waHA/c3RyZWFtPWZveHNvY2NlcnBsdXM=" },
    "telemundo": { name: "Telemundo", url: "https://futbollibrefullhd.org/embed/eventos.html?r=aHR0cHM6Ly90dmY5MC5jb20vMS5waHA/c3RyZWFtPWZveHNvY2NlcnBsdXM=" }
  };

  const currentChannel = channelData[channelSlug] || {
    name: "Transmisión en Vivo",
    url: "https://futbollibrefullhd.org/embed/eventos.html?r=aHR0cHM6Ly90dmY5MC5jb20vMS5waHA/c3RyZWFtPWZveHNvY2NlcnBsdXM="
  };

  const toggleFullscreen = () => {
    if (playerContainerRef.current) {
      if (!document.fullscreenElement) {
        playerContainerRef.current.requestFullscreen().catch((err) => {
          console.error(err);
        });
      } else {
        document.exitFullscreen();
      }
    }
  };

  return (
    <main className="mx-auto w-[91.66%] max-w-4xl flex-1 py-6 flex flex-col justify-center">
      {/* Top Channel Bar with Local Logo */}
      <div className="mb-4 flex items-center justify-between bg-gray-900 px-4 py-3 rounded-xl border border-gray-800 text-white shadow-md">
        <div className="flex items-center gap-2.5">
          <img src="/logo.png" alt="Logo" className="h-6 w-auto object-contain" />
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </span>
          <span className="font-bold text-sm md:text-base">En Vivo: {currentChannel.name}</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleFullscreen}
            className="rounded-lg bg-gray-800 px-3 py-1.5 text-xs font-semibold hover:bg-emerald-700 text-gray-200 transition-colors"
          >
            ⛶ Pantalla Completa
          </button>
          <a
            href="/"
            className="rounded-lg bg-gray-800 px-3 py-1.5 text-xs font-semibold hover:bg-gray-700 text-gray-300 transition-colors"
          >
            ← Volver
          </a>
        </div>
      </div>

      {/* Single Clean Video Box */}
      <div ref={playerContainerRef} className="w-full aspect-video rounded-xl bg-black overflow-hidden shadow-2xl border border-gray-800 flex flex-col items-center justify-center relative">
        <iframe
          src={currentChannel.url}
          className="w-full h-full border-0 overflow-hidden"
          scrolling="no"
          allowFullScreen
          allow="autoplay; encrypted-media; picture-in-picture"
        ></iframe>
      </div>

      {/* Single Reload Button outside */}
      <div className="mt-4 text-center">
        <button
          onClick={() => {
            const iframe = document.querySelector("iframe");
            if (iframe) iframe.src = iframe.src;
          }}
          className="rounded-full bg-emerald-700 px-6 py-2.5 font-bold text-white text-xs transition-colors hover:bg-emerald-800 shadow-md"
        >
          ↻ Recargar canal
        </button>
      </div>
    </main>
  );
}

export default function ChannelPage({ params }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-950 text-white">
      <Header />
      <Suspense fallback={<div className="py-20 text-center text-gray-400">Cargando transmisión...</div>}>
        <ChannelContent paramsPromise={params} />
      </Suspense>
      <footer className="bg-gray-900 py-4 text-center text-xs text-gray-500">
        Fútbol Libre TV 2026 - Todos los derechos reservados
      </footer>
    </div>
  );
}