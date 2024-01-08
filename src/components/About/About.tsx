import { useRef } from 'react'
import { m, LazyMotion, domAnimation } from 'framer-motion'
import SectionHeadings from '../SectionHeadings'
import { about } from 'src/assets/images'

const INITIAL_POSITION = '14%'
const variants = {
  initial: (name: 'picture' | 'text') => ({
    opacity: 0,
    x: name === 'picture' ? INITIAL_POSITION : `-${INITIAL_POSITION}`
  }),
  whileInView: { opacity: 1, x: 0, transition: { duration: 1 }, viewport: { amount: 'all', once: true } }
}

export default function About() {
  const pictureRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  return (
    <div className="container">
      <SectionHeadings heading3={'Get To Know'} heading2={'About ME'} />
      <div className="mt-10 grid gap-10 lg:mt-20 lg:grid-cols-2 lg:gap-0">
        <LazyMotion features={domAnimation}>
          <m.div
            ref={pictureRef}
            custom={'picture'}
            initial={'initial'}
            whileInView={'whileInView'}
            variants={variants}
            className="mx-auto aspect-square max-w-[450px] rounded-md lg:mx-0"
          >
            <img src={about} className="h-auto max-w-full" />
          </m.div>
        </LazyMotion>
        <LazyMotion features={domAnimation}>
          <m.div
            ref={textRef}
            custom={'text'}
            initial={'initial'}
            whileInView={'whileInView'}
            variants={variants}
            className="flex flex-col justify-center gap-4 px-3 text-center md:px-10 lg:justify-start lg:px-0"
          >
            <span className="block text-xl font-medium">Hello there, I am so happy to have you here 😆</span>
            <p>
              Let me introduce myself. I&#39;m a shy guy so I enjoy staying at home. When I&#39;m not coding, you&#39;ll
              catch me grooving to music, playing games like League of Legends, Tactical Teamfight, watching movies or
              cheering for my favorite football club, Arsenal.
            </p>
            <p>Your visit is deeply appreciated! 😘😘</p>
          </m.div>
        </LazyMotion>
      </div>
    </div>
  )
}
