import {
  connect_four,
  dogwalk,
  final_project,
  pokedex,
  prestige,
  log_in_form,
  pixelPerfect,
} from "../assets/images/projects/index.js";

const projects = {
  project7: {
    name: "Prestige Care NY",
    description:
      "A webiste redesign for a Long Island based landscaping company.",
    image: `${prestige}`,
    link: "https://654146cba952f84fc33be4f5--prestige-care.netlify.app/",
  },
  project6: {
    name: "Log In Form",
    description:
      "This is a simple log in form that I created to practice using Node.js, Next.js, Express, Prisma.io and PostgreSQl.",
    image: `${log_in_form}`,
    link: "https://log-in-form-444.netlify.app/",
  },
  project5: {
    name: "Pixel Perfect Recreation",
    description:
      "Using Figma Design Guideline, I recreated a website design to practice my CSS skills. The orignal design was given by my mentor and I was tasked with recreating the design as precision as possible.",
    image: `${pixelPerfect}`,
    link: "https://mockk-portfolio.netlify.app",
  },
  project4: {
    name: "Neighbor My Dog",
    description:
      "This concept website is for a dog walking service that I created to help practice using Redux-Saga in my web applications.",
    image: `${dogwalk}`,
    link: "https://neighbormydog.netlify.app",
  },
  project3: {
    name: "Foodie",
    description:
      "For my final project at General Assembly, I created a recipe search app using React and the Spoonacular API. The app allows users to search for recipes by name, ingredients, or cuisine type using a query search on the endpoint(URL).",
    image: `${final_project}`,
    link: "https://foodie-recipes484.netlify.app",
  },
  project2: {
    name: "Pokedex",
    description:
      "This is a Pokedex app that I created using React and the PokeAPI. A simple API that returns Pokemon data when a GET request is made.",
    image: `${pokedex}`,
    link: "https://65011c33cb503c21ede77516--newpokedexp-484.netlify.app/",
  },
  project1: {
    name: "Connect Four Game",
    description:
      "The classic game of Connect Four. With this project, Every user move the game board is checked for a winner using the same game rules.",
    image: `${connect_four}`,
    link: "https://6505112c3e04040008cd90a9--connect4-cj484.netlify.app/",
  },
};

export default projects;
