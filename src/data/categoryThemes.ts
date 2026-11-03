export interface CategoryTheme {
  id: string;
  name: string;
  primary: string;         // Cor principal de destaque (badge, ativo, borda superior)
  bgSoft: string;          // Cor de fundo suave (para contrastes secundários e hover)
  textContrast: string;    // Cor do texto de alto contraste (WCAG AA >= 4.5:1)
  border: string;          // Cor de borda correspondente
  accentHover: string;     // Tom mais escuro para estados de foco/hover
  shadowColor: string;     // Sombra temática translúcida
}

export const CATEGORY_THEMES: Record<string, CategoryTheme> = {
  all: {
    id: 'all',
    name: 'Todos os Itens',
    primary: '#181412',
    bgSoft: '#F4EFE6',
    textContrast: '#FFFFFF',
    border: '#181412',
    accentHover: '#2B2420',
    shadowColor: 'rgba(24, 20, 18, 0.3)',
  },
  pizzas: {
    id: 'pizzas',
    name: 'Pizzas',
    primary: '#C41E14',
    bgSoft: '#FDF2F0',
    textContrast: '#FFFFFF',
    border: '#C41E14',
    accentHover: '#A91F16',
    shadowColor: 'rgba(196, 30, 20, 0.25)',
  },
  lanches: {
    id: 'lanches',
    name: 'Lanches & Combos',
    primary: '#C2410C',
    bgSoft: '#FFF4EE',
    textContrast: '#FFFFFF',
    border: '#C2410C',
    accentHover: '#9A3412',
    shadowColor: 'rgba(194, 65, 12, 0.25)',
  },
  porcoes: {
    id: 'porcoes',
    name: 'Porções & Salgados',
    primary: '#A16207',
    bgSoft: '#FEF9EE',
    textContrast: '#FFFFFF',
    border: '#A16207',
    accentHover: '#854D0E',
    shadowColor: 'rgba(161, 98, 7, 0.25)',
  },
  'chopp-cervejas': {
    id: 'chopp-cervejas',
    name: 'Chopp & Cervejas',
    primary: '#15803D',
    bgSoft: '#F0FDF4',
    textContrast: '#FFFFFF',
    border: '#15803D',
    accentHover: '#166534',
    shadowColor: 'rgba(21, 128, 61, 0.25)',
  },
  'drinks-combos': {
    id: 'drinks-combos',
    name: 'Drinks, Batidas & Garrafas',
    primary: '#7E22CE',
    bgSoft: '#FAF5FF',
    textContrast: '#FFFFFF',
    border: '#7E22CE',
    accentHover: '#6B21A8',
    shadowColor: 'rgba(126, 34, 206, 0.25)',
  },
  'sem-alcool': {
    id: 'sem-alcool',
    name: 'Sem Álcool',
    primary: '#0369A1',
    bgSoft: '#F0F9FF',
    textContrast: '#FFFFFF',
    border: '#0369A1',
    accentHover: '#075985',
    shadowColor: 'rgba(3, 105, 161, 0.25)',
  },
};

export function getCategoryTheme(catId: string): CategoryTheme {
  return CATEGORY_THEMES[catId] || CATEGORY_THEMES.all;
}
