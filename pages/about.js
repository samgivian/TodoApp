import Link from 'next/link'
import { useEffect } from 'react';
const About = () => {
    useEffect(() =>{

        console.log("use effect");
    },[])
    return (
        <div>
        <h1>Hello About</h1>
        <Link href="/"><a>Home</a></Link>
        </div>
    )
}
export default About;