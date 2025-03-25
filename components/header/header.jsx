import Image from "next/image";
import Link from "next/link";
import Styles from "./header.module.css";

const Header = () => {
  const Links = [
    {
      href: "#",
      text: "How It Works",
    },
    {
      href: "#",
      text: "Solutions",
    },
    {
      href: "#",
      text: "Blog",
    },
    {
      href: "#",
      text: "Insights",
    },
    {
      href: "#",
      text: "About Us",
    },
    {
      href: "#",
      text: "Login",
    },
  ];
  return (
    <header className="w-full bg-white relative z-[99] border-b-[1px] border-gray-300">
      <div className="colorbar relative top-0 left-0 z-[20] w-full h-[5px]">
        <Image
          src="/images/colorbar-lg.png"
          width={1000}
          height={5}
          className="w-full h-full object-cover"
          alt="colorbar"
        />
      </div>
      <div className={Styles.maincontent}>
        <div className="logo-wrap max-w-[150px] relative h-[51px]">
          <Link href="#" className="emptylink">
            .
          </Link>
          <Image
            src="/images/logo.png"
            width={150}
            height={51}
            className="w-full h-full object-cover"
            alt="logo"
          />
        </div>
        <div className="link-wrapper relative flex flex-wrap items-center">
          <ul className={`${Styles.list} flex flex-wrap`}>
            {Links.map((wrap, index) => (
              <li key={index}>
                <Link href={wrap.href}>{wrap.text}</Link>
              </li>
            ))}
          </ul>
          <div className="login-btn pl-[17px!important] pr-[17px!important]">
            <Link href="#" className="demo-btn">
              {" "}
              Get In Touch{" "}
            </Link>
          </div>
          <div className="search-box">
            <div className="search"></div>
            <span className="mr-[20px!important] ml-[20px!important] top-[5px] relative cursor-pointer max-w-[19px] w-full h-[19px] inline-block">
              <Image
                src="/images/magnify-glass.png"
                width={19}
                height={19}
                className="w-full h-full object-contain"
                alt="glass"
              />
            </span>
          </div>
        </div>
      </div>
      <div className="violator-bar w-full bg-[#b951b9] pt-[11px!important] pb-[11px!important]"></div>
    </header>
  );
};
export default Header;
