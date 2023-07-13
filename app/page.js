import {Fade, Carousel} from "../lib/reveal";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function Home() {

    const _buildPostCard = ({title}) =>
        <div
            className="flex-1 flex-col flex  hover:text-primary-400  hover:-translate-y-2 transition ease-out duration-500 cursor-pointer ">
            <img src="/test.jpg" className="h-[9rem] sm:h-[13rem] md:h-[17rem] lg:h-[20rem]  w-full rounded-lg"/>
            <div className="text-center uppercase pt-2  font-bold">{title}</div>
        </div>;

    const _buildResortCardItem = ({title, location, price}) =>
            <Fade
                cascade
                triggerOnce
                damping={0.7}
                duration={500}
                className="flex-1 flex-col flex rounded-xl px-6">

                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />

                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

                <img src="/test.jpg" className="h-[20rem] sm:h-[30rem] md:h-[35rem] xl:h-[45rem] w-full rounded-lg"/>
                <div className="text-center uppercase pt-5 text-lg font-bold">{title}</div>
                <div className="flex gap-6 justify-center pt-4 items-center">
                    <div className="flex gap-1">
                    <span className="material-symbols-outlined">location_on</span>
                        <div>{location}</div>
                    </div>

                    <div className="flex gap-1">
                   <span className="material-symbols-outlined">sell</span>
                        <div>{price}</div>
                    </div>

                </div>
                <div
                    className="bg-primary-400 rounded-xl p-3 mb-20 mt-6 text-white cursor-pointer hover:-translate-y-2 transition ease-out duration-500">
                    Book Now
                </div>
            </Fade>
    ;

    const _buildSectionTitle = ({title, desc}) =>
        <div className="font-bold my-6 mb-12 flex flex-col ">
            <Fade duration={250}
                  damping={0.20}
                  cascade
                  className="text-primary-300  text-sm">
                {desc}
            </Fade>
            <Fade duration={250}
                  damping={0.20}
                  cascade
                  className="uppercase text-4xl">

                {title}
            </Fade>
        </div>


    const _buildSocialMediaButton = ({title, iconSrc}) =>
        <div className="max-w-4xl w-full flex justify-center gap-3 cursor-pointer group">
            <div
                className="border-transparent  border-2 p-3 rounded-md flex items-center gap-3 transition group-hover:border-primary-400 duration-500 ease-out group-hover:-translate-y-1 ">
                <img src={iconSrc}
                     alt="social media icon"
                     className="h-5 w-5"
                />
                <span className="text-sm">{title}</span>
            </div>
        </div>

    return (
        <div className="">

            <section id="navbar">
                <NavBar/>
            </section>

            <section id='main' className='h-screen pt-48 flex-1 flex flex-col justify-around '>
                <div className="absolute left-0 right-0 top-0 bottom-0 z-10">
                    <video
                        autoPlay
                        muted
                        loop
                        src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                        className="h-full w-full"
                    />
                </div>

                <div className="absolute left-0 right-0 top-0 bottom-0  z-20">
                    <div className="h-full text-4xl flex-1  flex flex-col justify-center ">
                        <Fade cascade damping={1} direction={"down"}
                              className="uppercase text-center font-black">
                            <div className="">EXPLORE</div>
                            <div className="flex gap-2 justify-center">
                                <Fade cascade delay={750} damping={1} direction={"down"}>
                                    <div className="">THE</div>
                                    <div className="text-primary-400 stroke-1 stroke-primary-50">PARADISE</div>
                                </Fade>
                            </div>
                            <div className="">MINAHASA</div>
                            <div className='h-0.5 w-1/4  bg-primary-400 my-6 mx-auto'/>

                        </Fade>
                    </div>
                </div>

            </section>

            <section id="destinations"
                     className="text-center bg-gradient-to-b from-transparent via-stone-300/50 to-transparent py-12 my-12">

                <_buildSectionTitle title="Destinations" desc="Explore to your heart content"/>

                <Fade delay={500} cascade damping={0.5} className="max-w-[90rem] xl:mx-auto mx-3 md:mx-6">
                    <div className="flex justify-around my-3  gap-3 lg:gap-12 lg:my-12">
                        <_buildPostCard title="Page Spring"/>
                        <_buildPostCard title="Lake Tondano"/>
                    </div>
                    <div className="flex justify-around my-3  gap-3 lg:gap-12 lg:my-12">
                        <_buildPostCard title="Lake Tampusu"/>
                        <_buildPostCard title="Jappanese Cave"/>
                    </div>
                    <div className="flex justify-around my-3 gap-3 lg:gap-12 lg:my-12">
                        <_buildPostCard title="Fort Moraya"/>
                        <_buildPostCard title="Tatempengan Hill"/>
                    </div>
                </Fade>
            </section>

            <section id="Resorts" className="text-center py-12 my-12">

                <_buildSectionTitle title="Resorts" desc="Stay the night"/>

                <Carousel autoPlay
                          infiniteLoop
                          interval={4000}
                          showThumbs={false}
                          showArrows={false}
                          showStatus={false}
                          className="xl:max-w-[80rem] xl:mx-auto"
                >
                    <_buildResortCardItem title="YAMA RESORT" price="Rp. 500.000 / Night" location="Tonadno"/>
                    <_buildResortCardItem title="HOTEL TOUDANO" price="Rp. 500.000 / Night" location="Amurang"/>
                    <_buildResortCardItem title="SULTAN YAHUDI" price="Rp. 500.000 / Night" location="Langowan"/>

                </Carousel>


            </section>

            <section id="contacts" className="text-center ">

                <_buildSectionTitle title="Contacts" desc="get in touch"/>

                <div className="max-w-6xl flex flex-col lg:flex-row justify-center gap-3 mx-auto">

                    <_buildSocialMediaButton
                        title="UnforgettableMinahasa"
                        iconSrc="/icons/facebook.svg"/>

                    <_buildSocialMediaButton
                        title="UnforgettableMinahasa"
                        iconSrc="/icons/instagram.svg"/>

                    <_buildSocialMediaButton
                        title="UnforgettableMinahasa"
                        iconSrc="/icons/tiktok.svg"/>

                    <_buildSocialMediaButton
                        title="+62 812 1234 1234"
                        iconSrc="/icons/phone-solid.svg"/>
                </div>
            </section>

            <section id="footer" className="pt-20 ">
                <Footer/>
            </section>


        </div>


    )
}
