const searchButton = document.getElementById("searchButton");
const wordContainer = document.getElementById("wordContainer");

function getRandomWord() {
  const apiUrl = "https://dicio-api-ten.vercel.app/v2/random";
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const word = data.word;
      const meaning = data.meanings[0].definition;
      wordContainer.innerHTML = `
        <h2>${word}</h2>
        <p><strong>Significado:</strong> ${meaning}</p>
      `;
    })
    .catch(error => {
      console.error("Erro ao buscar palavra aleatória:", error);
      wordContainer.innerHTML = "<p>Erro ao buscar palavra aleatória.</p>";
    });
}

searchButton.addEventListener("click", getRandomWord);
