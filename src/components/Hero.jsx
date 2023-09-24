import Image from "../assets/er_headshot_rounded.png";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 lg:text-6xl sm:text-5xl text-4xl font-extrabold">
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            maxime, quae dicta non corporis molestias et impedit hic eligendi
            voluptate mollitia commodi voluptatem obcaecati. Excepturi inventore
            consequatur quia delectus tempore.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">
              Hire Me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 text-white met">
                Schedule A Call
              </span>
            </button>
          </div>
        </div>

        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-gradient-to-br from-blue-500 via-purple-500 w-[325px] h-[325px] lg:w-[400px] lg:h-[400px] relative">
            <img
              src={Image}
              alt="Elli's headshot"
              style={{ width: "300px", height: "300px" }}
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
