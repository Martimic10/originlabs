"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import LogoMark from "./LogoMark";

const menuColumns = [
  {
    title: "Product",
    links: [
      { href: "/products", label: "Products" },
      { href: "#services", label: "Services" },
      { href: "#pricing", label: "Pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "#process", label: "How It Works" },
      { href: "#contact", label: "Contact" },
      { href: "/start-project", label: "Start a Project" },
    ],
  },
  {
    title: "Information",
    links: [
      { href: "#", label: "Terms" },
      { href: "#", label: "Privacy" },
      {
        href: "https://github.com",
        label: "GitHub",
        external: true as const,
      },
    ],
  },
];

function NavIconButton({
  children,
  onClick,
  label,
  href,
  size = "md",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  label: string;
  href?: string;
  size?: "md" | "pill";
}) {
  const className =
    size === "pill"
      ? "flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-[14px] border border-white/15 bg-white/[0.06] text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] transition-colors hover:bg-white/[0.1] sm:h-[50px] sm:w-[50px] sm:rounded-2xl"
      : "flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] border border-white/15 bg-white/[0.06] text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] transition-colors hover:bg-white/[0.1]";

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        aria-label={label}
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} aria-label={label} className={className}>
      {children}
    </button>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    const onClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", onClickOutside);
    }

    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [open]);

  const close = () => setOpen(false);
  const toggle = () => setOpen((prev) => !prev);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-[max(1.25rem,env(safe-area-inset-top))] sm:pt-8">
      <div
        ref={navRef}
        className="pointer-events-auto w-full max-w-[480px] sm:max-w-[560px]"
      >
        <div className="overflow-hidden rounded-2xl border border-white/20 bg-white/[0.06] shadow-lg shadow-black/30 backdrop-blur-xl sm:rounded-3xl">
          <div className="flex h-[62px] items-center justify-between px-3 sm:h-[68px] sm:px-3.5">
            <NavIconButton href="/" label="Origin Labs home" size="pill">
              <LogoMark className="h-[38px] w-[38px] sm:h-[42px] sm:w-[42px]" />
            </NavIconButton>

            <NavIconButton
              onClick={toggle}
              label={open ? "Close menu" : "Open menu"}
              size="pill"
            >
              <motion.svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-7 w-7"
                aria-hidden
                animate={{ rotate: open ? 45 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <path
                  d="M12 5v14M5 12h14"
                  stroke="currentColor"
                  strokeWidth="1.35"
                  strokeLinecap="round"
                />
              </motion.svg>
            </NavIconButton>
          </div>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                key="dropdown"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="border-t border-white/10 px-4 pb-5 pt-5 sm:px-6 sm:pb-7 sm:pt-6">
                  <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 sm:gap-6">
                    {menuColumns.map((column, columnIndex) => (
                      <div
                        key={column.title}
                        className={
                          columnIndex === 2
                            ? "col-span-2 sm:col-span-1"
                            : undefined
                        }
                      >
                        <h2 className="text-xl text-white sm:text-2xl">
                          {column.title}
                        </h2>
                        <ul className="mt-4 space-y-2.5">
                          {column.links.map((link) => (
                            <li key={link.label}>
                              <a
                                href={link.href}
                                target={
                                  "external" in link && link.external
                                    ? "_blank"
                                    : undefined
                                }
                                rel={
                                  "external" in link && link.external
                                    ? "noopener noreferrer"
                                    : undefined
                                }
                                onClick={close}
                                className="text-sm text-zinc-400 transition-colors hover:text-white"
                              >
                                {link.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
