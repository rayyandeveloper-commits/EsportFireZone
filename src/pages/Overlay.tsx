import { Crown, Skull } from "lucide-react";

const TOP_TEAMS = [
  { rank: 1, name: "Alpha Squad", kills: 42, points: 186 },
  { rank: 2, name: "Storm Raiders", kills: 38, points: 172 },
  { rank: 3, name: "Blaze Force", kills: 35, points: 158 },
  { rank: 4, name: "Phoenix Rising", kills: 30, points: 140 },
  { rank: 5, name: "Shadow Wolves", kills: 28, points: 132 },
];

function getRankColor(rank: number) {
  if (rank === 1) return "#ffd700";
  if (rank === 2) return "#c0c0c0";
  if (rank === 3) return "#cd7f32";
  return "#aaaaaa";
}

export default function OverlayPage() {
  return (
    <div className="min-h-screen bg-black/80 flex flex-col items-end justify-start p-8 pt-16">
      <div className="w-72">
        <div className="flex items-center gap-2 mb-3 px-3 py-2 rounded-t-lg" style={{ background: "linear-gradient(90deg, #b8860b, #ffd700)" }}>
          <Crown className="w-4 h-4 text-black" />
          <span className="font-bold text-black text-sm tracking-widest uppercase" style={{ fontFamily: "Rajdhani, sans-serif" }}>
            Top Teams
          </span>
          <span className="ml-auto flex items-center gap-1 text-black/70 text-xs">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse inline-block" />
            LIVE
          </span>
        </div>

        <div className="rounded-b-lg overflow-hidden border border-yellow-700/40" style={{ background: "rgba(0,0,0,0.85)" }}>
          {TOP_TEAMS.map((team) => (
            <div key={team.rank} className="flex items-center gap-3 px-3 py-2 border-b border-white/5 last:border-0">
              <span className="font-bold text-base w-6 text-center" style={{ color: getRankColor(team.rank), fontFamily: "Rajdhani, sans-serif" }}>
                {team.rank}
              </span>
              <span className="flex-1 text-white text-sm font-medium truncate" style={{ fontFamily: "Rajdhani, sans-serif" }}>
                {team.name}
              </span>
              <div className="flex items-center gap-1 text-red-400 text-xs">
                <Skull className="w-3 h-3" />
                <span>{team.kills}</span>
              </div>
              <span className="font-bold text-base w-10 text-right" style={{ color: getRankColor(team.rank), fontFamily: "Rajdhani, sans-serif" }}>
                {team.points}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-3 text-center text-yellow-600/60 text-xs tracking-widest uppercase" style={{ fontFamily: "Rajdhani, sans-serif" }}>
          FireZone Overlay · OBS Ready
        </div>
      </div>

      <div className="fixed bottom-4 left-0 right-0 flex justify-center">
        <div className="px-4 py-2 rounded-lg bg-black/60 border border-yellow-700/30 text-yellow-600/60 text-xs">
          OBS overlay view — add this page as a browser source with transparent background
        </div>
      </div>
    </div>
  );
}
