

const SectionHeader = ({ title, subtitle }) => (
  <header className="mx-auto max-w-3xl space-y-3 text-center">
    <h2 className="text-3xl font-bold tracking-tight text-[#172b23] sm:text-4xl">
      {title}
    </h2>
    <p className="text-base leading-7 text-slate-600 sm:text-lg">{subtitle}</p>
  </header>
);

export default SectionHeader;