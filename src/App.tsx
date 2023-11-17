import { useState, useEffect } from "react";
import {
	Variant,
	motion,
	useAnimationControls,
} from "framer-motion";
import { Section1, Section2, Section3, Loading } from "@/components";
import {
	DISCORD_ICON,
	OPENSEA_ICON,
	TWITTER_ICON,
	WALKING_BOY,
} from "@/assets";

const sections = [
	{ id: 1, color: "", element: <Section1 /> },
	{ id: 2, color: "", element: <Section2 /> },
	{ id: 3, color: "", element: <Section3 /> },
];

const App = () => {
	const [currentSection, setCurrentSection] = useState(0);
	const [isLoading, setIsLoading] = useState(true);
	const sectionControls = useAnimationControls();
	const imageDivControls = useAnimationControls();
	const imageControls = useAnimationControls();
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		const loadingTimeout = setTimeout(() => {
			setIsLoading(false);
		}, 1600);

		return () => clearTimeout(loadingTimeout);
	}, []);

	useEffect(() => {
		// imageDivControls.stop();
		// imageControls.stop();
		sectionControls.start({
			y: -window.innerHeight * currentSection,
			transition: { ease: "easeInOut", duration: 1 },
		});
		imageDivControls.start({
			x: currentSection !== 2 ? "-50%" : "-80%",
			y: currentSection === 1 ? "-30%" : currentSection === 0 ? "-50%" : "-25%",
			rotate: currentSection === 1 ? -90 : 0,
			transition: { ease: "easeOut", duration: 1 },
			scale: currentSection === 0 ? 2 : 1,
		});

		imageControls.start({
			y: currentSection === 0 ? [230, 200] : 0,
			transition: {
				ease: "linear",
				duration: 0.8,
				repeat: currentSection === 0 ? Infinity : 0,
				repeatType: "reverse",
			},
		} as Variant);
	}, [currentSection, sectionControls, imageDivControls, imageControls]);

	const handleScroll = (e: any) => {
		setScrollY((prev) => prev + e.deltaY);
		// Check if half a circle of scrolling has occurred
		const sectionsHeight = sections.length * window.innerHeight;
		const halfCircleThreshold = sectionsHeight / 2;
		if (Math.abs(scrollY) >= halfCircleThreshold) {
			if (e.deltaY > 0) {
				// Scrolling down
				setCurrentSection((prev) => (prev + 1) % sections.length);
			} else {
				// Scrolling up
				setCurrentSection(
					(prev) => (prev - 1 + sections.length) % sections.length
				);
			}
			// Reset scrollY to prevent continuous section changes
			setScrollY(0);
		}
	};

	return (
		<>
			<div
				className="overflow-hidden h-screen relative"
				onWheel={(e) => handleScroll(e)}
			>
				{/* Sections */}
				<motion.div className="flex flex-col  h-full" animate={sectionControls}>
					{sections.map((section, index) => (
						<motion.div
							key={section.id}
							className="relative text-4xl flex-grow-1 flex-shrink-0 flex-basis-100%"
							style={{
								flex: "1 0 100%",
								backgroundColor: section.color,
							}}
						>
							{isLoading ? (
								<Loading />
							) : (
								<>{currentSection === index && <>{section.element}</>}</>
							)}
						</motion.div>
					))}
				</motion.div>

				<motion.div
					className="img-container absolute top-1/2 left-1/2"
					style={
						{
							// backgroundColor: "yellow",
						}
					}
					animate={imageDivControls}
				>
					<motion.img
						style={{
							width: "100%",
							height: "100%",
							objectFit: "cover",
							// border: "2px solid black",
						}}
						src={WALKING_BOY}
						alt="Girl"
						animate={imageControls}
					/>
				</motion.div>
			</div>
			<div className="absolute md:bottom-9 md:left-10 bottom-5 left-6 flex justify-center gap-4">
				<a href="https://discord.com/">
					<img
						className="hover:scale-90 transition-transform ease-in-out duration-300"
						src={DISCORD_ICON}
						height={40}
						width={40}
						alt="discord"
					/>
				</a>
				<a href="https://opensea.io/">
					<img
						className="hover:scale-90 transition-transform ease-in-out duration-300"
						src={OPENSEA_ICON}
						height={40}
						width={40}
						alt="opensea"
					/>
				</a>
				<a href="https://twitter.com/">
					<img
						className="hover:scale-90 transition-transform ease-in-out duration-300"
						src={TWITTER_ICON}
						height={40}
						width={40}
						alt="twitter"
					/>
				</a>
			</div>
		</>
	);
};

export default App;
