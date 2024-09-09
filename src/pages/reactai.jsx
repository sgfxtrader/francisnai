import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/reactai.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`ReactAI | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="reactai-logo-container">
						<div className="reactai-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="reactai-container">
						<div className="reactai-main">
							<div className="reactai-right-side">
								<div className="title reactai-title">
									{INFO.reactai.title}
								</div>
								<div className="subtitle reactai-subtitle">
									{INFO.reactai.description}
								</div>
								<div className="subtitle reactai-subtitle">
									{INFO.reactai.description1}
								</div>
								<div className="subtitle reactai-subtitle">
									{INFO.reactai.description2}
								</div>
							</div>

							<div className="reactai-left-side">
								<div className="reactai-image-container">
									<div className="reactai-image-wrapper">
										<img
											src="reactagent.jpg"
											alt="about"
											className="reactai-image"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
