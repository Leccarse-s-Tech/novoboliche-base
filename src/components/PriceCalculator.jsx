import React, { useState } from 'react';

const DAYS_DATA = [
  {
    id: 'terca-quinta',
    label: 'Terça a Quinta',
    shifts: [
      { id: 'hh', label: 'Happy Hour (16h às 18h)', price: 89 },
      { id: 'night', label: 'Noite (18h às 00h30)', price: 109 },
    ],
  },
  {
    id: 'sexta',
    label: 'Sexta-feira',
    shifts: [
      { id: 'hh', label: 'Happy Hour (16h às 18h)', price: 89 },
      { id: 'night', label: 'Noite (18h às 02h30)', price: 149 },
    ],
  },
  {
    id: 'fds',
    label: 'Sábado, Domingo ou Feriado',
    shifts: [
      { id: 'tarde', label: 'Tarde (14h às 18h)', price: 149 },
      { id: 'night', label: 'Noite (Após 18h)', price: 180 },
    ],
  },
];

export default function PriceCalculator() {
  const [selectedDayIdx, setSelectedDayIdx] = useState(2); // Default weekend
  const [selectedShiftIdx, setSelectedShiftIdx] = useState(1); // Default night
  const [players, setPlayers] = useState(6); // Default 6 friends
  const [includeShoes, setIncludeShoes] = useState(true);

  const currentDay = DAYS_DATA[selectedDayIdx];
  const currentShift = currentDay.shifts[selectedShiftIdx] || currentDay.shifts[0];

  const lanePrice = currentShift.price;
  const shoeCostPerPerson = includeShoes ? 7 : 0;
  const costPerPerson = (lanePrice / players + shoeCostPerPerson).toFixed(2);
  const lanePerPersonOnly = (lanePrice / players).toFixed(2);

  const whatsMessage = `Olá! Fiz uma simulação no site para ${players} pessoas (${currentDay.label} - ${currentShift.label}). Fica em média R$ ${costPerPerson} por pessoa. Gostaria de reservar uma pista!`;
  const whatsUrl = `https://wa.me/551129674220?text=${encodeURIComponent(whatsMessage)}`;

  return (
    <section id="simulador" className="py-20 relative overflow-hidden bg-slate-950">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-amber-500/10 blur-[140px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold uppercase tracking-wider">
            Simulador Interativo
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-display">
            Quanto fica por pessoa?
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            A pista de boliche comporta <strong>até 6 pessoas</strong>. Escolha o dia, o horário e veja o valor exato rateado entre você e sua turma:
          </p>
        </div>

        {/* Interactive Box */}
        <div className="rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* 1. Escolha o Dia */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">
                1. Escolha o Dia:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {DAYS_DATA.map((day, idx) => (
                  <button
                    key={day.id}
                    type="button"
                    onClick={() => {
                      setSelectedDayIdx(idx);
                      setSelectedShiftIdx(0);
                    }}
                    className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all text-center border ${
                      selectedDayIdx === idx
                        ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-lg shadow-amber-500/20'
                        : 'bg-slate-950/70 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white'
                    }`}
                  >
                    {day.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Escolha o Horário */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">
                2. Período / Turno:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {currentDay.shifts.map((shift, idx) => (
                  <button
                    key={shift.id}
                    type="button"
                    onClick={() => setSelectedShiftIdx(idx)}
                    className={`p-3 rounded-xl text-xs sm:text-sm font-semibold transition-all text-left border flex justify-between items-center ${
                      selectedShiftIdx === idx
                        ? 'bg-slate-850 text-white border-amber-500/60 ring-1 ring-amber-500'
                        : 'bg-slate-950/70 text-slate-400 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <span>{shift.label}</span>
                    <span className="font-bold text-amber-400 text-sm">R$ {shift.price}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Número de Amigos */}
            <div>
              <div className="flex justify-between items-center mb-2.5">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  3. Quantos jogadores na pista?
                </label>
                <span className="px-3 py-1 rounded-full bg-slate-800 text-amber-400 text-xs font-bold border border-slate-700">
                  {players} {players === 1 ? 'jogador' : 'jogadores'}
                </span>
              </div>
              
              <div className="grid grid-cols-6 gap-2">
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setPlayers(num)}
                    className={`py-3 rounded-xl font-bold text-sm transition-all border ${
                      players === num
                        ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 border-amber-300 shadow-md scale-105'
                        : 'bg-slate-950/70 text-slate-300 border-slate-800 hover:bg-slate-800'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>

            {/* Checkbox Sapatos */}
            <div className="flex items-center gap-3 pt-2">
              <input
                id="calc-shoes"
                type="checkbox"
                checked={includeShoes}
                onChange={(e) => setIncludeShoes(e.target.checked)}
                className="w-4 h-4 rounded border-slate-700 text-amber-500 focus:ring-amber-500 focus:ring-offset-slate-900 bg-slate-950 cursor-pointer"
              />
              <label htmlFor="calc-shoes" className="text-xs text-slate-300 cursor-pointer select-none">
                Incluir aluguel do par de sapato profissional higienizado (+ R$ 7,00/pessoa)
              </label>
            </div>

          </div>

          {/* Results Column */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-950 to-indigo-950/40 rounded-2xl p-6 sm:p-7 border border-amber-500/30 text-center relative shadow-xl">
            
            <span className="text-[11px] uppercase tracking-widest text-amber-400 font-bold block mb-1">
              Resultado da Simulação
            </span>

            <p className="text-xs text-slate-400">
              Valor da pista: R$ {lanePrice}/h dividida por {players} amigos
            </p>

            <div className="my-6">
              <span className="text-xs text-slate-400 block mb-1">Apenas</span>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-2xl font-bold text-slate-400">R$</span>
                <span className="text-5xl sm:text-6xl font-black text-amber-400 font-display tracking-tight">
                  {costPerPerson.replace('.', ',')}
                </span>
              </div>
              <span className="text-xs text-slate-300 font-semibold block mt-1">
                por pessoa a hora {includeShoes && '(com sapato)'}
              </span>
            </div>

            <div className="bg-slate-900/80 rounded-xl p-3 border border-slate-800 text-xs text-slate-300 mb-6">
              <span className="text-emerald-400 font-bold block mb-0.5">💥 Super Acessível!</span>
              Mais barato que um combo de cinema ou hambúrguer para uma hora inteira de pura diversão e disputa na pista!
            </div>

            <a
              href={whatsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-4 px-5 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-400 shadow-xl shadow-amber-500/25 transition-all duration-200"
            >
              <span>Reservar para {players} pessoas</span>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}
