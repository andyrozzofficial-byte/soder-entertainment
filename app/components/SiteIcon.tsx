type IconName =
  | "phone"
  | "mail"
  | "pin"
  | "arrowRight"
  | "rings"
  | "briefcase"
  | "cap"
  | "people"
  | "spark"
  | "grid"
  | "music";

export function SiteIcon({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) {
  const common = "h-5 w-5";
  const cn = className ?? common;

  if (name === "phone") {
    return (
      <svg
        className={cn}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.86.3 1.7.54 2.5a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.58-1.11a2 2 0 0 1 2.11-.45c.8.24 1.64.42 2.5.54A2 2 0 0 1 22 16.92Z" />
      </svg>
    );
  }

  if (name === "mail") {
    return (
      <svg
        className={cn}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4 4h16v16H4z" />
        <path d="m22 6-10 7L2 6" />
      </svg>
    );
  }

  if (name === "pin") {
    return (
      <svg
        className={cn}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 22s7-4.5 7-12a7 7 0 1 0-14 0c0 7.5 7 12 7 12Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    );
  }

  if (name === "arrowRight") {
    return (
      <svg
        className={cn}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M5 12h14" />
        <path d="m13 5 7 7-7 7" />
      </svg>
    );
  }

  if (name === "rings") {
    return (
      <svg
        className={cn}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="10" cy="14" r="4.5" />
        <circle cx="15.5" cy="10.5" r="4" />
        <path d="M13.2 12.2 12 13.4" />
      </svg>
    );
  }

  if (name === "briefcase") {
    return (
      <svg
        className={cn}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M10 6V5a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v1" />
        <rect x="3" y="6" width="18" height="14" rx="2" />
        <path d="M3 13h18" />
      </svg>
    );
  }

  if (name === "cap") {
    return (
      <svg
        className={cn}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 3 2 8l10 5 10-5-10-5Z" />
        <path d="M6 10v6c0 1 2.7 3 6 3s6-2 6-3v-6" />
        <path d="M22 8v7" />
      </svg>
    );
  }

  if (name === "people") {
    return (
      <svg
        className={cn}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="3" />
        <path d="M24 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a3 3 0 0 1 0 5.74" />
      </svg>
    );
  }

  if (name === "grid") {
    return (
      <svg
        className={cn}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="8" height="8" rx="2" />
        <rect x="13" y="3" width="8" height="8" rx="2" />
        <rect x="3" y="13" width="8" height="8" rx="2" />
        <rect x="13" y="13" width="8" height="8" rx="2" />
      </svg>
    );
  }

  if (name === "music") {
    return (
      <svg
        className={cn}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M9 18V6l12-2v12" />
        <circle cx="7" cy="18" r="3" />
        <circle cx="19" cy="16" r="3" />
      </svg>
    );
  }

  // spark / fireworks
  return (
    <svg
      className={cn}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 2v4" />
      <path d="M12 18v4" />
      <path d="M4.9 4.9 7.7 7.7" />
      <path d="M16.3 16.3 19.1 19.1" />
      <path d="M2 12h4" />
      <path d="M18 12h4" />
      <path d="M4.9 19.1 7.7 16.3" />
      <path d="M16.3 7.7 19.1 4.9" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  );
}

