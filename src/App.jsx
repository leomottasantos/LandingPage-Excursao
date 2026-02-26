import { useState } from 'react'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="fixed top-0 z-50 w-full border-b border-slate-800 bg-slate-950/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-emerald-400">
              <img src="/logo.png" alt="Logo Motta Tour" className="h-7 w-7 object-contain" />
            </div>
            <span className="text-xl font-black text-white">Motta Tour</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#roteiro" className="text-sm font-medium text-slate-200 transition hover:text-cyan-300">
              Roteiro
            </a>
            <a href="#pacotes" className="text-sm font-medium text-slate-200 transition hover:text-cyan-300">
              Benefícios
            </a>
            <a href="#contato" className="text-sm font-medium text-slate-200 transition hover:text-cyan-300">
              Contato
            </a>
            <a
              href="#reserva"
              className="rounded-xl bg-cyan-400 px-5 py-2 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Reservar agora
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col items-center justify-center gap-1 md:hidden"
            aria-label="Menu"
          >
            <span className={`h-0.5 w-6 bg-white transition ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`h-0.5 w-6 bg-white transition ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-6 bg-white transition ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-slate-800 bg-slate-900 md:hidden">
            <div className="flex flex-col gap-1 px-6 py-4">
              <a
                href="#roteiro"
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-slate-800"
              >
                Roteiro
              </a>
              <a
                href="#pacotes"
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-slate-800"
              >
                Benefícios
              </a>
              <a
                href="#contato"
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-slate-800"
              >
                Contato
              </a>
              <a
                href="#reserva"
                onClick={() => setMenuOpen(false)}
                className="mt-2 rounded-xl bg-cyan-400 px-4 py-2 text-center text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
              >
                Reservar agora
              </a>
            </div>
          </div>
        )}
      </nav>

      <section className="relative overflow-hidden pt-20 min-h-screen">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/foto-praia.jpg)' }} />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/75 via-slate-950/55 to-slate-900/45" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 py-20 md:px-10 lg:flex-row lg:items-center lg:py-24">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-4xl font-black leading-tight text-white md:text-6xl">
              Viva o melhor fim de semana na{' '}
              <span className="bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                Praia do Caribe Brasileiro
              </span>
            </h1>
            <p className="text-base text-slate-200 md:text-lg">
              Transporte executivo, day use com piscina de borda infinita, passeio de lancha e fotógrafo incluso.
              Tudo organizado para você relaxar e curtir momentos inesquecíveis.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#reserva"
                className="rounded-xl bg-cyan-400 px-6 py-3 text-sm font-bold uppercase tracking-wide text-slate-950 transition hover:bg-cyan-300"
              >
                Quero reservar agora
              </a>
              <a
                href="#roteiro"
                className="rounded-xl border border-cyan-300 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-300 hover:text-slate-950"
              >
                Ver roteiro completo
              </a>
            </div>
            <div className="flex flex-wrap gap-6 pt-2 text-sm text-slate-300">
              <p>✅ Parcelamento em até 12x</p>
              <p>✅ Vagas limitadas por saída</p>
              <p>✅ Cancelamento gratuito 7 dias</p>
            </div>
          </div>

          <div className="w-full max-w-md rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl">
            <h2 className="text-2xl font-extrabold text-cyan-200">Pacote de lançamento</h2>
            <p className="mt-2 text-slate-200">Excursão bate-volta com experiência VIP completa.</p>
            <div className="mt-6 rounded-2xl bg-slate-900/70 p-5">
              <p className="text-sm text-slate-400">A partir de</p>
              <p className="text-4xl font-black text-white">R$ 249</p>
              <p className="text-sm text-slate-300">por pessoa • taxa de embarque inclusa</p>
            </div>
            <ul className="mt-5 space-y-3 text-sm text-slate-200">
              <li>• Ônibus executivo com ar-condicionado</li>
              <li>• Café da manhã e kit praia</li>
              <li>• Passeio de lancha com parada para fotos</li>
              <li>• Suporte da equipe durante todo o dia</li>
            </ul>
            <a
              href="#reserva"
              className="mt-6 inline-block w-full rounded-xl bg-emerald-400 px-5 py-3 text-center text-sm font-bold uppercase tracking-wide text-slate-950 transition hover:bg-emerald-300"
            >
              Garantir minha vaga
            </a>
          </div>
        </div>
      </section>

      <section id="roteiro" className="mx-auto max-w-6xl px-6 py-14 md:px-10">
        <div className="rounded-3xl border border-slate-700 bg-slate-900/80 p-8">
          <h2 className="text-3xl font-black text-white">Roteiro da excursão</h2>
          <p className="mt-2 text-slate-300">Um dia completo para curtir praia, passeio e pôr do sol.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              ['04:30', 'Saída com ônibus executivo e recepção da equipe'],
              ['08:00', 'Chegada + café da manhã + tempo livre na praia'],
              ['11:30', 'Passeio de lancha com parada para mergulho'],
              ['14:00', 'Almoço livre em vila gastronômica'],
              ['16:45', 'Pôr do sol no mirante oficial + sessão de fotos'],
              ['18:30', 'Retorno com parada técnica e lanche de bordo'],
            ].map(([time, label]) => (
              <div key={time} className="flex items-start gap-4 rounded-xl bg-slate-800 p-4">
                <span className="rounded-lg bg-cyan-400/20 px-3 py-1 text-sm font-bold text-cyan-200">{time}</span>
                <p className="text-sm text-slate-200">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pacotes" className="mx-auto max-w-6xl px-6 pb-16 md:px-10">
        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-black text-white">Por que escolher nossa excursão?</h2>
              <p className="mt-2 text-slate-300">Benefícios exclusivos pensados para você.</p>
            </div>
            {[
              {
                title: 'Conforto total',
                text: 'Transporte executivo, pontos de embarque estratégicos e equipe treinada.',
              },
              {
                title: 'Experiência instagramável',
                text: 'Paradas em mirantes incríveis e spots perfeitos para foto e vídeo.',
              },
              {
                title: 'Tudo no pacote',
                text: 'Você não se preocupa com logística: só leva protetor e boa energia.',
              },
            ].map((item) => (
              <article key={item.title} className="rounded-2xl border border-slate-700 bg-slate-900 p-6">
                <h3 className="text-lg font-bold text-cyan-200">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{item.text}</p>
              </article>
            ))}
          </div>
          <div className="rounded-3xl overflow-hidden border border-slate-700 max-h-[500px]">
            <img 
              src="/foto-ferias.jpg" 
              alt="Férias na praia" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section id="reserva" className="mx-auto max-w-6xl px-6 py-14 md:px-10">
        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          <div className="hidden overflow-hidden rounded-3xl border border-slate-700 h-[570px] md:block">
            <img
              src="/foto-viagem.jpg"
              alt="Viagem para praia"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="rounded-3xl border border-slate-700 bg-slate-900/80 p-6 h-[570px] flex flex-col">
            <div className="mb-5">
              <h2 className="text-2xl font-black text-white">Cadastro de reserva</h2>
              <p className="mt-2 text-slate-300">Preencha seus dados e nossa equipe confirma sua vaga por WhatsApp.</p>
            </div>

            <form className="flex flex-1 flex-col gap-3">
              <div>
                <label htmlFor="nome" className="mb-1 block text-sm font-semibold text-slate-200">
                  Nome completo
                </label>
                <input
                  id="nome"
                  type="text"
                  placeholder="Seu nome"
                  className="w-full rounded-xl border border-slate-600 bg-slate-800 px-4 py-2.5 text-slate-100 outline-none transition focus:border-cyan-400"
                />
              </div>

              <div>
                <label htmlFor="telefone" className="mb-1 block text-sm font-semibold text-slate-200">
                  WhatsApp
                </label>
                <input
                  id="telefone"
                  type="tel"
                  placeholder="(11) 99999-9999"
                  className="w-full rounded-xl border border-slate-600 bg-slate-800 px-4 py-2.5 text-slate-100 outline-none transition focus:border-cyan-400"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-semibold text-slate-200">
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="voce@email.com"
                  className="w-full rounded-xl border border-slate-600 bg-slate-800 px-4 py-2.5 text-slate-100 outline-none transition focus:border-cyan-400"
                />
              </div>

              <div>
                <label htmlFor="pessoas" className="mb-1 block text-sm font-semibold text-slate-200">
                  Quantidade de pessoas
                </label>
                <select
                  id="pessoas"
                  className="w-full rounded-xl border border-slate-600 bg-slate-800 px-4 py-2.5 text-slate-100 outline-none transition focus:border-cyan-400"
                  defaultValue="1"
                >
                  <option value="1">1 pessoa</option>
                  <option value="2">2 pessoas</option>
                  <option value="3">3 pessoas</option>
                  <option value="4+">4 ou mais</option>
                </select>
              </div>

              <div className="mt-auto">
                <button
                  type="submit"
                  className="w-full rounded-xl bg-cyan-400 px-6 py-2.5 text-sm font-bold uppercase tracking-wide text-slate-950 transition hover:bg-cyan-300"
                >
                  Enviar cadastro de reserva
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section id="contato" className="mx-auto max-w-6xl px-6 py-14 md:px-10">
        <div className="rounded-3xl border border-slate-700 bg-slate-900/80 p-8 md:p-12">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-black text-white">Ficou com alguma dúvida?</h2>
            <p className="mt-2 text-slate-300">
              Entre em contato com nossa equipe pelo WhatsApp ou e-mail. Respondemos em até 2 horas!
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-emerald-400/40 bg-emerald-400/10 px-6 py-3 text-sm font-semibold text-emerald-300 transition hover:bg-emerald-400/20"
              >
                💬 WhatsApp
              </a>
              <a
                href="mailto:contato@praiatour.com"
                className="rounded-xl border border-cyan-400/40 bg-cyan-400/10 px-6 py-3 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400/20"
              >
                ✉️ E-mail
              </a>
              <a
                href="https://instagram.com/praiatour"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-pink-400/40 bg-pink-400/10 px-6 py-3 text-sm font-semibold text-pink-300 transition hover:bg-pink-400/20"
              >
                📸 Instagram
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
