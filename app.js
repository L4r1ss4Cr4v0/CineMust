let section = document.getElementById("filmes");
let resultado = "";

function atribuicaoResultado(filme){
    resultado += `
    <div>
        <img src="/imgs/posters/${filme.img}" alt="${filme.nome}">
        <div id="infos">
            <h2>${filme.nome}</h2>
            <p><a target="_blank" href=${filme.imdb}>IMDB</a></p>
            <p>Data de estreia:  ${filme.data_estreia}</p>
        `
            if (filme.streaming != "NDA") {
            resultado += `     
            <img src="/imgs/streamings/${filme.streaming}.jpg">
            `
            } 
            else{
                resultado += `     
                <p style="font-size: 1em; height: 50px">Não está disponivel em nenhuma plataforma de streaming</p>
                `
            }

    resultado += `
            <div id="categoria" class="flex">
                <span>${filme.tags[0]}</span>
                <span>${filme.tags[1]}</span>
                <span>${filme.tags[2]}</span>
            </div> 
        </div>
    </div>
    `

}

function exibirFilmes(){

    for (let filme of filmes){
        atribuicaoResultado(filme)
    };

    section.innerHTML = resultado;

    resultado = ""
}

exibirFilmes();

function buscar() {

    let campoPesquisa = document.getElementById("campo_pesquisa").value;

    if(campoPesquisa == ""){

        section.innerHTML = "<p style='color: #fff;'>Digite o nome, gênero ou a plataforma de streaming na busca</p>";
        
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    for (let filme of filmes){

        if(filme.nome.toLowerCase().includes(campoPesquisa) || filme.streaming.toLowerCase().includes(campoPesquisa) || filme.tags.toString().toLowerCase().includes(campoPesquisa)){
            atribuicaoResultado(filme)
        }

        section.innerHTML = resultado;
    }
    if (!resultado) {
        section.innerHTML = "<p style='color: #fff;'>Você digitou uma informação que não existe em nosso banco de dados</p>"

        return
    }

    resultado = ""
}


//ajuda a carregar mais rápido => O BRUTO SENDO FEITO EM UMA LINHA, FORA DO FOR


