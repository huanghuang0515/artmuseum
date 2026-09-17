import type { ExhibitionsContent } from "./types";

export const exhibitions: ExhibitionsContent = {
  hero: {
    badge: "CURRENT",
    title: "GIORGIO VASARI",
    subtitle: "The Book of Drawings. The Fate of a Legendary Collection",
    date: "31 March – 18 July 2022",
    img: "/assets/exhibitions-hero.jpg",
  },
  cards: [
    {
      title: "FROM AFAR",
      sub: "Travelling Materials and Objects",
      date: "22 September 2021 – 4 July 2022",
      img: "/assets/exh-card1.jpg",
      current: true,
    },
    {
      title: "L'OISEAU BLEU",
      sub: "The African Story of the Kings of Napata",
      date: "28 April – 25 July 2022",
      img: "/assets/exhibitions-detail.jpg",
      current: true,
    },
    {
      title: "YVES SAINT LAURENT",
      sub: "Edited by Mouna Mekouar and Stephan Janson",
      date: "29 January – 19 September 2022",
      img: "/assets/col2.jpg",
      current: true,
    },
  ],
  detailLabel: "THE QALISSO MUSEUM",
  details: [
    {
      title: "An Immersive Exhibition",
      date: "7 MARCH 2022",
      img: "/assets/story1.jpg",
      desc: "Her smile is the most famous on the planet: much spoken of, stolen, copied and reinterpreted, the Mona Lisa is an icon that has fascinated the world for nearly four centuries. Beyond fake mysteries and clichés, what does this portrait truly reveal? Find out at the Palais de la Bourse in Marseille.",
    },
    {
      title: "Delacroix and Nature",
      date: "7 FEBRUARY 2022",
      img: "/assets/exhibitions-detail.jpg",
      desc: "The 'Delacroix and Nature' exhibition invites you into the painter's last apartment and studio for a discovery of his ties to nature. Within the intimate setting of the museum and its charming garden, escape to a peaceful haven of nature at the heart of Paris.",
    },
  ],
};
