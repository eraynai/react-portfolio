import Image from "../assets/computer.jpg";
import { useTransition, useState } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Shopify",
    id: "shopify",
    content: (
      <ul>
        <li className="pb-4">
          Theme Development - Build a storefront on top of Shopify's native
          Online Store or enhance your existing theme.
        </li>
        <li className="pb-4">
          Advanced Storefronts - Seamlessly integrate with third-party tools and
          APIs.
        </li>
        <li className="pb-4">
          Optimization - Optimizing performance, SEO, and accessibility with a
          focus on Core Web Vitals and storefront a11y.
        </li>
        <li className="pb-4">
          Automation - Boost efficiency with custom automations, reducing manual
          tasks and errors.
        </li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul>
        <li className="pb-4">
          Acorn Strategy - March 2023 - September 2023 - Full Stack Developer
        </li>
        <li className="pb-4">
          Stitch Media - January 2023 - March 2023 - Full Stack Developer
        </li>
        <li className="pb-4">
          Armstrong Partnership - November 2021 - January 2023 - Frontend
          Developer
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul>
        <li className="pb-4">
          General Assembley Software Engineering Immersive Certificate - May
          2021 - August 2021
        </li>
        <li className="pb-4">
          George Brown College - Interaction Design and Developement Diploma -
          September 2018 - April 2021
        </li>
      </ul>
    ),
  },
];

const About = () => {
  const [tab, setTab] = useState("shopify");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <img src={Image} />
        <div className="mt-4 md:mt-0 text text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I am passionate about
            building e-commerce applications, specifically on the Shopify
            platform. I have experience working with JavaScript, React, Liquid,
            Node.js, Express, GraphQL, HTML, CSS, Git, and AWS.{" "}
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("shopify")}
              active={tab === "shopify"}
            >
              Shopify Services
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experience
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
