"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

import { SiteIcon } from "@/app/components/SiteIcon";

export const DEFAULT_BOOKING_SUBJECT = "Allmän förfrågan";

type BookingModalContextValue = {
  openBookingModal: (serviceProduct?: string) => void;
  closeBookingModal: () => void;
};

const BookingModalContext = createContext<BookingModalContextValue | null>(
  null,
);

export function useBookingModal(): BookingModalContextValue {
  const ctx = useContext(BookingModalContext);
  if (!ctx) {
    throw new Error(
      "useBookingModal must be used within BookingModalProvider",
    );
  }
  return ctx;
}

function FieldLabel({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: string;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="text-[11px] font-bold tracking-[0.22em] text-white/70"
    >
      {children}
    </label>
  );
}

function Input({
  id,
  type = "text",
  value,
  onChange,
  placeholder,
  readOnly,
}: {
  id: string;
  type?: string;
  value: string;
  onChange?: (v: string) => void;
  placeholder?: string;
  readOnly?: boolean;
}) {
  return (
    <input
      id={id}
      type={type}
      value={value}
      readOnly={readOnly}
      onChange={(e) => onChange?.(e.target.value)}
      placeholder={placeholder}
      className={[
        "h-11 w-full rounded-xl border border-white/10 bg-[#050A1A]/60 px-4 text-sm text-white",
        "placeholder:text-white/35",
        "ring-1 ring-transparent",
        "transition focus:border-[#7ea2ff]/45 focus:outline-none focus:ring-[#7ea2ff]/25",
        readOnly ? "opacity-95" : "",
      ].join(" ")}
    />
  );
}

function DateInput({
  id,
  value,
  onChange,
}: {
  id: string;
  value: string;
  onChange: (v: string) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  const openPicker = () => {
    const el = inputRef.current;
    if (!el) return;
    try {
      type WithShowPicker = HTMLInputElement & { showPicker?: () => void };
      const sp = (el as WithShowPicker).showPicker;
      if (typeof sp === "function") sp.call(el);
      else el.focus();
    } catch {
      el.focus();
    }
  };

  return (
    <div
      className={[
        "group relative flex h-11 w-full min-w-0 items-center gap-1 rounded-xl border-2 border-white/15 bg-[#050A1A]/60 pl-3 pr-1 text-sm text-white",
        "ring-1 ring-transparent transition",
        "hover:border-[#7ea2ff]/45 hover:bg-[#0a1733]/55",
        "focus-within:border-[#7ea2ff]/65 focus-within:bg-[#0a1733]/70 focus-within:ring-[#7ea2ff]/35 focus-within:shadow-[0_18px_60px_-30px_rgba(31,92,255,0.65)]",
      ].join(" ")}
    >
      <SiteIcon
        name="calendar"
        className="pointer-events-none mr-1 h-4 w-4 shrink-0 text-[#9bb8ff] transition group-hover:text-white"
      />
      <input
        ref={inputRef}
        id={id}
        type="date"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Datum för förfrågan"
        className={[
          "h-full min-w-0 flex-1 bg-transparent px-1 text-sm outline-none",
          value ? "text-white" : "text-white/55",
          "[&::-webkit-calendar-picker-indicator]:absolute",
          "[&::-webkit-calendar-picker-indicator]:inset-0",
          "[&::-webkit-calendar-picker-indicator]:h-full",
          "[&::-webkit-calendar-picker-indicator]:w-full",
          "[&::-webkit-calendar-picker-indicator]:cursor-pointer",
          "[&::-webkit-calendar-picker-indicator]:opacity-0",
          "[color-scheme:dark]",
        ].join(" ")}
      />
      <button
        type="button"
        onClick={openPicker}
        aria-label="Öppna datumväljare"
        className={[
          "relative z-10 grid h-9 w-10 shrink-0 place-items-center rounded-lg bg-white/[0.06] text-[#cfdcff] ring-1 ring-white/10 sm:h-10 sm:w-11",
          "transition hover:bg-[#1f5cff]/30 hover:text-white hover:ring-[#7ea2ff]/45",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7ea2ff]/65",
        ].join(" ")}
      >
        <SiteIcon name="calendar" className="h-5 w-5" />
      </button>
    </div>
  );
}

function TextArea({
  id,
  value,
  onChange,
  placeholder,
}: {
  id: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <textarea
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={4}
      className={[
        "w-full resize-none rounded-xl border border-white/10 bg-[#050A1A]/60 px-4 py-3 text-sm text-white",
        "placeholder:text-white/35",
        "ring-1 ring-transparent",
        "transition focus:border-[#7ea2ff]/45 focus:outline-none focus:ring-[#7ea2ff]/25",
      ].join(" ")}
    />
  );
}

export function BookingModalProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState(false);
  const [subject, setSubject] = useState(DEFAULT_BOOKING_SUBJECT);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  const titleId = useId();
  const nameId = useId();
  const phoneId = useId();
  const emailId = useId();
  const dateId = useId();
  const serviceId = useId();
  const messageId = useId();

  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const submitLockRef = useRef(false);

  const closeBookingModal = useCallback(() => {
    setActive(false);
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => {
      setMounted(false);
      closeTimerRef.current = null;
    }, 320);
  }, []);

  const openBookingModal = useCallback((serviceProduct?: string) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    const next =
      serviceProduct?.trim() || DEFAULT_BOOKING_SUBJECT;
    setSubject(next);
    setName("");
    setPhone("");
    setEmail("");
    setDate("");
    setMessage("");
    setSending(false);
    setSubmitError(null);
    submitLockRef.current = false;
    setToast(null);
    setMounted(true);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setActive(true));
    });
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeBookingModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mounted, closeBookingModal]);

  useEffect(() => {
    if (!mounted) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mounted]);

  useEffect(() => {
    if (!toast) return;
    const t = window.setTimeout(() => setToast(null), 6500);
    return () => window.clearTimeout(t);
  }, [toast]);

  const canSubmit = useMemo(() => {
    return (
      name.trim().length > 1 &&
      phone.trim().length > 5 &&
      email.includes("@") &&
      email.trim().length > 3 &&
      date.trim().length > 0
    );
  }, [name, phone, email, date]);

  const ctxValue = useMemo(
    () => ({ openBookingModal, closeBookingModal }),
    [openBookingModal, closeBookingModal],
  );

  return (
    <BookingModalContext.Provider value={ctxValue}>
      {children}

      {mounted ? (
        <div className="fixed inset-0 z-[100]" aria-hidden={!active}>
          <div
            role="presentation"
            className={[
              "absolute inset-0 bg-black/65 backdrop-blur-md transition-opacity duration-300 ease-out",
              active ? "opacity-100" : "opacity-0",
            ].join(" ")}
            onMouseDown={closeBookingModal}
          />

          <div
            className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-y-auto px-3 py-3 sm:p-6"
            style={{
              paddingTop: "max(env(safe-area-inset-top), 0.75rem)",
              paddingBottom: "max(env(safe-area-inset-bottom), 0.75rem)",
            }}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              className={[
                "pointer-events-auto my-auto flex max-h-full w-full max-w-xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#050A1A]/88 shadow-[0_90px_260px_-170px_rgba(0,0,0,0.98)] ring-1 ring-[#7ea2ff]/20 backdrop-blur-xl transition-[opacity,transform] duration-300 ease-out sm:max-w-2xl",
                active
                  ? "opacity-100 scale-100 translate-y-0"
                  : "opacity-0 scale-[0.96] translate-y-2",
              ].join(" ")}
              onMouseDown={(e) => e.stopPropagation()}
            >
              <div className="relative flex max-h-full min-h-0 flex-col">
                <div
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(65%_55%_at_50%_0%,rgba(31,92,255,0.26)_0%,rgba(5,10,26,0.12)_45%,rgba(5,10,26,0.88)_100%)]"
                  aria-hidden="true"
                />
                <div className="relative flex min-h-0 flex-1 flex-col overflow-y-auto p-4 sm:p-8">
                  <div className="flex items-start justify-between gap-3 sm:gap-4">
                    <div className="min-w-0 flex-1">
                      <div className="text-[10px] font-bold tracking-[0.32em] text-[#9bb8ff] sm:text-xs">
                        FÖRFRÅGAN
                      </div>
                      <h2
                        id={titleId}
                        className="mt-2 text-balance text-xl font-extrabold tracking-tight text-white sm:mt-3 sm:text-3xl"
                      >
                        {subject === DEFAULT_BOOKING_SUBJECT
                          ? "Kontakta oss"
                          : `Offert / förfrågan`}
                      </h2>
                      <p className="mt-2 text-sm leading-relaxed text-white/80">
                        <span className="break-words font-semibold text-white/90">
                          {subject}
                        </span>
                        <span className="text-white/65">
                          {" "}
                          — fyll i formuläret så återkommer vi.
                        </span>
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={closeBookingModal}
                      className="sticky top-0 grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/10 bg-[#050A1A]/85 text-white/85 backdrop-blur transition hover:bg-white/12 hover:text-white"
                      aria-label="Stäng"
                    >
                      ✕
                    </button>
                  </div>

                  <form
                    className="mt-5 grid gap-4 sm:mt-7 sm:gap-5"
                    onSubmit={async (e) => {
                      e.preventDefault();
                      console.log("[booking modal] submit handler entered", {
                        canSubmit,
                        sending,
                        locked: submitLockRef.current,
                      });
                      if (!canSubmit) {
                        console.warn(
                          "[booking modal] submission blocked — canSubmit is false",
                          {
                            name,
                            phone,
                            emailHasAt: email.includes("@"),
                            emailLength: email.trim().length,
                            dateLength: date.trim().length,
                          },
                        );
                        return;
                      }
                      if (submitLockRef.current) {
                        console.warn(
                          "[booking modal] submission blocked — already in flight",
                        );
                        return;
                      }
                      submitLockRef.current = true;
                      setSending(true);
                      setSubmitError(null);
                      try {
                        const payload = {
                          name,
                          phone,
                          email,
                          date,
                          subject,
                          message,
                        };
                        console.log(
                          "[booking modal] POST /api/booking payload",
                          payload,
                        );
                        const res = await fetch("/api/booking", {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify(payload),
                        });
                        const data = (await res.json().catch(() => ({}))) as {
                          ok?: boolean;
                          error?: string;
                          missing?: string[];
                          message?: string;
                        };
                        console.log(
                          "[booking modal] response",
                          res.status,
                          data,
                        );
                        if (!res.ok) {
                          console.error(
                            "[booking modal] submit failed",
                            res.status,
                            data,
                          );
                          submitLockRef.current = false;
                          setSending(false);
                          const fallback =
                            res.status === 503
                              ? "Formuläret är inte konfigurerat för e-post än. Ring oss gärna."
                              : "Det gick inte att skicka förfrågan. Försök igen.";
                          setSubmitError(
                            typeof data.message === "string" && data.message
                              ? data.message
                              : fallback,
                          );
                          return;
                        }
                        submitLockRef.current = false;
                        setSending(false);
                        setToast(
                          "Förfrågan skickad! Vi återkommer så snart som möjligt.",
                        );
                        closeBookingModal();
                      } catch (err) {
                        console.error("[booking modal] network error", err);
                        submitLockRef.current = false;
                        setSending(false);
                        setSubmitError(
                          "Nätverksfel — kontrollera uppkopplingen och försök igen.",
                        );
                      }
                    }}
                  >
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-4">
                      <div className="grid gap-1.5 sm:gap-2">
                        <FieldLabel htmlFor={nameId}>NAMN</FieldLabel>
                        <Input
                          id={nameId}
                          value={name}
                          onChange={setName}
                          placeholder="Ditt namn"
                        />
                      </div>
                      <div className="grid gap-1.5 sm:gap-2">
                        <FieldLabel htmlFor={phoneId}>TELEFON</FieldLabel>
                        <Input
                          id={phoneId}
                          value={phone}
                          onChange={setPhone}
                          placeholder="Telefonnummer"
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-4">
                      <div className="grid gap-1.5 sm:gap-2">
                        <FieldLabel htmlFor={emailId}>E-POST</FieldLabel>
                        <Input
                          id={emailId}
                          type="email"
                          value={email}
                          onChange={setEmail}
                          placeholder="din@epost.se"
                        />
                      </div>
                      <div className="grid gap-1.5 sm:gap-2">
                        <FieldLabel htmlFor={dateId}>DATUM</FieldLabel>
                        <DateInput
                          id={dateId}
                          value={date}
                          onChange={setDate}
                        />
                      </div>
                    </div>

                    <div className="grid gap-1.5 sm:gap-2">
                      <FieldLabel htmlFor={serviceId}>
                        TJÄNST / PRODUKT
                      </FieldLabel>
                      <Input id={serviceId} value={subject} readOnly />
                    </div>

                    <div className="grid gap-1.5 sm:gap-2">
                      <FieldLabel htmlFor={messageId}>MEDDELANDE</FieldLabel>
                      <TextArea
                        id={messageId}
                        value={message}
                        onChange={setMessage}
                        placeholder="Plats, antal gäster, önskemål eller frågor."
                      />
                    </div>

                    {submitError ? (
                      <div
                        className="rounded-2xl border border-rose-400/35 bg-rose-950/40 p-4 text-sm text-rose-100/95"
                        role="alert"
                      >
                        {submitError}
                      </div>
                    ) : null}

                    <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:justify-end">
                      <button
                        type="button"
                        onClick={closeBookingModal}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white/[0.08] px-6 py-3 text-xs font-bold tracking-[0.18em] text-white ring-1 ring-white/15 transition hover:bg-white/[0.12] hover:shadow-[0_28px_90px_-44px_rgba(31,92,255,0.85)] sm:w-auto"
                      >
                        Stäng
                      </button>
                      <button
                        type="submit"
                        aria-disabled={!canSubmit || sending}
                        className={[
                          "inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#1f5cff] px-6 py-3 text-xs font-bold tracking-[0.18em] text-white shadow-[0_38px_120px_-40px_rgba(31,92,255,1)] ring-1 ring-[#7ea2ff]/35 transition-all duration-500 ease-out hover:bg-[#2b67ff] hover:shadow-[0_48px_150px_-46px_rgba(31,92,255,1)] sm:w-auto",
                          !canSubmit || sending
                            ? "cursor-not-allowed opacity-45 hover:bg-[#1f5cff] hover:shadow-[0_38px_120px_-40px_rgba(31,92,255,1)]"
                            : "",
                        ].join(" ")}
                      >
                        <SiteIcon name="mail" className="h-4 w-4" />
                        {sending ? "Skickar…" : "Skicka förfrågan"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {toast ? (
        <div
          className="pointer-events-none fixed bottom-6 left-1/2 z-[200] w-[min(22rem,calc(100vw-2rem))] -translate-x-1/2 px-3"
          role="status"
          aria-live="polite"
        >
          <div className="pointer-events-auto rounded-2xl border border-[#7ea2ff]/35 bg-[#050A1A]/95 px-5 py-4 text-center text-sm leading-relaxed text-white shadow-[0_28px_80px_-20px_rgba(31,92,255,0.55)] ring-1 ring-white/10 backdrop-blur-md">
            <div className="font-extrabold text-white">Tack!</div>
            <div className="mt-1 text-white/85">{toast}</div>
          </div>
        </div>
      ) : null}
    </BookingModalContext.Provider>
  );
}

export function BookingModalTrigger({
  subject,
  className,
  children,
}: {
  subject?: string;
  className?: string;
  children: ReactNode;
}) {
  const { openBookingModal } = useBookingModal();
  return (
    <button
      type="button"
      className={className}
      onClick={() => openBookingModal(subject)}
    >
      {children}
    </button>
  );
}
