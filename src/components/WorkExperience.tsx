import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const WorkExperience: React.FC = () => {
  const experience = useSelector(
    (state: RootState) => state.profile.experience
  ) ?? [];

  if (!experience || experience.length === 0) return null;

  return (
    <section aria-labelledby="experience-heading" className="p-6 my-8">
      <h2 id="experience-heading" className="text-2xl font-bold text-gray-800 dark:text-white mb-8">
        Professional Experience
      </h2>

      <div className="space-y-6">
        {experience.map((job, idx) => (
          <article
            key={idx}
            className="group relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-8 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 hover:border-indigo-500 dark:hover:border-indigo-400"
          >
            {/* Timeline dot */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-5 h-5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg" />

            {/* Decorative line */}
            <div className="absolute left-0 top-0 bottom-0 -translate-x-2.5 w-1 bg-gradient-to-b from-indigo-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />

            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3 gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">💼</span>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {job.position}
                  </h3>
                </div>
                <p className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">
                  @ {job.company}
                </p>
              </div>
              <span className="inline-flex items-center text-sm font-bold text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full whitespace-nowrap">
                📅 {job.duration}
              </span>
            </div>

            <p className="text-base text-gray-700 dark:text-gray-300 mb-5 leading-relaxed pl-11">
              {job.description}
            </p>

            {job.achievements && job.achievements.length > 0 && (
              <div className="pl-11">
                <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">
                  ✨ Key Achievements
                </p>
                <ul className="space-y-2">
                  {job.achievements.map((achievement, aidx) => (
                    <li
                      key={aidx}
                      className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-3 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      <span className="text-indigo-500 font-bold mt-0.5">→</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
