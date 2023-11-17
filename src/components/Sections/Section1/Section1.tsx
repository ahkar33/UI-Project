import { motion } from "framer-motion";

const Section1 = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1, delay: 0.4 }}
			exit={{ opacity: 0 }}
		>
			<h4 className="sm:text-6xl md:text-7xl text-5xl mb-10 font-extrabold z-20 p-5">
				Dude With Specs
			</h4>
		</motion.div>
	);
};

export default Section1;
