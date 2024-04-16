import { useState } from 'react'
import clsx from 'clsx'
import DOMPurify from 'dompurify'
import { ProjectType } from 'src/types/project.type'
import ClickableComponent from 'src/components/ClickableComponent'
import { createPortal } from 'react-dom'

type ProjectProps = {
  project: ProjectType
}

export default function Project({ project }: ProjectProps) {
  const { id, title, description, libraries, thumbnail, images, liveDemo, github } = project
  const [previewMode, setPreviewMode] = useState(false)
  const [previewImageIndex, setPreviewImageIndex] = useState(0)

  const handleChangedPreviewImage = (action: 'prev' | 'next') => {
    if (action === 'prev') {
      setPreviewImageIndex((prev) => {
        const index = prev - 1
        if (index < 0) return 0
        return index
      })
    } else {
      setPreviewImageIndex((prev) => {
        const index = prev + 1
        if (index > images.length - 1) return images.length - 1
        return index
      })
    }
  }

  return (
    <>
      {previewMode &&
        createPortal(
          <div className="fixed left-0 top-0 z-40 flex h-screen w-screen items-center justify-center bg-black/10 backdrop-blur-sm">
            <div
              className={clsx('relative flex min-w-[85%] max-w-6xl items-center justify-start', {
                'min-h-[90%]': previewMode === true
              })}
            >
              <img
                src={images[previewImageIndex]}
                alt={title}
                className={clsx('boder-yellow-500 w-full border object-cover', {
                  // 'rotate-90 2xl:rotate-0': previewMode === true
                })}
              />
              <div className="absolute left-0 top-[48%] flex min-w-full place-items-start items-center justify-between text-gray-400">
                {previewImageIndex === 0 ? null : (
                  <ClickableComponent
                    className="text-2xl font-bold md:text-3xl xl:text-5xl"
                    onClick={() => handleChangedPreviewImage('prev')}
                  >
                    {'<'}
                  </ClickableComponent>
                )}
                {previewImageIndex === images.length - 1 ? null : (
                  <ClickableComponent
                    className="ml-auto text-2xl font-bold md:text-3xl xl:text-5xl"
                    onClick={() => handleChangedPreviewImage('next')}
                  >
                    {'>'}
                  </ClickableComponent>
                )}
              </div>
            </div>
            <ClickableComponent
              className="absolute right-8 top-4 text-lg font-bold md:text-xl xl:text-2xl"
              onClick={() => setPreviewMode(false)}
            >
              ✖
            </ClickableComponent>
          </div>,
          document.body
        )}

      <div className={clsx(id === 2 ? 'lg:order-2 lg:ml-auto' : 'lg:order-1')}>
        {/* image */}
        <div className="mx-auto min-w-[360px] max-w-2xl cursor-pointer" onClick={() => setPreviewMode(true)}>
          <img src={thumbnail} alt={title} className="w-full rounded-lg object-cover shadow-md" />
        </div>
        {/* links */}
        <div className="mx-auto flex items-center justify-center gap-7 pt-4 md:gap-14">
          <ClickableComponent
            href={liveDemo}
            target="_blank"
            className="hover:glowing flex items-center gap-1.5 border-2 border-current px-3 py-1 font-semibold text-secondary shadow-md shadow-current duration-300"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              stroke="currentColor"
              strokeWidth={0}
              fill="currentColor"
              className="aspect-square w-[18px] text-secondary"
            >
              <path d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z" />
            </svg>
            Live Demo
          </ClickableComponent>
          <ClickableComponent
            href={github}
            target="_blank"
            className="hover:glowing flex items-center gap-1 border-2 border-current px-2 py-1 font-semibold text-secondary shadow-md shadow-current duration-300"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              className="aspect-square w-6 text-secondary"
              strokeWidth="0.5"
              fill="currentColor"
              stroke="currentColor"
            >
              <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
            </svg>
            Github
          </ClickableComponent>
        </div>
      </div>
      {/* details */}
      <div className={`${id === 2 ? 'mr-auto w-full lg:order-1' : 'lg:order-2 lg:mr-[14px]'}`}>
        <span className="mx-auto block text-center text-xl md:px-0 md:text-3xl">{title}</span>
        <div className="mb-2 mt-4">
          {libraries.map((lib: string) => (
            <span key={lib} className="mb-2 mr-2 inline-block rounded-md bg-primary/30 p-1 text-xs md:mr-3 md:text-sm">
              {lib}
            </span>
          ))}
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(description)
          }}
          className="flex flex-col gap-0.5 text-sm lg:text-base"
        />
      </div>
    </>
  )
}
