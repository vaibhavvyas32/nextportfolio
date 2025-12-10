'use client'

import { Project } from '@/types/project';
import ProjectCard from './ProjectCard';
import { useState } from 'react';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { Badge } from '@radix-ui/themes';
import { bricolage_grotesque } from '@/utils/fonts';


const ProjectCardList = () => {
  const [visibleProjects, setVisibleProjects] = useState(4);

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => prev + 8);
  };

  return (
    <div className='w-full h-fit px-64 max-[1025px]:px-4 max-[1285px]:px-40 max-lg:px-0 max-sm:px-4 flex flex-col items-center pb-8'>
      <div className="flex w-full flex-col gap-4 lg:flex-row mt-4 px-32 max-lg:px-0 max-sm:px-0 flex-wrap items-center ml-14 max-sm:ml-0 max-lg:ml-0 max-[350px]:mr-5 max-[321px]:mr-10">
        {data.slice(0, visibleProjects).map((project: Project, idx: number) => (
          <ProjectCard
            key={idx}
            logo={project.logo}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            link={project.link}
            source={project.source}
          />
        ))}
      </div>
      {visibleProjects < data.length && (
        <Badge color="gray" variant="solid" highContrast onClick={loadMoreProjects} className={`text-xs max-sm:text-[10px] flex items-center text-center dark:hover:bg-gray-300 py-1 px-2 cursor-pointer hover:bg-gray-800 mt-6 ${bricolage_grotesque}`}>
          <span>Load More</span>
          <span className='!ml-[-3px] mt-[1px]'>
            <ChevronDownIcon className='h-3 w-3 dark:!text-black !text-white  shrink-0 text-muted-foreground transition-transform duration-200' />
          </span>
        </Badge>
      )}
    </div>
  )
}

export default ProjectCardList;

const data: Project[] = [
  
  {
    logo: '/logo.jpg',
    title: "ZaWardo Stopwatch",
    description: "A utility for users to make use of stopwatch on any of their devices so you can keep record of time.",
    techStack: ["HTML5", "Django","allauth", "Vercel", "mySQL"],
    link: "",
    source: "https://github.com/vaibhavvyas32/ZaWardoStopWatch",
  },
  {
    logo: '/logo.jpg',
    title: "Gym Manager",
    description: "A web application to track daily exercise routines, including sets and reps, for personal use and sharing with friends. The app allows users to record exercises, view progress, and keep track of workout history.",
    techStack: ["Next.js", "Tailwind CSS", "Django", "Vercel", "mySQL"],
    link: "https://gymjao-frontend.vercel.app/",
    source: "",
  },
  {
    logo: '/logo.jpg',
    title: "Weather App",
    description: "Allows users to search for the weather of a specific city and displays the current weather along with the temperature, wind speed, and humidity. The app makes use of the OpenWeatherMap API to fetch weather data for the searched city.",
    techStack: ["Next.js", "OpenWeatherAPI","Tailwind CSS"],
    link: "https://weatherapp-react-nine.vercel.app/",
    source: "https://github.com/vaibhavvyas32/weatherapp-react",
  },
  {
    logo: '/logo.jpg',
    title: "Gemini Remake",
    description: "Full responsive Gemini Clone. The app makes use of the Gemini API to generate the results given by the user as prompt. You can create new chats as well.",
    techStack: ["React","TypeScript", "Gemini API", "Tailwind CSS"],
    link: "https://gemini-clone-sable-five.vercel.app/",
    source: "https://github.com/vaibhavvyas32/gemini-clone",
  },

];
