import React from 'react'
import { FaGithubSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa'

 export const Footer = () => {
  return (
    <>
    <div className="sm:flex item-center sm:justify-evenly bg-gray-800 text-white p-5">
     <div>
        <h3 className="text-green-500 font-bold text-3xl text-center py-2">
          {" "}   Ganga Prasad Yadav</h3>
            <p className="text-center">Full Stack | Java Devloper</p>
        </div> 
        <div>
            <h3 className=" text-yellow-600 font-bold text-xl text-center py-2">Links</h3>
        <ul className="text-center">
            <li>
                <a href="/">Home</a>

            </li>
            <li>
                <a href="/#Projects">Projects</a>
            </li>
            <li>
                <a href="/#About">About</a>

            </li>
            <li>
                <a href="/#Education">Education</a>
            </li>
            <li>
                <a href="/#Techskills">Techskills</a>
            </li>
            <li>
                <a href="/#RecentWork">RecentWork</a>
            </li>
        </ul>
        </div>
       <div>
        <h2 className="text-4xl font-bold text-yellow-400 text-center py-2">Follow me</h2>
        <ul className="flex flex-col justify-center items-center">
            <li>
                <a href="https://www.linkedin.com">
                <FaLinkedin className=" text-pink-400  text-xl text-center justify-center hover:text-yellow-400" />
                </a>
            </li>
            <li>
                <a href="https://github.com/">
                <FaGithubSquare className="text-green-200 text-xl hover:text-pink-600" />


                </a>
            </li>
            <li>
                <a href="https://www.instagram.com">
                <FaInstagramSquare className="text-orange-400 hover:text-white text-xl" />
                </a>
            </li>


        </ul>
       </div>
    </div>
    </>
  )
}

export default Footer
