import powerful from "../assets/undraw_powerful.svg";
import manage from "../assets/undraw_file_manager.svg";
import operations from "../assets/undraw_online_organizer.svg";
import study from "../assets/undraw_studying.svg";
import certificate from "../assets/undraw_certification.svg";

interface Object {
  title: string;
  location: string;
  info?: string[];
  img: string;
}

const experience: Object[] = [
  {
    title: "TRAINEE WEB DEVELOPMENT",
    location:
      " 09/2020 - 12/2020 | neue fische - School and Pool for Digital Talent",
    info: [
      "Intensiv-Coding-Bootcamp in Vollzeit 540 Stunden Programmierpraxis mit Eigenentwicklung einer Web App als Abschlussarbeit (digitales Gesellenstück)",
    ],
    img: `${powerful}`,
  },
  {
    title: "PROJEKTMANAGERIN",
    location: " 09/17 – 08/20 | tsd Technik-Sprachendienst, Köln",
    info: [
      "Kernaufgaben:",
      "Eigenständige Bearbeitung von Aufträgen sowie Koordination und Organisation von Übersetzungs- und Dolmetschprojekten",
      " Erstellung von Angeboten, Aufragsbestämgungen, Abrechnung",
      " Projektüberwachung und Prozessoptmierung ",
      "Täglicher Kundenkontakt, Kundenbesuche Arbeiten mit Tools, Dateihandling",
    ],
    img: `${manage}`,
  },
  {
    title: "Berufsbegleitendes Fernstudium Projektmanagement",
    location: "09/18 – 08/19 | ILS Institut für Lernsysteme GmbH",
    img: `${certificate}`,
  },
  {
    title: "OPERATIONS ASSISTANT",
    location: " 09/16 – 02/17 | Cactus Language, England",
    info: [
      "Kernaufgaben:",
      "Organisation von Sprachkursen Rekrutierung von Lehrern",
    ],
    img: `${operations}`,
  },
  {
    title: "PROJECT MANAGER",
    location: "08/15 – 02/16 | Stealth Translations, Nordirland",
    info: ["Kernaufgaben:", "Organisation von Übersetzungsprojekten"],
    img: `${manage}`,
  },
  {
    title: "B.A. Mehrsprachige Kommunikation",
    location: "09/13 – 08/17 | Technische Hochschule Köln",
    info: ["Schwerpunkt Kultur und Medien"],
    img: `${study}`,
  },
];

export default experience;
