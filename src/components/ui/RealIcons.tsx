import React from "react";

interface IconProps {
  className?: string;
}

/**
 * Authentic Official WhatsApp Icon
 * High-precision vector of the official WhatsApp speech bubble with phone handset.
 */
export function WhatsAppIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12.031 2C6.5 2 2.016 6.484 2.016 12.016c0 1.96.564 3.79 1.54 5.343L2 22l4.829-1.524a9.96 9.96 0 005.202 1.457h.004c5.531 0 10.016-4.484 10.016-10.016C22.051 6.484 17.562 2 12.031 2zm0 18.232c-1.696 0-3.32-.47-4.729-1.311l-.339-.202-3.313 1.045 1.069-3.219-.221-.351a8.214 8.214 0 01-1.285-4.378c0-4.544 3.697-8.242 8.243-8.242 4.545 0 8.242 3.698 8.242 8.242 0 4.544-3.697 8.242-8.242 8.242zm4.516-6.173c-.248-.124-1.465-.723-1.693-.806-.228-.083-.394-.124-.56.124-.166.248-.642.806-.787.972-.145.166-.29.186-.538.062-.248-.124-1.049-.387-1.998-1.233-.738-.658-1.236-1.472-1.381-1.72-.145-.248-.016-.382.108-.506.112-.111.248-.29.373-.435.124-.145.166-.248.248-.415.083-.166.042-.311-.021-.435-.062-.124-.56-1.349-.767-1.847-.202-.485-.407-.419-.56-.427l-.477-.008c-.166 0-.435.062-.663.311-.228.248-.871.851-.871 2.075 0 1.224.891 2.407 1.016 2.573.124.166 1.752 2.675 4.244 3.751.593.256 1.056.409 1.417.524.595.189 1.137.162 1.565.098.477-.071 1.465-.599 1.672-1.179.207-.58.207-1.077.145-1.179-.062-.102-.228-.166-.477-.29z" />
    </svg>
  );
}

/**
 * Authentic WhatsApp Color Badge Icon
 * Green circular badge with the white telephone receiver inside.
 */
export function WhatsAppBadgeIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
      <circle cx="16" cy="16" r="16" fill="#25D366" />
      <path
        fill="#FFFFFF"
        d="M23.5 8.5C21.5 6.5 18.8 5.4 16 5.4 10.1 5.4 5.3 10.2 5.3 16.1c0 1.9.5 3.7 1.4 5.3L5.2 26.8l5.6-1.5c1.5.8 3.3 1.3 5.2 1.3 5.9 0 10.7-4.8 10.7-10.7 0-2.8-1.1-5.5-3.2-7.4zm-7.5 16.4c-1.6 0-3.2-.4-4.5-1.2l-.3-.2-3.3.9.9-3.2-.2-.3c-.9-1.4-1.4-3.1-1.4-4.8 0-4.9 4-8.8 8.9-8.8 2.4 0 4.6.9 6.2 2.6 1.7 1.7 2.6 3.9 2.6 6.3 0 4.8-4 8.7-8.9 8.7zm4.9-6.5c-.3-.1-1.6-.8-1.8-.9-.2-.1-.4-.1-.6.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.1-.4-2.2-1.4-.8-.7-1.4-1.6-1.5-1.9-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.3 0-.5-.1-.1-.6-1.5-.8-2-.2-.5-.5-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.3.3-1 .9-1 2.3s1 2.6 1.1 2.8c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.7.6.7.2 1.3.2 1.8.1.5-.1 1.6-.7 1.8-1.3.2-.7.2-1.2.2-1.3-.1-.2-.3-.2-.5-.4z"
      />
    </svg>
  );
}

/**
 * Authentic Phone Call Icon
 * Classic telephone handset silhouette - recognizable real call icon.
 */
export function RealCallIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-2.2 2.2a15.053 15.053 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1A11.36 11.36 0 018.57 3.93C8.57 3.42 8.15 3 7.64 3H4.11C3.6 3 3 3.39 3 4.14 3 13.56 10.44 21 19.86 21c.73 0 1.14-.58 1.14-1.1v-3.52c0-.51-.42-.93-.93-.93z" />
    </svg>
  );
}

/**
 * Authentic Phone Calling with Sound Waves
 * Solid phone handset with audio waves indicating an active call / ringing helpline.
 */
export function RealPhoneCallingIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-2.2 2.2a15.053 15.053 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1A11.36 11.36 0 018.57 3.93C8.57 3.42 8.15 3 7.64 3H4.11C3.6 3 3 3.39 3 4.14 3 13.56 10.44 21 19.86 21c.73 0 1.14-.58 1.14-1.1v-3.52c0-.51-.42-.93-.93-.93z" />
      <path
        d="M15.5 3.5a6.5 6.5 0 0 1 5 5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M14 6.5a3 3 0 0 1 2.5 2.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Authentic Email / Mail Icon
 * Solid mail envelope with crisp flap detailing.
 */
export function RealEmailIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}

/**
 * Authentic Map Pin Location Icon
 * Recognizable solid location drop pin.
 */
export function RealMapPinIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
    </svg>
  );
}

/**
 * Authentic Multi-Color Google Play Store Icon
 */
export function RealGooglePlayIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg viewBox="0 0 512 512" className={className} aria-hidden="true">
      <path
        fill="#00A0FF"
        d="M48.2 22.8C43.5 27.8 41 35.5 41 45.4v421.2c0 9.9 2.5 17.6 7.2 22.6l239.5-233.1L48.2 22.8z"
      />
      <path
        fill="#00E676"
        d="M366.4 171.1L287.7 256.1l78.7 85 88.5-50.6c11.9-6.8 19.1-19.3 19.1-34.4s-7.2-27.6-19.1-34.4l-88.5-50.6z"
      />
      <path
        fill="#FF3A44"
        d="M287.7 256.1L48.2 489.2c6.1 4.2 13.9 5.8 21.9 1.3l296.3-169.4-78.7-65z"
      />
      <path
        fill="#FFC400"
        d="M366.4 171.1L70.1 21.5c-8-4.5-15.8-2.9-21.9 1.3l239.5 233.3 78.7-85z"
      />
    </svg>
  );
}

/**
 * Authentic Apple Logo Icon for App Store
 */
export function RealAppleIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      viewBox="0 0 170 170"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.9-3.17-8.06-8.21-12.47-15.13-6.52-10.22-11.51-21.68-14.97-34.38-3.46-12.7-5.19-24.58-5.19-35.63 0-16.03 4.12-29.39 12.35-40.08 8.24-10.69 18.55-16.14 30.93-16.36 4.7 0 10.15 1.25 16.36 3.75 6.21 2.5 10.16 3.75 11.85 3.75 1.48 0 5.63-1.32 12.46-3.96 6.83-2.64 12.63-3.83 17.4-3.57 13.54.63 24.38 5.67 32.53 15.11-11.75 7.15-17.5 17.07-17.26 29.76.24 9.94 4.08 18.33 11.51 25.18 7.43 6.84 16.48 10.65 27.15 11.43-2.43 7.42-5.49 15.18-9.19 23.27l-.01.03zM119.22 33.15c0-7.72 2.76-14.88 8.28-21.49 5.53-6.61 12.4-10.74 20.61-12.39.21 1.27.32 2.43.32 3.49 0 7.73-2.87 15.08-8.61 22.05-5.74 6.98-12.87 11.19-21.4 12.64-.11-1.37-.2-2.79-.2-4.3z" />
    </svg>
  );
}

/**
 * Authentic Verified Badge Icon
 */
export function RealVerifiedBadgeIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
    </svg>
  );
}
