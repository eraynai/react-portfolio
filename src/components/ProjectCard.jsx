import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl}) center/contain no-repeat` }}
      >
        <div className="overlay flex items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 hidden">
          <a
            href={previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="h-16 w-16 mr-2 border-4 relative rounded-full border-[#adb7be] hover:border-white group/link"
          >
            <FontAwesomeIcon
              icon={faEye}
              className="h-10 w-10 text-[#adb7be] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white"
            />
          </a>
          <a
            href={gitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="h-16 w-16 border-4 relative rounded-full border-[#adb7be] hover:border-white group/link"
          >
            <FontAwesomeIcon
              icon={faCode}
              className="h-10 w-10 text-[#adb7be] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white"
            />
          </a>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#adb7be]">{description}</p>
      </div>
    </div>
  );
};
export default ProjectCard;
