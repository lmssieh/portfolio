import Link from "next/link";
import { type project } from "../../utils/types";
import Twemoji from "../UI/Twemoji";
import ProjectCard from "./ProjectCard";

function Projects() {
	const projectsInfo: project[] = [
		{
			title: "REDOIT!",
			url: "https://redoit.app/",
			sourceCode: null,
			description:
				"REDOIT! is a habit tracker web app that helps you build good habits and reach your goals.",
			image: "/images/project-ss-01.png",
			icons: ["vue", "tailwind", "firebase"],
		},
		{
			title: "MoodRooster",
			url: "https://github.com/lmssieh/moodrooster",
			sourceCode: "https://github.com/lmssieh/moodrooster",
			description: "Mood tracker & journaling web app.",
			image: "/images/project-ss-02.png",
			icons: ["typescript", "react", "windicss", "firebase"],
		},
		{
			title: "Custom Surviv Skins",
			url: "https://greasyfork.org/en/scripts/394362",
			sourceCode: "https://github.com/lmssieh/survivMods",
			description:
				"a free and purely cosmetic script that lets you use custom skins during games, it even lets you make your own skins!",
			image: "/images/project-ss-03.png",
			icons: ["javascript"],
		},
	];
	return (
		<div>
			<div className="my-5 text-lg">
				<h3 className="font-augillion leading-10 text-size-[50px] py-2 text-orange-400 gap-2">
					<Twemoji emoji="✨" height="32" width="32" />
					<span className="ml-2">featured</span>
				</h3>
				<p>{`what i've been up to semi-recently`}</p>
			</div>
			{projectsInfo.map((project) => (
				<ProjectCard key={project.title} project={project} />
			))}
			{false && (
				<div>
					<Link href="/work">
						<a className="text-lg underline hover:text-orange-400">
							see all projects ↗︎
						</a>
					</Link>
				</div>
			)}
		</div>
	);
}

export default Projects;
