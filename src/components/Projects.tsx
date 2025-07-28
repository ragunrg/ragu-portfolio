import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';


const Projects = () => {
  const projects = useSelector((state: RootState) => state.profile.projects);

  return (
    <section aria-labelledby="projects-heading" className="p-6 my-8">
      <h2 id="projects-heading" className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Projects
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, idx) => (
          <article
            key={idx}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
              {project.name}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {project.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
