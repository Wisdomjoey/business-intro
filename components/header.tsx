import React from "react";
import Button from "./button";

function Header() {
	return (
		<header className="h-[70px] bg-[white] shadow-md">
			<nav className="max-w-[1200px] flex items-center justify-between h-full mx-auto">
				<ul className="flex items-center gap-[20px]">
					{["Home", "All Solutions", "About Us", "Contact Us"].map(
						(val, ind) => (
							<li key={ind} className="text-[14px] cursor-pointer">
								{val}
							</li>
						)
					)}
				</ul>

				<div className="flex items-center gap-[5px]">
					<Button text="Sign Up" bg="bg-[white]" />

					<Button text="Log In" />
				</div>
			</nav>
		</header>
	);
}

export default Header;
