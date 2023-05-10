import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

function Home() {
  return (
    <div>
      <h1 className="text-3xl underline"> Home Page </h1>
      <h1 className="text-3xl underline"> 
        <Link href="/portfolio"> Portfolio </Link>
      </h1>
      <h1 className="text-3xl underline"> 
        <Link href="/about-me"> About Me </Link>
      </h1>
    </div>
  )
}

export default Home
