import Image from 'next/image'
import Link from 'next/link';

const Statistics = () => {

    return (
        <section className="section our-partners-section lg:pt-28 pt-16">
            <div className="w-full max-w-container-inner m-auto px-4">
                <h2 className="w-full text-center lg:text-4xl md:text-2xl text-xl text-white tracking-widest mb-8 font-bold relative z-10">Statistics</h2>
            </div>
            <div className="max-w-container-inner m-auto flex flex-wrap justify-center sm:items-center px-4">
                <div className="clients-logo-wrap before lg:w-[26%] sm:w-1/3 w-1/2 px-[5px] mb-5">
                    <div className="statistics-box text-center md:p-8 p-5 bg-dark border-[1px] border-solid border-primary rounded-xl relative z-10">
                        <h2 className="font-bold lg:text-4xl md:text-2xl text-xl text-white mb-2">$0.01</h2>
                        <p className="font-bold lg:text-lg text-base text-primary">GFI Price</p>
                    </div>
                </div>
                <div className="clients-logo-wrap before lg:w-[26%] sm:w-1/3 w-1/2 px-[5px] mb-5">
                    <div className="statistics-box text-center md:p-8 p-5 bg-dark border-[1px] border-solid border-primary rounded-xl relative z-10">
                        <h2 className="font-bold lg:text-4xl md:text-2xl text-xl text-white mb-2">$35m</h2>
                        <p className="font-bold lg:text-lg text-base text-primary">TVL</p>
                    </div>
                </div>
                <div className="clients-logo-wrap before lg:w-[26%] sm:w-1/3 w-1/2 px-[5px] mb-5">
                    <div className="statistics-box text-center md:p-8 p-5 bg-dark border-[1px] border-solid border-primary rounded-xl relative z-10">
                        <h2 className="font-bold lg:text-4xl md:text-2xl text-xl text-white mb-2">$1m</h2>
                        <p className="font-bold lg:text-lg text-base text-primary">Volume</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Statistics;