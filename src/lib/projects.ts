export type Project = {
  name: string;
  tags: string[];
  description: string;
  path: string;
  projectLink: string | undefined;
  githubLink: string | undefined;
  icon: string;
  iconSize: number;
  colour: string;
};

export const projects: Project[] = [
  {
    name: "Grately",
    tags: ["React Native", "Firebase"],
    description:
      "This is a mobile app made to be used as a gratitiude journal. It gives you a reminder every day to add in a log and at some later point, should be able to give you feedback about what you have been most grateful for",
    path: "grately",
    projectLink: undefined,
    githubLink: undefined,
    icon: "GratelyIcon",
    iconSize: 80,
    colour: "#ec65ad",
  },
  {
    name: "Chess",
    tags: ["web components API", "OOP"],
    description:
      "This is a simple chess game. It follows all the rules, with alternating turns, en passant, castling and not allowing certain moves that might put your king into check. In the future I would like to extend this to use websockets so that it can be played with other people",
    path: "chess",
    projectLink: "https://vanilla-js-chess-v1.netlify.app/",
    githubLink: "https://github.com/ADSmith-0/vanilla-js-chess",
    icon: "ChessIcon",
    iconSize: 65,
    colour: "#0cf",
  },
  {
    name: "Neovim config",
    tags: ["Lua", "Neovim", "Vim"],
    description:
      "This is my custom neovim config, based on the Primeagen's as well as LazyVim and TJ devries config. Constantly adding and tweaking it, the keybinds are all listed in the readme",
    path: "nvim-config",
    projectLink: undefined,
    githubLink: "https://github.com/ADSmith-0/Nvim-config",
    icon: "NeovimIcon",
    iconSize: 50,
    colour: "#2f0",
  },
  {
    name: "Portfolio Website",
    tags: ["Sveltekit", "Netlify"],
    description:
      "This is the website that you are currently using. It was made with Sveltekit and Lucide icons, with no other libraries involved. All styling and functionality is hand written HTML, CSS and JavaScript",
    path: "my-website",
    projectLink: "https://portfolio-website-adamsmith.netlify.app/",
    githubLink: "https://github.com/ADSmith-0/my-website",
    icon: "SvelteIcon",
    iconSize: 70,
    colour: "#f50",
  },
  {
    name: "Artist Network",
    tags: ["React", "Express", "Node.js", "Neo4j", "OAuth2.0"],
    description:
      "This app was designed to be able to recommend you music artists based on who you currently listen to. In the small alpha testing I did when it worked it was very successful, however the model doesn't really scale and it's difficult to host as it uses a graph database. I would really like to rewrite this at some point with better architecture",
    path: "artist-network",
    projectLink: undefined,
    githubLink: "https://github.com/ADSmith-0/Artist-Network",
    icon: "ArtistNetworkIcon",
    iconSize: 70,
    colour: "#fff",
  },
  {
    name: "JS Patterns",
    tags: ["JavaScript"],
    description:
      "This is a repo I have for saving JavaScript patterns that I enjoy using. Things such as asynchronous queues or fetch wrappers",
    path: "js-patterns",
    projectLink: undefined,
    githubLink: "https://github.com/ADSmith-0/test-js",
    icon: "JavaScriptIcon",
    iconSize: 50,
    colour: "#f0db4f",
  },
  {
    name: "Pokedex",
    tags: ["React, API"],
    description:
      "This was a technical assessment that I completed over the course of a weekend. Incomplete and unlikely to be finished, but I think it's a fun project nonetheless",
    path: "pokedex",
    projectLink: "https://pokedex001.netlify.app/",
    githubLink: "https://github.com/ADSmith-0/pokedex",
    icon: "PokedexIcon",
    iconSize: 70,
    colour: "#f00",
  },
  {
    name: "Traversy JS Challenges",
    tags: ["html"],
    description:
      "This is a set of challenges set by the Youtuber Traversy Media, it handles data structures, algorithms and lots more. My repo has all of my completed versions of the challenges inside",
    path: "traversy-js-challenges",
    projectLink: undefined,
    githubLink: "https://github.com/ADSmith-0/traversy-js-challenges",
    icon: "JavaScriptIcon",
    iconSize: 50,
    colour: "#f0db4f",
  },
];
