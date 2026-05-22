import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Trophy, Zap, RefreshCw, Crown } from "lucide-react";

interface Team {
  id: number;
  name: string;
  kills: number;
  placement: number;
  totalPoints: number;
}

const TEAMS: Team[] = [
  { id: 1, name: "Alpha Squad", kills: 42, placement: 12, totalPoints: 186 },
  { id: 2, name: "Storm Raiders", kills: 38, placement: 10, totalPoints: 172 },
  { id: 3, name: "Blaze Force", kills: 35, placement: 8, totalPoints: 158 },
  { id: 4, name: "Phoenix Rising", kills: 30, placement: 6, totalPoints: 140 },
  { id: 5, name: "Shadow Wolves", kills: 28, placement: 5, totalPoints: 132 },
  { id: 6, name: "Iron Fist", kills: 25, placement: 4, totalPoints: 118 },
  { id: 7, name: "Night Hawks", kills: 22, placement: 4, totalPoints: 108 },
  { id: 8, name: "Apex Hunters", kills: 20, placement: 3, totalPoints: 98 },
  { id: 9, name: "Thunder Bolts", kills: 18, placement: 3, totalPoints: 90 },
  { id: 10, name: "Dragon Fire", kills: 15, placement: 2, totalPoints: 78 },
  { id: 11, name: "Steel Vipers", kills: 12, placement: 2, totalPoints: 64 },
  { id: 12, name: "Ghost Legion", kills: 10, placement: 1, totalPoints: 52 },
];

function getRankColor(rank: number) {
  if (rank === 1) return "text-yellow-400";
  if (rank === 2) return "text-gray-300";
  if (rank === 3) return "text-amber-600";
  return "text-[hsl(var(--muted-foreground))]";
}

export default function LeaderboardPage() {
  const [teams] = useState<Team[]>([...TEAMS].sort((a, b) => b.totalPoints - a.totalPoints));
  const [lastUpdated] = useState(new Date());

  return (
    <div className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
      <header className="border-b border-[hsl(var(--border))] bg-[hsl(var(--card))] sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Zap className="w-6 h-6 text-[hsl(var(--primary))]" />
            <span className="text-2xl font-bold gold-glow" style={{ fontFamily: "Rajdhani, sans-serif" }}>FireZone</span>
            <span className="text-[hsl(var(--muted-foreground))] text-sm">/ Leaderboard</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-[hsl(var(--muted-foreground))] text-sm">
              <RefreshCw className="w-4 h-4" />
              {lastUpdated.toLocaleTimeString()}
            </div>
            <Link to="/" className="text-[hsl(var(--muted-foreground))] text-sm hover:text-[hsl(var(--foreground))] transition-colors">← Back</Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <div className="flex items-center gap-3 mb-8">
          <Trophy className="w-7 h-7 text-[hsl(var(--primary))]" />
          <h1 className="text-4xl font-bold" style={{ fontFamily: "Rajdhani, sans-serif" }}>Tournament Standings</h1>
          <span className="ml-auto px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-sm font-medium flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse inline-block" />
            LIVE
          </span>
        </div>

        <div className="rounded-xl overflow-hidden border border-[hsl(var(--border))] bg-[hsl(var(--card))] card-glow">
          <div className="grid grid-cols-6 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-[hsl(var(--muted-foreground))] border-b border-[hsl(var(--border))]">
            <span>Rank</span>
            <span className="col-span-2">Team</span>
            <span className="text-right">Kills</span>
            <span className="text-right">Matches</span>
            <span className="text-right">Points</span>
          </div>

          {teams.map((team, index) => {
            const rank = index + 1;
            return (
              <div
                key={team.id}
                className={`grid grid-cols-6 px-6 py-4 border-b border-[hsl(var(--border))] last:border-0 hover:bg-[hsl(var(--secondary))] transition-colors ${rank <= 3 ? "bg-yellow-500/5" : ""}`}
              >
                <div className={`flex items-center gap-2 font-bold text-lg ${getRankColor(rank)}`} style={{ fontFamily: "Rajdhani, sans-serif" }}>
                  {rank === 1 && <Crown className="w-4 h-4 text-yellow-400" />}
                  #{rank}
                </div>
                <div className="col-span-2 flex items-center">
                  <div className="w-8 h-8 rounded-lg bg-yellow-500/10 border border-[hsl(var(--border))] flex items-center justify-center text-xs font-bold text-[hsl(var(--primary))] mr-3">
                    {team.name.slice(0, 2).toUpperCase()}
                  </div>
                  <span className="font-semibold">{team.name}</span>
                </div>
                <div className="flex items-center justify-end font-mono text-red-400">{team.kills}</div>
                <div className="flex items-center justify-end font-mono text-[hsl(var(--muted-foreground))]">{team.placement}</div>
                <div className={`flex items-center justify-end font-bold text-lg font-mono ${getRankColor(rank)}`}>{team.totalPoints}</div>
              </div>
            );
          })}
        </div>

        <div className="mt-4 text-xs text-[hsl(var(--muted-foreground))] text-center">
          Points = Placement Points + (Kill Points × 2) · {teams.length} teams competing
        </div>
      </main>
    </div>
  );
}
