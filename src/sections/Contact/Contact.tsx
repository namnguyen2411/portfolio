import { useState, useRef } from 'react'
import { m } from 'framer-motion'
import emailjs from '@emailjs/browser'
import Lottie, { type LottieRefCurrentProps } from 'lottie-react'
import { Controller, useForm } from 'react-hook-form'
import clsx from 'clsx'

import SectionHeadings from 'src/components/SectionHeadings'
import ClickableComponent from 'src/components/ClickableComponent'
import { emailSentAnimation, github, linkedin, email } from 'src/assets/images'
import { FormDataType } from 'src/types/form.type'

const INITIAL_POSITION = '14%'

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
  const [isEmailSent, setIsEmailSent] = useState(false)
  const [hoveredField, setHoveredField] = useState<'email' | 'name' | undefined>(undefined)

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset
  } = useForm<FormDataType>()

  const emailRef = useRef<LottieRefCurrentProps>(null)
  const emailSentAnimationRef = useRef<LottieRefCurrentProps>(null)
  const formContainerRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const contactDetailsRef = useRef<HTMLDivElement>(null)

  const onSubmit = handleSubmit(async () => {
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
      console.log(err)
    }
    reset()
  })

  return (
    <>
      <div className="container px-2 pt-2">
        <SectionHeadings heading3={'Take A Coffee &'} heading2={'Chat With Me'} />
        <div className="mt-10 grid grid-cols-1 justify-between gap-y-10 min-[1220px]:mt-16 min-[1220px]:grid-cols-12 min-[1220px]:gap-32 min-[1220px]:pl-10">
          {/* Contact form */}
          <m.div
            ref={formContainerRef}
            initial={'initial'}
            whileInView={'whileInView'}
            viewport={{ once: true, amount: 0.3 }}
            variants={variants.form}
            className="order-2 col-span-6 mx-auto w-[95%] max-w-3xl md:max-[1220px]:mx-auto"
          >
            <form
              ref={formRef}
              spellCheck="false"
              noValidate
              onSubmit={(e) => void onSubmit(e)}
              className="neumorphism grid rounded-lg bg-navBgTheme px-5 py-6 lg:px-10"
            >
              <span className="mb-6 text-center text-2xl font-medium md:text-3xl">Let&apos;s work together</span>
              {/* Email */}
              <div className="flex">
                <label
                  htmlFor="email"
                  className={clsx(
                    'flex h-12 w-[52px] items-center justify-center overflow-hidden rounded-bl-md rounded-tl-md border-2 border-r-0 bg-gray-200 transition-colors dark:bg-[#4b5563]',
                    {
                      'border-primary': hoveredField === 'email',
                      'border-gray-300 dark:border-gray-600': hoveredField !== 'email'
                    }
                  )}
                >
                  <svg
                    className="h-4 w-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 16"
                  >
                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                  </svg>
                </label>
                <input
                  type="text"
                  {...register('user_email', {
                    required: 'Email cannot be empty',
                    pattern: {
                      value: /^[A-Z0-9._]{5,}@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  onFocus={() => setHoveredField('email')}
                  onBlur={() => setHoveredField(undefined)}
                  id="email"
                  className="input-neumorphism w-full rounded-br-lg rounded-tr-lg border-2 border-l-0 border-gray-300 bg-bgTheme p-2.5 text-sm text-textTheme transition-colors focus:border-primary focus:outline-none dark:border-gray-600 dark:focus:border-primary dark:focus:outline-none md:text-base"
                  placeholder="Your Email"
                />
              </div>
              <span className="mb-3 mt-1 min-h-[21px] text-xs text-red-400 md:text-sm">
                {errors?.user_email?.message}
              </span>
              {/* Name */}
              <div className="flex">
                <label
                  htmlFor="name"
                  className={clsx(
                    'flex h-12 w-[52px] items-center justify-center overflow-hidden rounded-bl-md rounded-tl-md border-2 border-r-0 bg-gray-200 transition-colors dark:bg-[#4b5563]',
                    {
                      'border-primary': hoveredField === 'name',
                      'border-gray-300 dark:border-gray-600': hoveredField !== 'name'
                    }
                  )}
                >
                  <svg
                    className="h-4 w-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                  </svg>
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('user_name', {
                    required: 'Name cannot be empty',
                    minLength: { value: 3, message: 'Name must be at least 3 characters' },
                    pattern: {
                      value: /^[^.!@#$%^&*()_+-=]+$/,
                      message: 'Name cannot contain special characters'
                    }
                  })}
                  onFocus={() => setHoveredField('name')}
                  onBlur={() => setHoveredField(undefined)}
                  className=" input-neumorphism w-full rounded-br-lg rounded-tr-lg border-2 border-l-0 border-gray-300 bg-bgTheme p-2.5 text-sm text-textTheme transition-colors focus:border-primary focus:outline-none dark:border-gray-600 dark:focus:border-primary dark:focus:outline-none md:text-base"
                  placeholder="Your Name"
                />
              </div>
              <span className="mb-3 mt-1 min-h-[21px] text-xs text-red-400 md:text-sm">
                {errors?.user_name?.message}
              </span>
              {/* Message */}
              <Controller
                control={control}
                name="message"
                defaultValue=""
                rules={{
                  required: 'Message cannot be empty',
                  minLength: { value: 4, message: 'Please provide a more detailed message' }
                }}
                render={({ field }) => (
                  <textarea
                    {...field}
                    placeholder="Your message..."
                    rows={5}
                    minLength={3}
                    className="input-neumorphism rounded-lg border-2 border-gray-300 bg-bgTheme p-2.5 text-sm text-textTheme transition-colors focus:border-primary focus:outline-none dark:border-gray-600 dark:focus:border-primary dark:focus:outline-none md:text-base"
                  />
                )}
              />
              <span className="mb-3 mt-1 min-h-[21px] text-xs text-red-400 md:text-sm">{errors?.message?.message}</span>
              <ClickableComponent
                type="submit"
                className="mx-auto w-fit rounded-lg bg-secondary px-5 py-2 text-white shadow-md shadow-neutral-500 duration-200 hover:animate-wave"
              >
                Send
              </ClickableComponent>
            </form>
          </m.div>

          {/* Contact details */}
          <div className="order-1 col-span-4 flex flex-col gap-5 min-[1220px]:gap-8 min-[1220px]:text-left">
            <span className="mt-6 text-center text-2xl font-medium md:text-3xl min-[1220px]:text-left">
              Contact Details
            </span>
            {/* Email */}
            <m.div
              ref={contactDetailsRef}
              initial={'initial'}
              whileInView={'whileInView'}
              viewport={{ once: true, amount: 0.3 }}
              variants={variants.details}
            >
              <ClickableComponent
                href="mailto:phuongnam.nguyen241196@gmail.com"
                className="mx-auto flex w-fit items-center gap-4 bg-navBgTheme px-4 py-2 shadow-md shadow-neutral-400 duration-200 hover:text-primary min-[1220px]:mx-0"
              >
                <div className="w-10">
                  <Lottie lottieRef={emailRef} animationData={email} />
                </div>
                <div>
                  phuongnam.nguyen241196<span className="block text-center md:hidden">@gmail.com</span>
                </div>
              </ClickableComponent>
            </m.div>
            {/* Github */}
            <m.div
              ref={contactDetailsRef}
              initial={'initial'}
              whileInView={'whileInView'}
              viewport={{ once: true, amount: 0.5 }}
              variants={variants.details}
            >
              <ClickableComponent
                href="https://github.com/namnguyen2411"
                target="_blank"
                rel="noreferrer"
                className="mx-auto flex w-fit items-center gap-4 bg-navBgTheme px-4 py-2 shadow-md shadow-neutral-400 duration-200 hover:text-primary min-[1220px]:mx-0"
              >
                <Lottie animationData={github} className="w-10" />
                namnguyen2411
              </ClickableComponent>
            </m.div>
            {/* Linkedin */}
            <m.div
              ref={contactDetailsRef}
              initial={'initial'}
              whileInView={'whileInView'}
              viewport={{ once: true, amount: 0.7 }}
              variants={variants.details}
            >
              <ClickableComponent
                href="https://www.linkedin.com/in/namnguyen2411/"
                target="_blank"
                rel="noreferrer"
                className="mx-auto flex w-fit items-center gap-4 bg-navBgTheme px-4 py-2 shadow-md shadow-neutral-400 duration-200 hover:text-primary min-[1220px]:mx-0"
              >
                <Lottie animationData={linkedin} className="w-10" />
                namnguyen2411
              </ClickableComponent>
            </m.div>
          </div>
        </div>
      </div>

      {/* Email sent popup */}
      {isEmailSent && (
        <m.div
          className="fixed inset-0 z-30 bg-black/20 backdrop-blur-md"
          initial={'initial'}
          animate={'animate'}
          variants={variants.popup}
        >
          <div className="absolute left-1/2 top-[40%] flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center md:w-[412px]">
            <Lottie
              className="aspect-square w-[212px] md:w-[312px]"
              lottieRef={emailSentAnimationRef}
              animationData={emailSentAnimation}
              loop={false}
              initialSegment={[0, 67]}
              onPlay={() => {
                emailSentAnimationRef.current?.setSpeed(0.1)
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
      )}
    </>
  )
}
