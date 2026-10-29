# Diagnóstico Técnico e Plano de Reconstrução: Novo Boliche Vila Maria

**Projeto:** Redesign e Migração Tecnológica  
**Domínio Alvo:** `novobolichevilamaria.com.br`  
**Stack Proposta:** Astro Framework + Tailwind CSS + TypeScript  
**Objetivo:** Transformar um site legado e lento em uma Landing Page de altíssima conversão, nota 100 no Google PageSpeed e otimizada para SEO Local (Zona Norte de São Paulo).

---

## Parte 1: Diagnóstico do Site Atual (Problemas Encontrados)

O site atual foi construído em WordPress por volta de 2018 utilizando o tema **Flathost** — um template projetado originalmente para empresas de **hospedagem de sites (Web Hosting)**. Essa escolha gerou distorções visuais, técnicas e de experiência do usuário que prejudicam diretamente as vendas e reservas do boliche.

### 1.1. Problemas Críticos de Infraestrutura e Código
* **Ausência de Certificado SSL (HTTPS):** O site opera exclusivamente via protocolo `http://`. Navegadores modernos exibem o aviso de **"Não Seguro"** na barra de endereço, o que afasta usuários e penaliza severamente o posicionamento orgânico no Google.
* **Links com "Lixo" de Template e Comportamento Quebrado:**
  * O card principal **"Reserva de Pistas"** redireciona o cliente para uma página de vendas do *ThemeForest* (`themeforest.net/item/flathost...`) com link de afiliado do criador do tema.
  * Os cards **"Seu Aniversário aqui!"**, **"Diversão pra toda família"** e **"De cara nova..."** possuem links apontando para `<a href="#" target="_blank">`. Ao clicar, o cliente abre uma nova aba idêntica no navegador sem sair do lugar.
* **Sobrecarga de Requisições (Performance Ruim):** O site carrega cerca de 20 arquivos `.css` separados e múltiplos scripts de jQuery herdados do WordPress para exibir uma página que é essencialmente estática.
* **Semântica HTML Incorreta (SEO Prejudicado):**
  * Uso de múltiplas tags `<h1>` ao longo da página (`<h1>Sobre Nós</h1>`, `<h1>Horário de Funcionamento e Preço</h1>`, `<h1>Fale Conosco</h1>`), diluindo a relevância semântica para os motores de busca.
  * Imagens de ícones com atributos `alt="secure"`, herdados dos recursos de segurança de servidores do tema Flathost.

### 1.2. Problemas de UX/UI e Apresentação Comercial
* **Tabela de Preços Confusa ("Preços Isca"):**
  * Nos cards de *Terça a Quinta* e *Sexta-feira*, o preço em destaque gigante é **R$ 89**, que vale apenas para a janela das **16h às 18h**. O valor do horário nobre (**R$ 109** e **R$ 149**, onde a maioria dos clientes frequenta) fica escondido em uma fonte pequena no rodapé do card.
  * O card de **Feriado e Véspera** exibe **R$ 149**, mas omite completamente o horário de funcionamento e não esclarece se há mudança de tarifa após as 18h (como ocorre nos sábados e domingos, que sobem para **R$ 180**).
* **Falta de Informações Essenciais (Quebra de Objeções):** Não há informações claras sobre o valor do **aluguel de sapatos**, número máximo de pessoas por pista na tabela de preços, ou detalhes sobre **estacionamento** (valet ou próprio).

### 1.3. Problemas de Conteúdo e Copywriting
* **Textos Duplicados (Copy & Paste):**
  * Os blocos *"AS MELHORES PISTAS"* e *"ESPAÇO"* possuem exatamente o mesmo texto repetido.
  * Os blocos *"QUEM FAZ EVENTO..."* e *"PRODUTOS E SERVIÇOS"* também são cópias idênticas um do outro.
* **Erros Gramaticais em Destaque:** Logo no primeiro bloco após o banner, lê-se *"Novo Boliche **trás** para você..."* (erro ortográfico no verbo *trazer*, que deveria ser grafado como **traz**).
* **Falta de Prova Visual:** Um boliche vende experiência visual (luzes neon, pistas brilhando, lanches, porções, chopp e grupos comemorando). O site atual utiliza ícones vetoriais genéricos em vez de fotos e vídeos reais do ambiente e da gastronomia.
* **WhatsApp Genérico:** Todos os botões de ação enviam a mesma mensagem padrão (`"Olá, gostaria de mais informações sobre o boliche!"`), perdendo a oportunidade de qualificar o atendimento logo no primeiro clique.

---

## Parte 2: A Solução — Como Melhorar com o Framework Astro

O **Astro** é a escolha arquitetural perfeita para o **Novo Boliche Vila Maria**. Como o site é focado em conteúdo institucional, cardápio, preços e captação de leads via WhatsApp, não há necessidade de um banco de dados dinâmico em PHP (WordPress) rodando a cada acesso.

### 2.1. Por que o Astro resolve todos os problemas técnicos?
1. **Zero JavaScript por Padrão (Zero-JS Baseline):** O Astro compila todo o código em HTML e CSS puros no momento do build (SSG - *Static Site Generation*). Isso garante carregamento instantâneo até mesmo em conexões 4G instáveis na rua.
2. **Arquitetura de Ilhas (Astro Islands):** Caso precisemos de um componente interativo — como uma **Calculadora de Preço por Jogador** ou um **Indicador de "Aberto Agora"** em tempo real — carregamos o JavaScript apenas para aquele componente isolado (`client:visible` ou `client:load`).
3. **Otimização Nativa de Imagens (`astro:assets`):** Fotos de alta resolução das pistas e das porções do restaurante serão convertidas automaticamente para os formatos `.webp` e `.avif`, com redimensionamento responsivo e *lazy loading* nativo.
4. **Segurança Absoluta:** Sem painel `wp-admin`, banco de dados MySQL exposto ou plugins desatualizados, a superfície de ataque para invasões ou *malware* cai para praticamente zero.

---

## Parte 3: Arquitetura do Projeto em Astro (Como Eu Faria)

Abaixo está a estrutura de diretórios planejada para manter o código limpo, escalável e fácil de atualizar caso os preços da pista mudem no futuro:

```text
novo-boliche-astro/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── videos/
│       └── hero-lanes.mp4          # Vídeo curto (loop) das pistas em funcionamento
├── src/
│   ├── assets/                     # Fotos reais otimizadas pelo Astro
│   │   ├── pistas/
│   │   ├── gastronomia/
│   │   └── ambiente/
│   ├── components/
│   │   ├── Header.astro            # Menu fixo + Status "Aberto Agora" + CTA WhatsApp
│   │   ├── Hero.astro              # Impacto visual + H1 otimizado para SEO Local
│   │   ├── PricingSection.astro    # Tabela de preços transparente (Happy Hour vs Noite)
│   │   ├── PriceCalculator.jsx     # [Astro Island] Simulador: "Quanto fica por pessoa?"
│   │   ├── BirthdayPackages.astro  # Seção exclusiva para aniversários e eventos
│   │   ├── MenuHighlights.astro    # Galeria gastronômica (Pizzas, Lanches, Porções)
│   │   ├── FaqAccordion.astro      # Dúvidas: Aluguel de sapatos, estacionamento, reservas
│   │   ├── LocationMap.astro       # Mapa + Botões diretos para Waze e Google Maps
│   │   └── Footer.astro            # Dados fiscais, redes sociais e horários
│   ├── content/
│   │   ├── config.ts               # Tipagem com Zod para garantir que preços nunca quebrem
│   │   └── pricing/                # Arquivos JSON/MD com os valores de cada dia
│   ├── layouts/
│   │   └── MainLayout.astro        # SEO, OpenGraph, Schema.org (JSON-LD) e HTTPS
│   └── pages/
│       └── index.astro             # Página principal montando as seções
├── astro.config.mjs
└── tailwind.config.mjs
```

---

## Parte 4: Implementação Prática das Melhorias

### 4.1. Solução para a Tabela de Preços: Content Collections + Simulador

Em vez de deixar preços espalhados no HTML ou enganar o cliente com letras miúdas, usaremos o **Content Collections** do Astro com validação **Zod** e dividiremos visualmente cada card em dois turnos claros: **Happy Hour (16h às 18h)** e **Horário Nobre (Após 18h)**.

#### Exemplo de Estrutura de Dados (`src/content/pricing/precos.json`):
```json
[
  {
    "id": "terca-quinta",
    "dia": "Terça a Quinta",
    "funcionamento": "16h às 00h30",
    "turnos": [
      { "periodo": "Happy Hour (16h às 18h)", "valor": 89, "destaque": true },
      { "periodo": "Noite (18h às 00h30)", "valor": 109, "destaque": false }
    ],
    "mensagemWhats": "Olá! Gostaria de reservar uma pista para o período de Terça a Quinta."
  },
  {
    "id": "sexta",
    "dia": "Sexta-feira",
    "funcionamento": "16h às 02h30",
    "turnos": [
      { "periodo": "Happy Hour (16h às 18h)", "valor": 89, "destaque": false },
      { "periodo": "Noite (18h às 02h30)", "valor": 149, "destaque": true }
    ],
    "mensagemWhats": "Olá! Gostaria de reservar uma pista para Sexta-feira."
  },
  {
    "id": "sabado-domingo",
    "dia": "Sábado e Domingo",
    "funcionamento": "14h às 02h30 (Dom até 00h30)",
    "turnos": [
      { "periodo": "Tarde (14h às 18h)", "valor": 149, "destaque": false },
      { "periodo": "Noite (Após as 18h)", "valor": 180, "destaque": true }
    ],
    "mensagemWhats": "Olá! Gostaria de reservar uma pista para o final de semana."
  }
]
```

#### Diferencial Competitivo: Calculadora "Quanto dá por pessoa?" (Astro Island)
Muitas pessoas acham **R$ 180/hora** caro porque esquecem que a pista comporta **até 6 jogadores**. Criaremos um pequeno componente interativo (`PriceCalculator.jsx`) onde o usuário seleciona o dia e o número de amigos (ex: 6 pessoas) e o site mostra em destaque:
> *"Apenas **R$ 30,00 por pessoa** a hora!"*  
Isso destrói a objeção de preço imediatamente.

---

### 4.2. SEO Local Avançado e Dados Estruturados (`Schema.org`)

Para dominar as buscas como *"Boliche na Zona Norte"*, *"Boliche Vila Maria"* e *"Onde comemorar aniversário em SP"*, o arquivo `MainLayout.astro` injetará metadados estruturados do tipo `BowlingAlley` (específico do Schema.org para boliches).

#### Exemplo do Componente `MainLayout.astro`:
```astro
---
interface Props {
  title: string;
  description: string;
}

const { title, description } = Astro.props;

const schemaData = {
  "@context": "https://schema.org",
  "@type": "BowlingAlley",
  "name": "Novo Boliche Vila Maria",
  "image": "https://novobolichevilamaria.com.br/og-image.jpg",
  "telephone": "+55-11-2967-4220",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Av. Guilherme Cotching, 1086",
    "addressLocality": "São Paulo",
    "addressRegion": "SP",
    "postalCode": "02113-012",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -23.5186,
    "longitude": -46.5891
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Tuesday", "Wednesday", "Thursday"],
      "opens": "16:00",
      "closes": "00:30"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Friday",
      "opens": "16:00",
      "closes": "02:30"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "14:00",
      "closes": "02:30"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday",
      "opens": "14:00",
      "closes": "00:30"
    }
  ]
};
---

<!doctype html>
<html lang="pt-BR" class="scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{title}</title>
    <meta name="description" content={description} />
    <script type="application/ld+json" set:html={JSON.stringify(schemaData)} />
  </head>
  <body class="bg-slate-950 text-white antialiased selection:bg-amber-500 selection:text-black">
    <slot />
  </body>
</html>
```

---

### 4.3. Reformulação Visual e de Conteúdo (UX/UI)

1. **Identidade Visual Noturna (Dark Mode Nativo):**
   * Substituir o fundo branco estéril de "empresa de hospedagem" por uma paleta imersiva (`bg-slate-950`) com detalhes em **Amarelo/Âmbar** e **Vermelho/Neon**, remetendo à iluminação real das pistas à noite e às cores da logo do Novo Boliche.
2. **Seção Exclusiva "Comemore seu Aniversário":**
   * Em vez de um card sem link, criar uma seção de destaque explicando as vantagens para aniversariantes (ex: comanda individual, reserva antecipada de mesas, pacotes para grupos e empresas) com um botão direto:  
     `Quero comemorar meu aniversário -> WhatsApp com mensagem personalizada`.
3. **Vitrine Gastronômica Integrada:**
   * Usar o componente `<Image />` do Astro para mostrar um grid apetitoso com as Pizzas, Beirutes, Porções e Drinks da casa, mantendo um botão claro para abrir o **Cardápio Digital Completo** sem tirar o usuário da jornada de reserva.
4. **Seção de Perguntas Frequentes (FAQ) para Reduzir Atendimento Repetitivo:**
   * *Precisa reservar antes ou é por ordem de chegada?*
   * *O aluguel do sapato está incluso no valor da hora?*
   * *Quantas pessoas jogam em 1 pista?* (Até 6 pessoas).
   * *Tem estacionamento no local?*

---

## Parte 5: Roteiro de Execução e Deploy (Passo a Passo)

| Etapa | Ação Técnica | Impacto Esperado |
| :--- | :--- | :--- |
| **1. Setup & Design** | Inicializar projeto Astro + Tailwind CSS e definir tipografia moderna (ex: *Inter* + *Outfit* para títulos). | Carregamento de fontes otimizado e visual moderno. |
| **2. Curadoria de Mídia** | Coletar 8 a 10 fotos reais do boliche e dos pratos (ou vídeos do Instagram `@novoboliche`) e processar via `astro:assets`. | Eliminação da aparência amadora e aumento do desejo de visita. |
| **3. Desenvolvimento** | Construir os componentes `.astro`, corrigir todos os erros ortográficos, remover textos duplicados e parametrizar os links de WhatsApp. | Navegação fluida, sem links quebrados e funil de vendas claro. |
| **4. Hospedagem & SSL** | Hospedar gratuitamente na **Vercel** ou **Cloudflare Pages** (com CDN global) e apontar o DNS do Registro.br (`novobolichevilamaria.com.br`). | **HTTPS gratuito e automático**, fim do alerta de "Não Seguro" e servidor de alta disponibilidade. |
| **5. Auditoria Final** | Rodar o Google Lighthouse para validar nota **95–100** em Performance, Acessibilidade, Práticas Recomendadas e SEO. | Subida rápida no ranqueamento orgânico da Zona Norte de SP. |