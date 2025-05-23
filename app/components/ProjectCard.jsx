import { HiMiniCodeBracket } from "react-icons/hi2";
import { LuEye } from "react-icons/lu";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
	return (
		<div className="md:mb-12">
			<div
				className="h-52 md:h-72 lg:h-96 rounded-t-xl relative group"
				style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
			>
				<div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-60 transition-all duration-500">
					<a
						href={gitUrl}
						target="_blank"
						className="h-14 w-14 mr-6 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
					>
						<HiMiniCodeBracket className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
					</a>

					<a
						href={previewUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
					>
						<LuEye className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
					</a>
				</div>
			</div>
			<div className="text-white rounded-b-xl mt-1 bg-[#181818] py-6 px-4">
				<h5 className="text-xl font-semibold mb-2">{title}</h5>
				<p className="text-[ADB7BE]">{description}</p>
			</div>
		</div>
	);
};

export default ProjectCard;
