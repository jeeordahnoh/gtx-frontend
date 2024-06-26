import React from "react";
import Image from "next/image";
import Background from "../../public/assets/background.png";
import EmailInput from "./EmailInput";
import { IoGlobeOutline } from "react-icons/io5";

export default function Footer() {
  return (
    <footer
      className="pt-16 bg-black"
      style={{
        backgroundImage: `url(${Background.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto w-full max-w-screen-xl p-4 pt-6 lg:pt-8">
        <div className="grid grid-cols-2  md:grid-cols-6 gap-4 text-white mx-auto">
          <div className="m-auto grid">
            <a href="https://www.gtx.com.co/">
              <Image
                width={100}
                height={60}
                src="/assets/footer-logo.png"
                alt="footer-logo"
              />
              <p className="text-[#6C6C6C] text-[10px]">©2024 GTX Labs Ltd</p>
            </a>
            <button className="border-2 border-white py-1 px-2 mt-2 rounded flex items-center gap-2">
              <IoGlobeOutline />
              <p>English</p>
            </button>
          </div>
          <div className="m-auto">
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Company
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div className="m-auto pl-8 md:pl-0 pt-2 md:pt-0">
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Support
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Support center
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Connect with GTX
                </a>
              </li>
            </ul>
          </div>
          <div className="m-auto pl-20 md:pl-0 pt-2 md:pt-0">
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Legal
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-2 pt-2 md:pt-0">
            <p className="text-center">
              Stay updated on cryptocurrency developments to maintain a
              competitive edge.
            </p>
            <EmailInput />
          </div>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        <h2 className="pt-6 font-semibold text-gray-900 uppercase dark:text-white text-center text-[1rem]">
          Community
        </h2>

        <div className="flex mt-6 sm:justify-center">
          <a href="https://twitter.com/gtxdotcom">
            <Image width={18} height={17} src="/assets/x.png" alt="X/Twitter" />
          </a>
          <a className="ms-5" href="https://www.instagram.com/gtxdotcom/">
            <Image
              width={18}
              height={17}
              src="/assets/insta.png"
              alt="Instagram"
            />
          </a>
          <a
            className="ms-5"
            href="https://www.facebook.com/profile.php?id=100094228042198"
          >
            <Image
              width={18}
              height={17}
              src="/assets/facebook.png"
              alt="Facebook"
            />
          </a>
          <a className="ms-5" href="https://medium.com/@gtxdotcom">
            <Image
              width={18}
              height={17}
              src="/assets/image-11.png"
              alt="Medium"
            />
          </a>
          <a
            className="ms-5"
            href="https://chat.whatsapp.com/DT7FIAWAJVgIRPHwkCfHfb"
          >
            <Image
              width={18}
              height={17}
              src="/assets/whatsapp.png"
              alt="WhatsApp"
            />
          </a>
          <a
            className="ms-5"
            href="https://www.linkedin.com/company/gtxdotcom/"
          >
            <Image
              width={18}
              height={17}
              src="/assets/linkedin.png"
              alt="LinkedIn"
            />
          </a>
          <a className="ms-5" href="https://t.me/gtxdotcom">
            <Image
              width={18}
              height={17}
              src="/assets/telegram.png"
              alt="Telegram"
            />
          </a>
          <a className="ms-5" href="https://discord.gg/dVmMCdf9jx">
            <Image
              width={18}
              height={17}
              src="/assets/reddit.png"
              alt="Discord"
            />
          </a>
          <a
            className="ms-5"
            href="https://www.crunchbase.com/organization/gtx-91c8"
          >
            <Image
              width={18}
              height={17}
              src="/assets/cb.png"
              alt="Crunchbase"
            />
          </a>
          <a className="ms-5" href="https://github.com/gtxdotcom">
            <Image
              width={18}
              height={17}
              src="/assets/github.png"
              alt="Github"
            />
          </a>
          <a className="ms-5" href="mailto:info@gtx.com.co">
            <Image width={18} height={17} src="/assets/email.png" alt="Email" />
          </a>
        </div>
        <div className="text-center mt-8">
          <span className="text-sm text-[#484D63] sm:text-center">
            © 2024{" "}
            <a href="https://www.gtx.com.co/" className="hover:underline">
              GTX
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
