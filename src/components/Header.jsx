import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image'
const Header = () => {

    const [scroll, setScroll] = useState(false);
    useEffect(() => {
    window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 50);
    });
    }, []);

    return (
        <header id="main-header" className={` ${scroll ? "bg-[rgba(0,0,0,0.5)]" : ""} fixed transition-all flex justify-between z-[99] top-0 left-0 w-full py-5`}>
            <div className="w-full max-w-container m-auto flex justify-between items-center px-4">
                <div className="logo_wrap sm:w-2/6 w-2/5">
                    <Link href="/">
                        <a className="w-full h-full inline-block">
                            <Image
                                src="/main-logo.png"
                                alt="gravity"
                                width={137}
                                height={40}
                            />
                        </a>
                    </Link>
                </div>
                <div className="menu-wrap sm:w-4/6 w-3/5 flex justify-end items-center">
                    <div className="header-btn-wrap flex justify-end items-center">
                        <div className="adudit-btn sm:block hidden mr-10">
                            <Link href="/">
                                <a className="cursor-pointer text-base text-white font-bold leading-6">Audit Report</a>
                            </Link>
                        </div>
                        <div className="launch-btn">
                            <Link href="/">
                                <a className="cursor-pointer flex items-center sm:text-base text-sm text-white sm:font-bold font-semibold leading-6 sm:py-2 py-1 sm:px-4 px-3 sm:rounded-xl rounded-md border-2 border-solid border-primary transition-all hover:bg-primary"><svg className="mr-3" width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.5625 1.4375C15.875 0.75 14.5938 0.90625 12.75 1.90625C12.5 2.03125 12.4062 2.3125 12.5312 2.5625C12.6875 2.8125 12.9688 2.90625 13.2188 2.78125C14.6875 2 15.5938 1.875 15.8438 2.15625C16.0625 2.34375 16.125 3.1875 15.0625 5.0625C14.9375 5.3125 14.7812 5.5625 14.625 5.8125C13.5 3.84375 11.4062 2.5 9 2.5C5.40625 2.5 2.5 5.4375 2.5 9C2.5 11.4062 3.84375 13.5 5.8125 14.625C5.5625 14.7812 5.3125 14.9375 5.0625 15.0625C3.1875 16.125 2.34375 16.0625 2.15625 15.8438C1.875 15.5938 2 14.6875 2.78125 13.2188C2.90625 12.9688 2.8125 12.6875 2.5625 12.5312C2.3125 12.4062 2.03125 12.5 1.90625 12.75C0.90625 14.5938 0.75 15.875 1.4375 16.5625C1.6875 16.875 2.0625 17 2.53125 17C3.3125 17 4.3125 16.6562 5.53125 15.9688C5.9375 15.7188 6.40625 15.4375 6.8125 15.1562C7.5 15.375 8.21875 15.5 8.96875 15.5C12.5312 15.5 15.4375 12.5938 15.4375 9.03125C15.4375 8.28125 15.2812 7.5625 15.0625 6.90625C15.375 6.4375 15.625 6 15.875 5.625C17.0625 3.5625 17.2812 2.15625 16.5625 1.4375ZM3.5 9C3.5 5.96875 5.9375 3.5 8.96875 3.5C11.1875 3.5 13.125 4.8125 13.9688 6.71875C13.0625 7.96875 11.9375 9.3125 10.625 10.625C9.3125 11.9375 7.96875 13.0625 6.71875 13.9688C4.8125 13.1562 3.5 11.2188 3.5 9ZM14.4688 9C14.4688 12.0312 12 14.4688 9 14.4688C8.59375 14.4688 8.21875 14.4375 7.875 14.375C9 13.5 10.1875 12.4688 11.3438 11.3438C12.4688 10.1875 13.5 9 14.375 7.875C14.4375 8.25 14.4688 8.625 14.4688 9Z" fill="white"/></svg> Launch App</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;