import ProjectCard from "./ProjectCard";
import twitterShot from "../assets/twitter-shot.jpg";
import legalShot from "../assets/legal-shot.jpg";
import cuttingEdgeShot from "../assets/cuttingEdge-shot.jpg";

const projectsData = [
  {
    id: 1,
    title: "Twitter Birthday Plea",
    description:
      "Created a landing page for Canadian Centre for Child Protection while working at the agency No Fixed Address. The design was provided for me and I had to implement it using Vue.js and delivered in 3 weeks.",
    image: twitterShot,
    previewUrl: "https://birthdayplea.com/en/",
    gitUrl: "https://github.com/eraynai",
    tag: ["All", "Web"],
  },
  {
    id: 2,
    title: "Legal Simulation",
    description:
      "Created a quiz application for a Legal Simulation application that was created while I was working for Stitch Media. Built in React and deployed on AWS and delivered in 8 weeks.",
    image: legalShot,
    previewUrl: "https://modulearn.ca/",
    gitUrl: "https://github.com/eraynai",
    tag: ["All", "Web"],
  },
  {
    id: 3,
    title: "Cutting Edge Firewood",
    description:
      "While working at Acorn Strategy, I built several custom features for the Cutting Edge Firewood website including custom designed sections and implemented a geolocation api to only show certain products depending on what your zipcode is.",
    image: cuttingEdgeShot,
    previewUrl: "https://www.cuttingedgefirewood.com/",
    gitUrl: "https://github.com/eraynai",
    tag: ["All", "Shopify"],
  },
];

const Projects = () => {
  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4">
        Projects
      </h2>
      <div className="text-white flex flex-row justify-center gap-2 py-6">
        <button className="rounded-full border-2 border-purple-500 px-6 py-3 text-xl cursor-pointer">
          All
        </button>
        <button className="rounded-full border-2 hover:border-white  border-slate-600 px-6 py-3 text-xl cursor-pointer">
          Web
        </button>
        <button className="rounded-full border-2 hover:border-white border-slate-600 px-6 py-3 text-xl cursor-pointer">
          Shopify
        </button>
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            previewUrl={project.previewUrl}
            gitUrl={project.gitUrl}
          />
        ))}
      </div>
    </>
  );
};
export default Projects;
