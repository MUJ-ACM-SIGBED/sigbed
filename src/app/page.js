import Image from 'next/image'

export default function Home() {
  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="bg-cover bg-fixed w-full bg-no-repeat bg-[url('https://live.staticflickr.com/65535/53415834125_cfdb046471_c.jpg')] bg-gray-700 bg-blend-multiply">
        <div className="mx-auto max-w-screen-xl text-center py-16 lg:py-56">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Welcome to India's First SIGBED</h1>
            <p className="mb-8  text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Empowering Innovation at the Nexus of Intelligence and Integration: SIGBED - Where Embedded Systems Redefine Possibilities.</p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                <a href="/events" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                    Our Events
                    <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
                <a href="/gallery" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                    A sneak peek
                </a>  
            </div>
        </div>
      </section>
    </main>
    <section className="text-gray-600 bg-white  body-font">
  <div className="container px-5 py-12 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="mb-2 text-2xl font-bold tracking-tight leading-none text-blue-950  md:text-3xl lg:text-4xl">Special Interest Group on Embedded Systems</h1>
      <h2 className="text-base  text-blue-500 tracking-widest font-semibold title-font mb-7">Empowering Innovation, Advancing Embedded Systems</h2>

      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">ACM SIGBED is a focal point within the Association for Computing Machinery (ACM) for all aspects of embedded computing systems and cyber-physical systems, including both software and hardware.</p>
      <p className="lg:w-4/7 mx-auto mt-5 leading-relaxed text-base">ACM SIGBED is committed to promoting research, development, and application of embedded systems across various domains. We aim to create a vibrant and collaborative environment where professionals and enthusiasts can share ideas, explore emerging trends, and contribute to the evolution of embedded computing.</p>
      <h2 className="text-base text-black tracking-widest font-medium  title-font mt-4 mb-7">Learn More at <a className='text-blue-600  hover:text-blue-800 hover:duration-300 ' href='https://sigbed.org/'  target="_blank" >sigbed.org</a></h2>

    </div>

  </div>
    </section>
    <section className="text-gray-600 py-8 bg-white body-font">
      <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
      <iframe width={600} height={600} src="https://lottie.host/embed/539219b9-d992-44e2-bcdf-976c0e3b711a/Jx34y0QnXh.json"></iframe>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">About Us
          </h1>
          <p className="mb-8 leading-relaxed">The Manipal University Jaipur (MUJ) ACM SIGBED Student Chapter is a place where innovation and technology meet to flourish!
          As an integral part of the larger ACM SIGBED, our chapter serves as a focal point within the Association for Computing Machinery (ACM) for all aspects of embedded computing systems, encompassing both software and hardware domains. We as a team work to embrace the attitude of learning, commitment, and hard work, and we extend a warm welcome to students who are passionate about embedded systems and its diverse implementations. Our chapter is a lively gathering place for students to interact with like-minded people, learn about innovative developments, and take part in educational programmes that help them gain a deeper comprehension of the world of robotics and Emebbed culture.</p>
        </div>
      </div>
    </section>







  </>
  )
}
