function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
  }
   
  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
  }
  
  // Modal Image Gallery
  function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
  }

  // Exerício 1
  function verificarResposta() {
    const resultado = document.getElementById('resultado');
    const alternativas = document.getElementsByName('resposta');
    let respostaEscolhida = null;

    // Verifica qual alternativa foi escolhida
    for (let i = 0; i < alternativas.length; i++) {
        if (alternativas[i].checked) {
            respostaEscolhida = alternativas[i].value;
            break;
        }
    }

    // Verifica se a resposta está correta
    if (respostaEscolhida === 'opcao4') {
        resultado.innerHTML = '<span style="color: green;">Resposta correta! ✔</span>';
    } else if (respostaEscolhida) {
        resultado.innerHTML = '<span style="color: red;">Resposta incorreta. Tente novamente.</span>';
    } else {
        resultado.innerHTML = '<span style="color: orange;">Por favor, selecione uma alternativa.</span>';
    }
}

// Exercício 2
function verificarResposta2() {
  const resultado2 = document.getElementById('resultado2');
  const alternativas2 = document.getElementsByName('resposta2');
  let respostaEscolhida2 = null;

  // Verifica qual alternativa foi escolhida
  for (let i2 = 0; i2 < alternativas2.length; i2++) {
      if (alternativas2[i2].checked) {
          respostaEscolhida2 = alternativas2[i2].value;
          break;
      }
  }

  // Verifica se a resposta está correta
  if (respostaEscolhida2 === 'opcaoo5') {
      resultado2.innerHTML = '<span style="color: green;">Resposta correta! ✔</span>';
  } else if (respostaEscolhida2) {
      resultado2.innerHTML = '<span style="color: red;">Resposta incorreta. Tente novamente.</span>';
  } else {
      resultado2.innerHTML = '<span style="color: orange;">Por favor, selecione uma alternativa.</span>';
  }
}
