import {
   SiJavascript, SiPython, SiReact, SiNodedotjs, SiExpress,
   SiGit, SiDocker, SiMongodb, SiFigma, SiTailwindcss,
   SiMysql, SiGithub, SiPostman, SiHtml5, SiNextdotjs,
   SiFlask, SiSpringboot
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Skills() {
   const skillCategories = [
      {
         title: "Programming",
         icon: "terminal",
         color: "text-primary",
         items: [
            { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
            { name: "Python", icon: <SiPython />, color: "#3776AB" },
            { name: "Java", icon: <FaJava />, color: "#ff716c" },
         ]
      },
      {
         title: "Frontend",
         icon: "desktop_windows",
         color: "text-secondary",
         items: [
            { name: "HTML", icon: <SiHtml5 />, color: "#E34F26" },
            { name: "React", icon: <SiReact />, color: "#61DAFB" },
            { name: "Next.js", icon: <SiNextdotjs />, color: "#ffffff" },
            { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
         ]
      },
      {
         title: "Backend",
         icon: "dns",
         color: "text-tertiary",
         items: [
            { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
            { name: "Flask", icon: <SiFlask />, color: "#ffffff" },
            { name: "Spring Boot", icon: <SiSpringboot />, color: "#6DB33F" },
            { name: "Express", icon: <SiExpress />, color: "#ffffff" },
         ]
      },
      {
         title: "Database",
         icon: "database",
         color: "text-primary",
         items: [
            { name: "MongoDB", icon: <SiMongodb />, color: "#4db33d" },
            { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
         ]
      },
      {
         title: "Tools",
         icon: "handyman",
         color: "text-secondary",
         items: [
            { name: "Git", icon: <SiGit />, color: "#f14e32" },
            { name: "GitHub", icon: <SiGithub />, color: "#ffffff" },
            { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
         ]
      },
      {
         title: "Other",
         icon: "extension",
         color: "text-tertiary",
         items: [
            { name: "REST APIs", color: "#e10098" },
            { name: "Figma", icon: <SiFigma />, color: "#f24e1e" },
            { name: "Docker (basic)", icon: <SiDocker />, color: "#2496ed" },
         ]
      }
   ];

   const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
         opacity: 1,
         transition: { staggerChildren: 0.15 }
      }
   };

   const itemVariants = {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
   };

   return (
      <section id="skills" className="py-24 px-6 md:px-12 max-w-[1200px] mx-auto w-full">
         <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6 mb-16 relative flex flex-col items-center text-center"
         >
            <span className="font-label text-outline uppercase tracking-[0.2em] text-sm font-semibold">Technical Skills</span>
            <h2 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-6">
               <span className="text-on-surface block">LEARNING. BUILDING</span>
               <span className="text-primary block">EVOLVING.</span>
            </h2>
            <p className="text-on-surface-variant/90 text-lg max-w-2xl mx-auto leading-[1.8] font-body">
               A practical blend of technologies explored through development, collaboration, and continuous improvement.
            </p>

            {/* Subtle compass icon on the right */}
            <div className="absolute right-4 md:right-12 top-4 w-24 h-24 rounded-full border border-outline-variant/30 hidden md:flex items-center justify-center opacity-40">
               <span className="material-symbols-outlined text-4xl text-outline-variant">explore</span>
            </div>
         </motion.div>

         <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6"
         >
            {skillCategories.map((category, idx) => (
               <motion.div variants={itemVariants} key={idx} className="glass-card p-10 rounded-[40px] flex flex-col gap-8 shadow-[0_0_40px_rgba(0,0,0,0.2)] bg-[#17171e]/60 border border-outline-variant/10 hover:bg-[#1a1a24]/80 transition-colors">
                  <div className="flex items-center gap-3">
                     <span className={`material-symbols-outlined text-2xl ${category.color}`} style={{ fontVariationSettings: "'FILL' 1" }}>{category.icon}</span>
                     <h3 className="text-2xl font-headline font-semibold text-on-surface">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-4 mt-2">
                     {category.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="bg-[#1c1c24]/80 border border-outline-variant/10 rounded-full px-5 py-3 flex items-center gap-3 hover:bg-[#252530] transition-colors cursor-default">
                           {item.icon && (
                              <span className="text-[18px] flex items-center justify-center" style={{ color: item.color }}>
                                 {item.icon}
                              </span>
                           )}
                           <span className="text-on-surface-variant text-[15px] font-medium font-body tracking-wide">
                              {item.name}
                           </span>
                        </div>
                     ))}
                  </div>
               </motion.div>
            ))}
         </motion.div>

         {/* Quote Banner */}
         <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative overflow-hidden rounded-[40px] p-16 md:p-24 flex flex-col items-center justify-center text-center shadow-[0_0_40px_rgba(0,0,0,0.2)] bg-[#14141a] border border-outline-variant/10 mt-12"
         >
            {/* Deep ambient background gradients */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-background to-secondary/10 opacity-60 z-0"></div>
            <div className="absolute top-0 left-[-10%] w-[50%] h-[150%] bg-primary/20 blur-[120px] rounded-full pointer-events-none z-0"></div>
            <div className="absolute bottom-0 right-[-10%] w-[50%] h-[150%] bg-secondary/20 blur-[120px] rounded-full pointer-events-none z-0"></div>

            <span className="material-symbols-outlined text-primary text-3xl mb-8 relative z-10" style={{ fontVariationSettings: "'FILL' 1" }}>magic_button</span>

            <h3 className="font-headline text-3xl md:text-5xl font-medium text-on-surface leading-tight max-w-4xl mb-8 relative z-10 italic tracking-tight">
               "The only way to learn a new programming language  <br className="hidden md:block" /> is to write programmes in it."
            </h3>

            <div className="font-label text-sm uppercase tracking-[0.4em] font-bold text-on-surface-variant/60 relative z-10">
               Dennis Ritchie &middot;  Creator of the C language
            </div>
         </motion.div>
      </section>
   );
}
