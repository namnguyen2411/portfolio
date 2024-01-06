import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

type Link = {
  href: string
} & AnchorHTMLAttributes<HTMLAnchorElement>

type ClickableComponentProps = ButtonHTMLAttributes<HTMLButtonElement> | Link

export default function ClickableComponent(props: ClickableComponentProps) {
  return 'href' in props ? (
    <a href={props.href} className={props.className} onClick={props.onClick}>
      {props.children}
    </a>
  ) : (
    <button type={props.type} className={props.className} onClick={props.onClick}>
      {props.children}
    </button>
  )
}
