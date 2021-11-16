import Image from 'next/image'
import Link from 'next/link';

const HeroSection = () => {

    return (
        <section className="section our-hero-section pt-28">
            <div className="max-w-container-inner m-auto px-4">
                <div className="main-logo text-center z-10">
                    <Image
                            src="/big-logo.png"
                            alt="gravity"
                            width={840}
                            height={155}
                        />
                </div>
                <h1 className="font-bold z-10 lg:text-[33px] md:text-[25px] text-[20px] text-white leading-10 lg:mb-10 mb-5 text-center">DeFi backed by <span className="text-primary">bitcoin</span></h1>
                <h2 className="font-manrope z-10 lg:text-2xl text-lg leading-8 font-normal flex items-start justify-center text-white tracking-[5px] text-center"><span className="mr-4">Built on</span> 
                    <Image
                        src="/polygon.png"
                        alt="gravity"
                        width={130}
                        height={30}
                    />
                </h2>
                <p className="text-center z-10 max-w-2xl m-auto lg:text-[22px] text-[18px] text-white  lg:py-9 py-5 leading-8">Trade, Earn Yield and join some of the most exciting projects coming to Polygon through our Launchpad. </p>
                <div className="video text-center">
                    <iframe className="m-auto rounded-xl z-10 relative" width="508" height="290" src="https://www.youtube-nocookie.com/embed/wN0g9Xk0om0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className="hero-btns text-center flex sm:flex-nowrap flex-wrap items-center justify-center max-w-lg m-auto lg:mt-10 mt-5">
                    <Link href="/">
                        <a className="cursor-pointer z-10 sm:w-1/2 w-full sm:mr-4 sm:mb-0 mb-5 flex items-center justify-center sm:text-base text-sm text-dark sm:font-bold font-semibold leading-6 sm:py-2 py-1 sm:px-4 px-3 sm:rounded-xl rounded-md border-2 border-solid bg-primary border-primary transition-all hover:bg-transparent hover:text-white"><svg className="mr-3" width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.5625 1.4375C15.875 0.75 14.5938 0.90625 12.75 1.90625C12.5 2.03125 12.4062 2.3125 12.5312 2.5625C12.6875 2.8125 12.9688 2.90625 13.2188 2.78125C14.6875 2 15.5938 1.875 15.8438 2.15625C16.0625 2.34375 16.125 3.1875 15.0625 5.0625C14.9375 5.3125 14.7812 5.5625 14.625 5.8125C13.5 3.84375 11.4062 2.5 9 2.5C5.40625 2.5 2.5 5.4375 2.5 9C2.5 11.4062 3.84375 13.5 5.8125 14.625C5.5625 14.7812 5.3125 14.9375 5.0625 15.0625C3.1875 16.125 2.34375 16.0625 2.15625 15.8438C1.875 15.5938 2 14.6875 2.78125 13.2188C2.90625 12.9688 2.8125 12.6875 2.5625 12.5312C2.3125 12.4062 2.03125 12.5 1.90625 12.75C0.90625 14.5938 0.75 15.875 1.4375 16.5625C1.6875 16.875 2.0625 17 2.53125 17C3.3125 17 4.3125 16.6562 5.53125 15.9688C5.9375 15.7188 6.40625 15.4375 6.8125 15.1562C7.5 15.375 8.21875 15.5 8.96875 15.5C12.5312 15.5 15.4375 12.5938 15.4375 9.03125C15.4375 8.28125 15.2812 7.5625 15.0625 6.90625C15.375 6.4375 15.625 6 15.875 5.625C17.0625 3.5625 17.2812 2.15625 16.5625 1.4375ZM3.5 9C3.5 5.96875 5.9375 3.5 8.96875 3.5C11.1875 3.5 13.125 4.8125 13.9688 6.71875C13.0625 7.96875 11.9375 9.3125 10.625 10.625C9.3125 11.9375 7.96875 13.0625 6.71875 13.9688C4.8125 13.1562 3.5 11.2188 3.5 9ZM14.4688 9C14.4688 12.0312 12 14.4688 9 14.4688C8.59375 14.4688 8.21875 14.4375 7.875 14.375C9 13.5 10.1875 12.4688 11.3438 11.3438C12.4688 10.1875 13.5 9 14.375 7.875C14.4375 8.25 14.4688 8.625 14.4688 9Z" fill="#090D11"/></svg> Launch App</a>
                    </Link>
                    <Link href="#">
                        <a className="cursor-pointer z-10 sm:w-1/2 w-full sm:ml-4 block sm:text-base text-sm text-dark sm:font-bold font-semibold leading-6 sm:py-2 py-1 sm:px-4 px-3 sm:rounded-xl rounded-md border-2 border-solid border-primary bg-primary transition-all hover:bg-transparent hover:text-white">Read Docs</a>
                    </Link>
                </div>
            </div>
        </section>
    )
}
export default HeroSection;