import { FiBookOpen } from "@react-icons/all-files/fi/FiBookOpen";

const Footer = () => {
  const year = new Date().getFullYear();

  const linkClass =
    "text-sm text-white/65 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a7d8c6]";

  return (
    <footer className="mt-16 bg-[#142b24] text-white">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-5 md:gap-10">
          <div className="col-span-2 space-y-4 md:col-span-2">
            <a
              href="#top"
              className="inline-flex items-center gap-2 text-xl font-bold"
              aria-label="StudyFlow, back to top"
            >
              <FiBookOpen className="h-7 w-7 text-[#a7d8c6]" aria-hidden="true" />
              <span>StudyFlow</span>
            </a>
            <p className="max-w-sm text-sm leading-6 text-white/65">
              A calmer way to study. Turn big goals into daily plans, stay
              focused, and make your progress visible.
            </p>
          </div>

          <nav aria-label="Product">
            <h2 className="mb-4 text-sm font-semibold">Product</h2>
            <ul className="space-y-3">
              <li><a className={linkClass} href="#features">Features</a></li>
              <li><a className={linkClass} href="#how-it-works">How it works</a></li>
              <li><a className={linkClass} href="#ai-planning">AI day planning</a></li>
              <li><a className={linkClass} href="#pricing">Pricing</a></li>
            </ul>
          </nav>

          <nav aria-label="Resources">
            <h2 className="mb-4 text-sm font-semibold">Resources</h2>
            <ul className="space-y-3">
              <li><a className={linkClass} href="#reviews">Student stories</a></li>
              <li><a className={linkClass} href="#faq">FAQs</a></li>
              <li><a className={linkClass} href="#top">Back to top</a></li>
            </ul>
          </nav>

          <div className="col-span-2 space-y-3 md:col-span-1">
            <h2 className="text-sm font-semibold">Make a plan</h2>
            <p className="text-sm leading-6 text-white/65">
              Start with one goal and build a study routine that works for you.
            </p>
            <a
              className="inline-flex rounded-md bg-[#a7d8c6] px-4 py-2 text-sm font-semibold text-[#142b24] transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              href="#get-started"
            >
              Get started
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/15 pt-6 text-xs leading-5 text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} StudyFlow. Made for focused learning.</p>
          <p>StudyFlow is a student project, not a live product.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
