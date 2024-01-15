import clsx from 'clsx'
import { ProjectType } from 'src/types/project.type'
import ClickableComponent from '../ClickableComponent'

type ProjectProps = {
  project: ProjectType
}

export default function Project({ project }: ProjectProps) {
  const { id, title, description, libraries, imgUrl, liveDemo, github } = project

  return (
    <>
      <div className={clsx('max-w-2xl', id === 2 ? 'lg:order-2 lg:ml-auto' : 'lg:order-1')}>
        {/* project image */}
        <div>
          <img src={imgUrl} alt={title} className="h-full rounded-lg object-cover" />
        </div>
        {/* project links */}
        <div className="flex items-center justify-center gap-14 pt-4">
          <ClickableComponent
            href={liveDemo}
            target="_blank"
            className="hover:glowing border-2 border-current px-3 py-1 font-semibold text-secondary shadow-md shadow-current duration-300"
            rel="noreferrer"
          >
            Live Demo
          </ClickableComponent>
          <ClickableComponent
            href={github}
            target="_blank"
            className="hover:glowing border-2 border-current px-3 py-1 font-semibold text-secondary shadow-md shadow-current duration-300"
            rel="noreferrer"
          >
            Github
          </ClickableComponent>
        </div>
      </div>
      {/* project details */}
      <div className={`${id === 2 ? 'lg:order-1' : 'lg:order-2 lg:mr-[14px]'}`}>
        <p className="text-center text-xl md:px-0">{title}</p>
        <div className="my-5">
          {libraries.map((lib: string) => (
            <span key={lib} className="mb-2 mr-3 inline-block rounded-md bg-primary/40 p-1 text-xs lg:text-sm">
              {lib}
            </span>
          ))}
        </div>
        <p>{description}</p>
      </div>
    </>
  )
}
