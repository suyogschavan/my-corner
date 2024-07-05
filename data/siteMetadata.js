const siteMetadata = {
  title: "Suyog Chavan",
  author: "Suyog Chavan",
  headerTitle: "Suyog",
  description: "Software Developer at Aphex",
  language: "en-us",
  theme: "dark", // system, dark or light
  siteUrl: "https://suyog.tech",
  siteRepo: "#",
  siteLogo: "/static/images/logo.png",
  image: "/static/images/avatar.webp",
  socialBanner: "/static/images/twitter-card.png",
  email: "suyogschavan03@gmail.com",
  github: "https://github.com/suyogschavan",
  twitter: "https://x.com/SuyogAsus",
  facebook: "#",
  linkedin: "https://www.linkedin.com/in/suyogchavan/",
  spotify: "https://open.spotify.com/user/12162121994?si=e685b3546f414967",
  steam: "https://steamcommunity.com//",
  locale: "en-US",
  comment: {
    provider: "giscus",
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO || "",
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID || "",
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY || "",
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || "",
      mapping: "pathname",
      reactions: "1",
      metadata: "0",
      theme: "light",
      darkTheme: "transparent_dark",
      themeURL: "",
    },
  },
};

module.exports = siteMetadata;
