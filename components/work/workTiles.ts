export type WorkTile = {
  title: string;
  description: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
};

export const workTiles: WorkTile[] = [
  {
    description: `Here are things`,
    title: `I've worked on`,
    image: {
      src: "/static/images/AllThings.gif",
      width: 600,
      height: 770,
    },
  },
  {
    description: "I built",
    title: "Linkedin Web Client",
    image: {
      src: "/static/images/LinkedinWebClient.gif",
      width: 600,
      height: 554,
    },
  },
  {
    description: `I maintained`,
    title: "Aphex Planner",
    image: {
      src: "/static/images/planner-app.webp",
      width: 600,
      height: 717,
    },
  },
  {
    description: `I built`,
    title: "Aphex Publication",
    image: {
      src: "/static/images/publication-app.webp",
      width: 600,
      height: 717,
    },
  },
];
