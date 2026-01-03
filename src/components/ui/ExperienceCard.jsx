import { NavLink } from "react-router-dom";

const ExperienceCard = ({ experience }) => {
  return (
    <a
      href={experience.link}
      target="_blank"
      rel="noreferrer"
      className="card "
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-muted">{experience.type}</span>
        <span className="text-sm text-muted">{experience.year}</span>
      </div>
      <h3 className="text-lg font-semibold mb-2">{experience.title}</h3>
      <p className="text-sm text-muted mb-3">{experience.description}</p>
      <div className="flex flex-wrap gap-2 mb-3">
        {experience.tags.map((tag, idx) => (
          <span
            key={idx}
            className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
};

export default ExperienceCard;
