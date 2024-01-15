import { RefObject, createRef, useEffect, useRef, useState } from 'react'
import { m, LazyMotion, domAnimation, useInView } from 'framer-motion'

import SectionHeadings from '../SectionHeadings'
import { about } from 'src/assets/images'
import skillList from 'src/data/skillList'
import Skill from './Skill'

const INITIAL_POSITION = '14%'

const variants = {
  initial: (name: 'picture' | 'text') => ({
    opacity: 0,
    x: name === 'picture' ? INITIAL_POSITION : `-${INITIAL_POSITION}`
  }),
  whileInView: { opacity: 1, x: 0, transition: { duration: 1 } }
}

export default function About() {
  const pictureRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const skillHeadingRef = useRef<HTMLDivElement>(null)
  const [skillRefList, setSkillRefList] = useState<RefObject<HTMLDivElement>[]>([])

  const headingIsInView = useInView(skillHeadingRef, { margin: '0px 0px -140px 0px', amount: 1, once: true })

  useEffect(() => {
    for (let i = 0; i < skillList.length; i++) {
      const skillRef = createRef()
      setSkillRefList((pre) => {
        return [...pre, skillRef] as RefObject<HTMLDivElement>[]
      })
    }
  }, [])

  return (
    <div className="container">
      <SectionHeadings heading3={'Get To Know'} heading2={'About ME'} />

      {/* About */}
      <div className="mt-10 grid gap-10 lg:mt-20 lg:grid-cols-2 lg:gap-0">
        {/* picture */}
        <LazyMotion features={domAnimation}>
          <m.div
            ref={pictureRef}
            custom={'picture'}
            initial={'initial'}
            whileInView={'whileInView'}
            viewport={{ amount: 0.5, once: true }}
            variants={variants}
            className="mx-auto aspect-square max-w-[400px] lg:mx-0"
          >
            <img src={about} className="h-auto max-w-full rounded-full object-cover" />
          </m.div>
        </LazyMotion>
        {/* text */}
        <LazyMotion features={domAnimation}>
          <m.div
            ref={textRef}
            custom={'text'}
            initial={'initial'}
            whileInView={'whileInView'}
            viewport={{ amount: 0.5, once: true }}
            variants={variants}
            className="flex flex-col justify-center gap-3 px-3 text-center md:px-10 lg:justify-start lg:px-0"
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

      {/* Skills */}
      <div className="mt-24 px-4 text-center">
        <LazyMotion features={domAnimation}>
          <m.div ref={skillHeadingRef} className="block text-3xl font-medium">
            <SectionHeadings heading3={'Let me show you'} heading2={'My Skills'} />
          </m.div>
        </LazyMotion>
        <div className="mx-auto mt-20 flex max-w-full flex-wrap items-center justify-center gap-12 md:max-w-[80%] lg:gap-16">
          {skillList.map((skill, index) => (
            <LazyMotion features={domAnimation} key={skill.name}>
              <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: headingIsInView ? 1 : 0 }}
                transition={{ delay: 0.3 * index + 1, duration: 0.3 }}
              >
                <Skill skill={skill} index={index} skillRefList={skillRefList} />
              </m.div>
            </LazyMotion>
          ))}
        </div>
      </div>
    </div>
  )
}
