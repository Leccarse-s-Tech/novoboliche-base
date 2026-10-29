export interface PricingPeriod {
  periodo: string;
  valor: number;
  destaque: boolean;
}

export interface PricingCardData {
  id: string;
  dia: string;
  funcionamento: string;
  badge?: string;
  turnos: PricingPeriod[];
  mensagemWhats: string;
}

export const PRICING_DATA: PricingCardData[] = [
  {
    id: "terca-quinta",
    dia: "Terça a Quinta",
    funcionamento: "16h às 00h30",
    badge: "Melhor Custo-Benefício",
    turnos: [
      { periodo: "Happy Hour (16h às 18h)", valor: 89, destaque: true },
      { periodo: "Noite (18h às 00h30)", valor: 109, destaque: false }
    ],
    mensagemWhats: "Olá! Gostaria de reservar uma pista para o período de Terça a Quinta."
  },
  {
    id: "sexta",
    dia: "Sexta-feira",
    funcionamento: "16h às 02h30",
    badge: "Sextou com Boliche & Chopp",
    turnos: [
      { periodo: "Happy Hour (16h às 18h)", valor: 89, destaque: false },
      { periodo: "Noite (18h às 02h30)", valor: 149, destaque: true }
    ],
    mensagemWhats: "Olá! Gostaria de reservar uma pista para Sexta-feira."
  },
  {
    id: "sabado-domingo",
    dia: "Sábados, Domingos e Feriados",
    funcionamento: "14h às 02h30 (Dom até 00h30)",
    badge: "Diversão com Amigos & Família",
    turnos: [
      { periodo: "Tarde (14h às 18h)", valor: 149, destaque: false },
      { periodo: "Noite (Após as 18h)", valor: 180, destaque: true }
    ],
    mensagemWhats: "Olá! Gostaria de reservar uma pista para o final de semana / feriado."
  }
];

export const WHATSAPP_PHONE = "551129674220";
export const DISPLAY_PHONE = "(11) 2967-4220";
export const ADDRESS = "Av. Guilherme Cotching, 1086 - Vila Maria, São Paulo - SP, CEP 02113-012";
