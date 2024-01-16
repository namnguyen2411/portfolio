import { RefObject, createRef, useEffect, useRef, useState } from 'react'
import { m } from 'framer-motion'

import SectionHeadings from 'src/components/SectionHeadings'
import { about } from 'src/assets/images'
import skillList from 'src/data/skillList'
import Skill from 'src/components/Skill/Skill'

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
  const [skillRefList, setSkillRefList] = useState<RefObject<HTMLDivElement>[]>([])

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
        {/* text */}
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
      </div>

      {/* My Skills */}
      <div className="mt-24 px-4 text-center">
        <SectionHeadings heading3={'Let me show you'} heading2={'My Skills'} />

        <m.div className="mx-auto mt-20 flex max-w-full flex-wrap items-center justify-center gap-12 md:max-w-[80%] lg:gap-16">
          {skillList.map((skill, index) => (
            <m.div
              key={skill.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 * index + 1, duration: 0.3 }}
              viewport={{ amount: 0.5, once: true }}
            >
              <Skill skill={skill} index={index} skillRefList={skillRefList} />
            </m.div>
          ))}
        </m.div>
      </div>
    </div>
  )
}
