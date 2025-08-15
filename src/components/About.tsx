import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import profileImg from "../assets/profile.jpg";

const About: React.FC = () => {
  const about = useSelector((state: RootState) => state.profile.about) ?? "";
  const { name, title } = useSelector((state: RootState) => state.profile);
  if (!about) return null;

  const paragraphs = about
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <div id="about">
      <section className="hero" role="region" aria-label="Intro">
        <div className="hero-left">
          <h1 className="hero-title">
            Hi, I am <span className="hero-name">{name}</span>,<br />
            <span className="hero-subtitle">{title}</span>
          </h1>

          <p className="hero-desc">
            A Full Stack Developer building dynamic, scalable and user‑friendly
            web applications. Specializing in React, TypeScript, GraphQL and
            Micro Frontends.
          </p>

          <div className="hero-actions">
            <button className="btn-primary">Download Resume</button>
          </div>
        </div>

        <div className="hero-right" aria-hidden>
          <img src={profileImg} alt="Profile" className="profile-img" />
        </div>
      </section>
      <div className="max-w-3xl mx-auto p-6 my-8">
        {paragraphs.map((p, i) => (
          <p
            key={i}
            className="text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-3"
          >
            {p}
          </p>
        ))}
      </div>
    </div>
  );
};

export default About;
