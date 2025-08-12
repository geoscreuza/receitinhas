const recipes = [
    { title: "Feijoada", description: "O prato mais tradicional do Brasil, com feijão preto e diversas carnes.", image: "https://via.placeholder.com/400x250?text=Feijoada", region: "sudeste" },
    { title: "Acarajé", description: "Bolinho de origem africana, típico da culinária baiana.", image: "https://via.placeholder.com/400x250?text=Acaraje", region: "nordeste" },
    { title: "Barreado", description: "Cozido de carne típico do litoral paranaense, cozido por horas.", image: "https://via.placeholder.com/400x250?text=Barreado", region: "sul" },
    { title: "Tacacá", description: "Sopa típica da região norte, feita com tucupi, jambu e camarão.", image: "https://via.placeholder.com/400x250?text=Tacaca", region: "norte" },
    { title: "Pamonha", description: "Prato feito com milho verde ralado, geralmente cozido em palha de milho.", image: "https://via.placeholder.com/400x250?text=Pamonha", region: "centro-oeste" },
    { title: "Baião de Dois", description: "Mistura de arroz e feijão-de-corda, típico do Nordeste brasileiro.", image: "https://via.placeholder.com/400x250?text=Baiao+de+Dois", region: "nordeste" }
];

function renderRecipes(region = "all") {
    const grid = document.getElementById("recipeGrid");
    grid.innerHTML = "";

    const filtered = region === "all" ? recipes : recipes.filter(r => r.region === region);

    filtered.forEach(recipe => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}">
            <h3>${recipe.title}</h3>
            <p>${recipe.description}</p>
            <button>Ver Receita</button>
        `;
        grid.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    renderRecipes();

    document.querySelectorAll(".filter-tabs .tab").forEach(tab => {
        tab.addEventListener("click", () => {
            document.querySelectorAll(".filter-tabs .tab").forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            renderRecipes(tab.dataset.region);
        });
    });
});
