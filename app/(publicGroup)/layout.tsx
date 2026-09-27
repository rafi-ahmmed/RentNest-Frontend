import React, { type ReactNode } from "react";
import { toast } from "sonner";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { getMe } from "@/services/getme";

const publicLayout = async ({ children }: { children: ReactNode }) => {
	const user = await getMe();
	console.log(user);

	return (
		<div>
			<Navbar user={user} />

			<section className=" mx-auto min-h-[calc(100vh-387px)]">
				{children}
			</section>
			<Footer />
		</div>
	);
};

export default publicLayout;
