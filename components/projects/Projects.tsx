"use client";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import project1 from "@/public/project1.jpg";
import project2 from "@/public/project2.jpg";
import project3 from "@/public/project3.png";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Clubify - Social Network",
    desc: "A social media website for college students having features such as infinite feed, authentication, adding followers adn much more.",
    img: project1,
    githubLink: "https://github.com/shambhabya/clubify",
    liveLink: "https://clubify-nine.vercel.app/",
    icons: [
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        role="img"
        viewBox="0 0 24 24"
        className=" text-5xl"
        width="25"
        height="25"
        xmlns="http://www.w3.org/2000/svg"
        key="svg1"
      >
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"></path>
      </svg>,

      <svg viewBox="0 0 128 128" width={25} height={25} key="svg2">
        <g fill="#61DAFB">
          <circle cx="64" cy="64" r="11.4"></circle>
          <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
        </g>
      </svg>,
      <Image
        src="https://seeklogo.com/images/R/react-query-logo-1340EA4CE9-seeklogo.com.png"
        alt="react-query"
        height={25}
        width={25}
        key="img1"
      />,

      <svg viewBox="0 0 128 128" height={25} width={25} key="svg3">
        <path
          d="M40.162 23.768C24.121 25.189 10.496 36.065 5.473 51.443 4.028 55.874 3.53 59.05 3.53 64.026s.498 8.151 1.943 12.582c7.701 23.505 34.334 34.595 56.466 23.529L64 99.094l2.085 1.043c18.222 9.123 40.377 3.293 51.703-13.672 2.962-4.407 5.237-10.118 6.208-15.544.356-2.085.474-3.744.474-6.895 0-4.976-.497-8.152-1.943-12.583-7.701-23.505-34.334-34.594-56.442-23.529L64 28.957l-2.061-1.043a41.323 41.323 0 00-14.904-4.17c-3.152-.261-3.792-.261-6.873.024zm10.142 8.601c2.322.45 6.801 2.203 9.525 3.744 3.721 2.085 7.938 5.995 10.521 9.739 1.398 2.037 3.27 5.876 4.336 8.933 1.517 4.265 1.517 14.217 0 18.481-1.848 5.214-4.194 9.266-7.345 12.607-3.744 3.981-7.227 6.326-12.44 8.364-3.317 1.303-5.307 1.73-9.217 1.919-4.787.237-9.1-.331-12.488-1.682-.853-.356-1.73-.663-1.99-.711-.498-.118-4.763-2.488-6.208-3.46-1.54-1.042-5.331-4.762-6.801-6.682-.734-.971-1.35-1.824-1.35-1.895 0-.071-.545-1.067-1.209-2.204-1.161-2.014-1.943-3.649-1.753-3.649.047 0-.213-.758-.592-1.682-1.161-2.772-1.517-5.213-1.517-10.165 0-4.953.356-7.394 1.517-10.166.379-.924.639-1.682.592-1.682-.19 0 .592-1.635 1.753-3.649.664-1.137 1.209-2.132 1.209-2.204 0-.071.616-.924 1.35-1.895 1.47-1.92 5.261-5.64 6.801-6.682 1.422-.972 5.71-3.342 6.208-3.46.26-.047 1.256-.403 2.227-.782 2.156-.853 3.554-1.184 6.043-1.469 2.559-.284 8.577-.094 10.828.332z"
          fill="#f02e65"
        ></path>
        <path
          d="M44.973 49.737c-.048.119-.664 2.536-1.327 5.403-.688 2.867-1.777 7.393-2.393 10.07-1.185 4.905-1.896 8.128-1.896 8.554 0 .118.735.214 1.635.214h1.635l.734-3.271c.427-1.777 1.375-5.852 2.133-9.051.759-3.199 1.682-7.085 2.038-8.649.355-1.564.711-2.985.782-3.151.071-.213-.332-.284-1.564-.284-.924 0-1.73.071-1.777.165zm-12.725 10.26l-2.18 2.37.64.758c.355.426 1.327 1.493 2.156 2.37l1.517 1.611h4.313l-2.038-2.204c-1.114-1.184-2.038-2.322-2.038-2.464 0-.166.853-1.232 1.896-2.369 1.042-1.161 1.895-2.157 1.895-2.275 0-.095-.9-.166-1.99-.166h-1.967l-2.204 2.369zm16.587-2.227c0 .071.403.521.9 1.019 1.849 1.848 3.152 3.412 3.081 3.72-.047.166-.948 1.279-2.038 2.44l-1.966 2.157h2.203l2.204-.024 2.013-2.203c1.115-1.232 2.015-2.323 2.015-2.465 0-.118-.948-1.232-2.133-2.487l-2.132-2.299H50.92c-1.161 0-2.085.071-2.085.142z"
          fill="#f02e65"
        ></path>
      </svg>,

      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
        alt="tailwind"
        height={25}
        width={25}
        key="img2"
      />,
      <Image
        src="https://seeklogo.com/images/S/shadcn-ui-logo-EF735EC0E5-seeklogo.com.png?v=638421451470000000"
        alt="shadcn"
        width={25}
        height={25}
        key="img3"
      />,
    ],
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Aniflix - Anime watching Website",
    desc: "Netflix inspired streaming website for Anime. Built using MERN stack along with Admin Panel for managing content.",
    img: project2,
    githubLink: "https://github.com/shambhabya/aniflix",
    liveLink: "https://aniflix-main.netlify.app/",
    icons: [
      <svg viewBox="0 0 128 128" width={25} height={25} key="svg4">
        <g fill="#61DAFB">
          <circle cx="64" cy="64" r="11.4"></circle>
          <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
        </g>
      </svg>,

      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
        alt="node"
        width={25}
        height={25}
        key="img4"
      />,

      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
        alt="tailwind"
        height={25}
        width={25}
        key="img5"
      />,

      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg"
        alt="firebase"
        height={25}
        width={25}
        key="img6"
      />,
    ],
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "My Portfolio",
    desc: "My developer portfolio website created using Next Js and Framer Motion",
    img: project3,
    githubLink: "https://lama.dev",
    liveLink: "",
    icons: [
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
        alt="next"
        height={25}
        width={25}
        key="img7"
      />,

      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original-wordmark.svg"
        alt="framer-motion"
        height={25}
        width={25}
        key="img8"
      />,
    ],
  },
];

const PortfolioPage = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({ target: ref });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <div>
      <motion.div
        className="h-full"
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}
        onClick={() => console.log(scrollYProgress)}
      >
        <div className="h-[500vh] relative" ref={ref}>
          <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
            <motion.div style={{ x }} className="flex">
              <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
              {items.map((item) => (
                <div
                  className={`h-screen w-screen  flex items-center justify-center bg-gradient-to-r ${item.color} `}
                  key={item.id}
                >
                  <div className="flex flex-col gap-4 text-slate-500 bg-slate-100 shadow-md shadow-gray-300 mt-4  rounded-md p-4">
                    <h1 className="text-lg font-bold md:text-xl lg:text-2xl xl:text-3xl">
                      {item.title}
                    </h1>

                    <div className="relative w-64 h-48 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[500px] xl:h-[350px] mx-auto rounded-md">
                      <Image src={item.img} alt="" fill />
                    </div>

                    <div className="flex justify-between">
                      <div className="flex gap-2">
                        {item.icons?.map((icon) => icon)}
                      </div>
                      <div className="flex gap-4">
                        <Link
                          href={item.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FontAwesomeIcon
                            icon={faGithub}
                            style={{
                              width: "25px",
                              height: "25px",
                              color: "black",
                            }}
                          />
                        </Link>
                        <Link
                          href={item.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FontAwesomeIcon
                            icon={faGlobe}
                            style={{
                              width: "25px",
                              height: "25px",
                              color: "black",
                            }}
                          />
                        </Link>
                      </div>
                    </div>
                    <p className="w-80 md:w-96 text-sm lg:w-[300px] lg:text-base xl:w-[500px]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
      <div className="bg-black h-screen w-screen">hello</div>
    </div>
  );
};

export default PortfolioPage;
