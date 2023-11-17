import { DISCORD_ICON, OPENSEA_ICON, TWITTER_ICON } from "@/assets";

const SocialLinks = () => {
	return (
		<div className="absolute md:bottom-9 md:left-10 bottom-5 left-6 flex justify-center gap-4">
			<a href="https://discord.com/">
				<img
					className="hover:scale-90 transition-transform ease-in-out duration-100"
					src={DISCORD_ICON}
					height={40}
					width={40}
					alt="discord"
				/>
			</a>
			<a href="https://opensea.io/">
				<img
					className="hover:scale-90 transition-transform ease-in-out duration-100"
					src={OPENSEA_ICON}
					height={40}
					width={40}
					alt="opensea"
				/>
			</a>
			<a href="https://twitter.com/">
				<img
					className="hover:scale-90 transition-transform ease-in-out duration-100"
					src={TWITTER_ICON}
					height={40}
					width={40}
					alt="twitter"
				/>
			</a>
		</div>
	);
};

export default SocialLinks;
