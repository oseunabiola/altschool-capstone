import Image from "next/image";
import Link from "next/link";
import LogoBlack from "../../../public/assets/logo-black.svg";
import { Container } from "../ui";

export function Footer() {
  return (
    <footer className="py-9">
      <Container className="pt-20">
        <div className="brand | flex items-center flex-col">
          <Image src={LogoBlack} alt="Scissor logo" className="mb-4" />
          <div className="social-links">
            <a href="#" className="p-2">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="#" className="p-2">
              <i className="bi bi-facebook"></i>
            </a>
          </div>
        </div>
      </Container>
      <Container className="text-sm">
        <div className="flex items-center justify-between">
          <Link href="#">Term of service </Link>
          <p>&copy; All Rights Reserved</p>
        </div>
      </Container>
    </footer>
  );
}
