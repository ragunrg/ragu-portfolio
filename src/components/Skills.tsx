import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const Skills = () => {
  const skills = useSelector((state: RootState) => state.profile.skills);

  return (
    <section aria-labelledby="skills-heading" className="my-8">
      <h2 id="skills-heading" className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
        Skills
      </h2>
      <ul className="flex flex-wrap gap-3" role="list">
        {skills.map((skill, index) => (
          <li key={index}>
            <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 rounded-full text-sm font-medium transition-colors duration-200">
              {skill}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;

