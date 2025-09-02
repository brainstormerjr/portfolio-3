"use client";
import { useState, useEffect } from "react";

import { CodeBlock, solarizedDark } from "react-code-blocks";
import ExperienceCard from "./experienceCard";
import { ExperienceProps } from "./experienceCard";

export default function About() {
  const [workExperiences, setWorkExperiences] = useState<{
    experiences: ExperienceProps[];
  }>({ experiences: [] });

  const [otherExperiences, setOtherExperiences] = useState<{
    experiences: ExperienceProps[];
  }>({ experiences: [] });

  const [education, setEducation] = useState<{
    education: ExperienceProps[];
  }>({ education: [] });

  const selfIntro = `
// Who am I? Oh where to begin. I am a:
let harold = [
  "Full Stack Engineer", // In the context of web dev.
  "Software Developer", // Game and web dev.
  "Designer", // I have a passion for UI/UX and game design.

  // The following skills may not be relevant to the job.
  "Comic Artist",
  "Speed-Cuber",
  "Badminton Player"

  // And more!
  "Innovator",
  "Entrepreneur",
  "Philosopher",
  "Free thinker",
  "Child prodigy",
  "Big brain genius",
  "A perfect person in every way",
  "Not arrogant at all"
];
// Note the use of let instead of const ;)
`;

  useEffect(() => {
    fetch(
      `${
        process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:3002"
      }/work-experiences`
    )
      .then((response) => response.json())
      .then((data) => setWorkExperiences(data));

    fetch(
      `${
        process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:3002"
      }/other-experiences`
    )
      .then((response) => response.json())
      .then((data) => setOtherExperiences(data));

    fetch(
      `${
        process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:3002"
      }/education`
    )
      .then((response) => response.json())
      .then((data) => setEducation(data));
  }, []);

  const isLoading =
    workExperiences.experiences.length === 0 &&
    otherExperiences.experiences.length === 0 &&
    education.education.length === 0;

  if (isLoading) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <div className="max-h-full">
      <section id="about" className="mb-30">
        <div className="font-normal mb-10">
          <CodeBlock
            text={selfIntro}
            language="js"
            showLineNumbers={true}
            theme={solarizedDark}
          />
        </div>
        <p className="mb-4">
          I{"'"}m a dedicated full-stack developer in my fourth year at{" "}
          <a
            href="https://hkust.edu.hk"
            target="_blank"
            className="text-white font-normal hover:text-emerald-200"
          >
            The Hong Kong University of Science and Technology
          </a>
          , pursuing a{" "}
          <a
            href="https://techmgmt.hkust.edu.hk/"
            target="_blank"
            className="text-white font-normal hover:text-emerald-200"
          >
            Dual Degree in Computer Science and Finance
          </a>
          . My passion is in software engineering, focusing on creating
          innovative solutions that enhance user experiences.
        </p>
        <p className="mb-4">
          With hands-on experience in both frontend and backend development at{" "}
          <a
            href="https://www.makethedot.com"
            target="_blank"
            className="text-white font-normal hover:text-emerald-200"
          >
            Make the Dot
          </a>
          , I have contributed to projects like a fitness rewards app and a
          collaborative canvas platform. My skills include React, Angular,
          Python, Apollo, and Prisma, allowing me to build robust applications
          that meet diverse user needs. I thrive in fast-paced environments and
          have honed my project management and teamwork skills through
          internships.
        </p>
        <p className="mb-4">
          I am eager to learn and adapt to new technologies, enjoying the
          challenge of solving complex problems. My participation in coding
          competitions such as{" "}
          <a
            href="https://www.linkedin.com/posts/harold-kwan_shareubs-morethanourselves-technology-activity-7247972176513884160-52EV?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEEK650BRg87TUIriQtoP-vRW4RXhfi9wYg"
            target="_blank"
            className="text-white font-normal hover:text-emerald-200"
          >
            UBS Coding Challenge 2024
          </a>{" "}
          and the{" "}
          <a
            href="https://gmtk.itch.io/"
            target="_blank"
            className="text-white font-normal hover:text-emerald-200"
          >
            GMTK Game Jams
          </a>{" "}
          has sharpened my algorithm development skills and ability to work
          under pressure.
        </p>
        <p className="mb-4">
          In my free time, I enjoy badminton, speedcubing, and multiplayer video
          games, which help me develop strategic thinking and teamwork
          abilities. I look forward to connecting with fellow developers and
          industry professionals. Feel free to explore my portfolio and reach
          out for collaboration!
        </p>
      </section>

      <section id="work-experience" className="mb-30">
        <h2 className="font-bold text-white text-xl mb-4">Work Experience</h2>
        <div className="flex flex-col gap-5">
          {workExperiences.experiences.map((e, i) => (
            <ExperienceCard
              start={e.start}
              end={e.end}
              location={e.location}
              role={e.role}
              name={e.name}
              description={e.description}
              tags={e.tags}
              key={i}
            />
          ))}
        </div>
      </section>

      <section id="other-experience" className="mb-30">
        <h2 className="font-bold text-white text-xl mb-4">Other Experiences</h2>
        <div className="flex flex-col gap-5">
          {otherExperiences.experiences.map((e, i) => (
            <ExperienceCard
              start={e.start}
              end={e.end}
              location={e.location}
              role={e.role}
              name={e.name}
              description={e.description}
              tags={e.tags}
              key={i}
            />
          ))}
        </div>
      </section>

      <section id="education" className="mb-30">
        <h2 className="font-bold text-white text-xl mb-4">Education</h2>
        <div className="flex flex-col gap-5">
          {education.education.map((e, i) => (
            <ExperienceCard
              start={e.start}
              end={e.end}
              location={e.location}
              role={e.role}
              name={e.name}
              description={e.description}
              tags={e.tags}
              key={i}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
