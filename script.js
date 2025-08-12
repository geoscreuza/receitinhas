// Lista de receitas
const recipes = [
    {
        title: "Moqueca Baiana",
        description: "Um prato típico do litoral baiano, feito com peixe, leite de coco e dendê.",
        image: "https://via.placeholder.com/300x200?text=Moqueca"
    },
    {
        title: "Pão de Queijo",
        description: "Clássico mineiro, crocante por fora e macio por dentro.",
        image: "https://via.placeholder.com/300x200?text=Pao+de+Queijo"
    },
    {
        title: "Acarajé",
        description: "Bolinho de feijão-fradinho frito no azeite de dendê, recheado com vatapá e camarão.",
        image: "https://via.placeholder.com/300x200?text=Acaraje"
    },
    {
        title: "Churrasco Gaúcho",
        description: "Carne assada na brasa, temperada apenas com sal grosso.",
        image: "https://via.placeholder.com/300x200?text=Churrasco"
    }
];

// Função para renderizar receitas no grid
function renderRecipes() {
    const grid = document.getElementById("recipeGrid");
    if (!grid) return;

    grid.innerHTML = recipes.map(recipe => `
        <div class="card">
            <img src="${recipe.image}" alt="${recipe.title}" style="width: 100%; border-radius: 8px;">
            <h3>${recipe.title}</h3>
            <p>${recipe.description}</p>
            <button style="background-color: #b45248; color: white; border: none; padding: 0.5rem 1rem; border-radius: 20px;">
                Ver Receita
            </button>
        </div>
    `).join("");
}

// Renderiza ao carregar a página
document.addEventListener("DOMContentLoaded", renderRecipes);
