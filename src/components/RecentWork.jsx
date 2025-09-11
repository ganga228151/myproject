import React from 'react'
const projects = [
    {
        id:1,
        name:"Personal Portfolio",
        description:"I'll create a sleek, responsive portfolio website using HTML, CSS, JavaScript, and Tailwind CSS . ",
        technologys:[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "tailwindcss",
            "Framer-motion",
            
        ] ,
        
    },
    {
        id:2,
        name:"E-commerce Website",
        description:" I create  a e-commerce website using HTML, CSS, JavaScript, and Tailwind CSS  where we apply CRUD operation for product Update,Delete,Add on Admin side.",
        technologys:[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "tailwindcss",
            "Framer-motion",
            "Nodejs",
            "Expressjs",
            "MongoDB",
        ],
        
    },
    {
        id:3,
        name:"Social Media App",
        description:"I create a social media app using HTML, CSS, JavaScript, and Tailwind CSS  where user can post their thoughts and can like,comment on other posts.",
        technologys:[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "tailwindcss",
            "Framer-motion",
            "Nodejs",
            "Expressjs",
            "MongoDB",
        ],
        
    },
    {
        id:4,
        name:"AI image generator",
        description:"i create a AI image generator app using HTML, CSS, JavaScript, and Tailwind CSS  where user can generate image from text using openAI api.",
       technologys:[
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "tailwindcss",
        "mongoDB",
        "Nodejs",
        "Expressjs",
        "OpenAI",
        "imagepig API",
        "use imagepig api key",
        "cloudinary for image storage",
       ],
    },

        ];
export const RecentWork = () => {
  return (
    <>
    <div className="my-10" id="RecentWork">
        <h1 className=" text-center  font-bold text-4xl text-gray-700 my-3">
            Recent Projects</h1>
            <ul className=" flex flex-wrap item-center justify-center gap-5 mt-5">
                {projects.length > 0 &&
                projects.map((project) => {
                    return (
                        <li key={project.id} className=" w-1/3 shadow-2xl shadow-gray-500 p-5 rounded-md hover:scale-105 transition-all ease-in">
                            <h2 className="text-xl font-bold py-3 text-gray-800">{project.name}</h2>
                            <p>{project.description}</p>
                            <ul className="flex flex-wrap item-center justify-start my-5 gap-3">
                                {project.technologys.length>0 &&
                                project.technologys.map((technologys, index) => {
                                    return(
                                        <li
                                        key={index}
                                        className="py-2 px-5 shadow-gray-400 rounded-md bg-gray-100">
                                            {technologys}

                                        </li>
                                    );
                                })}
                            </ul>
                            <a href="https://github.com/ganga228151/portfolio.git" className="py-3 px-5 rounded-lg bg-blue-500 cursor-pointer flex item-center justify-center text-white font-medium "> source code</a>
                        </li>
                            );
})}
                    
            </ul>
      
    </div>
 </>
  );
};
export default RecentWork;