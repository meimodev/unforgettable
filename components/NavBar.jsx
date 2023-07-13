export default function NavBar(){

    const _buildNavbarItem = ({title}) => <div className="group cursor-pointer">
        <div
            className="group-hover:-translate-y-1 transition ease-out duration-500 text-neutral-300 group-hover:text-white ">
            {title}
        </div>
        <div className="group-hover:bg-primary-400 h-0.5 transition ease-out duration-500"></div>
    </div>

    return  <div
        className="fixed bg-gradient-to-b from-neutral-900 via-neutral-900/50 to-transparent left-0 right-0 top-0 z-40 pb-14 ">
        <div className="px-6 sm:px-12 md:px-24">
            <div className='flex justify-center sm:justify-between items-center'>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo-white.png" alt="logo white" className="w-[12rem]"/>
                <div className="hidden sm:flex gap-6 text-white text-xs items-center">
                    <_buildNavbarItem title={"DESTINATION"}/>
                    <_buildNavbarItem title={"RESORT"}/>
                    <_buildNavbarItem title={"CONTACT"}/>
                </div>
            </div>
        </div>

    </div>
}