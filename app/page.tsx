export default function Home() {
  const faqs = [
    {
      q: 'How does it detect unresolved threads?',
      a: 'We scan your workspace channels for messages containing questions or requests, then check if they received a substantive reply. AI analysis filters noise so only real blockers surface.'
    },
    {
      q: 'Which Slack plans are supported?',
      a: 'Any paid Slack plan (Pro, Business+, Enterprise Grid). Free Slack workspaces have limited message history access via the API.'
    },
    {
      q: 'Is my Slack data stored?',
      a: 'Only metadata — channel name, thread timestamp, and debt age. Message content is analyzed in-memory and never persisted to our servers.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Team Productivity
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Your Slack is full of{' '}
          <span className="text-[#58a6ff]">unanswered questions</span>.
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Slack Thread Debt Tracker scans your workspace, finds threads with no response, and shows you exactly what's blocking your team — before it becomes a crisis.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Tracking — $19/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card required for 7-day trial. Cancel anytime.</p>

        <div className="mt-14 grid grid-cols-3 gap-6 text-center">
          {[['48 hrs', 'Avg thread ignored before noticed'],['3.2x', 'More blockers caught vs manual review'],['5 min', 'Setup with Slack OAuth']].map(([stat, label]) => (
            <div key={stat} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl font-bold text-[#58a6ff]">{stat}</div>
              <div className="text-xs text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8">
          <div className="flex items-end gap-1 mb-1">
            <span className="text-4xl font-bold text-white">$19</span>
            <span className="text-[#8b949e] mb-1">/month</span>
          </div>
          <p className="text-[#8b949e] text-sm mb-6">Per workspace. Unlimited channels and users.</p>
          <ul className="space-y-3 mb-8">
            {[
              'Slack OAuth — connect in 5 minutes',
              'AI-powered question detection',
              'Real-time debt dashboard',
              'Aging alerts (24h, 48h, 72h)',
              'Weekly digest email to managers',
              'Webhook & Slack bot notifications'
            ].map(f => (
              <li key={f} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full text-center bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started Free
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-sm text-[#8b949e] leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-[#8b949e] mt-12">
          © {new Date().getFullYear()} Slack Thread Debt Tracker. Not affiliated with Slack Technologies.
        </p>
      </section>
    </main>
  )
}
