import React from "react";
import Button from "./button";

function GetStarted() {
	return (
		<div className="max-w-[1200px] mx-auto flex items-center justify-between py-[100px]">
			<div className="flex-[2] pr-[200px]">
				<h1 className="font-bold text-[42px]">
					Streamline Operation with Cutting-Edge SaaS Solutions
				</h1>
			</div>

			<div className="flex-1">
				<p className="text-[darkgray] text-[14px] leading-[1.4] mb-[35px]">
					Unlocking your business potential with intuitive and Processes with
					Powerful SaaS tools.
				</p>

        <Button text="Get Started Now" />
			</div>
		</div>
	);
}

export default GetStarted;
