// src/app/api/agenda/route.js
import { NextResponse } from "next/server";

export async function GET() {
  const agendaData = {
    events: [
      {
        id: 1,
        time: "00:00",
        sport: "Fútbol",
        title: "Copa Mundial Femenina Sub-17 de la FIFA: Kenia vs China PR",
        flag: "https://flagcdn.com/w20/un.png",
        embeds: [{ name: "Opción 1", lang: "ESP", iframe: "https://futbollibrefullhd.org/embed/eventos.html?r=aHR0cHM6Ly90dmY5MC5jb20vMS5waHA/c3RyZWFtPWZveHNvY2NlcnBsdXM=" }]
      },
      {
        id: 2,
        time: "20:00",
        sport: "Fútbol",
        title: "Copa Mundial Femenina Sub-17 de la FIFA: España vs México",
        flag: "https://flagcdn.com/w20/es.png",
        embeds: [{ name: "Opción 1", lang: "ESP", iframe: "https://futbollibrefullhd.org/embed/eventos.html?r=aHR0cHM6Ly90dmY5MC5jb20vMS5waHA/c3RyZWFtPWZveHNvY2NlcnBsdXM=" }]
      },
      {
        id: 3,
        time: "20:05",
        sport: "Fútbol",
        title: "Pro League: Al-Fayha vs Al-Ahli",
        flag: "https://flagcdn.com/w20/sa.png",
        embeds: [{ name: "Opción 1", lang: "ESP", iframe: "https://futbollibrefullhd.org/embed/eventos.html?r=aHR0cHM6Ly90dmY5MC5jb20vMS5waHA/c3RyZWFtPWZveHNvY2NlcnBsdXM=" }]
      },
      {
        id: 4,
        time: "21:30",
        sport: "Fútbol",
        title: "Serie A: Monza vs Cagliari",
        flag: "https://flagcdn.com/w20/it.png",
        embeds: [{ name: "Opción 1", lang: "ITA", iframe: "https://futbollibrefullhd.org/embed/eventos.html?r=aHR0cHM6Ly90dmY5MC5jb20vMS5waHA/c3RyZWFtPWZveHNvY2NlcnBsdXM=" }]
      },
      {
        id: 5,
        time: "22:00",
        sport: "Fútbol",
        title: "Super Lig: Trabzonspor vs Beşiktaş",
        flag: "https://flagcdn.com/w20/tr.png",
        embeds: [{ name: "Opción 1", lang: "TUR", iframe: "https://futbollibrefullhd.org/embed/eventos.html?r=aHR0cHM6Ly90dmY5MC5jb20vMS5waHA/c3RyZWFtPWZveHNvY2NlcnBsdXM=" }]
      },
      {
        id: 6,
        time: "23:00",
        sport: "Fútbol",
        title: "Eerste Divisie: Utrecht II vs Roda JC",
        flag: "https://flagcdn.com/w20/nl.png",
        embeds: [{ name: "Opción 1", lang: "NED", iframe: "https://futbollibrefullhd.org/embed/eventos.html?r=aHR0cHM6Ly90dmY5MC5jb20vMS5waHA/c3RyZWFtPWZveHNvY2NlcnBsdXM=" }]
      },
      {
        id: 7,
        time: "23:00",
        sport: "Fútbol",
        title: "Copa Mundial Femenina Sub-17 de la FIFA: Estados Unidos vs Samoa",
        flag: "https://flagcdn.com/w20/us.png",
        embeds: [{ name: "Opción 1", lang: "ESP", iframe: "https://futbollibrefullhd.org/embed/eventos.html?r=aHR0cHM6Ly90dmY5MC5jb20vMS5waHA/c3RyZWFtPWZveHNvY2NlcnBsdXM=" }]
      },
      {
        id: 8,
        time: "23:00",
        sport: "Fútbol",
        title: "Eerste Divisie: PSV II vs Dordrecht",
        flag: "https://flagcdn.com/w20/nl.png",
        embeds: [{ name: "Opción 1", lang: "NED", iframe: "https://futbollibrefullhd.org/embed/eventos.html?r=aHR0cHM6Ly90dmY5MC5jb20vMS5waHA/c3RyZWFtPWZveHNvY2NlcnBsdXM=" }]
      },
      {
        id: 9,
        time: "23:00",
        sport: "Fútbol",
        title: "Copa Mundial Femenina Sub-17 de la FIFA: Australia vs Chile",
        flag: "https://flagcdn.com/w20/au.png",
        embeds: [{ name: "Opción 1", lang: "ESP", iframe: "https://futbollibrefullhd.org/embed/eventos.html?r=aHR0cHM6Ly90dmY5MC5jb20vMS5waHA/c3RyZWFtPWZveHNvY2NlcnBsdXM=" }]
      },
      {
        id: 10,
        time: "23:30",
        sport: "Fútbol",
        title: "LaLiga SmartBank: Celta de Vigo II vs Tenerife",
        flag: "https://flagcdn.com/w20/es.png",
        embeds: [{ name: "Opción 1", lang: "ESP", iframe: "https://futbollibrefullhd.org/embed/eventos.html?r=aHR0cHM6Ly90dmY5MC5jb20vMS5waHA/c3RyZWFtPWZveHNvY2NlcnBsdXM=" }]
      },
      {
        id: 11,
        time: "23:45",
        sport: "Fútbol",
        title: "Serie A: Parma vs Torino",
        flag: "https://flagcdn.com/w20/it.png",
        embeds: [{ name: "Opción 1", lang: "ITA", iframe: "https://futbollibrefullhd.org/embed/eventos.html?r=aHR0cHM6Ly90dmY5MC5jb20vMS5waHA/c3RyZWFtPWZveHNvY2NlcnBsdXM=" }]
      },
      {
        id: 12,
        time: "00:00",
        sport: "Fútbol",
        title: "Premier League: Tottenham Hotspur vs Coventry City",
        flag: "https://flagcdn.com/w20/gb-eng.png",
        embeds: [{ name: "Opción 1", lang: "ENG", iframe: "https://futbollibrefullhd.org/embed/eventos.html?r=aHR0cHM6Ly90dmY5MC5jb20vMS5waHA/c3RyZWFtPWZveHNvY2NlcnBsdXM=" }]
      },
      {
        id: 13,
        time: "00:00",
        sport: "Fútbol",
        title: "LaLiga: Getafe vs Rayo Vallecano",
        flag: "https://flagcdn.com/w20/es.png",
        embeds: [{ name: "Opción 1", lang: "ESP", iframe: "https://futbollibrefullhd.org/embed/eventos.html?r=aHR0cHM6Ly90dmY5MC5jb20vMS5waHA/c3RyZWFtPWZveHNvY2NlcnBsdXM=" }]
      },
      {
        id: 14,
        time: "01:00",
        sport: "Fútbol",
        title: "Copa Libertadores Femenina: Cruzeiro vs Bolivar",
        flag: "https://flagcdn.com/w20/br.png",
        embeds: [{ name: "Opción 1", lang: "ESP", iframe: "https://futbollibrefullhd.org/embed/eventos.html?r=aHR0cHM6Ly90dmY5MC5jb20vMS5waHA/c3RyZWFtPWZveHNvY2NlcnBsdXM=" }]
      },
      {
        id: 15,
        time: "01:00",
        sport: "Fútbol",
        title: "Copa Libertadores Femenina: Deportivo Cali vs Club Nacional de Football",
        flag: "https://flagcdn.com/w20/co.png",
        embeds: [{ name: "Opción 1", lang: "ESP", iframe: "https://futbollibrefullhd.org/embed/eventos.html?r=aHR0cHM6Ly90dmY5MC5jb20vMS5waHA/c3RyZWFtPWZveHNvY2NlcnBsdXM=" }]
      },
      {
        id: 16,
        time: "01:30",
        sport: "Fútbol",
        title: "Serie A: Mushuc Runa vs Orense",
        flag: "https://flagcdn.com/w20/ec.png",
        embeds: [{ name: "Opción 1", lang: "ESP", iframe: "https://futbollibrefullhd.org/embed/eventos.html?r=aHR0cHM6Ly90dmY5MC5jb20vMS5waHA/c3RyZWFtPWZveHNvY2NlcnBsdXM=" }]
      },
      {
        id: 17,
        time: "02:00",
        sport: "Otros",
        title: "MLB – Tampa Bay Rays vs. Cleveland Guardians",
        flag: "https://flagcdn.com/w20/us.png",
        embeds: [{ name: "Opción 1", lang: "ENG", iframe: "https://futbollibrefullhd.org/embed/eventos.html?r=aHR0cHM6Ly90dmY5MC5jb20vMS5waHA/c3RyZWFtPWZveHNvY2NlcnBsdXM=" }]
      },
      {
        id: 18,
        time: "03:00",
        sport: "Fútbol",
        title: "Liga Profesional: Newell's Old Boys vs Central Córdoba SdE",
        flag: "https://flagcdn.com/w20/ar.png",
        embeds: [{ name: "Opción 1", lang: "ESP", iframe: "https://futbollibrefullhd.org/embed/eventos.html?r=aHR0cHM6Ly90dmY5MC5jb20vMS5waHA/c3RyZWFtPWZveHNvY2NlcnBsdXM=" }]
      },
      {
        id: 19,
        time: "03:00",
        sport: "Fútbol",
        title: "Primera B: Unión Española vs Copiapó",
        flag: "https://flagcdn.com/w20/cl.png",
        embeds: [{ name: "Opción 1", lang: "ESP", iframe: "https://futbollibrefullhd.org/embed/eventos.html?r=aHR0cHM6Ly90dmY5MC5jb20vMS5waHA/c3RyZWFtPWZveHNvY2NlcnBsdXM=" }]
      },
      {
        id: 20,
        time: "03:00",
        sport: "Fútbol",
        title: "Liga Profesional: Sarmiento vs Barracas Central",
        flag: "https://flagcdn.com/w20/ar.png",
        embeds: [{ name: "Opción 1", lang: "ESP", iframe: "https://futbollibrefullhd.org/embed/eventos.html?r=aHR0cHM6Ly90dmY5MC5jb20vMS5waHA/c3RyZWFtPWZveHNvY2NlcnBsdXM=" }]
      },
      {
        id: 21,
        time: "04:00",
        sport: "Fútbol",
        title: "Primera División: Nacional vs Deportivo Maldonado",
        flag: "https://flagcdn.com/w20/uy.png",
        embeds: [{ name: "Opción 1", lang: "ESP", iframe: "https://futbollibrefullhd.org/embed/eventos.html?r=aHR0cHM6Ly90dmY5MC5jb20vMS5waHA/c3RyZWFtPWZveHNvY2NlcnBsdXM=" }]
      },
      {
        id: 22,
        time: "04:00",
        sport: "Fútbol",
        title: "Brasileirão: Corinthians vs Vitória",
        flag: "https://flagcdn.com/w20/br.png",
        embeds: [{ name: "Opción 1", lang: "POR", iframe: "https://futbollibrefullhd.org/embed/eventos.html?r=aHR0cHM6Ly90dmY5MC5jb20vMS5waHA/c3RyZWFtPWZveHNvY2NlcnBsdXM=" }]
      },
      {
        id: 23,
        time: "05:00",
        sport: "Otros",
        title: "NFL – San Francisco 49ers vs. Washington Commanders",
        flag: "https://flagcdn.com/w20/us.png",
        embeds: [{ name: "Opción 1", lang: "ENG", iframe: "https://futbollibrefullhd.org/embed/eventos.html?r=aHR0cHM6Ly90dmY5MC5jb20vMS5waHA/c3RyZWFtPWZveHNvY2NlcnBsdXM=" }]
      },
      {
        id: 24,
        time: "05:15",
        sport: "Fútbol",
        title: "Liga Profesional: Deportivo Riestra vs Unión Santa Fe",
        flag: "https://flagcdn.com/w20/ar.png",
        embeds: [{ name: "Opción 1", lang: "ESP", iframe: "https://futbollibrefullhd.org/embed/eventos.html?r=aHR0cHM6Ly90dmY5MC5jb20vMS5waHA/c3RyZWFtPWZveHNvY2NlcnBsdXM=" }]
      },
      {
        id: 25,
        time: "06:05",
        sport: "Fútbol",
        title: "Primera A: Deportivo Pasto vs Alianza",
        flag: "https://flagcdn.com/w20/co.png",
        embeds: [{ name: "Opción 1", lang: "ESP", iframe: "https://futbollibrefullhd.org/embed/eventos.html?r=aHR0cHM6Ly90dmY5MC5jb20vMS5waHA/c3RyZWFtPWZveHNvY2NlcnBsdXM=" }]
      },
      {
        id: 26,
        time: "07:00",
        sport: "Fútbol",
        title: "Primera División: Escorpiones Belén vs Puntarenas",
        flag: "https://flagcdn.com/w20/cr.png",
        embeds: [{ name: "Opción 1", lang: "ESP", iframe: "https://futbollibrefullhd.org/embed/eventos.html?r=aHR0cHM6Ly90dmY5MC5jb20vMS5waHA/c3RyZWFtPWZveHNvY2NlcnBsdXM=" }]
      }
    ]
  };

  return NextResponse.json(agendaData, { status: 200 });
}