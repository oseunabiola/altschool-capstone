import { Container } from "./layout";
import { TextButtonPrimary, TextButtonSecondary } from "./nav-bar";

export default function Home() {
  return (
    <>
      <Hero />
      <main className="flex flex-col items-center justify-between p-24">
        <SocialProof />
      </main>
    </>
  );
}

function Hero() {
  return (
    <div className="hero |">
      <Container className="py-20 text-center">
        <div className="mx-auto w-10/12 mb-5">
          <h1 className="font-bold text-5xl leading-[6rem]">
            Optimize Your Online Experience with Our Advanced{" "}
            <span className="text-primary-300 relative">URL Shortening</span> Solution
          </h1>
        </div>
        <div className="font-medium mx-auto w-7/12 mb-12">
          <p>
            Personalize your shortened URLs to align with your brand identity. Utilize custom slugs,
            branded links, and domain customization options to reinforce your brand presence and
            enhance user engagement.
          </p>
        </div>
        <div className="flex gap-2 w-4/12 mx-auto justify-center text-center">
          <TextButtonPrimary path="/sign-up">Sign Up</TextButtonPrimary>
          <TextButtonSecondary path="/#">Learn more</TextButtonSecondary>
        </div>
      </Container>
    </div>
  );
}

function SocialProof() {
  return (
    <div className="social-proof | bg-gray-100">
      <Container>He</Container>
    </div>
  );
}
