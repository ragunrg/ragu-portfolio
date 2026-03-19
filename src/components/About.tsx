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

  // download handler — place resume.pdf in /public (e.g. public/resume.pdf)
  const downloadResume = async () => {
    try {
      const url = "/Ragu_N_Resume_Final_v6.pdf";
      const response = await fetch(url);
      const blob = await response.blob();
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "Ragu_N_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);
    } catch (err) {
      console.error("Download error:", err);
      window.open("/Ragu_N_Resume_Final_v6.pdf", "_blank", "noopener");
    }
  };

  return (
    <div id="about">
      <section className="hero" aria-label="Intro">
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
            <button className="btn-primary" onClick={downloadResume}>
              Download Resume
            </button>
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
