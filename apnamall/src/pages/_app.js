import { ChakraProvider } from "@chakra-ui/react";
import "../styles/slider_main.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
export default function App({ Component, pageProps }) {
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
				<Navbar />
				<Component {...pageProps} />
				<Footer />
			</ChakraProvider>
		</>
	);
}
