import profile from "../assets/meq.jpeg";
import CopyEmailButton from "./CopyEmailButton";
import { getConfigData } from "../data/configReader";

export default function Profile() {
  const configData = getConfigData();

  const workStatusTextClass = configData.status == 'on' ?  "bg-[#d0fadf] text-[#109d5c] rounded-full uppercase px-[0.60rem] py-[0.60rem] md:px-2 md:py-1 font-medium" : "bg-[#ff9d9d] text-[#f74d4d] rounded-full uppercase px-[0.60rem] py-[0.60rem] md:px-2 md:py-1 font-medium"
  const workStatusClass = configData.status == "on" ? "w-1.5 h-1.5 bg-[#109d5c] rounded-full" : "w-1.5 h-1.5 bg-[#f74d4d] rounded-full"
  const workStatusText = configData.status == "on" ? "avaılable for work" : "busy"

  return (
    <>
      <div className="flex items-center justify-between px-7 py-7">
        <div className="font-medium text-lg flex items-center gap-x-3">
          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
          {configData.job}
        </div>
        <div className={workStatusTextClass}>
          <div className="text-sm font-medium flex items-center gap-x-1">
            <div className={workStatusClass}></div>
            <span className="hidden md:block">{workStatusText}</span>
          </div>
        </div>
      </div>
      <div className="px-7 py-7 flex flex-col-reverse md:flex md:flex-row md:items-center md:justify-between pt-3">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-2xl md:text-4xl font-semibold text-center tracking-tighter">
            I'm {configData.name}
          </h1>
          <p className="md:w-3/4 text-gray-500 text-center font-normal tracking-tigh">
            {configData.desc}
          </p>
          <div className="flex items-center text-center md:text-justify justify-center pt-6">
            <CopyEmailButton />
          </div>
        </div>
        <div className="rounded-full p-2 flex items-center justify-center mb-7">
          <div className="w-36 h-36 rounded-full bg-gradient-to-b from-gray-100 to-gray-300 border-2 flex items-center justify-center">
            <img src={profile} alt="" className="max-w-full max-h-full rounded-full " />
          </div>
        </div>
      </div>
    </>
  );
}
