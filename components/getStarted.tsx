import React from "react";
import Button from "./button";

function GetStarted() {
	return (
		<div className="px-[40px]">
			<div className="max-w-[1200px] mx-auto flex items-center justify-between py-[100px] sm:flex-col sm:gap-[30px] sm:items-start sm:min-w-[300px] sm:w-[80%]">
				<div className="flex-[2] pr-[200px] sm:pr-0">
					<h1 className="font-bold text-[42px] sm:text-[32px]">
						Streamline Operation with Cutting-Edge SaaS Solutions
					</h1>
				</div>

				<div className="flex-1">
					<p className="text-[darkgray] text-[14px] leading-[1.4] mb-[35px] sm:mb-[28px]">
						Unlocking your business potential with intuitive and Processes with
						Powerful SaaS tools.
					</p>

					<Button
						text="Get Started Now"
						icon={
							<svg
								version="1.1"
								id="Capa_1"
								width="15"
								height="15"
								fill="white"
								xmlns="http://www.w3.org/2000/svg"
								xmlnsXlink="http://www.w3.org/1999/xlink"
								x="0px"
								y="0px"
								viewBox="0 0 191.255 191.255"
								enableBackground="new 0 0 191.255 191.255"
								xmlSpace="preserve"
							>
								<path
									d="M162.929,66.612c-2.814-1.754-6.514-0.896-8.267,1.917s-0.895,6.513,1.917,8.266c6.544,4.081,10.45,11.121,10.45,18.833
	s-3.906,14.752-10.45,18.833l-98.417,61.365c-6.943,4.329-15.359,4.542-22.512,0.573c-7.154-3.97-11.425-11.225-11.425-19.406
	V34.262c0-8.181,4.271-15.436,11.425-19.406c7.153-3.969,15.569-3.756,22.512,0.573l57.292,35.723
	c2.813,1.752,6.513,0.895,8.267-1.917c1.753-2.812,0.895-6.513-1.917-8.266L64.512,5.247c-10.696-6.669-23.661-7-34.685-0.883
	C18.806,10.48,12.226,21.657,12.226,34.262v122.73c0,12.605,6.58,23.782,17.602,29.898c5.25,2.913,10.939,4.364,16.616,4.364
	c6.241,0,12.467-1.754,18.068-5.247l98.417-61.365c10.082-6.287,16.101-17.133,16.101-29.015S173.011,72.899,162.929,66.612z"
								/>
								<g></g>
								<g></g>
								<g></g>
								<g></g>
								<g></g>
								<g></g>
								<g></g>
								<g></g>
								<g></g>
								<g></g>
								<g></g>
								<g></g>
								<g></g>
								<g></g>
								<g></g>
							</svg>
						}
					/>
				</div>
			</div>
		</div>
	);
}

export default GetStarted;
