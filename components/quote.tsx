"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import pic1 from "../assets/pic1.png";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpeg";
import pic4 from "../assets/pic4.jpeg";

function Quote() {
	const [active, setActive] = useState(0);
	const containerRef = useRef<HTMLDivElement>(null);
	const timeouts = useRef<NodeJS.Timeout[]>([]);

	const clear = () => timeouts.current.forEach((val) => clearTimeout(val));

	const moveNext = (index: number) => {
		clear();
		setActive(index);

		timeouts.current.push(
			setTimeout(() => {
				containerRef.current!.style.transform = `translateX(-${index * 100}%)`;
			}, 5)
		);

		timeouts.current.push(
			setTimeout(() => (index >= 3 ? moveNext(0) : moveNext(index + 1)), 5500)
		);
	};

	useEffect(() => {
		moveNext(0);

		return () => clear();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="bg-blue-700 py-[100px] relative">
			<div className="flex flex-col items-center justify-center w-[60%] mx-auto overflow-hidden sm:w-full sm:px-[40px]">
				<svg
					width="50"
					height="50"
					viewBox="0 0 128 128"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					style={{
						WebkitMaskImage:
							"linear-gradient(180deg, black, #000000bd, transparent)",
					}}
				>
					<path
						d="M30.3544 113.056C45.6409 113.056 58.0331 100.663 58.0331 85.3769C58.0331 70.0904 45.6409 57.6982 30.3544 57.6982C15.0679 57.6982 2.67578 70.0904 2.67578 85.3769C2.67578 100.663 15.0679 113.056 30.3544 113.056Z"
						fill="white"
					/>
					<path
						d="M50.9849 15.1129C40.5604 17.3715 30.9113 22.3264 23.0018 29.4825C15.0923 36.6386 9.19941 45.7453 5.91211 55.8924C12.7739 50.1765 21.4239 47.0496 30.3545 47.0565C31.8916 47.0573 33.4273 47.1497 34.9534 47.3333C39.1335 38.9515 46.2988 32.4373 55.0397 29.0721C56.442 28.5538 57.6535 27.6211 58.5133 26.398C59.3732 25.1749 59.8406 23.7192 59.8537 22.2242V22.2241C59.8509 21.1338 59.604 20.0579 59.131 19.0755C58.658 18.0932 57.9709 17.2292 57.1203 16.5471C56.2696 15.8651 55.277 15.3822 54.2153 15.134C53.1536 14.8858 52.0497 14.8786 50.9849 15.1129V15.1129Z"
						fill="white"
					/>
					<path
						d="M95.8251 113.056C111.112 113.056 123.504 100.663 123.504 85.3769C123.504 70.0904 111.112 57.6982 95.8251 57.6982C80.5386 57.6982 68.1465 70.0904 68.1465 85.3769C68.1465 100.663 80.5386 113.056 95.8251 113.056Z"
						fill="white"
					/>
					<path
						d="M116.456 15.1129C106.031 17.3715 96.382 22.3264 88.4725 29.4825C80.563 36.6386 74.6701 45.7453 71.3828 55.8924C78.2446 50.1765 86.8946 47.0496 95.8252 47.0565C97.3623 47.0573 98.898 47.1497 100.424 47.3333C104.604 38.9515 111.769 32.4373 120.51 29.0721C121.913 28.5538 123.124 27.6211 123.984 26.398C124.844 25.1749 125.311 23.7192 125.324 22.2242V22.2241C125.322 21.1338 125.075 20.0579 124.602 19.0755C124.129 18.0932 123.442 17.2292 122.591 16.5471C121.74 15.8651 120.748 15.3822 119.686 15.134C118.624 14.8858 117.52 14.8786 116.456 15.1129V15.1129Z"
						fill="white"
					/>
				</svg>

				<div className="mb-[30px] overflow-hidden w-full">
					<div
						ref={containerRef}
						className="flex items-center transition-all duration-500 w-full"
					>
						{[
							{ name: "Kenn Callagher", role: "UI Designer" },
							{ name: "Jay Z", role: "Web Developer" },
							{ name: "John Daniel", role: "Mobile Developer" },
							{ name: "Iris Jacob", role: "Content Creator" },
						].map((val, ind) => (
							<div key={ind} className="min-w-full">
								<p className="text-white text-[25px] sm:text-[18px] text-center leading-[1.3] mt-[10px]">
									After using Affirm my business skyrocketed! I am so pleased
									with this product. Affirm is the most valuable business
									resource we have ever purchased
								</p>

								<div className="text-white leading-[1.2] text-center mt-[30px]">
									<p className="text-[13px]">{val.name}</p>
									<span className="text-[10px]">{val.role}</span>
								</div>
							</div>
						))}
					</div>
				</div>

				<div className="flex items-center gap-[15px]">
					{["", "", "", ""].map((val, ind) => (
						<span
							key={ind}
							className={`w-[7px] h-[7px] rounded-[50%] ${
								active === ind ? "bg-white" : "bg-white/30"
							} cursor-pointer`}
						></span>
					))}
				</div>
			</div>

			<Image
				alt="picture"
				src={pic1}
				className="absolute sm:scale-[0.8] top-[6%] left-[5%] w-[60px] h-[60px] object-cover rounded-[50%] border-[2px] border-white"
			/>
			<Image
				alt="picture"
				src={pic2}
				className="absolute sm:scale-[0.8] bottom-[15%] left-[6%] w-[80px] h-[80px] object-cover rounded-[50%] border-[2px] border-white"
			/>
			<Image
				alt="picture"
				src={pic3}
				className="absolute sm:scale-[0.8] top-[10%] right-[3%] w-[100px] h-[100px] object-cover rounded-[50%] border-[2px] border-white"
			/>
			<Image
				alt="picture"
				src={pic4}
				className="absolute sm:scale-[0.8] bottom-[17%] right-[11%] w-[70px] h-[70px] object-cover rounded-[50%] border-[2px] border-white"
			/>
			<div>
				<div></div>
			</div>
		</div>
	);
}

export default Quote;
