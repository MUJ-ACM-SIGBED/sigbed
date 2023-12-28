import Image from 'next/image'

export default function Home() {
  return (<>
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="bg-cover bg-right bg-fixed w-full bg-no-repeat bg-[url('https://live.staticflickr.com/65535/53413681654_14aa5eb9b3_k.jpg')] bg-gray-700 bg-blend-multiply">
        <div className="mx-auto max-w-screen-xl text-center py-24 lg:py-56">
            <h1 className="mb-8 mx-5 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Im dead</h1>
            <p className="mb-24 mx-5 text-lg font-normal text-gray-200 lg:text-xl sm:px-16 lg:px-48">Beyond organizing unprecedented events and groundbreaking projects, SIGBED is more than a chapter, it`s a closely bonded community. This showcase offers just a glimpse of the world SIGBED creates around itself!</p>
        </div>
      </section>

    </main>
    </>
  )
}