import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Career Highlights"
				body={
					<div className="works-body">
						<div className="work">
							<div className="work-title">Singapore National Electronic Healthcare Record</div>
							<div className="work-subtitle">
								Senior Manager, Technical Architecture
							</div>
							<div className="work-duration">2009 - 2012</div>
						</div>
						<div className="work">
							<div className="work-title">Singapore Business Licensing System</div>
							<div className="work-subtitle">
								Applications Manager, Data Architecture
							</div>
							<div className="work-duration">2012</div>
						</div>
						<div className="work" >
							<div className="work-title">Mauritius National Identity System</div>
							<div className="work-subtitle">
								Lead Solution Architect, Project Delivery
							</div>
							<div className="work-duration">2012 - 2013</div>
						</div>
						<div className="work">
							<div className="work-title">Singapore Government Cloud</div>
							<div className="work-subtitle">
								Lead Cloud Architect, Operations
							</div>
							<div className="work-duration">2013 - 2014</div>
						</div>
						<div className="work">
							<div className="work-title">SuccessFactors Singapore DC</div>
							<div className="work-subtitle">
								Senior Director, DevOps Platform
							</div>
							<div className="work-duration">2018</div>
						</div>
						<div className="work">
							<div className="work-title">German Sovereign Cloud </div>
							<div className="work-subtitle">
								Chief Development Architect, Azure
							</div>
							<div className="work-duration">2022</div>
						</div>
						<div className="work">
							<div className="work-title">Data Platform - Secure Databricks</div>
							<div className="work-subtitle">
								Chief Development Architect, Azure AWS GCP
							</div>
							<div className="work-duration">2023</div>
						</div>
					</div>
				}
			/>
			
		</div>
	);
};

export default Works;
