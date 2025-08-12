// Função para filtrar receitas
function filterRecipes(region) {
    const recipeCards = document.querySelectorAll('.recipe-card');
    const tabButtons = document.querySelectorAll('.tab-button');

    tabButtons.forEach(button => button.classList.remove('active-tab'));
    event.target.classList.add('active-tab');

    recipeCards.forEach(card => {
        card.classList.toggle('hidden', region !== 'todas' && card.dataset.category !== region);
    });
}

// Dados das receitas
const recipes = {
    feijoada: {
        title: "Feijoada Completa",
        image: "https://assets.unileversolutions.com/recipes-v2/229468.jpg",
        ingredients: [
            "1 kg de feijão preto",
            "100 g de carne seca",
            "70 g de orelha de porco",
            "70 g de rabo de porco",
            "70 g de pé de porco",
            "100 g de costelinha de porco",
            "50 g de linguiça calabresa",
            "2 cebolas grandes picadas",
            "1 maço de cebolinha verde picada",
            "3 folhas de louro",
            "6 dentes de alho",
            "Pimenta do reino a gosto",
            "1 ou 2 laranjas",
            "40 ml de pinga",
            "Sal se precisar"
        ],
        instructions: [
            "Coloque as carnes de molho por 36 horas ou mais, trocando a água várias vezes.",
            "Cozinhe as carnes duras primeiro, depois as moles.",
            "Quando estiver mole, coloque o feijão e retire as carnes.",
            "Tempere o feijão.",
            "Sirva com couve, farinha, arroz, laranja, bisteca e torresmo."
        ],
        tip: "Sirva com farofa e couve refogada. A laranja ajuda na digestão."
    },
    acaraje: {
        title: "Acarajé",
        image: "https://files.agro20.com.br/uploads/2020/04/acaraj%C3%A9-1-1024x576.jpg",
        ingredients: [
            "500g de feijão fradinho",
            "2 cebolas médias",
            "Sal a gosto",
            "Azeite de dendê para fritar",
            "Recheio: vatapá, caruru, camarão seco e pimenta"
        ],
        instructions: [
            "Deixe o feijão de molho por 12 horas.",
            "Bata no liquidificador com as cebolas.",
            "Tempere com sal.",
            "Aqueça o dendê.",
            "Modele os bolinhos e frite até dourar.",
            "Recheie com vatapá, caruru e camarão seco."
        ],
        tip: "Sirva ainda quente com pimenta."
    },
    barreado: {
        title: "Barreado",
        image: "https://www.minhareceita.com.br/app/uploads/2024/03/barreado-portal-minha-receita.jpg",
        ingredients: [
            "2 kg de carne bovina (patinho ou coxão duro)",
            "4 cebolas grandes picadas",
            "6 dentes de alho amassados",
            "2 colheres (sopa) de banha de porco",
            "2 colheres (sopa) de vinagre",
            "1 colher (sopa) de cominho em pó",
            "Sal e pimenta-do-reino a gosto",
            "4 folhas de louro",
            "Farinha de mandioca para acompanhar"
        ],
        instructions: [
            "Tempere a carne com alho, sal, pimenta, cominho e vinagre.",
            "Doure as cebolas na banha.",
            "Adicione a carne e o louro.",
            "Lacre a panela com massa de farinha e água.",
            "Cozinhe por 8h (ou 2h na pressão).",
            "Desfie e sirva com farinha e banana."
        ],
        tip: "O tradicional leva até 12h de cozimento."
    },
    tacaca: {
        title: "Tacacá",
        image: "https://sabores-new.s3.amazonaws.com/public/2024/11/tacaca.jpg",
        ingredients: [
            "2 litros de tucupi",
            "200 g de camarão seco",
            "2 maços de jambu",
            "4 dentes de alho",
            "2 pimentas-de-cheiro",
            "Sal a gosto",
            "2 colheres (sopa) de goma de mandioca"
        ],
        instructions: [
            "Cozinhe o jambu por 5 minutos e reserve.",
            "Ferva o tucupi com alho e sal por 30 min.",
            "Frite rapidamente os camarões.",
            "Dissolva a goma e adicione ao tucupi.",
            "Monte na cuia: goma, jambu, camarões e pimenta."
        ],
        tip: "Sirva bem quente com bastante pimenta."
    },
    pamonha: {
        title: "Pamonha",
        image: "https://www.otempo.com.br/content/dam/otempo/editorias/entretenimento/2023/5/entretenimento-dia-nacional-do-milho-aprenda-a-fazer-pamonha-doce-1708775729.jpeg",
        ingredients: [
            "6 espigas de milho verde",
            "1 xícara (chá) de leite",
            "1 colher (sopa) de manteiga",
            "Sal ou açúcar a gosto",
            "Palha de milho para embrulhar"
        ],
        instructions: [
            "Descasque o milho e reserve as melhores palhas.",
            "Bata o milho com o leite no liquidificador.",
            "Passe na peneira.",
            "Tempere e adicione a manteiga.",
            "Embrulhe na palha e amarre.",
            "Cozinhe por 40 minutos."
        ],
        tip: "Sirva quente com café ou pratos salgados."
    },
    baiao: {
        title: "Baião de Dois",
        image: "https://sabores-new.s3.amazonaws.com/public/2024/11/baiao-de-dois-1-1-1024x494.jpg",
        ingredients: [
            "2 xícaras de arroz",
            "1 xícara de feijão verde",
            "200 g de queijo coalho",
            "100 g de carne seca",
            "50 g de bacon",
            "1 cebola picada",
            "2 dentes de alho",
            "1 pimentão verde picado",
            "2 colheres de óleo",
            "Cheiro-verde a gosto",
            "Sal e pimenta"
        ],
        instructions: [
            "Cozinhe o feijão verde al dente.",
            "Frite bacon e carne seca.",
            "Refogue cebola, alho e pimentão.",
            "Adicione o arroz e refogue.",
            "Junte o feijão e água quente.",
            "Quando quase seco, adicione queijo.",
            "Descansar 5 min e servir."
        ],
        tip: "Adicione nata no final para mais cremosidade."
    }
};

// Exibir receita no modal
function showRecipe(id) {
    const r = recipes[id];
    if (!r) return;

    document.getElementById('modalTitle').textContent = r.title;
    document.getElementById('modalImage').src = r.image;

    document.getElementById('modalIngredients').innerHTML = r.ingredients.map(i => `<li>${i}</li>`).join('');
    document.getElementById('modalInstructions').innerHTML = r.instructions.map(i => `<li>${i}</li>`).join('');
    document.getElementById('modalTip').textContent = r.tip;

    document.getElementById('recipeModal').classList.remove('hidden');
}

// Fechar modal
function closeModal() {
    document.getElementById('recipeModal').classList.add('hidden');
}

// Fechar modal clicando fora
window.onclick = function(e) {
    const modal = document.getElementById('recipeModal');
    if (e.target === modal) closeModal();
};
