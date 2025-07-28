import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const About = () => {
  const about = useSelector((state: RootState) => state.profile.about);

  return (
    <section
      aria-labelledby="about-heading"
      className="max-w-3xl mx-auto p-6 my-8"
    >
      <h2
        id="about-heading"
        className="text-2xl font-bold text-gray-900 dark:text-white mb-4"
      >
        About Me
      </h2>
      <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed tracking-normal">
        {about}
      </p>
    </section>
  );
};

export default About;
