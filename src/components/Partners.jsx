import Image from 'next/image'
const Partners = () => {

    return (
        <section className="section our-partners-section lg:pt-28 md:pt-16 pt-10 lg:pb-48 md:pb-16 pb-10">
            <div className="w-full max-w-container-inner m-auto">
                <h2 className="w-full text-center lg:text-4xl md:text-2xl text-xl text-white tracking-widest mb-8 font-bold">Our Partners</h2>
            </div>
            <div className="max-w-container-inner m-auto flex flex-wrap md:justify-center justify-start sm:items-center">
                <div className="clients-logo-wrap before lg:w-3/12 sm:w-1/3 w-1/2 mb-10">
                    <div className="icon-logo z-10 md:w-28 w-20 md:h-28 h-20 m-auto mb-4 p-1 overflow-hidden relative rounded-full flex justify-center items-center border-2 border-solid border-primary">
                        <Image
                            src="/AdamantFinanceLogo.png"
                            alt="gravity"
                            width={92}
                            height={92}
                        />
                    </div>
                    <p className="text-center sm:text-base text-sm text-grayLight font-normal sm:leading-7 leading-5">Adamant Fianace</p>
                </div>
                <div className="clients-logo-wrap lg:w-3/12 sm:w-1/3 w-1/2 mb-10">
                    <div className="icon-logo z-10 md:w-28 w-20 md:h-28 h-20 m-auto mb-4 p-1 overflow-hidden relative rounded-full flex justify-center items-center border-2 border-solid border-primary">
                        <Image
                            src="/crazy-cows.png"
                            alt="gravity"
                            width={92}
                            height={92}
                        />
                    </div>
                    <p className="text-center sm:text-base text-sm text-grayLight font-normal sm:leading-7 leading-5">Crazy Crows Chess Club</p>
                </div>
                <div className="clients-logo-wrap lg:w-3/12 sm:w-1/3 w-1/2 mb-10">
                    <div className="icon-logo z-10 md:w-28 w-20 md:h-28 h-20 m-auto mb-4 p-1 overflow-hidden relative rounded-full flex justify-center items-center border-2 border-solid border-primary">
                        <Image
                            src="/MATIC.png"
                            alt="gravity"
                            width={92}
                            height={92}
                        />
                    </div>
                    <p className="text-center sm:text-base text-sm text-grayLight font-normal sm:leading-7 leading-5">Powered by <span className="font-extrabold text-white">Polygon</span></p>
                </div>
            </div>
        </section>
    )
}
export default Partners;