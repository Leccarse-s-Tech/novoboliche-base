# Novo Boliche Vila Maria — Redesign Moderno & Landing Page de Alta Conversão

Landing page de altíssima performance e conversão desenvolvida para o **Novo Boliche Vila Maria** (São Paulo - SP), substituindo a arquitetura legada em WordPress por uma aplicação estática moderna, ultrarrápida, segura e otimizada para SEO Local.

---

## 🚀 Tecnologias Utilizadas

- **[Astro 5](https://astro.build/)** — SSG (Static Site Generation), Zero-JS Baseline por padrão.
- **[Tailwind CSS](https://tailwindcss.com/)** — Estilização moderna com paleta Dark Mode nativa, detalhes em âmbar e neon.
- **[React 19](https://react.dev/)** — Utilizado exclusivamente na **Ilha Interativa** (`Astro Island`) do simulador de rateio por pessoa.
- **[TypeScript](https://www.typescriptlang.org/)** — Tipagem estática e segurança de dados.
- **[Schema.org](https://schema.org/BowlingAlley)** — Dados estruturados JSON-LD do tipo `BowlingAlley` para indexação rica no Google.

---

## 🎯 Melhorias Implementadas (Auditoria & Diagnóstico)

1. **Fim dos Links Quebrados & Lixo de Template:**
   - Remoção de todos os links de afiliados do tema legado (ThemeForest).
   - Eliminação dos links com `href="#"` que abriam abas em branco.
   - Botões de WhatsApp com mensagens pré-configuradas e personalizadas por contexto (reserva de pista por dia, aniversários, cardápio e dúvidas).

2. **Tabela de Preços Honesta e Transparente:**
   - Separação clara entre **Happy Hour (16h às 18h)** e **Horário Nobre / Noite (após as 18h)**.
   - Esclarecimento sobre regras de feriados, capacidade por pista (até 6 jogadores) e valor do aluguel do par de sapatos profissionais (R$ 7,00).

3. **Calculadora Interativa ("Quanto dá por pessoa?"):**
   - Componente interativo onde o usuário seleciona o dia, período e número de amigos (1 a 6) para ver instantaneamente o valor rateado (ex: *Apenas R$ 30,00 por pessoa*), quebrando qualquer objeção de preço.

4. **SEO Local Avançado (Zona Norte de SP):**
   - Semântica HTML rigorosa com apenas um `<h1>` focado em SEO Local: *"O Boliche Mais Completo da Zona Norte de SP"*.
   - Metadados Open Graph, Twitter Cards e marcação estruturada `BowlingAlley` (com geolocalização exata, horários e endereço).

5. **Identidade Noturna & Vitrine Gastronômica:**
   - Visual imersivo noturno (`bg-slate-950`) alinhado com a atmosfera real de pistas de boliche e luz negra.
   - Vitrine de porções, pizzas, hambúrgueres artesanais, chopp gelado e coquetelaria da casa.

6. **Indicador em Tempo Real "Aberto Agora":**
   - Badge no topo do site que detecta o dia da semana e horário atual em São Paulo para avisar aos visitantes se a casa está aberta ou o horário em que abrirá.

7. **Seções de Alta Conversão:**
   - **Comemore seu Aniversário:** Destaque para comanda individual, reserva de pistas conjugadas e permissão para trazer bolo.
   - **FAQ Interativo:** Respostas diretas para as dúvidas mais comuns (estacionamento, sapatos, bumpers para crianças, etc.).
   - **Como Chegar:** Integração com Google Maps e botões com rotas automáticas para **Waze** e **Google Maps**.

---

## 📁 Estrutura do Projeto

```text
├── public/
│   ├── favicon.svg             # Favicon estilizado
│   └── robots.txt              # Regras para motores de busca
├── src/
│   ├── components/
│   │   ├── Header.astro         # Menu fixo + Status "Aberto Agora" + CTA WhatsApp
│   │   ├── Hero.astro           # Visual de impacto + H1 SEO Local + Badges
│   │   ├── PricingSection.astro # Tabela de preços transparente
│   │   ├── PriceCalculator.jsx  # [Astro Island] Simulador de valor por pessoa
│   │   ├── BirthdayPackages.astro # Seção para aniversários e empresas
│   │   ├── MenuHighlights.astro # Cardápio de pizzas, porções e chopp
│   │   ├── FaqAccordion.astro   # Perguntas Frequentes (FAQ)
│   │   ├── LocationMap.astro    # Mapa + Links diretos Waze e Maps
│   │   └── Footer.astro         # Horários, endereço e direitos
│   ├── content/
│   │   ├── config.ts            # Validação Zod de Content Collections
│   │   └── pricing/             # Definição dos preços por dia
│   ├── data/
│   │   └── pricing.ts           # Configurações de preços, endereço e WhatsApp
│   ├── layouts/
│   │   └── MainLayout.astro     # Estrutura base, OpenGraph e Schema.org
│   ├── pages/
│   │   └── index.astro          # Página principal
│   └── styles/
│       └── global.css           # Configuração base do Tailwind CSS
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

---

## 🛠️ Como Executar Localmente

### Pré-requisitos
- **Node.js**: v18 ou superior (testado com Node v24)
- **npm** ou **pnpm**

### Passo a passo
1. Instale as dependências:
   ```bash
   npm install
   ```

2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
   Acesse em seu navegador em `http://localhost:4321`.

3. Para gerar o build de produção:
   ```bash
   npm run build
   ```

4. Para visualizar o build de produção localmente:
   ```bash
   npm run preview
   ```

---

## 🌐 Deploy Recomendado

O projeto foi construído para ser hospedado gratuitamente e com CDN global em plataformas como:
- **Vercel** (`npx vercel`)
- **Cloudflare Pages**
- **Netlify**

Basta conectar este repositório do GitHub e o build será realizado de forma 100% automática com SSL (HTTPS) ativado gratuitamente.
