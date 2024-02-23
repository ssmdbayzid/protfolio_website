import React from 'react'
import './ContactForm.css'

const ContactForm = () => {
  return (
    <div>
  {/* START CONTACT SECTION */}
  <div className="container">
    <div className="section-contact">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10 col-xl-8">
          <div className="header-section text-center">
            <h2 className="title text-primary">
              Get In Touch
              <span className="dot" />
              <span className="big-title">CONTACT</span>
            </h2>
        
          </div>
        </div>
      </div>
      <div className="font-[sans-serif] max-w-7xl mx-auto relative bg-gray-900 rounded-xl overflow-hidden">
  <div className="absolute -top-6 -left-6 w-20 h-20 rounded-full bg-blue-400" />
  <div className="absolute -bottom-6 -left-0 w-24 h-20 rounded-tr-[40px] bg-teal-200" />
  <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-blue-400" />
  <div className="absolute -bottom-6 -right-0 w-24 h-20 rounded-tl-[40px] bg-blue-300" />
  <div className="grid md:grid-cols-2">
    <div className="text-center p-6 xl:p-10 flex flex-col items-center justify-center">
      <h2 className="text-3xl text-blue-500 font-bold">Contact Us</h2>
      <img
        src="https://readymadeui.com/contact.webp"
        className="mt-4 shrink-0 w-full"
      />
    </div>
    <form className="bg-[#213979] p-6 xl:p-10">
      <div className="max-w-sm mx-auto space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full bg-gray-100 rounded py-3 px-4 text-sm outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full bg-gray-100 rounded py-3 px-4 text-sm outline-none"
        />
        <input
          type="email"
          placeholder="Phone No."
          className="w-full bg-gray-100 rounded py-3 px-4 text-sm outline-none"
        />
        <textarea
          placeholder="Message"
          rows={6}
          className="w-full bg-gray-100 rounded px-4 text-sm pt-3 outline-none"
          defaultValue={""}
        />
        <button
          type="button"
          className="text-white w-full relative bg-blue-500 hover:bg-blue-600 font-semibold rounded text-sm px-6 py-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16px"
            height="16px"
            fill="#fff"
            className="mr-2 inline"
            viewBox="0 0 548.244 548.244"
          >
            <path
              fillRule="evenodd"
              d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
              clipRule="evenodd"
              data-original="#000000"
            />
          </svg>
          Send Message
        </button>
      </div>
    </form>
  </div>
</div>

    </div>
  </div>
  {/* / END CONTACT SECTION */}
</div>

  )
}

export default ContactForm