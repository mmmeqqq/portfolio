import CopyEmailButton from "../components/CopyEmailButton";
import Social from "../components/Social";
import { getConfigData } from "../data/configReader";
import  ProfilePicture from "../assets/bew.png"
import Skills from "../components/Skills";
import HireButton from "../components/HireButton";

export default function About() {
  const configData = getConfigData();
  return (
    <>
      <div className="p-7">
        <h1 className="flex items-center gap-x-2 text-lg font-medium">
          <div className="w-4 h-2 bg-gray-400 rounded-full"></div>
          About
        </h1>
      </div>
      <div className="p-7 flex flex-col-reverse md:flex md:flex-row md:items-center md:justify-between pt-3">
        <div className="flex flex-col gap-y-4 ">
          <h1 className="text-3xl md:text-4xl font-semibold text-center ">
            {configData.name}
          </h1>
          <p className="text-base md:text-lg text-gray-500 md:text-justify font-normal tracking-tight">
            {configData.aboutDesc}
          </p>
          <img className="border rounded-lg p-3 bg-[#f5d6e8] shadow-md" src={ProfilePicture} alt="profile picture" />
        </div>
      </div>
      <Skills />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-semibold mt-4">Let's work together.</h1>
        <p className="text-md font-normal text-gray-500 text-center py-4">
          to develop user experiences that resonate <br /> and create stunning designs.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center ">
        <div className="flex md:flex-row items-center gap-4 mb-2">
          <HireButton/>
          <CopyEmailButton />
        </div>
        <Social />
      </div>
    </>
  );
}
