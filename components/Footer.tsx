import { FiGithub, FiTwitter, FiCodepen } from "react-icons/fi";

function Footer() {
	return (
		<footer className="text-lg">
			<div>
				<h4 className="py-2 text-green-400 text-size-[50px] leading-10 font-augillion">
					get in touch!
				</h4>
				<p>email me at dummy[at]email.me</p>
			</div>
			<div className="pt-4">
				or find me at:
				<div className="flex items-center gap-4">
					<div className="flex items-center">
						<FiGithub className="h-4 w-4" />
						<a
							className="underline ml-1 hover:text-orange-500"
							href="https://github.com/lmssieh"
						>
							github
						</a>
					</div>
					<div className="flex items-center">
						<FiTwitter className="h-4 w-4" />
						<a
							className="underline ml-1 hover:text-orange-500"
							href="https://twitter.com/lmssiehdev"
						>
							twitter
						</a>
					</div>
					<div className="flex items-center">
						<FiCodepen className="h-4 w-4" />
						<a
							className="underline ml-1 hover:text-orange-500"
							href="https://codepen.com/lmssieh"
						>
							codepen
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
