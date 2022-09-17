import Link from "next/link";
import { useRouter } from "next/router";

function Navbar() {
	const router = useRouter();
	const pathName = router.pathname;

	const styles = (path: string) => {
		const isCurrentPath = pathName === path;
		return {
			color: isCurrentPath ? `rgba(249, 115, 22, 1)` : "",
			textDecoration: isCurrentPath ? `line-through` : "",
		};
	};

	return (
		<div>
			<nav className="flex justify-between items-center py-2">
				<h1
					className="font-mono text-4xl hover:text-orange-500 tracking-widest"
					style={styles("/")}
				>
					<Link href="/"> lmssieh </Link>
				</h1>
				<ul className="flex items-center">
					<li
						className="mx-3 tracking-widest hover:text-orange-500 "
						style={styles("/work")}
					>
						<Link href="/work"> WORK </Link>
					</li>
					<li className="mx-3 tracking-widest hover:text-orange-500 ">
						<a href="#"> RESUME </a>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Navbar;
