import { motion } from "framer-motion";

const Section2 = () => {
	return (
		<div>
			<motion.h1
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5, delay: 1 }}
				exit={{ opacity: 0 }}
				className="sm:text-8xl md:text-9xl text-7xl  text-center absolute top-1/3 left-1/2 w-full font-extrabold z-20"
				style={{
					transform: "translate(-50%, -50%)" 
				}}
			>
				CODIGO	
			</motion.h1>
		</div>
	);
};

export default Section2;
