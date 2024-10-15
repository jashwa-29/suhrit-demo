import React from 'react'

const HowItWorks = () => {
  return (
    <section>
    {/* Container */}
    <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
      {/* Title */}
      <h2 className="text-center text-3xl font-bold md:text-5xl">
        How it works
      </h2>
      <p className="mx-auto mb-8 mt-4 max-w-lg text-center text-sm text-gray-500 sm:text-base md:mb-12 lg:mb-16">
        Lorem ipsum dolor sit amet consectetur adipiscing elit ut
        aliquam,purus sit amet luctus magna fringilla urna
      </p>
      {/* Content */}
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        {/* List */}
        <div className="flex h-full flex-col [grid-area:2/1/3/2] lg:[grid-area:1/2/2/3]">
          {/* Item */}
          <a
            className="mb-8 flex max-w-lg justify-center gap-4 rounded-xl border border-transparent border-solid hover:border-gray-300 px-6 py-5 text-black"
            href="#w-tabs-0-data-w-pane-0"
          >
            <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-gray-100">
              <p className="text-sm font-bold sm:text-base">1</p>
            </div>
            <div className="ml-4 flex flex-col gap-2">
              <h5 className="text-xl font-bold">Find Component</h5>
              <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sitmet consectetur adipiscing elit 
              </p>
            </div>
          </a>
          {/* Item */}
          <a
            className="mb-8 flex max-w-lg justify-center gap-4 rounded-xl border border-transparent border-solid hover:border-gray-300 px-6 py-5 text-black"
            href="#w-tabs-0-data-w-pane-1"
          >
            <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-gray-100">
              <p className="text-sm font-bold sm:text-base">2</p>
            </div>
            <div className="ml-4 flex flex-col gap-2">
              <h5 className="text-xl font-bold">Copy and Paste</h5>
              <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sitmet consectetur adipiscing elit 
              </p>
            </div>
          </a>
          {/* Item */}
          <a
            className="mb-8 flex max-w-lg justify-center gap-4 rounded-xl border border-transparent border-solid hover:border-gray-300 px-6 py-5 text-black"
            href="#w-tabs-0-data-w-pane-2"
          >
            <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-gray-100">
              <p className="text-sm font-bold sm:text-base">3</p>
            </div>
            <div className="ml-4 flex flex-col gap-2">
              <h5 className="text-xl font-bold">Done</h5>
              <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sitmet consectetur adipiscing elit 
              </p>
            </div>
          </a>
        </div>
        {/* Image */}
        <img
          alt=""
          src="https://i.pinimg.com/564x/0c/e0/f1/0ce0f1fca1746814f89b898f98e186f7.jpg"
          className="block h-full w-full overflow-hidden [grid-area:1/1/2/2] lg:[grid-area:1/1/2/2] rounded-lg"
        />
      </div>
    </div>
  </section>
  )
}

export default HowItWorks
