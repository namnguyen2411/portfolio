import { RefObject } from 'react'
import { m } from 'framer-motion'
import { SkillType } from 'src/types/skill.type'
import clsx from 'clsx'

type SkillProps = {
  index: number
  skillRefList: RefObject<HTMLDivElement>[]
  skill: {
    name: SkillType['name']
    image: string
  }
  displaySkill: SkillType['name'] | undefined
  setDisplaySkill: React.Dispatch<React.SetStateAction<SkillType['name'] | undefined>>
}

export default function Skill({ index, skill, skillRefList, displaySkill, setDisplaySkill }: SkillProps) {
  return (
    <div ref={skillRefList[index]} className="relative grid aspect-square h-14 place-items-center lg:h-20">
      {/* allow to drag the skill image */}
      <m.div
        onMouseEnter={() => setDisplaySkill(skill.name)}
        onMouseLeave={() => setDisplaySkill(undefined)}
        onDrag={() => setDisplaySkill(skill.name)}
        onDragEnd={() => setDisplaySkill(undefined)}
        drag
        dragConstraints={skillRefList[index]}
        className="z-10 aspect-square w-8 cursor-grab bg-contain bg-no-repeat lg:w-10"
        style={{ backgroundImage: `url(${skill.image})` }}
      >
        {/* display the skill name in the bottom center when hover or drag the image*/}
        <span
          className={clsx(
            'pointer-events-none absolute bottom-[115%] left-1/2 -translate-x-1/2 font-semibold text-secondary',
            {
              'opacity-100': displaySkill === skill.name,
              'opacity-0': displaySkill !== skill.name
            }
          )}
        >
          {skill.name}
        </span>
      </m.div>
      <span className="absolute inset-0 animate-spin-slow rounded-full border-2 border-transparent border-b-gray-300 border-t-gray-300 dark:border-b-gray-700 dark:border-t-gray-700" />
    </div>
  )
}
