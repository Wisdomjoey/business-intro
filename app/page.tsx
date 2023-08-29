import Background from "@/components/background";
import ChooseUs from "@/components/chooseUs";
import GetStarted from "@/components/getStarted";

export default function Home() {
	return (
		<main className="">
			<section>
				<GetStarted />
			</section>

			<section>
				<Background />
			</section>

			<section>
				<ChooseUs />
			</section>
		</main>
	);
}

