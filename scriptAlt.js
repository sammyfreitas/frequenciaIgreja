function getMembros(){
 return JSON.parse(localStorage.getItem('membros') || '[]');
}

function salvarStorage(lista){
 localStorage.setItem('membros', JSON.stringify(lista));
}

function salvar(){
 const lista = getMembros();

 lista.push({
  id: Date.now(),
  nome: nome.value,
  cargo: cargo.value,
  faltas: 0
 });

 salvarStorage(lista);
 listar();
}

function listar(){
 const dados = getMembros();

 lista.innerHTML='';
 let totalFaltas = 0;

 dados.forEach(x=>{
  totalFaltas += x.faltas;

  lista.innerHTML += `
   <li style="background:#1e293b;padding:12px;border-radius:10px;max-width:700px;margin:10px auto;list-style:none;">
    ${x.nome} - ${x.cargo} - Faltas:${x.faltas}
    <button onclick="falta(${x.id})">+ Falta</button>
   </li>`;
 });

 totalMembros.innerText = dados.length;
 totalFaltas.innerText = totalFaltas;
 cadastrosHoje.innerText = dados.length;
}

function falta(id){
 let dados = getMembros();

 dados = dados.map(x=>{
  if(x.id === id) x.faltas++;
  return x;
 });

 salvarStorage(dados);
 listar();
}


if(getMembros().length === 0){

 const base = [
  {nome:"Pr. João Silva", cargo:"Pastor"},
  {nome:"Carlos Souza", cargo:"Presbítero"},
  {nome:"Marcos Lima", cargo:"Líder dos Homens"},
  {nome:"Ana Paula", cargo:"Líder das Mulheres"},
  {nome:"Juliana Rocha", cargo:"Escola Dominical"},

  // membros
  {nome:"Pedro Alves", cargo:"Membro"},
  {nome:"Lucas Ferreira", cargo:"Membro"},
  {nome:"Rafael Costa", cargo:"Membro"},
  {nome:"Daniel Santos", cargo:"Membro"},
  {nome:"Bruno Oliveira", cargo:"Membro"},
  {nome:"Felipe Gomes", cargo:"Membro"},
  {nome:"Gabriel Martins", cargo:"Membro"},
  {nome:"Eduardo Ribeiro", cargo:"Membro"},
  {nome:"André Carvalho", cargo:"Membro"},
  {nome:"Vinicius Lopes", cargo:"Membro"},
  {nome:"Rodrigo Nunes", cargo:"Membro"},
  {nome:"Thiago Mendes", cargo:"Membro"},
  {nome:"Fernando Dias", cargo:"Membro"},
  {nome:"Leandro Barbosa", cargo:"Membro"},
  {nome:"Caio Teixeira", cargo:"Membro"},
  {nome:"Igor Batista", cargo:"Membro"},
  {nome:"Paulo Henrique", cargo:"Membro"},
  {nome:"João Pedro", cargo:"Membro"},
  {nome:"Renato Azevedo", cargo:"Membro"},
  {nome:"Diego Freitas", cargo:"Membro"},
  {nome:"Ricardo Pires", cargo:"Membro"},
  {nome:"Gustavo Rocha", cargo:"Membro"},
  {nome:"Samuel Vieira", cargo:"Membro"},
  {nome:"Henrique Farias", cargo:"Membro"},
  {nome:"Matheus Cunha", cargo:"Membro"},
  {nome:"Leonardo Melo", cargo:"Membro"},
  {nome:"Cristiano Duarte", cargo:"Membro"},
  {nome:"Alexandre Braga", cargo:"Membro"},
  {nome:"Sérgio Castro", cargo:"Membro"},
  {nome:"Fabio Moura", cargo:"Membro"}
 ];

 const dados = base.map(x=>({
  id: Date.now() + Math.random(),
  nome: x.nome,
  cargo: x.cargo,
  faltas: 0
 }));

 salvarStorage(dados);
}