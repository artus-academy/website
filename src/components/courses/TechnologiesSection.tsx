import { easeOut, motion } from "framer-motion";
import Image from "next/image";

export default function TechnologiesSection({
  technologies,
}: {
  technologies: string[];
}) {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: easeOut },
    viewport: { once: true },
  };
  return (
    <section className="container py-16">
      <motion.div {...fadeUp} className="text-center space-y-2 mb-8">
        <h2 className="text-3xl font-bold">Technologies & Tools</h2>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.05 },
          },
        }}
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 place-items-center items-stretch justify-items-stretch"
      >
        {technologies.map((tech) => (
          <motion.div
            key={tech}
            variants={{
              hidden: { opacity: 0, y: 15 },
              show: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.12, rotate: -3 }}
            className="group p-4 rounded-xl border bg-card hover:shadow-lg transition-all flex flex-col items-center justify-center gap-y-3"
          >
            <Image
              src={`/images/tech/${tech}.png`}
              alt={tech}
              width={56}
              height={56}
              className="object-contain grayscale group-hover:grayscale-0 transition flex-1"
            />
            <span className="uppercase text-muted-foreground text-sm group-hover:text-foreground">
              {tech}
            </span>
          </motion.div>
        ))}
      </motion.div>
      <div className="flex justify-center text-center text-xl pt-4">
        And much more...
      </div>
    </section>
  );
}
