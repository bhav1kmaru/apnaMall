import { ChakraProvider } from "@chakra-ui/react";
import "../styles/slider_main.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Router from "next/router";

export default function App({ Component, pageProps, router }) {
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		// Used for page transition
		const start = () => {
			setLoading(true);
		};
		const end = () => {
			setLoading(false);
		};
		Router.events.on("routeChangeStart", start);
		Router.events.on("routeChangeComplete", end);
		Router.events.on("routeChangeError", end);
		return () => {
			Router.events.off("routeChangeStart", start);
			Router.events.off("routeChangeComplete", end);
			Router.events.off("routeChangeError", end);
		};
	}, []);
	return (
		<>
			{/* <link
				href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
				rel="stylesheet"
			/> */}

			<link
				rel="stylesheet"
				href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.1.1/css/all.css"
			/>
			{/* <script
				src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
				async></script> */}

			<ChakraProvider>
				<AnimatePresence
					mode="wait"
					onExitComplete={() => window.scrollTo(0, 0)}
					initial={false}>
					<Navbar />
					<Component {...pageProps} key={router.asPath} />
					<Footer />
				</AnimatePresence>
			</ChakraProvider>
		</>
	);
}
