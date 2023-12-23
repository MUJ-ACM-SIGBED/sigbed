import Image from "next/image";
export default function Footer(){
    return (
        <footer className="text-gray-100 body-font">
        <div className="container px-5 py-12 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <oi>
                    <a href="/" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-100">
                        <Image
                        src="https://i.postimg.cc/z3cWXvFv/sigbed2.png"
                        className="h-16 text-base font-semibold"
                        width={60}
                        height={50}
                        alt="SIGBED Logo"
                        />
                    <span className="ml-3 text-xl font-semibold hover:text-blue-500 duration-300">MUJ ACM SIGBED CHAPTER</span>
                    </a>
                    </oi>
                
                </div>
                <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className="title-font font-semibold text-blue-500 tracking-widest text-lg  mb-3">Contact Us</h2>
                    <nav className="list-none mb-10">
                    <li>
                        <a className="text-gray-100 font-semibold text-base mb-10">Tanmay Kaushik</a>
                    </li>
                    <li>
                    <h2 className="text-base  text-gray-100 font-light  title-font">+91 93503 78040</h2>
                    </li>
                    <li>
                        <a className="text-black select-none font-semibold text-base mb-10">Nikunj Agarwal</a>
                    </li>
                    
                    <li>
                        <a className="text-gray-100 font-semibold mb-10">Saamarth Mishra</a>
                    </li>
                    <li>
                        <a className="text-gray-100 pt-10">+91 99192 01610</a>
                    </li>
                    
                    </nav>
                </div>
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-semibold text-blue-500 tracking-widest text-lg  mb-3">Links</h2>
                    <nav className="list-none mb-10">
                    <li>
                        <a href="/team/developers" className="text-gray-100 hover:text-blue-500 hover:duration-300">Development Team</a>
                        
                    </li>
                    <li>
                        <a href="https://muj.acm.org/#/" className="text-gray-100 hover:text-blue-500 hover:duration-300">MUJ ACM Website</a>
                    </li>
                    <li>
                        <a className="text-black select-none font-semibold text-base mb-10">Nikunj Agarwal</a>
                    </li>
                    <li>
                        <a href="https://sigbed.org/" className="text-gray-100 hover:text-blue-500 hover:duration-300">SIGBED Official Website</a>
                    </li>
                    <li>
                        <a href="https://www.acm.org/" className="text-gray-100 hover:text-blue-500 hover:duration-300">ACM Official Website</a>
                    </li>
                    </nav>
                </div>
                <div className="lg:w-1/2 md:w-1/2 w-full px-4">
                    <h2 className="title-font font-medium text-blue-500 tracking-widest text-lg mb-3">Address</h2>
                    <nav className="list-none mb-10">
                    <li>
                        <a className="text-gray-100 ">Manipal University Jaipur, Dehmi Kalan, Near GVK Toll Plaza, Jaipur-Ajmer Expressway, Jaipur, Rajasthan 303007</a>
                    </li>
                    <oi>
                        <a className="text-left text-blue-500" href="mailto:acm.sigbed@muj.manipal.edu"><span className="text-white">Email: </span>acm.sigbed@muj.manipal.edu</a>
                    </oi>
                    </nav>
                    
                </div>
                </div>
        </div>
        <div className="container px-5 pb-5 mx-auto flex items-center sm:flex-row flex-col">
                <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2023 - Made by <a className="text-blue-400" href="https://www.linkedin.com/in/tanya-sharma-69457b221/">Tanya Sharma</a> & <a className="text-blue-400" href="https://www.linkedin.com/in/saamarth-mishra-6423a3217/">Saamarth Mishra</a> based on the works of <a href="https://www.linkedin.com/in/mrityunjay-shrivastava/" className="text-blue-400">Mrityunjay Shrivastava</a></p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a href="https://www.instagram.com/sigbed_muj?igshid=OGQ5ZDc2ODk2ZA==" className="ml-3 text-white hover:text-blue-500 hover:-translate-y-1 duration-300">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
            </a>
            <a href="https://www.linkedin.com/company/muj-acm-sigbed/" className="ml-3 text-white hover:text-blue-500 hover:-translate-y-1 duration-300">
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
            </a>
            </span>
        </div>
        </footer>

    );
}