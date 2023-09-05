"use client";

import Image from "next/image";
import pic1 from "../assets/vicky-hladynets-C8Ta0gwPbQg-unsplash.jpg";
import pic2 from "../assets/valentin-salja-0aX51h4WvAk-unsplash.jpg";
import { useRef, useState } from "react";

function Faq() {
	const consRef = useRef<HTMLDivElement[]>([]);
	const [open, setOpen] = useState<number[]>([]);

	const toggleOpen = (index: number, open: number[]) => {
		if (open.includes(index)) {
			setOpen((prev) => prev.filter((val) => val !== index));

			consRef.current[index].classList.replace("h-[130px]", "h-[45px]");
		} else {
			setOpen((prev) => [...prev, index]);

			consRef.current[index].classList.replace("h-[45px]", "h-[130px]");
		}
	};

	return (
		<div className="py-[100px] bg-[#ededed] px-[40px] xs:px-0">
			<div className="max-w-[1200px] mx-auto">
				<div className="flex items-center gap-[50px] mb-[100px] sm:flex-col-reverse">
					<div className="flex-1 xs:px-[40px]">
						<svg
							width="50"
							height="50"
							viewBox="0 0 128 128"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="fill-blue-700"
						>
							<path d="M30.3544 113.056C45.6409 113.056 58.0331 100.663 58.0331 85.3769C58.0331 70.0904 45.6409 57.6982 30.3544 57.6982C15.0679 57.6982 2.67578 70.0904 2.67578 85.3769C2.67578 100.663 15.0679 113.056 30.3544 113.056Z" />
							<path d="M50.9849 15.1129C40.5604 17.3715 30.9113 22.3264 23.0018 29.4825C15.0923 36.6386 9.19941 45.7453 5.91211 55.8924C12.7739 50.1765 21.4239 47.0496 30.3545 47.0565C31.8916 47.0573 33.4273 47.1497 34.9534 47.3333C39.1335 38.9515 46.2988 32.4373 55.0397 29.0721C56.442 28.5538 57.6535 27.6211 58.5133 26.398C59.3732 25.1749 59.8406 23.7192 59.8537 22.2242V22.2241C59.8509 21.1338 59.604 20.0579 59.131 19.0755C58.658 18.0932 57.9709 17.2292 57.1203 16.5471C56.2696 15.8651 55.277 15.3822 54.2153 15.134C53.1536 14.8858 52.0497 14.8786 50.9849 15.1129V15.1129Z" />
							<path d="M95.8251 113.056C111.112 113.056 123.504 100.663 123.504 85.3769C123.504 70.0904 111.112 57.6982 95.8251 57.6982C80.5386 57.6982 68.1465 70.0904 68.1465 85.3769C68.1465 100.663 80.5386 113.056 95.8251 113.056Z" />
							<path d="M116.456 15.1129C106.031 17.3715 96.382 22.3264 88.4725 29.4825C80.563 36.6386 74.6701 45.7453 71.3828 55.8924C78.2446 50.1765 86.8946 47.0496 95.8252 47.0565C97.3623 47.0573 98.898 47.1497 100.424 47.3333C104.604 38.9515 111.769 32.4373 120.51 29.0721C121.913 28.5538 123.124 27.6211 123.984 26.398C124.844 25.1749 125.311 23.7192 125.324 22.2242V22.2241C125.322 21.1338 125.075 20.0579 124.602 19.0755C124.129 18.0932 123.442 17.2292 122.591 16.5471C121.74 15.8651 120.748 15.3822 119.686 15.134C118.624 14.8858 117.52 14.8786 116.456 15.1129V15.1129Z" />
						</svg>

						<q className="text-[22px] mt-[10px] mb-[30px] pb-[30px] border-b border-[lightgray] block">
							My experience with this platform so far has been great. Everything
							is easy, from creating visualization, scheduling, collaboration
							and many more
						</q>

						<div className="flex items-center gap-[15px]">
							<div className="w-[45px] h-[45px] rounded-[5px] flex items-center justify-center bg-[#4dff4d]">
								<svg
									width="28"
									height="28"
									viewBox="0 0 128 128"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M30.3544 113.056C45.6409 113.056 58.0331 100.663 58.0331 85.3769C58.0331 70.0904 45.6409 57.6982 30.3544 57.6982C15.0679 57.6982 2.67578 70.0904 2.67578 85.3769C2.67578 100.663 15.0679 113.056 30.3544 113.056Z" />
									<path d="M50.9849 15.1129C40.5604 17.3715 30.9113 22.3264 23.0018 29.4825C15.0923 36.6386 9.19941 45.7453 5.91211 55.8924C12.7739 50.1765 21.4239 47.0496 30.3545 47.0565C31.8916 47.0573 33.4273 47.1497 34.9534 47.3333C39.1335 38.9515 46.2988 32.4373 55.0397 29.0721C56.442 28.5538 57.6535 27.6211 58.5133 26.398C59.3732 25.1749 59.8406 23.7192 59.8537 22.2242V22.2241C59.8509 21.1338 59.604 20.0579 59.131 19.0755C58.658 18.0932 57.9709 17.2292 57.1203 16.5471C56.2696 15.8651 55.277 15.3822 54.2153 15.134C53.1536 14.8858 52.0497 14.8786 50.9849 15.1129V15.1129Z" />
									<path d="M95.8251 113.056C111.112 113.056 123.504 100.663 123.504 85.3769C123.504 70.0904 111.112 57.6982 95.8251 57.6982C80.5386 57.6982 68.1465 70.0904 68.1465 85.3769C68.1465 100.663 80.5386 113.056 95.8251 113.056Z" />
									<path d="M116.456 15.1129C106.031 17.3715 96.382 22.3264 88.4725 29.4825C80.563 36.6386 74.6701 45.7453 71.3828 55.8924C78.2446 50.1765 86.8946 47.0496 95.8252 47.0565C97.3623 47.0573 98.898 47.1497 100.424 47.3333C104.604 38.9515 111.769 32.4373 120.51 29.0721C121.913 28.5538 123.124 27.6211 123.984 26.398C124.844 25.1749 125.311 23.7192 125.324 22.2242V22.2241C125.322 21.1338 125.075 20.0579 124.602 19.0755C124.129 18.0932 123.442 17.2292 122.591 16.5471C121.74 15.8651 120.748 15.3822 119.686 15.134C118.624 14.8858 117.52 14.8786 116.456 15.1129V15.1129Z" />
								</svg>
							</div>

							<div className="leading-[1.3]">
								<h2 className="text-[18px]">Dorth lemone</h2>
								<p className="text-[12px] text-[dimgray]">Senior manager</p>
							</div>
						</div>
					</div>

					<div className="flex-1 flex w-full xs:pl-[40px] justify-center">
						<div className="h-[400px] rounded-[10px] overflow-hidden flex-1 relative flex justify-center max-w-[430px] xs:h-[300px]">
							<Image alt="" src={pic1} className="w-full h-full object-cover" />
						</div>

						<div className="relative -mt-[40px] -ml-[40px] z-10">
							<div className="w-[60px] h-[60px] rounded-[50%] p-[2px] bg-[linear-gradient(45deg,black_50%,transparent_50%)] absolute -z-[1] -left-[15px]">
								<div className="wfull h-full bg-[#ededed] rounded-[50%]"></div>
							</div>

							<div className="w-[100px] h-[100px] rounded-[50%] p-[2px] bg-[linear-gradient(45deg,black_50%,transparent_50%)] mt-[25px]">
								<div className="wfull h-full bg-[#ededed] rounded-[50%]"></div>
							</div>
						</div>
					</div>
				</div>

				<div className="flex items-center gap-[50px] sm:flex-col">
					<div className="flex-1 flex w-full xs:pr-[40px] justify-center">
						<div className="relative -mt-[40px] -mr-[55px] z-10">
							<div className="w-[60px] h-[60px] rounded-[50%] p-[2px] absolute top-[80px] bg-[linear-gradient(-45deg,black_50%,transparent_50%)] -z-[1]">
								<div className="wfull h-full bg-[#ededed] rounded-[50%]"></div>
							</div>

							<div className="w-[100px] h-[100px] rounded-[50%] p-[2px] bg-[linear-gradient(-45deg,black_50%,transparent_50%)]">
								<div className="wfull h-full bg-[#ededed] rounded-[50%]"></div>
							</div>
						</div>

						<div className="h-[400px] rounded-[10px] overflow-hidden flex-1 relative flex justify-center max-w-[430px] xs:h-[300px]">
							<Image alt="" src={pic2} className="w-full h-full object-cover" />
						</div>
					</div>

					<div className="flex-1 xs:px-[40px]">
						<h1 className="text-[33px] sm:text-[28px] font-bold">
							Our most frequently asked questions
						</h1>

						<div className="mt-[30px]">
							{[
								"Whate is the benefit of digital marketing?",
								"What is social media promotion?",
								"How to join your referral program",
							].map((val, ind) => (
								<div
									key={ind}
									ref={(ref) => (consRef.current[ind] = ref!)}
									className="overflow-hidden h-[45px] rounded-[5px] border border-[lightgray] mb-[10px] transition-all duration-500"
								>
									<div className="font-bold px-[10px] h-[45px] flex items-center justify-between">
										<p className="sm:text-[14px] sm:leading-[1]">
											<span className="text-[orange]">{ind + 1}.</span> {val}
										</p>

										<div
											onClick={() => toggleOpen(ind, open)}
											className={`${open.includes(ind) ? "rotate-180" : "rotate-0"} cursor-pointer`}
										>
											<svg
												enableBackground="new 0 0 24 24"
												id="Layer_1"
												version="1.0"
												viewBox="0 0 24 24"
												xmlSpace="preserve"
												xmlns="http://www.w3.org/2000/svg"
												xmlnsXlink="http://www.w3.org/1999/xlink"
												width="17"
												height="17"
											>
												<polyline
													fill="none"
													points="21,8.5 12,17.5 3,8.5 "
													stroke="#000000"
													strokeMiterlimit="10"
													strokeWidth="2"
												/>
											</svg>
										</div>
									</div>

									<div className="text-[14px] text-[dimgray] leading-[1.5] max-h-fit px-[10px]">
										Lorem ipsum dolor sit amet, consectetur adipisicing elit.
										Voluptas quaerat sint expedita eaque explicabo veniam nobis
										aperiam, sit accusantium laudantium tempore. Vitae nobis
										beatae quasi impedit corrupti suscipit doloribus minima!
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Faq;
