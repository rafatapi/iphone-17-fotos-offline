const recipes = [
  { id:'dia', icon:'☀', name:'Dia', image:'comida.png', lens:'1x', mode:'Foto • 24 MP', light:'Sombra clara ou sol lateral', title:'Cores bonitas sem estourar o céu', prepare:['Flash: Desativado','Resolução: 24 MP','Estilo: Padrão','Grade + Nível: Ativados'], adjust:['Toque no assunto','Exposição inicial: −0,3','Céu branco? desça até −0,7','Segure para Bloqueio AE/AF'], steps:['Posicione o sol de lado ou atrás de você.','Componha no 1x; use 0,5x só para mostrar mais ambiente.','Toque no assunto e ajuste o pequeno sol.','Confira horizonte e bordas antes de disparar.'], avoid:'Sol forte diretamente no rosto. Procure sombra voltada para uma área clara.' },
  { id:'noite', icon:'☾', name:'Noite', image:'noite-cidade.png', lens:'1x', mode:'Foto • Modo Noite', light:'Apoio ou tripé', title:'Noite clara sem parecer artificial', prepare:['Flash: Desativado','Live Photo: Desativada','Lente: 1x','Temporizador: 3 s com apoio'], adjust:['Toque no ponto iluminado','Exposição: −0,3 a −0,7','Modo Noite: maior tempo disponível','Alinhe as miras se aparecerem'], steps:['Apoie o aparelho antes de definir o tempo.','Abra Controles › Modo Noite e escolha o maior tempo disponível.','Mantenha pressionado no assunto para travar AE/AF.','Dispare e não toque até o contador terminar.'], avoid:'Flash em paisagens, 0,5x quando estiver muito escuro e zoom acima de 2x.' },
  { id:'retrato', icon:'◉', name:'Retrato', image:'retrato.png', lens:'2x', mode:'Retrato • Luz Natural', light:'Sombra clara ou fim de tarde', title:'Pessoa nítida, fundo suave', prepare:['Modo: Retrato','Lente: 2x','Iluminação: Luz Natural','Flash: Desativado'], adjust:['Toque no olho mais próximo','Exposição inicial: −0,3','Bloqueio AE/AF se ficar parada','Profundidade: ajuste depois'], steps:['Afaste a pessoa pelo menos dois metros do fundo.','Afaste-se e use 2x para evitar distorção facial.','Toque no olho e reduza levemente a exposição.','Faça uma foto vertical e outra horizontal.'], avoid:'0,5x próximo ao rosto, fundo colado na pessoa e cabelos misturados ao fundo.' },
  { id:'macro', icon:'✿', name:'Macro', image:'macro.png', lens:'0,5x automático', mode:'Foto • Macro', light:'Luz abundante e suave', title:'Detalhes que o olho quase não vê', prepare:['Controle de Macro: Ativado','Flash: Desativado','24 MP; 48 MP só com muita luz','Temporizador: 3 s com apoio'], adjust:['Aguarde aparecer a flor','Toque no detalhe principal','Exposição: −0,3','Bloqueio AE/AF para objeto parado'], steps:['Aproxime devagar até a flor indicar a troca para macro.','Se ficar desfocado, recue um pouco ou toque em 0,5x.','Mantenha o telefone paralelo ao detalhe importante.','Faça várias fotos mudando milímetros de distância.'], avoid:'Cobrir a luz, usar 48 MP em pouca luz e perseguir insetos bruscamente.' },
  { id:'acao', icon:'⚡', name:'Movimento', image:'movimento.png', lens:'1x', mode:'Sequência', light:'Luz forte', title:'Pegue o instante certo', prepare:['Volume + para Série: Ativado','Lente: 1x','Flash: Desativado','Live Photo: opcional'], adjust:['Toque no rosto ou animal','Exposição: 0 a −0,3','Trave AE/AF onde ele passará','Modo Noite: Desativado'], steps:['Antecipe o caminho e deixe espaço à frente do movimento.','Trave foco no local por onde o assunto passará.','Arraste o disparador para a esquerda ou segure Volume +.','Em Fotos › Série › Selecionar, guarde os melhores quadros.'], avoid:'Zoom digital, ambiente escuro e acompanhar o movimento de forma brusca.' },
  { id:'longe', icon:'⌁', name:'De longe', image:'lentes-05-1-2.png', lens:'2x', mode:'Foto • 24 MP', light:'Dia ou muita luz', title:'Aproxime sem perder qualidade', prepare:['Lente: 2x','Resolução: 24 MP','48 MP: somente com muita luz','Grade + Nível: Ativados'], adjust:['Toque no assunto distante','Exposição: −0,3 em sol forte','Bloqueio AE/AF','Temporizador: 3 s com apoio'], steps:['Use 2x antes de recorrer ao zoom digital.','Apoie os braços e segure com as duas mãos.','Com muita luz, ative 48 MP para ter margem de recorte.','Faça três fotos e escolha a mais nítida.'], avoid:'Zoom de 3x a 10x quando puder se aproximar; ele é digital.' },
  { id:'selfie', icon:'☺', name:'Selfie', image:'selfie.png', lens:'Frontal', mode:'Foto • Center Stage', light:'Rostos voltados para a luz', title:'Todo mundo cabe e ninguém fica torto', prepare:['Flash de tela: Desativado de dia','Temporizador: 3 s em grupo','Live Photo: Ativada','Horizontal para grupos'], adjust:['Toque em um rosto','Exposição: −0,3 com céu claro','Aparelho um pouco acima dos olhos','Deixe espaço nas bordas'], steps:['Fiquem voltados para uma janela ou para o céu aberto.','Gire o aparelho; o Center Stage adapta o enquadramento.','Use Volume + ou temporizador para evitar tremor.','Na Live Photo, escolha depois o quadro em que todos olharam.'], avoid:'Luz forte atrás do grupo, câmera abaixo do queixo e rostos nas bordas.' },
  { id:'comida', icon:'◇', name:'Comida', image:'comida.png', lens:'1x ou 2x', mode:'Foto • 24 MP', light:'Janela lateral', title:'Comida com textura e cor natural', prepare:['Flash: Desativado','1x de cima ou 2x a 45°','Estilo: Padrão','Grade + Nível: Ativados'], adjust:['Toque no alimento principal','Exposição: −0,3 a −0,7','Bloqueio AE/AF','Balanço de branco: automático'], steps:['Apague a luz do teto e aproxime o prato da janela.','Escolha 1x para mesa completa ou 2x para um prato.','Toque na área mais clara e baixe a exposição.','Use o nível para uma foto perfeitamente de cima.'], avoid:'Flash, mistura de luz amarela com janela e 0,5x muito perto do prato.' },
  { id:'lua', icon:'●', name:'Lua', image:'noite-cidade.png', lens:'2x', mode:'Foto • Modo Noite desligado', light:'Tripé ou apoio firme', title:'Lua com forma, textura e contexto', prepare:['Lente: 2x','Flash: Desativado','Modo Noite: Desativado','Live Photo: Desativada','Temporizador: 3 s'], adjust:['Segure sobre a lua: Bloqueio AE/AF','Comece em −2; refine de −1,3 a −2,7','Branca? reduza ainda mais','Não use exposição noturna longa'], steps:['Apoie o iPhone e enquadre a lua com árvore, prédio ou pessoa.','Desative o Modo Noite tocando no ícone da lua.','Toque e segure na lua até aparecer Bloqueio AE/AF.','Baixe a exposição até enxergar o círculo e alguma textura; use o temporizador.'], avoid:'Modo Noite longo e zoom 10x: ambos tendem a produzir uma lua branca ou sem detalhe. O 2x é o limite de melhor qualidade.' }
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
    <div class="manual-settings"><section><h4>1. Prepare</h4>${item.prepare.map(x=>`<span>✓ ${x}</span>`).join('')}</section><section><h4>2. Ajuste na tela</h4>${item.adjust.map(x=>`<span>◎ ${x}</span>`).join('')}</section></div>
    <h4 class="shoot-title">3. Fotografe</h4><ol>${item.steps.map(step => `<li>${step}</li>`).join('')}</ol><p class="avoid"><b>Evite:</b> ${item.avoid}</p><small class="value-note">Os valores de exposição são pontos de partida. Observe a tela e refine conforme a luz.</small></div>`;
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
