import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import GithubIcon from "../assets/github-icon.svg";
import LinkedInIcon from "../assets/linkedin-icon.svg";

function Email() {
  const ref = useRef();

  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_2m0eu0j",
        "template_m9gqbvc",
        ref.current,
        "k3rU_KxM-V3BClkn0"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div>
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#adb7be] mb-4 max-w-md">
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <a
            href="https://github.com/eraynai"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={GithubIcon} alt="Github Icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/elliraynai/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedInIcon} alt="LinkedIn Icon" target="_blank" />
          </a>
        </div>
      </div>
      <div>
        <form ref={ref} onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your Email
            </label>
            <input
              required
              placeholder="jacob@google.com"
              name="email"
              className="bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="text-white block mb-2 text-sm font-medium"
            >
              Name
            </label>
            <input
              placeholder="Your Name"
              name="name"
              className="bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block mb-2 text-sm font-medium"
            >
              Message
            </label>
            <textarea
              placeholder="Let's talk about..."
              name="message"
              rows={10}
              className="bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
          <div className="text-white">
            {success &&
              "Your message has been sent. I'll get back to you shortly"}
          </div>
        </form>
      </div>
    </section>
  );
}
export default Email;
