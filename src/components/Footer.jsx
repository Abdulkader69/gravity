import Link from 'next/link';
import Image from 'next/image'
const Footer = () => {

    return (
        <footer id="main-footer" className="flex justify-between w-full lg:py-16 py-10 bg-dark">
            <div className="max-w-container-footer m-auto flex flex-wrap justify-between px-4">
                <div className="footer-item lg:w-2/5 w-full lg:mb-0 mb-12 pr-10">
                    <div className="footer-logo mb-6">
                        <Link href="/">
                            <a className="w-full h-full inline-block">
                                <Image
                                    src="/footer-logo.png"
                                    alt="gravity"
                                    width={300}
                                    height={46}
                                />
                            </a>
                        </Link>
                    </div>
                    <div className="footer-info mb-4">
                        <p className="font-normal text-grayLight text-sm leading-5">Gravity Finance is a growing suite of innovative products designed to automate manual and mundane tasks, taking the work out of DeFi, allowing you to earn yield in passive ways and share in the succes of the protocol through admin-fees. <span className="block mt-3 text-primary font-bold">Join us!</span></p>
                    </div>
                    <div className="footer-social flex items-center">
                        <div className="icon mr-6">
                            <Link href="#">
                                <a className="border-2 border-solid border-primary w-10 h-10 flex justify-center items-center rounded-full">
                                    <svg width="24" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.5479 9.65544C17.5479 8.41397 16.6167 7.40528 15.5305 7.40528C14.3666 7.40528 13.4355 8.41397 13.4355 9.65544C13.4355 10.8193 14.3666 11.828 15.5305 11.828C16.6167 11.828 17.5479 10.8193 17.5479 9.65544ZM8.2368 7.40528C7.15052 7.40528 6.21941 8.41397 6.21941 9.65544C6.21941 10.8193 7.15052 11.828 8.2368 11.828C9.40068 11.828 10.2542 10.8193 10.2542 9.65544C10.3318 8.41397 9.40068 7.40528 8.2368 7.40528ZM23.6 13.6902C23.6 13.6902 21.893 16.5611 17.4703 16.7163C17.4703 16.7163 16.7719 15.8628 16.1512 15.0869C18.7893 14.3886 19.798 12.7591 19.798 12.7591C18.9445 13.3023 18.1686 13.6126 17.4703 13.923C13.2027 15.7076 8.46959 15.0869 5.05554 13.2247C5.05554 13.1471 4.58997 12.9143 4.2796 12.6815C4.2796 12.6815 5.21072 14.311 7.77125 15.0869C7.15052 15.7852 6.45219 16.7163 6.45219 16.7163C2.02945 16.5611 0.400024 13.6902 0.400024 13.6902C0.400024 7.25009 3.19333 2.12902 3.19333 2.12902C6.06424 -0.043556 8.77995 0.0340363 8.77995 0.0340363L9.01274 0.266812C5.44351 1.27551 3.81405 2.82735 3.81405 2.82735C3.81405 2.82735 4.20202 2.59457 4.97794 2.2842C9.55587 0.266812 15.0649 0.266812 19.798 2.82735C19.798 2.82735 18.2462 1.3531 14.8321 0.344404L15.1425 0.0340363C15.1425 0.0340363 17.8582 -0.043556 20.7291 2.12902C20.7291 2.12902 23.6 7.25009 23.6 13.6902Z" fill="white"/></svg>
                                </a>
                            </Link>
                        </div>
                        <div className="icon mr-6">
                            <Link href="#">
                                <a className="border-2 border-solid border-primary w-10 h-10 flex justify-center items-center rounded-full">
                                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.5411 0.80445L18.0196 2.26256C17.8928 2.32596 17.8294 2.51615 17.8294 2.64294V13.4203C17.8294 13.5471 17.8928 13.7373 18.0196 13.8007L19.4777 15.2588V15.5758H11.997V15.2588L13.5819 13.8007C13.7087 13.6105 13.7087 13.6105 13.7087 13.3569V4.67162L9.39773 15.5758H8.82717L3.88226 4.67162V11.9622C3.81886 12.2792 3.94566 12.5961 4.13584 12.7863L6.16452 15.2588V15.5758H0.458862V15.2588L2.42415 12.7863C2.67773 12.5961 2.74113 12.2792 2.67773 11.9622V3.53049C2.74113 3.3403 2.61433 3.08671 2.48754 2.89653L0.712447 0.80445V0.424072H6.22792L10.4755 9.80672L14.2792 0.487469H19.5411V0.80445Z" fill="white"/></svg>
                                </a>
                            </Link>
                        </div>
                        <div className="icon mr-6">
                            <Link href="#">
                                <a className="border-2 border-solid border-primary w-10 h-10 flex justify-center items-center rounded-full">
                                    <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.2628 4.75703C20.0748 4.14799 20.8057 3.41714 21.3741 2.56448C20.6432 2.88931 19.7906 3.13292 18.9379 3.21413C19.8312 2.68629 20.4808 1.87424 20.8057 0.85917C19.9936 1.3464 19.0597 1.71183 18.1259 1.91484C17.3138 1.06218 16.2175 0.574951 14.9995 0.574951C12.6445 0.574951 10.7362 2.48328 10.7362 4.83824C10.7362 5.16306 10.7768 5.48788 10.858 5.8127C7.32555 5.60969 4.15854 3.90437 2.0472 1.3464C1.68177 1.95544 1.47875 2.68629 1.47875 3.49835C1.47875 4.96004 2.20961 6.25933 3.38708 7.03078C2.69684 6.99018 2.00659 6.82777 1.43815 6.50295V6.54355C1.43815 8.61429 2.89985 10.3196 4.84878 10.7256C4.52396 10.8068 4.11793 10.888 3.75251 10.888C3.46829 10.888 3.22467 10.8474 2.94045 10.8068C3.46829 12.5122 5.0518 13.7302 6.91952 13.7708C5.45783 14.9077 3.6307 15.598 1.64117 15.598C1.27574 15.598 0.95092 15.5574 0.626099 15.5168C2.49382 16.7348 4.72698 17.4251 7.16314 17.4251C14.9995 17.4251 19.2628 10.9692 19.2628 5.32547C19.2628 5.12246 19.2628 4.96005 19.2628 4.75703Z" fill="white"/></svg>
                                </a>
                            </Link>
                        </div>
                        <div className="icon">
                            <Link href="#">
                                <a className="border-2 border-solid border-primary w-10 h-10 flex justify-center items-center rounded-full">
                                    <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 0.28418C6.31055 0.28418 0.890625 5.75293 0.890625 12.3936C0.890625 19.083 6.31055 24.5029 13 24.5029C19.6406 24.5029 25.1094 19.083 25.1094 12.3936C25.1094 5.75293 19.6406 0.28418 13 0.28418ZM18.5664 8.53613C18.4199 10.4404 17.6387 15.1279 17.1992 17.2275C17.0527 18.1553 16.7109 18.4482 16.3691 18.4971C15.6855 18.5459 15.1484 18.0088 14.4648 17.5693C13.3906 16.8857 12.8047 16.4463 11.7793 15.7627C10.5586 14.9814 11.3398 14.542 12.0234 13.8584C12.2188 13.6631 15.2949 10.8311 15.3438 10.5869C15.3926 10.5381 15.3926 10.4404 15.2949 10.3428C15.2461 10.2939 15.1484 10.3428 15.0508 10.3428C14.9531 10.3428 13.2441 11.4658 9.97266 13.7119C9.48438 14.0537 9.04492 14.2002 8.6543 14.2002C8.21484 14.2002 7.38477 13.9561 6.75 13.7607C6.01758 13.5166 5.38281 13.3701 5.43164 12.9795C5.48047 12.7354 5.77344 12.54 6.35938 12.2959C9.875 10.7334 12.2188 9.75684 13.3906 9.26855C16.7598 7.85254 17.4922 7.6084 17.9316 7.6084C18.0293 7.6084 18.2734 7.6084 18.4199 7.75488C18.4688 7.80371 18.5664 7.9502 18.5664 8.04785C18.6152 8.24316 18.6152 8.38965 18.5664 8.53613Z" fill="white"/></svg>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="footer-item lg:w-1/5 sm:w-2/6 w-full lg:mb-0 mb-12 lg:pl-10">
                    <h4 className="font-bold sm:text-base text-sm text-primary mb-4 tracking-widest">QUICK LINKS</h4>
                    <ul>
                        <li><Link href="#"><a className="font-bold sm:text-base text-sm text-white mb-3 inline-block">Getting started</a></Link></li>
                        <li><Link href="#"><a className="font-bold sm:text-base text-sm text-white mb-3 inline-block">Documentation </a></Link></li>
                        <li><Link href="#"><a className="font-bold sm:text-base text-sm text-white mb-3 inline-block">Tutorials</a></Link></li>
                        <li><Link href="#"><a className="font-bold sm:text-base text-sm text-white mb-3 inline-block">FAQ</a></Link></li>
                        <li><Link href="#"><a className="font-bold sm:text-base text-sm text-white mb-3 inline-block">Github</a></Link></li>
                        <li><Link href="#"><a className="font-bold sm:text-base text-sm text-white mb-3 inline-block">Audits</a></Link></li>
                    </ul>
                </div>
                <div className="footer-item lg:w-1/5 sm:w-2/6 w-full lg:mb-0 mb-12 lg:pl-10">
                    <h4 className="font-bold sm:text-base text-sm text-primary mb-4 tracking-widest">PRODUCTS</h4>
                    <ul>
                        <li><Link href="#"><a className="font-bold sm:text-base text-sm text-white mb-3 inline-block">Exchange</a></Link></li>
                        <li><Link href="#"><a className="font-bold sm:text-base text-sm text-white mb-3 inline-block">Liquidity</a></Link></li>
                        <li><Link href="#"><a className="font-bold sm:text-base text-sm text-white mb-3 inline-block">Farms</a></Link></li>
                        <li><Link href="#"><a className="font-bold sm:text-base text-sm text-white mb-3 inline-block">Vaults</a></Link></li>
                        <li><Link href="#"><a className="font-bold sm:text-base text-sm text-white mb-3 inline-block">Launchpad</a></Link></li>
                        <li><Link href="#"><a className="font-bold sm:text-base text-sm text-white mb-3 inline-block">Governance</a></Link></li>
                    </ul>
                </div>
                <div className="footer-item lg:w-1/5 sm:w-2/6 w-full lg:pl-10">
                    <h4 className="font-bold sm:text-base text-sm text-primary mb-4 tracking-widest">SOCIAL</h4>
                    <ul>
                        <li><Link href="#"><a className="font-bold sm:text-base text-sm text-white mb-3 inline-block">Discord</a></Link></li>
                        <li><Link href="#"><a className="font-bold sm:text-base text-sm text-white mb-3 inline-block">Medium</a></Link></li>
                        <li><Link href="#"><a className="font-bold sm:text-base text-sm text-white mb-3 inline-block">Telegram</a></Link></li>
                        <li><Link href="#"><a className="font-bold sm:text-base text-sm text-white mb-3 inline-block">twitter</a></Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
export default Footer;



 






