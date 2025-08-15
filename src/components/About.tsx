import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const About: React.FC = () => {
  const about = useSelector((state: RootState) => state.profile.about) ?? "";

  if (!about) return null;

  const paragraphs = about
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
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
  );
};

export default About;
