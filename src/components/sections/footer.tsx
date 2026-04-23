import Link from "next/link";

const columns = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Download", "Changelog"],
  },
  {
    title: "Resources",
    links: ["Documentation", "FAQ", "System Requirements"],
  },
  {
    title: "Company",
    links: ["About", "Contact", "Privacy Policy", "Terms of Service"],
  },
  {
    title: "Connect",
    links: ["Twitter / X", "Discord", "GitHub"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-bold uppercase tracking-wider text-muted mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-muted hover:text-foreground transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} HelpAI. All rights reserved. Made for
            professionals who refuse to be average.
          </p>
        </div>
      </div>
    </footer>
  );
}
