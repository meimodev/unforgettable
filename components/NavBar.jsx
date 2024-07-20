export default function NavBar({disableButtons = false}) {

    const _buildNavbarItem = ({title, href}) => <a href={href} className="group cursor-pointer">
        <div
            className="group-hover:-translate-y-1 transition ease-out duration-500 text-neutral-300 group-hover:text-white ">
            {title}
        </div>
        <div className="group-hover:bg-primary-400 h-0.5 transition ease-out duration-500"></div>
    </a>

    return <div
        className="fixed bg-gradient-to-b from-neutral-900 via-neutral-700/50 to-transparent left-0 right-0 top-0 z-40 pb-14 ">
        <div className="px-6 sm:px-12 md:px-24">
            <div className='flex justify-center sm:justify-between items-center'>
                <a href="/" className="w-[12rem]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/logo-white.png" alt="logo white" className="w-full"/>
                </a>
                {disableButtons ? null : <div className="hidden sm:flex gap-6 text-white text-xs items-center">
                    <_buildNavbarItem title={"DESTINATION"} href="#destinations"/>
                    <_buildNavbarItem title={"RESORT"} href="#resorts"/>
                    <_buildNavbarItem title={"CONTACT"} href="#contacts"/>
                </div>
                }
            </div>
        </div>

    </div>
}