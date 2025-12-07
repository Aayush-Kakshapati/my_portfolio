import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 6 }}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.995 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="block p-5 rounded-lg bg-white dark:bg-gray-900 shadow hover:shadow-lg"
    >
      <h3 className="font-semibold text-lg">{project.title}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
        {project.subtitle}
      </p>
      <p className="mt-3 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags?.map((t) => (
          <span key={t} className="text-xs px-2 py-1 border rounded">
            {t}
          </span>
        ))}
      </div>
    </motion.a>
  );
}
