import React from "react";

function Button({
	text,
	icon,
	bg,
}: {
	text: string;
	icon?: React.ReactNode;
	bg?: string;
}) {
	return (
		<button
			className={`text-[14px] ${
				bg ? "text-[black]" : "text-[white]"
			} px-[20px] py-[10px] flex items-center gap-[10px] shadow-[0px_0px_7px_0px_rgba(0,0,0,0.2)] cursor-pointer rounded-[30px] outline-none border-none ${
				bg ?? "bg-blue-700"
			}`}
		>
			{icon}

			{text}
		</button>
	);
}

export default Button;
