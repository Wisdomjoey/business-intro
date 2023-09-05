import Button from "./button";
import Image from "next/image";
import ch1 from "../assets/ch1.jpg";
import ch2 from "../assets/ch2.jpg";
import first from "../assets/1-number-14136.png";

function ChooseUs() {
	return (
		<div className="px-[40px] xs:px-0">
			<div className="max-w-[1200px] mx-auto py-[100px]">
				<div className="mb-[100px] flex items-center gap-[100px] sm:flex-col sm:gap-[50px]">
					<div className="flex-1 flex w-full xs:pr-[40px] justify-center">
						<div className="relative -mt-[40px] -mr-[55px] z-10">
							<div className="w-[60px] h-[60px] rounded-[50%] p-[2px] absolute top-[80px] bg-[linear-gradient(-45deg,black_50%,transparent_50%)] -z-[1]">
								<div className="wfull h-full bg-[white] rounded-[50%]"></div>
							</div>

							<div className="w-[100px] h-[100px] rounded-[50%] p-[2px] bg-[linear-gradient(-45deg,black_50%,transparent_50%)]">
								<div className="wfull h-full bg-[white] rounded-[50%]"></div>
							</div>
						</div>

						<div className="h-[350px] rounded-[10px] overflow-hidden flex-1 relative flex justify-center max-w-[430px] xs:h-[300px]">
							<Image alt="" src={ch1} className="w-full h-full object-cover" />

							<div className="absolute bottom-[25px] w-[60%] max-w-[350px] min-w-[260px] h-[100px] bg-[white] rounded-[15px] py-[10px] px-[15px] flex items-center gap-[5px]">
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

					<div className="flex-1 leading-[1.4] xs:px-[40px]">
						<h1 className="font-bold text-[35px] mb-[20px] sm:text-[28px]">
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

				<div className="mb-[100px] flex items-center gap-[100px] sm:flex-col sm:gap-[50px]">
					<div className="flex-1 leading-[1.4] xs:px-[40px]">
						<h1 className="font-bold text-[35px] sm:text-[28px] mb-[20px]">
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

					<div className="flex-1 flex w-full xs:pl-[40px] justify-center">
						<div className="h-[350px] rounded-[10px] overflow-hidden flex-1 relative flex justify-center max-w-[430px] xs:h-[300px]">
							<Image alt="" src={ch2} className="w-full h-full object-cover" />

							<div className="absolute bottom-[25px] w-[60%] max-w-[350px] min-w-[260px] min-h-[100px] bg-[white] rounded-[15px] py-[10px] px-[15px]">
								<h4 className="font-bold mb-[5px] text-[17px]">Personal</h4>

								<div className="flex items-center gap-[10px]">
									<div className="w-[30px] h-[30px] rounded-[50%] bg-blue-700 flex items-center justify-center">
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
											enableBackground="new 0 0 24 24"
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
											enableBackground="new 0 0 24 24"
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

				<div className="flex flex-wrap gap-[70px] justify-center sm:gap-0">
					<div className="flex flex-col items-center sm:scale-[0.7] sm:w-[100px]">
						<h1 className="text-[38px] font-bold leading-[1]">4.9</h1>

						<div className="flex items-center mb-[5px] text-[#50c1e6] text-[14px]">
							&#9733;&#9733;&#9733;&#9733;&#9733;
						</div>

						<svg
							xmlns="http://www.w3.org/2000/svg"
							xmlnsXlink="http://www.w3.org/1999/xlink"
							width="299.91pt"
							height="66.28pt"
							viewBox="0 0 299.91 66.28"
							version="1.1"
							className="w-[70px] h-[30px]"
						>
							<defs>
								<clipPath id="clip1">
									<path d="M 44 0 L 66 0 L 66 66.28125 L 44 66.28125 Z M 44 0 " />
								</clipPath>
								<clipPath id="clip2">
									<path d="M 27 24 L 45 24 L 45 66.28125 L 27 66.28125 Z M 27 24 " />
								</clipPath>
								<clipPath id="clip3">
									<path d="M 71 11 L 299.910156 11 L 299.910156 66.28125 L 71 66.28125 Z M 71 11 " />
								</clipPath>
							</defs>
							<g id="surface1">
								<path
									stroke="none"
									fill="rgb(95.298767%,66.299438%,28.599548%)"
									fillRule="nonzero"
									fillOpacity={1}
									d="M 0 24.371094 L 27.488281 24.375 L 44.203125 24.378906 L 44.203125 7.820313 L 0 24.371094 "
								/>
								<g clipPath="url(#clip1)" clipRule="nonzero">
									<path
										stroke="none"
										fill="rgb(27.49939%,75.698853%,92.89856%)"
										fillRule="nonzero"
										fillOpacity={1}
										d="M 44.203125 7.820313 L 44.203125 66.28125 L 65.078125 0.00390625 Z M 44.203125 7.820313 "
									/>
								</g>
								<g clipPath="url(#clip2)" clipRule="nonzero">
									<path
										stroke="none"
										fill="rgb(0%,42.698669%,60.398865%)"
										fillRule="nonzero"
										fillOpacity={1}
										d="M 44.203125 24.378906 L 27.488281 24.375 L 44.203125 66.28125 Z M 44.203125 24.378906 "
									/>
								</g>
								<path
									stroke="none"
									fill="rgb(87.098694%,41.598511%,39.199829%)"
									fillRule="nonzero"
									fillOpacity={1}
									d="M 0 24.371094 L 31.773438 35.128906 L 27.488281 24.375 Z M 0 24.371094 "
								/>
								<g clipPath="url(#clip3)" clipRule="nonzero">
									<path
										stroke="none"
										fill="rgb(0%,42.698669%,60.398865%)"
										fillRule="nonzero"
										fillOpacity={1}
										d="M 290.714844 39.183594 L 289.859375 39.183594 C 289.574219 39.183594 289.289063 39.203125 289.007813 39.246094 C 287.992188 39.328125 286.984375 39.449219 285.992188 39.609375 C 284.996094 39.773438 284.113281 40.054688 283.34375 40.460938 C 282.570313 40.867188 281.941406 41.398438 281.453125 42.046875 C 280.96875 42.695313 280.722656 43.527344 280.722656 44.542969 C 280.722656 45.679688 281.050781 46.644531 281.699219 47.4375 C 282.347656 48.226563 283.445313 48.625 284.988281 48.625 C 285.757813 48.625 286.488281 48.523438 287.179688 48.320313 C 287.871094 48.117188 288.480469 47.851563 289.007813 47.527344 C 289.535156 47.203125 289.953125 46.847656 290.257813 46.460938 C 290.5625 46.078125 290.714844 45.722656 290.714844 45.394531 Z M 298.507813 46.25 C 298.507813 49.457031 298.976563 51.792969 299.910156 53.253906 C 299.179688 53.535156 298.5 53.738281 297.871094 53.863281 C 297.238281 53.984375 296.578125 54.042969 295.890625 54.042969 C 294.429688 54.042969 293.320313 53.761719 292.570313 53.191406 C 291.816406 52.625 291.34375 51.8125 291.140625 50.753906 C 290.246094 51.691406 289.066406 52.480469 287.605469 53.132813 C 286.144531 53.78125 284.355469 54.105469 282.246094 54.105469 C 281.148438 54.105469 280.054688 53.953125 278.957031 53.652344 C 277.859375 53.347656 276.863281 52.851563 275.972656 52.164063 C 275.078125 51.476563 274.347656 50.554688 273.78125 49.402344 C 273.210938 48.246094 272.929688 46.839844 272.929688 45.179688 C 272.929688 43.117188 273.425781 41.4375 274.421875 40.140625 C 275.414063 38.847656 276.664063 37.824219 278.164063 37.074219 C 279.667969 36.328125 281.292969 35.8125 283.039063 35.527344 C 284.785156 35.246094 286.390625 35.0625 287.851563 34.980469 C 288.339844 34.941406 288.8125 34.921875 289.28125 34.921875 L 290.589844 34.921875 L 290.589844 33.8125 C 290.589844 32.25 290.175781 31.140625 289.34375 30.484375 C 288.507813 29.828125 287.160156 29.5 285.292969 29.5 C 283.546875 29.5 281.992188 29.785156 280.632813 30.351563 C 279.269531 30.921875 277.941406 31.570313 276.644531 32.300781 C 276.074219 31.609375 275.617188 30.851563 275.273438 30.015625 C 274.929688 29.183594 274.753906 28.566406 274.753906 28.160156 C 274.753906 27.589844 275.070313 27.042969 275.699219 26.515625 C 276.328125 25.988281 277.191406 25.511719 278.289063 25.082031 C 279.382813 24.65625 280.644531 24.3125 282.0625 24.046875 C 283.484375 23.785156 284.988281 23.652344 286.570313 23.652344 C 288.765625 23.652344 290.621094 23.875 292.144531 24.320313 C 293.667969 24.769531 294.90625 25.460938 295.859375 26.394531 C 296.8125 27.328125 297.492188 28.496094 297.898438 29.894531 C 298.304688 31.296875 298.507813 32.929688 298.507813 34.796875 Z M 258.980469 27.339844 C 259.222656 26.976563 259.546875 26.574219 259.953125 26.128906 C 260.359375 25.6875 260.855469 25.285156 261.445313 24.921875 C 262.035156 24.558594 262.683594 24.257813 263.394531 24.015625 C 264.105469 23.773438 264.867188 23.652344 265.679688 23.652344 C 266.164063 23.652344 266.683594 23.691406 267.230469 23.773438 C 267.78125 23.855469 268.289063 24.003906 268.753906 24.226563 C 269.222656 24.449219 269.597656 24.75 269.882813 25.132813 C 270.164063 25.515625 270.308594 25.988281 270.308594 26.550781 C 270.308594 27.4375 270.085938 28.453125 269.640625 29.601563 C 269.191406 30.753906 268.742188 31.734375 268.296875 32.542969 C 267.605469 31.976563 266.917969 31.539063 266.226563 31.234375 C 265.535156 30.929688 264.726563 30.777344 263.789063 30.777344 C 262.53125 30.777344 261.476563 31.144531 260.625 31.878906 C 259.769531 32.609375 259.34375 33.484375 259.34375 34.503906 L 259.34375 54.222656 L 251.0625 54.222656 L 251.0625 24.503906 C 251.265625 24.464844 251.507813 24.421875 251.792969 24.382813 C 252.035156 24.34375 252.320313 24.3125 252.644531 24.292969 C 252.96875 24.269531 253.355469 24.261719 253.800781 24.261719 C 255.101563 24.261719 256.230469 24.511719 257.183594 25.015625 C 258.136719 25.519531 258.734375 26.292969 258.980469 27.339844 Z M 235.429688 27.339844 C 235.671875 26.976563 235.996094 26.574219 236.402344 26.128906 C 236.808594 25.6875 237.308594 25.285156 237.894531 24.921875 C 238.484375 24.558594 239.132813 24.257813 239.84375 24.015625 C 240.554688 23.773438 241.316406 23.652344 242.128906 23.652344 C 242.617188 23.652344 243.132813 23.691406 243.683594 23.773438 C 244.230469 23.855469 244.738281 24.003906 245.203125 24.226563 C 245.671875 24.449219 246.046875 24.75 246.332031 25.132813 C 246.613281 25.515625 246.757813 25.988281 246.757813 26.550781 C 246.757813 27.4375 246.535156 28.453125 246.089844 29.601563 C 245.640625 30.753906 245.195313 31.734375 244.746094 32.542969 C 244.058594 31.976563 243.367188 31.539063 242.675781 31.234375 C 241.984375 30.929688 241.175781 30.777344 240.238281 30.777344 C 238.980469 30.777344 237.925781 31.144531 237.074219 31.878906 C 236.222656 32.609375 235.792969 33.484375 235.792969 34.503906 L 235.792969 54.222656 L 227.511719 54.222656 L 227.511719 24.503906 C 227.714844 24.464844 227.957031 24.421875 228.242188 24.382813 C 228.484375 24.34375 228.769531 24.3125 229.09375 24.292969 C 229.417969 24.269531 229.804688 24.261719 230.253906 24.261719 C 231.550781 24.261719 232.679688 24.511719 233.632813 25.015625 C 234.585938 25.519531 235.1875 26.292969 235.429688 27.339844 Z M 213.523438 35.773438 C 213.523438 33.824219 213.144531 32.238281 212.390625 31.023438 C 211.632813 29.804688 210.273438 29.195313 208.316406 29.195313 C 206.640625 29.195313 205.304688 29.773438 204.304688 30.929688 C 203.300781 32.085938 202.804688 33.703125 202.804688 35.773438 Z M 210.746094 48.136719 C 211.765625 48.136719 212.660156 48.027344 213.4375 47.800781 C 214.210938 47.578125 214.902344 47.304688 215.515625 46.980469 C 216.125 46.65625 216.65625 46.300781 217.105469 45.914063 C 217.550781 45.527344 217.960938 45.171875 218.324219 44.847656 C 218.8125 45.457031 219.324219 46.238281 219.855469 47.191406 C 220.382813 48.148438 220.648438 48.929688 220.648438 49.539063 C 220.648438 50.429688 220.140625 51.242188 219.125 51.972656 C 218.273438 52.625 217.0625 53.183594 215.503906 53.648438 C 213.9375 54.117188 212.101563 54.347656 209.988281 54.347656 C 208.078125 54.347656 206.203125 54.105469 204.355469 53.617188 C 202.507813 53.132813 200.863281 52.277344 199.421875 51.058594 C 197.980469 49.84375 196.8125 48.207031 195.921875 46.15625 C 195.027344 44.105469 194.578125 41.519531 194.578125 38.390625 C 194.578125 35.832031 194.976563 33.632813 195.769531 31.78125 C 196.558594 29.9375 197.613281 28.402344 198.9375 27.183594 C 200.253906 25.964844 201.746094 25.074219 203.410156 24.503906 C 205.074219 23.9375 206.78125 23.652344 208.527344 23.652344 C 210.800781 23.652344 212.730469 24.007813 214.3125 24.71875 C 215.898438 25.429688 217.1875 26.382813 218.183594 27.582031 C 219.175781 28.777344 219.894531 30.148438 220.34375 31.691406 C 220.789063 33.234375 221.015625 34.859375 221.015625 36.5625 L 221.015625 37.417969 C 221.015625 37.742188 221.003906 38.085938 220.984375 38.453125 C 220.964844 38.816406 220.941406 39.175781 220.921875 39.519531 C 220.902344 39.863281 220.871094 40.136719 220.832031 40.339844 L 202.863281 40.339844 C 203.027344 42.574219 203.71875 44.429688 204.941406 45.914063 C 206.160156 47.398438 208.097656 48.136719 210.746094 48.136719 Z M 173.628906 48.929688 C 173.34375 48.117188 173.160156 47.265625 173.078125 46.371094 C 172.996094 45.476563 172.957031 44.585938 172.957031 43.691406 L 172.957031 15.429688 C 173.238281 15.390625 173.546875 15.347656 173.871094 15.308594 C 174.152344 15.269531 174.460938 15.238281 174.785156 15.214844 C 175.109375 15.195313 175.433594 15.1875 175.757813 15.1875 C 176.40625 15.1875 177.058594 15.246094 177.707031 15.367188 C 178.355469 15.492188 178.945313 15.734375 179.476563 16.097656 C 180 16.464844 180.429688 16.960938 180.753906 17.589844 C 181.078125 18.222656 181.238281 19.042969 181.238281 20.058594 L 181.238281 24.382813 L 189.769531 24.382813 L 189.769531 30.535156 L 181.238281 30.535156 L 181.238281 43.523438 C 181.238281 46.355469 182.398438 47.769531 184.710938 47.769531 C 185.28125 47.769531 185.816406 47.679688 186.324219 47.496094 C 186.832031 47.3125 187.289063 47.113281 187.695313 46.886719 C 188.101563 46.664063 188.457031 46.429688 188.761719 46.1875 C 189.066406 45.945313 189.28125 45.761719 189.402344 45.640625 C 190.011719 46.535156 190.476563 47.308594 190.804688 47.960938 C 191.128906 48.613281 191.289063 49.226563 191.289063 49.800781 C 191.289063 50.332031 191.078125 50.855469 190.648438 51.367188 C 190.222656 51.878906 189.625 52.351563 188.855469 52.78125 C 188.082031 53.214844 187.148438 53.5625 186.050781 53.828125 C 184.957031 54.09375 183.757813 54.226563 182.457031 54.226563 C 179.941406 54.226563 177.980469 53.742188 176.578125 52.765625 C 175.179688 51.792969 174.195313 50.511719 173.628906 48.929688 Z M 158.585938 38.453125 C 158.585938 37.234375 158.484375 36.097656 158.28125 35.042969 C 158.078125 33.984375 157.746094 33.074219 157.28125 32.300781 C 156.816406 31.53125 156.191406 30.929688 155.40625 30.503906 C 154.617188 30.078125 153.660156 29.863281 152.527344 29.863281 C 150.832031 29.863281 149.652344 30.191406 148.984375 30.839844 C 148.320313 31.488281 147.984375 32.199219 147.984375 32.972656 L 147.984375 45.882813 C 148.308594 46.207031 148.882813 46.59375 149.710938 47.039063 C 150.539063 47.488281 151.496094 47.710938 152.589844 47.710938 C 154.648438 47.710938 156.160156 46.898438 157.132813 45.273438 C 158.101563 43.648438 158.585938 41.375 158.585938 38.453125 Z M 147.621094 27.183594 C 148.269531 26.414063 149.28125 25.632813 150.65625 24.839844 C 152.03125 24.046875 153.773438 23.652344 155.878906 23.652344 C 157.378906 23.652344 158.804688 23.90625 160.160156 24.414063 C 161.515625 24.921875 162.71875 25.742188 163.773438 26.878906 C 164.824219 28.015625 165.664063 29.519531 166.292969 31.386719 C 166.921875 33.253906 167.234375 35.550781 167.234375 38.269531 C 167.234375 41.4375 166.867188 44.046875 166.140625 46.097656 C 165.410156 48.148438 164.472656 49.773438 163.316406 50.96875 C 162.164063 52.167969 160.878906 53.007813 159.460938 53.496094 C 158.046875 53.984375 156.628906 54.226563 155.210938 54.226563 C 154.039063 54.226563 153.015625 54.09375 152.144531 53.832031 C 151.273438 53.566406 150.535156 53.273438 149.929688 52.949219 C 149.320313 52.625 148.855469 52.300781 148.53125 51.972656 C 148.210938 51.648438 148.007813 51.425781 147.925781 51.304688 L 147.925781 66.277344 L 139.644531 66.277344 L 139.644531 24.503906 C 139.847656 24.464844 140.09375 24.421875 140.378906 24.382813 C 140.625 24.34375 140.910156 24.3125 141.238281 24.292969 C 141.566406 24.269531 141.953125 24.261719 142.402344 24.261719 C 143.753906 24.261719 144.898438 24.484375 145.839844 24.929688 C 146.78125 25.378906 147.375 26.128906 147.621094 27.183594 Z M 124.660156 39.183594 L 123.808594 39.183594 C 123.523438 39.183594 123.238281 39.203125 122.953125 39.246094 C 121.9375 39.328125 120.933594 39.449219 119.9375 39.609375 C 118.945313 39.773438 118.0625 40.054688 117.289063 40.460938 C 116.519531 40.867188 115.890625 41.398438 115.402344 42.046875 C 114.914063 42.695313 114.671875 43.527344 114.671875 44.542969 C 114.671875 45.679688 114.996094 46.644531 115.644531 47.4375 C 116.296875 48.226563 117.390625 48.625 118.933594 48.625 C 119.703125 48.625 120.4375 48.523438 121.128906 48.320313 C 121.816406 48.117188 122.425781 47.851563 122.953125 47.527344 C 123.480469 47.203125 123.898438 46.847656 124.203125 46.460938 C 124.507813 46.078125 124.660156 45.722656 124.660156 45.394531 Z M 132.457031 46.25 C 132.457031 49.457031 132.921875 51.792969 133.855469 53.253906 C 133.125 53.535156 132.445313 53.738281 131.816406 53.863281 C 131.1875 53.984375 130.527344 54.042969 129.835938 54.042969 C 128.375 54.042969 127.269531 53.761719 126.519531 53.191406 C 125.765625 52.625 125.289063 51.8125 125.085938 50.753906 C 124.191406 51.691406 123.015625 52.480469 121.554688 53.132813 C 120.09375 53.78125 118.304688 54.105469 116.195313 54.105469 C 115.097656 54.105469 114 53.953125 112.90625 53.652344 C 111.808594 53.347656 110.8125 52.851563 109.921875 52.164063 C 109.027344 51.476563 108.296875 50.554688 107.726563 49.402344 C 107.15625 48.246094 106.875 46.839844 106.875 45.179688 C 106.875 43.117188 107.371094 41.4375 108.367188 40.140625 C 109.363281 38.847656 110.609375 37.824219 112.113281 37.074219 C 113.613281 36.328125 115.238281 35.8125 116.984375 35.527344 C 118.730469 35.246094 120.335938 35.0625 121.796875 34.980469 C 122.285156 34.941406 122.761719 34.921875 123.230469 34.921875 L 124.539063 34.921875 L 124.539063 33.8125 C 124.539063 32.25 124.121094 31.140625 123.289063 30.484375 C 122.457031 29.828125 121.105469 29.5 119.238281 29.5 C 117.492188 29.5 115.9375 29.785156 114.578125 30.351563 C 113.21875 30.921875 111.890625 31.570313 110.589844 32.300781 C 110.019531 31.609375 109.5625 30.851563 109.21875 30.015625 C 108.875 29.183594 108.703125 28.566406 108.703125 28.160156 C 108.703125 27.589844 109.015625 27.042969 109.644531 26.515625 C 110.273438 25.988281 111.140625 25.511719 112.234375 25.082031 C 113.332031 24.65625 114.589844 24.3125 116.011719 24.046875 C 117.433594 23.785156 118.933594 23.652344 120.519531 23.652344 C 122.710938 23.652344 124.570313 23.875 126.09375 24.320313 C 127.613281 24.769531 128.851563 25.460938 129.808594 26.394531 C 130.761719 27.328125 131.441406 28.496094 131.847656 29.894531 C 132.253906 31.296875 132.457031 32.929688 132.457031 34.796875 Z M 101.257813 50.890625 C 101.015625 51.132813 100.609375 51.4375 100.046875 51.800781 C 99.480469 52.164063 98.742188 52.527344 97.835938 52.890625 C 96.925781 53.253906 95.816406 53.566406 94.507813 53.828125 C 93.195313 54.089844 91.691406 54.222656 89.996094 54.222656 C 86.726563 54.222656 83.902344 53.695313 81.519531 52.648438 C 79.136719 51.597656 77.167969 50.132813 75.617188 48.257813 C 74.0625 46.382813 72.921875 44.160156 72.195313 41.597656 C 71.46875 39.035156 71.105469 36.21875 71.105469 33.152344 C 71.105469 30.085938 71.5 27.25 72.285156 24.648438 C 73.074219 22.042969 74.253906 19.792969 75.828125 17.894531 C 77.402344 16 79.371094 14.515625 81.730469 13.445313 C 84.09375 12.378906 86.867188 11.839844 90.054688 11.839844 C 91.628906 11.839844 93.050781 11.984375 94.324219 12.265625 C 95.59375 12.546875 96.707031 12.882813 97.65625 13.265625 C 98.601563 13.648438 99.390625 14.050781 100.015625 14.476563 C 100.640625 14.898438 101.113281 15.253906 101.4375 15.535156 C 101.800781 15.859375 102.113281 16.242188 102.378906 16.683594 C 102.640625 17.128906 102.769531 17.613281 102.769531 18.136719 C 102.769531 18.945313 102.46875 19.753906 101.863281 20.558594 C 101.257813 21.367188 100.589844 22.113281 99.863281 22.800781 C 99.378906 22.316406 98.835938 21.820313 98.230469 21.316406 C 97.625 20.8125 96.949219 20.367188 96.203125 19.984375 C 95.453125 19.601563 94.605469 19.277344 93.65625 19.015625 C 92.710938 18.753906 91.652344 18.621094 90.480469 18.621094 C 88.421875 18.621094 86.695313 19.035156 85.304688 19.863281 C 83.910156 20.691406 82.789063 21.769531 81.945313 23.101563 C 81.09375 24.433594 80.488281 25.957031 80.128906 27.671875 C 79.765625 29.390625 79.582031 31.136719 79.582031 32.910156 C 79.582031 34.808594 79.765625 36.625 80.128906 38.359375 C 80.488281 40.09375 81.113281 41.628906 82.003906 42.960938 C 82.890625 44.292969 84.050781 45.363281 85.484375 46.167969 C 86.917969 46.976563 88.703125 47.378906 90.84375 47.378906 C 91.972656 47.378906 93.011719 47.238281 93.960938 46.957031 C 94.90625 46.675781 95.746094 46.332031 96.472656 45.925781 C 97.199219 45.523438 97.835938 45.101563 98.378906 44.65625 C 98.925781 44.210938 99.378906 43.828125 99.742188 43.503906 C 99.984375 43.789063 100.265625 44.132813 100.589844 44.535156 C 100.914063 44.941406 101.21875 45.367188 101.496094 45.804688 C 101.78125 46.25 102.023438 46.695313 102.226563 47.136719 C 102.425781 47.582031 102.527344 47.984375 102.527344 48.347656 C 102.527344 48.875 102.425781 49.316406 102.226563 49.679688 C 102.023438 50.042969 101.699219 50.449219 101.257813 50.890625 "
									/>
								</g>
							</g>
						</svg>
					</div>

					<div className="flex flex-col items-center sm:scale-[0.7] sm:w-[100px]">
						<h1 className="text-[38px] font-bold leading-[1]">7M</h1>

						<div className="mb-[5px] text-[13px]">Customers</div>

						<p>
							<strong>190</strong> <span className="text-[12px]">reviews</span>
						</p>
					</div>

					<div className="flex flex-col items-center sm:scale-[0.7] sm:w-[100px]">
						<Image alt="product of the month" src={first} width={47} />

						<div className="mb-[5px] text-[13px] text-center leading-[1]">Product of the month</div>

						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 256 59.931"
							className="w-[70px] h-[30px]"
						>
							<defs>
								<clipPath id="A">
									<path d="M0 640h1425V0H0v640z" />
								</clipPath>
							</defs>
							<g
								clipPath="url(#A)"
								transform="matrix(.249714 0 0 -.249714 -49.942762 109.874083)"
							>
								<path
									d="M440 320c0-66.274-53.726-120-120-120s-120 53.726-120 120 53.726 120 120 120 120-53.726 120-120"
									fill="#da552f"
								/>
								<path
									d="M336 320h-34v36h34c9.94 0 18-8.06 18-18s-8.06-18-18-18m0 60h-58V260h24v36h34c23.196 0 42 18.804 42 42s-18.804 42-42 42"
									fill="#fff"
								/>
								<path
									d="M566.068 334.668c0 6.6-5.075 10.606-11.666 10.606h-17.67v-21.092h17.67c6.6 0 11.666 4.006 11.666 10.486M520 280v80h36.753c17.086 0 26.4-11.546 26.4-25.332 0-13.666-9.42-25.212-26.4-25.212H536.73V280H520zm73.323 0v58.324h14.956v-7.66c4.125 4.95 11.08 9.07 18.15 9.07v-14.606c-1.065.235-2.36.35-4.125.35-4.95 0-11.55-2.825-14.026-6.48V280h-14.956zm83.434 29.927c0 8.836-5.2 16.496-14.6 16.496-9.315 0-14.496-7.66-14.496-16.496 0-8.956 5.18-16.6 14.496-16.6 9.42 0 14.6 7.655 14.6 16.6m-44.658 0c0 16.14 11.3 29.807 30.047 29.807 18.85 0 30.162-13.666 30.162-29.807S680.997 280 662.146 280c-18.736 0-30.047 13.786-30.047 29.927m110.556-10.13v20.146c-2.475 3.77-7.895 6.48-12.846 6.48-8.595 0-14.486-6.716-14.486-16.496 0-9.896 5.9-16.6 14.486-16.6 4.95 0 10.37 2.7 12.846 6.48m0-19.796v8.72c-4.48-5.655-10.6-8.72-17.556-8.72-14.256 0-25.212 10.84-25.212 29.927 0 18.496 10.726 29.807 25.212 29.807 6.715 0 13.076-2.826 17.556-8.716V360h15.08v-80h-15.08zm68.373-.01v8.6c-3.885-4.24-10.716-8.6-20.022-8.6-12.5 0-18.38 6.835-18.38 17.9v40.413h14.957V303.8c0-7.895 4.125-10.485 10.485-10.485 5.775 0 10.37 3.18 12.96 6.48v38.528h14.966V280h-14.966zm26.2 29.927c0 17.436 12.72 29.807 30.162 29.807 11.666 0 18.736-5.065 22.506-10.25l-9.785-9.185c-2.706 4.005-6.83 6.125-12 6.125-9.076 0-15.436-6.6-15.436-16.496s6.36-16.6 15.436-16.6c5.18 0 9.305 2.355 12 6.245l9.785-9.2c-3.77-5.186-10.84-10.37-22.506-10.37-17.44 0-30.162 12.37-30.162 29.927m65.532-14.26v29.572h-9.42v13.08h9.42v15.55h14.966v-15.55h11.54v-13.08h-11.54v-25.567c0-3.65 1.88-6.36 5.18-6.36 2.236 0 4.365.825 5.18 1.765l3.185-11.426c-2.235-2.005-6.246-3.655-12.5-3.655-10.486 0-16.02 5.42-16.02 15.67M1025.1 280v34.522h-37.117V280H971.27v80h16.722v-30.867h37.117V360h16.846v-80H1025.1zm70.398 0v8.6c-3.885-4.24-10.716-8.6-20.022-8.6-12.5 0-18.38 6.835-18.38 17.9v40.413h14.956V303.8c0-7.895 4.126-10.485 10.486-10.485 5.775 0 10.37 3.18 12.96 6.48v38.528h14.966V280h-14.966zm68.248 0v35.817c0 7.896-4.116 10.606-10.486 10.606-5.9 0-10.36-3.3-12.96-6.6V280h-14.957v58.324h14.957v-7.306c3.655 4.24 10.725 8.716 19.916 8.716 12.605 0 18.6-7.066 18.6-18.14V280h-15.08zm32.916 15.67v29.572h-9.42v13.08h9.42v15.55h14.966v-15.55h11.54v-13.08h-11.54v-25.567c0-3.65 1.88-6.36 5.18-6.36 2.236 0 4.365.825 5.2 1.765l3.176-11.426c-2.236-2.005-6.246-3.655-12.5-3.655-10.486 0-16.02 5.42-16.02 15.67"
									fill="#da552f"
								/>
							</g>
						</svg>
					</div>

					<div className="flex flex-col items-center sm:scale-[0.7] sm:w-[100px]">
						<h1 className="text-[38px] font-bold leading-[1]">5.0</h1>

						<div className="flex items-center mb-[5px] text-[14px]">
							&#9733;&#9733;&#9733;&#9733;&#9733;
						</div>

						<p className="text-[13px]">
							<span className="text-[#0cc35c] text-[18px]">&#9733;</span>{" "}
							Trustpilot
						</p>
					</div>

					<div className="flex flex-col items-center sm:scale-[0.7] sm:w-[100px]">
						<h1 className="text-[38px] font-bold leading-[1]">4.9</h1>

						<div className="flex items-center mb-[5px] text-[14px]">
							&#9733;&#9733;&#9733;&#9733;&#9733;
						</div>

						<svg
							width="32px"
							height="32px"
							viewBox="0 0 32 32"
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
							xmlnsXlink="http://www.w3.org/1999/xlink"
							className="h-[30px] w-[22px]"
						>
							<defs></defs>
							<g
								id="Page-1"
								stroke="none"
								strokeWidth="1"
								fill="none"
								fillRule="evenodd"
							>
								<g id="icon-46-two-fingers-tap" fill="#da552f">
									<path
										d="M10.5,13 C8.01471863,13 6,15.0124342 6,17.495728 L6,31 L15,31 L15,17.495728 C15,15.012806 12.9802243,13 10.5,13 L10.5,13 Z M10.5,15 C9.11928813,15 8,16.1285541 8,17.5097752 L8,21 L13,21 L13,17.5097752 C13,16.1236646 11.8903379,15 10.5,15 L10.5,15 Z M8,24 L8,25 L13,25 L13,24 L8,24 L8,24 Z M8,26 L8,27 L13,27 L13,26 L8,26 L8,26 Z M21.5,10 C19.0147186,10 17,12.0135683 17,14.5050269 L17,31 L26,31 L26,14.5050269 C26,12.0169692 23.9802243,10 21.5,10 L21.5,10 Z M21.5,12 C20.1192881,12 19,13.1285541 19,14.5097752 L19,18 L24,18 L24,14.5097752 C24,13.1236646 22.8903379,12 21.5,12 L21.5,12 Z M19,21 L19,22 L24,22 L24,21 L19,21 L19,21 Z M19,23 L19,24 L24,24 L24,23 L19,23 L19,23 Z M27,19.5990687 C28.2411746,18.2609299 29,16.4690816 29,14.5 C29,10.3578642 25.6421358,7 21.5,7 C18.5038456,7 15.9180334,8.75688301 14.7165644,11.2966481 C13.5150138,10.4783403 12.0633681,10 10.5,10 C6.35786417,10 3,13.3578642 3,17.5 C3,19.4690816 3.75882544,21.2609299 5,22.5990687 L5,23.9809678 C3.16459055,22.4218311 2,20.096918 2,17.5 C2,12.8055794 5.80557939,9 10.5,9 C11.8822699,9 13.1874768,9.32994571 14.3411595,9.91537595 C15.8524545,7.56039313 18.4940025,6 21.5,6 C26.1944206,6 30,9.80557939 30,14.5 C30,17.096918 28.8354094,19.4218311 27,20.9809678 L27,19.5990687 L27,19.5990687 L27,19.5990687 Z"
										id="two-fingers-tap"
									></path>
								</g>
							</g>
						</svg>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ChooseUs;
