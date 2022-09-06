import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import type { ReactNode } from "react";

function LayoutIndex({ children }: { children: ReactNode }) {
	return (
		<div className="max-w-[1200px] px-2 m-auto flex flex-col min-h-[100vh]">
			<div className="flex-1">
				<div className="py-5">
					<Navbar />
				</div>
				{children}
			</div>
			<div className="py-20">
				<Footer />
			</div>
		</div>
	);
}

export default LayoutIndex;
