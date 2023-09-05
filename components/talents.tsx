import Image from "next/image";
import pic1 from "../assets/pic1.png";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpeg";
import pic4 from "../assets/pic4.jpeg";
import pic5 from "../assets/pic5.jpeg";

function Talents() {
	return (
		<div className="py-[100px] px-[40px]">
			<div className="max-w-[1200px] mx-auto">
				<div className="mb-[50px] flex items-center justify-between sm:flex-col sm:gap-[30px]">
					<div>
						<h1 className="text-[35px] font-bold sm:text-[28px]">
							Meet the Talents
						</h1>

						<p className="text-[15px] mt-[5px] sm:text-[14px]">
							know the talents who has made our app amazing for our daily use
						</p>
					</div>

					<div className="relative text-[15px] text-white bg-blue-700 px-[17px] sm:self-end overflow-hidden py-[10px] rounded-[25px] flex items-center gap-[13px] -rotate-[4deg] shadow-[0px_5px_20px_0px_#0000ff5e]">
						Let&apos;s Talk!
						<svg
							version="1.1"
							id="Icons"
							xmlns="http://www.w3.org/2000/svg"
							xmlnsXlink="http://www.w3.org/1999/xlink"
							x="0px"
							y="0px"
							viewBox="0 0 32 32"
							enableBackground="new 0 0 32 32"
							xmlSpace="preserve"
							fill="white"
							stroke="none"
							strokeWidth={3}
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeMiterlimit={10}
							width="17"
							height="17"
						>
							<g>
								<path d="M25.9,6.1C23.4,8.9,22,12.3,22,16c0,3.7,1.4,7.1,3.9,9.9c2.6-2.5,4.1-6,4.1-9.9C30,12.1,28.4,8.6,25.9,6.1z" />
								<path
									d="M20,16c0-4.2,1.5-8.1,4.3-11.2C22,3,19.1,2,16,2c-3.1,0-6,1-8.3,2.8C10.5,7.9,12,11.8,12,16c0,4.2-1.5,8.1-4.3,11.2
		C10,29,12.9,30,16,30c3.1,0,6-1,8.3-2.8C21.5,24.1,20,20.2,20,16z"
								/>
								<path d="M6.1,25.9C8.6,23.1,10,19.7,10,16c0-3.7-1.4-7.1-3.9-9.9C3.6,8.6,2,12.1,2,16C2,19.9,3.6,23.4,6.1,25.9z" />
							</g>
						</svg>
						<div className="absolute w-[10px] h-[10px] shadow-[4px_0px_0px_0px_white] bottom-0 right-[15px] rounded-[0px_0px_4px_0px]"></div>
						<div className="absolute w-[10px] h-[10px] shadow-[4px_4px_0px_0px_white] bottom-[14px] right-0 rounded-[0px_0px_4px_0px]"></div>
						<div className="absolute w-[15px] h-[14px] rounded-[5px] bg-white bottom-0 right-0"></div>
					</div>
				</div>

				<div className="flex flex-wrap justify-center gap-[50px]">
					{[
						{ img: pic1, name: "Nadir als", role: "UX Researcher", flag: "🏳️‍🌈" },
						{
							img: pic2,
							name: "Emon Pixels",
							role: "Visual Designer",
							flag: "🏁",
						},
						{ img: pic3, name: "SM Usama", role: "UX Researcher", flag: "🏳️‍⚧️" },
						{ img: pic4, name: "HR Rumen", role: "App Designer", flag: "🏴" },
						{
							img: pic5,
							name: "Osama Iden",
							role: "Visual Designer",
							flag: "🏁",
						},
					].map((val, ind) => (
						<div key={ind} className="flex flex-col items-center gap-[30px]">
							<div className="relative w-[150px] h-[150px] sm:w-[100px] sm:h-[100px] rounded-[50%]">
								<Image
									alt="team"
									src={val.img}
									className="w-full h-full object-cover rounded-[50%]"
								/>

								<span className="absolute bg-white rounded-[50%] w-[40px] h-[40px] sm:w-[30px] sm:h-[30px] sm:text-[14px] flex items-center justify-center top-0 shadow-lg">
									{val.flag}
								</span>
							</div>

							<div className="text-center text-[14px]">
								<p className="font-bold">{val.name}</p>
								<p className="text-[dimgray] text-[13px]">{val.role}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Talents;
