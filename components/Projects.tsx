import Image from "next/image";
import { AiOutlineGithub } from "react-icons/ai";
import { RxOpenInNewWindow } from "react-icons/rx";
import SectionTitle from "./SectionTitle";
import ecom from "../public/assets/images/ecommerce.png"
import blog from "../public/assets/images/blogapp.png"

const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Projects" titleNo="" />
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        {/* Ecommerce Project */}
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="#ecommerce-project-link"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={ecom}
                alt="Ecommerce Project"
                width={500}
                height={300}
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Ecommerce Platform</h3>
            </div>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
              Developed an e-commerce platform for selling headphones, TWS, earbuds, and smartwatches, utilizing HTML, SCSS, JavaScript, React.js for the frontend, Strapi for backend services, and Stripe as the payment gateway.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>Strapi</li>
              <li>Stripe</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="#github-link"
                target="_blank"
              >
                <AiOutlineGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="#live-link"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>

        {/* BlogApp Project */}
        <div className="flex flex-col xl:flex-row-reverse gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="#blogapp-project-link"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={blog}
                alt="BlogApp Project"
                width={500}
                height={300}
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">BlogApp Platform</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md xl:-mr-16">
              Developed a &quot;Blog App&quot; platform enabling users to register, log in, and create personalized blogs, with secure authentication and user management using Appwrite as the backend service.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>Appwrite</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="#github-link"
                target="_blank"
              >
                <AiOutlineGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="#live-link"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
