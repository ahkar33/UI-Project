import { WALKING_BOY } from "@/assets";

const LoadingAnimation = () => (
	<div
		className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10"
		style={{
			backgroundColor: "rgba(255, 255, 255)",
		}}
	>
		<div className="flex flex-col justify-center items-center">
			<img src={WALKING_BOY} width={300} height={300} alt="" />
			<h3>Loading ...</h3>
		</div>
	</div>
);

export default LoadingAnimation;
