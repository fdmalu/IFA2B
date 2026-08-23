const dadosPesquisa = [
  {
    numero: "Pergunta 1",
    pergunta: "Em qual turno você estuda?",
    resultados: [
      { opcao: "Matutino", valor: "88,5%" },
      { opcao: "Vespertino", valor: "11,5%" }
    ]
  },
  {
    numero: "Pergunta 2",
    pergunta: "Em qual turma você estuda?",
    resultados: [
      { opcao: "6º ano", valor: "18,2%" },
      { opcao: "7º ano", valor: "7,4%" },
      { opcao: "8º ano", valor: "31,1%" },
      { opcao: "9º ano", valor: "43,2%" }
    ]
  },
  {
    numero: "Pergunta 3",
    pergunta: "Qual sua idade?",
    resultados: [
      { opcao: "11/12 anos", valor: "29,7%" },
      { opcao: "13/14 anos", valor: "62,8%" },
      { opcao: "15/16 anos", valor: "7,4%" },
      { opcao: "17/18 anos", valor: "0%" },
      { opcao: "18+ anos", valor: "0%" }
    ]
  },
  {
    numero: "Pergunta 4",
    pergunta: "Você sente alguma dificuldade para enxergar?",
    resultados: [
      { opcao: "Não, enxergo muito bem", valor: "58,1%" },
      { opcao: "Sim, para ver coisas de longe", valor: "29,1%" },
      { opcao: "Sim, outra dificuldade", valor: "6,8%" },
      { opcao: "Sim, enxergo embaçado/dor nos olhos", valor: "4,7%" },
      { opcao: "Sim, para ver coisas de perto", valor: "1,4%" }
    ]
  },
  {
    numero: "Pergunta 5",
    pergunta: "Você já consultou um médico oftalmologista para verificar sua visão?",
    resultados: [
      { opcao: "Nunca fui", valor: "46,6%" },
      { opcao: "Sim, faz mais de um ano", valor: "30,4%" },
      { opcao: "Sim, fui nos últimos 12 meses", valor: "23,0%" }
    ]
  },
  {
    numero: "Pergunta 6",
    pergunta: "Se já consultou, recebeu algum diagnóstico ou orientação?",
    resultados: [
      { opcao: "Nunca fui ao oftalmologista", valor: "35,1%" },
      { opcao: "Não tenho nenhum problema na visão", valor: "33,1%" },
      { opcao: "Sim, tenho miopia", valor: "12,8%" },
      { opcao: "Sim, tenho astigmatismo", valor: "8,1%" },
      { opcao: "Não lembro/não entendi a explicação", valor: "7,4%" },
      { opcao: "Sim, tenho outra alteração", valor: "3,4%" }
    ]
  },
  {
    numero: "Pergunta 7",
    pergunta: "Você usa óculos ou lentes de contato?",
    resultados: [
      { opcao: "Não", valor: "68,9%" },
      { opcao: "Sim", valor: "20,3%" },
      { opcao: "Não, mas deveria", valor: "10,8%" }
    ]
  },
  {
    numero: "Pergunta 8",
    pergunta: "Se você NUNCA foi ao oftalmologista, qual o principal motivo?",
    resultados: [
      { opcao: "Não sinto necessidade, enxergo bem", valor: "54,1%" },
      { opcao: "Outro motivo", valor: "34,4%" },
      { opcao: "Responsáveis sem tempo/oportunidade", valor: "10,8%" },
      { opcao: "Sem condições financeiras na família", valor: "0,7%" }
    ]
  }
];

function carregarCartoes() {
  const container = document.getElementById("cards-container");

  dadosPesquisa.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card";

    // Constrói a lista de opções para o verso do cartão
    const listaResultados = item.resultados
      .map(
        (res) => `
        <li>
          <span>${res.opcao}</span>
          <span class="percentage">${res.valor}</span>
        </li>
      `
      )
      .join("");

    card.innerHTML = `
      <div class="card-inner">
        <div class="card-front">
          <span class="card-number">${item.numero}</span>
          <h3>${item.pergunta}</h3>
        </div>
        <div class="card-back">
          <h4>Respostas Obtidas:</h4>
          <ul>
            ${listaResultados}
          </ul>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", carregarCartoes);