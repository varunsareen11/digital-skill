import { useCallback, useMemo, useState } from 'react';
import { certificateAlt, certificates } from '../../data/certificates';
import type { LightboxImage } from './Lightbox';

/** Certificates whose image loads; entries with a missing file are dropped once the browser reports the error. */
export function useCertificates() {
  const [missing, setMissing] = useState<Set<string>>(() => new Set());

  const markMissing = useCallback(
    (image: string) =>
      setMissing((current) => (current.has(image) ? current : new Set(current).add(image))),
    [],
  );

  const visible = useMemo(() => certificates.filter((certificate) => !missing.has(certificate.image)), [missing]);

  const images: LightboxImage[] = useMemo(
    () => visible.map((certificate) => ({ src: certificate.image, alt: certificateAlt, caption: certificate.caption })),
    [visible],
  );

  return { visible, images, markMissing };
}
