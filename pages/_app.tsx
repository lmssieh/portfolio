import "windi.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import LayoutIndex from "./LayoutIndex";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<LayoutIndex>
			<Component {...pageProps} />
		</LayoutIndex>
	);
}

export default MyApp;
