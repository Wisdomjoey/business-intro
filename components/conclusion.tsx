import Image from "next/image";
import first from "../assets/1-number-14136.png";
import img from "../assets/jason-goodman-vbxyFxlgpjM-unsplash.jpg";

function Conclusion() {
	return (
		<div>
			<div className="max-w-[1200px] px-[30px] mx-auto">
				<div className="relative w-[500px] -mb-[200px] sm:w-[300px] sm:-mb-[100px]">
					<Image alt="video" src={img} className="w-full object-contain" />

					<div className="absolute flex items-center gap-[10px] bottom-[15%] -right-[32%] xs:right-0">
						<span className="underline text-[35px] sm:text-[28px] text-white">Play Now</span>

						<div className="w-[48px] h-[48px] sm:w-[40px] sm:h-[40px] rounded-[50%] bg-white flex items-center justify-center">
							<svg
								viewBox="0 0 48 48"
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
							>
								<path d="M-838-2232H562v3600H-838z" fill="none" />
								<path d="M16 10v28l22-14z" />
								<path d="M0 0h48v48H0z" fill="none" />
							</svg>
						</div>
					</div>
				</div>
			</div>

			<div className="bg-blue-700 pb-[100px] pt-[250px] px-[40px]">
				<div className="max-w-[1200px] mx-auto flex items-center gap-[100px] flex-wrap sm:gap-[50px]">
					<div className="flex-[2] min-w-[300px]">
						<h1 className="text-white text-[40px] sm:text-[35px]">
							We solve people&apos;s problems and make them happy.
						</h1>
					</div>

					<div className="flex-[1] min-w-[300px]">
						<div className="flex gap-[40px] mb-[30px]">
							<div className="flex flex-col items-center">
								<Image
									alt="product of the month"
									src={first}
									width={38}
									className="invert"
								/>

								<div className="mb-[5px] text-[11px] text-white">
									Product of the month
								</div>

								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 256 59.931"
									className="w-[60px] h-[20px]"
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
											fill="#fff"
										/>
										<path
											d="M336 320h-34v36h34c9.94 0 18-8.06 18-18s-8.06-18-18-18m0 60h-58V260h24v36h34c23.196 0 42 18.804 42 42s-18.804 42-42 42"
											className="fill-blue-700"
										/>
										<path
											d="M566.068 334.668c0 6.6-5.075 10.606-11.666 10.606h-17.67v-21.092h17.67c6.6 0 11.666 4.006 11.666 10.486M520 280v80h36.753c17.086 0 26.4-11.546 26.4-25.332 0-13.666-9.42-25.212-26.4-25.212H536.73V280H520zm73.323 0v58.324h14.956v-7.66c4.125 4.95 11.08 9.07 18.15 9.07v-14.606c-1.065.235-2.36.35-4.125.35-4.95 0-11.55-2.825-14.026-6.48V280h-14.956zm83.434 29.927c0 8.836-5.2 16.496-14.6 16.496-9.315 0-14.496-7.66-14.496-16.496 0-8.956 5.18-16.6 14.496-16.6 9.42 0 14.6 7.655 14.6 16.6m-44.658 0c0 16.14 11.3 29.807 30.047 29.807 18.85 0 30.162-13.666 30.162-29.807S680.997 280 662.146 280c-18.736 0-30.047 13.786-30.047 29.927m110.556-10.13v20.146c-2.475 3.77-7.895 6.48-12.846 6.48-8.595 0-14.486-6.716-14.486-16.496 0-9.896 5.9-16.6 14.486-16.6 4.95 0 10.37 2.7 12.846 6.48m0-19.796v8.72c-4.48-5.655-10.6-8.72-17.556-8.72-14.256 0-25.212 10.84-25.212 29.927 0 18.496 10.726 29.807 25.212 29.807 6.715 0 13.076-2.826 17.556-8.716V360h15.08v-80h-15.08zm68.373-.01v8.6c-3.885-4.24-10.716-8.6-20.022-8.6-12.5 0-18.38 6.835-18.38 17.9v40.413h14.957V303.8c0-7.895 4.125-10.485 10.485-10.485 5.775 0 10.37 3.18 12.96 6.48v38.528h14.966V280h-14.966zm26.2 29.927c0 17.436 12.72 29.807 30.162 29.807 11.666 0 18.736-5.065 22.506-10.25l-9.785-9.185c-2.706 4.005-6.83 6.125-12 6.125-9.076 0-15.436-6.6-15.436-16.496s6.36-16.6 15.436-16.6c5.18 0 9.305 2.355 12 6.245l9.785-9.2c-3.77-5.186-10.84-10.37-22.506-10.37-17.44 0-30.162 12.37-30.162 29.927m65.532-14.26v29.572h-9.42v13.08h9.42v15.55h14.966v-15.55h11.54v-13.08h-11.54v-25.567c0-3.65 1.88-6.36 5.18-6.36 2.236 0 4.365.825 5.18 1.765l3.185-11.426c-2.235-2.005-6.246-3.655-12.5-3.655-10.486 0-16.02 5.42-16.02 15.67M1025.1 280v34.522h-37.117V280H971.27v80h16.722v-30.867h37.117V360h16.846v-80H1025.1zm70.398 0v8.6c-3.885-4.24-10.716-8.6-20.022-8.6-12.5 0-18.38 6.835-18.38 17.9v40.413h14.956V303.8c0-7.895 4.126-10.485 10.486-10.485 5.775 0 10.37 3.18 12.96 6.48v38.528h14.966V280h-14.966zm68.248 0v35.817c0 7.896-4.116 10.606-10.486 10.606-5.9 0-10.36-3.3-12.96-6.6V280h-14.957v58.324h14.957v-7.306c3.655 4.24 10.725 8.716 19.916 8.716 12.605 0 18.6-7.066 18.6-18.14V280h-15.08zm32.916 15.67v29.572h-9.42v13.08h9.42v15.55h14.966v-15.55h11.54v-13.08h-11.54v-25.567c0-3.65 1.88-6.36 5.18-6.36 2.236 0 4.365.825 5.2 1.765l3.176-11.426c-2.236-2.005-6.246-3.655-12.5-3.655-10.486 0-16.02 5.42-16.02 15.67"
											fill="#fff"
										/>
									</g>
								</svg>
							</div>

							<div className="flex flex-col items-center">
								<h1 className="text-[30px] font-bold leading-[1] text-white">
									5.0
								</h1>

								<div className="flex items-center mb-[5px] text-[11px] text-white">
									&#9733;&#9733;&#9733;&#9733;&#9733;
								</div>

								<p className="text-[11px] text-white">
									<span className="text-[14px]">&#9733;</span> Trustpilot
								</p>
							</div>

							<div className="flex flex-col items-center">
								<h1 className="text-[30px] text-white font-bold leading-[1]">
									4.9
								</h1>

								<div className="flex items-center mb-[5px] text-[11px] text-white">
									&#9733;&#9733;&#9733;&#9733;&#9733;
								</div>

								<svg
									width="18px"
									height="18px"
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
										<g id="icon-46-two-fingers-tap" fill="#fff">
											<path
												d="M10.5,13 C8.01471863,13 6,15.0124342 6,17.495728 L6,31 L15,31 L15,17.495728 C15,15.012806 12.9802243,13 10.5,13 L10.5,13 Z M10.5,15 C9.11928813,15 8,16.1285541 8,17.5097752 L8,21 L13,21 L13,17.5097752 C13,16.1236646 11.8903379,15 10.5,15 L10.5,15 Z M8,24 L8,25 L13,25 L13,24 L8,24 L8,24 Z M8,26 L8,27 L13,27 L13,26 L8,26 L8,26 Z M21.5,10 C19.0147186,10 17,12.0135683 17,14.5050269 L17,31 L26,31 L26,14.5050269 C26,12.0169692 23.9802243,10 21.5,10 L21.5,10 Z M21.5,12 C20.1192881,12 19,13.1285541 19,14.5097752 L19,18 L24,18 L24,14.5097752 C24,13.1236646 22.8903379,12 21.5,12 L21.5,12 Z M19,21 L19,22 L24,22 L24,21 L19,21 L19,21 Z M19,23 L19,24 L24,24 L24,23 L19,23 L19,23 Z M27,19.5990687 C28.2411746,18.2609299 29,16.4690816 29,14.5 C29,10.3578642 25.6421358,7 21.5,7 C18.5038456,7 15.9180334,8.75688301 14.7165644,11.2966481 C13.5150138,10.4783403 12.0633681,10 10.5,10 C6.35786417,10 3,13.3578642 3,17.5 C3,19.4690816 3.75882544,21.2609299 5,22.5990687 L5,23.9809678 C3.16459055,22.4218311 2,20.096918 2,17.5 C2,12.8055794 5.80557939,9 10.5,9 C11.8822699,9 13.1874768,9.32994571 14.3411595,9.91537595 C15.8524545,7.56039313 18.4940025,6 21.5,6 C26.1944206,6 30,9.80557939 30,14.5 C30,17.096918 28.8354094,19.4218311 27,20.9809678 L27,19.5990687 L27,19.5990687 L27,19.5990687 Z"
												id="two-fingers-tap"
											></path>
										</g>
									</g>
								</svg>
							</div>
						</div>

						<p className="text-white/60 text-[12px]">
							As a full-service design agency, we work closely with our clients.
							Good people making great things. We help people to reshapr thier
							business
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Conclusion;
