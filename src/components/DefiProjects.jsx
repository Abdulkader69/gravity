import Image from 'next/image'
import Link from 'next/link';

const DefiProjects = () => {

    return (
        <section className="section our-defiprojects-section lg:pt-28 md:pt-16 pt-10 pb-0">
            <div className="w-full max-w-container-inner m-auto px-4">
                <h2 className="w-full text-center lg:leading-[1.5] lg:text-4xl md:text-2xl text-xl text-white tracking-widest lg:max-w-xl md:max-w-sm m-auto font-bold">A growing suite of innovative DeFi products</h2>
            </div>
            <div className="w-full max-w-container-inner m-auto">
                <div className="flex flex-wrap items-center relative lg:-ml-4 lg:-mr-4">

                    <div className="products-item lg:w-1/3 sm:w-1/2 w-full px-4 relative md:pt-16 pt-12 mt-6">
                        <div className="absolute icon-logo top-2 left-0 right-0 logo z-10 md:w-28 w-20 md:h-28 h-20 m-auto mb-4 p-1 overflow-hidden rounded-full flex justify-center items-center border-2 border-solid border-primary bg-dark">
                            <Image
                                src="/handshake@2x.png"
                                alt="handshake"
                                width={63}
                                height={50}
                            />
                        </div>
                        <div className="products-item-box bg-dark border-2 border-solid border-dark rounded-xl p-8 pt-20 text-center">
                            <h4 className="text-base font-bold text-white mb-3">Swap Exchange</h4>
                            <p className="text-base font-normal text-grayLight">Super fast trades at the best rates on our AMM</p>
                            <div className="launch-btn text-center mt-6">
                                <Link href="#">
                                    <a className="cursor-pointer inline-block sm:text-base text-sm text-dark sm:font-bold font-semibold leading-6 sm:py-2 py-1 sm:px-4 px-3 sm:rounded-xl rounded-md border-2 border-solid border-primary bg-primary transition-all hover:bg-transparent hover:text-white">Enter Exchange</a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="products-item lg:w-1/3 sm:w-1/2 w-full px-4 relative md:pt-16 pt-12 mt-6">
                        <div className="absolute icon-logo top-2 left-0 right-0 logo z-10 md:w-28 w-20 md:h-28 h-20 m-auto mb-4 p-1 overflow-hidden rounded-full flex justify-center items-center border-2 border-solid border-primary bg-dark">
                            <Image
                                src="/liquiditypool.png"
                                alt="liquiditypool"
                                width={63}
                                height={50}
                            />
                        </div>
                        <div className="products-item-box bg-dark border-2 border-solid border-dark rounded-xl p-8 pt-20 text-center">
                            <h4 className="text-base font-bold text-white mb-3">Liquidity Pool</h4>
                            <p className="text-base font-normal text-grayLight">Provide Liquidity for any Polygon pairs</p>
                            <div className="launch-btn text-center mt-6">
                                <Link href="#">
                                    <a className="cursor-pointer inline-block sm:text-base text-sm text-dark sm:font-bold font-semibold leading-6 sm:py-2 py-1 sm:px-4 px-3 sm:rounded-xl rounded-md border-2 border-solid border-primary bg-primary transition-all hover:bg-transparent hover:text-white">Enter the Pool</a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="products-item lg:w-1/3 sm:w-1/2 w-full px-4 relative md:pt-16 pt-12 mt-6">
                        <div className="absolute icon-logo top-2 left-0 right-0 logo z-10 md:w-28 w-20 md:h-28 h-20 m-auto mb-4 p-1 overflow-hidden rounded-full flex justify-center items-center border-2 border-solid border-primary bg-dark">
                            <Image
                                src="/yieldfarm.png"
                                alt="yieldfarm"
                                width={63}
                                height={50}
                            />
                        </div>
                        <div className="products-item-box bg-dark border-2 border-solid border-dark rounded-xl p-8 pt-20 text-center">
                            <h4 className="text-base font-bold text-white mb-3">Yield Farm</h4>
                            <p className="text-base font-normal text-grayLight">Earn yield through our yield farms</p>
                            <div className="launch-btn text-center mt-6">
                                <Link href="#">
                                    <a className="cursor-pointer inline-block sm:text-base text-sm text-dark sm:font-bold font-semibold leading-6 sm:py-2 py-1 sm:px-4 px-3 sm:rounded-xl rounded-md border-2 border-solid border-primary bg-primary transition-all hover:bg-transparent hover:text-white">Browse Yield Farms</a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="products-item lg:w-1/3 sm:w-1/2 w-full px-4 relative md:pt-16 pt-12 mt-6">
                        <div className="absolute icon-logo top-2 left-0 right-0 logo z-10 md:w-28 w-20 md:h-28 h-20 m-auto mb-4 p-1 overflow-hidden rounded-full flex justify-center items-center border-2 border-solid border-primary bg-dark">
                            <Image
                                src="/vaults.png"
                                alt="vaults"
                                width={57}
                                height={50}
                            />
                        </div>
                        <div className="products-item-box bg-dark border-2 border-solid border-dark rounded-xl p-8 pt-20 text-center">
                            <h4 className="text-base font-bold text-white mb-3">Vaults</h4>
                            <p className="text-base font-normal text-grayLight">Auto-compounding vaults take all the work out of being a yield farmer</p>
                            <div className="launch-btn text-center mt-6">
                                <Link href="#">
                                    <a className="cursor-pointer inline-block sm:text-base text-sm text-dark sm:font-bold font-semibold leading-6 sm:py-2 py-1 sm:px-4 px-3 sm:rounded-xl rounded-md border-2 border-solid border-primary bg-primary transition-all hover:bg-transparent hover:text-white">Enter the Vaults</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="products-item lg:w-1/3 sm:w-1/2 w-full px-4 relative md:pt-16 pt-12 mt-6">
                        <div className="absolute icon-logo top-2 left-0 right-0 logo z-10 md:w-28 w-20 md:h-28 h-20 m-auto mb-4 p-1 overflow-hidden rounded-full flex justify-center items-center border-2 border-solid border-primary bg-dark">
                            <Image
                                src="/launchpad.png"
                                alt="launchpad"
                                width={63}
                                height={50}
                            />
                        </div>
                        <div className="products-item-box bg-dark border-2 border-solid border-dark rounded-xl p-8 pt-20 text-center">
                            <h4 className="text-base font-bold text-white mb-3">Launchpad</h4>
                            <p className="text-base font-normal text-grayLight">State of the art Launchpad for launching high-quality projects into Polygon space</p>
                            <div className="launch-btn text-center mt-6">
                                <Link href="#">
                                    <a className="cursor-pointer inline-block sm:text-base text-sm text-dark sm:font-bold font-semibold leading-6 sm:py-2 py-1 sm:px-4 px-3 sm:rounded-xl rounded-md border-2 border-solid border-primary bg-primary transition-all hover:bg-transparent hover:text-white">Go to Launchpad</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="products-item lg:w-1/3 sm:w-1/2 w-full px-4 relative md:pt-16 pt-12 mt-6">
                        <div className="absolute icon-logo top-2 left-0 right-0 logo z-10 md:w-28 w-20 md:h-28 h-20 m-auto mb-4 p-1 overflow-hidden rounded-full flex justify-center items-center border-2 border-solid border-primary bg-dark">
                            <Image
                                src="/governance.png"
                                alt="governance"
                                width={50}
                                height={50}
                            />
                        </div>
                        <div className="products-item-box bg-dark border-2 border-solid border-dark rounded-xl p-8 pt-20 text-center">
                            <h4 className="text-base font-bold text-white mb-3">Governance</h4>
                            <p className="text-base font-normal text-grayLight">Circulating Supply, Tier Management, wBTC backing, Claim wETH</p>
                            <div className="launch-btn text-center mt-6">
                                <Link href="#">
                                    <a className="cursor-pointer inline-block sm:text-base text-sm text-dark sm:font-bold font-semibold leading-6 sm:py-2 py-1 sm:px-4 px-3 sm:rounded-xl rounded-md border-2 border-solid border-primary bg-primary transition-all hover:bg-transparent hover:text-white">View Governance</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default DefiProjects;