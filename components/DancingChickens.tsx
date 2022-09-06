import Image from "next/image";
import { useState } from "react";
import Twemoji from "./UI/Twemoji";

function DancingChickens() {
	const [eggMe, setEggMe] = useState(false);

	return (
		<div className="w-[250px] cursor-pointer">
			{eggMe ? (
				<Image
					draggable={false}
					width="250px"
					height="250px"
					alt="chicken_dancing_gif_3"
					src={`/images/chicken_emoticons/dance_07.gif`}
				/>
			) : (
				<Image
					draggable={false}
					width="250px"
					height="250px"
					alt="chicken_dancing_gif_3"
					src={`/images/chicken_emoticons/dance_08.gif`}
				/>
			)}
			<div className="flex justify-center ">
				<button
					onClick={() => setEggMe((old) => !old)}
					className={`flex items-center gap-1 cursor-pointer font-mono font-bold font-lg p-2
					${!eggMe ? "animate-wobble animate-duration-[3s] animate-loop" : ""}`}
					style={{
						textDecoration: eggMe ? "line-through" : "",
					}}
				>
					<Twemoji emoji="🥚" height="20px" width="20px" /> Egg Me {`:-)`}
				</button>
			</div>
		</div>
	);
}

export default DancingChickens;
