import React, { useEffect, useMemo, useState } from "react";

const DATA = {
  saturday: {
    label: "Saturday",
    date: "May 16",
    start: "12:00",
    end: "23:00",
    stages: ["AREA.97", "AREA.01", "AREA.07", "AREA.14", "AREA.22", "AREA.24"],
    events: [
      { stage: "AREA.97", start: "12:00", end: "14:00", title: "Luna Ludmila" },
      { stage: "AREA.97", start: "14:00", end: "15:45", title: "Shed vs Head High" },
      { stage: "AREA.97", start: "15:45", end: "17:30", title: "Rod x Sterac", note: "Detroit techno set" },
      { stage: "AREA.97", start: "17:30", end: "19:00", title: "Joris Voorn", note: "Vinyl only techno set" },
      { stage: "AREA.97", start: "19:00", end: "21:00", title: "Alarico x Ben Klock" },
      { stage: "AREA.97", start: "21:00", end: "23:00", title: "Collabs 3000", note: "Chris Liebing & Speedy J" },

      { stage: "AREA.01", start: "12:00", end: "14:30", title: "Varuna Agosti" },
      { stage: "AREA.01", start: "14:30", end: "16:30", title: "DJ Red" },
      { stage: "AREA.01", start: "16:30", end: "18:15", title: "Andy Martin" },
      { stage: "AREA.01", start: "18:15", end: "20:15", title: "Len Faki x Quest" },
      { stage: "AREA.01", start: "20:15", end: "21:30", title: "Planetary Assault Systems", note: "Live" },
      { stage: "AREA.01", start: "21:30", end: "23:00", title: "Rene Wise" },

      { stage: "AREA.07", start: "12:00", end: "14:00", title: "Fiene" },
      { stage: "AREA.07", start: "14:00", end: "16:00", title: "Emilija x Fenrick" },
      { stage: "AREA.07", start: "16:00", end: "17:45", title: "Noise Mafia x Peterblue" },
      { stage: "AREA.07", start: "17:45", end: "19:30", title: "Fumi x SPFDJ" },
      { stage: "AREA.07", start: "19:30", end: "21:30", title: "Kobosil x Ornella" },
      { stage: "AREA.07", start: "21:30", end: "23:00", title: "DIØN" },

      { stage: "AREA.14", start: "12:00", end: "14:00", title: "Essy" },
      { stage: "AREA.14", start: "14:00", end: "15:45", title: "Dr. G" },
      { stage: "AREA.14", start: "15:45", end: "17:15", title: "BIIANCO" },
      { stage: "AREA.14", start: "17:15", end: "19:00", title: "DJ Boring" },
      { stage: "AREA.14", start: "19:00", end: "21:00", title: "Cybersex" },
      { stage: "AREA.14", start: "21:00", end: "23:00", title: "Ellen Allien" },

      { stage: "AREA.22", start: "12:00", end: "14:00", title: "Morgan" },
      { stage: "AREA.22", start: "14:00", end: "16:00", title: "Naone" },
      { stage: "AREA.22", start: "16:00", end: "18:00", title: "Alarico", note: "Presents Kenji Hina" },
      { stage: "AREA.22", start: "18:00", end: "19:00", title: "Sweely" },
      { stage: "AREA.22", start: "19:00", end: "21:00", title: "Ryan Elliott" },
      { stage: "AREA.22", start: "21:00", end: "23:00", title: "Blasha & Allatt", note: "House set" },

      { stage: "AREA.24", start: "12:00", end: "14:00", title: "Prance" },
      { stage: "AREA.24", start: "14:00", end: "16:00", title: "Undivulged: Beau Didier, Flits, Isaiah & Lasse", note: "F2F set" },
      { stage: "AREA.24", start: "16:00", end: "17:00", title: "Dold", note: "Live" },
      { stage: "AREA.24", start: "17:00", end: "19:00", title: "Ogazón", note: "Techno set" },
      { stage: "AREA.24", start: "19:00", end: "20:00", title: "Chontane", note: "Live" },
      { stage: "AREA.24", start: "20:00", end: "23:00", title: "Hayes Collective: Cravo, Nørbak, Temudo & Vil", note: "F2F set" },
    ],
  },
  sunday: {
    label: "Sunday",
    date: "May 17",
    start: "13:00",
    end: "23:00",
    stages: ["AREA.97", "AREA.01", "AREA.07", "AREA.14", "AREA.22", "AREA.24"],
    events: [
      { stage: "AREA.97", start: "13:00", end: "14:30", title: "Twiena" },
      { stage: "AREA.97", start: "14:30", end: "16:00", title: "Beste Hira x Lobster" },
      { stage: "AREA.97", start: "16:00", end: "17:45", title: "Annē x Ben Sims" },
      { stage: "AREA.97", start: "17:45", end: "19:30", title: "Anetha x Pegassi" },
      { stage: "AREA.97", start: "19:30", end: "21:30", title: "Ben UFO x Four Tet" },
      { stage: "AREA.97", start: "21:30", end: "23:00", title: "Nina Kraviz" },

      { stage: "AREA.01", start: "13:00", end: "14:45", title: "Remma x Thoms Traxx" },
      { stage: "AREA.01", start: "14:45", end: "16:15", title: "Cio d'Or x Claudio PRC" },
      { stage: "AREA.01", start: "16:15", end: "18:00", title: "Abstract Division x JakoJako" },
      { stage: "AREA.01", start: "18:00", end: "19:30", title: "LSD", note: "Live" },
      { stage: "AREA.01", start: "19:30", end: "21:00", title: "Ignez x Rødhåd", note: "Live" },
      { stage: "AREA.01", start: "21:00", end: "23:00", title: "Freddy K x Marrøn" },

      { stage: "AREA.07", start: "13:00", end: "15:00", title: "Alycia Bezgo" },
      { stage: "AREA.07", start: "15:00", end: "16:45", title: "Faster Horses x Stef de Haan" },
      { stage: "AREA.07", start: "16:45", end: "17:45", title: "The Tunegirl", note: "Live" },
      { stage: "AREA.07", start: "17:45", end: "19:30", title: "Adrián Mills", note: "Presents 2High" },
      { stage: "AREA.07", start: "19:30", end: "21:15", title: "Ciara Cuvé" },
      { stage: "AREA.07", start: "21:15", end: "23:00", title: "AZYR x Charlie Sparks" },

      { stage: "AREA.14", start: "13:00", end: "14:30", title: "Kyra Khaldi" },
      { stage: "AREA.14", start: "14:30", end: "15:45", title: "Aldonna" },
      { stage: "AREA.14", start: "15:45", end: "17:00", title: "Main Phase" },
      { stage: "AREA.14", start: "17:00", end: "18:30", title: "Milion" },
      { stage: "AREA.14", start: "18:30", end: "20:00", title: "Emvae x Moxes" },
      { stage: "AREA.14", start: "20:00", end: "21:30", title: "Helena Lauwært" },
      { stage: "AREA.14", start: "21:30", end: "23:00", title: "Sam Alfred" },

      { stage: "AREA.22", start: "13:00", end: "14:45", title: "Hannecart" },
      { stage: "AREA.22", start: "14:45", end: "16:30", title: "Rene Wise", note: "House set" },
      { stage: "AREA.22", start: "16:30", end: "17:30", title: "Paranoid London", note: "Live" },
      { stage: "AREA.22", start: "17:30", end: "19:15", title: "Freddy K", note: "House set" },
      { stage: "AREA.22", start: "19:15", end: "21:15", title: "Doudou MD x Jennifer Loveless" },
      { stage: "AREA.22", start: "21:15", end: "23:00", title: "DJ Sweet6teen" },

      { stage: "AREA.24", start: "13:00", end: "14:30", title: "Karina Schneider" },
      { stage: "AREA.24", start: "14:30", end: "16:15", title: "JSPRV35 x Toobris" },
      { stage: "AREA.24", start: "16:15", end: "17:15", title: "UFO95", note: "Live" },
      { stage: "AREA.24", start: "17:15", end: "19:00", title: "Kamelia x Setaoc Mass" },
      { stage: "AREA.24", start: "19:00", end: "20:30", title: "Colin Benders x Dasha Rush", note: "Live" },
      { stage: "AREA.24", start: "20:30", end: "23:00", title: "Jeans x Spekki Webu x Woody92" },
    ],
  },
};

const PX_PER_MINUTE = 1.22;
const TIMELINE_EDGE_PADDING = 12;

function timeToMinutes(time) {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

function minutesToTime(total) {
  const hours = Math.floor(total / 60);
  const minutes = total % 60;
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
}

function addIds() {
  Object.entries(DATA).forEach(([dayKey, day]) => {
    day.events.forEach((event, index) => {
      event.day = dayKey;
      event.id = `${dayKey}-${index}-${event.stage}-${event.start}-${event.title}`.replace(/\s+/g, "-").toLowerCase();
      event.startMin = timeToMinutes(event.start);
      event.endMin = timeToMinutes(event.end);
    });
  });
}
addIds();

function overlapMinutes(a, b) {
  return Math.max(0, Math.min(a.endMin, b.endMin) - Math.max(a.startMin, b.startMin));
}

function getOverlapSeverityMap(events) {
  const severityMap = new Map();

  for (let i = 0; i < events.length; i += 1) {
    for (let j = i + 1; j < events.length; j += 1) {
      const overlap = overlapMinutes(events[i], events[j]);
      if (!overlap) continue;

      const severity = overlap <= 30 ? "yellow" : "red";
      [events[i], events[j]].forEach((event) => {
        const current = severityMap.get(event.id);
        if (current !== "red") severityMap.set(event.id, severity);
      });
    }
  }

  return severityMap;
}

function getChoiceMomentGroups(events) {
  const sorted = [...events].sort((a, b) => a.startMin - b.startMin || a.endMin - b.endMin);
  const adjacency = new Map(sorted.map((event) => [event.id, new Set()]));

  for (let i = 0; i < sorted.length; i += 1) {
    for (let j = i + 1; j < sorted.length; j += 1) {
      const overlap = overlapMinutes(sorted[i], sorted[j]);
      if (overlap > 30) {
        adjacency.get(sorted[i].id).add(sorted[j].id);
        adjacency.get(sorted[j].id).add(sorted[i].id);
      }
    }
  }

  const eventById = new Map(sorted.map((event) => [event.id, event]));
  const seen = new Set();
  const groups = [];

  sorted.forEach((event) => {
    if (seen.has(event.id) || adjacency.get(event.id).size === 0) return;

    const stack = [event.id];
    const group = [];
    seen.add(event.id);

    while (stack.length) {
      const id = stack.pop();
      group.push(eventById.get(id));

      adjacency.get(id).forEach((nextId) => {
        if (!seen.has(nextId)) {
          seen.add(nextId);
          stack.push(nextId);
        }
      });
    }

    groups.push(group.sort((a, b) => a.startMin - b.startMin));
  });

  return groups.sort((a, b) => Math.min(...a.map((event) => event.startMin)) - Math.min(...b.map((event) => event.startMin)));
}

function EventCard({ event, top, height, selected, overlapSeverity, muted, onToggle, expanded = false }) {
  return (
    <button
      type="button"
      onClick={() => onToggle(event.id)}
      title={`${event.start}–${event.end} · ${event.title}`}
      className={[
        "absolute left-px right-px max-w-full overflow-hidden rounded-md border px-0.5 py-1 text-left transition-all duration-150 sm:left-0.5 sm:right-0.5 sm:rounded-lg sm:p-1.5 md:left-1 md:right-1 md:rounded-lg md:p-2",
        "hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-neutral-900",
        selected
          ? overlapSeverity === "red"
            ? "border-rose-500 bg-rose-100 shadow-md ring-2 ring-rose-400"
            : overlapSeverity === "yellow"
              ? "border-amber-400 bg-amber-100 shadow-md ring-2 ring-amber-300"
              : "border-neutral-900 bg-neutral-950 text-white shadow-lg ring-2 ring-neutral-900"
          : "border-cyan-200 bg-cyan-50/95 text-neutral-950 shadow-sm",
        muted ? "opacity-20" : "opacity-100",
      ].join(" ")}
      style={{ top, height }}
    >
      <div className={expanded ? "max-w-full overflow-hidden text-[10px] font-black uppercase leading-none tracking-tight opacity-80 sm:text-xs md:text-sm" : "max-w-full overflow-hidden text-[6.5px] font-black uppercase leading-none tracking-tight opacity-80 sm:text-[8px] md:text-[10px]"}>
        {event.start} – {event.end}
      </div>
      <div className={expanded ? "mt-1 max-w-full break-words text-lg font-black uppercase leading-tight tracking-tight hyphens-auto [overflow-wrap:anywhere] sm:text-xl md:text-2xl" : "mt-0.5 max-w-full break-words text-[7px] font-black uppercase leading-[0.9] tracking-tighter hyphens-auto [overflow-wrap:anywhere] sm:text-[8.5px] sm:leading-[0.95] md:mt-1 md:text-sm md:leading-tight md:tracking-tight"}>{event.title}</div>
      {event.note && <div className={expanded ? "mt-1 max-w-full break-words text-xs font-bold uppercase leading-tight opacity-75 [overflow-wrap:anywhere] sm:text-sm" : "mt-0.5 hidden max-w-full break-words text-[7px] font-bold uppercase leading-[0.95] opacity-75 [overflow-wrap:anywhere] sm:block sm:text-[8px] md:mt-1 md:text-[10px] md:leading-tight"}>{event.note}</div>}
    </button>
  );
}

export default function UpcloseBlockPlanner() {
  const [dayKey, setDayKey] = useState("saturday");
  const [selectedIds, setSelectedIds] = useState([]);
  const [query, setQuery] = useState("");
  const [stageFilter, setStageFilter] = useState("all");
  const [onlySelected, setOnlySelected] = useState(false);
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 30000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("upclose-personal-blocks") || "[]");
      if (Array.isArray(saved)) setSelectedIds(saved);
    } catch {
      setSelectedIds([]);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("upclose-personal-blocks", JSON.stringify(selectedIds));
    } catch {
      // Ignore storage errors in preview/sandboxed environments.
    }
  }, [selectedIds]);

  const day = DATA[dayKey];
  const dayStart = timeToMinutes(day.start);
  const dayEnd = timeToMinutes(day.end);
  const timelineHeight = (dayEnd - dayStart) * PX_PER_MINUTE;
  const timelineGridHeight = timelineHeight + TIMELINE_EDGE_PADDING * 2;
  const getTimelineY = (minutes) => TIMELINE_EDGE_PADDING + (minutes - dayStart) * PX_PER_MINUTE;
  const nowMinutes = now.getHours() * 60 + now.getMinutes();
  const showNowMarker = nowMinutes >= dayStart && nowMinutes <= dayEnd;
  const nowMarkerTop = getTimelineY(nowMinutes);

  const selectedDayEvents = useMemo(
    () => day.events.filter((event) => selectedIds.includes(event.id)).sort((a, b) => a.startMin - b.startMin),
    [day.events, selectedIds]
  );

  const choiceMomentGroups = useMemo(() => getChoiceMomentGroups(selectedDayEvents), [selectedDayEvents]);
  const overlapSeverityMap = useMemo(() => getOverlapSeverityMap(selectedDayEvents), [selectedDayEvents]);

  const filteredEvents = useMemo(() => {
    const q = query.trim().toLowerCase();
    return day.events.filter((event) => {
      const matchesQuery = !q || `${event.title} ${event.stage} ${event.note || ""}`.toLowerCase().includes(q);
      const matchesStage = stageFilter === "all" || event.stage === stageFilter;
      const matchesSelected = !onlySelected || selectedIds.includes(event.id);
      return matchesQuery && matchesStage && matchesSelected;
    });
  }, [day.events, query, stageFilter, onlySelected, selectedIds]);

  const filteredIds = useMemo(() => new Set(filteredEvents.map((event) => event.id)), [filteredEvents]);


  const timeMarkers = useMemo(() => {
    const markers = [];
    for (let t = dayStart; t <= dayEnd; t += 30) markers.push(t);
    return markers;
  }, [dayStart, dayEnd]);

  const visibleStages = useMemo(
    () => (stageFilter === "all" ? day.stages : day.stages.filter((stage) => stage === stageFilter)),
    [day.stages, stageFilter]
  );
  const isSingleAreaView = visibleStages.length === 1;
  const timelineGridClass = isSingleAreaView
    ? "grid w-full min-w-0 max-w-full grid-cols-[56px_minmax(0,1fr)] gap-1 overflow-hidden sm:grid-cols-[64px_minmax(0,1fr)] md:grid-cols-[72px_minmax(0,1fr)] lg:grid-cols-[84px_minmax(0,1fr)]"
    : "grid w-full min-w-0 max-w-full grid-cols-[26px_repeat(6,minmax(0,1fr))] gap-px overflow-hidden sm:grid-cols-[34px_repeat(6,minmax(0,1fr))] sm:gap-0.5 md:grid-cols-[56px_repeat(6,minmax(0,1fr))] md:gap-1 lg:grid-cols-[72px_repeat(6,minmax(0,1fr))]";
  const nowLineClass = isSingleAreaView
    ? "absolute left-[56px] right-0 top-1/2 z-0 h-0.5 -translate-y-1/2 bg-neutral-950/45 shadow-[0_0_0_1px_rgba(255,255,255,0.35)] sm:left-[64px] md:left-[72px] lg:left-[84px]"
    : "absolute left-[26px] right-0 top-1/2 z-0 h-0.5 -translate-y-1/2 bg-neutral-950/45 shadow-[0_0_0_1px_rgba(255,255,255,0.35)] sm:left-[34px] md:left-[56px] lg:left-[72px]";
  const nowBubbleClass = isSingleAreaView
    ? "absolute left-0 top-1/2 z-10 flex w-[56px] -translate-y-1/2 flex-col items-center rounded bg-neutral-950 px-1 py-1 text-center text-[8px] font-black uppercase leading-none text-white shadow sm:w-[64px] sm:text-[9px] md:w-[72px] md:text-[10px] lg:w-[84px]"
    : "absolute left-0 top-1/2 z-10 flex w-[26px] -translate-y-1/2 flex-col items-center rounded bg-neutral-950 px-0.5 py-1 text-center text-[6px] font-black uppercase leading-none text-white shadow sm:w-[34px] sm:text-[7px] md:w-[56px] md:px-1 md:text-[9px] lg:w-[72px] lg:px-2 lg:text-[10px]";

  const toggleEvent = (id) => {
    setSelectedIds((current) => (current.includes(id) ? current.filter((eventId) => eventId !== id) : [...current, id]));
  };

  const clearDay = () => {
    const dayIds = new Set(day.events.map((event) => event.id));
    setSelectedIds((current) => current.filter((id) => !dayIds.has(id)));
  };


  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-cyan-200 via-cyan-100 to-sky-300 p-3 pb-24 text-neutral-950 md:p-8 md:pb-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-6 rounded-xl border border-white/60 bg-white/55 p-5 shadow-xl backdrop-blur md:p-7">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.35em] text-neutral-600">Upclose personal planner</p>
              <h1 className="mt-2 text-4xl font-black uppercase leading-none tracking-tighter md:text-7xl">Timetable</h1>
              <p className="mt-3 max-w-2xl text-sm font-medium text-neutral-700 md:text-base">
                Select acts to create your personal timetable. An overlap of more than 30 minutes becomes a choice moment in the comparison view; shorter overlaps are marked yellow in your timetable.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2 rounded-xl bg-white/70 p-2 shadow-inner">
              {Object.entries(DATA).map(([key, item]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setDayKey(key)}
                  className={[
                    "rounded-lg px-4 py-3 text-left transition",
                    key === dayKey ? "bg-neutral-950 text-white shadow-lg" : "bg-transparent hover:bg-white",
                  ].join(" ")}
                >
                  <div className="text-xs font-black uppercase opacity-70">{item.date}</div>
                  <div className="text-lg font-black uppercase leading-none">{item.label}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 grid grid-cols-[minmax(0,1fr)_112px] gap-3 md:grid-cols-[1.4fr_0.9fr_1.15fr_0.55fr]">
            <label className="col-span-2 block md:col-span-1">
              <span className="mb-1 block text-xs font-black uppercase tracking-wider text-neutral-600">Search</span>
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search act, area or set type…"
                className="w-full rounded-lg border border-white/80 bg-white/80 px-4 py-3 font-semibold outline-none ring-neutral-950/0 transition placeholder:text-neutral-400 focus:ring-2"
              />
            </label>
            <label className="col-span-2 block md:col-span-1">
              <span className="mb-1 block text-xs font-black uppercase tracking-wider text-neutral-600">Area</span>
              <select
                value={stageFilter}
                onChange={(event) => setStageFilter(event.target.value)}
                className="w-full rounded-lg border border-white/80 bg-white/80 px-4 py-3 font-semibold outline-none focus:ring-2 focus:ring-neutral-950"
              >
                <option value="all">All areas</option>
                {day.stages.map((stage) => (
                  <option key={stage} value={stage}>
                    {stage}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex items-end">
              <button
                type="button"
                onClick={() => setOnlySelected((current) => !current)}
                className={[
                  "w-full rounded-lg border px-4 py-3 text-sm font-black uppercase transition sm:text-base md:px-5 md:py-3.5",
                  onlySelected ? "border-neutral-950 bg-neutral-950 text-white" : "border-white/80 bg-white/80 hover:bg-white",
                ].join(" ")}
              >
                {onlySelected ? "Show all" : "My timetable"}
              </button>
            </label>
            <div className="flex items-end">
              <button
                type="button"
                onClick={clearDay}
                disabled={!selectedDayEvents.length}
                className="w-full rounded-lg bg-rose-600 px-2 py-3 text-xs font-black uppercase text-white shadow-sm transition hover:bg-rose-700 disabled:cursor-not-allowed disabled:bg-rose-300 disabled:opacity-60 sm:text-sm"
              >
                Clear day
              </button>
            </div>
          </div>
        </header>

        <section className="mb-5 grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-white/70 p-4 shadow-sm backdrop-blur">
            <div className="text-xs font-black uppercase tracking-wider text-neutral-500">Selected</div>
            <div className="mt-1 text-2xl font-black md:text-3xl">{selectedDayEvents.length}</div>
          </div>
          <div className="rounded-xl bg-white/70 p-4 shadow-sm backdrop-blur">
            <div className="text-xs font-black uppercase tracking-wider text-neutral-500">Choice moments</div>
            <div className="mt-1 text-2xl font-black md:text-3xl">{choiceMomentGroups.length}</div>
          </div>
        </section>

        <main className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_390px]">
          <section className="w-full max-w-full overflow-hidden rounded-xl border border-white/60 bg-white/45 shadow-xl backdrop-blur">
            <div className="flex items-center justify-between gap-3 border-b border-white/60 p-4">
              <div>
                <h2 className="text-xl font-black uppercase tracking-tight">{day.label} {day.date}</h2>
                <p className="text-xs font-bold uppercase text-neutral-600">Click blocks to add or remove them.</p>
              </div>
              <div className="rounded-full bg-white/80 px-3 py-1 text-xs font-black uppercase">{day.start}–{day.end}</div>
            </div>

            <div className="w-full max-w-full overflow-hidden p-1 md:p-3" style={{ touchAction: "pan-y" }}>
              <div className="w-full min-w-0 max-w-full overflow-hidden">
                <div className={timelineGridClass}>
                  <div />
                  {visibleStages.map((stage) => (
                    <div key={stage} className="min-w-0 overflow-hidden rounded-t-md bg-white/80 px-0.5 py-1.5 text-center text-[7px] font-black uppercase leading-none tracking-tighter sm:rounded-t-lg sm:text-[8px] md:rounded-t-lg md:py-3 md:text-sm md:tracking-[0.25em]">
                      {isSingleAreaView ? (
                        <span>{stage}</span>
                      ) : (
                        <>
                          <span className="md:hidden">{stage.replace("AREA.", "")}</span>
                          <span className="hidden md:inline">{stage}</span>
                        </>
                      )}
                    </div>
                  ))}
                </div>

                <div className={`relative ${timelineGridClass}`}>
                  {showNowMarker && (
                    <div
                      className="pointer-events-none absolute left-0 right-0 z-30 h-0"
                      style={{ top: nowMarkerTop }}
                    >
                      <div className={nowLineClass} />
                      <div className={nowBubbleClass}>
                        <span>Now</span>
                        <span className="mt-0.5 tabular-nums">{minutesToTime(nowMinutes)}</span>
                      </div>
                    </div>
                  )}
                  <div className="relative min-w-0 overflow-hidden" style={{ height: timelineGridHeight }}>
                    {timeMarkers.map((marker) => (
                      <div
                        key={marker}
                        className="absolute left-0 right-0 -translate-y-1/2 pr-0.5 text-right text-[7px] font-black leading-none tabular-nums text-neutral-700 sm:pr-1 sm:text-[8px] md:pr-2 md:text-sm"
                        style={{ top: getTimelineY(marker) }}
                      >
                        {marker % 60 === 0 ? minutesToTime(marker) : "—"}
                      </div>
                    ))}
                  </div>

                  {visibleStages.map((stage) => (
                    <div key={stage} className="relative min-w-0 overflow-hidden rounded-b-md bg-white/45 sm:rounded-b-lg md:rounded-b-lg" style={{ height: timelineGridHeight }}>
                      {timeMarkers.map((marker) => (
                        <div
                          key={`${stage}-${marker}`}
                          className={marker % 60 === 0 ? "absolute left-0 right-0 border-t border-white/80" : "absolute left-0 right-0 border-t border-white/35"}
                          style={{ top: getTimelineY(marker) }}
                        />
                      ))}
                      {day.events
                        .filter((event) => event.stage === stage)
                        .map((event) => {
                          const selected = selectedIds.includes(event.id);
                          const muted = !filteredIds.has(event.id);
                          return (
                            <EventCard
                              key={event.id}
                              event={event}
                              selected={selected}
                              overlapSeverity={selected ? overlapSeverityMap.get(event.id) : null}
                              muted={muted}
                              top={getTimelineY(event.startMin) + 2}
                              height={Math.max((event.endMin - event.startMin) * PX_PER_MINUTE - 4, isSingleAreaView ? 86 : 64)}
                              onToggle={toggleEvent}
                              expanded={isSingleAreaView}
                            />
                          );
                        })}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <aside className="space-y-4">
            <section className="rounded-xl border border-white/60 bg-white/70 p-4 shadow-xl backdrop-blur">
              <div className="mb-3 flex items-center justify-between gap-2">
                <div>
                  <h2 className="text-xl font-black uppercase tracking-tight">My timetable</h2>
                  <p className="text-xs font-bold uppercase text-neutral-600">Sorted by time</p>
                </div>
                <span className="rounded-full bg-neutral-950 px-3 py-1 text-xs font-black text-white">{selectedDayEvents.length}</span>
              </div>

              {!selectedDayEvents.length ? (
                <div className="rounded-xl border border-dashed border-neutral-300 bg-white/50 p-5 text-sm font-semibold text-neutral-600">
                  No acts selected yet. Click the blocks in the timetable to add them.
                </div>
              ) : (
                <div className="space-y-2">
                  {selectedDayEvents.map((event) => (
                    <button
                      key={event.id}
                      type="button"
                      onClick={() => toggleEvent(event.id)}
                      className={[
                        "w-full rounded-xl border p-3 text-left transition hover:-translate-y-0.5 hover:shadow-md",
                        overlapSeverityMap.get(event.id) === "red"
                          ? "border-rose-300 bg-rose-50"
                          : overlapSeverityMap.get(event.id) === "yellow"
                            ? "border-amber-300 bg-amber-50"
                            : "border-white bg-white/80",
                      ].join(" ")}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="text-xs font-black uppercase text-neutral-500">{event.start} – {event.end} · {event.stage}</div>
                          <div className="mt-1 text-base font-black uppercase leading-tight">{event.title}</div>
                          {event.note && <div className="mt-1 text-xs font-bold uppercase text-neutral-500">{event.note}</div>}
                        </div>
                        <span className="shrink-0 rounded-full bg-neutral-950 px-2 py-1 text-[10px] font-black uppercase text-white">Remove</span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </section>

            <section className="rounded-xl border border-white/60 bg-white/70 p-4 shadow-xl backdrop-blur">
              <h2 className="text-xl font-black uppercase tracking-tight">Comparison</h2>
              <p className="mt-1 text-xs font-bold uppercase text-neutral-600">
                Only overlaps of more than 30 minutes appear here as choice moments.
              </p>

              {!choiceMomentGroups.length ? (
                <div className="mt-4 rounded-xl bg-emerald-50 p-4 text-sm font-bold text-emerald-900">
                  No overlap in your current selection for this day.
                </div>
              ) : (
                <div className="mt-4 space-y-3">
                  {choiceMomentGroups.map((group, index) => {
                    const start = Math.min(...group.map((event) => event.startMin));
                    const end = Math.max(...group.map((event) => event.endMin));
                    return (
                      <div key={`${index}-${start}`} className="rounded-xl border border-rose-200 bg-rose-50 p-3">
                        <div className="mb-2 text-xs font-black uppercase text-rose-900">
                          Choice moment {index + 1} · {minutesToTime(start)}–{minutesToTime(end)} · more than 30 min overlap
                        </div>
                        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                          {group.map((event) => (
                            <button
                              key={event.id}
                              type="button"
                              onClick={() => toggleEvent(event.id)}
                              className="rounded-lg bg-white p-3 text-left shadow-sm transition hover:shadow-md"
                            >
                              <div className="text-[10px] font-black uppercase text-neutral-500">{event.start}–{event.end}</div>
                              <div className="mt-1 text-sm font-black uppercase leading-tight">{event.title}</div>
                              <div className="mt-2 text-[10px] font-black uppercase text-neutral-500">{event.stage}</div>
                            </button>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </section>
          </aside>
        </main>

        <div className="fixed inset-x-3 bottom-3 z-50 rounded-xl border border-white/70 bg-white/85 p-3 shadow-2xl backdrop-blur lg:hidden">
          <div className="mb-2 text-center text-[10px] font-black uppercase tracking-wider text-neutral-500">
            {selectedDayEvents.length} acts · {choiceMomentGroups.length} choice moments
          </div>
          <div className="grid grid-cols-[minmax(0,1fr)_112px] gap-2">
            <button
              type="button"
              onClick={() => setOnlySelected((current) => !current)}
              className="rounded-lg bg-neutral-950 px-4 py-3 text-xs font-black uppercase text-white"
            >
              {onlySelected ? "Show all" : "My timetable"}
            </button>
            <button
              type="button"
              onClick={clearDay}
              disabled={!selectedDayEvents.length}
              className="rounded-lg bg-rose-600 px-2 py-3 text-xs font-black uppercase text-white shadow-sm disabled:cursor-not-allowed disabled:bg-rose-300 disabled:opacity-60"
            >
              Clear day
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
