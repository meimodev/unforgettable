import {Fade, Carousel} from "../lib/reveal";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
    title: 'Explore The Paradise! Minahasa',
    description: 'Enjoy your adventurous trip to Minahasa, where highlands, mountains, beaches, hot and cold springs, waterfalls, meets the rich cultural heritage scattered around the land @BPPD Minahasa',
    generator: 'BPPD Minahasa',
    applicationName: 'unforgettableminahasa.com',
    referrer: 'origin-when-cross-origin',
    keywords: ['Minahasa', 'unforgettable', 'adventure', 'explore', 'tourism', 'north sulawesi', 'BPPD Minahasa '],
    authors: [{name: 'Badan Promosi Pariwisata Daerah', url: 'https://www.unforgettableminahasa.com'}],
    themeColor: 'black',
    colorScheme: 'light',
    creator: 'meimodev',
    publisher: 'meimodev',
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: true,

        },
    },
}

export default function Home() {

    const videoMainUrl = "/video.mp4";
    const destinations = [
        {
            name: "Kengkang Waterfall",
            link: "kengkang",
            images: [
                "https://i.ibb.co/X3yGjdH/1-kengkang.jpg",
                "https://i.ibb.co/Jn7NkcZ/2-kengkang.jpg",
            ],
        },
        {
            name: "Ranolewo Hot Spring",
            link: "ranolewo",
            images: [
                "https://i.ibb.co/MpQvJ6z/1-ranolewo.jpg",
                "https://i.ibb.co/WH5tDtx/2-ranolewo.jpg",
            ],
        },
        {
            name: "Pinawetengan Stone",
            link: "pinawetengan",
            images: [
                "https://i.ibb.co/r5ztqgV/1-watupinawetengan.jpg",
                "https://i.ibb.co/VSxXv2y/2-watupinawetengan.jpg",
            ],
        },
        {
            name: "Moraya Fortress",
            link: "moraya",
            images: [
                "https://i.ibb.co/DD4Jx08/1-benteng-moraya.jpg",
                "https://i.ibb.co/SQtBp1M/2-benteng-moraya.jpg",
            ],
        },
        {
            name: "Rok rok Waterfall",
            link: "rokrok",
            images: [
                "https://i.ibb.co/hXT8S7b/1-rokrok-waterfall-kembes.jpg",
                "https://i.ibb.co/R647ySt/2-rokrok-waterfall-kembes.jpg",
            ],
        },
        {
            name: "Ror Beach",
            link: "ror",
            images: [
                "https://i.ibb.co/HHbW10M/1-pantai-ror.jpg",
                "https://i.ibb.co/pyDqk45/2-pantai-ror.jpg",
            ],
        },

    ];
    const resorts = [

        {
            name: "Yama Resort",
            location: "Tondano",
            href: "https://goo.gl/maps/u7kmk3jRSaAyYwoo9",
            images: [
                "https://i.ibb.co/RNVxh0F/1-yamaresort.jpg",
                "https://i.ibb.co/n1g0CJF/2-yamaresort.jpg",
            ],
        },
        {
            name: "D 88",
            location: "Tondano",
            href: "https://goo.gl/maps/zf4oxeFVbZtQJZhe6",
            images: [
                "https://i.ibb.co/C8SF1FP/1-D88.jpg",
                "https://i.ibb.co/Kb7R9mf/2-D88.jpg",
            ],
        },
        {
            name: "Camp James",
            location: "Remboken",
            href: "https://goo.gl/maps/QLC7TUUC8MBzY2wf6",
            images: [
                "https://i.ibb.co/yd3z96j/2-camp-james.jpg",
                "https://i.ibb.co/4Z0Rqvv/1-camp-james.jpg",
            ],
        },
        {
            name: "Luna's Kitchen & Villa",
            location: "Tondano",
            href: "https://goo.gl/maps/WPwfcgMcihh7iEcL8",
            images: [
                "https://i.ibb.co/9yjM6W1/1-lunas.jpg",
                "https://i.ibb.co/Qm7229g/2-lunas.jpg",
            ],
        },
        {
            name: "Wale Walanda",
            location: "Tondano",
            href: "https://goo.gl/maps/uVVgAvHhdudvMtcTA",
            images: [
                "https://i.ibb.co/6JH6ZR9/1-wale-walanda.jpg",
                "",
            ],
        },
        {
            name: "Astound Hill",
            location: "Tondano",
            href: "https://goo.gl/maps/3hL87TPLtGabPrSA6",
            images: [
                "https://i.ibb.co/GTvBp55/2-astound-hill.jpg",
                "",
            ],
        },

    ];

    const _buildDestinationCard = ({title, imageUrl, keyLink}) =>
        <Link
            href={"/destinations/" + keyLink}
            className="flex-1 flex-col flex text-neutral-500  hover:text-primary-600  hover:-translate-y-2 transition ease-out duration-500 cursor-pointer ">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imageUrl} className="h-[9rem] sm:h-[13rem] md:h-[17rem] lg:h-[20rem]  w-full rounded-lg"
                 alt="image"/>
            <div className="text-center uppercase pt-2 font-bold ">{title}</div>
        </Link>;

    const _buildResortCardItem = ({title, location, imageUrl, href}) =>
        <Fade
            cascade
            triggerOnce
            damping={0.7}
            duration={500}
            className="flex-col flex rounded-xl px-6 text-neutral-500">

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imageUrl} className="h-[20rem] sm:h-[30rem] w-full rounded-lg object-cover" alt="image"/>
            <div className="text-center uppercase pt-5 text-lg font-bold">{title}</div>

            <a href={href} target="_blank"
               className="bg-primary-600 rounded-xl p-3 mb-20 mt-6 text-white cursor-pointer w-full mx-auto max-w-lg hover:-translate-y-2 transition ease-out duration-500">
                <div className="flex gap-1 justify-center">
                    <span className="material-symbols-outlined">location_on</span>
                    <div>{location}</div>
                </div>
            </a>
        </Fade>
    ;

    const _buildSectionTitle = ({title, desc}) =>
        <div className="font-bold my-6 mb-12 flex flex-col ">
            <Fade duration={250}
                  damping={0.20}
                  cascade
                  className="text-primary-600 text-sm">
                {desc}
            </Fade>
            <Fade duration={250}
                  damping={0.20}
                  cascade
                  className="uppercase text-4xl text-neutral-500">

                {title}
            </Fade>
        </div>


    const _buildSocialMediaButton = ({title, iconSrc, href}) =>
        <div className="max-w-4xl  flex justify-center gap-3 cursor-pointer group">
            <a href={href} target="_blank"
               className="border-transparent border-b-neutral-500 border-2 p-3 rounded-md flex items-center gap-3 transition group-hover:border-primary-600 duration-500 ease-out group-hover:-translate-y-1 ">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={iconSrc}
                     alt="social media icon"
                     className="h-5 w-5"
                />
                <span className="text-sm">{title}</span>
            </a>
        </div>

    return (
        <div className="scroll-smooth">
            {/* eslint-disable-next-line @next/next/google-font-display,@next/next/no-page-custom-font */}
            <link rel="stylesheet"
                  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"/>

            {/* eslint-disable-next-line @next/next/google-font-display,@next/next/no-page-custom-font */}
            <link rel="stylesheet"
                  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"/>

            <section id="navbar">
                <NavBar/>
            </section>

            <section id='main' className='h-screen pt-48 flex-1 flex flex-col justify-around '>
                <div className="absolute left-0 right-0 top-0 bottom-0 z-10">
                    <video
                        autoPlay
                        muted
                        loop
                        src={videoMainUrl}
                        className="h-full w-full object-cover"
                    />
                </div>

                <div className="absolute left-0 right-0 top-0 bottom-0 z-20">
                    <div className="h-full text-4xl flex-1 flex flex-col justify-center ">
                        <Fade cascade damping={1} direction={"down"}
                              className="uppercase text-center font-black text-neutral-300">
                            <div className="">EXPLORE</div>
                            <div className="flex gap-2 justify-center">
                                <Fade cascade delay={750} damping={1} direction={"down"}>
                                    <div className="">THE</div>
                                    <div className="text-primary-600 stroke-1 stroke-primary-50">PARADISE</div>
                                </Fade>
                            </div>
                            <div className="">MINAHASA</div>
                            <div className='h-0.5 w-1/4  bg-primary-600 my-6 mx-auto'/>

                        </Fade>
                    </div>
                </div>

            </section>

            <section id="destinations"
                     className="text-center bg-gradient-to-b from-transparent via-stone-300/50 to-transparent py-12 my-12">

                <_buildSectionTitle title="Destinations" desc="Explore to your heart content"/>

                <Fade delay={500} cascade damping={0.5} className="max-w-[90rem] xl:mx-auto mx-3 md:mx-6">
                    <div className="flex justify-around my-3  gap-3 lg:gap-12 lg:my-12">
                        <_buildDestinationCard
                            title={destinations[0].name}
                            keyLink={destinations[0].link}
                            imageUrl={destinations[0].images[0]}/>
                        <_buildDestinationCard
                            title={destinations[1].name}
                            keyLink={destinations[1].link}
                            imageUrl={destinations[1].images[0]}/>
                    </div>
                    <div className="flex justify-around my-3  gap-3 lg:gap-12 lg:my-12">
                        <_buildDestinationCard
                            title={destinations[2].name}
                            keyLink={destinations[2].link}
                            imageUrl={destinations[2].images[0]}/>
                        <_buildDestinationCard
                            title={destinations[3].name}
                            keyLink={destinations[3].link}
                            imageUrl={destinations[3].images[0]}/>
                    </div>
                    <div className="flex justify-around my-3 gap-3 lg:gap-12 lg:my-12">
                        <_buildDestinationCard
                            title={destinations[4].name}
                            keyLink={destinations[4].link}
                            imageUrl={destinations[4].images[0]}/>
                        <_buildDestinationCard
                            title={destinations[5].name}
                            keyLink={destinations[5].link}
                            imageUrl={destinations[5].images[0]}/>
                    </div>
                </Fade>
            </section>

            <section id="resorts" className="text-center py-12 my-12">

                <_buildSectionTitle title="Resorts" desc="Stay the night"/>

                <Carousel autoPlay
                          infiniteLoop
                          interval={2000}
                          showThumbs={false}
                          showArrows={true}
                          showStatus={false}
                          className="xl:max-w-[80rem] xl:mx-auto"
                >

                    {/*<_buildResortCardItem title="YAMA RESORT" price="Rp. 500.000 / Night" location="Tonadno"/>*/}
                    {/*<_buildResortCardItem title="HOTEL TOUDANO" price="Rp. 500.000 / Night" location="Amurang"/>*/}
                    {/*<_buildResortCardItem title="SULTAN YAHUDI" price="Rp. 500.000 / Night" location="Langowan"/>*/}

                    {resorts.map((e, i) =>
                        <_buildResortCardItem
                            key={i}
                            title={e.name}
                            location={e.location}
                            href={e.href}
                            imageUrl={e.images[0]}/>
                    )}

                </Carousel>


            </section>

            <section id="contacts" className="text-center ">

                <_buildSectionTitle title="Contacts" desc="get in touch"/>

                <div className="max-w-6xl flex flex-col items-center justify-center gap-10 mx-auto">

                    <_buildSocialMediaButton
                        title="Unforgettable Minahasa"
                        href="https://www.facebook.com/people/Unforgettable-Minahasa/100094597335629/"
                        iconSrc="/icons/facebook.svg"/>

                    <_buildSocialMediaButton
                        title="@UnforgettableMinahasa"
                        href="https://www.instagram.com/unforgettableminahasa/"
                        iconSrc="/icons/instagram.svg"/>

                    <_buildSocialMediaButton
                        title="@unforgettableminahasa"
                        href="https://www.tiktok.com/@unforgettableminahasa"
                        iconSrc="/icons/tiktok.svg"/>

                    {/*<_buildSocialMediaButton*/}
                    {/*    title="+62 812 1234 1234"*/}
                    {/*    iconSrc="/icons/phone-solid.svg"/>*/}
                </div>
            </section>

            <section id="footer" className="pt-32">
                <Footer/>
            </section>


        </div>


    )
}
