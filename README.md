# Novo Boliche Vila Maria — Landing Page Oficial de Alta Conversão

Landing page de alta performance e forte identidade de marca desenvolvida para o **Novo Boliche (Vila Maria - São Paulo/SP)**, substituindo o site legado em WordPress por uma aplicação estática moderna, ultrarrápida, fluida e 100% focada em conversão para o WhatsApp oficial.

---

## 🎳 Identidade Visual: Paulistano Retro-Lane & Diner

A direção visual foi construída com base nos pigmentos e na proporção original da logo oficial da casa:
- **`--bg-charcoal` (`#121110`)**: Preto grafite quente inspirado nas canaletas e tipografia de pista.
- **`--bg-mahogany` (`#2B0C0E`)**: Bordô profundo extraído do anel oval interno da logo.
- **`--bg-pin-ivory` (`#F5F0E6`)**: Branco-creme quente de alto contraste para leitura da tabela de horários e preços.
- **`--strike-red` (`#C9281D`)**: Vermelho escarlate vibrante das bolas de boliche.
- **`--pin-stripe-orange` (`#E04E22`)**: Laranja das faixas duplas no pescoço do pino ("Pin-Stripe").
- **`--lane-maple` (`#D4A36A`)**: Tom amadeirado do verniz das pistas.
- **`--whatsapp-cta` (`#1FA855`)**: Verde encorpado de alta visibilidade e contraste AA/AAA.

Tipografia configurada:
- **Display:** `Bricolage Grotesque` e `Syne`
- **Corpo:** `Plus Jakarta Sans`
- **Mono / Placar:** `JetBrains Mono`

---

## ⚡ Regra de Negócio: Zero E-Commerce & 100% Conversão WhatsApp

O Novo Boliche não realiza vendas, reservas automáticas ou delivery pelo site:
1. **Sem Carrinhos ou Modais de Checkout:** A página atua puramente como vitrine imersiva de experiência.
2. **Sem Calculadoras Complexas:** Mensagens e valores transparentes direto na tela.
3. **CTAs Contextuais:** Todos os botões redirecionam para o WhatsApp oficial (`(11) 92532-3393`) com mensagens pré-configuradas codificadas em URL específicas para cada seção ou dia da semana.

---

## 📋 Estrutura das Seções

1. **Header Fixo:** Navegação suave por âncoras, logotipo oficial com proporção oval e pino à direita, e botão de atendimento imediato no WhatsApp com pulse indicator.
2. **Hero Imersivo:** Grid assimétrico de 12 colunas, H1 de alto impacto, placar técnico (10 pistas automatizadas, até 6 jogadores, +30 anos de tradição).
3. **Tabela de Horários & Valores (`#horarios`):** Fundo creme de alto contraste com cards no estilo *arcade ticket* para Segunda-feira, Terça a Quinta, Sexta-feira, Sábado, Domingo e Feriados/Vésperas.
4. **Cardápio Interativo (`#cardapio`):** Abas navegáveis com scroll horizontal suave no celular (`Pizzas`, `Lanches`, `Porções & Salgados`, `Chopp & Cervejas`, `Drinks & Combos`, `Sem Álcool`) e busca instantânea com transcrição completa dos itens `001` a `104`.
5. **Eventos & Festas (`#eventos`):** Fundo bordô profundo com blocos editoriais para aniversários e eventos corporativos (até 60 jogadores simultâneos).
6. **Perguntas Frequentes (`#faq`):** Accordion com respostas sobre sapatos, capacidade, bumpers para crianças, bolo de aniversário e formas de pagamento.
7. **Localização & Contato (`#localizacao`):** Embed do Google Maps, rotas para Waze e Google Maps, telefones fixos `(11) 2954-9071` / `(11) 2362-8092`, endereço e Instagram `@novo_boliche`.

---

## 🛠️ Tecnologias Utilizadas

- **[Astro 5](https://astro.build/)** — Static Site Generation (SSG) de alta velocidade.
- **[Tailwind CSS](https://tailwindcss.com/)** — Tokens estritamente configurados com o `DESIGN.md`.
- **[TypeScript](https://www.typescriptlang.org/)** — Tipagem estática para horários, preços e cardápio.
- **[Schema.org](https://schema.org/BowlingAlley)** — Dados estruturados JSON-LD do tipo `BowlingAlley` para SEO Local na Vila Maria (São Paulo).

---

## 💻 Como Rodar o Projeto

```bash
# Instalar dependências
npm install

# Iniciar servidor local
npm run dev

# Build de produção
npm run build

# Preview do build
npm run preview
```
