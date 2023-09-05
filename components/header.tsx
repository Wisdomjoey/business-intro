import React from "react";
import Button from "./button";

function Header() {
	return (
		<header className="h-[70px] bg-[white] shadow-md px-[40px]">
			<nav className="max-w-[1200px] flex items-center justify-between h-full mx-auto">
				<ul className="flex items-center gap-[20px] sm:hidden">
					{["Home", "All Solutions", "About Us", "Contact Us"].map(
						(val, ind) => (
							<li key={ind} className="text-[14px] cursor-pointer">
								{val}
							</li>
						)
					)}
				</ul>

				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 50 50"
					width="30px"
					height="30px"
					className="hidden sm:block cursor-pointer"
				>
					<path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z" />
				</svg>

				<div className="flex items-center gap-[5px]">
					<Button text="Sign Up" bg="bg-[white]" />

					<Button text="Log In" />
				</div>
			</nav>
		</header>
	);
}

export default Header;
