// Array com caminhos das imagens de fundo
const imagensDeFundo = ["27.jpg","ajs.jpg", 'Renascentista.jpg'];
let indiceImagemAtual = 10;

// Função para alternar entre imagens de fundo
function alterarImagemDeFundo() {
    // Incrementa o índice para alternar a imagem
    indiceImagemAtual = (indiceImagemAtual + 1) % imagensDeFundo.length;
    // Atualiza o estilo do fundo da página com a nova imagem
    document.body.style.backgroundImage = `url('${imagensDeFundo[indiceImagemAtual]}')`;
}

// Função para ampliar a imagem ao clicar
function ampliarImagem(elemento) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modalImg');
    modal.style.display = 'flex';
    modalImg.src = elemento.src;
}

// Fechar o modal ao clicar fora da imagem
function fecharModal() {
    document.getElementById('modal').style.display = 'none';
}
