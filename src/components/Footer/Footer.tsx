import ClickableComponent from '../ClickableComponent'

export default function Footer() {
  return (
    <footer className="mt-20">
      <p className="bg-stone-200 pb-20 pt-5 text-center dark:bg-stone-200/10 md:pb-24">
        This website was built with{' '}
        <ClickableComponent
          href="https://react.dev/"
          target="_blank"
          className="italic text-primary underline hover:underline md:no-underline"
        >
          React
        </ClickableComponent>
        ,{' '}
        <ClickableComponent
          href="https://www.typescriptlang.org/"
          target="_blank"
          className="italic text-primary underline hover:underline md:no-underline"
        >
          Typescript
        </ClickableComponent>
        , <br className="block md:hidden" />
        <ClickableComponent
          href="https://tailwindcss.com/"
          target="_blank"
          className="italic text-primary underline hover:underline md:no-underline"
        >
          Tailwindcss{' '}
        </ClickableComponent>
        & hosted on{' '}
        <ClickableComponent
          href="https://vercel.com/"
          target="_blank"
          className="italic text-primary underline hover:underline md:no-underline"
        >
          Vercel
        </ClickableComponent>
      </p>
    </footer>
  )
}
