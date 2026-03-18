import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

interface EducationItem {
  degree: string;
  field?: string;
  institution: string;
  year: string;
  grade?: string;
}

const Education: React.FC = () => {
  // Get education from Redux, with fallback data
  const education = useSelector(
    (state: RootState) => state.profile.education
  ) ?? [];

  const educationData: EducationItem[] = education.length > 0 
    ? (education as EducationItem[])
    : [
        {
          degree: "B.Tech",
          field: "Information Technology",
          institution: "Madras Institute of Technology, Anna University",
          year: "2022",
          grade: "7.48 CGPA",
        },
        {
          degree: "Higher Secondary",
          field: "Bio-Mathematics",
          institution: "Velammal Matriculation Hr. Sec. School",
          year: "2018",
          grade: "91.5%",
        },
        {
          degree: "Secondary",
          field: "General",
          institution: "N.A.Konduraja Memorial High School",
          year: "2016",
          grade: "93.2%",
        },
      ];

  const getDegreeIcon = (degree: string) => {
    if (degree.includes("B.Tech")) return "🎓";
    if (degree.includes("Higher")) return "📚";
    if (degree.includes("Secondary")) return "📖";
    return "✏️";
  };

  return (
    <section aria-labelledby="education-heading" className="my-8 p-6">
      {/* Header */}
      <div className="mb-12">
        <h2 id="education-heading" className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          🎓 Education
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Academic journey and qualifications
        </p>
      </div>

      {/* Timeline View */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden md:block opacity-30" />

        {/* Education Items */}
        <div className="space-y-6">
          {educationData.map((edu, idx) => {
            const icon = getDegreeIcon(edu.degree);
            const isLatest = idx === 0;

            return (
              <div key={`${edu.institution}-${idx}`} className="flex gap-6">
                {/* Timeline dot */}
                <div className="relative flex flex-col items-center hidden md:flex flex-shrink-0">
                  <div className={`w-14 h-14 rounded-full border-4 flex items-center justify-center text-2xl transition-all duration-300 ${
                    isLatest
                      ? "border-blue-500 bg-blue-500/10 shadow-lg shadow-blue-500/30"
                      : "border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800"
                  }`}>
                    {icon}
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 pt-1">
                  <div className={`group relative overflow-hidden rounded-xl border transition-all duration-300 p-6 ${
                    isLatest
                      ? "border-blue-500/50 bg-blue-500/5 dark:bg-blue-500/10 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10"
                      : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-lg"
                  }`}>
                    {/* Top section: Degree & Year */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {edu.degree}
                        </h3>
                        {edu.field && (
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                            {edu.field}
                          </p>
                        )}
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-semibold text-gray-600 dark:text-gray-400 px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-700/50">
                          {edu.year}
                        </span>
                        {edu.grade && (
                          <span className="text-sm font-bold text-white bg-gradient-to-r from-blue-500 to-purple-500 px-3 py-1.5 rounded-lg">
                            {edu.grade}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Institution */}
                    <p className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-2">
                      <span className="text-base">🏫</span>
                      {edu.institution}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
        <div className="p-4 bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg text-center hover:shadow-lg transition-all duration-300">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
            {educationData.length}
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-400 font-semibold">
            Qualifications
          </p>
        </div>

        <div className="p-4 bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg text-center hover:shadow-lg transition-all duration-300">
          <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">
            {new Date().getFullYear() - parseInt(educationData[educationData.length - 1]?.year || "2016")}+
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-400 font-semibold">
            Years Studying
          </p>
        </div>

        <div className="p-4 bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg text-center hover:shadow-lg transition-all duration-300">
          <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">
            ✓
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-400 font-semibold">
            All Complete
          </p>
        </div>

        <div className="p-4 bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg text-center hover:shadow-lg transition-all duration-300">
          <div className="text-2xl font-bold text-pink-600 dark:text-pink-400 mb-1">
            🎯
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-400 font-semibold">
            Continuous Learning
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
