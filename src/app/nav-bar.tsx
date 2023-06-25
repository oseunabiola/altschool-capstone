import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/assets/Logo.svg";
import { Container } from "./layout";

const navLinks = [
  { path: "/my-urls", label: "My URLs" },
  { path: "/features", label: "Features" },
  { path: "/pricing", label: "Pricing" },
  { path: "/analytics", label: "Analytics" },
  { path: "/faqs", label: "FAQs" },
];

export function NavBar() {
  return (
    <header className="py-2 sticky top-0 h-16 z-10">
      <Container className="flex items-center justify-between font-medium">
        <div className="md:grow-[5]">
          <Link href="/">
            <Image
              src={Logo}
              alt="Scissor Logo"
              className="dark:invert"
              width={155}
              height={37}
              priority
            />
          </Link>
        </div>
        <nav className="nav | flex md:grow-[8] justify-between">
          <ul className="flex items-center">
            {navLinks.map((_link) => (
              <NavLink path={_link.path} label={_link.label} key={_link.label} />
            ))}
          </ul>
          <div className="cta-group">
            <ul className="flex items-center">
              <NavLinkCTA className="text-primary-400" path="/login" label="Log in" />
              <TextButtonPrimary path="/sign-up" className="ms-6">
                Try for free
              </TextButtonPrimary>
            </ul>
          </div>
        </nav>
      </Container>
    </header>
  );
}

function NavLink({ path, label, key }: { path: string; label: string; key: string }) {
  return (
    <li className="me-10">
      <Link href={path}>{label}</Link>
    </li>
  );
}
function NavLinkCTA({
  path,
  label,
  className,
}: {
  path: string;
  label: string;
  className?: string;
}) {
  return (
    <li className={`ms-6 ${className ? className : null}`}>
      <Link href={path}>{label}</Link>
    </li>
  );
}

export function TextButtonPrimary({
  path,
  children,
  className = "",
}: {
  path: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={path}
      className={
        `px-8 py-3 bg-primary-300 text-white rounded-full hover:bg-primary-400 ` + className
      }>
      {children}
    </Link>
  );
}
export function TextButtonSecondary({
  path,
  children,
  className = "",
}: {
  path: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link href={path} className={`px-8 py-3 bg-white text-primary-300 rounded-full ` + className}>
      {children}
    </Link>
  );
}
