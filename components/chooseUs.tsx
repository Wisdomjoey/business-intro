import Button from "./button";
import Image from "next/image";
import ch1 from "../assets/ch1.jpg";
import ch2 from "../assets/ch2.jpg";

function ChooseUs() {
	return (
		<div className="max-w-[1200px] mx-auto py-[100px]">
			<div className="mb-[100px] flex items-center gap-[100px]">
				<div className="flex-1 flex">
					<div className="relative -mt-[40px] -mr-[55px] z-10">
						<div className="w-[60px] h-[60px] rounded-[50%] p-[2px] absolute top-[80px] bg-[linear-gradient(-45deg,black_50%,transparent_50%)] -z-[1]">
							<div className="wfull h-full bg-[white] rounded-[50%]"></div>
						</div>

						<div className="w-[100px] h-[100px] rounded-[50%] p-[2px] bg-[linear-gradient(-45deg,black_50%,transparent_50%)]">
							<div className="wfull h-full bg-[white] rounded-[50%]"></div>
						</div>
					</div>

					<div className="h-[350px] rounded-[10px] overflow-hidden flex-1 relative flex justify-center">
						<Image alt="" src={ch1} className="w-full h-full object-cover" />

						<div className="absolute bottom-[25px] w-[60%] max-w-[350px] h-[100px] bg-[white] rounded-[15px] p-[20px] flex items-center gap-[5px]">
							<div className="w-[40px] h-[40px] rounded-[50%] flex items-center justify-center"></div>

							<div>
								<h4>Data Analytics</h4>
								
								<p>Keep your info updated to increase the number of highlight</p>
							</div>
						</div>
					</div>
				</div>

				<div className="flex-1 leading-[1.4]">
					<h1 className="font-bold text-[35px] mb-[20px]">
						We will provide best solution to grow up your business
					</h1>

					<p className="text-[14px] mb-[20px] text-[gray]">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
						cum eaque enim vero facere delectus minima expedita impedit eius
						repudiandae pariatur ullam quia et reprehenderit, adipisci iusto?
						Totam, voluptates odit.
					</p>

					<Button text="Get Started" />
				</div>
			</div>

			<div className="flex items-center gap-[100px]">
				<div className="flex-1 leading-[1.4]">
					<h1 className="font-bold text-[35px] mb-[20px]">
						Why you will choose our service first
					</h1>

					<ul className="text-[14px] mb-[20px] text-[gray] list-inside">
						<li className="mb-[20px]">
							<span className="font-bold text-[black]">&#10004;&emsp;</span>
							Your experts come with <strong>proven track records</strong> to
							make your working relationship
						</li>

						<li>
							<span className="font-bold text-[black]">&#10004;&emsp;</span>
							<strong>Hire 600+</strong> (exhaustively better) top
							performingmarketers
						</li>
					</ul>

					<Button text="Get Started" />
				</div>

				<div className="flex-1 flex">
					<div className="h-[350px] rounded-[10px] overflow-hidden flex-1">
						<Image alt="" src={ch2} className="w-full h-full object-cover" />
					</div>

					<div className="relative -mt-[40px] -ml-[40px] z-10">
						<div className="w-[60px] h-[60px] rounded-[50%] p-[2px] bg-[linear-gradient(45deg,black_50%,transparent_50%)] absolute -z-[1] -left-[15px]">
							<div className="wfull h-full bg-[white] rounded-[50%]"></div>
						</div>

						<div className="w-[100px] h-[100px] rounded-[50%] p-[2px] bg-[linear-gradient(45deg,black_50%,transparent_50%)] mt-[25px]">
							<div className="wfull h-full bg-[white] rounded-[50%]"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ChooseUs;
