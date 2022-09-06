import Image from "next/image";
import { useState } from "react";
import DancingChickens from "./DancingChickens";
import Twemoji from "./UI/Twemoji";

function Header() {
	return (
		<header className="flex flex-col-reverse  gap-y-10 sm:(flex-row gap-x-10)">
			{/* <h2 className="font-augillion text-5xl font-bold">
				Hello 👋, {`I'm lmssieh`}
			</h2>
			<span className="block">I design & build websites 🐓</span> */}
			<div className="items-end children:mx-auto ">
				<DancingChickens />
			</div>
			<div className="flex-1 flex flex-col justify-center">
				<h2 className="text-3xl font-mono font-augillion">
					<div className="text-5xl mb-4">
						Hi! {"I'm"} <span className="text-orange-400 mr-2">lmssieh</span>
						<Twemoji emoji="👋" height="35" width="35" />
					</div>
				</h2>
				<p className="text-xl">
					{/* a Front End Developer based in Morocco. */}a{" "}
					<span className="font-bold underline text-orange-400 cursor-pointer transition-all ease duration-300 hover:(bg-orange-400 text-white) ">
						Front End developer
					</span>{" "}
					based in Morocco, with a passion for developing{" "}
					<span className="font-bold underline text-orange-400 cursor-pointer transition-all ease duration-300 hover:(bg-orange-400 text-white) ">
						JavaScript applications
					</span>{" "}
					and creating things that can improve {"people's"} daily lives.
				</p>
			</div>
		</header>
	);
}

export default Header;
