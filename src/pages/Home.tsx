import { Link } from "@tanstack/react-router";
import { Trophy, Zap, Eye, Settings } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
      <header className="border-b border-[hsl(var(--border))] bg-[hsl(var(--card))]">
        <div className="container mx-auto px-6 py-4 flex items-center gap-3">
          <Zap className="w-7 h-7 text-[hsl(var(--primary))]" />
          <h1 className="text-3xl font-bold tracking-wide gold-glow" style={{ fontFamily: "Rajdhani, sans-serif" }}>
            FireZone
          </h1>
          <span className="text-[hsl(var(--muted-foreground))] text-sm ml-2">Free Fire Esports Live Overlay</span>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 gold-glow" style={{ fontFamily: "Rajdhani, sans-serif" }}>
            Real-Time Tournament Overlays
          </h2>
          <p className="text-[hsl(var(--muted-foreground))] text-xl max-w-2xl mx-auto">
            OBS-ready leaderboards and live overlays for Free Fire esports broadcasts. Instant updates, gold-accented design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Link
            to="/leaderboard"
            className="block p-6 rounded-xl bg-[hsl(var(--card))] border border-[hsl(var(--border))] card-glow hover:border-[hsl(var(--primary))] transition-all"
          >
            <Trophy className="w-8 h-8 text-[hsl(var(--primary))] mb-4" />
            <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "Rajdhani, sans-serif" }}>Leaderboard</h3>
            <p className="text-[hsl(var(--muted-foreground))] text-sm">Live tournament standings with real-time point tracking</p>
          </Link>

          <Link
            to="/overlay"
            className="block p-6 rounded-xl bg-[hsl(var(--card))] border border-[hsl(var(--border))] card-glow hover:border-[hsl(var(--primary))] transition-all"
          >
            <Eye className="w-8 h-8 text-[hsl(var(--primary))] mb-4" />
            <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "Rajdhani, sans-serif" }}>OBS Overlay</h3>
            <p className="text-[hsl(var(--muted-foreground))] text-sm">Transparent overlay designed for broadcast production</p>
          </Link>

          <Link
            to="/admin"
            className="block p-6 rounded-xl bg-[hsl(var(--card))] border border-[hsl(var(--border))] card-glow hover:border-[hsl(var(--primary))] transition-all"
          >
            <Settings className="w-8 h-8 text-[hsl(var(--primary))] mb-4" />
            <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "Rajdhani, sans-serif" }}>Admin Panel</h3>
            <p className="text-[hsl(var(--muted-foreground))] text-sm">Manage teams, scores, and tournament settings</p>
          </Link>
        </div>

        <div className="text-center">
          <Link
            to="/leaderboard"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] font-bold text-lg hover:opacity-90 transition-opacity"
            style={{ fontFamily: "Rajdhani, sans-serif" }}
          >
            <Trophy className="w-5 h-5" />
            View Live Leaderboard
          </Link>
        </div>
      </main>
    </div>
  );
}
