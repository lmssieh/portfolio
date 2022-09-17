import { Fragment } from "react";
import { project } from "../../utils/types";

import {
	SiFirebase,
	SiTypescript,
	SiJavascript,
	SiReact,
	SiVuedotjs,
	SiWindicss,
	SiTailwindcss,
} from "react-icons/si";

interface icons {
	[name: string]: JSX.Element;
}

const icons: icons = {
	firebase: <SiFirebase className="text-yellow-500" />,
	react: <SiReact className="text-blue-400" />,
	vue: <SiVuedotjs className="text-green-500" />,
	typescript: <SiTypescript className="text-blue-500" />,
	javascript: <SiJavascript className="text-yellow-500" />,
	windicss: <SiWindicss className="text-blue-500" />,
	tailwind: <SiTailwindcss className="text-blue-300" />,
};

const getIcons = (iconsArr: string[]) => {
	let Elements: JSX.Element[] = [];
	iconsArr.forEach((icon) => {
		Elements.push(
			<div key={icon} className="flex flex-col children:(h-full w-full)">
				{icons[`${icon}`]}
			</div>
		);
	});

	return Elements;
};

function ProjectCard({ project }: { project: project }) {
	return (
		<div className="flex flex-col m-auto md:(w-auto m-0 flex-row py-3)">
			<div className="overflow-hidden image-drop-shadow transition-all min-w-0 md:min-w-[500px] h-[300px]">
				<img
					src={project.image}
					alt="giff"
					className="block w-full h-full border-2 border-solid border-dark-300 cursor-pointer object-top hover:object-bottom object-cover transition-all duration-800 hover:object-bottom drop-shadow-sm"
				/>
			</div>

			<div className="my-4 md:ml-2 md:px-3 flex flex-col">
				<div className="flex items-center">
					<a
						href={project.url}
						target="_blank"
						rel="noreferrer"
						className="flex items-center text-2xl underline hover:text-orange-400"
					>
						{project.title}
					</a>
				</div>
				<p className="mt-3">{project.description}</p>

				<div className="mt-3 md:mt-auto">
					{project.sourceCode && (
						<div className="flex items-center py-1">
							<a
								href={project.sourceCode}
								target="_blank"
								rel="noreferrer"
								className="underline hover:text-orange-400"
							>
								Source Code ↗︎
							</a>
						</div>
					)}
					<div className="flex items-center py-1">
						<p className="mr-2">Built with:</p>
						<div className="flex items-center gap-2 children:(h-6 w-6)">
							{getIcons(project.icons)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProjectCard;
