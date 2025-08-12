const recipes = {
    feijoada: {
        category: "sudeste",
        title: "Feijoada Completa",
        image: "https://images.unsplash.com/photo-1547592180-85f173990554",
        ingredients: [
            "1 kg de feijão preto", "100 g de carne seca", "70 g de orelha de porco",
            "70 g de rabo de porco", "70 g de pé de porco", "100 g de costelinha de porco",
            "50 g de linguiça calabresa", "2 cebolas grandes picadas", "1 maço de cebolinha verde picada",
            "3 folhas de louro", "6 dentes de alho", "Pimenta do reino a gosto",
            "1 ou 2 laranjas", "40 ml de pinga", "Sal se precisar"
        ],
        instructions: [
            "Coloque as carnes de molho por 36 horas ou mais, trocando a água várias vezes.",
            "Cozinhe as carnes duras, depois as carnes moles.",
            "Adicione o feijão e retire as carnes.",
            "Tempere o feijão.",
            "Sirva com couve, farinha, arroz, laranja, bisteca suína, torresmo."
        ],
        tip: "Sirva com farofa e couve refogada. A laranja ajuda na digestão."
    },
    acaraje: {
        category: "nordeste",
        title: "Acarajé",
        image: "https://images.unsplash.com/photo-1605291567250-6fff7c036bd0",
        ingredients: [
            "500g de feijão fradinho", "2 cebolas médias", "Sal a gosto",
            "Azeite de dendê para fritar", "Recheio: vatapá, caruru, camarão seco e pimenta"
        ],
        instructions: [
            "Deixe o feijão de molho por 12 horas.",
            "Bata com as cebolas até virar pasta.",
            "Tempere e bata mais.",
            "Aqueça o dendê.",
            "Modele bolinhos e frite.",
            "Recheie com vatapá, caruru e camarão seco."
        ],
        tip: "Sirva quente com pimenta."
    },
    barreado: {
        category: "sul",
        title: "Barreado",
        image: "https://images.unsplash.com/photo-1625938143087-204ca7b9c1c3",
        ingredients: [
            "2 kg de carne bovina", "4 cebolas picadas", "6 dentes de alho",
            "2 colheres de banha", "2 colheres de vinagre", "1 colher de cominho",
            "Sal e pimenta a gosto", "4 folhas de louro", "Farinha de mandioca"
        ],
        instructions: [
            "Tempere a carne.",
            "Doure cebolas e adicione a carne.",
            "Lacre a panela e cozinhe por 8h.",
            "Desfie e sirva com farinha e banana."
        ],
        tip: "O barreado tradicional é cozido até 12 horas."
    },
    tacaca: {
        category: "norte",
        title: "Tacacá",
        image: "https://images.unsplash.com/photo-1585238342024-78d90f061f9e",
        ingredients: [
            "2 litros de tucupi", "200 g de camarão seco", "2 maços de jambu",
            "4 dentes de alho", "2 pimentas-de-cheiro", "Sal a gosto", "2 colheres de goma de mandioca"
        ],
        instructions: [
            "Cozinhe o jambu.",
            "Ferva tucupi com alho e sal.",
            "Frite os camarões.",
            "Dissolva goma e adicione ao tucupi.",
            "Monte nas cuias."
        ],
        tip: "Sirva bem quente e apimentado."
    },
    pamonha: {
        category: "centro-oeste",
        title: "Pamonha",
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641",
        ingredients: [
            "6 espigas de milho", "1 xícara de leite", "1 colher de manteiga",
            "Sal ou açúcar", "Palha de milho"
        ],
        instructions: [
            "Rale o milho e bata com leite.",
            "Peneire e tempere.",
            "Envolva na palha e amarre.",
            "Cozinhe 40 minutos."
        ],
        tip: "Sirva quente com café."
    },
    baiao: {
        category: "nordeste",
        title: "Baião de Dois",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
        ingredients: [
            "2 xícaras de arroz", "1 xícara de feijão verde", "200 g de queijo coalho",
            "100 g de carne seca", "50 g de bacon", "1 cebola", "2 dentes de alho",
            "1 pimentão verde", "Cheiro-verde", "Sal e pimenta"
        ],
        instructions: [
            "Cozinhe o feijão.",
            "Frite bacon e carne seca.",
            "Refogue cebola, alho e pimentão.",
            "Adicione arroz e feijão.",
            "Finalize com queijo coalho."
        ],
        tip: "Adicione creme de leite no final para um toque especial."
    }
};

const categories = ["todas", "norte", "nordeste", "sudeste", "sul", "centro-oeste"];

function renderTabs() {
    const tabsContainer = document.getElementById("tabs");
    categories.forEach(cat => {
        const btn = document.createElement("button");
        btn.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
        btn.className = "tab-button px-6 py-2 font-medium text-[#167288] whitespace-nowrap";
        if (cat === "todas") btn.classList.add("active-tab");
        btn.onclick = (e) => filterRecipes(cat, e);
        tabsContainer.appendChild(btn);
    });
}

function renderRecipes(filter = "todas") {
    const grid = document.getElementById("recipeGrid");
    grid.innerHTML = "";
    Object.entries(recipes).forEach(([id, recipe]) => {
        if (filter === "todas" || recipe.category === filter) {
            grid.innerHTML += `
                <div class="recipe-card bg-white rounded-lg overflow-hidden shadow-md transition duration-300" data-category="${recipe.category}">
                    <img src="${recipe.image}" alt="${recipe.title}" class="w-full h-48 object-cover">
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2 text-[#167288]">${recipe.title}</h3>
                        <button onclick="showRecipe('${id}')" class="bg-[#8cdaec] hover:bg-[#167288] text-white font-medium py-2 px-4 rounded-full transition">Ver Receita</button>
                    </div>
                </div>
            `;
        }
    });
}

function filterRecipes(region, event) {
    document.querySelectorAll(".tab-button").forEach(btn => btn.classList.remove("active-tab"));
    event.target.classList.add("active-tab");
    renderRecipes(region);
}

function showRecipe(id) {
    const r = recipes[id];
    document.getElementById("modalTitle").textContent = r.title;
    document.getElementById("modalImage").src = r.image;
    document.getElementById("modalIngredients").innerHTML = r.ingredients.map(i => `<li>${i}</li>`).join("");
    document.getElementById("modalInstructions").innerHTML = r.instructions.map(i => `<li>${i}</li>`).join("");
    document.getElementById("modalTip").textContent = r.tip;
    document.getElementById("recipeModal").classList.remove("hidden");
}

function closeModal() {
    document.getElementById("recipeModal").classList.add("hidden");
}

renderTabs();
renderRecipes();
