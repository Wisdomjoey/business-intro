import Button from "./button";
import Image from "next/image";
import ch1 from "../assets/ch1.jpg";

function ChooseUs() {
	return (
		<div className="max-[1200px] mx-auto py-[100px]">
			<div className="mb-[50px] flex items-center gap-[50px]">
				<div className="flex-1 relative">
					<div className="h-[350px] rounded-[10px] overflow-hidden">
						<Image alt="" src={ch1} className="w-full h-full object-cover" />
					</div>
				</div>

				<div className="flex-1">
					<h1>We will provide best solution to grow up your business</h1>

					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
						cum eaque enim vero facere delectus minima expedita impedit eius
						repudiandae pariatur ullam quia et reprehenderit, adipisci iusto?
						Totam, voluptates odit.
					</p>

					<Button text="get started" />
				</div>
			</div>
		</div>
	);
}

export default ChooseUs;
