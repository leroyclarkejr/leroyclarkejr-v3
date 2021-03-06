import React from "react";
import Link from "next/link";

import Layout from "../components/Layout";
import HomeHero from "../components/HomeHero";
import Hr from "../components/Hr";

// import { Text } from "../pages/blog/[id].js";
// import { getDatabase } from "../lib/notion";
import { skills } from "../lib/skills";

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Home({ posts }) {
  return (
    <>
      <HomeHero />
      <Hr />
      <section>
        {/* {posts.map((post) => {
          const date = new Date(post.last_edited_time).toLocaleString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
          });
          return (
            <li key={post.id}>
              <h3>
                <Link href={`/blog/${post.id}`}>
                  <a>
                    <Text text={post.properties.Name.title} />
                  </a>
                </Link>
              </h3>

              <p>{date}</p>
              <Link href={`/blog/${post.id}`}>
                <a> Read post →</a>
              </Link>
            </li>
          );
        })} */}
      </section>
      <section id="about" className="pb-12">
        <div className="container flex justify-center mx-auto">
          <div className="max-w-lg">
            <h4 className="mb-6">
              👋🏾 I'm Leroy, a self taught Front-end Engineer living in New
              Jersey.
            </h4>
            <p className="mb-4">
              I ultimately learned to code because of my love for technology and
              appreciation for digital multimedia art. I see web development as
              my opportunity to unleash my creativity while also challenging
              myself technically. Right now, I'm focused on building modern,
              aesthetically pleasing websites for ambitious people and brands.
              Check out my work, <Link href="/portfolio"> here</Link>.
            </p>
            <p className="mb-4">
              Aside from web development my interests include fitness, music,
              personal finance, and entreprenuership.
            </p>
            <p className="mb-4">
              <a href="mailto:hello@leroyclarkejr.com">Hit me up </a>if you're
              looking for a developer, have any questions, or just want to
              connect. ✌🏾
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
            <ul className="max-w-lg flex justify-center flex-row flex-wrap">
              {skills.map((skill) => {
                return (
                  <li
                    key={skill.key}
                    className=" my-4 mx-6 flex-col justify-center items-center text-center"
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
    </>
  );
}

// export const getStaticProps = async () => {
//   const database = await getDatabase(databaseId);
//   console.log(database[0]);
//   return {
//     props: {
//       posts: database,
//     },
//     revalidate: 1,
//   };
// };
