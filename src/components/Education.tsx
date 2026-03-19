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
    <section aria-labelledby="education-heading" className="my-8 px-2 md:px-8">
      {/* Header */}
      <div className="mb-10 text-center">
        <h2 id="education-heading" className="text-4xl font-extrabold text-blue-700 dark:text-blue-300 mb-2 tracking-tight">
          <span className="inline-block align-middle mr-2">🎓</span>Education
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-lg">Academic journey and qualifications</p>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {educationData.map((edu, idx) => {
          const icon = getDegreeIcon(edu.degree);
          return (
            <div
              key={`${edu.institution}-${idx}`}
              className="relative bg-white dark:bg-gray-900/80 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-7 flex flex-col min-h-[220px]"
            >
              {/* Icon */}
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center text-3xl text-white shadow-lg border-4 border-white dark:border-gray-900">
                {icon}
              </div>
              {/* Degree & Field */}
              <div className="mt-10 mb-2 text-center">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{edu.degree}</h3>
                {edu.field && (
                  <p className="text-base text-gray-600 dark:text-gray-300">{edu.field}</p>
                )}
              </div>
              {/* Year */}
              <div className="flex justify-center items-center mb-3">
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 px-4 py-1.5 rounded-full bg-gray-100 dark:bg-gray-700/60 border border-gray-200 dark:border-gray-600">
                  {edu.year}
                </span>
              </div>
              {/* Grade */}
              {edu.grade && (
                <div className="flex justify-center items-center mb-5">
                  <span className="text-sm font-bold text-white bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-1.5 rounded-full shadow">
                    {edu.grade}
                  </span>
                </div>
              )}
              {/* Institution */}
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-lg">🏫</span>
                <span className="text-base text-gray-700 dark:text-gray-200 font-medium">{edu.institution}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
