"use client";

import { useState } from "react";
import CoverImage from "@/components/CoverImage";
import StarOrnament from "@/components/StarOrnament";
import type { ContactInfo } from "@/content/types";
import styles from "./contact.module.css";

type Form = { name: string; email: string; message: string };
type Errors = Partial<Record<keyof Form, string>>;

export default function ContactView({ info }: { info: ContactInfo }) {
  const [form, setForm] = useState<Form>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const validate = (): Errors => {
    const e: Errors = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      e.email = "Please enter a valid email.";
    if (!form.message.trim()) e.message = "Please enter a message.";
    return e;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    // Seam: production would POST to a contact endpoint / server action here.
    setSent(true);
  };

  const change =
    (key: keyof Form) =>
    (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((f) => ({ ...f, [key]: ev.target.value }));
      setErrors((e) => ({ ...e, [key]: "" }));
    };

  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          {/* Left — info */}
          <div>
            <h1 className={`display-heading ${styles.heading}`}>Contact</h1>
            <div className={styles.details}>
              <div className={styles.detailsName}>{info.name}</div>
              <div className={styles.detailsLine}>{info.phone}</div>
              <div className={styles.detailsLine}>{info.email}</div>
              {info.addressLines.map((line, i) => (
                <div
                  key={i}
                  className={`${styles.detailsLine}${i === 0 ? " " + styles.detailsAddress : ""}`}
                >
                  {line}
                </div>
              ))}
            </div>
            <div className={styles.map}>
              <CoverImage src={info.mapImage} alt="Map to QALISSO Museum" sizes="(max-width: 900px) 100vw, 30vw" />
            </div>
          </div>

          {/* Right — form / success */}
          <div>
            {sent ? (
              <div className={styles.success}>
                <div className={styles.successStar}>
                  <StarOrnament size={48} color="var(--brown-ink)" />
                </div>
                <h2 className={`display-heading ${styles.successHeading}`}>Thank you!</h2>
                <p className={styles.successText}>
                  Your message has been sent.
                  <br />
                  We&apos;ll get back to you shortly.
                </p>
                <button
                  type="button"
                  className={styles.sendAnother}
                  onClick={() => {
                    setSent(false);
                    setForm({ name: "", email: "", message: "" });
                    setErrors({});
                  }}
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className={styles.field}>
                  <input
                    className="mu-input"
                    type="text"
                    placeholder="Enter your name"
                    aria-label="Your name"
                    value={form.name}
                    onChange={change("name")}
                  />
                  {errors.name && <div className={styles.error}>{errors.name}</div>}
                </div>
                <div className={styles.field}>
                  <input
                    className="mu-input"
                    type="email"
                    placeholder="Enter a valid email address"
                    aria-label="Your email address"
                    value={form.email}
                    onChange={change("email")}
                  />
                  {errors.email && <div className={styles.error}>{errors.email}</div>}
                </div>
                <div className={styles.field}>
                  <textarea
                    className="mu-input"
                    placeholder="Enter your message"
                    aria-label="Your message"
                    rows={5}
                    value={form.message}
                    onChange={change("message")}
                  />
                  {errors.message && <div className={styles.error}>{errors.message}</div>}
                </div>
                <div className={styles.submitRow}>
                  <button type="submit" className={styles.submit}>
                    Send
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Bottom row */}
        <div className={styles.bottom}>
          <span>Qalisso Museum</span>
          <span>{info.phone}</span>
          <span>{info.email}</span>
        </div>
      </div>
    </div>
  );
}
