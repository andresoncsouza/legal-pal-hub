import { useEffect, useRef, useState, type ElementType } from "react";
import { cn } from "@/lib/utils";

/**
 * Offset Animation: revela o texto palavra por palavra, com deslocamento
 * (offset) progressivo ao entrar na viewport.
 */
export function RevealText({
  text,
  className,
  as: Tag = "span",
  delay = 0,
  step = 70,
}: {
  text: string;
  className?: string;
  as?: ElementType;
  delay?: number;
  step?: number;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const words = text.split(" ");

  return (
    <Tag ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="offset-word">
          <span
            className={cn("offset-word-inner", visible && "offset-word-visible")}
            style={{ transitionDelay: `${delay + i * step}ms` }}
          >
            {word}
          </span>
          {i < words.length - 1 ? " " : null}
        </span>
      ))}
    </Tag>
  );
}
