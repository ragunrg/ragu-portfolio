import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Contact = () => {
  const { email, linkedin, github } = useSelector(
    (state: RootState) => state.profile.contact,
  );

  const contactCards = [
    {
      icon: "✉️",
      title: "Email",
      value: email,
      href: `mailto:${email}`,
      desc: "Send me a message",
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100",
      darkBgColor: "dark:from-blue-900/30 dark:to-blue-800/30",
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "View Profile",
      href: linkedin,
      desc: "Connect with me",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "from-indigo-50 to-indigo-100",
      darkBgColor: "dark:from-indigo-900/30 dark:to-indigo-800/30",
    },
    {
      icon: "💻",
      title: "GitHub",
      value: "Check Repositories",
      href: github,
      desc: "View my projects",
      color: "from-gray-700 to-gray-900",
      bgColor: "from-gray-100 to-gray-200",
      darkBgColor: "dark:from-gray-700/30 dark:to-gray-600/30",
    },
  ];

  return (
    <section className="p-6 my-8">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-10">
        Get in Touch
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contactCards.map((contact, idx) => (
          <a
            key={idx}
            href={contact.href}
            target={contact.href.startsWith("mailto") ? "_self" : "_blank"}
            rel={contact.href.startsWith("mailto") ? "" : "noopener noreferrer"}
            className={`group relative overflow-hidden bg-gradient-to-br ${contact.bgColor} ${contact.darkBgColor} border border-gray-200 dark:border-gray-700 p-8 rounded-lg transition-all duration-300 hover:shadow-xl hover:border-indigo-500 dark:hover:border-indigo-400 hover:-translate-y-1`}
          >
            {/* Animated background */}
            <div className={`absolute -inset-full bg-gradient-to-r ${contact.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 blur-2xl`} />

            <div className="relative z-10 text-center">
              {/* Icon */}
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {contact.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                {contact.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 h-6">
                {contact.desc}
              </p>

              {/* Contact info */}
              <div className="pt-4 border-t border-gray-300 dark:border-gray-600 group-hover:border-indigo-300 dark:group-hover:border-indigo-500 transition-colors">
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors break-all">
                  {contact.value}
                </p>
              </div>

              {/* Hover indicator */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </a>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-12 text-center p-8 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/10 dark:to-purple-900/10 rounded-lg border border-indigo-200 dark:border-indigo-800">
        <p className="text-gray-800 dark:text-gray-200 mb-4 text-lg font-semibold">
          Let's collaborate and create something amazing! 🚀
        </p>
        <p className="text-gray-600 dark:text-gray-400">
          Feel free to reach out through any of the channels above. I'm always interested in hearing about new opportunities and projects.
        </p>
      </div>
    </section>
  );
};

export default Contact;
