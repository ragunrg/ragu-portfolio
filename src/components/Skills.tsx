import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Skills: React.FC = () => {
  const rawSkills =
    useSelector((state: RootState) => state.profile.skills) ?? [];
  const skills = Array.isArray(rawSkills)
    ? rawSkills.map((s: any) =>
        typeof s === "string"
          ? s
          : (s && (s.name || s.title || s.skill)) || String(s),
      )
    : [];

  if (!skills.length) return null;

  // chunk into columns of 5 skills each
  const CHUNK_SIZE = 5;
  const columns: string[][] = [];
  for (let i = 0; i < skills.length; i += CHUNK_SIZE) {
    columns.push(skills.slice(i, i + CHUNK_SIZE));
  }
  const numColumns = Math.max(1, columns.length);

  return (
    <section aria-labelledby="skills-heading" className="my-6">
      <h2
        id="skills-heading"
        className="text-lg font-semibold text-gray-800 dark:text-white mb-3"
      >
        Skills
      </h2>

      <div
        role="list"
        aria-label="skills columns"
        className="w-full"
        style={{
          display: "grid",
          rowGap: "4px", // small vertical gap
          columnGap: "6px", // very small horizontal gap between columns
          gridTemplateColumns: `repeat(${numColumns}, minmax(0, 1fr))`,
        }}
      >
        {columns.map((col, colIdx) => (
          <ul
            key={`col-${colIdx}`}
            className="list-none p-0 m-0 bg-transparent" // removed padding/margin
            aria-label={`skills column ${colIdx + 1}`}
            style={{ display: "flex", flexDirection: "column", gap: "4px" }} // tight vertical spacing
          >
            {col.map((skill, idx) => (
              <li
                key={`${skill}-${colIdx}-${idx}`}
                className="inline-flex items-center justify-start rounded-full bg-gray-100 dark:bg-gray-800 text-sm text-gray-800 dark:text-gray-200 px-2 py-0.5 shadow-sm" // tight item spacing, no mb
                style={{ margin: 0 }}
              >
                {skill}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
};

export default Skills;
