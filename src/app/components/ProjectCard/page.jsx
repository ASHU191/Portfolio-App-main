import { RiArrowRightUpLine, RiGithubFill } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";
import ProjectCardAnimation from "./ProjectCard";

const ProjectCard = () => {
  return (
    <div className="parent w-full md:w-[90%] flex flex-col justify-center items-center gap-12">

{/* ==================== Project 1 ==================== */}
<ProjectCardAnimation>
  <div className="w-full flex flex-col lg:flex-row gap-6">
    <div className="project-detail w-full h-full lg:w-[50%] flex justify-center flex-col gap-2">
      <h1 className="text-2xl md:text-[33px] w-full text-white font-semibold">
        01 -> ColdMail Genie – AI Outreach SaaS
      </h1>
      <p className="text-[#cbd5e1] text-md md:text-lg leading-12 mt-2">
        ColdMail Genie is an AI-powered outreach tool that generates personalized
        cold DMs, emails, and proposals for freelancers and agencies. Built with
        React, TypeScript, and Tailwind CSS, it features Gemini AI integration,
        local storage, and a smooth, responsive UI with modern animations. 🧞‍♂️
      </p>

      <div className="technology mt-3">
        <h2 className="text-xl text-[--primary-color]">Tech Stacks :</h2>
        <div className="tech_stack w-full flex flex-wrap gap-4 mt-3">
          <button className="text-[--text-color] text-sm border px-4 py-1 rounded hover:border-[--primary-color] hover:text-[--primary-color]">React</button>
          <button className="text-[--text-color] text-sm border px-4 py-1 rounded hover:border-[--primary-color] hover:text-[--primary-color]">TypeScript</button>
          <button className="text-[--text-color] text-sm border px-4 py-1 rounded hover:border-[--primary-color] hover:text-[--primary-color]">Tailwind CSS</button>
          <button className="text-[--text-color] text-sm border px-4 py-1 rounded hover:border-[--primary-color] hover:text-[--primary-color]">Shadcn/UI</button>
        </div>
      </div>

      <div className="button w-full flex flex-wrap justify-center md:justify-start items-center gap-4 mt-8">
        <Link
          className="flex items-center px-2 md:px-6 py-1 md:py-3 gap-2 transition duration-150 ease-in-out border-2 border-indigo-500 rounded-md text-[#fff] bg-indigo-500 hover:bg-transparent hover:border-[--text-color]"
          target="_blank"
          href="https://coldmail-genie.vercel.app/"
        >
          <span>Preview Link</span>
          <RiArrowRightUpLine size={23} className="inline-block" />
        </Link>
        <Link
          className="flex items-center px-2 md:px-6 py-1 md:py-3 gap-2 transition duration-150 ease-in-out border-2 border-indigo-500 rounded-md text-[#fff] bg-indigo-500 hover:bg-transparent hover:border-[--text-color]"
          target="_blank"
          href="https://github.com/ASHU191/ColdMail-Genie-AI"
        >
          <RiGithubFill size={23} className="inline-block" />
          <span>Source Code</span>
        </Link>
      </div>
    </div>

    <div className="project-img w-full lg:w-[50%] md:block">
      <div className="w-full h-full flex justify-center items-center">
        <Image src="/coldmail-genie.png" width={500} height={500} alt="ColdMail Genie" />
      </div>
    </div>
  </div>
</ProjectCardAnimation>

{/* ==================== Project 2 ==================== */}
<ProjectCardAnimation>
  <div className="w-full flex flex-col lg:flex-row gap-6">
    <div className="project-detail w-full h-full lg:w-[50%] flex justify-center flex-col gap-2">
      <h1 className="text-2xl md:text-[33px] w-full text-white font-semibold">
        02 -> YouTube Thumbnail Downloader – SEO Optimized SaaS
      </h1>
      <p className="text-[#cbd5e1] text-md md:text-lg leading-12 mt-2">
        A multilingual, SEO-optimized YouTube Thumbnail Downloader built using
        Next.js, TypeScript, and Tailwind CSS. Includes i18n support, server-side
        rendering, and a smooth, responsive interface for users worldwide. 🎬
      </p>

      <div className="technology mt-3">
        <h2 className="text-xl text-[--primary-color]">Tech Stacks :</h2>
        <div className="tech_stack w-full flex flex-wrap gap-4 mt-3">
          <button className="text-[--text-color] text-sm border px-4 py-1 rounded hover:border-[--primary-color] hover:text-[--primary-color]">Next.js</button>
          <button className="text-[--text-color] text-sm border px-4 py-1 rounded hover:border-[--primary-color] hover:text-[--primary-color]">TypeScript</button>
          <button className="text-[--text-color] text-sm border px-4 py-1 rounded hover:border-[--primary-color] hover:text-[--primary-color]">Tailwind CSS</button>
        </div>
      </div>

      <div className="button w-full flex flex-wrap justify-center md:justify-start items-center gap-4 mt-8">
        <Link
          className="flex items-center px-2 md:px-6 py-1 md:py-3 gap-2 transition duration-150 ease-in-out border-2 border-indigo-500 rounded-md text-[#fff] bg-indigo-500 hover:bg-transparent hover:border-[--text-color]"
          target="_blank"
          href="https://www.thumbnaildownloaderyoutube.site/"
        >
          <span>Preview Link</span>
          <RiArrowRightUpLine size={23} className="inline-block" />
        </Link>
        <Link
          className="flex items-center px-2 md:px-6 py-1 md:py-3 gap-2 transition duration-150 ease-in-out border-2 border-indigo-500 rounded-md text-[#fff] bg-indigo-500 hover:bg-transparent hover:border-[--text-color]"
          target="_blank"
          href="https://github.com/ASHU191/YouTube-Thumbnail-Downloader"
        >
          <RiGithubFill size={23} className="inline-block" />
          <span>Source Code</span>
        </Link>
      </div>
    </div>

    <div className="project-img w-full lg:w-[50%] md:block">
      <div className="w-full h-full flex justify-center items-center">
        <Image src="/yt-thumb.png" width={500} height={500} alt="YouTube Thumbnail Downloader" />
      </div>
    </div>
  </div>
</ProjectCardAnimation>

{/* ==================== Project 3 ==================== */}
<ProjectCardAnimation>
  <div className="w-full flex flex-col lg:flex-row gap-6">
    <div className="project-detail w-full h-full lg:w-[50%] flex justify-center flex-col gap-2">
      <h1 className="text-2xl md:text-[33px] w-full text-white font-semibold">
        03 -> BMI Interior
      </h1>
      <p className="text-[#cbd5e1] text-md md:text-lg leading-12 mt-2">
        A modern and responsive interior design website built for a UAE-based
        brand using Next.js, TypeScript, and Tailwind CSS. Showcases projects,
        services, and testimonials with a smooth, elegant user experience. 🏠
      </p>

      <div className="technology mt-3">
        <h2 className="text-xl text-[--primary-color]">Tech Stacks :</h2>
        <div className="tech_stack w-full flex flex-wrap gap-4 mt-3">
          <button className="text-[--text-color] text-sm border px-4 py-1 rounded hover:border-[--primary-color] hover:text-[--primary-color]">Next.js</button>
          <button className="text-[--text-color] text-sm border px-4 py-1 rounded hover:border-[--primary-color] hover:text-[--primary-color]">TypeScript</button>
          <button className="text-[--text-color] text-sm border px-4 py-1 rounded hover:border-[--primary-color] hover:text-[--primary-color]">Tailwind CSS</button>
        </div>
      </div>

      <div className="button w-full flex flex-wrap justify-center md:justify-start items-center gap-4 mt-8">
        <Link
          className="flex items-center px-2 md:px-6 py-1 md:py-3 gap-2 transition duration-150 ease-in-out border-2 border-indigo-500 rounded-md text-[#fff] bg-indigo-500 hover:bg-transparent hover:border-[--text-color]"
          target="_blank"
          href="https://www.bmiinterior.com/"
        >
          <span>Preview Link</span>
          <RiArrowRightUpLine size={23} className="inline-block" />
        </Link>
        <Link
          className="flex items-center px-2 md:px-6 py-1 md:py-3 gap-2 transition duration-150 ease-in-out border-2 border-indigo-500 rounded-md text-[#fff] bg-indigo-500 hover:bg-transparent hover:border-[--text-color]"
          target="_blank"
          href="https://github.com/ASHU191/BMI-Interior"
        >
          <RiGithubFill size={23} className="inline-block" />
          <span>Source Code</span>
        </Link>
      </div>
    </div>

    <div className="project-img w-full lg:w-[50%] md:block">
      <div className="w-full h-full flex justify-center items-center">
        <Image src="/bmi.png" width={500} height={500} alt="BMI Interior" />
      </div>
    </div>
  </div>
</ProjectCardAnimation>

      <ProjectCardAnimation>
        <div className="w-full flex flex-col lg:flex-row gap-6">
          <div className="project-detail w-full h-full lg:w-[50%] flex justify-center flex-col gap-2">
            <h1 className="text-2xl md:text-[33px] w-full text-white font-semibold">
              01 -&gt; Coffee Shop
            </h1>
            <p className="text-[#cbd5e1] text-md md:text-lg leading-12 mt-2">
              Brewed to Perfection with React.js, JavaScript, and Tailwind CSS ☕✨
            </p>

            <div className="technology mt-3">
              <h2 className="text-xl text-[--primary-color]">Tech Stacks :</h2>
              <div className="tech_stack w-full flex flex-wrap gap-4 mt-3">
                <button className="text-[--text-color] text-sm border px-4 py-1 rounded hover:border-[--primary-color] hover:text-[--primary-color]">
                  React JS
                </button>
                <button className="text-[--text-color] text-sm border px-4 py-1 rounded hover:border-[--primary-color] hover:text-[--primary-color]">
                  Tailwind CSS
                </button>
                <button className="text-[--text-color] text-sm border px-4 py-1 rounded hover:border-[--primary-color] hover:text-[--primary-color]">
                  JavaScript
                </button>
                {/* <button className="text-[--text-color] text-sm border px-4 py-1 rounded hover:border-[--primary-color] hover:text-[--primary-color]">
                  Local JSON Database
                </button> */}
              </div>
            </div>

            <div className="button w-full flex flex-wrap justify-center md:justify-start items-center gap-4 mt-8">
              <Link
                className="flex  items-center px-2 md:px-6 py-1 md:py-3 gap-2 transition duration-150 ease-in-out border-2 border-indigo-500 rounded-md text-[#fff] bg-indigo-500 hover:border-2 hover:bg-transparent hover:border-[--text-color]"
                target={"_blank"}
                href={"https://coffee-shop-orpin.vercel.app/"}
              >
                <span>Preview Link </span>
                <RiArrowRightUpLine size={23} className="inline-block" />
              </Link>
              <Link
                className="flex  items-center px-2 md:px-6 py-1 md:py-3 gap-2 transition duration-150 ease-in-out border-2 border-indigo-500 rounded-md text-[#fff] bg-indigo-500 hover:border-2 hover:bg-transparent hover:border-[--text-color]"
                target={"_blank"}
                href={"https://github.com/ASHU191/Coffee-Shop"}
              >
                <RiGithubFill size={23} className="inline-block" />
                <span>Source Code</span>
              </Link>
            </div>
          </div>
          <div className="project-img w-full lg:w-[50%] md:block">
            <div className="w-full h-full flex justify-center items-center">
              <Image
                src={"/coffee.png"}
                width={500}
                height={500}
                alt={"Portfolio"}
              />
            </div>
          </div>
        </div>
      </ProjectCardAnimation>


      <ProjectCardAnimation>
        <div className="w-full flex flex-col lg:flex-row gap-6">
          <div className="project-detail w-full h-full lg:w-[50%] flex justify-center flex-col gap-2">
            <h1 className="text-2xl md:text-[33px] w-full text-white font-semibold">
              02 -&gt; School Website
            </h1>
            <p className="text-[#cbd5e1] text-md md:text-lg leading-12 mt-2">
              Designed with React.js, JavaScript, and Tailwind CSS, our school website offers a harmonious fusion of design and functionality. 📚✨            </p>

            <div className="technology mt-3">
              <h2 className="text-xl text-[--primary-color]">Tech Stacks :</h2>
              <div className="tech_stack w-full flex flex-wrap gap-4 mt-3">
                <button className="text-[--text-color] text-sm border px-4 py-1 rounded hover:border-[--primary-color] hover:text-[--primary-color]">
                  React JS
                </button>
                <button className="text-[--text-color] text-sm border px-4 py-1 rounded hover:border-[--primary-color] hover:text-[--primary-color]">
                  Tailwind CSS
                </button>
                <button className="text-[--text-color] text-sm border px-4 py-1 rounded hover:border-[--primary-color] hover:text-[--primary-color]">
                  JavaScript
                </button>
                {/* <button className="text-[--text-color] text-sm border px-4 py-1 rounded hover:border-[--primary-color] hover:text-[--primary-color]">
                  Local JSON Database
                </button> */}
              </div>
            </div>

            <div className="button w-full flex flex-wrap justify-center md:justify-start items-center gap-4 mt-8">
              <Link
                className="flex  items-center px-2 md:px-6 py-1 md:py-3 gap-2 transition duration-150 ease-in-out border-2 border-indigo-500 rounded-md text-[#fff] bg-indigo-500 hover:border-2 hover:bg-transparent hover:border-[--text-color]"
                target={"_blank"}
                href={"https://school-website-rouge-theta.vercel.app/"}
              >
                <span>Preview Link </span>
                <RiArrowRightUpLine size={23} className="inline-block" />
              </Link>
              <Link
                className="flex  items-center px-2 md:px-6 py-1 md:py-3 gap-2 transition duration-150 ease-in-out border-2 border-indigo-500 rounded-md text-[#fff] bg-indigo-500 hover:border-2 hover:bg-transparent hover:border-[--text-color]"
                target={"_blank"}
                href={"https://github.com/ASHU191/School-Website"}
              >
                <RiGithubFill size={23} className="inline-block" />
                <span>Source Code</span>
              </Link>
            </div>
          </div>
          <div className="project-img w-full lg:w-[50%] md:block">
            <div className="w-full h-full flex justify-center items-center">
              <Image
                src={"/school.png"}
                width={500}
                height={500}
                alt={"Portfolio"}
              />
            </div>
          </div>
        </div>
      </ProjectCardAnimation>



      <ProjectCardAnimation>
        <div className="w-full flex flex-col lg:flex-row gap-6">
          <div className="project-detail w-full h-full lg:w-[50%] flex justify-center flex-col gap-2">
            <h1 className="text-2xl md:text-[33px] w-full text-white font-semibold">
              03 -&gt; MAKE
            </h1>
            <p className="text-[#cbd5e1] text-md md:text-lg leading-12 mt-2">
              Crafted with HTML, CSS, and JavaScript, our website offers a seamless blend of design and functionality. From intuitive navigation to captivating visuals and dynamic features, every aspect is meticulously crafted to provide an exceptional user experience. Explore innovation at its finest with us today!🪄
            </p>

            <div className="technology mt-3">
              <h2 className="text-xl text-[--primary-color]">Tech Stacks :</h2>
              <div className="tech_stack w-full flex flex-wrap gap-4 mt-3">
                <button className="text-[--text-color] text-sm border px-4 py-1 rounded hover:border-[--primary-color] hover:text-[--primary-color]">
                  JavaScript
                </button>
                <button className="text-[--text-color] text-sm border px-4 py-1 rounded hover:border-[--primary-color] hover:text-[--primary-color]">
                  CSS
                </button>
                <button className="text-[--text-color] text-sm border px-4 py-1 rounded hover:border-[--primary-color] hover:text-[--primary-color]">
                  HTML
                </button>
                {/* <button className="text-[--text-color] text-sm border px-4 py-1 rounded hover:border-[--primary-color] hover:text-[--primary-color]">
                  Local JSON Database
                </button> */}
              </div>
            </div>

            <div className="button w-full flex flex-wrap justify-center md:justify-start items-center gap-4 mt-8">
              <Link
                className="flex  items-center px-2 md:px-6 py-1 md:py-3 gap-2 transition duration-150 ease-in-out border-2 border-indigo-500 rounded-md text-[#fff] bg-indigo-500 hover:border-2 hover:bg-transparent hover:border-[--text-color]"
                target={"_blank"}
                href={"https://ashu191.github.io/MAKE/"}
              >
                <span>Preview Link </span>
                <RiArrowRightUpLine size={23} className="inline-block" />
              </Link>
              <Link
                className="flex  items-center px-2 md:px-6 py-1 md:py-3 gap-2 transition duration-150 ease-in-out border-2 border-indigo-500 rounded-md text-[#fff] bg-indigo-500 hover:border-2 hover:bg-transparent hover:border-[--text-color]"
                target={"_blank"}
                href={"https://github.com/ASHU191/MAKE"}
              >
                <RiGithubFill size={23} className="inline-block" />
                <span>Source Code</span>
              </Link>
            </div>
          </div>
          <div className="project-img w-full lg:w-[50%] md:block">
            <div className="w-full h-full flex justify-center items-center">
              <Image
                src={"/make.png"}
                width={500}
                height={500}
                alt={"Portfolio"}
              />
            </div>
          </div>
        </div>
      </ProjectCardAnimation>













      


      <ProjectCardAnimation>
        <div className="w-full flex flex-col lg:flex-row gap-6">
          <div className="project-detail w-full h-full lg:w-[50%] flex justify-center flex-col gap-2">
            <h1 className="text-2xl md:text-[33px] w-full text-white font-semibold">
              04 -&gt; Grocery Store App
            </h1>
            <p className="text-[#cbd5e1] text-md md:text-lg leading-12 mt-2">
              Experience convenience redefined with our Grocery Store App website, built using React.js, HTML, CSS, and JavaScript. Seamlessly blending modern design with intuitive functionality, our platform offers an effortless shopping experience. From browsing to checkout, discover efficiency and ease at your fingertips.
            </p>

            <div className="technology mt-3">
              <h2 className="text-xl text-[--primary-color]">Tech Stacks :</h2>
              <div className="tech_stack w-full flex flex-wrap gap-4 mt-3">
                <button className="text-[--text-color] text-sm border px-4 py-1 rounded hover:border-[--primary-color] hover:text-[--primary-color]">
                  React JS
                </button>
                <button className="text-[--text-color] text-sm border px-4 py-1 rounded hover:border-[--primary-color] hover:text-[--primary-color]">
                  JavaScript
                </button>
                <button className="text-[--text-color] text-sm border px-4 py-1 rounded hover:border-[--primary-color] hover:text-[--primary-color]">
                  CSS
                </button>
                <button className="text-[--text-color] text-sm border px-4 py-1 rounded hover:border-[--primary-color] hover:text-[--primary-color]">
                  HTML
                </button>
                {/* <button className="text-[--text-color] text-sm border px-4 py-1 rounded hover:border-[--primary-color] hover:text-[--primary-color]">
                  Nextjs Server Actions
                </button> */}
              </div>
            </div>

            <div className="button w-full flex flex-wrap justify-center md:justify-start items-center gap-4 mt-8">
              <Link
                className="flex  items-center gap-2 px-2 md:px-6 py-1 md:py-3 gap-2ition duration-150 ease-in-out border-2 border-indigo-500 rounded-md text-[#fff] bg-indigo-500 hover:border-2 hover:bg-transparent hover:border-[--text-color]"
                target={"_blank"}
                href={"https://grocery-store-gamma-rose.vercel.app/"}
              >
                <span>Preview Link </span>
                <RiArrowRightUpLine size={23} className="inline-block" />
              </Link>
              <Link
                className="flex  items-center gap-2 px-2 md:px-6 py-1 md:py-3 gap-2ition duration-150 ease-in-out border-2 border-indigo-500 rounded-md text-[#fff] bg-indigo-500 hover:border-2 hover:bg-transparent hover:border-[--text-color]"
                target={"_blank"}
                href={"https://github.com/ASHU191/Grocery-Store"}
              >
                <RiGithubFill size={23} className="inline-block" />
                <span>Source Code</span>
              </Link>
            </div>
          </div>
          <div className="project-img w-full lg:w-[50%] md:block">
            <div className="w-full h-full flex justify-center items-center">
              <Image
                src={"/grocery.png"}
                width={500}
                height={600}
                alt={"Portfolio"}
              />
            </div>
          </div>
        </div>
      </ProjectCardAnimation>

      <ProjectCardAnimation>
        <div className="w-full flex flex-col lg:flex-row gap-6">
          <div className="project-detail w-full h-full lg:w-[50%] flex justify-center flex-col gap-2">
            <h1 className="text-2xl md:text-[33px] w-full text-white font-semibold">
              05 -&gt; E-Commerce Website
            </h1>
            <p className="text-[#cbd5e1] text-md md:text-lg leading-12 mt-2">
              Discover the epitome of online shopping excellence with our E-Commerce Website. Crafted with precision using HTML, CSS, and JavaScript, our platform seamlessly merges style with functionality. Explore a vast array of products, effortless navigation, and secure transactions. Experience the future of retail today!
            </p>

            <div className="technology mt-3">
              <h2 className="text-xl text-[--primary-color]">Tech Stacks :</h2>
              <div className="tech_stack w-full flex flex-wrap gap-4 mt-3">
                <button className="text-[--text-color] text-sm border px-4 py-1 rounded hover:border-[--primary-color] hover:text-[--primary-color]">
                  Javascript
                </button>
                <button className="text-[--text-color] text-sm border px-4 py-1 rounded hover:border-[--primary-color] hover:text-[--primary-color]">
                  CSS
                </button>
                <button className="text-[--text-color] text-sm border px-4 py-1 rounded hover:border-[--primary-color] hover:text-[--primary-color]">
                  HTML
                </button>

              </div>
            </div>

            <div className="button w-full flex flex-wrap justify-center md:justify-start items-center gap-4 mt-8">
              <Link
                className="flex  items-center gap-2 px-2 md:px-6 py-1 md:py-3 gap-2ition duration-150 ease-in-out border-2 border-indigo-500 rounded-md text-[#fff] bg-indigo-500 hover:border-2 hover:bg-transparent hover:border-[--text-color]"
                target={"_blank"}
                href={"https://ashu191.github.io/E-Commerce-Website/"}
              >
                <span>Preview Link </span>
                <RiArrowRightUpLine size={23} className="inline-block" />
              </Link>
              <Link
                className="flex  items-center gap-2 px-2 md:px-6 py-1 md:py-3 gap-2ition duration-150 ease-in-out border-2 border-indigo-500 rounded-md text-[#fff] bg-indigo-500 hover:border-2 hover:bg-transparent hover:border-[--text-color]"
                target={"_blank"}
                href={"https://github.com/ASHU191/E-Commerce-Website"}
              >
                <RiGithubFill size={23} className="inline-block" />
                <span>Source Code</span>
              </Link>
            </div>
          </div>
          <div className="project-img w-full lg:w-[50%] md:block">
            <div className="w-full h-full flex justify-center items-center">
              <Image
                src={"/ecomerce.png"}
                width={500}
                height={500}
                alt={"Portfolio"}
              />
            </div>
          </div>
        </div>
      </ProjectCardAnimation>

      <ProjectCardAnimation>
        <div className="w-full flex flex-col lg:flex-row gap-6">
          <div className="project-detail w-full h-full lg:w-[50%] flex justify-center flex-col gap-2">
            <h1 className="text-2xl md:text-[33px] w-full text-white font-semibold">
              06 -&gt; SAYLANI WEBSITE
            </h1>
            <p className="text-[#cbd5e1] text-md md:text-lg leading-12 mt-2">
              Experience the pinnacle of web development with our Saylani Website, meticulously designed with React.js, HTML, CSS, and JavaScript. Seamlessly blending innovation with functionality, our platform offers a captivating user experience. Explore a world of possibilities with dynamic content, intuitive navigation, and cutting-edge technology. Welcome to the future of online excellence.
            </p>

            <div className="technology mt-3">
              <h2 className="text-xl text-[--primary-color]">Tech Stacks :</h2>
              <div className="tech_stack w-full flex flex-wrap gap-4 mt-3">
                <button className="text-[--text-color] text-sm border px-4 py-1 rounded hover:border-[--primary-color] hover:text-[--primary-color]">
                  React JS
                </button>
                <button className="text-[--text-color] text-sm border px-4 py-1 rounded hover:border-[--primary-color] hover:text-[--primary-color]">
                  JavaScript
                </button>
                <button className="text-[--text-color] text-sm border px-4 py-1 rounded hover:border-[--primary-color] hover:text-[--primary-color]">
                  CSS
                </button>
                <button className="text-[--text-color] text-sm border px-4 py-1 rounded hover:border-[--primary-color] hover:text-[--primary-color]">
                  HTML
                </button>
              </div>
            </div>

            <div className="button w-full flex flex-wrap justify-center md:justify-start items-center gap-4 mt-8">
              <Link
                className="flex  items-center gap-2 px-2 md:px-6 py-1 md:py-3 gap-2ition duration-150 ease-in-out border-2 border-indigo-500 rounded-md text-[#fff] bg-indigo-500 hover:border-2 hover:bg-transparent hover:border-[--text-color]"
                target={"_blank"}
                href={"https://ashu191.github.io/SAYLANI-WEBSITE/"}
              >
                <span>Preview Link </span>
                <RiArrowRightUpLine size={23} className="inline-block" />
              </Link>
              <Link
                className="flex  items-center gap-2 px-2 md:px-6 py-1 md:py-3 gap-2ition duration-150 ease-in-out border-2 border-indigo-500 rounded-md text-[#fff] bg-indigo-500 hover:border-2 hover:bg-transparent hover:border-[--text-color]"
                target={"_blank"}
                href={"https://github.com/ASHU191/SAYLANI-WEBSITE"}
              >
                <RiGithubFill size={23} className="inline-block" />
                <span>Source Code</span>
              </Link>
            </div>
          </div>
          <div className="project-img w-full lg:w-[50%] md:block">
            <div className="w-full h-full flex justify-center items-center">
              <Image
                src={"/saylani.png"}
                width={800}
                height={800}
                alt={"Portfolio"}
              />
            </div>
          </div>
        </div>
      </ProjectCardAnimation>

      <ProjectCardAnimation>
        <div className="w-full flex flex-col lg:flex-row gap-6">
          <div className="project-detail w-full h-full lg:w-[50%] flex justify-center flex-col gap-2">
            <h1 className="text-2xl md:text-[33px] w-full text-white font-semibold">
              07 -&gt; WhatsApp Application
            </h1>
            <p className="text-[#cbd5e1] text-md md:text-lg leading-12 mt-2">
              Step into the future of messaging with our WhatsApp clone application, meticulously crafted using Dart and Flutter. Seamlessly replicating the beloved features of WhatsApp, our platform offers a user-friendly interface, real-time messaging, and secure communication. Experience the convenience and reliability of WhatsApp in a whole new way.            </p>

            <div className="technology mt-3">
              <h2 className="text-xl text-[--primary-color]">Tech Stacks :</h2>
              <div className="tech_stack w-full flex flex-wrap gap-4 mt-3">
                <button className="text-[--text-color] text-sm border px-4 py-1 rounded hover:border-[--primary-color] hover:text-[--primary-color]">
                  FLUTTER
                </button>
                <button className="text-[--text-color] text-sm border px-4 py-1 rounded hover:border-[--primary-color] hover:text-[--primary-color]">
                  Dart
                </button>

              </div>
            </div>

            <div className="button w-full flex flex-wrap justify-center md:justify-start items-center gap-4 mt-8">
              <Link
                className="flex  items-center gap-2 px-2 md:px-6 py-1 md:py-3 gap-2ition duration-150 ease-in-out border-2 border-indigo-500 rounded-md text-[#fff] bg-indigo-500 hover:border-2 hover:bg-transparent hover:border-[--text-color]"
                target={"_blank"}
                href={"https://ashu191.github.io/Whatsapp-App/"}
              >
                <span>Preview Link </span>
                <RiArrowRightUpLine size={23} className="inline-block" />
              </Link>
              <Link
                className="flex  items-center gap-2 px-2 md:px-6 py-1 md:py-3 gap-2ition duration-150 ease-in-out border-2 border-indigo-500 rounded-md text-[#fff] bg-indigo-500 hover:border-2 hover:bg-transparent hover:border-[--text-color]"
                target={"_blank"}
                href={"https://github.com/ASHU191/Whatsapp-App"}
              >
                <RiGithubFill size={23} className="inline-block" />
                <span>Source Code</span>
              </Link>
            </div>
          </div>
          <div className="project-img w-full lg:w-[50%] md:block">
            <div className="w-full h-full flex justify-center items-center">
              <Image
                src={"/whatsapp.png"}
                width={1000}
                height={800}
                alt={"Portfolio"}
              />
            </div>
          </div>
        </div>
      </ProjectCardAnimation>
    </div>
  );
};

export default ProjectCard;
