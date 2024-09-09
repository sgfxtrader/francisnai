import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							Contact Us
						</div>
					</div>

					<div className="about-main">
						<div className="about-right-side">
							<div className="subtitle about-subtitle">
								Thank you for your interest. Feel free to email me directly at
								&nbsp;
								<a href={`mailto:${INFO.main.email}`}>
									{INFO.main.email}
								</a>
								.
								<br />
								<br />For communication through social media:
								<br />Github: &nbsp;
								<a
									href={INFO.socials.github}
									target="_blank"
									rel="noreferrer"
								>
									{INFO.socials.github}
								</a>
								<br />Linkedin: &nbsp;
								<a
									href={INFO.socials.linkedin}
									target="_blank"
									rel="noreferrer"
								>
									{INFO.socials.linkedin}
								</a>
								<br /><br />Looking forward to hearing from you :-)
							</div>
						</div>

						<div className="about-left-side">
							<div className="about-image-container">
								<div className="about-image-wrapper">
									<img
										src="francisnai-logo.png"
										alt="about"
										className="about-image"
									/>
								</div>
							</div>
						</div>
					</div>
				
					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
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

export default Contact;
