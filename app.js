const recipes = [
  { id:'dia', icon:'☀', name:'Dia', image:'comida.png', lens:'1x', mode:'Foto • 24 MP', light:'De costas para o sol ou na sombra clara', title:'Cores bonitas sem estourar o céu', steps:['Limpe a lente e escolha 1x.','Toque no assunto principal.','Se o céu perder detalhes, arraste o sol um pouco para baixo.','Use 0,5x somente quando realmente precisar mostrar mais.'], avoid:'Evite o sol forte diretamente no rosto; procure sombra perto de uma área aberta.' },
  { id:'noite', icon:'☾', name:'Noite', image:'noite-cidade.png', lens:'1x', mode:'Foto • Modo Noite automático', light:'Apoie e fique parado', title:'Noite clara sem parecer artificial', steps:['Prefira 1x, que recebe mais luz.','Quando a lua amarela aparecer, o Modo Noite está ativo.','Apoie o aparelho e toque no assunto.','Fotografe e não mexa até o contador terminar.'], avoid:'Não use flash em paisagens e evite zoom digital.' },
  { id:'retrato', icon:'◉', name:'Retrato', image:'retrato.png', lens:'2x', mode:'Retrato ou Foto', light:'Sombra clara ou fim de tarde', title:'Pessoa nítida, fundo suave', steps:['Afaste-se e selecione 2x.','Toque no olho mais próximo.','No modo Retrato, ajuste o “f” depois, em Fotos › Editar.','Deixe distância entre a pessoa e o fundo para aumentar o desfoque.'], avoid:'Não use 0,5x perto do rosto e observe cabelos contra fundos complicados.' },
  { id:'macro', icon:'✿', name:'Macro', image:'macro.png', lens:'0,5x automático', mode:'Foto • Macro 48 MP', light:'Luz suave e abundante', title:'Detalhes que o olho quase não vê', steps:['Aproxime o iPhone devagar, até cerca de poucos centímetros.','A câmera muda para a ultra-angular; aparece uma flor.','Toque no detalhe e reduza levemente a exposição.','Prenda a respiração e faça várias fotos.'], avoid:'Não cubra a luz com o telefone e não persiga insetos com movimentos rápidos.' },
  { id:'acao', icon:'⚡', name:'Movimento', image:'movimento.png', lens:'1x', mode:'Sequência', light:'Quanto mais luz, melhor', title:'Pegue o instante certo', steps:['Antecipe onde o assunto vai passar.','Use 1x e toque no rosto ou animal.','Arraste o disparador para a esquerda e segure para uma sequência.','Em Fotos, abra a série, toque em Selecionar e guarde os melhores quadros.'], avoid:'Evite zoom alto e Modo Noite para ação rápida.' },
  { id:'longe', icon:'⌁', name:'De longe', image:'lentes-05-1-2.png', lens:'2x', mode:'Foto • boa luz', light:'Dia ou ambiente muito iluminado', title:'Aproxime sem perder qualidade', steps:['Escolha 2x para pessoas, placas e detalhes.','Apoie os braços no corpo.','Toque no assunto e faça 2 ou 3 fotos.','Se ainda estiver longe, fotografe em 48 MP e recorte depois.'], avoid:'De 3x a 10x é zoom digital: use apenas quando não puder chegar perto.' },
  { id:'selfie', icon:'☺', name:'Selfie', image:'selfie.png', lens:'Frontal', mode:'Foto • Center Stage', light:'Olhe para uma fonte de luz', title:'Todo mundo cabe e ninguém fica torto', steps:['Vire para a câmera frontal e mantenha o aparelho um pouco acima dos olhos.','Gire para horizontal em grupos grandes.','A câmera ajusta o enquadramento; confira as bordas.','Use o botão de volume para disparar sem esticar o dedo.'], avoid:'Evite luz forte atrás do grupo e pessoas coladas às bordas.' },
  { id:'comida', icon:'◇', name:'Comida', image:'comida.png', lens:'1x ou 2x', mode:'Foto', light:'Perto de uma janela', title:'Comida com textura e cor natural', steps:['Apague o flash e posicione o prato ao lado da janela.','Use 1x de cima ou 2x a 45 graus.','Toque na parte mais importante do prato.','Abaixe um pouco a luz para preservar brilho e textura.'], avoid:'Evite misturar luz amarela do teto com a luz da janela.' },
  { id:'lua', icon:'●', name:'Lua', image:'noite-cidade.png', lens:'2x', mode:'Foto', light:'Apoio obrigatório', title:'Lua com forma e uma boa composição', steps:['Use 2x e apoie o telefone em algo firme.','Toque na lua e arraste o sol bastante para baixo.','Trave foco/exposição mantendo o dedo sobre a lua.','Inclua árvore, prédio ou pessoa: a cena fica mais interessante que a lua isolada.'], avoid:'Não espere crateras detalhadas: o modelo normal não tem teleobjetiva longa.' }
];

const tabs = document.querySelector('.recipe-tabs');
const panel = document.querySelector('#recipePanel');

function showRecipe(id) {
  const item = recipes.find(r => r.id === id) || recipes[0];
  document.querySelectorAll('.recipe-tab').forEach(button => {
    const selected = button.dataset.id === item.id;
    button.classList.toggle('active', selected);
    button.setAttribute('aria-selected', selected);
  });
  panel.innerHTML = `<div class="recipe-image"><img src="./images/${item.image}" alt="Exemplo de fotografia: ${item.name}"></div>
    <div class="recipe-content"><span class="eyebrow">Receita ${item.name}</span><h3>${item.title}</h3>
    <div class="recipe-meta"><span><small>Lente</small><b>${item.lens}</b></span><span><small>Modo</small><b>${item.mode}</b></span><span><small>Luz</small><b>${item.light}</b></span></div>
    <ol>${item.steps.map(step => `<li>${step}</li>`).join('')}</ol><p class="avoid"><b>Evite:</b> ${item.avoid}</p></div>`;
}

recipes.forEach((item, index) => {
  const button = document.createElement('button');
  button.className = `recipe-tab${index === 0 ? ' active' : ''}`;
  button.dataset.id = item.id;
  button.setAttribute('role', 'tab');
  button.setAttribute('aria-selected', index === 0);
  button.innerHTML = `<span>${item.icon}</span>${item.name}`;
  button.addEventListener('click', () => showRecipe(item.id));
  tabs.appendChild(button);
});
showRecipe(recipes[0].id);

document.querySelectorAll('a[href^="#"]').forEach(link => link.addEventListener('click', () => {
  document.querySelectorAll('.dock a').forEach(a => a.classList.toggle('active', a === link));
}));

let deferredPrompt;
const installButton = document.querySelector('#installButton');
window.addEventListener('beforeinstallprompt', event => {
  event.preventDefault(); deferredPrompt = event; installButton.hidden = false;
});
installButton.addEventListener('click', async () => {
  if (!deferredPrompt) { document.querySelector('#offline').scrollIntoView({behavior:'smooth'}); return; }
  deferredPrompt.prompt(); await deferredPrompt.userChoice; deferredPrompt = null; installButton.hidden = true;
});

if ('serviceWorker' in navigator) window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js'));
