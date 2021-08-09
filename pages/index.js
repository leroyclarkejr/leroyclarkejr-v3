import React from "react";

import Head from "next/head";
import Layout from "../components/Layout";
import HomeHero from "../components/HomeHero";
import Hr from "../components/Hr";

import { skills } from "../lib/skills";

export default function Home() {
  return (
    <Layout>
      <HomeHero />
      <Hr />
      <section id="about" className="pb-12">
        <div className="container flex justify-center mx-auto">
          <div className="max-w-lg">
            <h4 className="mb-6">
              👋🏾 I'm Leroy, a self taught Front-end Engineering living in New
              Jersey.
            </h4>
            <p className="mb-4">
              I ultimately learned ot coe because of my love for technology and
              appreciation for digital multimedia art. I want to work with
              creative people that want a website or application to go along
              with their creative personality and really speaks to what their
              brand is about. My goal is to give creativees a place where your
              fans and ollowers can find you latest content.{" "}
            </p>
            <p className="mb-4">
              I see web development as my opportunity to unleash my creativity
              while also challenging myself technically.
            </p>
            <p className="mb-4">
              Aside from web development my interests include fitness, music,
              personal finance, and entreprenuership.
            </p>
            <p className="mb-4">
              Pairing my coding skillset with my knowledge in brand strategy, UI
              design, SEO, I build modern, aesthetically pleasing websites for
              ambitious people and brands.
            </p>
          </div>
        </div>
      </section>
      {/* <Hr /> */}

      <section className="tech-stack">
        <div className="container mx-auto">
          <div className="heading flex justify-center max-w-lg mx-auto">
            <h3 className="mb-8">My Tech Stack</h3>
          </div>
          <div className="my-tech-stack flex justify-center">
            <ul className="max-w-lg flex justify-evenly flex-row flex-wrap">
              {skills.map((skill) => {
                return (
                  <li
                    key={skill.key}
                    className=" my-4 mx-4 flex-col justify-center items-center text-center"
                  >
                    {React.cloneElement(skill.icon, {
                      className: "icon w-16 max-h-16 mx-auto flex-grow mb-2",
                    })}
                    <p className="text-base">{skill.name}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}
