export const TOPICS = [
  {
    id: "arithmetic",
    label: "Arithmetic & Ratios",
    description: "Fractions, decimals, percents, ratios, rates, and proportional reasoning.",
  },
  {
    id: "number-theory",
    label: "Number Theory",
    description: "Divisibility, primes, GCD/LCM, remainders, and digit problems.",
  },
  {
    id: "algebra",
    label: "Algebra & Patterns",
    description: "Linear equations, sequences, patterns, and word problems.",
  },
  {
    id: "geometry",
    label: "Geometry",
    description: "Angles, area, perimeter, volume, the Pythagorean theorem, and coordinates.",
  },
  {
    id: "counting",
    label: "Counting",
    description: "Systematic counting, permutations, combinations, and casework.",
  },
  {
    id: "probability",
    label: "Probability",
    description: "Equally likely outcomes, compound events, and without-replacement draws.",
  },
  {
    id: "data-analysis",
    label: "Data Analysis",
    description: "Mean, median, mode, range, and interpreting data.",
  },
  {
    id: "logic",
    label: "Logic & Spatial Reasoning",
    description: "Logic puzzles, calendars, clocks, painted cubes, and visual patterns.",
  },
] as const;

export type TopicId = (typeof TOPICS)[number]["id"];

export const TOPIC_IDS = TOPICS.map((t) => t.id) as [TopicId, ...TopicId[]];

export function topicLabel(id: TopicId): string {
  const topic = TOPICS.find((t) => t.id === id);
  return topic ? topic.label : id;
}

export const DIFFICULTIES = ["easy", "medium", "hard"] as const;

export type Difficulty = (typeof DIFFICULTIES)[number];

/** Where a difficulty tier typically sits on the real AMC 8 (questions 1-25). */
export const DIFFICULTY_INFO: Record<Difficulty, { label: string; amcRange: string }> = {
  easy: { label: "Easy", amcRange: "AMC 8 #1–10" },
  medium: { label: "Medium", amcRange: "AMC 8 #11–20" },
  hard: { label: "Hard", amcRange: "AMC 8 #21–25" },
};
