 /** 
 * @copyright 2024 Aniket-merndev
 * @lisence Apache-2.0
 */

 /**
  * Node modules
  */

//  import {ReactLenis} from 'lenis/react';

 /**
  * Components
  */
 import { ButtonPrimary } from "./Button";

 const sitemap = [
    {
      label: 'Home',
      href: '#home'
    },
    {
      label: 'About',
      href: '#about'
    },
    {
      label: 'Projects',
      href: '#work'
    },
    {
      label: 'Contact me',
      href: '#contact'
    }
  ];
  
  const socials = [
    {
      label: 'GitHub',
      href: 'https://github.com/Aniket-merndev'
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/aniket-dey-a014361a1/'
    },
    {
      label: 'Twitter X',
      href: 'https://x.com/Aniket_Dey_'
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/anijiin/'
    },
    {
      label: 'CodePen',
      href: 'https://codepen.io/Aniket-merndev'
    }
  ];

 const Footer = () =>
 {
    return(
        <footer className="section">
            <div className="container">

            <div className="lg:grid lg:grid-cols-2">


                <div className="mb-10">
                    <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
                    Let&apos;s build something amazing together!
                    </h2>
                  <h3>Reach me at :</h3>
                  <br />
                  <a href="mailto:aniket1279@gmail.com"><h3>aniketdey1279@gmail.com</h3> </a> 
                  <h3>+91 8582887792</h3>

                  {/* <ButtonPrimary
                    href="mailto:aniket1279@gmail.com"
                    label="Start project"
                    icon="chevron_right"
                    classes="reveal-up"
                  />   */}
                </div>

                <div className="grid grid-cols-2 gap-4 lg:pl-20">

                   <div>
                    <p className="mb-2 reveal-up">Sitemap</p>
                    <ul>
                        {sitemap.map(({ label, href}, key)=>(
                            <li key={key}>
                                <a 
                                href={href}
                                className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                   </div>

                   <div>
                    <p className="mb-2 reveal-up">Socials</p>
                    <ul>
                        {socials.map(({ label, href}, key)=>(
                            <li key={key}>
                                <a 
                                href={href}
                                target="_blank"
                                className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                   </div>

                </div>


            </div>

            <div className="flex items-center justify-between pt-10 mb-8 ">
                <a 
                href="/" 
                className="logo reveal-up"
                >
                  <img 
                  src="images/bear.svg" 
                  width={40}
                  height={40}
                  alt="Logo" 
                  />  
                </a>

                <p className="text-zinc-500 text-sm reveal-up">
                    &copy; {new Date().getFullYear()} <span className="text-zinc-200">Aniket-merndev</span>
                </p>
            </div>

            </div>
        </footer>
    )
 }

 export default Footer