export interface PricingShift {
  turno: string;
  horario: string;
  valor: number;
  valorFormatado: string;
  destaque?: boolean;
}

export interface PricingDayCard {
  id: string;
  dia: string;
  badge?: string;
  observacao?: string;
  turnos: PricingShift[];
  ctaLabel: string;
  mensagemWhats: string;
}

export const WHATSAPP_PHONE = "5511925323393";
export const DISPLAY_WHATSAPP = "(11) 92532-3393";
export const DISPLAY_FIXO_1 = "(11) 2954-9071";
export const DISPLAY_FIXO_2 = "(11) 2362-8092";
export const ADDRESS = "Av. Guilherme Cotching, 1453 - Vila Maria, São Paulo - SP, CEP 02113-015";
export const INSTAGRAM_HANDLE = "@novo_boliche";
export const INSTAGRAM_URL = "https://www.instagram.com/novo_boliche/";
export const MAPS_URL = "https://www.google.com/maps/place/Novo+Boliche/@-23.5166441,-46.5886138,17z/data=!4m8!3m7!1s0x94ce5f3420e9b5c3:0xa0008fba1c5f0e2e!8m2!3d-23.5166441!4d-46.5886138!9m1!1b1!16s%2Fg%2F11bwn24wr_";

export function createWhatsAppUrl(message: string): string {
  return `https://api.whatsapp.com/send/?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(message)}`;
}

export const PRICING_RULES = [
  "VALOR POR HORA DE JOGO",
  "TEMPO MÍNIMO: 1 HORA",
  "MÁXIMO DE 6 PESSOAS POR PISTA",
];

export const PRICING_DATA: PricingDayCard[] = [
  {
    id: "segunda",
    dia: "SEGUNDA-FEIRA",
    badge: "Melhor Tarifa",
    turnos: [
      {
        turno: "Turno Único",
        horario: "Das 18h à 0h",
        valor: 89,
        valorFormatado: "R$ 89,00",
        destaque: true,
      },
    ],
    ctaLabel: "Consultar Segunda no WhatsApp",
    mensagemWhats: "Olá! Vim pelo site do Novo Boliche e gostaria de consultar a pista para Segunda-feira.",
  },
  {
    id: "terca-quinta",
    dia: "TERÇA A QUINTA-FEIRA",
    badge: "Happy Hour & Resenha",
    turnos: [
      {
        turno: "Turno Único",
        horario: "Das 18h à 0h",
        valor: 109,
        valorFormatado: "R$ 109,00",
        destaque: false,
      },
    ],
    ctaLabel: "Consultar Terça a Quinta no WhatsApp",
    mensagemWhats: "Olá! Vim pelo site do Novo Boliche e gostaria de consultar a pista para Terça a Quinta.",
  },
  {
    id: "sexta",
    dia: "SEXTA-FEIRA",
    badge: "Sexta Nobre",
    turnos: [
      {
        turno: "Turno Único",
        horario: "Das 17h à 1h",
        valor: 149,
        valorFormatado: "R$ 149,00",
        destaque: true,
      },
    ],
    ctaLabel: "Consultar Sexta no WhatsApp",
    mensagemWhats: "Olá! Vim pelo site do Novo Boliche e gostaria de consultar a pista para Sexta-feira.",
  },
  {
    id: "sabado",
    dia: "SÁBADO",
    badge: "Fim de Semana",
    turnos: [
      {
        turno: "Turno Tarde",
        horario: "Das 15h às 18h",
        valor: 149,
        valorFormatado: "R$ 149,00",
        destaque: false,
      },
      {
        turno: "Turno Noite",
        horario: "Das 18h às 2h",
        valor: 189,
        valorFormatado: "R$ 189,00",
        destaque: true,
      },
    ],
    ctaLabel: "Consultar Sábado no WhatsApp",
    mensagemWhats: "Olá! Vim pelo site do Novo Boliche e gostaria de consultar a pista para Sábado.",
  },
  {
    id: "domingo",
    dia: "DOMINGO",
    badge: "Família & Amigos",
    turnos: [
      {
        turno: "Turno Tarde",
        horario: "Das 15h às 18h",
        valor: 149,
        valorFormatado: "R$ 149,00",
        destaque: false,
      },
      {
        turno: "Turno Noite",
        horario: "Das 18h à 0h",
        valor: 180,
        valorFormatado: "R$ 180,00",
        destaque: true,
      },
    ],
    ctaLabel: "Consultar Domingo no WhatsApp",
    mensagemWhats: "Olá! Vim pelo site do Novo Boliche e gostaria de consultar a pista para Domingo.",
  },
  {
    id: "feriados",
    dia: "FERIADOS E VÉSPERAS",
    badge: "Dias Especiais",
    observacao: "*(Exceto se cair aos sábados)*",
    turnos: [
      {
        turno: "Turno Único",
        horario: "Das 16h à 1h",
        valor: 149,
        valorFormatado: "R$ 149,00",
        destaque: true,
      },
    ],
    ctaLabel: "Consultar Feriado no WhatsApp",
    mensagemWhats: "Olá! Vim pelo site do Novo Boliche e gostaria de consultar a pista para Feriados e Vésperas.",
  },
];
