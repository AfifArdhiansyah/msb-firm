"use client";

import React from 'react';

export default function ShareButtons({ title }: { title: string }) {
  const [url, setUrl] = React.useState<string>("");
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      setUrl(window.location.href);
    }
  }, []);

  const enc = encodeURIComponent;
  const shareText = title;

  const whatsapp = `https://wa.me/?text=${enc(`${shareText} ${url}`)}`;
  const twitter = `https://twitter.com/intent/tweet?text=${enc(shareText)}&url=${enc(url)}`;
  const linkedin = `https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}`;

  return (
    <div className="mt-10 flex items-center gap-3">
      <span className="text-slate-600">Bagikan:</span>
      <a
        className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-green-600 text-white hover:bg-green-700"
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Bagikan via WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.52 3.48A11.94 11.94 0 0012 0C5.37 0 0 5.37 0 12c0 2.11.55 4.11 1.59 5.9L0 24l6.2-1.62A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 21.82c-1.93 0-3.83-.52-5.48-1.49l-.39-.23-3.68.96.98-3.59-.25-.41A9.83 9.83 0 012.18 12C2.18 6.56 6.56 2.18 12 2.18S21.82 6.56 21.82 12 17.44 21.82 12 21.82zm5.38-7.34c-.29-.14-1.7-.84-1.96-.94-.26-.1-.45-.14-.64.14-.19.29-.74.94-.9 1.13-.16.19-.33.21-.62.07-.29-.14-1.23-.45-2.34-1.43-.86-.77-1.44-1.72-1.6-2.01-.17-.29-.02-.45.12-.59.12-.12.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.55-.88-2.12-.23-.56-.47-.49-.64-.5l-.55-.01c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.44s1.03 2.83 1.17 3.03c.14.19 2.03 3.1 4.9 4.36.69.3 1.23.48 1.65.61.69.22 1.31.19 1.8.12.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.25.17-1.36-.07-.11-.26-.18-.55-.32z"/></svg>
      </a>
      <a
        className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-blue-500 text-white hover:bg-blue-600"
        href={twitter}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Bagikan ke Twitter"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M19.633 7.997c.013.18.013.36.013.54 0 5.49-4.178 11.82-11.82 11.82-2.35 0-4.53-.69-6.367-1.877.324.038.636.05.973.05 1.94 0 3.727-.662 5.152-1.79-1.818-.038-3.35-1.23-3.878-2.873.26.038.52.063.793.063.38 0 .767-.05 1.124-.144-1.89-.38-3.313-2.05-3.313-4.055v-.05c.546.303 1.18.49 1.85.515-1.106-.74-1.832-2.006-1.832-3.44 0-.754.203-1.447.558-2.05 2.02 2.473 5.05 4.09 8.46 4.263-.063-.303-.088-.62-.088-.936 0-2.277 1.85-4.127 4.127-4.127 1.19 0 2.265.49 3.02 1.282.936-.18 1.832-.515 2.63-.973-.303.948-.948 1.74-1.79 2.24.83-.1 1.63-.318 2.37-.64-.546.818-1.243 1.54-2.03 2.116z"/></svg>
      </a>
      <a
        className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-blue-700 text-white hover:bg-blue-800"
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Bagikan ke LinkedIn"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-1 1.7-2.2 3.6-2.2 3.8 0 4.5 2.5 4.5 5.8V24h-4v-6.9c0-1.6 0-3.7-2.3-3.7s-2.7 1.8-2.7 3.6V24h-4V8z"/></svg>
      </a>
    </div>
  );
}

