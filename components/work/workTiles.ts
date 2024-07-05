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
    title: `I'm good at`,
    image: {
      src: "/static/images/AllThings.gif",
      width: 600,
      height: 770,
    },
  },
  {
    description: "I'm good at ",
    title: "API Dev & Integration",
    image: {
      src: "/static/images/api.gif",
      width: 600,
      height: 554,
    },
  },
  {
    description: "I'm good at",
    title: "Web Automation",
    image: {
      src: "/static/images/LinkedinWebClient.gif",
      width: 600,
      height: 554,
    },
  },
  {
    description: `I'm good at`,
    title: "Web scrapping",
    image: {
      src: "/static/images/webscrapping.gif",
      width: 600,
      height: 717,
    },
  },
  {
    description: `I'm good at building`,
    title: "Web Extensions",
    image: {
      src: "/static/images/extensions.gif",
      width: 600,
      height: 717,
    },
  },
];
