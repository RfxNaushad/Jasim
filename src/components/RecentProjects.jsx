/* eslint-disable react/prop-types */

import { useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import Button from "./shared/Button";

const projects = [
    {
        id: 1,
        title: "Amalinyc",
        link:"https://www.amalinyc.com/",
        image: "/recent_project1.png",
        category: "React JS",
        technologies: [
            "React",
            "Redux",
            "Express",
            "Node.js"
        ],
    },
    {
        id: 2,
        title: "Dffrntera",
        link: "https://www.dffrntera.com/",
        image: "/recent_project2.png",
        category: "React JS",
        technologies: [
            "React",
            "Redux",
            "Swiper"
        ],
    },
    {
        id: 3,
        title: "Get Repeat",
        link: "https://getrepeat.io/",
        image: "/recent_project3.png",
        category: "React JS",
        technologies: [
            "React",
           "AWS",
           "Lucide",
           "Next js",
           "Radix UI"
        ],
    },
    {
        id: 4,
        title: "Sea Cats",
        link: "https://seacat.rossinavi.it/",
        image: "/recent_project4.png",
        category: "React JS",
        technologies: [
            "React",
            "Redux",
            "Lenis",
            "GSAP",
            "Three.js"
        ],
    },
    {
        id: 5,
        title: "Cure",
        link:"https://cure.org/",
        image: "/recent_project5.png",
        category: "Wordpress",
        technologies: [
            "Wordpress",
            "GSAP",
            "jQuery",
            "PHP"
        ],
    },
    {
        id: 6,
        title: "Tim Blog",
        link:"https://tim.blog/",
        image: "/recent_project6.png",
        category: "Wordpress",
        technologies: [
            "Wordpress",
            "GSAP",
            "jQuery",
            "PHP",
            "Yoast SEO"
        ],
    },
];
const FilterButton = ({ label, isActive, onClick }) => (
    <button
        className={`px-6 py-3 text-nowrap rounded-full text-xs md:text-sm font-medium ${isActive ? "bg-[#00e676] text-white" : "bg-gray-700 text-white"
            }`}
        onClick={onClick}
    >
        {label}
    </button>
);

export default function ProjectShowcase() {
    const containerRef = useRef()

    const [filter, setFilter] = useState("All");
    const [visibleProjects, setVisibleProjects] = useState(4);

    const filteredProjects = projects.filter(
        (project) => filter === "All" || project.category === filter
    );

    const loadMore = () => {
        setVisibleProjects((prevVisible) => prevVisible + 4);
    };
    const showLess = () => {
        setVisibleProjects(4);
        containerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    return (
        <div ref={containerRef} className="bg-black text-white py-8 md:py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1120px] mx-auto">
                <div className="flex space-x-4 mb-12 overflow-x-auto">
                    {["All","React JS", "Wordpress"].map(
                        (category) => (
                            <FilterButton
                                key={category}

                                label={category}
                                isActive={filter === category}
                                onClick={() => setFilter(category)}
                            />
                        )
                    )}
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-6 md:mb-12">
                    {filteredProjects
                        .slice(0, visibleProjects)
                        .map((project, index) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                
                                isWide={index%3==0 || index%4==0}
                            />
                        ))}
                </div>
                {visibleProjects < filteredProjects.length && (
                    <div className="text-center">
                        <Button text='Show More' onClick={loadMore} />
                    </div>
                )}
                {
                    (visibleProjects > filteredProjects.length && visibleProjects > 4) && (
                        <div className="text-center">
                            <Button text='Show Less' onClick={showLess} />
                        </div>
                    )
                }
            </div>
        </div>
    );
}