async function salvar(){
 await fetch('/membros',{
  method:'POST',
  headers:{'Content-Type':'application/json'},
  body:JSON.stringify({
   nome:nome.value,
   cargo:cargo.value
  })
 });
 listar();
}

async function listar(){
 const r = await fetch('/membros');
 const dados = await r.json();
 lista.innerHTML='';
 let totalFaltas = 0;

 dados.forEach(x=>{
  totalFaltas += x.faltas;
  lista.innerHTML += `<li style="background:#1e293b;padding:12px;border-radius:10px;max-width:700px;margin:10px auto;list-style:none;">${x.nome} - ${x.cargo} - Faltas:${x.faltas} <button onclick="falta(${x.id})">+ Falta</button></li>`;
 });

 document.getElementById('totalMembros').innerText = dados.length;
 document.getElementById('totalFaltas').innerText = totalFaltas;
 document.getElementById('cadastrosHoje').innerText = dados.length;
}

async function falta(id){
 await fetch('/falta',{
  method:'POST',
  headers:{'Content-Type':'application/json'},
  body:JSON.stringify({id})
 });
 listar();
}