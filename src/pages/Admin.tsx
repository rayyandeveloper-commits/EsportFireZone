import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Settings, Plus, Save, Trash2, Zap } from "lucide-react";
import { toast } from "sonner";

interface Team {
  id: number;
  name: string;
  kills: number;
  placementPoints: number;
}

const INITIAL_TEAMS: Team[] = [
  { id: 1, name: "Alpha Squad", kills: 42, placementPoints: 102 },
  { id: 2, name: "Storm Raiders", kills: 38, placementPoints: 96 },
  { id: 3, name: "Blaze Force", kills: 35, placementPoints: 88 },
  { id: 4, name: "Phoenix Rising", kills: 30, placementPoints: 80 },
  { id: 5, name: "Shadow Wolves", kills: 28, placementPoints: 76 },
];

export default function AdminPage() {
  const [teams, setTeams] = useState<Team[]>(INITIAL_TEAMS);
  const [newName, setNewName] = useState("");

  const addTeam = () => {
    if (!newName.trim()) return;
    setTeams((prev) => [...prev, { id: Date.now(), name: newName.trim(), kills: 0, placementPoints: 0 }]);
    setNewName("");
    toast.success(`Team "${newName.trim()}" added`);
  };

  const removeTeam = (id: number) => {
    setTeams((prev) => prev.filter((t) => t.id !== id));
    toast.info("Team removed");
  };

  const updateTeam = (id: number, field: "kills" | "placementPoints", value: number) => {
    setTeams((prev) => prev.map((t) => (t.id === id ? { ...t, [field]: Math.max(0, value) } : t)));
  };

  return (
    <div className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
      <header className="border-b border-[hsl(var(--border))] bg-[hsl(var(--card))] sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Zap className="w-6 h-6 text-[hsl(var(--primary))]" />
            <span className="text-2xl font-bold gold-glow" style={{ fontFamily: "Rajdhani, sans-serif" }}>FireZone</span>
            <span className="text-[hsl(var(--muted-foreground))] text-sm">/ Admin</span>
          </div>
          <Link to="/" className="text-[hsl(var(--muted-foreground))] text-sm hover:text-[hsl(var(--foreground))] transition-colors">← Back</Link>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8 max-w-4xl">
        <div className="flex items-center gap-3 mb-8">
          <Settings className="w-7 h-7 text-[hsl(var(--primary))]" />
          <h1 className="text-4xl font-bold" style={{ fontFamily: "Rajdhani, sans-serif" }}>Admin Panel</h1>
          <button
            onClick={() => toast.success("Scores saved! Leaderboard updated.")}
            className="ml-auto flex items-center gap-2 px-4 py-2 rounded-lg bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] font-semibold hover:opacity-90 transition-opacity"
          >
            <Save className="w-4 h-4" />
            Save All
          </button>
        </div>

        <div className="mb-6 p-4 rounded-xl bg-[hsl(var(--card))] border border-[hsl(var(--border))]">
          <h2 className="text-lg font-bold mb-3" style={{ fontFamily: "Rajdhani, sans-serif" }}>Add Team</h2>
          <div className="flex gap-3">
            <input
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addTeam()}
              placeholder="Team name..."
              className="flex-1 px-3 py-2 rounded-lg bg-[hsl(var(--input))] border border-[hsl(var(--border))] text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))] focus:outline-none focus:ring-1 focus:ring-[hsl(var(--ring))]"
            />
            <button
              onClick={addTeam}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[hsl(var(--secondary))] border border-[hsl(var(--border))] hover:border-[hsl(var(--primary))] transition-colors font-semibold"
            >
              <Plus className="w-4 h-4" />
              Add
            </button>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden border border-[hsl(var(--border))] bg-[hsl(var(--card))]">
          <div className="grid grid-cols-5 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-[hsl(var(--muted-foreground))] border-b border-[hsl(var(--border))]">
            <span className="col-span-2">Team</span>
            <span className="text-center">Kills</span>
            <span className="text-center">Placement Pts</span>
            <span className="text-center">Remove</span>
          </div>

          {teams.map((team) => (
            <div key={team.id} className="grid grid-cols-5 px-6 py-3 border-b border-[hsl(var(--border))] last:border-0 items-center">
              <div className="col-span-2 font-semibold">{team.name}</div>
              <div className="flex justify-center">
                <input
                  type="number"
                  value={team.kills}
                  onChange={(e) => updateTeam(team.id, "kills", parseInt(e.target.value) || 0)}
                  className="w-20 text-center px-2 py-1 rounded bg-[hsl(var(--input))] border border-[hsl(var(--border))] text-[hsl(var(--foreground))] focus:outline-none focus:ring-1 focus:ring-[hsl(var(--ring))]"
                />
              </div>
              <div className="flex justify-center">
                <input
                  type="number"
                  value={team.placementPoints}
                  onChange={(e) => updateTeam(team.id, "placementPoints", parseInt(e.target.value) || 0)}
                  className="w-20 text-center px-2 py-1 rounded bg-[hsl(var(--input))] border border-[hsl(var(--border))] text-[hsl(var(--foreground))] focus:outline-none focus:ring-1 focus:ring-[hsl(var(--ring))]"
                />
              </div>
              <div className="flex justify-center">
                <button
                  onClick={() => removeTeam(team.id)}
                  className="p-1.5 rounded text-[hsl(var(--muted-foreground))] hover:text-red-400 hover:bg-red-400/10 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-4 text-xs text-[hsl(var(--muted-foreground))] text-center">
          Total Points = Placement Points + (Kills × 2)
        </p>
      </main>
    </div>
  );
}
