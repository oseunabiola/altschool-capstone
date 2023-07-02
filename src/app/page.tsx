import Image from "next/image";
import Link from "next/link";
import React from "react";
import LogoBlack from "../../public/assets/logo-black.svg";
import { Container } from "./layout";
import { TextButtonPrimary, TextButtonSecondary } from "./nav-bar";

export default function Home() {
  return (
    <>
      <Hero />
      <main className="flex flex-col">
        <SocialProof />
        <WhyScissor />
        <LandingPageScissor />
      </main>
      <Footer />
    </>
  );
}

function Hero() {
  return (
    <div className="hero | relative">
      <Container className="py-20 text-center">
        <div className="mx-auto w-11/12 mb-5">
          <h1 className="font-bold text-5xl leading-[3.5rem] md:leading-[4rem]">
            Optimize Your Online Experience with Our Advanced{" "}
            <span className="text-primary-400 relative inline-block before:content-[url(/assets/brush.svg)] before:-bottom-5 before:md:-bottom-7 before:fill-primary-400 before:left-0 before:right-0 before:absolute">
              URL Shortening
            </span>{" "}
            Solution
          </h1>
        </div>
        <div className="font-medium mx-auto md:w-3/4 lg:w-7/12 mb-6 md:mb-8 lg:mb-12">
          <p>
            Personalize your shortened URLs to align with your brand identity. Utilize custom slugs,
            branded links, and domain customization options to reinforce your brand presence and
            enhance user engagement.
          </p>
        </div>
        <div className="flex gap-2 md:w-1/2 lg:w-4/12 mx-auto justify-center text-center">
          <TextButtonPrimary path="/sign-up">Sign Up</TextButtonPrimary>
          <TextButtonSecondary path="/#">Learn more</TextButtonSecondary>
        </div>
      </Container>
    </div>
  );
}

function SocialProof() {
  return (
    <div className="social-proof | bg-gray-100 py-[60px]">
      <Container>
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full lg:w-auto mb-8 font-bold text-[40px] leading-[48px] lg:text-left text-center">
            One Stop.
            <br />
            Four <PrimaryColourText>Possibilities</PrimaryColourText>.
          </div>
          {/* <div className="social-proof__stat | w-full md:w-3/5 flex flex-wrap items-start text-center md:text-left"> */}
          <div className="social-proof__stat | w-full lg:w-[55%] auto-cols-fr grid md:grid-cols-2 lg:grid-flow-col text-center lg:text-left gap-6">
            {[
              ["3M", "Active users"],
              ["60M", "Links & QR codes created"],
              ["1B", "Clicked & scanned connections"],
              ["300K", "App integrations"],
            ].map(([count, metric]) => (
              <div key={metric} className="grid content-start mb-6">
                <span className="font-semibold text-3xl mb-2">{count}</span>
                <p className="font-medium text-base">{metric}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

function PrimaryColourText({ children }: { children: string }) {
  return <span className="text-primary-300">{children}</span>;
}

function LandingPageScissor() {
  return (
    <section className="landing-page-scissor | bg-accent py-24">
      <Container>
        <div className="md:w-2/3 lg:w-2/6 mx-auto">
          <FormContainer>
            <form className="text-primary-300 text-sm">
              <input
                type="text"
                className="form-control | mb-6 border-[1.5px] rounded-xl py-3 px-4 w-full border-primary-300 placeholder:text-primary-300"
                placeholder="Your URL here..."
              />
              <input
                type="text"
                className="form-control | mb-6 border-[1.5px] rounded-xl py-3 px-4 w-full border-primary-300 focus:outline-primary-300 placeholder:text-primary-300"
                placeholder="Type an alias here"
              />
              <p className="text-primary-100 mb-6">
                By submitting, I agree to the{" "}
                <Link href="term-of-service" className="font-semibold">
                  Terms of Service
                </Link>
              </p>
              <div className="grid">
                <button
                  type="submit"
                  className="py-3 px-4 bg-primary-400 text-white rounded-2xl hover:bg-primary-300">
                  Shorten it <i className="bi bi-magic -rotate-45"></i>
                </button>
              </div>
            </form>
          </FormContainer>
        </div>
      </Container>
    </section>
  );
}

function WhyScissor() {
  return (
    <section className="py-10 md:py-20 lg:py-32" id="features">
      <Container>
        <div className="flex flex-wrap justify-between">
          <div className="w-full lg:w-[37%] mb-10 md:mb-20 text-center lg:text-left lg:me-5">
            <header>
              <h2 className="with-left-highlighter | font-bold text-4xl mb-4">
                Why choose <PrimaryColourText>Scissor</PrimaryColourText>
              </h2>
            </header>
            <p className="mx-4 sm:mx-10 md:mx-16 lg:mx-0 lg:px-5">
              Scissors is the hub of everything that has to do with your link management. We shorten
              your URLs, allow you creating custom ones for your personal, business, event usage.
              Our swift QR code creation, management and usage tracking with advance analytics for
              all of these is second to none.
            </p>
          </div>
          <ul className="w-full lg:w-3/5 grid md:grid-flow-col md:grid-rows-[1fr_1fr] gap-7 text-center lg:text-left">
            {[
              [
                "bi bi-link",
                "URL Shortening",
                "Scissor allows you to shorten URLs of your business, events. Shorten your URL at scale, URL redirects.",
              ],
              [
                "bi bi-pencil-square",
                "Customer URLs",
                "With Scissor, you can create custom URLs, with the length you want! A solution for socials and businesses.",
              ],
              [
                "bi bi-grid",
                "QR Codes",
                "Generate QR codes to your business, events. Bring your audience and customers to your doorstep with this scan and go solution.",
              ],
              [
                "bi bi-activity",
                "Data Analytics",
                "Receive data on the usage of either your shortened URL, custom URLs or generated QR codes. Embedded to monitor progress.",
              ],
            ].map(([icon, heading, description]) => (
              <li key={heading} className="mb-16 justify-items-start">
                <span className="mb-4 inline-block">
                  <PaddedIcon icon={icon} />
                </span>
                <h3 className="font-semibold text-3xl">{heading}</h3>
                <p className="mx-5 lg:mx-0">{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

function FormContainer({ children }: { children: React.ReactNode }) {
  return <div className="form-container | bg-white rounded-xl p-11">{children}</div>;
}

function Footer() {
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

function PaddedIcon({ icon }: { icon: string }) {
  return (
    <span className="relative flex justify-center items-center bg-black w-12 rounded-full aspect-[1/1] bg-primary-20">
      <i className={`${icon} text-xl absolute text-primary-400`}></i>
    </span>
  );
}
