import Image from "../assets/er_headshot_rounded.png";
import { TypeAnimation } from "react-type-animation";

const scrollToSection = (sectionId) => {
  const section = document.querySelector("#" + sectionId); // Add '#' before the sectionId
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
const Hero = () => {
  return (
    <section className="lg:py-16 ">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
          <h1 className="text-white mb-4 lg:text-8xl lg:leading-normal sm:text-5xl text-4xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-pink-600 ">
              Hello I'm,{" "}
            </span>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Elli",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "a Full Stack Developer",
                1000,
                "a Shopify Expert",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#adb7be] text-base sm:text-lg mb-6 lg:text-xl sm:mr-5">
            Coding with Passion, Developing with Purpose.
          </p>
          <div>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </button>
            <a
              href="https://cal.com/eraynai"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3">
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 text-white met">
                  Schedule A Call
                </span>
              </button>
            </a>
          </div>
        </div>

        <div className="col-span-4 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-gradient-to-br from-blue-500 via-purple-500 w-[275px] h-[275px] lg:w-[300px] lg:h-[300px] relative">
            <img
              src={Image}
              alt="Elli's headshot"
              style={{ width: "250px", height: "250px" }}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// bg-[#181818]
export default Hero;
