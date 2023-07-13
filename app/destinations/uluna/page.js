import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function Page() {

    const _buildImage = () => {
        return <div className="h-[12rem] sm:h-[18rem] md:h-[24rem] xl:h-[30rem] w-full bg-red-400">
            Image
        </div>
    }

    return <div>
        <section id="navbar " className="pb-[12rem]">
            <NavBar/>
        </section>
        <section id="main" className="px-3 sm:px-12 max-w-3xl mx-auto">

            <div className="font-bold text-5xl">Uluna</div>

            <div className="text-sm py-6">
                <_buildImage/>
                <div>
                    Tondano, Koya
                </div>
                <div>
                    1.24521233, -6.2355223
                </div>
            </div>

            <div className="w-1/2 h-0.5 bg-primary-400  rounded"></div>

            <div className="text-justify py-6">
                <div className="py-3">
                    This is uluna lorem ipsum dolor sit amet
                    This is uluna lorem ipsum dolor sit amet
                    This is uluna lorem ipsum dolor sit amet
                    This is uluna lorem ipsum dolor sit amet
                </div>
                <div className="py-3">
                    This is uluna lorem ipsum dolor sit amet
                    This is uluna lorem ipsum dolor sit amet
                    This is uluna lorem ipsum dolor sit amet
                    This is uluna lorem ipsum dolor sit amet
                </div>
                <_buildImage/>
                <div className="py-3">
                    This is uluna lorem ipsum dolor sit amet
                    This is uluna lorem ipsum dolor sit amet
                    This is uluna lorem ipsum dolor sit amet
                    This is uluna lorem ipsum dolor sit amet
                </div>

            </div>

            <div className="h-40 w-full bg-red-400">
            Google Map view of the destination
            </div>

            <div className="text-center text-xs py-12">
                <div className="h-[1px] w-1/2 bg-primary-400 rounded-xl mx-auto my-2"></div>
                <div>oleh: admin</div>
            </div>


        </section>
        <section id="footer" className="pt-12">
            <Footer/>
        </section>
    </div>
}