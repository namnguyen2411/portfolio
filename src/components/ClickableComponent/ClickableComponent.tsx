import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

type Link = {
  href: string
} & AnchorHTMLAttributes<HTMLAnchorElement>

type ClickableComponentProps = ButtonHTMLAttributes<HTMLButtonElement> | Link

export default function ClickableComponent(props: ClickableComponentProps) {
  return 'href' in props ? (
    <a {...props} className={props.className} onClick={props.onClick}>
      {props.children}
    </a>
  ) : (
    <button type={props.type} className={props.className} onClick={props.onClick} {...props}>
      {props.children}
    </button>
  )
}
