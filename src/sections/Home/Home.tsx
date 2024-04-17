import { m } from 'framer-motion'
import ClickableComponent from 'src/components/ClickableComponent'
import { greeting } from 'src/assets/images'

const variants = {
  initial: { opacity: 0, y: '20px' }
}

export default function Home() {
  return (
    <div className="container min-h-[85dvh]">
      <div className="flex w-full items-center justify-center">
        <img src={greeting} alt="greeting" className="max-w-[250px] md:max-w-[300px]" />
      </div>
      <div className="mt-5 text-center md:mt-8">
        <m.p
          viewport={{ once: true }}
          variants={variants}
          initial="initial"
          whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } }}
          className="flex items-center justify-center gap-2 font-playfair text-lg sm:text-2xl lg:text-3xl"
        >
          My name is
        </m.p>
        <m.h1
          viewport={{ once: true }}
          variants={variants}
          initial="initial"
          whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 1.5 } }}
          className="text-secondary"
        >
          Phuong Nam
        </m.h1>
        <m.h3
          viewport={{ once: true }}
          variants={variants}
          initial="initial"
          whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 2.5 } }}
          className="font-bold text-primary"
        >
          Shy Guy Love Coding
        </m.h3>
        <m.p
          viewport={{ once: true }}
          initial={{ opacity: 0, x: '-50px' }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 1, delay: 3.5 } }}
          className="mx-auto mt-5 max-w-[90%] lg:max-w-[60%]"
        >
          Welcome to my porfolio, I'm a beginner frontend developer with the goal of advancing my career and
          participating in inspiring projects. I&#39;m always ready to take on new challenges and expand my skill set to
          deliver high-quality work. I&#39;m eager to show off my work and make a great impression.
        </m.p>
        <m.div
          viewport={{ once: true }}
          variants={variants}
          initial="initial"
          whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 5 } }}
          className="mt-6 flex items-center justify-center gap-5 md:gap-10"
        >
          <ClickableComponent
            href="#contact"
            className="hover:glowing group flex w-fit items-center gap-2 border-2 border-secondary bg-secondary px-3 py-3 text-white shadow-md shadow-neutral-500 duration-300 lg:px-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="aspect-square w-5 text-white group-hover:animate-bounce lg:w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
            Contact Me
          </ClickableComponent>
          <ClickableComponent
            href="https://drive.usercontent.google.com/download?id=17SbNdIm_oM-ZhBxGI-_7uGaFKGcvyg9d&export=download&authuser=0"
            target="_blank"
            rel="noreferrer"
            download
            className="group flex items-center justify-center gap-2 border-2 border-primary px-3 py-3 text-primary shadow-md shadow-neutral-500 duration-300 lg:px-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="aspect-square w-5 text-primary group-hover:animate-bounce lg:w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
            Download CV
          </ClickableComponent>
        </m.div>
      </div>
    </div>
  )
}
