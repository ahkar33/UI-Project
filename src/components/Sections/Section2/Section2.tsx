import { motion } from "framer-motion";

const Section2 = () => {
	return (
		<div>
			<motion.h1
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5, delay: 1 }}
				exit={{ opacity: 0 }}
				className="sm:text-8xl md:text-9xl text-7xl  text-center mt-64 font-extrabold z-20"
			>
				HIRE ME
			</motion.h1>
		</div>
	);
};

export default Section2;
