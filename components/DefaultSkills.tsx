import React from 'react'
import Image from 'next/image';
import javaIcon from './images/java.png';
import cSharpIcon from './images/csharplogo.png';
import cppIcon from './images/cppLogo.png';
import jsIcon from './images/jsicon.png';
import tsIcon from './images/tsIcon.png';
import pythonIcon from './images/pythonIcon.png';
import htmlIcon from './images/htmlIcon.png';
import cssIcon from './images/cssIcon.png';
import sqlIcon from './images/sqlIcon.png';
import reactIcon from './images/reactIcon.png';
import nodeIcon from './images/nodeIcon.png';
import dockerIcon from './images/dockerIcon.webp';
import springIcon from './images/springIcon.png';
import mongoIcon from './images/mongIcon.webp';
import postgresIcon from './images/postgresIcon.png';
import androidIcon from './images/androidIcon.png';
import neo4jIcon from './images/neo4jIcon.png';
import atlassianIcon from './images/atlassian.png';
import gitIcon from './images/gitIcon.png';
import nextjsIcon from './images/nextjsIcon.png';
import tailwindIcon from './images/tailwindIcon.jpg';


export default function DefaultSkills(){
    return(
        <>
            <div className='flex pl-15 w-7/12'>
                <div className="text-lg">
                    <div className="font-semibold pb-5"> Languages </div>
                    <div className='flex w-full'>
                        <ul className='space-y-8 pl-10 text-base'>
                            <li>
                                <div className="image">
                                    <Image src={javaIcon}
                                        width={40}
                                        height={40}
                                        alt="image"/>
                                    <div className="text">
                                        Java
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="image">
                                    <Image src={cSharpIcon}
                                        width={40}
                                        height={40}
                                        alt="image"/>
                                    <div className="text">
                                        C#
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="image">
                                    <Image src={cppIcon}
                                        width={40}
                                        height={40}
                                        alt="image"/>
                                    <div className="text">
                                        C/C++
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="image">
                                    <Image src={jsIcon}
                                        width={40}
                                        height={40}
                                        alt="image"
                                        />
                                    <Image src={tsIcon}
                                        width={40}
                                        height={40}
                                        alt="image"/>
                                    <div className="text">
                                        Javascript/Typescript
                                    </div>
                                </div>
                            </li>
                        </ul>
                        
                        <ul className='space-y-8 pl-5 text-base'>
                            <li>
                                <div className="image">
                                    <Image src={pythonIcon}
                                        width={40}
                                        height={40}
                                        alt="image"/>
                                    <div className="text">
                                        Python
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="image">
                                    <Image src={htmlIcon}
                                        width={40}
                                        height={40}
                                        alt="image"
                                        />
                                    <Image src={cssIcon}
                                        width={45.8}
                                        height={46}
                                        alt="image"/>
                                    <div className="text">
                                        HTML/CSS
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="image">
                                    <Image src={sqlIcon}
                                        width={40}
                                        height={40}
                                        alt="image"/>
                                    <div className="text">
                                        SQL
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div className='pr-12'>
                    <div className='h-96 bg-gray-400 w-0.5'></div>
                </div>

                <div className='text-lg'>
                    <div className="font-semibold pb-5"> Technologies </div>
                    <div className='flex'>
                        <ul className='space-y-3 pl-5 text-base'>
                            <li>
                                <div className="image">
                                    <Image src={reactIcon}
                                        width={40}
                                        height={40}
                                        alt="image"/>
                                    <div className="text">
                                        React/React Native
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="image">
                                    <Image src={nodeIcon}
                                        width={40}
                                        height={40}
                                        alt="image"/>
                                    <div className="text">
                                        Node.js
                                    </div>
                                </div>
                            </li>

                            
                            <li>
                                <div className="image">
                                    <Image src={dockerIcon}
                                        width={40}
                                        height={40}
                                        alt="image"/>
                                    <div className="text">
                                        Docker
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="image">
                                    <Image src={springIcon}
                                        width={40}
                                        height={40}
                                        alt="image"/>
                                    <div className="text">
                                        Spring
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="image">
                                    <Image src={mongoIcon} 
                                        width={40}
                                        height={40}
                                        alt="image"/>
                                    <div className="text">
                                        MongoDB
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="image">
                                    <Image src={postgresIcon}
                                        width={40}
                                        height={40}
                                        alt="image"/>
                                    <div className="text">
                                        PostgreSQL
                                    </div>
                                </div>
                            </li>
                        </ul>

                        
                        <ul className='space-y-3 pl-5 text-base'>
                            

                            <li>
                                <div className="image">
                                    <Image src={androidIcon}
                                        width={40}
                                        height={40}
                                        alt="image"/>
                                    <div className="text">
                                        Android Studio
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="image">
                                    <Image src={neo4jIcon}
                                        width={40}
                                        height={40}
                                        alt="image"/>
                                    <div className="text">
                                        Neo4j
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="image">
                                    <Image src={gitIcon}
                                        width={40}
                                        height={42}
                                        alt="image"/>
                                    <div className="text">
                                        Git
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="image">
                                    <Image src={atlassianIcon}
                                        width={40}
                                        height={40}
                                        alt="image"/>
                                    <div className="text">
                                        Jira/Confluence/
                                        <br/>
                                        Bamboo 
                                        <br/>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="image">
                                    <Image src={tailwindIcon} 
                                        width={40}
                                        height={40}
                                        alt="image"/>
                                    <div className="text">
                                        Tailwindcss
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="image">
                                    <Image src={nextjsIcon}
                                        width={40}
                                        height={40}
                                        alt="image"/>
                                    <div className="text">
                                        Next.js
                                    </div>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}