# 🚀 Relatório e Guia de Otimização PageSpeed - ninja0k.com

Este documento detalha os problemas encontrados no relatório do PageSpeed Insights para o site `ninja0k.com/en` na versão Desktop e fornece um plano de ação estruturado para otimização de performance, acessibilidade e estabilidade visual.

---

## 📊 1. Diagnóstico das Métricas Principais

### Total Blocking Time (TBT - Tempo Total de Bloqueio)

* **Status:** Ruim
* **O que significa:** O tempo total em que a página fica "congelada" e não consegue responder a interações do usuário (como rolar a tela ou clicar) durante o carregamento.
* **Causa no seu site:** O navegador está ocupado processando scripts JavaScript pesados ou recalculando o layout (Forced Reflow), bloqueando a thread principal.

### Speed Index (SI - Índice de Velocidade)

* **Status:** Ruim
* **O que significa:** Mede a rapidez com que o conteúdo visual da página é exibido.
* **Causa no seu site:** Arquivos CSS bloqueando a renderização inicial e o carregamento de mídias muito pesadas na primeira dobra.

### Cumulative Layout Shift (CLS - Mudança Cumulativa de Layout)

* **Status:** Crítico (Pontuação de 0.832)
* **O que significa:** Mede a estabilidade visual. Um CLS alto indica que os elementos da página estão "pulando" ou mudando de lugar enquanto carregam. O aceitável é abaixo de 0.1.
* **Causa no seu site:** A injeção da seção de projetos e o carregamento do SVG de fundo (`PentagonTexture`) sem dimensões reservadas.

---

## 🛠️ 2. Plano de Ação e Soluções

### 🔴 Prioridade Máxima: Estabilidade Visual (Corrigir CLS)

O maior ofensor de layout no seu site está na seção de projetos.

* **Alvos:** `<section id="projects">` e `<svg class="PentagonTexture-module__TfEylG__texture">`.
* **Como Resolver:**
  1. Defina `min-height` ou dimensões fixas (ex: `aspect-ratio`) no CSS para o contêiner principal dos projetos antes do conteúdo carregar.
  2. Reserve o espaço exato na tela para o SVG da textura para garantir que ele não empurre o restante do conteúdo para baixo quando for renderizado pelo navegador.

### 🟠 Otimização de Imagens e Mídias (Melhorar Speed Index)

* **Substituir GIF por Vídeo:** O arquivo `/images/01-cut-workflow.gif` pesa 1.3 MB.
  * **Solução:** Converta-o para `.mp4` ou `.webm` e use a tag `<video autoplay loop muted playsinline>`. Isso reduzirá drasticamente o tamanho do arquivo.
* **Redimensionamento de Imagem:** A imagem `/images/profile.jpeg` é baixada no tamanho 384x384, mas exibida a 220x220.
  * **Solução:** Ajuste as propriedades `sizes` do seu componente de imagem (Next.js Image) para servir o tamanho correto, economizando banda.
* **Link Quebrado (Erro 404):** O recurso `/images/wot.mp4` falhou ao carregar (`net::ERR_CONNECTION_FAILED`).
  * **Solução:** Verifique o caminho no servidor, o nome do arquivo, ou remova a tag se o vídeo não for mais utilizado.

### 🟡 Desempenho de Código (Melhorar TBT)

* **Remover Código Legado (Polyfills):** O arquivo `.js` final está enviando polyfills para `Array.at`, `Array.flat` e `Object.hasOwn`.
  * **Solução:** Atualize a configuração do seu *bundler* (ex: Babel/SWC no Next.js) focando em navegadores modernos (`browserslist`). Não é necessário enviar código extra para recursos que os navegadores atuais já suportam nativamente.
* **Mitigar "Forced Reflow":** O script `2btxhpcqaky09.js` está forçando a re-renderização da página ao consultar propriedades geométricas logo após modificar o DOM.
  * **Solução:** Evite ler medidas de elementos (como `offsetWidth`) imediatamente após mudar uma classe. Tente agrupar as leituras do DOM e usar `requestAnimationFrame`.
* **Deferir CSS Bloqueante:** Os arquivos `00eaez...css` e `394ta...css` estão bloqueando a primeira pintura da tela (Render-blocking).
  * **Solução:** Faça o *inline* do CSS estritamente necessário para a primeira visualização da tela e carregue o restante de forma assíncrona.

### 🟢 Acessibilidade e SEO

* **Links Duplicados e Genéricos:** Existem 4 links com o texto exato "Visit Github" apontando para projetos diferentes (Speedy, Wash Buddy, World of Toilets, Capo).
  * **Solução:** Leitores de tela não saberão a diferença entre eles. Adicione um atributo `aria-label` descritivo (ex: `aria-label="Visit the Speedy project repository on GitHub"`).
* **Contraste de Texto:** O PageSpeed apontou problemas de contraste (provavelmente nos números da lista: `01 Speedy`, `02 Wash Buddy`, etc.).
  * **Solução:** Aumente a diferença de cor entre o texto e o fundo para garantir que a taxa de contraste atenda à diretriz WCAG de 4.5:1.
