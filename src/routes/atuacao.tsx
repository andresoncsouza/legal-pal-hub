import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/atuacao")({
  component: AtuacaoLayout,
});

function AtuacaoLayout() {
  return <Outlet />;
}
