import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import configData from "../data/config.json";

export default function Social() {
  const socialLinks = configData.social;

  return (
    <>
      <div className="p-2 py-2 w-full max-w-screen-lg mx-auto ">
        <div className="flex flex-col md:flex-row items-center justify-between p-4 bg-gray-100 rounded-lg w-full">
          <div className="font-medium text-lg flex items-center gap-x-2">
            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
            Follow Me
          </div>
          <div className="flex gap-x-1 md:w-auto">
            {socialLinks.map((socialLink, index) => {
              const iconMap = {
                FaInstagram,
                FaGithub,
                FaLinkedinIn,
              };
              const IconComponent = iconMap[socialLink.icon];

              return (
                <a
                  key={index}
                  href={socialLink.link}
                  className="bg-white p-2 rounded-full duration-300 border-2 border-gray-100 hover:bg-[#f5d6e8] drop-shadow-sm"
                >
                  <IconComponent size={20} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
