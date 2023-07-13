"use client";
import Link from "next/link";
import React, { CSSProperties, useState } from "react";
import isEmpty from "validator/lib/isEmpty";
import isURL from "validator/lib/isURL";
import { logger } from "../../lib";
import { copyToClipboard } from "../../util/copy-to-clipboard.js";
import { Container } from "../ui";

export function LandingPageScissor() {
  const [errors, setErrors] = useState({ url: "", alias: "" });
  const [formValue, setFormValue] = useState({ url: "", alias: "" });
  const [shortened, setShortened] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  function validate({ url, alias }: { url: string; alias: string }) {
    logger("Validating form...");

    if (isEmpty(url)) {
      setErrors((prev) => ({ ...prev, url: "URL is required." }));
    } else if (!isURL(url)) {
      setErrors((prev) => ({ ...prev, url: "URL is not a valid URL. Please enter a valid URL." }));
    }

    const ALLOWED_ALIAS_CHAR_LENGTH = 20;
    if (alias && alias.length > ALLOWED_ALIAS_CHAR_LENGTH) {
      setErrors((prev) => ({
        ...prev,
        alias:
          "Alias is too long. Please enter an alias less than " +
          ALLOWED_ALIAS_CHAR_LENGTH +
          " characters.",
      }));
    }

    return errors;
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitError("");
    setShortened("");
    setSubmitting(true);

    const url = formValue.url;
    const alias = formValue.alias;

    validate({ url, alias });

    if (errors.url || errors.alias) {
      logger("Form submission failed because of validation error: " + JSON.stringify(errors));
      return;
    }

    const options = {
      method: "POST",
      body: JSON.stringify({ url, alias }),
      headers: { "content-type": "application/json" },
    };
    try {
      const url = process.env.NEXT_PUBLIC_BACKEND_URL + "/scissors";
      const response = await fetch(url, options);

      if (!response.ok) throw new Error("Oops! Something went wrong. Please try again.");
      const responsePayload = await response.json();
      if (response.statusText !== "200") throw new Error(responsePayload.message);

      setShortened(responsePayload.data.shortenedURL);
    } catch (error) {
      logger(error);
      if (error instanceof Error && error.message) {
        setSubmitError(error.message);
      } else {
        setSubmitError("Oops! Something went wrong. Please try again.");
      }
    } finally {
      setSubmitting(false);
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  return (
    <section className="landing-page-scissor | bg-accent py-24">
      <Container>
        <div className="md:w-1/3 lg:w-[35%] mx-auto">
          <div className="bg-white rounded-xl p-11">
            <form className="text-primary-300 text-sm" onSubmit={handleSubmit}>
              {submitError ? (
                <div className="submit-error | block mb-4 p-3 text-center border-red-300 rounded-xl border bg-red-100 text-red-800">
                  {submitError}
                </div>
              ) : null}
              <div className="mb-6">
                <input
                  name="url"
                  id="url"
                  type="url"
                  onChange={handleChange}
                  className="form-control | border-[1.5px] rounded-xl py-3 px-4 w-full border-primary-300 placeholder:text-primary-300"
                  placeholder="Your URL here..."
                />
                {errors.url && <span className="text-red-500">{errors.url}</span>}
              </div>
              <div className="mb-6">
                <input
                  name="alias"
                  id="alias"
                  type="text"
                  onChange={handleChange}
                  className="form-control | border-[1.5px] rounded-xl py-3 px-4 w-full border-primary-300 focus:outline-primary-300 placeholder:text-primary-300"
                  placeholder="Type an alias here"
                />
                {errors.alias && <span className="text-red-500">{errors.alias}</span>}
              </div>
              <p className="text-primary-100 mb-6">
                By submitting, I agree to the{" "}
                <Link href="term-of-service" className="font-semibold">
                  Terms of Service
                </Link>
              </p>
              <div className="grid">
                <button
                  type="submit"
                  className="py-3 px-4 bg-primary-400 text-white rounded-2xl hover:bg-primary-300"
                  disabled={submitting}>
                  Shorten it <i className="bi bi-magic -rotate-45"></i>
                </button>
              </div>
            </form>

            {shortened ? (
              <div
                className="mt-4 bg-green-400 text-green-900 rounded-xl text-sm flex overflow-hidden"
                style={{ ["--spacing-x"]: "1rem" } as CSSProperties}>
                <span className=" flex-grow overflow-hidden py-3 px-[var(--spacing-x)]">
                  {shortened}
                </span>
                <button
                  className="py-3 ms-[var(--spacing-x)] hover:bg-green-700 hover:text-white hover:cursor-pointer active:bg-green-900"
                  onClick={() => copyToClipboard(shortened)}
                  onKeyUp={(e) => {
                    if (["Space", "Enter"].includes(e.code)) {
                      copyToClipboard(shortened);
                    }
                  }}>
                  <i className="bi bi-files px-4" title="Copy to clipboard" tabIndex={0} />
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
