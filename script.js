// Função para redirecionar para a tela de detalhes
function redirectToDetail(index) {
    window.location.href = `detalhes.html?index=${index}`;
}

// Adiciona evento de clique às imagens na tela principal
document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', () => {
        const index = img.getAttribute('data-index');
        redirectToDetail(index);
    });
});

// Lógica para exibir a imagem correta na tela de detalhes
const urlParams = new URLSearchParams(window.location.search);
const index = urlParams.get('index');

const images = [
    "https://www.dicasdemulher.com.br/wp-content/uploads/2019/01/unhas-nude-21-730x730.jpg",
    "https://www.oibonita.com.br/wp-content/uploads/2023/03/unhas-nude-4-730x811.jpg",
    "https://www.dicasdemulher.com.br/wp-content/uploads/2019/01/unhas-nude-1-730x730.jpg",
    "https://www.dicasdemulher.com.br/wp-content/uploads/2019/01/unhas-nude-8-730x730.jpg",
    "https://www.dicasdemulher.com.br/wp-content/uploads/2019/01/unhas-nude-12-730x730.jpg",
    "https://www.dicasdemulher.com.br/wp-content/uploads/2019/01/unhas-nude-14-730x730.jpg",
    "https://www.dicasdemulher.com.br/wp-content/uploads/2019/01/unhas-nude-19-730x730.jpg",
    "https://www.dicasdemulher.com.br/wp-content/uploads/2019/01/unhas-nude-22-730x730.jpg"
];

const detailImage = document.getElementById('detail-image');
if (detailImage && index !== null && index >= 0 && index < images.length) {
    detailImage.src = images[index];
} else {
    window.location.href = 'index.html';
}