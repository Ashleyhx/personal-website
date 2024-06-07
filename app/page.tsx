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
                <h1>Welcome to Ashley's Website</h1>
                <p>This is the introduction.</p>
            </div>
        </div>
    );
};

export default Home;



