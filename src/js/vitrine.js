const relatos = [
  {
    nome: "Patrícia Silva",
    texto: "Tem uma excelente apresentação dos artistas, sua descrição e a apresentação das discografias são incríveis, e a indicação de artistas parecidos ajudou muito a montar minha playlist perfeita.",
    data: "Março de 2025",
    imagem: "https://conteudo.imguol.com.br/c/entretenimento/c4/2023/08/01/mc-luanna-1690910014710_v2_4x3.jpg"
  },
  {
    nome: "Ricardo Luis da Costa",
    texto: "Esse site me deu uma visibilidade absurda! Antes como artista underground eu não recebia nem 1000 views nas minhas músicas, hoje consegui fechar com uma gravadora, graças a vocês.",
    data: "Abril de 2025",
    imagem:" https://tse2.mm.bing.net/th/id/OIP.9LQQPcuCSYQZwfvl5n7M_AAAAA?rs=1&pid=ImgDetMain&o=7&r…"
  },
  {
    nome: "José João de Souza",
    texto: "É incrível a quantidade de artistas que tem uma qualidade maravilhosa e são desconhecidos, está deixando de lado a necessidade de ter uma gravadora para divulgação!",
    data: "Maio de 2025",
    imagem: "https://www.cheatsheet.com/wp-content/uploads/2022/02/Dr.-Dre-scaled.jpg"
  }
];
 
const vitrine = document.getElementById("vitrine");
 
relatos.forEach(relato => {
  const card = document.createElement("div");
  card.className =
    "bg-neutral-800 rounded-xl shadow-md p-5 flex flex-col items-center transition-transform transform hover:scale-105 ml-5 mr-5";
 
  card.innerHTML = `
    <img src="${relato.imagem}" alt="${relato.nome}" class="sm:w-24 sm:h-24 w-16 h-16 rounded-full mb-3 object-cover">
    <h3 class="text-white font-semibold text-lg">${relato.nome}</h3>
    <p class="mt-2 text-justify leading-relaxed text-white">"${relato.texto}"</p>
    <small class="mt-3 block text-white italic">Compartilhado em ${relato.data}</small>
  `;
 
  vitrine.appendChild(card);
});