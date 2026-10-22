const InfoCard = ({ icon, eyebrow, title, description }) => (
  <article className="group flex h-full flex-col rounded-2xl border border-[#dce7df] bg-white p-6 text-left shadow-[0_4px_18px_rgba(20,55,41,0.06)] transition duration-200 hover:-translate-y-1 hover:border-[#a8cbbd] hover:shadow-[0_16px_35px_rgba(20,55,41,0.12)] sm:p-7">
    <div className="mb-6 flex items-start justify-between gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#dcefe6] bg-[#eff8f3]">
        {icon}
      </div>
      <span className="pt-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
        {eyebrow}
      </span>
    </div>
    <h3 className="text-xl font-bold tracking-tight text-[#172b23] sm:text-2xl">
      {title}
    </h3>
    <p className="mt-3 leading-7 text-slate-600">{description}</p>
  </article>
);

export default InfoCard;
