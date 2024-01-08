import ClickableComponent from '../ClickableComponent'

export default function Home() {
  return (
    <div className="container min-h-screen pt-10">
      <div className="text-center">
        <p className="flex items-center justify-center gap-2 font-playfair text-lg sm:text-2xl lg:text-3xl">
          <span className="inline-block aspect-square h-10 origin-[70%_70%] animate-wave text-red-400">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 256 256"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M213.27,104l-18-31.18a20,20,0,0,0-34.64,20l-28-48.5A20,20,0,0,0,98,64.31L90,50.46a20,20,0,0,0-34.64,20l12,20.83-1.17,1A20,20,0,0,0,36.7,118.17L74.7,184a80,80,0,0,0,138.57-80Zm-57.59,60.64.17-.1.14.24Z"
                opacity="0.2"
              />
              <path d="M220.2,100l-18-31.18a28,28,0,0,0-47.3-1.92L139.56,40.31a28,28,0,0,0-48.12-.63,28,28,0,0,0-43,34.78l3.34,5.79a28,28,0,0,0-22,41.92l38,65.82a87.46,87.46,0,0,0,53.43,41,88.56,88.56,0,0,0,22.92,3A88,88,0,0,0,220.2,100Zm-6.67,62.63A72,72,0,0,1,81.63,180l-38-65.82a12,12,0,0,1,20.79-12l22,38.1a8,8,0,1,0,13.85-8l-38-65.81a12,12,0,0,1,13.5-17.59,11.9,11.9,0,0,1,7.29,5.59l34,58.89a8,8,0,0,0,13.85-8l-26-45h0a12,12,0,0,1,20.78-12L160,107.78a48.08,48.08,0,0,0-11,61,8,8,0,0,0,13.86-8,32,32,0,0,1,11.71-43.71,8,8,0,0,0,2.93-10.93l-10-17.32a12,12,0,0,1,20.78-12l18,31.18A71.49,71.49,0,0,1,213.53,162.62ZM184.27,29.93a8,8,0,0,1,9.8-5.66c15.91,4.27,29,14.11,36.86,27.73a8,8,0,0,1-13.86,8c-5.72-9.92-15.36-17.12-27.14-20.27A8,8,0,0,1,184.27,29.93ZM80.91,237a8,8,0,0,1-11.24,1.33c-11-8.69-20.11-19.58-28.6-34.28a8,8,0,0,1,13.86-8c7.44,12.88,15.27,22.32,24.65,29.72A8,8,0,0,1,80.91,237Z"></path>
            </svg>
          </span>
          My name is
        </p>
        <h1>Phuong Nam</h1>
        <h3 className="font-bold text-secondary">Shy Guy Love Coding</h3>
        <p className="mx-auto mt-5 max-w-[90%] lg:max-w-[62%]">
          I&#39;m a 27-year-old friendly, but kinda shy guy. I&#39;m a beginner front-end developer on the hunt for a
          job. I&#39;m always ready to take on new challenges and expand my skill set to deliver high-quality work.
          I&#39;m eager to show off my work and make a great impression.
        </p>
        <div className="mt-6 flex items-center justify-center gap-5 md:gap-10">
          <ClickableComponent className="hover:glowing group flex items-center justify-center gap-2 rounded-md bg-black px-3 py-3 text-white shadow-md shadow-neutral-500 duration-300 lg:px-4">
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
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
            Download CV
          </ClickableComponent>
          <ClickableComponent
            href="#contact"
            className="hover:glowing group flex w-fit items-center gap-2 rounded-md bg-primary px-3 py-3 text-white shadow-md shadow-neutral-500 duration-300 lg:px-4"
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
        </div>
      </div>
    </div>
  )
}
