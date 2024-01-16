import { RefObject } from 'react'
import { m } from 'framer-motion'
import { SkillType } from 'src/types/skill.type'

type SkillProps = {
  index: number
  skillRefList: RefObject<HTMLDivElement>[]
  skill: {
    name: SkillType['name']
    image: string
  }
}

export default function Skill({ index, skill, skillRefList }: SkillProps) {
  return (
    <div ref={skillRefList[index]} className="relative grid aspect-square h-14 place-items-center lg:h-20">
      {/* allow to drag the skill image */}
      <m.div
        drag
        dragConstraints={skillRefList[index]}
        className="group z-10 aspect-square w-8 cursor-grab bg-contain bg-no-repeat lg:w-10"
        style={{ backgroundImage: `url(${skill.image})` }}
      >
        {/* display the skill name in the bottom center when hover the image*/}
        <span className="absolute bottom-[100%] -translate-x-1/2 font-semibold text-secondary opacity-0 hover:bottom-[125%] hover:left-1/2 group-hover:opacity-100">
          {skill.name}
        </span>
      </m.div>
      <span className="absolute inset-0 animate-spin-slow rounded-full border-2 border-transparent border-b-gray-300 border-t-gray-300 dark:border-b-gray-700 dark:border-t-gray-700" />
    </div>
  )
}
