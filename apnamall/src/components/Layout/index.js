import { motion } from "framer-motion";

const Layout = ({ children }) => (
	<motion.div
		initial={{ x: 500, opacity: 0 }}
		animate={{ x: 10, opacity: 1 }}
		exit={{ x: 500, opacity: 0 }}
		transition={{
			type: "spring",
			stiffness: 260,
			damping: 20,
		}}>
		{children}
	</motion.div>
);
export default Layout;
