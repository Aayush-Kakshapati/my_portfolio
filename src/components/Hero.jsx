import { motion } from "framer-motion";
import Aayush_Kakshapati from "../assets/MyCV.pdf";
import profileImg from "../assets/profileImg.jpg";

export default function Hero() {
  return (
    <section id="hero" className="py-12 scroll-mt-12">
      {" "}
      <div className="grid gap-10 md:grid-cols-2 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Hi, I’m <span className="text-primary-500">Aayush</span>.
          </h1>

          <p className="mt-5 text-gray-600 dark:text-gray-300 max-w-xl text-lg leading-relaxed">
            I build web applications with JavaScript tools like React, Express,
            and MongoDB. My work includes full-stack platforms, simple content
            sites, and utility tools such as custom bots. I focus on clear
            structure, reliable functionality, and code that’s easy to maintain.
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-5 py-2.5 bg-primary-500 text-white rounded-md text-sm font-medium"
            >
              View Projects
            </a>
            <a
              href={Aayush_Kakshapati}
              download="MyCV.pdf"
              className="px-5 py-2.5 border rounded-md text-sm font-medium"
            >
              Resume
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-md text-sm font-medium bg-gray-100 dark:bg-gray-700"
            >
              Contact
            </a>
          </div>

          {/* SOCIAL CONTACT ROW */}
          <div className="mt-6 text-sm text-gray-600 dark:text-gray-400 space-y-2">
            <div>
              GitHub:{" "}
              <a
                href="https://github.com/Aayush-Kakshapati"
                className="underline font-medium"
                target="blank"
              >
                Aayush-Kakshapati
              </a>
            </div>
            <div>
              Email:{" "}
              <a href="kakshaayush@gmail.com" className="underline font-medium">
                kakshaayush@gmail.com
              </a>
            </div>
          </div>
        </motion.div>
        {/* RIGHT VISUAL */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="w-56 h-56 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-5xl font-bold shadow-xl">
            <img src={profileImg} alt="profileImg" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
