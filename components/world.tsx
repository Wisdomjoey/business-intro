import Image from "next/image";
import map from "../assets/map.png";
import flag1 from "../assets/flag1.jpeg";
import flag2 from "../assets/flag2.png";
import flag3 from "../assets/flag3.png";
import flag4 from "../assets/flag4.png";
import flag5 from "../assets/flag5.png";
import flag6 from "../assets/flag6.png";
import flag7 from "../assets/flag7.jpeg";
import flag8 from "../assets/flag8.png";

function World() {
	return (
		<div className="py-[80px]">
			<div className="max-w-[1200px] mx-auto">
				<h1 className="w-[50%] mx-auto text-[32px] xs:text-[25px] xs:w-[70%] mb-[50px] text-center">
					We support more than 30 languages
				</h1>

				<div className="relative">
					<Image alt="map" src={map} className="w-full object-contain" />
					<Image
						alt="flag"
						src={flag1}
						className="w-[50px] h-[50px] sm:w-[25px] sm:h-[25px] sm:border-[3px] rounded-[50%] border-[5px] border-white object-cover absolute top-[33%] left-[12%]"
					/>
					<Image
						alt="flag"
						src={flag2}
						className="w-[50px] h-[50px] sm:w-[25px] sm:h-[25px] sm:border-[3px] rounded-[50%] border-[5px] border-white object-cover absolute bottom-[38%] left-[30%]"
					/>
					<Image
						alt="flag"
						src={flag3}
						className="w-[50px] h-[50px] sm:w-[25px] sm:h-[25px] sm:border-[3px] rounded-[50%] border-[5px] border-white object-cover absolute top-[15%] left-[34%]"
					/>
					<Image
						alt="flag"
						src={flag4}
						className="w-[50px] h-[50px] sm:w-[25px] sm:h-[25px] sm:border-[3px] rounded-[50%] border-[5px] border-white object-cover absolute top-[30%] left-[50%]"
					/>
					<Image
						alt="flag"
						src={flag5}
						className="w-[50px] h-[50px] sm:w-[25px] sm:h-[25px] sm:border-[3px] rounded-[50%] border-[5px] border-white object-cover absolute bottom-[33%] right-[39%]"
					/>
					<Image
						alt="flag"
						src={flag6}
						className="w-[50px] h-[50px] sm:w-[25px] sm:h-[25px] sm:border-[3px] rounded-[50%] border-[5px] border-white object-cover absolute top-[38%] right-[25%]"
					/>
					<Image
						alt="flag"
						src={flag7}
						className="w-[50px] h-[50px] sm:w-[25px] sm:h-[25px] sm:border-[3px] rounded-[50%] border-[5px] border-white object-cover absolute top-[25%] right-[12%]"
					/>
					<Image
						alt="flag"
						src={flag8}
						className="w-[50px] h-[50px] sm:w-[25px] sm:h-[25px] sm:border-[3px] rounded-[50%] border-[5px] border-white object-cover absolute bottom-[23%] right-[9%]"
					/>
				</div>
			</div>
		</div>
	);
}

export default World;
