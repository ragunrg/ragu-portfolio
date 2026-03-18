import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

interface SkillWithProficiency {
  name: string;
  category: string;
  proficiency: number;
  icon?: string;
  years?: number;
  description?: string;
  relatedSkills?: string[];
}

const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const rawSkills = useSelector((state: RootState) => state.profile.skills) ?? [];

  // Enhanced skills with proficiency levels and descriptions
  const skillsData: SkillWithProficiency[] = [
    // Frontend
    { name: "React.js", category: "Frontend", proficiency: 95, icon: "⚛️", years: 3, description: "Component architecture, hooks, optimization", relatedSkills: ["JavaScript", "TypeScript"] },
    { name: "TypeScript", category: "Frontend", proficiency: 90, icon: "📘", years: 3, description: "Type safety, interfaces, advanced patterns", relatedSkills: ["JavaScript"] },
    { name: "JavaScript (ES6+)", category: "Frontend", proficiency: 95, icon: "🟨", years: 5, description: "Modern syntax, async/await, functional patterns" },
    { name: "HTML5 & CSS3", category: "Frontend", proficiency: 95, icon: "🎨", years: 5, description: "Semantic markup, animations, responsive layouts" },
    { name: "Responsive Design", category: "Frontend", proficiency: 90, icon: "📱", years: 3, description: "Mobile-first, CSS Grid, Flexbox" },
    { name: "Redux Toolkit", category: "Frontend", proficiency: 85, icon: "🔄", years: 2, description: "State management, slices, middleware", relatedSkills: ["React.js"] },
    { name: "CSS-in-JS (Styled Components)", category: "Frontend", proficiency: 80, icon: "💅", years: 2, description: "Dynamic styling, component-scoped styles" },
    { name: "AG Grid", category: "Frontend", proficiency: 85, icon: "📊", years: 2, description: "Enterprise tables, data visualization" },

    // Backend & Architecture
    { name: "Microsoft .NET", category: "Backend", proficiency: 80, icon: "🔷", years: 2, description: "C#, MVC, API development" },
    { name: "GraphQL", category: "Backend", proficiency: 85, icon: "🔗", years: 2, description: "Query language, Apollo, schema design", relatedSkills: ["REST APIs"] },
    { name: "REST APIs", category: "Backend", proficiency: 90, icon: "🔌", years: 3, description: "RESTful principles, CRUD operations" },
    { name: "Micro Frontend Architecture", category: "Backend", proficiency: 85, icon: "🏗️", years: 2, description: "Module federation, independent deployment" },
    { name: "Webpack / Module Federation", category: "Backend", proficiency: 85, icon: "📦", years: 2, description: "Bundling, optimization, code splitting" },

    // Databases & Data
    { name: "SQL (PostgreSQL)", category: "Data", proficiency: 80, icon: "🐘", years: 2, description: "Complex queries, indexing, optimization" },
    { name: "SQL (MySQL Server)", category: "Data", proficiency: 80, icon: "🔺", years: 2, description: "Database design, ACID transactions" },

    // Tools & DevOps
    { name: "Git & GitHub", category: "Tools", proficiency: 90, icon: "🐙", years: 4, description: "Version control, collaboration, CI/CD", relatedSkills: ["GitHub Actions"] },
    { name: "Jest & React Testing Library", category: "Tools", proficiency: 85, icon: "✅", years: 2, description: "Unit testing, integration tests, coverage" },
    { name: "Azure Fundamentals", category: "Tools", proficiency: 75, icon: "☁️", years: 1, description: "Cloud services, deployment" },
  ];

  const categories = [
    { name: "Frontend", emoji: "🎨", color: "from-blue-500 to-cyan-500", bgGradient: "from-blue-500/20 to-cyan-500/20" },
    { name: "Backend", emoji: "⚙️", color: "from-orange-500 to-red-500", bgGradient: "from-orange-500/20 to-red-500/20" },
    { name: "Data", emoji: "📊", color: "from-green-500 to-emerald-500", bgGradient: "from-green-500/20 to-emerald-500/20" },
    { name: "Tools", emoji: "🛠️", color: "from-purple-500 to-pink-500", bgGradient: "from-purple-500/20 to-pink-500/20" },
  ];

  // Filter skills based on category and search
  const filteredSkills = useMemo(() => {
    return skillsData.filter(skill => {
      const matchCategory = !selectedCategory || skill.category === selectedCategory;
      const matchSearch = !searchTerm || 
        skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        skill.description?.toLowerCase().includes(searchTerm.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchTerm]);

  const getCategoryColor = (categoryName: string) => {
    return categories.find(c => c.name === categoryName) || categories[0];
  };

  const renderStars = (proficiency: number) => {
    const stars = Math.round(proficiency / 20);
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < stars ? "text-yellow-400 text-lg" : "text-gray-300 dark:text-gray-600 text-lg"}>
            ★
          </span>
        ))}
      </div>
    );
  };

  // Segmented animated progress bar
  const SegmentedProgress = ({ percentage, color }: { percentage: number; color: string }) => {
    const segments = 20;
    const filledSegments = Math.round((percentage / 100) * segments);
    
    return (
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-xs font-bold text-gray-600 dark:text-gray-400">Proficiency</span>
          <div className="flex items-center gap-2">
            <span className="text-sm font-black text-gray-800 dark:text-white">{percentage}%</span>
            <div className={`text-xs font-black px-2 py-1 rounded-full text-white ${color}`}>
              {percentage >= 90 ? "🏆" : percentage >= 80 ? "⭐" : "📈"}
            </div>
          </div>
        </div>
        
        {/* Segmented bars */}
        <div className="flex gap-1.5 h-3">
          {[...Array(segments)].map((_, i) => {
            const isFilled = i < filledSegments;
            const segmentColor = i < 4 ? "from-orange-400 to-orange-500" :
                               i < 8 ? "from-yellow-400 to-orange-400" :
                               i < 12 ? "from-blue-400 to-blue-500" :
                               i < 16 ? "from-green-400 to-emerald-500" :
                               "from-green-500 to-emerald-600";
            
            return (
              <div
                key={i}
                className={`flex-1 rounded-full transition-all duration-500 overflow-hidden relative group ${
                  isFilled
                    ? `bg-gradient-to-r ${segmentColor} shadow-lg`
                    : "bg-gray-200 dark:bg-gray-700"
                }`}
              >
                {/* Animated shimmer */}
                {isFilled && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 animate-pulse" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <section aria-labelledby="skills-heading" className="my-8 p-6">
      {/* Header */}
      <div className="mb-10">
        <h2 id="skills-heading" className="text-4xl font-bold text-gray-800 dark:text-white mb-3">
          🚀 Skills & Expertise
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Master of modern web technologies with hands-on experience
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="🔍 Search skills..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-6 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 font-bold"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Category Filter - Premium Segmented Control */}
      <div className="mb-12">
        <div className="p-1 bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl border border-gray-300 dark:border-gray-700 inline-flex flex-wrap gap-1">
          {/* All Skills Button */}
          <button
            onClick={() => setSelectedCategory(null)}
            className={`relative px-5 py-3 rounded-xl font-bold text-sm transition-all duration-500 overflow-hidden group flex items-center gap-2 ${
              selectedCategory === null
                ? "text-white"
                : "text-gray-700 dark:text-gray-300"
            }`}
          >
            {/* Animated gradient background */}
            <div className={`absolute inset-0 rounded-xl transition-all duration-500 ${
              selectedCategory === null
                ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 shadow-xl"
                : "bg-transparent"
            }`} />
            
            {/* Hover background */}
            <div className={`absolute inset-0 rounded-xl transition-all duration-500 opacity-0 group-hover:opacity-100 ${
              selectedCategory === null
                ? ""
                : "bg-gradient-to-r from-gray-300 to-gray-200 dark:from-gray-700 dark:to-gray-600"
            }`} />

            {/* Animated glow effect */}
            {selectedCategory === null && (
              <div className="absolute inset-0 rounded-xl blur-lg bg-gradient-to-r from-indigo-500 to-purple-500 opacity-30 animate-pulse" />
            )}

            {/* Border animation */}
            <div className={`absolute inset-0 rounded-xl border-2 transition-all duration-500 ${
              selectedCategory === null
                ? "border-white/50"
                : "border-transparent group-hover:border-gray-400 dark:group-hover:border-gray-500"
            }`} />

            <span className="relative z-10 text-xl">✨</span>
            <span className="relative z-10">All</span>
            <span className={`relative z-10 px-2.5 py-1 rounded-lg text-xs font-black backdrop-blur-sm transition-all duration-300 ${
              selectedCategory === null
                ? "bg-white/30 text-white"
                : "bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200"
            }`}>
              {skillsData.length}
            </span>
          </button>

          {/* Category Buttons */}
          {categories.map((cat, idx) => {
            const count = skillsData.filter(s => s.category === cat.name).length;
            const isActive = selectedCategory === cat.name;
            
            return (
              <button
                key={cat.name}
                onClick={() => setSelectedCategory(cat.name)}
                className={`relative px-5 py-3 rounded-xl font-bold text-sm transition-all duration-500 overflow-hidden group flex items-center gap-2 ${
                  isActive ? "text-white" : "text-gray-700 dark:text-gray-300"
                }`}
                style={{
                  animation: `slideIn 0.5s ease-out ${idx * 0.1}s both`,
                }}
              >
                {/* Dynamic gradient background */}
                <div className={`absolute inset-0 rounded-xl transition-all duration-500 ${
                  isActive
                    ? `bg-gradient-to-r ${cat.color} shadow-xl`
                    : "bg-transparent"
                }`} />
                
                {/* Hover state */}
                <div className={`absolute inset-0 rounded-xl transition-all duration-500 opacity-0 group-hover:opacity-100 ${
                  isActive
                    ? ""
                    : "bg-gradient-to-r from-gray-300 to-gray-200 dark:from-gray-700 dark:to-gray-600"
                }`} />

                {/* Animated glow */}
                {isActive && (
                  <div className={`absolute inset-0 rounded-xl blur-lg bg-gradient-to-r ${cat.color} opacity-30 animate-pulse`} />
                )}

                {/* Animated border */}
                <div className={`absolute inset-0 rounded-xl border-2 transition-all duration-500 ${
                  isActive
                    ? "border-white/50"
                    : "border-transparent group-hover:border-gray-400 dark:group-hover:border-gray-500"
                }`} />

                {/* Icon with rotation on active */}
                <span className={`relative z-10 text-xl transition-all duration-500 ${
                  isActive ? "animate-spin" : "group-hover:scale-110"
                }`}>
                  {cat.emoji}
                </span>

                <span className="relative z-10 font-bold">{cat.name}</span>

                {/* Count badge with animation */}
                <span className={`relative z-10 px-2.5 py-1 rounded-lg text-xs font-black backdrop-blur-sm transition-all duration-300 ${
                  isActive
                    ? "bg-white/30 text-white scale-110"
                    : "bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200"
                }`}>
                  {count}
                </span>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-white transition-all duration-500 rounded-t-full ${
                  isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                }`} />
              </button>
            );
          })}
        </div>

        {/* Animated styles for filter buttons */}
        <style>{`
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>

      {/* Skills Grid with Enhanced Design */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {filteredSkills.map((skill, idx) => {
          const categoryInfo = getCategoryColor(skill.category);
          return (
            <div
              key={`${skill.name}-${idx}`}
              className="group relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-indigo-500 dark:hover:border-indigo-400"
              style={{
                background: `linear-gradient(135deg, rgba(255,255,255,0.8) 0%, ${categoryInfo.color}/0.05 100%)`,
              }}
            >
              {/* Animated background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${categoryInfo.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              {/* Glassmorphic effect */}
              <div className="absolute inset-0 backdrop-blur-xl opacity-40" />

              <div className="relative z-10 p-6">
                {/* Top section with icon and name */}
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="text-4xl mt-1">{skill.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-black text-lg text-gray-900 dark:text-white mb-1">
                        {skill.name}
                      </h3>
                      <p className="text-xs font-bold text-gray-600 dark:text-gray-400">
                        {skill.category} {skill.years && `• ${skill.years}+ yrs`}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                {skill.description && (
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed italic">
                    "{skill.description}"
                  </p>
                )}

                {/* Star Rating */}
                <div className="mb-5">
                  {renderStars(skill.proficiency)}
                </div>

                {/* Segmented Progress Bar */}
                <div className="mb-5">
                  <SegmentedProgress 
                    percentage={skill.proficiency} 
                    color={
                      skill.proficiency >= 90
                        ? "bg-gradient-to-r from-green-500 to-emerald-500"
                        : skill.proficiency >= 80
                        ? "bg-gradient-to-r from-blue-500 to-cyan-500"
                        : "bg-gradient-to-r from-orange-500 to-yellow-500"
                    }
                  />
                </div>

                {/* Related Skills */}
                {skill.relatedSkills && skill.relatedSkills.length > 0 && (
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-xs font-bold text-gray-600 dark:text-gray-400 mb-2">Related:</p>
                    <div className="flex flex-wrap gap-2">
                      {skill.relatedSkills.map((related) => (
                        <span
                          key={related}
                          className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full font-semibold"
                        >
                          {related}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300 transform -skew-x-12 group-hover:translate-x-full" />
              </div>
            </div>
          );
        })}
      </div>

      {/* No results message */}
      {filteredSkills.length === 0 && (
        <div className="text-center py-12">
          <p className="text-2xl font-bold text-gray-600 dark:text-gray-400 mb-2">
            No skills found 🔍
          </p>
          <p className="text-gray-500 dark:text-gray-500">
            Try adjusting your search or filter
          </p>
        </div>
      )}

      {/* Advanced Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <div className="p-6 text-center bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl border border-blue-200 dark:border-blue-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div className="text-4xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
            {skillsData.length}+
          </div>
          <div className="text-sm font-bold text-gray-700 dark:text-gray-300">Total Skills</div>
        </div>

        <div className="p-6 text-center bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border border-green-200 dark:border-green-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div className="text-4xl font-black bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
            {skillsData.filter(s => s.proficiency >= 90).length}
          </div>
          <div className="text-sm font-bold text-gray-700 dark:text-gray-300">Expert Level</div>
        </div>

        <div className="p-6 text-center bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border border-purple-200 dark:border-purple-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div className="text-4xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
            3+
          </div>
          <div className="text-sm font-bold text-gray-700 dark:text-gray-300">Years Deep</div>
        </div>

        <div className="p-6 text-center bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl border border-orange-200 dark:border-orange-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div className="text-4xl font-black bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
            {Math.round(skillsData.reduce((acc, s) => acc + s.proficiency, 0) / skillsData.length)}%
          </div>
          <div className="text-sm font-bold text-gray-700 dark:text-gray-300">Avg Proficiency</div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
