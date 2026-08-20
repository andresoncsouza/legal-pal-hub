import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

/**
 * Rolagem suave em todas as abas:
 * - troca de página: sobe ao topo com animação suave;
 * - links com âncora (#secao): rolagem suave até o elemento.
 */
export function ScrollBehavior() {
  const { pathname, hash } = useRouterState({ select: (s) => s.location });

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const behavior: ScrollBehavior = reduce ? "auto" : "smooth";

    if (hash) {
      const target = document.getElementById(hash.replace(/^#/, ""));
      if (target) {
        target.scrollIntoView({ behavior, block: "start" });
        return;
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior });
  }, [pathname, hash]);

  return null;
}
