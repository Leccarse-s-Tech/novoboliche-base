# PROMPT.md — Instruções de Execução para o Agente de Terminal

## Contexto da Missão
Você é um Engenheiro de Front-End Sênior e Designer de Interfaces especialista em experiências web com forte identidade de marca. Sua tarefa é construir a nova Landing Page do **Novo Boliche (Vila Maria - São Paulo/SP)** do zero, substituindo um site legado feito em WordPress há 8 anos[cite: 4, 5, 6].

Antes de escrever qualquer linha de código, leia integralmente o arquivo `DESIGN.md` na raiz do projeto. Todas as decisões de cores, tipografia, espaçamento, anti-padrões de IA ("AI slop") e regras de negócio descritas no `DESIGN.md` são **obrigatórias e inegociáveis**.

---

## Regra Crítica de Negócio (LEIA COM ATENÇÃO)
O Novo Boliche **não realiza vendas, reservas automatizadas ou delivery pelo site**. 
- O site funciona 100% como uma **vitrine de experiência e conversão para o WhatsApp**.
- **NÃO CRIE** carrinhos de compra, botões de adicionar item no cardápio, calculadoras de divisão de conta ou modais de checkout.
- No cardápio, o usuário apenas visualiza as opções e os preços para já chegar com água na boca ou planejar a noite com os amigos[cite: 2, 3].
- Todo botão de ação (CTA) da página deve ser um link `<a>` direcionando para a URL oficial do WhatsApp (`https://api.whatsapp.com/send/?phone=5511925323393&text=...`) com uma mensagem pré-definida contextualizada (codificada em URL) e `target="_blank" rel="noopener noreferrer"`.

---

## Passo 1: Arquitetura e Stack Recomendada
1. Construa uma aplicação leve, rápida, sem dependências pesadas desnecessárias (pode utilizar HTML5 semântico + CSS moderno / Tailwind configurado estritamente com os tokens do `DESIGN.md` + JavaScript Vanilla modular, ou Vite + React/Next.js caso já exista um `package.json` iniciado no diretório — verifique o diretório atual antes de iniciar).
2. Configure as fontes do Google Fonts no `<head>`: `Bricolage Grotesque` (ou `Syne`), `Plus Jakarta Sans` e `JetBrains Mono`.
3. Extraia ou referencie a logo oficial do Novo Boliche preservando sua proporção original oval com o pino à direita[cite: 7].

---

## Passo 2: Estrutura Passo a Passo das Seções da Landing Page

### 1. Header / Navegação Fixa Inteligente
- Fundo `--bg-charcoal` (`#121110`) com borda inferior dupla estilo "Pin-Stripe" (`--strike-red` e `--pin-stripe-orange`)[cite: 7].
- **Esquerda:** Logo oficial do Novo Boliche[cite: 7].
- **Centro (Desktop):** Links de âncora suaves (`#pistas`, `#horarios`, `#cardapio`, `#eventos`, `#localizacao`).
- **Direita:** Botão de destaque `"Chamar no WhatsApp"` com indicador visual de atendimento e link direto:
  `https://api.whatsapp.com/send/?phone=5511925323393&text=Ol%C3%A1!%20Vim%20pelo%20site%20do%20Novo%20Boliche%20e%20gostaria%20de%20informa%C3%A7%C3%B5es.`
- **Mobile:** Menu compacto ou barra limpa com a Logo à esquerda e o CTA rápido de WhatsApp à direita + menu gaveta (drawer) acessível para as âncoras.

### 2. Hero Section (Imersão na Experiência de Pista)
- **Proibido layout genérico centralizado.** Use um grid assimétrico de 12 colunas no desktop (7 colunas de impacto tipográfico + 5 colunas de destaque visual/placares).
- **Selo de Tradição:** `"VILA MARIA • SÃO PAULO — HÁ MAIS DE 30 ANOS"`[cite: 5].
- **Headline Principal (H1):** Forte, direta e com personalidade, ex: `"10 PISTAS. TORRE DE CHOPP TRINCANDO E PIZZA COM BORDA DE CATUPIRY."`[cite: 2, 3, 5].
- **Subheadline:** `"Reúna até 6 pessoas por pista no boliche mais tradicional da Zona Norte. Pistas 100% automatizadas, lanches no pão brioche, porções caprichadas e clima perfeito para aniversários e resenhas."`[cite: 1, 2, 5].
- **Destaques Rápidos (Specs de Pista em formato de placar técnico, sem ícones clichês):**
  - `10 PISTAS` — Totalmente automatizadas (reposição de pinos e soma de pontos sem contato manual)[cite: 5].
  - `ATÉ 6 JOGADORES` — Capacidade máxima por pista (mínimo de 1 hora de jogo)[cite: 1, 5].
  - `+30 ANOS` — Tradição em boliche, gastronomia e eventos na Vila Maria[cite: 5].
- **CTAs do Hero:**
  - Primário (Verde WhatsApp): `"Garantir Minha Pista pelo WhatsApp"` -> Mensagem: `"Olá! Vim pelo site do Novo Boliche e quero saber como funciona para garantir uma pista."`
  - Secundário (Borda sólida creme): `"Ver Valores da Hora e Cardápio"` -> Scroll suave para `#horarios`.

### 3. Seção de Horários e Valores por Hora (`#horarios`)
- **IMPORTANTE:** O site antigo em WordPress exibia preços desatualizados[cite: 6]. Utilize **exclusivamente** a tabela oficial atualizada abaixo[cite: 1].
- Fundo `--bg-pin-ivory` (`#F5F0E6`) com tipografia escura `--text-on-light` para leitura imediata.
- **Cabeçalho da Seção:**
  - Título: `"HORÁRIOS E VALORES DAS PISTAS"`[cite: 1].
  - Avisos de Regra em destaque (estilo etiqueta de pista):
    - `"VALOR POR HORA DE JOGO"`[cite: 1]
    - `"TEMPO MÍNIMO: 1 HORA"`[cite: 5, 6]
    - `"MÁXIMO DE 6 PESSOAS POR PISTA"`[cite: 1, 5]
- **Cards de Dias da Semana (Grid responsivo: 1 col no mobile, 2 no tablet, 3 no desktop):**
  Cada card deve exibir o dia, o(s) turno(s) de horário, o valor em destaque com fonte mono/display e um botão que envia o usuário direto para o WhatsApp já mencionando aquele dia específico:

  1. **SEGUNDA-FEIRA**[cite: 1]
     - Horário: `Das 18h à 0h`[cite: 1]
     - Valor: **`R$ 89,00`** `/hora`[cite: 1]
     - CTA: `"Consultar Segunda no WhatsApp"` (Mensagem pré-definida mencionando Segunda-feira).

  2. **TERÇA A QUINTA-FEIRA**[cite: 1]
     - Horário: `Das 18h à 0h`[cite: 1]
     - Valor: **`R$ 109,00`** `/hora`[cite: 1]
     - CTA: `"Consultar Terça a Quinta no WhatsApp"` (Mensagem pré-definida mencionando Terça a Quinta).

  3. **SEXTA-FEIRA**[cite: 1]
     - Horário: `Das 17h à 1h`[cite: 1]
     - Valor: **`R$ 149,00`** `/hora`[cite: 1]
     - CTA: `"Consultar Sexta no WhatsApp"` (Mensagem pré-definida mencionando Sexta-feira).

  4. **SÁBADO** (Card com 2 faixas de horário claras)[cite: 1]
     - Turno Tarde: `Das 15h às 18h` — **`R$ 149,00`** `/hora`[cite: 1]
     - Turno Noite: `Das 18h às 2h` — **`R$ 189,00`** `/hora`[cite: 1]
     - CTA: `"Consultar Sábado no WhatsApp"` (Mensagem pré-definida mencionando Sábado).

  5. **DOMINGO** (Card com 2 faixas de horário claras)[cite: 1]
     - Turno Tarde: `Das 15h às 18h` — **`R$ 149,00`** `/hora`[cite: 1]
     - Turno Noite: `Das 18h à 0h` — **`R$ 180,00`** `/hora`[cite: 1]
     - CTA: `"Consultar Domingo no WhatsApp"` (Mensagem pré-definida mencionando Domingo).

  6. **FERIADOS E VÉSPERAS**[cite: 1]
     - Observação: `*(Exceto se cair aos sábados)*`[cite: 1]
     - Horário: `Das 16h à 1h`[cite: 1]
     - Valor: **`R$ 149,00`** `/hora`[cite: 1]
     - CTA: `"Consultar Feriado no WhatsApp"` (Mensagem pré-definida mencionando Feriado/Véspera).

- *Dica de UX diferenciada (Não-E-commerce):* Adicione uma nota simples abaixo da tabela: *"Juntando 6 amigos na segunda-feira, a hora da pista sai por menos de R$ 15 para cada um. Chame a galera no WhatsApp!"* (Apenas um texto fixo informativo, sem calculadoras ou inputs).

### 4. Seção de Experiência Gastronômica & Cardápio Interativo (`#cardapio`)
- **Conceito:** Mostrar que o Novo Boliche tem um bar e restaurante completo para comer na pista ou nas mesas[cite: 5].
- **Importante para Mobile:** Como o cardápio real possui mais de 100 itens numerados[cite: 2, 3], **não jogue uma lista vertical gigante de 5 metros de altura**. Crie uma interface de **Abas de Categoria (Tabs)** com rolagem horizontal suave no celular (`Pizzas`, `Lanches & Combos`, `Porções & Salgados`, `Chopp & Cervejas`, `Drinks, Batidas & Garrafas`, `Sem Álcool`) e um campo opcional de busca rápida por nome/número.
- **Lembrete de Regra:** Nenhum item do cardápio é clicável para compra. No final do cardápio, coloque uma barra de conversão: *"Deu água na boca? Venha curtir nossas pistas e pedir direto na mesa!"* com botão para o WhatsApp.

#### Dados Reais do Cardápio (Transcritos Fielmente):

**ABA 1: PIZZAS (Todas com borda de Catupiry)**[cite: 2]
*Banner de Preço Fixo no topo da aba:* **Pizza Brotinho: R$ 62,00 | Pizza Grande: R$ 90,00**[cite: 2]
- `001` **A moda** — Peito de peru com catupiry e mussarela[cite: 2]
- `002` **Americana** — Atum, palmito, ervilha coberto com mussarela[cite: 2]
- `003` **Atum** — Atum importado, cebola coberto com mussarela[cite: 2]
- `004` **Bacon** — Mussarela, bacon, tomate e cebola[cite: 2]
- `005` **Baiana** — Calabresa moída, ovos, cebola e pimenta[cite: 2]
- `006` **Calabresa** — Calabresa coberta com cebola[cite: 2]
- `007` **Brócolis** — Brócolis, alho frito, mussarela e bacon[cite: 2]
- `008` **Pepperoni** — Mussarela e pepperoni[cite: 2]
- `009` **Jardineira** — Presunto, palmito, ervilha, cebola coberta c/ mussarela[cite: 2]
- `010` **Marguerita** — Mussarela, queijo parmesão, tomate e manjericão[cite: 2]
- `011` **Mussarela** — Mussarela[cite: 2]
- `012` **Palmito** — Palmito, catupiry coberto com mussarela[cite: 2]
- `013` **Portuguesa** — Presunto, ovos, ervilhas, cebola e mussarela[cite: 2]
- `014` **Quatro Queijos** — Catupiry, mussarela, provolone e parmesão[cite: 2]
- `015` **Frango com Catupiry** — Frango desfiado com catupiry[cite: 2]
- `016` **Toscana** — Calabresa moída ou fatiada coberta c/ mussarela[cite: 2]

**ABA 2: LANCHES**[cite: 2]
- `017` **X-Tudo** (Pão brioche, hambúrguer, presunto, ovo, bacon, queijo, tomate e alface) — **R$ 27,00**[cite: 2]
- `018` **Double Burguer** (Pão brioche, dois hambúrgueres e queijo) — **R$ 26,00**[cite: 2]
- `019` **X-Bacon Salada** (Pão brioche, hambúrguer, bacon, queijo, tomate e alface) — **R$ 25,00**[cite: 2]
- `020` **X-Salada** (Pão brioche, hambúrguer, queijo, tomate e alface) — **R$ 23,00**[cite: 2]
- `021` **X-Bacon** (Pão brioche, hambúrguer, bacon e queijo) — **R$ 23,00**[cite: 2]
- `022` **X-Burguer** (Pão brioche, hambúrguer e queijo) — **R$ 21,00**[cite: 2]
- `023` **Americano** (Pão, presunto, ovo, queijo, alface e tomate) — **R$ 21,00**[cite: 2]
- `024` **Bauru** (Pão, presunto, queijo, tomate e orégano) — **R$ 16,00**[cite: 2]
- `025` **Misto Quente** (Pão, presunto e queijo) — **R$ 16,00**[cite: 2]
- `026` **Combo Especial** (1 X-Burguer + Refri Lata + Fritas) — **R$ 31,00**[cite: 2]

**ABA 3: PORÇÕES & SALGADOS**[cite: 2]
*Porções:*
- `027` **Batata Frita** — **R$ 35,00**[cite: 2]
- `028` **Polenta Palito (450g)** — **R$ 35,00**[cite: 2]
- `029` **Mandioca Frita (450g)** — **R$ 35,00**[cite: 2]
- `030` **Onion Ring (500g)** — **R$ 37,00**[cite: 2]
- `031` **Calabresa Acebolada** — **R$ 42,00**[cite: 2]
- `032` **Batata Especial** (com Cheddar e Bacon) — **R$ 46,00**[cite: 2]
- `033` **Salame** — **R$ 50,00**[cite: 2]
- `034` **Frango a Passarinho (1kg)** — **R$ 51,00**[cite: 2]
- `035` **Porção Novo Boliche** (Batata, calabresa, polenta / mandioca) — **R$ 51,00**[cite: 2]
- `036` **Provolone c/ Azeite** — **R$ 54,00**[cite: 2]
- `037` **Contra Filé** — **R$ 81,00**[cite: 2]

*Salgados (Porção com 20 unidades cada):*[cite: 2]
- `038` **Coxinha** — **R$ 44,00**[cite: 2]
- `039` **Bolinha de Queijo** — **R$ 44,00**[cite: 2]
- `040` **Risole** — **R$ 44,00**[cite: 2]
- `041` **Bolinho de Carne** — **R$ 44,00**[cite: 2]
- `042` **Porção Mista** (Coxinha, Risole, Bolinho de Carne/Queijo) — **R$ 44,00**[cite: 2]

**ABA 4: CHOPP & CERVEJAS**[cite: 3]
*Chopp:*
- `043` **Chopp Claro Tulipa (280ml)** — **R$ 14,00**[cite: 3]
- `044` **Torre de Chopp (1 litro)** — **R$ 51,00**[cite: 3]
- `045` **Torre de Chopp (2,5 litros)** — **R$ 101,00**[cite: 3]
- `046` **Torre de Chopp (3,5 litros)** — **R$ 138,00**[cite: 3]

*Cervejas:*
- `047` **Heineken Long Neck (330ml)** — **R$ 16,00**[cite: 3]
- `048` **Budweiser Long Neck (330ml)** — **R$ 15,00**[cite: 3]
- `049` **Eisenbahn Long Neck (330ml)** — **R$ 15,00**[cite: 3]
- `050` **Stella Long Neck (330ml)** — **R$ 15,00**[cite: 3]
- `051` **Skol Lata (350ml)** — **R$ 11,00**[cite: 3]
- `052` **Skol Beats** — **R$ 15,00**[cite: 3]
- `053` **Smirnoff Ice** — **R$ 16,00**[cite: 3]
- `054` **Cerveja sem Álcool** — **R$ 15,00**[cite: 3]

**ABA 5: DRINKS, BATIDAS, DOSES & COMBOS DE GARRAFA**[cite: 3]
*Combos de Garrafa para a Galera (Destaque Visual):*
- `100` **Combo Jack Daniel's:** 1 garrafa de Jack Daniel's + 4 Red Bull + 4 Gelo de Coco — **R$ 392,00**[cite: 3]
- `101` **Combo Gin Tanqueray:** 1 garrafa de Gin Tanqueray + 5 Red Bull + Frutas — **R$ 392,00**[cite: 3]
- `102` **Combo Black Label:** 1 garrafa de Black Label + 4 Red Bull + 4 Gelo de Coco — **R$ 392,00**[cite: 3]
- `103` **Combo Smirnoff:** 1 garrafa de Smirnoff (600ml) + 3 Red Bull + 3 Gelo de Coco — **R$ 112,00**[cite: 3]
- `104` **Combo Red Label:** 1 garrafa de Red Label + 4 Red Bull + 4 Gelo de Coco — **R$ 280,00**[cite: 3]

*Caipirinhas, Gin & Drinks:*
- `065` **Caipirinha Absolut** (kiwi, morango, limão ou maracujá) — **R$ 34,00**[cite: 3]
- `066` **Caipirinha Smirnoff** — **R$ 25,00**[cite: 3]
- `067` **Caipirinha Saquê** — **R$ 23,00**[cite: 3]
- `068` **Caipirinha Pinga 51 / Velho Barreiro** — **R$ 18,00**[cite: 3]
- `093` **Gin (Taça)** (Gin Tanqueray, Red Bull tropical e frutas) — **R$ 40,00**[cite: 3]
- `069` **Campari** — **R$ 20,00**[cite: 3]
- `070` **Cuba Livre** — **R$ 18,00**[cite: 3]
- `094` **Red Bull** — **R$ 18,00**[cite: 3]

*Batidas Com Álcool:*
- `055` **Batida de Sorvete de Coco** — **R$ 18,00**[cite: 3]
- `056` **Batida de Morango** — **R$ 18,00**[cite: 3]
- `057` **Batida de Abacaxi** — **R$ 18,00**[cite: 3]
- `058` **Batida de Maracujá** — **R$ 18,00**[cite: 3]
- `059` **Espanhola** — **R$ 18,00**[cite: 3]
- `060` **Frutas com Champagne** — **R$ 18,00**[cite: 3]

*Copo (Gelo c/ Red Bull):*
- `087` **Chivas Regal** — **R$ 51,00** | `088` **Black Label** — **R$ 51,00** | `089` **Jack Daniels** — **R$ 51,00**[cite: 3]
- `090` **Red Label** — **R$ 40,00** | `091` **White Horse** — **R$ 40,00** | `092` **Passport** — **R$ 28,00**[cite: 3]

*Doses para Esquentar & Vinhos:*
- `071` **Tequila** — **R$ 21,00** | `072` **Licor 43** — **R$ 28,00** | `073` **Amarula** — **R$ 23,00** | `074` **Cachaça Seleta** — **R$ 17,00** | `094` **Chivas** — **R$ 28,00**[cite: 3]
- `077` **Vinho San Martin (750ml)** — **R$ 45,00** | `078` **Taça de Vinho (250ml)** — **R$ 9,00**[cite: 3]

**ABA 6: SEM ÁLCOOL, SUCOS & REFRIGERANTES**[cite: 3]
- `061` a `064` **Batidas Sem Álcool** (Coco, Morango, Abacaxi ou Maracujá) — **R$ 18,00**[cite: 3]
- `079` **Sucos Naturais** (abacaxi, goiaba, limão, maracujá, laranja, morango, acerola, manga, abacaxi c/ hortelã) — **R$ 12,00**[cite: 3]
- `080` **Sucos com Leite** — **R$ 14,00**[cite: 3]
- `086` **Refrigerante Lata (350ml)** (Coca, Coca Zero, Soda, Fanta, Fanta Uva, Tubaína, Guaraná, Schweppes) — **R$ 9,00**[cite: 3]
- `081` **H2O (500ml)** — **R$ 9,00** | `082` **Água Tônica** — **R$ 9,00** | `083` **Água de Coco** — **R$ 8,00**[cite: 3]
- `084` **Água sem Gás** — **R$ 6,00** | `085` **Água com Gás** — **R$ 6,00**[cite: 3]

*(Incluir aviso legal discreto no rodapé do cardápio: "Proibida a venda de bebidas alcoólicas para menores de 18 anos.")*[cite: 3]

### 5. Seção de Aniversários, Confraternizações e Eventos (`#eventos`)
- Fundo `--bg-mahogany` (`#2B0C0E`) com detalhes em `--strike-red` e `--pin-stripe-orange`[cite: 7].
- **Foco:** Mostrar que o Novo Boliche é o lugar certo para comemorar aniversários (infantis e adultos), happy hours e confraternizações de empresas de forma personalizada[cite: 2, 5].
- **Chamada:** `"VENHA FAZER SEU EVENTO CONOSCO"`[cite: 2].
- **Benefícios claros em blocos editoriais (sem textos longos):**
  - **Aniversários de Crianças e Adultos:** Junte a família e os amigos nas pistas com pacotes personalizados de pistas + salgados, pizzas e chopp[cite: 2, 3, 5].
  - **Confraternização de Empresas:** 10 pistas automatizadas capazes de receber até 60 jogadores simultâneos (6 por pista) para campeonatos internos da equipe[cite: 1, 5].
- **CTA Exclusivo de Eventos:** `"Planejar Meu Aniversário / Evento pelo WhatsApp"` -> Mensagem: `"Olá! Gostaria de saber como funciona para comemorar meu aniversário / fazer um evento no Novo Boliche."`

### 6. Localização, Contato e Rodapé Completo (`#localizacao`)
- **Endereço Completo:** `Av. Guilherme Cotching, 1086 - Vila Maria, São Paulo - SP, 02111-001` (Fácil acesso na Zona Norte).
- **Mapa Interativo / Card de Rota:** Embed limpo do Google Maps apontando para o Novo Boliche + botão `"Abrir Rota no Google Maps"` (`https://www.google.com/maps/place/Novo+Boliche/@-23.5175295,-46.5909141,17.03z/data=!4m15!1m8!3m7!1s0x94ce5f339826ea7f:0x29f5d8d3adbd0718!2sAv.+Guilherme+Cotching,+1086+-+Vila+Maria,+S%C3%A3o+Paulo+-+SP,+02111-001!3b1!8m2!3d-23.519653!4d-46.5904259!16s%2Fg%2F11bw44317v!3m5!1s0x94ce5f3420e9b5c3:0xa0008fba1c5f0e2e!8m2!3d-23.5166441!4d-46.5886138!16s%2Fg%2F11bwn24wr_`).
- **Canais Oficiais:**
  - **WhatsApp Principal (CTAs):** `https://api.whatsapp.com/send/?phone=5511925323393&text=Ol%C3%A1!%20Vim%20pelo%20site%20do%20Novo%20Boliche.`
  - **Instagram:** `@novo_boliche` (`https://www.instagram.com/novo_boliche/`)[cite: 1].
  - **Telefones Fixos:** `(11) 2954-9071` / `(11) 2362-8092`[cite: 2].

---

## Passo 3: Checklist de Verificação Antes de Finalizar
Antes de dar a tarefa como concluída, valide no código:
1. [ ] **Zero E-commerce:** Existe algum botão de carrinho, seletor de quantidade ou calculadora? Se sim, remova imediatamente.
2. [ ] **Links de WhatsApp:** Todos os botões redirecionam para `5511925323393` com um parâmetro `text=` amigável e contextual?
3. [ ] **Fidelidade de Dados:** Os preços das pistas seguem a tabela atualizada (`R$ 89` seg, `R$ 109` ter-qui, `R$ 149` sex/feriados/tardes de fim de semana, `R$ 189` sáb noite, `R$ 180` dom noite)[cite: 1]?
4. [ ] **Teste de Viewport:** Em `320px` (celular pequeno), `390px` (celular médio), `768px` (tablet) e `1440px` (desktop), as abas do cardápio e os cards de horário funcionam sem `overflow-x` indesejado no `body`?
5. [ ] **Auditoria Anti-AI Slop:** A paleta usa o vermelho escarlate, bordô escuro, creme pino e grafite da logo[cite: 7] em vez de roxo/azul neon? Não há emojis soltos nos títulos?