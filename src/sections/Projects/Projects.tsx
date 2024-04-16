import { m } from 'framer-motion'
import clsx from 'clsx'

import SectionHeadings from 'src/components/SectionHeadings'
import projectList from 'src/data/projectList'
import Project from './components/Project'
import miniProjectList from 'src/data/miniProjectList'
import MiniProject from './components/MiniProject'

const INITIAL_POSITION = '14%'

export default function Projects() {
  return (
    <div className="container">
      <SectionHeadings heading3={'My latest'} heading2={'Projects'} />
      <div className="mt-10 lg:mt-20">
        {projectList.map((project, index) => (
          <m.article
            key={project.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? INITIAL_POSITION : `-${INITIAL_POSITION}` }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
            viewport={{ amount: 0.3, once: true }}
            className={clsx(
              'mx-auto grid max-w-[672px] grid-cols-1 place-items-center gap-5 lg:mx-0 lg:max-w-none lg:grid-cols-[45%_50%] lg:place-items-start lg:justify-between',
              project.id === 3 ? 'mb-0' : 'mb-28'
            )}
          >
            <Project project={project} />
          </m.article>
        ))}
      </div>

      <h3 className="text-center text-primary">Mini Projects</h3>
      <div className="mt-5 grid grid-cols-1 gap-10 xl:grid-cols-3">
        {miniProjectList.map((miniProject) => (
          <m.article
            key={miniProject.id}
            initial={{ opacity: 0, y: '50px' }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: miniProject.id !== 1 ? 0.5 : 0 } }}
            viewport={{ amount: 0.3, once: true }}
          >
            <MiniProject miniProject={miniProject} />
          </m.article>
        ))}
      </div>
    </div>
  )
}
