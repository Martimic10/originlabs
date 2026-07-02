"use client";

import { motion } from "framer-motion";

const steps = [
  {
    step: 1,
    title: "We Learn",
    description:
      "We dig into your vision, users, and goals to shape a product direction that actually matters.",
    rotate: 4,
  },
  {
    step: 2,
    title: "Design",
    description:
      "We craft intuitive UX and polished UI systems built for the platform that fits.",
    rotate: -5,
  },
  {
    step: 3,
    title: "Develop",
    description:
      "We build with the right tools for the job — clean architecture and obsessive attention to detail.",
    rotate: 4,
  },
  {
    step: 4,
    title: "Deliver",
    description:
      "We refine, test, and ship — polished and ready for real users.",
    rotate: -5,
  },
];

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden py-20 sm:py-28 lg:py-32">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold uppercase tracking-[0.12em] text-white min-[390px]:text-3xl sm:text-4xl sm:tracking-[0.18em] md:text-5xl md:tracking-[0.22em]">
          How We Work
        </h2>

        <div className="mt-12 flex flex-col items-center gap-5 sm:mt-16 sm:gap-6 md:mt-20 md:flex-row md:items-stretch md:justify-center md:gap-0">
          {steps.map((step, index) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -10,
                rotate: step.rotate + (step.rotate > 0 ? 1.5 : -1.5),
                zIndex: 20,
              }}
              className={`relative flex w-full max-w-[19rem] shrink-0 flex-col rounded-2xl border border-white/15 bg-white/[0.06] p-6 shadow-xl shadow-black/30 backdrop-blur-md sm:h-[24rem] sm:rounded-3xl sm:p-9 md:max-w-[15.5rem] lg:max-w-[17rem] ${
                step.rotate > 0 ? "md:rotate-[4deg]" : "md:rotate-[-5deg]"
              } ${index > 0 ? "md:-ml-14 lg:-ml-20" : ""}`}
              style={{ zIndex: index + 1 }}
            >
              <p className="text-center text-sm tracking-wide text-white/50">
                [{step.step}]
              </p>

              <h3 className="flex min-h-[5rem] flex-1 items-center justify-center py-4 text-center text-2xl font-bold uppercase leading-tight tracking-wide text-white sm:min-h-0 sm:py-0 sm:text-3xl md:text-4xl">
                {step.title}
              </h3>

              <p className="text-center text-sm leading-relaxed text-zinc-400">
                {step.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
