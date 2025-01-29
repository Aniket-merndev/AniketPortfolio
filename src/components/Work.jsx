 /** 
 * @copyright 2024 Aniket-merndev
 * @lisence Apache-2.0
 */


 /**
  * Components
  */
import ProjectCard from "./ProjectCard";


 const works = [
    {
      imgSrc: 'images/keeper.png',
      title: 'Keeper Notes App',
      tags: ['REACT', 'JS'],
      projectLink: 'https://qch9mp.csb.app/'
    },
    {
      imgSrc: 'images/traveltracker.png',
      title: 'Travel Tracker',
      tags: ['Node', 'Express','Pg'],
      projectLink: 'https://travel-tracker-avdy.onrender.com/'
    },
    {
      imgSrc: 'images/secrets.png',
      title: 'Secret Keeper',
      tags: ['Node', 'Express', 'Pg'],
      projectLink: 'https://secret-keeper-q1g3.onrender.com/'
    },
    {
      imgSrc: 'images/permalist.png',
      title: 'Permalist',
      tags: ['Node', 'Express' , 'Pg'],
      projectLink: 'https://permalist-6mys.onrender.com/'
    },
    {
      imgSrc: 'images/worldquizcapital.png',
      title: 'World Capital Quiz',
      tags: ['Node', 'Express', 'Pg'],
      projectLink: 'https://world-countries-capital-quiz.onrender.com/'
    },
    {
      imgSrc: 'images/whisper.png',
      title: 'Silent Whisper',
      tags: ['API', 'Node','Express'],
      projectLink: 'https://silent-whisper.onrender.com/'
    },




    {
      imgSrc: 'images/bandname.png',
      title: 'Band Name',
      tags: ['Node','Express'],
      projectLink: 'https://band-generator-mn8i.onrender.com/'
    },
    {
      imgSrc: 'images/glowquest.png',
      title: 'Glow Quest',
      tags: ['CSS', 'Js'],
      projectLink: 'https://aniket-merndev.github.io/Glow-Quest/'
    },


    {
      imgSrc: 'images/drumkit.png',
      title: 'Drum Zone',
      tags: ['CSS', 'Js'],
      projectLink: 'https://aniket-merndev.github.io/Drum-Zone/'
    },
    {
      imgSrc: 'images/dice.png',
      title: 'Dice Game',
      tags: ['CSS', 'Js'],
      projectLink: 'https://aniket-merndev.github.io/Dice-Game/dicee.html'
    },
    {
      imgSrc: 'images/tindog.png',
      title: 'PawfectMatch',
      tags: ['CSS', 'Bootstrap'],
      projectLink: 'https://aniket-merndev.github.io/PawfectMatch/Index.html'
    },
   
    {
      imgSrc: 'images/musichub.png',
      title: 'Music Hub',
      tags: ['CSS', 'Js'],
      projectLink: 'https://aniket-dey2000.github.io/Aniket-Music-Hub/'
    },
    {
      imgSrc: 'images/parallax.png',
      title: 'Parallax Scrolling Effects',
      tags: ['CSS', 'Js'],
      projectLink: 'https://aniket-dey2000.github.io/Luna.github.io/'
    },
    {
      imgSrc: 'images/qr.svg',
      title: 'QR Code Generator',
      tags: ['Node'],
      projectLink: 'https://github.com/Aniket-merndev/QR-Code-Generator'
    },
    {
      imgSrc: 'images/banking.png',
      title: 'Banking System',
      tags: ['C++','OOP','STL','I/O','Exception Handling'],
      projectLink: 'https://github.com/Aniket-merndev/Banking-System'
    },
   
  ];

 const Work = () => {
    return (
        <section 
        id="work" 
        className="section"
        >
            <div className="container">

                <h2 className="headline-2 mb-8 reveal-up">
                My Projects
                </h2>

                <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                    {works.map(({ imgSrc, title, tags, projectLink },key)=>(
                        <ProjectCard 
                            key={key}
                            imgSrc={imgSrc}
                            title={title}
                            tags={tags}
                            projectLink={projectLink}
                            classes="reveal-up"
                        />
                    ))}
                </div>

            </div>

        </section>
    )
 }

 export default Work