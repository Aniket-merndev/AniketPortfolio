 /** 
 * @copyright 2024 Aniket-merndev
 * @lisence Apache-2.0
 */


 /**
  * Components
  */

import SkillCard from "./SkillCard";

 const skillItem = [
    {
      imgSrc: 'images/figma.svg',
      label: 'Figma',
      desc: 'Design tool'
    },
    {
      imgSrc: 'images/html.svg',
      label: 'HTML',
      desc: 'Structure'
    },
    {
      imgSrc: 'images/css3.svg',
      label: 'CSS',
      desc: 'User Interface'
    },
    {
      imgSrc: 'images/javascript.svg',
      label: 'JavaScript',
      desc: 'Interaction'
    },
    {
      imgSrc: 'images/nodejs.svg',
      label: 'NodeJS',
      desc: 'Web Server'
    },
    {
      imgSrc: 'images/expressjs.svg',
      label: 'ExpressJS',
      desc: 'Node Framework'
    },
    {
      imgSrc: 'images/Postgresql.svg',
      label: 'PostgreSQL',
      desc: 'Database'
    },
    {
      imgSrc: 'images/react.svg',
      label: 'React',
      desc: 'Framework'
    },
    {
      imgSrc: 'images/Bootstrap.svg',
      label: 'Bootstrap',
      desc: 'User Interface'
    },
    {
      imgSrc: 'images/C.svg',
      label: 'C ',
      desc: 'Programming Language'
    },
    {
      imgSrc: 'images/CPP.svg',
      label: 'C++',
      desc: 'Programming Language'
    },
    {
      imgSrc: 'images/java.svg',
      label: 'Java',
      desc: 'Programming Language'
    },
    {
      imgSrc: 'images/Python.svg',
      label: 'Python',
      desc: 'Programming Language'
    },
    {
      imgSrc: 'images/Php.svg',
      label: 'php',
      desc: 'Scripting Language'
    },
    {
      imgSrc: 'images/xampp.svg',
      label: 'XAMPP',
      desc: 'local Server'
    },
    {
      imgSrc: 'images/mysql.svg',
      label: 'MySQL',
      desc: 'Database'
    },
    {
      imgSrc: 'images/Excel.svg',
      label: 'Excel',
      desc: 'Data Analysis'
    },
    {
      imgSrc: 'images/Git.svg',
      label: 'Git',
      desc: 'DevOps'
    },
    {
      imgSrc: 'images/canva.svg',
      label: 'Canva',
      desc: 'Design Tool'
    },
    {
      imgSrc: 'images/Photoshop.svg',
      label: 'Photoshop',
      desc: 'Image Editor'
    },
  ];


 const Skill = () => {
    return (
        <section className="section">
            <div className="container">
                <h2 className="headline-2 reveal-up">
                Tools I use
                </h2>

                <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
                I utilize a versatile set of tools and technologies to design, develop, and deliver innovative and high-quality solutions.
                </p>
                <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                    {
                        skillItem.map(({imgSrc, label, desc},key)=>
                        {
                            return(
                                <SkillCard 
                                    key= {key}
                                    imgSrc={imgSrc}
                                    label={label}
                                    desc={desc}
                                    classes="reveal-up"
                                />
                            )
                        })
                    }
                </div>

            </div>
        </section>
    )
 }

 export default Skill