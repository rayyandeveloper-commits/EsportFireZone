import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  RouterProvider,
  createRouter,
  createRootRoute,
  createRoute,
  Outlet,
} from "@tanstack/react-router";
import { Toaster } from "sonner";
import HomePage from "./pages/Home";
import LeaderboardPage from "./pages/Leaderboard";
import OverlayPage from "./pages/Overlay";
import AdminPage from "./pages/Admin";
import "./index.css";

const rootRoute = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <Toaster theme="dark" position="top-right" />
    </>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const leaderboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/leaderboard",
  component: LeaderboardPage,
});

const overlayRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/overlay",
  component: OverlayPage,
});

const adminRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin",
  component: AdminPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  leaderboardRoute,
  overlayRoute,
  adminRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("root")!;
createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
