import { FormEvent, FormHTMLAttributes, forwardRef } from 'react'
import ClickableComponent from '../../components/ClickableComponent'
import { FormDataType } from 'src/types/form.type'

type ContactFormProps = {
  formData: FormDataType
  setFormData: React.Dispatch<React.SetStateAction<FormDataType>>
  handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>
} & FormHTMLAttributes<HTMLFormElement>

const ContactForm = forwardRef<HTMLFormElement, ContactFormProps>(function ContactFormInner(
  { formData, setFormData, handleSubmit },
  ref
) {
  const { name, email, message } = formData

  return (
    <form
      ref={ref}
      spellCheck="false"
      noValidate
      onSubmit={(e) => {
        void handleSubmit(e)
      }}
      className="neumorphism col-span-1 mx-auto grid min-w-[85%] gap-8 rounded-lg bg-navBgTheme px-10 py-5 lg:mx-0 lg:max-w-none"
    >
      <span className="text-center text-3xl font-medium">Let&apos;s work together</span>
      {/* Email */}
      <div>
        <div className="mb-6 flex">
          <label
            htmlFor="user_email"
            className="flex h-12 w-[52px] items-center justify-center overflow-hidden rounded-bl-md rounded-tl-md border-2 border-r-0 border-gray-300 bg-gray-200 dark:border-gray-600 dark:bg-[#4b5563]"
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
            name="user_email"
            id="user_email"
            value={email}
            onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
            className="input-neumorphism w-full rounded-br-lg rounded-tr-lg border-2 border-gray-300 bg-bgTheme p-2.5 text-textTheme transition-colors focus:border-primary focus:outline-none dark:border-gray-600 dark:focus:border-primary dark:focus:outline-none"
            placeholder="Your Email"
          />
        </div>
        {/* Name */}
        <div className="flex">
          <label
            htmlFor="user_name"
            className="inline-flex aspect-square w-12 items-center justify-center rounded-s-md border-2 border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400"
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
            name="user_name"
            id="user_name"
            value={name}
            onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
            className="input-neumorphism w-full rounded-br-lg rounded-tr-lg border-2 border-gray-300 bg-bgTheme p-2.5 text-textTheme transition-colors focus:border-primary focus:outline-none dark:border-gray-600 dark:focus:border-primary dark:focus:outline-none"
            placeholder="Your Name"
          />
        </div>
      </div>
      {/*  */}
      <textarea
        value={message}
        onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
        name="message"
        placeholder="Your message..."
        rows={6}
        minLength={3}
        // className="input px-4 py-3 ring-0 focus:outline-primary dark:bg-[#374151]"
        className="input-neumorphism rounded-lg border-2 border-gray-300 bg-bgTheme p-2.5 text-textTheme transition-colors focus:border-primary focus:outline-none dark:border-gray-600 dark:focus:border-primary dark:focus:outline-none"
      />
      <ClickableComponent
        type="submit"
        className="mx-auto w-fit rounded-lg bg-secondary px-5 py-2 text-white shadow-md shadow-neutral-500 duration-200 hover:animate-wave disabled:pointer-events-none disabled:opacity-50"
        disabled={name === '' || email.length <= 6}
      >
        Send
      </ClickableComponent>
    </form>
  )
})

export default ContactForm
