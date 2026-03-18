import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Certifications: React.FC = () => {
  const certifications = useSelector(
    (state: RootState) => state.profile.certifications
  ) ?? [];

  if (!certifications || certifications.length === 0) return null;

  return (
    <section aria-labelledby="certifications-heading" className="p-6 my-8">
      <h2
        id="certifications-heading"
        className="text-2xl font-bold text-gray-800 dark:text-white mb-8"
      >
        Certifications & Credentials
      </h2>

      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
        {certifications.map((cert, idx) => (
          <a
            key={idx}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 hover:border-indigo-500 dark:hover:border-indigo-400"
          >
            {/* Animated background gradient */}
            <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-400 to-purple-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-full blur-3xl" />

            {/* Decorative badge */}
            <div className="absolute top-4 right-4 inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-lg group-hover:scale-110 transition-transform duration-300">
              <span className="text-xl">🏆</span>
            </div>

            <div className="relative z-10">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors pr-14">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    📅 Earned in {cert.date}
                  </p>
                </div>
              </div>

              {/* Verification indicator */}
              <div className="flex items-center gap-2 pt-4 border-t border-gray-200 dark:border-gray-700">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                  Verified Credential
                </span>
                <span className="ml-auto text-indigo-500 font-bold group-hover:translate-x-1 transition-transform">
                  ↗
                </span>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
