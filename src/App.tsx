import { useState, useEffect } from "react";
import { Variant, motion, useAnimationControls } from "framer-motion";
import {
	Section1,
	Section2,
	Section3,
	Loading,
	SocialLinks,
} from "@/components";
import { WALKING_BOY } from "@/assets";

const sections: SectionType[] = [
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
	const [touchStartY, setTouchStartY] = useState(0); 
	const [screenSize, getDimension] = useState({
		dynamicWidth: window.innerWidth,
		dynamicHeight: window.innerHeight,
	});

	const setDimension = () => {
		getDimension({
			dynamicWidth: window.innerWidth,
			dynamicHeight: window.innerHeight,
		});
	};

	useEffect(() => {
		window.addEventListener("resize", setDimension);
		return () => {
			window.removeEventListener("resize", setDimension);
		};
	}, [screenSize]);

	useEffect(() => {
		const loadingTimeout = setTimeout(() => {
			setIsLoading(false);
		}, 1600);

		return () => clearTimeout(loadingTimeout);
	}, []);

	useEffect(() => {
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
			y:
				currentSection === 0
					? screenSize.dynamicWidth < 421
						? [140, 120]
						: [230, 200]
					: 0,
			transition: {
				ease: "linear",
				duration: 0.8,
				repeat: currentSection === 0 ? Infinity : 0,
				repeatType: "reverse",
			},
		} as Variant);
	}, [
		currentSection,
		sectionControls,
		imageDivControls,
		imageControls,
		screenSize,
	]);

	const handleScroll = (e: any) => {
    let deltaY = 0;

    if (e.type === 'wheel') {
      // For wheel events on non-mobile devices
      deltaY = e.deltaY;
    } else if (e.type === 'touchmove') {
      // For touch events on mobile devices
      deltaY = e.touches[0].clientY - touchStartY;
    } else if (e.type === 'touchstart') {
      // Save the initial touch position
      setTouchStartY(e.touches[0].clientY);
    }

    setScrollY((prev) => prev + deltaY);

    // Check if half a circle of scrolling has occurred
    const sectionsHeight = sections.length * window.innerHeight;
    const halfCircleThreshold = sectionsHeight / 2;

    if (Math.abs(scrollY) >= halfCircleThreshold) {
      if (deltaY > 0) {
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
				onTouchMove={(e) => handleScroll(e)}
				onTouchStart={(e) => handleScroll(e)}
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
					animate={imageDivControls}
				>
					<motion.img
						style={{
							width: "100%",
							height: "100%",
							objectFit: "cover",
						}}
						src={WALKING_BOY}
						alt="Girl"
						animate={imageControls}
					/>
				</motion.div>
			</div>
			<SocialLinks />
		</>
	);
};

export default App;
