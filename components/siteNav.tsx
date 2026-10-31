"use client";

import { Briefcase, FileUser, FolderKanban, Home, LogIn, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type NavItem = { label: string; labelMobile: string; href: string; icon: React.ReactElement, active: boolean };

type SiteNavProps = {
  siteName?: string;
  logoSrc?: string; // file in /public, or an imported static image
  links?: NavItem[];
  loginHref?: string;
};

const DEFAULT_LINKS: NavItem[] = [
  { label: "Home", labelMobile: "Home Page", href: "/", icon: <Home className="h-4 w-4"/>, active: true },
  { label: "Projects", labelMobile: "Past Projects", href: "/projects", icon: <Briefcase className="h-4 w-4"/>, active: true },
  // { label: "Catalog", labelMobile: "Home", href: "/catalog", icon: <FolderRoot className="h-4 w-4"/>, active: true },
  { label: "Catalog", labelMobile: "Catalog / Shop", href: "/catalog", icon: <FolderKanban className="h-4 w-4"/>, active: false },
  { label: "Resumè", labelMobile: "View my Resumè", href: "/resume", icon: <FileUser className="h-4 w-4"/>, active: true },
];

/** Radius (px) of the flared top corners. Must match rounded-b-[20px] below. */
const R = 20;

/**
 * The flared "ears" that make the bar look like it grows out of the top edge.
 * A quarter-circle cut-out drawn with a radial gradient: transparent inside the
 * circle, black outside it.
 */
function Ear({ side }: { side: "left" | "right" }) {
  const cx = side === "left" ? "0%" : "100%";
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute top-0"
      style={{
        width: R,
        height: R,
        [side]: -R,
        background: `radial-gradient(circle at ${cx} 100%, transparent ${R - 0.5}px, #000 ${R + 0.5}px)`,
      }}
    />
  );
}

function isActive(pathname: string, href: string) {
  return href === "/"
    ? pathname === "/"
    : pathname === href || pathname.startsWith(`${href}/`);
}

function NavLinks({
  items,
  pathname,
  onNavigate,
  className,
  itemClassName,
}: {
  items: NavItem[];
  pathname: string;
  onNavigate?: () => void;
  className?: string;
  itemClassName?: string;
}) {
  return (
    <ul className={className}>
      {items.map((item) => {
        const active = isActive(pathname, item.href);
        return (
          <li key={item.href} className={itemClassName}>
            <Link
              href={item.href}
              onClick={onNavigate}
              aria-current={active ? "page" : undefined}
              className="text-sm decoration-white decoration-[3px] underline-offset-10 aria-[current=page]:underline"
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

function NavLinksMobile({
  items,
  pathname,
  onNavigate,
  className,
  itemClassName,
}: {
  items: NavItem[];
  pathname: string;
  onNavigate?: () => void;
  className?: string;
  itemClassName?: string;
}) {
  return (
    <ul className={className}>
      {items.map((item) => {
        const active = isActive(pathname, item.href);
        return (
          <li key={item.href} className={itemClassName}>
            <Link
              href={item.href}
              onClick={onNavigate}
              aria-current={active ? "page" : undefined}
              className="flex items-center justify-between text-sm decoration-white decoration-[3px] underline-offset-10 border-l-2 aria-[current=page]:border-white dark:aria-[current=page]:border-white border-foreground dark:border-background pl-4"
            >
              <span className="flex items-center justify-start gap-4">
                <span className="text-xs">{item.icon}</span>
                {item.labelMobile}
              </span>
              {item.active ? (<></>): (<span className="bg-primary text-[8px] font-bold px-2 py-0.5 rounded-full animate-pulse">
                Coming soon
              </span>)}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export function SiteNav({
  siteName = "Imperial Media Solutions",
  logoSrc = "/logos/logo-dark.png",
  links = DEFAULT_LINKS,
  loginHref = "/login",
}: SiteNavProps) {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(true);
  const panelId = React.useId();
  const toggleRef = React.useRef<HTMLButtonElement>(null);

  const close = React.useCallback(() => setOpen(false), []);

  // Collapse the mobile menu after navigating.
  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    close();
  }, [pathname, close]);

  return (
    <nav
      aria-label="Main"
      onKeyDown={(e) => {
        if (e.key === "Escape" && open) {
          close();
          toggleRef.current?.focus();
        }
      }}
      className={cn(
        // Static, centered, hangs from the top edge. Ears sit outside the bar,
        // so mobile width leaves at least R px of margin on each side.
        // ? "fixed left-1/2 top-0 z-50 -translate-x-1/2",
        "fixed left-1/2 top-0 z-50 -translate-x-1/2 mx-auto w-5/6 max-w-7xl",
        "w-[calc(100%-3.5rem)] max-w-md md:w-max md:max-w-none",
        // "rounded-b-[20px] bg-black text-white",
        "rounded-b-[20px] bg-black text-white drop-shadow-[0_4px_6px_rgba(255,255,255,0.5)]",
      )}
    >
      <Ear side="left" />
      <Ear side="right" />

      {/* Top row */}
      <div className="flex h-13 items-center justify-between gap-6 px-3 md:justify-start md:gap-5 w-full">
        <Link
          href="/"
          aria-label={`${siteName} home`}
          className="flex shrink-0 items-center gap-2.5"
        >
          <Image
            src={logoSrc}
            alt="Imperial Media Logo"
            width={30}
            height={30}
            priority
            className="size-7.5 rounded-lg object-contain"
          />
          <span className="hidde text-base font-bold md:inline">
            {siteName}
          </span>
        </Link>

        {/* Desktop links */}
        <NavLinks
          items={links}
          pathname={pathname}
          // className="hidden items-center gap-x-5 md:flex"
          className="hidden items-center gap-x-5 md:flex md:ml-20 md:mr-0 lg:ml-40 lg:mr-50 xl:ml-50 xl:mr-70"
        />

        {/* Desktop login */}
        <Button
          // asChild
          variant="secondary"
          className="ml-3 hidden bg-white font-bold text-black hover:bg-white/85 md:inline-flex"
        >
          <Link href={loginHref} className="flex gap-2 justify-center items-center">
            <LogIn aria-hidden="true" />
            Cient Dashboard
          </Link>
        </Button>

        {/* Mobile toggle */}
        <Button
          ref={toggleRef}
          type="button"
          variant="ghost"
          size="icon"
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="text-white hover:bg-white/15 hover:text-white md:hidden"
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </Button>
      </div>

      {/* Mobile panel: grows with its content, never past 70% of the screen */}
      <div
        id={panelId}
        data-open={open}
        className={cn(
          "grid grid-rows-[0fr] invisible md:hidden",
          "transition-[grid-template-rows,visibility] duration-300 ease-out motion-reduce:transition-none",
          "data-[open=true]:visible data-[open=true]:grid-rows-[1fr]",
        )}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="max-h-[calc(70dvh-52px)] overflow-y-auto px-3 pb-4">
            {/* <NavLinks
              items={links}
              pathname={pathname}
              onNavigate={close}
              className="flex flex-col"
              itemClassName="py-2.5"
            /> */}
            <NavLinksMobile
              items={links}
              pathname={pathname}
              onNavigate={close}
              className="flex flex-col"
              itemClassName="py-2.5"
            />
            <Button
              // asChild
              variant="secondary"
              className="mt-3 w-full bg-white font-bold text-black hover:bg-white/85"
            >
              <Link href={loginHref} onClick={close} className="flex gap-2 justify-center items-center">
                <LogIn aria-hidden="true" />
                Login To Client Dashboard
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default SiteNav;
