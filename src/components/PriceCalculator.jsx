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
    label: 'Sábado ou Domingo',
    shifts: [
      { id: 'tarde', label: 'Tarde (14h às 18h)', price: 149 },
      { id: 'night', label: 'Noite (Após 18h)', price: 180 },
    ],
  },
];

export default function PriceCalculator() {
  const [selectedDayIdx, setSelectedDayIdx] = useState(2);
  const [selectedShiftIdx, setSelectedShiftIdx] = useState(1);
  const [players, setPlayers] = useState(6);
  const [includeShoes, setIncludeShoes] = useState(true);

  const currentDay = DAYS_DATA[selectedDayIdx];
  const currentShift = currentDay.shifts[selectedShiftIdx] || currentDay.shifts[0];

  const lanePrice = currentShift.price;
  const shoeCostPerPerson = includeShoes ? 7 : 0;
  const costPerPerson = (lanePrice / players + shoeCostPerPerson).toFixed(2);

  const whatsMessage = `Olá! Simulei no site para ${players} pessoas (${currentDay.label} - ${currentShift.label}). Fica em média R$ ${costPerPerson} por pessoa. Gostaria de reservar uma pista!`;
  const whatsUrl = `https://wa.me/551129674220?text=${encodeURIComponent(whatsMessage)}`;

  return (
    <section id="simulador" className="py-20 bg-[#faf9f5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-zinc-500">
            Simulador de Rateio
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-zinc-950 font-display tracking-tight">
            Quanto fica por pessoa?
          </h2>
          <p className="text-base text-zinc-600 font-sans">
            Selecione o dia, horário e o número de amigos para ver o valor exato rateado:
          </p>
        </div>

        {/* Box */}
        <div className="rounded-3xl bg-white border border-zinc-200/90 shadow-soft p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Controls */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* 1. Dia */}
            <div>
              <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">
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
                    className={`py-3 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all text-center border ${
                      selectedDayIdx === idx
                        ? 'bg-zinc-950 text-white border-zinc-950 shadow-sm'
                        : 'bg-zinc-50 text-zinc-700 border-zinc-200 hover:bg-zinc-100'
                    }`}
                  >
                    {day.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Turno */}
            <div>
              <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">
                2. Período / Turno:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {currentDay.shifts.map((shift, idx) => (
                  <button
                    key={shift.id}
                    type="button"
                    onClick={() => setSelectedShiftIdx(idx)}
                    className={`p-3.5 rounded-xl text-xs sm:text-sm font-semibold transition-all text-left border flex justify-between items-center ${
                      selectedShiftIdx === idx
                        ? 'bg-yellow-50 text-zinc-950 border-yellow-400 ring-1 ring-yellow-400'
                        : 'bg-zinc-50 text-zinc-600 border-zinc-200 hover:bg-zinc-100'
                    }`}
                  >
                    <span>{shift.label}</span>
                    <strong className="text-zinc-950 font-bold">R$ {shift.price}</strong>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Pessoas */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">
                  3. Quantos jogadores na pista?
                </label>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-zinc-100 text-zinc-800 border border-zinc-200">
                  {players} {players === 1 ? 'amigo' : 'amigos'}
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
                        ? 'bg-yellow-400 text-zinc-950 border-yellow-500 shadow-sm'
                        : 'bg-zinc-50 text-zinc-700 border-zinc-200 hover:bg-zinc-100'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>

            {/* Checkbox Sapatos */}
            <div className="flex items-center gap-2.5 pt-1">
              <input
                id="calc-shoes"
                type="checkbox"
                checked={includeShoes}
                onChange={(e) => setIncludeShoes(e.target.checked)}
                className="w-4 h-4 rounded border-zinc-300 text-zinc-900 focus:ring-zinc-900 cursor-pointer"
              />
              <label htmlFor="calc-shoes" className="text-xs text-zinc-600 cursor-pointer select-none">
                Incluir aluguel do par de sapato profissional (+ R$ 7,00/pessoa)
              </label>
            </div>

          </div>

          {/* Results Side */}
          <div className="lg:col-span-5 bg-[#faf9f5] rounded-2xl p-6 sm:p-8 border border-zinc-200 text-center">
            
            <span className="text-[11px] uppercase tracking-widest text-zinc-500 font-bold block mb-1">
              Resultado por Jogador
            </span>

            <p className="text-xs text-zinc-500">
              Pista R$ {lanePrice}/h dividida entre {players} amigos
            </p>

            <div className="my-6">
              <span className="text-xs text-zinc-500 block mb-1 font-medium">Apenas</span>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-2xl font-bold text-zinc-500">R$</span>
                <span className="text-5xl sm:text-6xl font-black text-zinc-950 font-display tracking-tight">
                  {costPerPerson.replace('.', ',')}
                </span>
              </div>
              <span className="text-xs text-zinc-700 font-semibold block mt-1">
                por pessoa a hora {includeShoes && '(com sapatos)'}
              </span>
            </div>

            <div className="bg-white rounded-xl p-3 border border-zinc-200 text-xs text-zinc-600 mb-6">
              <span className="text-zinc-900 font-bold block mb-0.5">Diversão Garantida</span>
              Mais acessível que uma sessão de cinema para uma hora inteira de boliche com sua turma!
            </div>

            <a
              href={whatsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-full font-bold text-xs uppercase tracking-wider text-zinc-950 bg-yellow-400 hover:bg-yellow-300 shadow-sm transition-all"
            >
              <span>Reservar para {players} pessoas</span>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}
