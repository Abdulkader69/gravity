import Image from 'next/image'
import Link from 'next/link';

const Silos = () => {

    return (
        <section className="section our-silos-section md:pt-28 pt-16 pb-0">
            <div className="w-full max-w-container-inner m-auto flex flex-wrap items-center relative bg-dark border-2 border-solid border-dark rounded-xl md:p-8 p-8 pt-20">
                <div className="content lg:w-3/5 w-full relative lg:pr-6 lg:pb-0 pb-10">
                    <div className="absolute logo lg:top-[-130px] top-[-120px] left-0 lg:right-8 right-0 logo z-10 md:w-28 w-20 md:h-28 h-20 m-auto mb-4 p-1 overflow-hidden rounded-full flex justify-center items-center border-2 border-solid border-primary bg-dark">
                        <Image
                            src="/farm@2x.png"
                            alt="gravity"
                            width={57}
                            height={50}
                        />
                    </div>
                    <h3 className="text-base text-white font-bold text-center mb-4">Silos</h3>
                    <p className="text-center text-grayLight font-normal text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec justo vel lacus ullamcorper molestie tincidunt eget orci. Phasellus efficitur arcu nulla, vel congue neque blandit at.</p>
                    <div className="launch-btn text-center mt-4">
                        <Link href="/">
                            <a className="cursor-pointer inline-block sm:text-base text-sm text-dark sm:font-bold font-semibold leading-6 sm:py-2 py-1 sm:px-4 px-3 sm:rounded-xl rounded-md border-2 border-solid border-primary bg-primary transition-all hover:bg-transparent hover:text-white">Go to Silos</a>
                        </Link>
                    </div>
                </div>
                <div className="video lg:w-2/5 w-full relative">
                    <iframe className="rounded-xl" width="352" height="250" src="https://www.youtube-nocookie.com/embed/wN0g9Xk0om0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </section>
    )
}
export default Silos;