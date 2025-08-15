import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Contact = () => {
  const { email, linkedin, github } = useSelector(
    (state: RootState) => state.profile.contact,
  );

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Contact</h2>
      <ul className="space-y-2">
        <li>
          Email:{" "}
          <a className="text-blue-500 underline" href={`mailto:${email}`}>
            {email}
          </a>
        </li>
        <li>
          LinkedIn:{" "}
          <a
            className="text-blue-500 underline"
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            {linkedin}
          </a>
        </li>
        <li>
          GitHub:{" "}
          <a
            className="text-blue-500 underline"
            href={github}
            target="_blank"
            rel="noopener noreferrer"
          >
            {github}
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
