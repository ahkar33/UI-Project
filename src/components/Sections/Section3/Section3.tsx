import { motion } from "framer-motion";

const Section3 = () => {
	return (
		<div className="flex xl:justify-end justify-center xl:items-center items-start h-screen lg:mt-12 mt-28">
			<div className="max-w-4xl">
				<motion.h4 
				 className="xl:text-start text-center xl:ml-28"
				 initial={{y: 0}}
				 animate={{y: [-20, 0, -20]}}
				 transition={{repeat: Infinity, duration: 2, ease: 'easeInOut'}}
				 >
					I am a self-taught, hardworking and passionate React/Next.js
					developer.
				</motion.h4>
			</div>
		</div>
	);
};

export default Section3;
