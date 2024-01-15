import { useState, useRef, FormEvent } from 'react'
import { m, LazyMotion, domAnimation } from 'framer-motion'
import emailjs from '@emailjs/browser'
import Lottie, { type LottieRefCurrentProps } from 'lottie-react'

import SectionHeadings from '../SectionHeadings'
import ClickableComponent from '../ClickableComponent'
import { emailGif, emailSentAnimation } from 'src/assets/images'
import { FormDataType } from 'src/types/form.type'
import ContactForm from './ContactForm'

const INITIAL_POSITION = '14%'

const initialFormData = {
  name: '',
  email: '',
  message: ''
}

const variants = {
  details: {
    initial: { opacity: 0, x: `-${INITIAL_POSITION}` },
    whileInView: { opacity: 1, x: 0, transition: { duration: 1 } }
  },
  form: {
    initial: { opacity: 0, x: INITIAL_POSITION },
    whileInView: { opacity: 1, x: 0, transition: { duration: 1 } }
  },
  popup: {
    initial: { opacity: 0 },
    animate: { opacity: 1 }
  }
}

export default function Contact() {
  const [formData, setFormData] = useState<FormDataType>(initialFormData)
  const [isEmailSent, setIsEmailSent] = useState(false)
  const [isEmailError, setIsEmailError] = useState(false)

  const emailAnimationRef = useRef<LottieRefCurrentProps>(null)
  const formContainerRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      if (!formRef.current) return
      // eslint-disable-next-line import/no-named-as-default-member
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID as string,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID as string,
        formRef.current,
        import.meta.env.VITE_EMAIL_PUB_KEY as string
      )
      if (result.status === 200) {
        setIsEmailSent(true)
      }
    } catch (err) {
      setIsEmailError(true)
      console.log(err)
    }

    setFormData(initialFormData)
  }

  return (
    <>
      <div className="container px-2 pt-2">
        <SectionHeadings heading3={'Take A Coffee &'} heading2={'Chat With Me'} />
        <div className="mt-20 grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Contact details */}
          <div className="col-span-1 lg:text-left">
            <LazyMotion features={domAnimation}>
              <m.div
                ref={contactRef}
                initial={'initial'}
                whileInView={'whileInView'}
                viewport={{ once: true, amount: 0.1 }}
                variants={variants.details}
              >
                <ClickableComponent
                  href="mailto:phuongnam.nguyen241196@gmail.com"
                  className="mx-auto flex w-fit items-center gap-4 bg-navBgTheme px-4 py-2 shadow-md shadow-neutral-400 duration-200 hover:text-primary lg:mx-0"
                >
                  <div className="w-[60px]">
                    <img src={emailGif} className="w-full object-cover" />
                  </div>
                  <div>
                    phuongnam.nguyen241196
                    <span className="block text-center md:hidden">@gmail.com</span>
                  </div>
                </ClickableComponent>
              </m.div>
            </LazyMotion>

            {/* Social Network */}
          </div>
          {/* Contact form */}
          <LazyMotion features={domAnimation}>
            <m.div
              ref={formContainerRef}
              initial={'initial'}
              whileInView={'whileInView'}
              viewport={{ once: true, amount: 0.3 }}
              variants={variants.form}
            >
              <ContactForm formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} ref={formRef} />
            </m.div>
          </LazyMotion>
        </div>
      </div>

      {isEmailSent && (
        <LazyMotion features={domAnimation}>
          <m.div
            className="fixed inset-0 z-30 bg-black/20 backdrop-blur-md"
            initial={'initial'}
            animate={'animate'}
            variants={variants.popup}
          >
            <div className="absolute left-1/2 top-[40%] flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center md:w-[412px]">
              <Lottie
                className="aspect-square w-[212px] md:w-[312px]"
                lottieRef={emailAnimationRef}
                animationData={emailSentAnimation}
                loop={false}
                initialSegment={[0, 67]}
                onPlay={() => {
                  emailAnimationRef.current?.setSpeed(0.1)
                }}
              />
              <m.div
                className="text-center text-red-600"
                transition={{ duration: 0.25, delay: 0.75 }}
                variants={variants.popup}
                onAnimationComplete={() => {
                  setTimeout(() => {
                    setIsEmailSent(false)
                  }, 4000)
                }}
              >
                <p className="text-base md:text-xl">Email sent</p>
                <p className="text-base md:text-xl">I will get back to you as soon as possible</p>
              </m.div>
            </div>
          </m.div>
        </LazyMotion>
      )}
    </>
  )
}
