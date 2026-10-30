# PROMPT.md — Plano de Refatoração Completa: Novo Boliche Vila Maria

## 1. Diagnóstico do que Precisa ser Corrigido Imediatamente
Você vai refatorar/reconstruir a Landing Page do **Novo Boliche (Vila Maria - São Paulo/SP)** seguindo rigorosamente o novo `DESIGN.md`.

### ERROS GRAVES DA VERSÃO ANTERIOR QUE ESTÃO PROIBIDOS AGORA:
1. **CANCELE O MODO DARK:** O cliente detestou o fundo preto (`#121110`). Toda a página agora deve usar o tema claro, quente e acolhedor definido no `DESIGN.md` (`--bg-ivory-main: #FAF6EE`, `--bg-maple-tint: #F1E7D6` e cards em `#FFFFFF`).
2. **CORRIJA O CONTRASTE DOS CARDS DE PREÇO:** Na versão anterior, os cards de Sexta-Feira e Sábado ficaram com fundo branco e texto branco/creme (ilegíveis), e o box de preço de Terça a Quinta ficou cinza claro com texto branco. **Regra absoluta:** Todo card tem corpo `#FFFFFF` e textos/preços em `#181412` (preto expresso) ou `#C41E14` (vermelho escuro). Se quiser destacar Sexta e Sábado, pinte APENAS a faixa de cabeçalho no topo do card de `#C41E14` com título em `#FFFFFF` e adicione uma borda `2px solid #C41E14` com sombra `5px 5px 0px #C41E14`.
3. **REMOVA TODAS AS INFORMAÇÕES INVENTADAS (ZERO ALUCINAÇÃO):**
   - **REMOVA** imediatamente qualquer menção a *"Sapatos higienizados: R$ 7,00 (par alugado)"* dos cards de preço e da página. Esse valor NÃO existe nos materiais oficiais!
   - **REMOVA** o FAQ antigo que inventava regras sobre *"bumpers automáticos que sobem sozinhos"*, *"fornecemos pratinhos e garfinhos"* ou *"estacionamento conveniado"*.
   - **NUNCA** invente preços, taxas extras, regras de reserva ou políticas que não estejam explicitamente listadas neste documento.
4. **ZERO E-COMMERCE:** Mantenha a regra de ouro: nenhuma venda é feita pelo site. Nada de carrinho, nada de calculadora de horas, nada de botão de adicionar pizza. Toda conversão vai para o WhatsApp oficial (`5511925323393`) com mensagem pré-definida.

---

## 2. Estrutura Passo a Passo da Nova Página (Foco em Experiência e Tradição)

### SEÇÃO 1: Header Sólido e Acolhedor
- Fundo em Bordô da Logo (`#3D0E11`) com a linha dupla do pino (`#C41E14` e `#E04E22`) na base.
- **Esquerda:** Imagem real da logo do Novo Boliche (`<img>` com fundo transparente/oval original).
- **Centro:** Navegação para `#experiencia`, `#tradicao`, `#horarios`, `#cardapio`, `#eventos`, `#localizacao`.
- **Direita:** Botão em Verde WhatsApp (`#168B42`) com texto branco puro: `"Agendar ou Tirar Dúvidas"` -> Link para WhatsApp.

### SEÇÃO 2: Hero Section — Tradição de +30 Anos & A Experiência do Boliche
- Fundo `--bg-ivory-main` (`#FAF6EE`) com detalhes gráficos inspirados nas pistas de madeira e nos pinos.
- **Badge de Tradição e Prova Social no Topo:**
  `"HÁ MAIS DE 30 ANOS NA VILA MARIA • ★ 4,3 NO GOOGLE (+2.300 AVALIAÇÕES)"`
- **Headline Principal (H1 em `#181412` com destaque em `#C41E14`):**
  `"MAIS DE 30 ANOS REUNINDO FAMÍLIAS E AMIGOS NAS MELHORES PISTAS DA ZONA NORTE."`
- **Subtítulo Sensorial:**
  `"10 pistas 100% automatizadas para até 6 jogadores, pizzas grandes saindo do forno com borda de Catupiry, lanches no pão brioche e torre de chopp trincando. Aqui a sua única preocupação é derrubar os pinos."`
- **Botões de Ação (CTAs):**
  - Botão Principal (`#168B42`, texto `#FFFFFF`): `"Chamar no WhatsApp para Jogar"` -> `https://api.whatsapp.com/send/?phone=5511925323393&text=Ol%C3%A1!%20Vim%20pelo%20site%20do%20Novo%20Boliche%20e%20quero%20saber%20como%20funciona%20para%20jogar!`
  - Botão Secundário (Fundo `#FFFFFF`, borda `2px solid #181412`, texto `#181412`): `"Ver Horários e Cardápio Completo"` -> âncora para `#horarios`.
- **3 Blocos de Experiência lado a lado (Visual de Placar Retrô Claro):**
  1. **10 Pistas Automatizadas:** Reposição de pinos e contagem de pontos no telão totalmente automáticas, sem nenhum contato manual. Cabem até 6 pessoas por pista.
  2. **Bar & Pizzaria Completa:** Não é só petisco: temos 16 sabores de pizza com borda de Catupiry, hambúrgueres no brioche, porções fartas e torres de chopp de até 3,5L.
  3. **3 Décadas de História:** Mais de 30 anos trabalhando com boliche na Vila Maria com dedicação, ambiente familiar e estrutura para aniversários de crianças e adultos.

### SEÇÃO 3: A Experiência Completa ("Como é uma noite no Novo Boliche") (`#experiencia`)
- Fundo `--bg-maple-tint` (`#F1E7D6`).
- Crie 3 cards visuais grandes e convidativos mostrando a jornada real do cliente (foco em despertar vontade de ir, sem textão):
  - **Passo 01 — Junte a Turma (Até 6 por Pista):** Reúna a família, o casal de amigos ou o pessoal do trabalho. Com até 6 jogadores dividindo a mesma pista, a diversão fica super acessível para todo mundo.
  - **Passo 02 — Peça Direto na Pista:** Enquanto rola a disputa pelo strike, nossa cozinha manda pizzas quentinhas, porção de frango a passarinho, batata com cheddar e bacon, além de chopp claro, drinks e batidas.
  - **Passo 03 — Comemore Seu Evento:** Do aniversário infantil ao happy hour da empresa, temos espaço de sobra e tradição para transformar sua festa em um campeonato inesquecível.

### SEÇÃO 4: O Que Dizem Nossos Clientes + Tradição na Vila Maria (`#tradicao`)
- Fundo `--bg-ivory-main` (`#FAF6EE`).
- **Cabeçalho de Autoridade Real (Dados Reais do Google Maps):**
  - Destaque grande: **`4,3 ★ de 5,0`** — Baseado em **mais de 2.300 avaliações reais no Google Maps**.
  - Selos reais verificados do estabelecimento:
    - `✓ Mais de 30 anos de tradição na Vila Maria`
    - `✓ Reconhecido no Google como Ideal para Aniversários Infantis e Famílias`
    - `✓ Entrada com Acessibilidade para Cadeira de Rodas`
    - `✓ Aceita Cartões de Crédito, Débito e Pagamento por Aproximação (NFC)`
- **Destaques dos Elogios Reais dos Frequentadores (Cards de Prova Social Positiva):**
  - **Tradição que atravessa gerações:** *"Clientes destacam o clima nostálgico e acolhedor de um boliche clássico que faz parte da história da Zona Norte há mais de três décadas, perfeito para levar os filhos e reunir a família."*
  - **Gastronomia que surpreende:** *"As avaliações elogiam o cardápio variado de bar e restaurante — com destaque para as pizzas com borda de Catupiry, as porções generosas para dividir e o chopp sempre gelado."*
  - **Diversão em grupo e Aniversários:** *"Muito elogiado como ponto de encontro para comemorar aniversários de crianças e adultos, com 10 pistas automatizadas que garantem boas risadas e atendimento dedicado."*

### SEÇÃO 5: Horários de Funcionamento e Valores da Hora (`#horarios`)
- Fundo `--bg-maple-tint` (`#F1E7D6`).
- **ATENÇÃO AO CONTRASTE:** Todos os 6 cards devem ter fundo branco (`#FFFFFF`), borda `2px solid #181412` e sombra sólida `4px 4px 0px #181412` (ou `#C41E14` nos cards de fim de semana). O preço deve estar em fonte grande e escura (`#181412` ou `#C41E14`) sobre fundo claro (`#FAF6EE`), **JAMAIS texto branco ou creme sobre fundo branco ou cinza!**
- **PROIBIDO:** Não escreva nada sobre aluguel de sapatos a R$ 7,00! Coloque apenas as informações reais do cartaz oficial:
  - Regra 1: **Valor cobrado por hora de pista**
  - Regra 2: **Tempo mínimo de jogo: 1 hora**
  - Regra 3: **Capacidade máxima: 6 pessoas por pista**

- **Os 6 Cards Oficiais (Com botões que levam ao WhatsApp com mensagem específica daquele dia):**
  1. **SEGUNDA-FEIRA**
     - Horário: `Das 18h à 0h`
     - Preço: **`R$ 89,00`** `/hora por pista`
     - Info real: `Até 6 pessoas por pista (sai menos de R$ 15 por pessoa em grupo de 6!)`
     - Botão: `"Quero Jogar na Segunda (WhatsApp)"`
  2. **TERÇA A QUINTA-FEIRA**
     - Horário: `Das 18h à 0h`
     - Preço: **`R$ 109,00`** `/hora por pista`
     - Info real: `Até 6 pessoas por pista • Ideal para Happy Hour`
     - Botão: `"Quero Jogar de Terça a Quinta (WhatsApp)"`
  3. **SEXTA-FEIRA** *(Destaque com faixa de topo em `#C41E14` e texto do topo em `#FFFFFF`, mas corpo do card em `#FFFFFF` e preço em `#181412`!)*
     - Horário: `Das 17h à 1h`
     - Preço: **`R$ 149,00`** `/hora por pista`
     - Info real: `Até 6 pessoas por pista • A noite mais animada`
     - Botão: `"Quero Jogar na Sexta (WhatsApp)"`
  4. **SÁBADO** *(Destaque com faixa de topo em `#3D0E11` e texto do topo em `#FFFFFF`, corpo do card em `#FFFFFF` e preços em `#181412`!)*
     - Turno 1: `Das 15h às 18h` -> **`R$ 149,00`** `/hora`
     - Turno 2: `Das 18h às 2h` -> **`R$ 189,00`** `/hora`
     - Info real: `Até 6 pessoas por pista`
     - Botão: `"Quero Jogar no Sábado (WhatsApp)"`
  5. **DOMINGO**
     - Turno 1: `Das 15h às 18h` -> **`R$ 149,00`** `/hora`
     - Turno 2: `Das 18h à 0h` -> **`R$ 180,00`** `/hora`
     - Info real: `Até 6 pessoas por pista • Programa em Família`
     - Botão: `"Quero Jogar no Domingo (WhatsApp)"`
  6. **FERIADOS E VÉSPERAS**
     - Observação: `*(Exceto se cair aos sábados)*`
     - Horário: `Das 16h à 1h`
     - Preço: **`R$ 149,00`** `/hora por pista`
     - Info real: `Até 6 pessoas por pista`
     - Botão: `"Consultar Feriado no WhatsApp"`

### SEÇÃO 6: Cardápio Completo para Curtir nas Pistas (`#cardapio`)
- Fundo `--bg-ivory-main` (`#FAF6EE`).
- **Apresentação Visual:** Antes da lista de itens, crie 3 pequenos cards de "Destaques da Nossa Cozinha & Bar" (ex: **Pizzas com Borda de Catupiry**, **Torre de Chopp até 3,5L & Combos**, **Porções & Lanches no Pão Brioche**) para abrir o apetite do visitante.
- **Sistema de Abas (Tabs) de Alto Contraste:**
  - Aba ativa: Fundo `--brand-crimson` (`#C41E14`) com texto `#FFFFFF`.
  - Aba inativa: Fundo `#FFFFFF`, borda `1.5px solid #181412`, texto `#181412`.
- **Itens do Cardápio (Apenas consulta visual, SEM botões de comprar/carrinho):**
  - Mantenha todos os itens reais (`001` a `104`) organizados nas 6 abas:
    1. **Pizzas (com borda de Catupiry):** Brotinho `R$ 62,00` | Grande `R$ 90,00`. Sabores `001` A moda, `002` Americana, `003` Atum, `004` Bacon, `005` Baiana, `006` Calabresa, `007` Brócolis, `008` Pepperoni, `009` Jardineira, `010` Marguerita, `011` Mussarela, `012` Palmito, `013` Portuguesa, `014` Quatro Queijos, `015` Frango com Catupiry, `016` Toscana.
    2. **Lanches (Pão Brioche & Tradicionais):** `017` X-Tudo (`R$ 27`), `018` Double Burguer (`R$ 26`), `019` X-Bacon Salada (`R$ 25`), `020` X-Salada (`R$ 23`), `021` X-Bacon (`R$ 23`), `022` X-Burguer (`R$ 21`), `023` Americano (`R$ 21`), `024` Bauru (`R$ 16`), `025` Misto Quente (`R$ 16`), `026` Combo 1 X-Burguer + Refri Lata + Fritas (`R$ 31`).
    3. **Porções & Salgados:** `027` Batata Frita (`R$ 35`), `028` Polenta Palito 450g (`R$ 35`), `029` Mandioca Frita 450g (`R$ 35`), `030` Onion Ring 500g (`R$ 37`), `031` Calabresa Acebolada (`R$ 42`), `032` Batata Especial c/ Cheddar e Bacon (`R$ 46`), `033` Salame (`R$ 50`), `034` Frango a Passarinho 1kg (`R$ 51`), `035` Porção Novo Boliche (`R$ 51`), `036` Provolone c/ Azeite (`R$ 54`), `037` Contra Filé (`R$ 81`). Salgados c/ 20 unidades (`R$ 44` cada): `038` Coxinha, `039` Bolinha de Queijo, `040` Risole, `041` Bolinho de Carne, `042` Porção Mista.
    4. **Chopp & Cervejas:** `043` Chopp Claro Tulipa 280ml (`R$ 14`), `044` Torre 1L (`R$ 51`), `045` Torre 2,5L (`R$ 101`), `046` Torre 3,5L (`R$ 138`). Long Necks e Latas: `047` Heineken (`R$ 16`), `048` Budweiser (`R$ 15`), `049` Eisenbahn (`R$ 15`), `050` Stella (`R$ 15`), `051` Skol Lata (`R$ 11`), `052` Skol Beats (`R$ 15`), `053` Smirnoff Ice (`R$ 16`), `054` Cerveja sem Álcool (`R$ 15`).
    5. **Drinks, Batidas & Combos de Garrafa:** Combos: `100` Jack Daniel's (`R$ 392`), `101` Gin Tanqueray (`R$ 392`), `102` Black Label (`R$ 392`), `103` Smirnoff 600ml (`R$ 112`), `104` Red Label (`R$ 280`). Batidas c/ álcool (`055` a `060`: Coco, Morango, Abacaxi, Maracujá, Espanhola, Frutas c/ Champagne — `R$ 18`). Caipirinhas: `065` Absolut (`R$ 34`), `066` Smirnoff (`R$ 25`), `067` Saquê (`R$ 23`), `068` Pinga 51/Velho Barreiro (`R$ 18`). Drinks/Copos/Doses/Vinhos (`069` a `094`).
    6. **Sem Álcool, Sucos & Refrigerantes:** Batidas sem álcool (`061` a `064` — `R$ 18`), `079` Sucos (`R$ 12`), `080` Sucos c/ Leite (`R$ 14`), `081` H2O (`R$ 9`), `082` Tônica (`R$ 9`), `083` Água de Coco (`R$ 8`), `084`/`085` Água sem/com gás (`R$ 6`), `086` Refrigerante Lata (`R$ 9`).

### SEÇÃO 7: Aniversários, Festas e Confraternizações (`#eventos`)
- Card de destaque em Bordô (`#3D0E11`) com texto `#FFFFFF` e detalhes em Laranja/Vermelho da logo.
- Chamada: **"VENHA FAZER SEU EVENTO CONOSCO — QUEM FAZ FESTA NO NOVO BOLICHE SAI GANHANDO!"**
- Explicação clara e real: O lugar ideal na Vila Maria para reunir amigos, comemorar aniversários de crianças e adultos ou fazer a confraternização da sua empresa de forma personalizada.
- Botão grande em Verde WhatsApp: `"Planejar Meu Aniversário ou Evento pelo WhatsApp"` -> Mensagem pré-definida para eventos.

### SEÇÃO 8: Informações Importantes (Substituindo o FAQ inventado por fatos 100% reais)
- Em vez de inventar perguntas e respostas sobre sapatos de R$ 7,00 ou pratinhos de bolo, coloque apenas **2 cards informativos curtos e 100% verificados**:
  1. **Capacidade e Tempo de Jogo:** Tempo mínimo de 1 hora de locação, comportando no máximo 6 pessoas por pista.
  2. **Reservas e Atendimento:** Quer garantir a pista para a sua turma ou tirar dúvidas sobre o movimento do dia? Todo o atendimento prévio e agendamento de eventos é feito diretamente pelo nosso WhatsApp oficial.


### SEÇÃO 9: Localização e Contato (`#localizacao`)
- **Endereço na Vila Maria - São Paulo/SP:** Exiba a referência na **Av. Guilherme Cotching (Vila Maria - Zona Norte, São Paulo - SP)** e o botão direto `"Abrir Localização Exata no Google Maps"` apontando para o link oficial enviado pelo cliente:
  `https://www.google.com/maps/place/Novo+Boliche/@-23.5175295,-46.5909141,17.03z/data=!4m15!1m8!3m7!1s0x94ce5f339826ea7f:0x29f5d8d3adbd0718!2sAv.+Guilherme+Cotching,+1086+-+Vila+Maria,+S%C3%A3o+Paulo+-+SP,+02111-001!3b1!8m2!3d-23.519653!4d-46.5904259!16s%2Fg%2F11bw44317v!3m5!1s0x94ce5f3420e9b5c3:0xa0008fba1c5f0e2e!8m2!3d-23.5166441!4d-46.5886138!16s%2Fg%2F11bwn24wr_`
- **Telefones Fixos Oficiais:** `(11) 2954-9071` / `(11) 2362-8092`
- **WhatsApp Oficial de Atendimento (Links de todos os botões):** `https://api.whatsapp.com/send/?phone=5511925323393&text=Ol%C3%A1!%20Vim%20pelo%20site%20do%20Novo%20Boliche%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.`
- **Instagram Oficial:** `@novo_boliche` (`https://www.instagram.com/novo_boliche/`)