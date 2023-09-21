import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#001440]" />
          <div
            className="w-1 sm:h-80 h-40"
            style={{ backgroundColor: "#001440" }}
          />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#001440]">Elli Raynai</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop tailored Shopify solutions{" "}
            <br className="sm:block hidden" /> for your success.
          </p>
        </div>
      </div>
      <ComputersCanvas />
    </section>
  );
};

export default Hero;