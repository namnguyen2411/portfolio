import { m } from 'framer-motion'
import { useRef } from 'react'

interface SectionHeadingsProps {
  heading1?: string
  heading1Classname?: string
  heading2?: string
  heading2Classname?: string
  heading3?: string
  heading3Classname?: string
}

export default function SectionHeadings({
  heading1,
  heading1Classname,
  heading2,
  heading2Classname = 'mt-5',
  heading3,
  heading3Classname
}: SectionHeadingsProps) {
  const headingRef = useRef<HTMLDivElement>(null)

  return (
    <m.div
      ref={headingRef}
      viewport={{ amount: 1, once: true }}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="pt-2 text-center"
    >
      {heading1 && <h1 className={heading1Classname}>{heading1}</h1>}
      <h3 className={heading3Classname}>{heading3}</h3>
      <h2 className={heading2Classname}>{heading2}</h2>
    </m.div>
  )
}
