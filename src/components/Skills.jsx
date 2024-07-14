import { getConfigData } from "../data/configReader";

export default function Card() {
  const configData = getConfigData();
  const skills = configData.skills;

  return (
    <>
      <div className="px-2">
        <div className="bg-gray-100 rounded-lg p-4">
          <div>
            <div className="font-medium text-xl flex items-center gap-x-2">
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
              <h1>Skills</h1>
            </div>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-4  gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="drop-shadow-md card bg-white rounded-lg p-5 flex items-center justify-center hover:-translate-y-1 hover:scale-100 duration-300 transition ease-in-out delay-150 hover:shadow-sm border border-gray-200 hover:bg-[#f7d9ea]"
              >
                <div className="flex items-center justify-center w-full h-full">
                  <img
                    className="object-contain h-16 w-16"
                    src={skill.icon}
                    alt={skill.name}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
