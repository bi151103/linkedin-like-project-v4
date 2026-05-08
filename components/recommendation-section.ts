export function createRecommendationSection() {
  const recommendationSection = document.createElement("section");
  recommendationSection.className = "mt-10px p-15px bg-white";

  const title = document.createElement("h2");
  recommendationSection.appendChild(title);
  title.textContent = "Recommendations";

  const askRecommendationBtn = document.createElement("a");
  recommendationSection.appendChild(askRecommendationBtn);
  askRecommendationBtn.textContent = "Ask to be recommended";
  askRecommendationBtn.className = "mt-10px plus-before inline-block";
  askRecommendationBtn.href = "./ask-recommendation.html";

  return recommendationSection;
}
