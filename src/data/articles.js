import React from "react";

function article_1() {
	return {
		date: "9 September 2024",
		title: "llama3 LLM RAG App with Ollama",
		description:
			"A RAG application combines traditional retrieval techniques with generative models like LLaMA 3 to provide more accurate and contextually relevant responses. The integration with Ollama allows you to run LLaMA 3 locally, making it efficient for development and testing.",
		keywords: [
			"Developing llama3 LLM RAG App with Ollama",
			"llama3 LLM RAG App with Ollama",
			"francisnai.com",
			"Francis Nai",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		link: "",
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "21 August 2024",
		title: "Developing llama3 LLM App with Ollama and Python on Windows 10",
		description:
			"Getting started with LLM App development by hosting LLM model locally with Ollama and loading an open source LLM model such as LLaMA 3.1 from Meta.",
		keywords: [
			"Developing llama3 LLM App with Ollama and Python on Windows 10",
			"llama3 LLM App with Ollama and Python",
			"francisnai.com",
			"Francis Nai",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		link: "https://francisnai.substack.com/p/llm-application-development",
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
