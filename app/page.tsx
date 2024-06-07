import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamically import the WebGLCanvas component to avoid server-side rendering issues
const WebGLCanvas = dynamic(() => import('./components/WebGLCanvas'), { ssr: false });

const Home = () => {
    return (
        <div>
            <h1>Welcome to My Personal Website</h1>
            <p>This is the introduction.</p>
            <Suspense fallback={<div>Loading...</div>}>
                <WebGLCanvas />
            </Suspense>
            <p> AAAA </p>
        </div>
    );
};

export default Home;