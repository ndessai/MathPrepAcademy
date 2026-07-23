import type { Question } from "@mathprep/core";

const SOURCE = "MathPrep original (AMC 8 style)";

export const SET_02_QUESTIONS: Question[] = [
  {
    // evaluate a nested custom operation
    id: "s02-q01",
    topic: "algebra",
    difficulty: "easy",
    stem: "For any numbers $a$ and $b$, the operation $\\diamond$ is defined by $a \\diamond b = 4a - b$. If $2 \\diamond (3 \\diamond x) = 5$, what is the value of $x$?",
    choices: ["$-9$", "$1$", "$7$", "$9$", "$15$"],
    answerIndex: 3,
    explanation:
      "The key is to expand the operation from the inside out. First, $3 \\diamond x = 4(3) - x = 12 - x$. Then $2 \\diamond (12 - x) = 4(2) - (12 - x) = 8 - 12 + x = x - 4$, so the equation becomes $x - 4 = 5$, giving $x = 9$. Checking: $3 \\diamond 9 = 3$ and $2 \\diamond 3 = 8 - 3 = 5$, as required. The tempting answer $-9$ comes from forgetting to distribute the minus sign and writing $8 - 12 - x = 5$.",
    source: SOURCE,
  },
  {
    // effect of a new data point on summary statistics
    id: "s02-q02",
    topic: "data-analysis",
    difficulty: "easy",
    stem: "Amara has bowled seven games this season, with scores of $85$, $90$, $90$, $90$, $95$, $100$, and $110$. In her eighth game she scores $40$. Which of the following statistics of her scores increases when the eighth score is included? (Note that the median of eight scores is the average of the $4$th and $5$th smallest scores.)",
    choices: ["The maximum", "The mean", "The median", "The mode", "The range"],
    answerIndex: 4,
    explanation:
      "A new minimum affects only the statistics that depend on the low end of the data. The range stretches from $110 - 85 = 25$ to $110 - 40 = 70$, so it increases. The maximum stays $110$, the mode stays $90$, and the median stays $90$ because the $4$th and $5$th smallest of the eight scores are both $90$. The mean falls from $660/7 \\approx 94.3$ to $700/8 = 87.5$. The tempting answer is the mean, but a score far below average pulls the mean down, not up.",
    source: SOURCE,
  },
  {
    // recover the whole from redistributed equal shares
    id: "s02-q03",
    topic: "algebra",
    difficulty: "easy",
    stem: "Six friends order dinner and agree to split the bill equally. When the bill arrives, one friend realizes he left his wallet at home, so each of the other five friends pays $\\$3$ more than originally planned to cover the whole bill. What is the total bill, in dollars?",
    choices: ["$15$", "$18$", "$75$", "$90$", "$108$"],
    answerIndex: 3,
    explanation:
      "The key insight is that the five extra payments of $\\$3$ together cover exactly the missing friend's share, so one share is $5 \\times \\$3 = \\$15$. The bill is six equal shares, or $6 \\times \\$15 = \\$90$. Checking: each of the five pays $15 + 3 = \\$18$, and $5 \\times 18 = 90$. The tempting answer $75$ counts only the five original shares and forgets the sixth share that made the bill in the first place.",
    source: SOURCE,
  },
  {
    // unit conversion between time measures
    id: "s02-q04",
    topic: "arithmetic",
    difficulty: "easy",
    stem: "Priya's overnight train ride lasts $7$ hours and $25$ minutes. How long, in minutes, is the train ride?",
    choices: ["$385$", "$420$", "$445$", "$505$", "$725$"],
    answerIndex: 2,
    explanation:
      "Each hour is $60$ minutes, so the $7$ hours contribute $7 \\times 60 = 420$ minutes, and adding the leftover $25$ minutes gives $420 + 25 = 445$ minutes. The tempting answer $725$ comes from reading $7$ hours $25$ minutes as the number $725$, which wrongly treats an hour as $100$ minutes.",
    source: SOURCE,
  },
  {
    // repeated halving of a gap (geometric decay)
    id: "s02-q05",
    topic: "arithmetic",
    difficulty: "easy",
    stem: "A cup of tea is at $166^\\circ$F in a room kept at $70^\\circ$F. Every $10$ minutes, the difference between the tea's temperature and the room temperature is cut in half. What is the tea's temperature, in degrees Fahrenheit, $30$ minutes from now?",
    choices: ["$82$", "$94$", "$118$", "$154$", "$166$"],
    answerIndex: 0,
    explanation:
      "The key is to track the gap above room temperature, not the temperature itself. The gap starts at $166 - 70 = 96$ degrees, and $30$ minutes contains three $10$-minute intervals, so the gap is halved three times: $96 \\to 48 \\to 24 \\to 12$. The tea is therefore at $70 + 12 = 82^\\circ$F. The tempting answer $94$ comes from halving the gap only twice, a fencepost slip in counting the three intervals.",
    source: SOURCE,
  },
  {
    // first term of geometric growth to exceed a threshold
    id: "s02-q06",
    topic: "algebra",
    difficulty: "easy",
    stem: "In the video game Star Cavern, completing level $1$ is worth $1$ point, and each level after that is worth twice as many points as the level before it. What is the first level worth more than $500$ points?",
    choices: ["$9$", "$10$", "$11$", "$12$", "$13$"],
    answerIndex: 1,
    explanation:
      "The key observation is that level $n$ is worth $2^{n-1}$ points, since the value starts at $1$ and doubles with each level. Listing powers of $2$: $2^8 = 256$ is still below $500$, while $2^9 = 512$ is the first power of $2$ above $500$. Since $2^9$ is the value of level $10$, level $10$ is the first worth more than $500$ points. The tempting answer $9$ comes from solving $2^n > 500$ and forgetting that level $n$ is worth $2^{n-1}$ points, not $2^n$.",
    source: SOURCE,
  },
  {
    // greedy fewest pieces to hit an exact total
    id: "s02-q07",
    topic: "arithmetic",
    difficulty: "easy",
    stem: "Granola bars are sold in boxes of $20$ bars, $8$ bars, or $4$ bars. Leo needs exactly $76$ bars for a camping trip. What is the fewest number of boxes he can buy to get exactly $76$ bars?",
    choices: ["$4$", "$5$", "$6$", "$7$", "$8$"],
    answerIndex: 1,
    explanation:
      "To use few boxes, take as many of the largest box as possible: three boxes of $20$ give $60$ bars, leaving $76 - 60 = 16$ bars, which two boxes of $8$ cover exactly. That is $3 + 2 = 5$ boxes. Four boxes cannot work: four boxes of $20$ give $80 \\ne 76$, and with three boxes of $20$ the remaining $16$ bars need at least two more boxes, since the largest remaining box holds only $8$. The tempting answer $4$ comes from computing $76 \\div 20 = 3.8$ and rounding up, which ignores that the leftover $16$ bars require two boxes, not one.",
    source: SOURCE,
  },
  {
    // follow a chain of relative-quantity clues
    id: "s02-q08",
    topic: "algebra",
    difficulty: "easy",
    stem: "Sam collected $48$ seashells at the beach. Maya collected half as many seashells as Sam, and Jordan collected $6$ fewer seashells than Maya. How many seashells did Jordan collect?",
    choices: ["$18$", "$21$", "$24$", "$30$", "$42$"],
    answerIndex: 0,
    explanation:
      "Translate each clue into one step and apply them in order. Maya collected half of Sam's $48$, which is $24$ seashells, and Jordan collected $6$ fewer than Maya, which is $24 - 6 = 18$ seashells. The tempting answer $24$ is Maya's count \u2014 it comes from stopping one step early and never applying Jordan's clue.",
    source: SOURCE,
  },
  {
    // scale a total from one sector's share of a pie chart
    id: "s02-q09",
    topic: "data-analysis",
    difficulty: "easy",
    stem: "The Riverbend Coding Club surveyed every member about their favorite project type and displayed the results in a pie chart. The sector for robotics takes up $30\\%$ of the chart, and $42$ members chose robotics. How many members are in the club?",
    choices: ["$60$", "$72$", "$98$", "$126$", "$140$"],
    answerIndex: 4,
    explanation:
      "The key relationship is that the $42$ robotics fans are $30\\%$ of the whole club, so the total is $42 \\div 0.30$. Since $30\\%$ of a number is $42$ exactly when $10\\%$ of it is $14$, the total is $10 \\times 14 = 140$ members. Checking: $30\\%$ of $140$ is $42$. The tempting answer $126$ comes from treating $30\\%$ as one-third and computing $42 \\times 3$.",
    source: SOURCE,
  },
  {
    // apply a newly defined operation to given values
    id: "s02-q10",
    topic: "arithmetic",
    difficulty: "easy",
    stem: "For positive numbers $a$ and $b$, define $a \\star b$ to be the reciprocal of the average of the reciprocals of $a$ and $b$. For example, the reciprocals of $1$ and $3$ are $1$ and $\\frac{1}{3}$, their average is $\\frac{2}{3}$, and so $1 \\star 3 = \\frac{3}{2}$. What is the value of $4 \\star 6$?",
    choices: ["$\\frac{5}{24}$", "$\\frac{12}{5}$", "$\\frac{24}{5}$", "$5$", "$10$"],
    answerIndex: 2,
    explanation:
      "The key is to follow the definition literally, one phrase at a time. The reciprocals of $4$ and $6$ are $\\frac{1}{4}$ and $\\frac{1}{6}$, which sum to $\\frac{3}{12} + \\frac{2}{12} = \\frac{5}{12}$, so their average is $\\frac{5}{24}$. The reciprocal of $\\frac{5}{24}$ is $\\frac{24}{5}$, so $4 \\star 6 = \\frac{24}{5}$. The tempting answer $5$ is the ordinary average of $4$ and $6$, which skips both reciprocal steps in the definition.",
    source: SOURCE,
  },
  {
    // angle between clock hands at a given time
    id: "s02-q11",
    topic: "geometry",
    difficulty: "medium",
    stem: "Leo glances at the analog wall clock during study hall and sees that the time is exactly $3{:}40$. On this clock the hour hand moves smoothly, drifting between the numerals as the minutes pass rather than jumping from one numeral to the next. What is the degree measure of the smaller angle formed by the hour hand and the minute hand at $3{:}40$?",
    choices: ["$100$", "$110$", "$120$", "$130$", "$150$"],
    answerIndex: 3,
    explanation:
      "The key fact is that the hour hand moves continuously at $0.5^\\circ$ per minute while the minute hand moves $6^\\circ$ per minute. At $3{:}40$ the minute hand is at $40 \\times 6 = 240^\\circ$ from the $12$, and the hour hand is at $3 \\times 30 + 40 \\times 0.5 = 110^\\circ$. The difference is $240 - 110 = 130^\\circ$, which is already the smaller angle since it is less than $180^\\circ$. The most tempting wrong answer, $150$, leaves the hour hand parked exactly at the $3$ and ignores the $20^\\circ$ it drifts during the $40$ minutes.",
    source: SOURCE,
  },
  {
    // area of a quadrilateral from coordinates by decomposition
    id: "s02-q12",
    topic: "geometry",
    difficulty: "medium",
    stem: "Priya plots the points $A(0, 0)$, $B(8, 0)$, $C(5, 4)$, and $D(1, 4)$ on graph paper and connects them in order to form quadrilateral $ABCD$. What is the area, in square units, of quadrilateral $ABCD$?",
    choices: ["$24$", "$26$", "$30$", "$32$", "$48$"],
    answerIndex: 0,
    explanation:
      "The key observation is that $AB$ and $DC$ are both horizontal, so $ABCD$ is a trapezoid: $AB$ has length $8$, $DC$ has length $5 - 1 = 4$, and the height is $4$. Its area is $\\frac{1}{2}(8 + 4)(4) = 24$. Alternatively, enclose the figure in its $8 \\times 4$ bounding rectangle of area $32$ and subtract the two right triangles at the sides, of areas $\\frac{1}{2}(1)(4) = 2$ and $\\frac{1}{2}(3)(4) = 6$, giving $32 - 8 = 24$. The most tempting wrong answer, $32$, is the full bounding rectangle and forgets to remove the two corner triangles.",
    source: SOURCE,
  },
  {
    // inclusion-exclusion with equal set sizes
    id: "s02-q13",
    topic: "counting",
    difficulty: "medium",
    stem: "At Riverbend Middle School, the drama club and the robotics club have exactly the same number of members. Altogether, $320$ students belong to at least one of the two clubs, and $60$ students belong to both clubs. How many members does the drama club have?",
    choices: ["$60$", "$130$", "$160$", "$190$", "$260$"],
    answerIndex: 3,
    explanation:
      "The key identity is inclusion-exclusion: the two membership counts satisfy $|D| + |R| = |D \\cup R| + |D \\cap R| = 320 + 60 = 380$. Since the clubs are the same size, each club has $380 \\div 2 = 190$ members. Check: $190 + 190 - 60 = 320$ students in at least one club, as required. The most tempting wrong answer, $160$, simply halves the $320$ and forgets that the $60$ students in both clubs carry two memberships but are counted only once in the union.",
    source: SOURCE,
  },
  {
    // common remainder via LCM plus offset
    id: "s02-q14",
    topic: "number-theory",
    difficulty: "medium",
    stem: "Maya is organizing her marble collection. Whether she arranges the marbles in rows of $4$, in rows of $6$, or in rows of $9$, she always has exactly $3$ marbles left over. She owns more than $3$ marbles. What is the smallest number of marbles Maya could own?",
    choices: ["$36$", "$39$", "$108$", "$111$", "$219$"],
    answerIndex: 1,
    explanation:
      "The key insight is that removing the $3$ leftover marbles leaves a number divisible by $4$, $6$, and $9$ at once, so the count is $3$ more than a common multiple of all three. The least common multiple is $\\operatorname{lcm}(4, 6, 9) = 36$, so the smallest count greater than $3$ is $36 + 3 = 39$. Check: $39 = 9 \\times 4 + 3 = 6 \\times 6 + 3 = 4 \\times 9 + 3$, leaving $3$ over in every arrangement. The most tempting wrong answer, $36$, finds the correct least common multiple but forgets to add back the $3$ leftover marbles.",
    source: SOURCE,
  },
  {
    // probability a random matching is all-correct
    id: "s02-q15",
    topic: "probability",
    difficulty: "medium",
    stem: "Ms. Rivera collected a journal from each of three students at the start of class. At the end of class she hands the three journals back at random, giving one journal to each student. What is the probability that every student receives their own journal?",
    choices: [
      "$\\frac{1}{6}$",
      "$\\frac{1}{3}$",
      "$\\frac{1}{2}$",
      "$\\frac{2}{3}$",
      "$\\frac{5}{6}$",
    ],
    answerIndex: 0,
    explanation:
      'The key insight is that the three journals can be handed back in $3! = 6$ equally likely orders, and exactly one of those orders returns every journal to its owner. So the probability is $\\frac{1}{6}$. Listing the orders confirms it: of the six arrangements of three journals, only the identity arrangement matches all three students. The most tempting wrong answer, $\\frac{1}{2}$, treats "everyone correct" and "not everyone correct" as equally likely, but it is the six arrangements, not the two descriptions, that are equally likely.',
    source: SOURCE,
  },
  {
    // partition a set into pairs with prescribed sums, starting from forced cases
    id: "s02-q16",
    topic: "logic",
    difficulty: "medium",
    stem: "Ten cards numbered $1$ through $10$ are dealt to five campers so that each camper holds exactly two cards. The sum of each camper's two cards is listed below.\n- Tara: $3$\n- Uma: $7$\n- Vik: $11$\n- Wren: $15$\n- Yusuf: $19$\nWhat is the product of the two numbers on Wren's cards?",
    choices: ["$12$", "$30$", "$50$", "$54$", "$56$"],
    answerIndex: 4,
    explanation:
      "The key strategy is to start with the most constrained sums: Tara's $3$ forces $\\{1, 2\\}$ and Yusuf's $19$ forces $\\{9, 10\\}$. Uma's $7$ could be $\\{1, 6\\}$, $\\{2, 5\\}$, or $\\{3, 4\\}$, but $1$ and $2$ are taken, so Uma holds $\\{3, 4\\}$. From the remaining cards $5, 6, 7, 8$, the only pair summing to Wren's $15$ is $\\{7, 8\\}$, and Vik's leftover pair $\\{5, 6\\}$ correctly sums to $11$. Wren's product is $7 \\times 8 = 56$. The most tempting wrong answer, $54$, pairs $6$ with $9$ to make $15$, overlooking that the $9$ is already forced into Yusuf's hand.",
    source: SOURCE,
  },
  {
    // partition items into groups from pairwise-compatibility constraints
    id: "s02-q17",
    topic: "logic",
    difficulty: "medium",
    stem: "Six orchestra students must split into three pairs for a duet project. Two students may be partners only if they are in the same grade or play the same instrument.\n- Ana: grade $6$, flute\n- Ben: grade $6$, drums\n- Cora: grade $7$, drums\n- Dev: grade $7$, harp\n- Elin: grade $8$, harp\n- Finn: grade $8$, cello\nWho must be Cora's partner?",
    choices: ["Ana", "Ben", "Dev", "Elin", "Finn"],
    answerIndex: 2,
    explanation:
      "The key strategy is to start with the student who has the fewest options: Finn, the only cellist, shares a trait only with Elin (both grade $8$), so Finn and Elin must be a pair. Dev could partner Cora (grade $7$) or Elin (harp), but Elin is taken, so Dev must partner Cora. That leaves Ana and Ben, who share grade $6$, completing the three pairs. So Cora's partner is Dev. The most tempting wrong answer, Ben, pairs Cora by their shared drums, but then Ana, who shares a trait only with Ben, would have no possible partner.",
    source: SOURCE,
  },
  {
    // probability of matching outcomes from two independent draws
    id: "s02-q18",
    topic: "probability",
    difficulty: "medium",
    stem: "Sam plays a game with two spinners. Spinner $X$ has three equal sectors: two colored red and one colored blue. Spinner $Y$ has four equal sectors: one colored red and three colored blue. Sam spins each spinner once. What is the probability that the two spinners land on the same color?",
    choices: [
      "$\\frac{1}{6}$",
      "$\\frac{1}{4}$",
      "$\\frac{5}{12}$",
      "$\\frac{1}{2}$",
      "$\\frac{7}{12}$",
    ],
    answerIndex: 2,
    explanation:
      "The key insight is to count equally likely sector pairs, of which there are $3 \\times 4 = 12$. Both spinners land red in $2 \\times 1 = 2$ ways, and both land blue in $1 \\times 3 = 3$ ways, so $2 + 3 = 5$ of the $12$ pairs match, giving probability $\\frac{5}{12}$. Equivalently, $\\frac{2}{3} \\cdot \\frac{1}{4} + \\frac{1}{3} \\cdot \\frac{3}{4} = \\frac{2}{12} + \\frac{3}{12} = \\frac{5}{12}$. The most tempting wrong answer, $\\frac{1}{2}$, assumes each color is equally likely on each spinner, but it is the sectors, not the colors, that are equally likely.",
    source: SOURCE,
  },
  {
    // side length from area via altitude and Pythagorean theorem
    id: "s02-q19",
    topic: "geometry",
    difficulty: "medium",
    stem: "Amara cuts a banner in the shape of an isosceles triangle. The base of the triangle is $30$ centimeters long, and the area of the banner is $120$ square centimeters. What is the length, in centimeters, of each of the two equal sides?",
    choices: ["$8$", "$15$", "$17$", "$23$", "$30$"],
    answerIndex: 2,
    explanation:
      "The key move is to recover the height from the area: $\\frac{1}{2}(30)h = 120$ gives $h = 8$. The altitude of an isosceles triangle bisects the base, forming a right triangle with legs $8$ and $15$. By the Pythagorean theorem, each equal side is $\\sqrt{8^2 + 15^2} = \\sqrt{289} = 17$. The most tempting wrong answer, $23$, adds the two legs $8 + 15$ instead of applying the Pythagorean theorem to them.",
    source: SOURCE,
  },
  {
    // equate areas that scale with the square of a length
    id: "s02-q20",
    topic: "geometry",
    difficulty: "medium",
    stem: "A landscaper designs square courtyards, each with a circular fountain inscribed so that it touches all four sides, and paves the region between the fountain and the square's corners. A small courtyard of this design has side length $2$ meters. A large courtyard of the same design has a paved region whose area is $9$ times the paved area of the small courtyard. What is the side length, in meters, of the large courtyard?",
    choices: ["$3$", "$6$", "$9$", "$18$", "$36$"],
    answerIndex: 1,
    explanation:
      "The key insight is that the paved area is $s^2 - \\pi\\left(\\frac{s}{2}\\right)^2 = s^2\\left(1 - \\frac{\\pi}{4}\\right)$, which is proportional to $s^2$, so the shape of the design never matters \u2014 only the scale. Multiplying the paved area by $9$ therefore multiplies $s^2$ by $9$, so the side length scales by $\\sqrt{9} = 3$. The large courtyard's side is $2 \\times 3 = 6$ meters. The most tempting wrong answer, $18$, scales the side length by the full factor of $9$, but areas grow with the square of the side length, not linearly.",
    source: SOURCE,
  },
  {
    // count compositions via step recursion
    id: "s02-q21",
    topic: "counting",
    difficulty: "hard",
    stem: "Pip the frog sits on the bank of a pond, next to a row of $7$ lily pads numbered $1$ through $7$ leading away from the bank. Each hop moves Pip forward $1$, $2$, or $3$ pads, and Pip keeps hopping until landing exactly on pad $7$ (a hop that would carry Pip past pad $7$ is not allowed). In how many ways can Pip hop from the bank to pad $7$?",
    choices: ["$21$", "$24$", "$44$", "$45$", "$64$"],
    answerIndex: 2,
    explanation:
      "The key insight is that the number of ways to reach pad $n$, call it $w(n)$, satisfies $w(n) = w(n-1) + w(n-2) + w(n-3)$, because the final hop must come from pad $n-1$, $n-2$, or $n-3$. Starting from $w(0) = 1$ (the bank), $w(1) = 1$, and $w(2) = 2$, the recursion gives $w(3) = 4$, $w(4) = 7$, $w(5) = 13$, $w(6) = 24$, and $w(7) = 24 + 13 + 7 = 44$. So there are $44$ hop sequences. The most tempting wrong answer, $24$, comes from stopping the recursion one pad early at $w(6)$.",
    source: SOURCE,
  },
  {
    // casework with inclusion-exclusion over grid line placements
    id: "s02-q22",
    topic: "counting",
    difficulty: "hard",
    stem: "Priya decorates a $3 \\times 3$ grid of tiles, placing on each tile a single sticker that is either a sun or a star. In how many ways can she place the $9$ stickers so that at least one row contains only suns and at least one row contains only stars? (The rows are the three horizontal lines of $3$ tiles.)",
    choices: ["$24$", "$36$", "$41$", "$42$", "$48$"],
    answerIndex: 3,
    explanation:
      "The key insight is that each row independently receives one of $2^3 = 8$ sticker patterns, so we can count triples of row patterns by inclusion-exclusion. Of the $8^3 = 512$ total fillings, $7^3 = 343$ have no all-sun row, another $343$ have no all-star row, and $6^3 = 216$ have neither, giving $512 - 343 - 343 + 216 = 42$. As a check by casework: choosing an all-sun row ($3$ ways), a different all-star row ($2$ ways), and filling the last row freely ($8$ ways) gives $48$, but the $6$ grids whose third row duplicates a special row are each counted twice, and $48 - 6 = 42$. The most tempting wrong answer, $48$, forgets to subtract those double-counted grids.",
    source: SOURCE,
  },
  {
    // tangent-circle radius via similar triangles
    id: "s02-q23",
    topic: "geometry",
    difficulty: "hard",
    stem: "In triangle $ABC$, $AB = AC = 25$ and $BC = 14$. Point $M$ is the midpoint of side $BC$, and a circle centered at $M$ is tangent to both $AB$ and $AC$. What is the radius of the circle?",
    choices: ["$\\frac{21}{4}$", "$\\frac{168}{25}$", "$7$", "$12$", "$\\frac{336}{25}$"],
    answerIndex: 1,
    explanation:
      "The key insight is that the radius equals the perpendicular distance from $M$ to line $AB$, since a radius drawn to a point of tangency is perpendicular to the tangent line. Because the triangle is isosceles, $AM$ is an altitude with $BM = 7$, so $AM = \\sqrt{25^2 - 7^2} = 24$. Triangle $ABM$ has area $\\frac{1}{2} \\cdot 7 \\cdot 24 = 84$; taking $AB = 25$ as its base, the height from $M$ is $\\frac{2 \\cdot 84}{25} = \\frac{168}{25}$, which is the radius. The most tempting wrong answer, $\\frac{21}{4}$, is the radius of the incircle of triangle $ABC$, whose center is not $M$.",
    source: SOURCE,
  },
  {
    // digit-reversal difference structure
    id: "s02-q24",
    topic: "number-theory",
    difficulty: "hard",
    stem: "Jordan performs a number trick. A volunteer secretly picks any three-digit number whose hundreds digit is exactly $5$ more than its units digit, reverses its digits (for example, $500$ reversed is $005$, which equals $5$), and subtracts the reversed number from the original number. Jordan then announces the difference without asking a single question. How many different values of the difference are possible?",
    choices: ["$1$", "$2$", "$5$", "$10$", "$50$"],
    answerIndex: 0,
    explanation:
      "The key insight is place value: if the number is $100a + 10b + c$, its reversal is $100c + 10b + a$, so the difference is $99(a - c)$, which depends only on the gap between the hundreds and units digits. Here that gap is always $5$, so every volunteer computes $99 \\cdot 5 = 495$, and only $1$ value is possible \u2014 which is how Jordan can announce it. The algebra is unchanged even when the units digit is $0$, as in $500 - 005 = 495$. The most tempting wrong answer, $50$, counts the $50$ possible starting numbers rather than the distinct differences they produce.",
    source: SOURCE,
  },
  {
    // translate a digit condition via place-value algebra
    id: "s02-q25",
    topic: "number-theory",
    difficulty: "hard",
    stem: 'Call a two-digit positive integer "chirpy" if it equals the sum of its digits plus the product of its digits. For example, $23$ is not chirpy, because $2 + 3 + 2 \\cdot 3 = 11$, which is not $23$. What is the sum of all chirpy numbers?',
    choices: ["$99$", "$432$", "$441$", "$512$", "$531$"],
    answerIndex: 4,
    explanation:
      "The key insight is to translate the condition with place value: writing the number as $10t + u$, the requirement $t + u + tu = 10t + u$ simplifies to $tu = 9t$, and since $t \\geq 1$ we may divide by $t$ to get $u = 9$. Conversely every number ending in $9$ works, since $t + 9 + 9t = 10t + 9$; for instance, $39 = 3 + 9 + 27$. So the chirpy numbers are exactly $19, 29, \\ldots, 99$, and their sum is $10(1 + 2 + \\cdots + 9) + 9 \\cdot 9 = 450 + 81 = 531$. The most tempting wrong answer, $432$, wrongly discards $99$, which does satisfy $9 + 9 + 81 = 99$.",
    source: SOURCE,
  },
];
