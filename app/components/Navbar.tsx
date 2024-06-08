import Link from "next/link";

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                {/*<li>*/}
                {/*    <Link href="/about">About Me</Link>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <Link href="/blog">Blog</Link>*/}
                {/*</li>*/}
                <li>
                    <a href="/Ashley_s_Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;

