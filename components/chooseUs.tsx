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

						<div className="absolute bottom-[25px] w-[60%] max-w-[350px] h-[100px] bg-[white] rounded-[15px] py-[10px] px-[15px] flex items-center gap-[5px]">
							<div className="min-w-[40px] h-[40px] bg-[#c9ffcb] rounded-[50%] flex items-center justify-center">
								<svg
									version="1.1"
									id="Icons"
									xmlns="http://www.w3.org/2000/svg"
									xmlnsXlink="http://www.w3.org/1999/xlink"
									x="0px"
									y="0px"
									viewBox="0 0 32 32"
									enableBackground={"new 0 0 32 32"}
									xmlSpace="preserve"
									className="fill-none w-[20px]"
								>
									<ellipse
										stroke="green"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeMiterlimit={10}
										cx="14"
										cy="8"
										rx="10"
										ry="5"
									/>
									<circle
										stroke="green"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeMiterlimit={10}
										cx="24"
										cy="23"
										r="7"
									/>
									<line
										stroke="green"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeMiterlimit={10}
										x1="24"
										y1="20"
										x2="24"
										y2="26"
									/>
									<line
										stroke="green"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeMiterlimit={10}
										x1="21"
										y1="23"
										x2="27"
										y2="23"
									/>
									<line
										stroke="green"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeMiterlimit={10}
										x1="24"
										y1="16"
										x2="24"
										y2="8"
									/>
									<path
										stroke="green"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeMiterlimit={10}
										d="M4,8v8c0,2.8,4.5,5,10,5c1.2,0,2.3-0.1,3.4-0.3"
									/>
									<path
										stroke="green"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeMiterlimit={10}
										d="M4,16v8c0,2.8,4.5,5,10,5c2,0,3.8-0.3,5.3-0.8"
									/>
								</svg>
							</div>

							<div>
								<h4 className="font-bold text-[14px] mb-[5px]">
									Data Analytics
								</h4>

								<p className="text-[gray] text-[13px] leading-[1.3]">
									Keep your info updated to increase the number of highlight
								</p>
							</div>

							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="absolute top-[10px] w-[20px] right-[15px] cursor-pointer"
							>
								<circle cx="12" cy="12" r="1"></circle>
								<circle cx="19" cy="12" r="1"></circle>
								<circle cx="5" cy="12" r="1"></circle>
							</svg>
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
					<div className="h-[350px] rounded-[10px] overflow-hidden flex-1 relative flex justify-center">
						<Image alt="" src={ch2} className="w-full h-full object-cover" />

						<div className="absolute bottom-[25px] w-[60%] max-w-[350px] min-h-[100px] bg-[white] rounded-[15px] py-[10px] px-[15px]">
							<h4 className="font-bold mb-[5px] text-[17px]">Personal</h4>

							<div className="flex items-center gap-[10px]">
								<div className="w-[30px] h-[30px] rounded-[50%] bg-[blue] flex items-center justify-center">
									<svg
										version="1.1"
										id="Layer_1"
										xmlns="http://www.w3.org/2000/svg"
										xmlnsXlink="http://www.w3.org/1999/xlink"
										x="0px"
										y="0px"
										viewBox="0 0 48 48"
										enableBackground={"new 0 0 48 48"}
										xmlSpace="preserve"
										className="fill-white w-[20px]"
									>
										<path
											d="M24,2C11.869,2,2,11.869,2,24s9.869,22,22,22s22-9.869,22-22S36.131,2,24,2z M39.152,11H37V8.848
	C37.771,9.51,38.49,10.229,39.152,11z M32,24c0,4.411-3.589,8-8,8s-8-3.589-8-8s3.589-8,8-8c1.06,0,2.07,0.213,2.996,0.591
	l-3.456,3.456C21.553,20.278,20,21.952,20,24c0,2.206,1.794,4,4,4c2.048,0,3.721-1.552,3.953-3.539l3.456-3.456
	C31.787,21.931,32,22.94,32,24z M31.086,18.5L27,22.586L25.415,21l4.086-4.086L31.086,18.5z M23.624,22.038l0.462,0.462
	l-0.793,0.793c-0.391,0.391-0.391,1.024,0,1.414c0.391,0.39,1.024,0.39,1.414,0l0.793-0.793l0.462,0.462
	C25.785,25.299,24.974,26,24,26c-1.103,0-2-0.897-2-2C22,23.026,22.701,22.215,23.624,22.038z M30,12v2.656
	c-0.383-0.226-0.878-0.192-1.207,0.138l-0.302,0.302C27.138,14.407,25.62,14,24,14c-5.514,0-10,4.486-10,10s4.486,10,10,10
	s10-4.486,10-10c0-1.619-0.407-3.137-1.095-4.491l0.302-0.302c0.329-0.329,0.364-0.824,0.137-1.207H36
	c0.197,0,0.379-0.075,0.541-0.182C37.468,19.684,38,21.779,38,24c0,7.72-6.28,14-14,14s-14-6.28-14-14s6.28-14,14-14
	c2.221,0,4.316,0.532,6.182,1.459C30.075,11.621,30,11.803,30,12z M35.586,16H32v-3.586l3-3V12c0,0.552,0.447,1,1,1h2.586L35.586,16
	z M24,44C12.972,44,4,35.028,4,24S12.972,4,24,4c3.873,0,7.481,1.124,10.546,3.04l-2.918,2.918C29.358,8.717,26.764,8,24,8
	C15.178,8,8,15.178,8,24s7.178,16,16,16s16-7.178,16-16c0-2.764-0.717-5.358-1.958-7.628l2.918-2.918C42.876,16.519,44,20.127,44,24
	C44,35.028,35.028,44,24,44z"
										/>
									</svg>
								</div>

								<div className="py-[10px] text-[14px] border-b border-[lightgray] flex-1">
									Goals
								</div>

								<div className="w-[25px] h-[25px] rounded-[50%] flex items-center justify-center border border-[lightgray] cursor-pointer">
									<svg
										enable-background="new 0 0 24 24"
										id="Layer_1"
										version="1.0"
										viewBox="0 0 24 24"
										xmlSpace="preserve"
										xmlns="http://www.w3.org/2000/svg"
										xmlnsXlink="http://www.w3.org/1999/xlink"
										className="w-[10px]"
									>
										<polyline
											fill="none"
											points="8.5,3 17.5,12 8.5,21 "
											stroke="#000000"
											strokeMiterlimit="10"
											strokeWidth="2"
										/>
									</svg>
								</div>
							</div>

							<div className="flex items-center gap-[10px]">
								<div className="w-[30px] h-[30px] rounded-[50%] bg-[orange] flex items-center justify-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										width="24"
										height="24"
									>
										<path fill="none" d="M0 0h24v24H0z" />
										<path
											d="M14.121 9.879c4.296 4.295 6.829 8.728 5.657 9.9-.475.474-1.486.34-2.807-.273a9.008 9.008 0 0 1-10.59-.474l-.038.04-1.414-1.415.038-.04A9.006 9.006 0 0 1 4.495 7.03c-.614-1.322-.748-2.333-.273-2.808 1.128-1.128 5.277 1.177 9.417 5.182l.482.475zm-1.414 1.414C10.823 9.409 8.87 7.842 7.236 6.87l-.186.18a7.002 7.002 0 0 0-.657 9.142l1.846-1.846a2 2 0 1 1 1.416 1.415l-1.848 1.846a7.002 7.002 0 0 0 9.143-.657l.179-.188-.053-.089c-.976-1.615-2.52-3.53-4.369-5.38zm7.071-7.071a2 2 0 0 1-.164 2.976 9.015 9.015 0 0 1 .662 8.345 21.168 21.168 0 0 0-1.386-2.306 6.99 6.99 0 0 0-1.94-6.187 6.992 6.992 0 0 0-6.187-1.94 21.092 21.092 0 0 0-2.306-1.386 9.016 9.016 0 0 1 8.347.663 2 2 0 0 1 2.974-.165z"
											fill="#000"
										/>
									</svg>
								</div>

								<div className="py-[10px] text-[14px] border-[lightgray] flex-1">
									Monthly Plan
								</div>

								<div className="w-[25px] h-[25px] rounded-[50%] flex items-center justify-center border border-[lightgray] cursor-pointer">
									<svg
										enable-background="new 0 0 24 24"
										id="Layer_1"
										version="1.0"
										viewBox="0 0 24 24"
										xmlSpace="preserve"
										xmlns="http://www.w3.org/2000/svg"
										xmlnsXlink="http://www.w3.org/1999/xlink"
										className="w-[10px]"
									>
										<polyline
											fill="none"
											points="8.5,3 17.5,12 8.5,21 "
											stroke="#000000"
											strokeMiterlimit="10"
											strokeWidth="2"
										/>
									</svg>
								</div>
							</div>
						</div>
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
