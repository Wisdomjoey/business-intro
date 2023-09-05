import Background from "@/components/background";
import ChooseUs from "@/components/chooseUs";
import Conclusion from "@/components/conclusion";
import Faq from "@/components/faq";
import Footer from "@/components/footer";
import GetStarted from "@/components/getStarted";
import Quote from "@/components/quote";
import Talents from "@/components/talents";
import World from "@/components/world";

export default function Home() {
	return (
		<>
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

				<section>
					<Quote />
				</section>

				<section>
					<World />
				</section>

				<section>
					<Faq />
				</section>

				<section>
					<Talents />
				</section>

				<section>
					<Conclusion />
				</section>
			</main>

			<Footer />
		</>
	);
}

