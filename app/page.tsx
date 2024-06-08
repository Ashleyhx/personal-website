import dynamic from 'next/dynamic';
import { Suspense } from 'react';

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

// Dynamically import the WebGLCanvas component to avoid server-side rendering issues
const WebGLCanvas = dynamic(() => import('./components/WebGLCanvas'), { ssr: false });

const Home = () => {
    const about = {
        githubUrl: 'https://github.com/Ashleyhx',
        linkedinUrl: 'https://www.linkedin.com/in/ashley-huo/',
        email: 'mailto:x2huo@uwaterloo.ca'
    };

    return (
        <div style={{ position: 'relative', height: '100vh', width: '100%' }}>
            <Suspense fallback={<div>Loading...</div>}>
                <WebGLCanvas />
            </Suspense>
            <div style={{
                position: 'relative',
                zIndex: 1,
                color: 'white',
                textAlign: 'center',
                top: '50%',
                transform: 'translateY(-50%)'
            }}>
                <h1>Welcome to Ashley&apos;s website</h1>
                <div className="intro-details">
                    <p>I am Ashley, a 4th year Computer Science student at the University of Waterloo.</p>
                    <p>Specializing in <span className="skills">Backend, Frontend, Database, Graphics</span>.</p>
                </div>

                <div className="flex justify-center text-white mt-10">
                    <a href={about.githubUrl} className="icon-link">
                        <FaGithub size={30} className="mr-4"/>
                    </a>
                    <a href={about.linkedinUrl} className="icon-link">
                        <FaLinkedin size={30} className="mr-4"/>
                    </a>
                    <a href={about.email} className="icon-link">
                        <FaEnvelope size={30}/>
                    </a>
                </div>

                {/*<footer*/}
                {/*    style={{position: 'absolute', bottom: '10px', width: '100%', textAlign: 'center', color: 'white'}}>*/}
                {/*    <span className="text-sm text-center text-neutral-600">*/}
                {/*      © 2024 - Created by <a href={about.githubUrl} style={{color: 'white'}}>Ashleyhx</a>*/}
                {/*    </span>*/}
                {/*</footer>*/}
            </div>
        </div>
    );
};

export default Home;

