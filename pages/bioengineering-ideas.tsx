import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


// Define an interface for the ImageLink props
interface ImageLinkProps {
    href: string;
    imgSrc: string;
    text: string;
    gridClass?: string; // Make gridClass optional as it might not always be provided
}

// Use the ImageLinkProps interface for the ImageLink component&#39;s props
const ImageLink: React.FC<ImageLinkProps> = ({ href, imgSrc, text, gridClass = '' }) => (
    <li className={`flex-none ${gridClass}`}>
        <Link href={href} passHref>
            <Image src={imgSrc} alt={text} width={500} height={300} className="rounded-lg" />
            <span className="">{text}</span>
        </Link>
    </li>
);


const Header2 = () => (
    <div className="max-w-screen-lg mx-auto py-2 pl-10 mt-10">
        <div className="grid grid-cols-3">

            <div className="col-span-3">
                <h2 className="font-unna font-bold italic text-4xl text-white text-left">
                    Engineering biology will <br /> revolutionize the human condition.
                </h2>
            </div>

            <div className="col-span-0">
                <div className="top-0 left-0 w-96 h-0">
                    <h2 className="font-unna font-bold italic text-3xl text-white text-left">
                    </h2>
                </div>
            </div>

        </div>
    </div>
);


const ImageBesideText = () => (
    <div className="max-w-screen-lg mx-auto py-2 px-10">
        <div className="grid grid-cols-2 gap-6">
            {/* Row 1 */}
            <Image src="/bio_eng_2.jpg" alt="Life" height={400} width={400} objectFit="cover" className="rounded-lg" />
            <p className="font-light text-sm font-extralight mt-4 text-left pr-24">Earth-life emerged spontaneously and evolved itself into living diversity and brand new phenomenal categories.</p>

            {/* Row 2 */}
            <Image src="/origin_of_life_1.jpg" alt="Life" height={400} width={400} objectFit="cover" className="rounded-lg" />
            <p className="font-light text-sm font-extralight mt-4 text-left pr-24">An intelligently-guided, unconstrained version of biology could result in forms and phenomena as yet unimaginable.</p>

            {/* Row 3 */}
            <Image src="/neurons_background.jpg" alt="Life" height={400} width={400} objectFit="cover" className="rounded-lg" />
            <p className="font-light text-sm font-extralight mt-4 text-left pr-24">We ourselves exist on that same biological operating system. For that reason, it is possibly the ultimate exploration.</p>
        </div>
    </div>
);



// ImagePanel for the second row with potentially different rules or styles
const NavPanel = () => (
    <div className="max-w-screen-lg mx-auto py-10">
        <ul className="grid grid-rows-1 grid-cols-5 gap-10 mr-20 ml-20 mt-36 text-sm">
            {[
                { href: "/", imgSrc: "/steven.png", text: "Home" },
                { href: "/bioengineering-ideas", imgSrc: "/bio_eng.jpg", text: "BioEng Ideas" },
                { href: "/acorn-biolabs", imgSrc: "/acorn_biolabs_1950.jpg", text: "Acorn Biolabs" },
                { href: "/podcast", imgSrc: "/podcast_conversations.jpg", text: "Podcast" },
                { href: "/blog", imgSrc: "/blog.jpg", text: "Blog" }
            ].map((item, index) => (
                <ImageLink
                    key={index}
                    href={item.href}
                    imgSrc={item.imgSrc}
                    text={item.text}
                    gridClass="col-span-5 md:col-span-1"
                />
            ))}
        </ul>
    </div>
);


// Footer component
const Footer = () => (
    <footer className="italic p-10 bg-black w-full text-center text-white">
        the year is <b>2024</b>
        <p> all images generated via tireless midjourney prompting. </p>
    </footer>
);

// Adjust the main container of your Home component to include both ImagePanel components
export default function Home() {
    return (
        <div className="text-xs space-y-4 w-full flex flex-col items-center overflow-x-hidden">
            <Header2 />
            <ImageBesideText />

            <NavPanel />
            <Footer />
        </div>
    );
}
