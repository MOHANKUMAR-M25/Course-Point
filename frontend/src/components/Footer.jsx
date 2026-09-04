export default function Footer({ trainer }) {
  return (
    <footer className="bg-german-black text-slate-400">
      <div className="flag-stripe" />
      <div className="container-site grid gap-10 py-14 md:grid-cols-3">
        <div>
          <p className="flex items-center gap-2 font-display text-lg font-bold text-white">
            <span className="brand-mark brand-mark-footer" aria-hidden="true">CP</span>
            <span className="text-german-gold">Course Point</span>
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed">
            Helping learners build practical skills with confidence, from first steps to advanced mastery.
          </p>
        </div>

        <div>
          <p className="font-display text-sm font-bold uppercase tracking-wider text-white">Quick Links</p>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              ["#about", "About"],
              ["#courses", "Courses"],
              ["#consultation", "Consultation"],
              ["#reviews", "Reviews"],
              ["#contact", "Contact"]
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="transition hover:text-german-gold">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display text-sm font-bold uppercase tracking-wider text-white">Contact</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>📧 {trainer?.email}</li>
            <li>📞 {trainer?.phone}</li>
            <li>📍 {trainer?.location}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs">
        © {new Date().getFullYear()} Course Point Learning. All rights reserved.
      </div>
    </footer>
  );
}
