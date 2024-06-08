import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamically import the WebGLCanvas component to avoid server-side rendering issues
const WebGLCanvas = dynamic(() => import('./components/WebGLCanvas'), { ssr: false });

const Home = () => {
    return (
        <div style={{ position: 'relative', height: '100vh', width: '100%' }}>
            <Suspense fallback={<div>Loading...</div>}>
                <WebGLCanvas />
            </Suspense>
            <div style={{ position: 'relative', zIndex: 1, color: 'white', textAlign: 'center', top: '50%', transform: 'translateY(-50%)' }}>
                <h1>Welcome to Ashley's website</h1>
                <div class="intro-details">
                    <p>I am Ashley, a 4th year Computer Science student at the University of Waterloo.</p>
                    <p>Specializing in <span class="skills">Backend, Frontend, Database, Graphics</span>.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;



