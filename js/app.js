let valorTotalDeTodosProdutos = 0;
limpar();

function adicionar(){
    let produtoInput = document.getElementById('produto').value;
    let quantidadeDoProduto = document.getElementById('quantidade');
    let valorDoProduto = parseInt(produtoInput.split('R$')[1]);
    let nomeDoproduto = produtoInput.split('-')[0];

    let valorTotalDoProduto = valorDoProduto * quantidadeDoProduto.value;

    let resumoDoCarrinho = document.getElementById('lista-produtos')
    resumoDoCarrinho.innerHTML = resumoDoCarrinho.innerHTML + `<section class="carrinho__produtos__produto"><span class="texto-azul">${quantidadeDoProduto.value}x</span> ${nomeDoproduto} <span class="texto-azul">R$${valorTotalDoProduto}</span></section>`;

    valorTotalDeTodosProdutos = valorTotalDeTodosProdutos + valorTotalDoProduto;

    let exibidorDoValorTotaL = document.getElementById('valor-total');
    exibidorDoValorTotaL.textContent = `R$${valorTotalDeTodosProdutos}`;

    limparCampo();
}

function limparCampo(){
    document.getElementById('quantidade').value = '';
}


function limpar(){
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 'R$0'
}