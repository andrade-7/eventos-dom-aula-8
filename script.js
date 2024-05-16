// <!DOCTYPE html>
// <html lang="pt-BR">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Aula 7 - Revisão</title>
// </head>
// <body>
//     <h1>Maior número</h1>
//     <label for="n1">Primeiro Número</label>
//     <input type="number" id="n1" name="n1" placeholder="Digite o primeiro número">
//     <br>
//     <label for="n2">Segundo Número</label>
//     <input type="number" id="n2" name="n2" placeholder="Digite o segundo número">
//     <br>
//     <button id="botao">Enviar</button>

//     <script src="./script.js"></script>
// </body>
// </html>






// const numero1 = document.querySelector("#n1")
// const numero2 = document.querySelector("#n2")
// const botao = document.querySelector("#botao")

// botao.addEventListener("click", ()=> {
//     if(Number(numero1.value) > Number(numero2.value)){
//         alert(`O maior número é o ${numero1.value}`)
//     }else if(Number(numero2.value) > Number(numero1.value)){
//         alert(`O maior número é o ${numero2.value}`)
//     }else{
//         alert("Números são iguais")
//     }
// })




// VERSÃO MAIS OTIMIZADA
// const numero1 = document.querySelector("#n1")
// const numero2 = document.querySelector("#n2")
// const botao = document.querySelector("#botao")

// botao.addEventListener("click", ()=> {
//     const n1 = Number(numero1.value)
//     const n2 = Number(numero2.value)
//     if(n1 > n2 ){
//         alert(`O maior número é o ${n1}`)
//     }else if(n2 > n1){
//         alert(`O maior número é o ${n2}`)
//     }else{
//         alert("Números são iguais")
//     }
// })




// <!DOCTYPE html>
// <html lang="pt-BR">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Aula 7 - Revisão</title>
// </head>
// <body>
//     <h1>Contando vogais e Consoantes</h1>
//     <label for="nome">Nome</label>
//     <input type="text" id="nome" name="nome">
//     <button id="botao">Enviar</button>

//     <script src="./script.js"></script>
// </body>
// </html>




// const nome = document.querySelector("#nome")
// const botao = document.querySelector("#botao")


// botao.addEventListener("click", () => {
//     const vogais = "aeiouáàããéêíóõõú"
//     const consoantes = "bcdfghjklmnpqrstvxywz"
//     let contador_vogal = 0
//     let contador_consoante = 0

//     for(let letra_atual of nome.value.toLowerCase()){
//         if(vogais.includes(letra_atual)){
//             contador_vogal++
//         }else if(consoantes.includes(letra_atual)){
//             contador_consoante++
//         }
//     }

//     alert(`Seu nome possui ${contador_vogal} vogais e ${contador_consoante} consoantes`)
// })





// const titulo = document.querySelector("#titulo")

// console.log(titulo)

//TEXT CONTENT PEGA TODO O TEXTO DA TAG INDEPENDENTE DE ELE ESTAR VISÍVEL OU NÃO
// console.log(titulo.textContent)


//INNERHTML PEGA ALÉM DO TEXTO TODAS AS OUTRAS TAGS HTML QUE ESTIVEREM DENTRO DO ELEMENTO
// console.log(titulo.innerHTML)


//INNERTEXT PEGA APENAS O TEXTO VISÍVEL PARA O USUÁRIO
// console.log(titulo.innerText)





// <!DOCTYPE html>
// <html lang="pt-BR">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Aula 7 - Revisão</title>
// </head>
// <body>
//     <h1 id="titulo">Meu <i>título</i> da página <span style="display: none;">texto secreto</span> </h1>

//     <a id="link" href="https://www.youtube.com/">Ir para o Youtube</a>

//     <img id="imagem" width="300" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png" alt="logo do html">

//     <script src="./script.js"></script>
// </body>
// </html>




// {/* 
// const link = document.querySelector("#link")
// const imagem = document.querySelector("#imagem")

// console.log(link);
// link.href = "https://www.google.com/"
// link.textContent = "Ir para o Google"


// console.log(imagem);
// imagem.width = 600
// imagem.src = "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"

// imagem.alt = "Logo do Javascript"

//  */}





// {/* <!DOCTYPE html>
// <html lang="pt-BR">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Aula 7 - Revisão</title>
// </head>
// <body>
//     <img width="300" id="imagem" src="" alt="">
//     <br>
//     <button id="html">HTML</button>
//     <button id="css">CSS</button>
//     <button id="js">Javascript</button>

//     <script src="./script.js"></script>
// </body>
// </html> */}




// const imagem = document.querySelector("#imagem")
// const html = document.querySelector("#html")
// const css = document.querySelector("#css")
// const js = document.querySelector("#js")

// html.addEventListener("click", ()=>{
//     imagem.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png"
//     imagem.alt = "Logo do HTML"
// })

// css.addEventListener("click", ()=>{
//     imagem.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png"
//     imagem.alt = "Logo do CSS"
// })

// js.addEventListener("click", ()=>{
//     imagem.src = "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
//     imagem.alt = "Logo do JavaScript"
// })




// const titulo = document.querySelector("#titulo")

// document.body.style.backgroundColor = "grey"

// titulo.style.color = "red"
// titulo.style.backgroundColor = "black"
// titulo.style.textAlign = "center"










// HTML===============================================================
// <!DOCTYPE html>
// <html lang="pt-BR">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Aula 8</title>
//     <link rel="stylesheet" href="./style.css">
// </head>
// <body>
//     <h1 id="titulo">Meu título</h1>

//     <button id="escuro">Modo Escuro</button>
//     <button id="claro">Modo Claro</button>
//     <script src="./script.js"></script>
// </body>
// </html>



// CSS===============================================================
// .modo_claro{
//     color: black;
//     background-color: red;
//     padding: 30px;
//     margin-left: 100px;
// }

// .modo_escuro{
//     color: white;
//     background-color: blue;
//     text-align: center;
//     padding: 30px;
// }



// JS===============================================================
// const titulo = document.querySelector("#titulo")
// const escuro = document.querySelector("#escuro")
// const claro = document.querySelector("#claro")




// <!DOCTYPE html>
// <html lang="pt-BR">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <link rel="stylesheet" href="styles.css">
//     <title>Eventos do DOM</title>
    
// </head>
// <body>
//     <h1 id="titulo" >Gato ou Cachorro ?</h1>

//     <label for="animal">Animal</label>
//     <input type="text" id="animal" name="animal" placeholder="Digite, gato ou cachorro">

//     <button id="conferir" >conferir</button>
    
    
    
//     <script src="./script.js"></script>
// </body>
// </html>






// escuro.addEventListener("click", ()=>{
//     document.body.style.backgroundColor = "black"
//     titulo.className = "modo_escuro"
// })
// claro.addEventListener("click", ()=>{
//     document.body.style.backgroundColor = "white"
//     titulo.className = "modo_claro"
// })


// const titulo = document.querySelector("#titulo")
// const animal = document.querySelector("#animal")
// const conferir = document.querySelector("#conferir")

// conferir.addEventListener("click", ()=>{
//     if(animal.value.toLowerCase() === "gato")
//         titulo.textContent = "GATINHO"
//     else if(animal.value.toLowerCase() === "cachorro"){
//         titulo.textContent = "CACHORRINHO"
//     }
// })














