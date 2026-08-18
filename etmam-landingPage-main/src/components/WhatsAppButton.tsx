'use client';

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

type WhatsAppButtonProps = {
  /** Full international phone number WITHOUT the leading '+' or world dialing country code,
   *  e.g. "96872552026" for Oman (+968) 72552026. */
  phoneNumber?: string;
  /** Optional pre-filled message text (URL-encoded automatically). */
  message?: string;
  /** Icon size in pixels. */
  size?: number;
  /** Optional extra class names appended to the button. */
  className?: string;
  /** Accessible label for screen readers. */
  label?: string;
};

/**
 * A fixed, floating WhatsApp Call-to-Action button.
 *
 * - Sits fixed at the bottom-right corner, floating above content on scroll.
 * - Opens a direct WhatsApp chat link in a new tab.
 * - Rounded green background with a subtle box-shadow for elevation.
 * - Subtle hover scale + soft pulse ring animation to encourage clicks.
 * - Responsive sizing (smaller on mobile) and auto-moves above the safe-area inset.
 */
export default function WhatsAppButton({
  phoneNumber = '96872552026',
  message = '',
  size = 32,
  className = '',
  label = 'Chat with us on WhatsApp',
}: WhatsAppButtonProps) {
  const encodedMessage = encodeURIComponent(message);
  const href = `https://api.whatsapp.com/send?phone=${phoneNumber}${message ? `&text=${encodedMessage}` : ''}`;

  return (
    <>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        title={label}
        className={`bb-whatsapp-cta ${className}`}
      >
        <FaWhatsapp size={size} aria-hidden="true" />
      </a>

      <style>{`
        .bb-whatsapp-cta {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background-color: #25D366;
          color: #ffffff;
          box-shadow: 0 6px 16px rgba(37, 211, 102, 0.45),
                      0 2px 6px rgba(0, 0, 0, 0.2);
          text-decoration: none;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          animation: bb-whatsapp-pulse 2.4s infinite;
        }

        .bb-whatsapp-cta:hover,
        .bb-whatsapp-cta:focus-visible {
          transform: scale(1.12);
          box-shadow: 0 10px 24px rgba(37, 211, 102, 0.55),
                      0 4px 10px rgba(0, 0, 0, 0.25);
          outline: none;
        }

        .bb-whatsapp-cta:active {
          transform: scale(0.98);
        }

        /* Soft expanding pulse ring */
        @keyframes bb-whatsapp-pulse {
          0% {
            box-shadow: 0 6px 16px rgba(37, 211, 102, 0.45),
                        0 0 0 0 rgba(37, 211, 102, 0.5);
          }
          70% {
            box-shadow: 0 6px 16px rgba(37, 211, 102, 0.45),
                        0 0 0 14px rgba(37, 211, 102, 0);
          }
          100% {
            box-shadow: 0 6px 16px rgba(37, 211, 102, 0.45),
                        0 0 0 0 rgba(37, 211, 102, 0);
          }
        }

        /* Responsive: slightly smaller on mobile, keep above safe-area */
        @media (max-width: 767px) {
          .bb-whatsapp-cta {
            width: 52px;
            height: 52px;
            bottom: 18px;
            right: 18px;
          }
        }

        @supports (padding-bottom: env(safe-area-inset-bottom)) {
          .bb-whatsapp-cta {
            bottom: calc(18px + env(safe-area-inset-bottom));
          }
        }

        /* Respect users who prefer reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .bb-whatsapp-cta {
            animation: none;
            transition: none;
          }
        }
      `}</style>
    </>
  );
}
