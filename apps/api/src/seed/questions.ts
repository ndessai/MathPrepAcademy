import type { Question } from "@mathprep/core";

const SOURCE = "MathPrep original (AMC 8 style)";

/**
 * Original questions in authentic AMC 8 style, authored against a style guide
 * distilled from the real 2022-2025 AMC 8 exams (see
 * .claude/skills/author-questions/style-guide.md). Text may contain inline
 * LaTeX delimited by $...$; stems may contain newlines (rendered with
 * white-space: pre-line). Every question was verified by independent
 * re-solving before inclusion; each wrong choice encodes a specific student
 * error. Difficulty tiers mirror the real exam: easy ~ #1-10, medium ~ #11-20,
 * hard ~ #21-25.
 */
export const QUESTION_BANK: Question[] = [
  // ── Arithmetic & Ratios ──
  {
    // successive fractions of what was left
    id: "arith-01",
    topic: "arithmetic",
    difficulty: "easy",
    stem: "Priya and Sam are sharing a pan of cornbread. Priya eats $\\frac{2}{5}$ of the pan, and then Sam eats $\\frac{1}{4}$ of what remains. What fraction of the original pan of cornbread is left?",
    choices: [
      "$\\frac{1}{4}$",
      "$\\frac{7}{20}$",
      "$\\frac{9}{20}$",
      "$\\frac{11}{20}$",
      "$\\frac{3}{5}$",
    ],
    answerIndex: 2,
    explanation:
      "The key is that Sam's fraction applies to what remains, not to the original pan, so the remaining fractions multiply. After Priya eats $\\frac{2}{5}$, a fraction $\\frac{3}{5}$ of the pan is left; after Sam eats $\\frac{1}{4}$ of that, a fraction $\\frac{3}{4}$ of it survives. So the amount left is $\\frac{3}{5} \\cdot \\frac{3}{4} = \\frac{9}{20}$ of the original pan. The most tempting distractor, $\\frac{7}{20}$, comes from computing $1 - \\frac{2}{5} - \\frac{1}{4}$, which wrongly treats Sam's $\\frac{1}{4}$ as a fraction of the original pan.",
    source: SOURCE,
  },
  {
    // capture-recapture proportion
    id: "arith-02",
    topic: "arithmetic",
    difficulty: "easy",
    stem: "A ranger at Willowmere Pond catches $35$ turtles, tags each one, and releases them all back into the pond. A month later she catches $54$ turtles and finds that exactly $9$ of them are tagged. Assume the ratio of tagged turtles to all turtles in her second catch is the same as the ratio of tagged turtles to all turtles in the pond. How many turtles are in the pond?",
    choices: ["$54$", "$80$", "$89$", "$210$", "$324$"],
    answerIndex: 3,
    explanation:
      "The stated assumption means the fraction of the pond that is tagged equals the fraction of the second catch that is tagged, which is $\\frac{9}{54} = \\frac{1}{6}$. Since the $35$ tagged turtles make up $\\frac{1}{6}$ of the pond, the pond holds $35 \\times 6 = 210$ turtles. The most tempting distractor, $324$, comes from scaling the second catch of $54$ by the factor of $6$ instead of scaling the $35$ originally tagged turtles.",
    source: SOURCE,
  },
  {
    // multi-step unit-conversion rate chain
    id: "arith-03",
    topic: "arithmetic",
    difficulty: "medium",
    stem: "A juice machine at the Riverbend Bottling Club dispenses juice at a steady rate of $5$ liters per minute. Each bottle holds $250$ milliliters of juice, and the bottles are packed $12$ to a crate. (Note that $1$ liter $= 1000$ milliliters.) How many minutes does the machine take to dispense exactly enough juice for $40$ full crates?",
    choices: ["$24$", "$240$", "$480$", "$600$", "$24{,}000$"],
    answerIndex: 0,
    explanation:
      "Chain the conversions from crates down to liters before touching the rate. There are $40 \\times 12 = 480$ bottles, holding $480 \\times 250 = 120{,}000$ milliliters, which is $120{,}000 \\div 1000 = 120$ liters. At $5$ liters per minute, the machine needs $120 \\div 5 = 24$ minutes. The most tempting distractor, $24{,}000$, comes from never converting milliliters to liters and dividing $120{,}000$ directly by $5$.",
    source: SOURCE,
  },
  {
    // repeated halving of a gap toward an ambient value
    id: "arith-04",
    topic: "arithmetic",
    difficulty: "medium",
    stem: "Jordan pours a cup of tea that is $160^\\circ$F and sets it in a room kept at a constant $64^\\circ$F. Every $5$ minutes, the difference between the tea's temperature and the room's temperature is cut in half. What is the temperature of the tea, in degrees Fahrenheit, after $20$ minutes?",
    choices: ["$6$", "$10$", "$64$", "$67$", "$70$"],
    answerIndex: 4,
    explanation:
      "The rule halves the gap between the tea and the room, not the tea's temperature itself. The gap starts at $160 - 64 = 96$ degrees, and in $20$ minutes it is halved $4$ times: $96 \\to 48 \\to 24 \\to 12 \\to 6$. Adding the final gap back to the room temperature gives $64 + 6 = 70$ degrees. The most tempting distractor, $10$, comes from halving the temperature $160$ itself four times instead of halving the gap.",
    source: SOURCE,
  },
  {
    // order-of-magnitude estimation over a long span
    id: "arith-05",
    topic: "arithmetic",
    difficulty: "medium",
    stem: "A faucet in Amara's kitchen drips about $2$ milliliters of water every minute, all day and all night. Which of the following is closest to the number of liters of water that drip from the faucet in one year? (Note that $1$ liter $= 1000$ milliliters.)",
    choices: ["$10$", "$100$", "$1{,}000$", "$10{,}000$", "$1{,}000{,}000$"],
    answerIndex: 2,
    explanation:
      "Only the power of ten matters, so convert the time units carefully: $2 \\times 60 \\times 24 \\times 365 = 1{,}051{,}200$ milliliters per year. Dividing by $1000$ gives about $1{,}051$ liters, which is closest to $1{,}000$. Each wrong choice is one dropped or corrupted conversion: $10$ skips the $60$ minutes per hour, $100$ skips the $24$ hours per day, and $10{,}000$ uses $1$ liter $= 100$ milliliters. The most tempting distractor, $1{,}000{,}000$, comes from never converting milliliters to liters at all.",
    source: SOURCE,
  },
  {
    // Simpson's-paradox rate reconciliation
    id: "arith-06",
    topic: "arithmetic",
    difficulty: "hard",
    stem: "Maya and Leo each attempted exactly $20$ free throws over a weekend, some on Saturday and the rest on Sunday. Maya made $8$ of her $16$ attempts on Saturday and $3$ of her $4$ attempts on Sunday. Leo made $4$ free throws on Saturday and $7$ free throws on Sunday, and he attempted more free throws on Sunday than on Saturday. Surprisingly, although Leo's success rate was strictly lower than Maya's on Saturday and also strictly lower than Maya's on Sunday, the two players had the same overall success rate. How many free throws did Leo attempt on Saturday?",
    choices: ["$8$", "$9$", "$10$", "$11$", "$12$"],
    answerIndex: 1,
    explanation:
      "The insight is that the three conditions are inequalities that squeeze Leo's Saturday attempts $s$ to a single value. Maya's rates are $\\frac{8}{16} = \\frac{1}{2}$ on Saturday and $\\frac{3}{4}$ on Sunday, and Leo already matches her overall rate of $\\frac{11}{20}$ since he made $4 + 7 = 11$ of $20$. Requiring $\\frac{4}{s} < \\frac{1}{2}$ forces $s \\ge 9$, requiring $\\frac{7}{20 - s} < \\frac{3}{4}$ forces $s \\le 10$, and attempting more on Sunday means $20 - s > s$, so $s \\le 9$. The only value satisfying all three is $s = 9$, and indeed $\\frac{4}{9} < \\frac{1}{2}$ and $\\frac{7}{11} < \\frac{3}{4}$. The most tempting distractor, $10$, satisfies both rate inequalities but splits the attempts equally, violating the condition that Leo attempted more free throws on Sunday.",
    source: SOURCE,
  },
  // ── Number Theory ──
  {
    // erased number forcing divisibility of the remaining sum
    id: "nt-01",
    topic: "number-theory",
    difficulty: "easy",
    stem: "Maya writes the integers from $1$ to $14$ on a whiteboard. Her friend Leo erases exactly one of the numbers, and the sum of the $13$ numbers that remain is a multiple of $11$. Which number did Leo erase?",
    choices: ["$3$", "$5$", "$6$", "$9$", "$11$"],
    answerIndex: 2,
    explanation:
      "The full sum is $1 + 2 + \\cdots + 14 = \\frac{14 \\cdot 15}{2} = 105$, and $105 = 9 \\cdot 11 + 6$, so erasing $x$ leaves a multiple of $11$ exactly when $x \\equiv 6 \\pmod{11}$. The only number from $1$ to $14$ in that residue class is $6$. Indeed, $105 - 6 = 99 = 9 \\cdot 11$. The most tempting distractor, $5$, comes from solving $x \\equiv -105 \\pmod{11}$ \u2014 adjusting the residue in the wrong direction.",
    source: SOURCE,
  },
  {
    // omitted addend recovered from a near-perfect-square sum
    id: "nt-02",
    topic: "number-theory",
    difficulty: "easy",
    stem: "Jordan adds up the integers from $1$ to $20$, but he accidentally skips exactly one of them. The sum he gets is a perfect square. Which integer did Jordan skip?",
    choices: ["$14$", "$15$", "$20$", "$21$", "$41$"],
    answerIndex: 0,
    explanation:
      "The complete sum is $\\frac{20 \\cdot 21}{2} = 210$, so after skipping $x$ the total is $210 - x$, which must lie between $190$ and $209$. The only perfect square in that range is $196 = 14^2$, so $x = 210 - 196 = 14$. As a check, adding $1$ through $20$ without $14$ gives $196$. The most tempting distractor, $15$, comes from using $225 = 15^2$, the square just above $210$, which the skipped-sum can never reach.",
    source: SOURCE,
  },
  {
    // units digit of a long sum under newly defined notation
    id: "nt-03",
    topic: "number-theory",
    difficulty: "medium",
    stem: "Sam invents a new operation: for a positive integer $n$, the value $n^{\\triangle}$ is the product of the first $n$ positive multiples of $3$. For example, $4^{\\triangle} = 3 \\cdot 6 \\cdot 9 \\cdot 12 = 1944$. What is the units digit of the sum $1^{\\triangle} + 2^{\\triangle} + 3^{\\triangle} + \\cdots + 2026^{\\triangle}$?",
    choices: ["$0$", "$1$", "$3$", "$4$", "$7$"],
    answerIndex: 4,
    explanation:
      "The key is that for every $n \\ge 5$, the product $n^{\\triangle}$ includes both the factors $6$ and $15$, so it is a multiple of $10$ and contributes units digit $0$. Only the first four terms matter: $1^{\\triangle} + 2^{\\triangle} + 3^{\\triangle} + 4^{\\triangle} = 3 + 18 + 162 + 1944 = 2127$. The units digit of the entire sum is therefore $7$. The distractor $0$ is the false transfer of assuming that every term, including the first few small ones, already ends in $0$.",
    source: SOURCE,
  },
  {
    // minimum moves of +a/-b to reach a target
    id: "nt-04",
    topic: "number-theory",
    difficulty: "medium",
    stem: "Pip the frog starts at $0$ on a number line. Each jump takes Pip either $7$ units to the right or $4$ units to the left, and Pip wants to land exactly on the number $2026$. What is the least number of jumps Pip can make?",
    choices: ["$290$", "$291$", "$292$", "$294$", "$302$"],
    answerIndex: 1,
    explanation:
      "If Pip makes $a$ jumps right and $b$ jumps left, then $7a - 4b = 2026$ and the total number of jumps is $a + b$. Working modulo $4$ gives $3a \\equiv 2 \\pmod{4}$, so $a \\equiv 2 \\pmod{4}$; since $7a \\ge 2026$ forces $a \\ge 290$, and $290 \\equiv 2 \\pmod 4$, the smallest valid value is $a = 290$, with $b = \\frac{7 \\cdot 290 - 2026}{4} = 1$. That gives $a + b = 291$, and any larger valid $a$ only increases the total because $a + b = \\frac{11a - 2026}{4}$ grows with $a$. The most tempting distractor, $290$, counts only the rightward jumps and forgets the single leftward jump.",
    source: SOURCE,
  },
  {
    // cryptarithm collapsed by place-value factorization
    id: "nt-05",
    topic: "number-theory",
    difficulty: "medium",
    stem: "In the equation $\\underline{A}\\,\\underline{B}\\,\\underline{A}\\,\\underline{B} = \\underline{C} \\times 606$, the letters $A$, $B$, and $C$ stand for three different digits, and $\\underline{A}\\,\\underline{B}\\,\\underline{A}\\,\\underline{B}$ is the four-digit number formed by writing the two-digit number $\\underline{A}\\,\\underline{B}$ twice in a row. What is the greatest possible value of $A + B + C$?",
    choices: ["$12$", "$13$", "$17$", "$18$", "$20$"],
    answerIndex: 3,
    explanation:
      "The key is place value: $\\underline{A}\\,\\underline{B}\\,\\underline{A}\\,\\underline{B} = 101 \\times \\underline{A}\\,\\underline{B}$, and $606 = 6 \\times 101$, so the equation collapses to $\\underline{A}\\,\\underline{B} = 6C$. Checking $C = 2$ through $9$: the products $12$, $24$, $36$, and $48$ each repeat the digit $C$, leaving the valid triples $(A, B, C) = (1,8,3)$, $(3,0,5)$, $(4,2,7)$, and $(5,4,9)$. The greatest sum is $5 + 4 + 9 = 18$, coming from $5454 = 9 \\times 606$. Choice $20$ comes from ignoring that the digits must be different and taking $C = 8$ with $\\underline{A}\\,\\underline{B} = 48$, where $B$ and $C$ collide.",
    source: SOURCE,
  },
  {
    // intersection of a digit-ending condition, an algebraic factorization, and primality
    id: "nt-06",
    topic: "number-theory",
    difficulty: "hard",
    stem: "How many integers $n$ with $1 \\le n \\le 10{,}000$ have all three of the following properties?\n\nI. The tens digit and the units digit of $n$ are both $9$.\nII. $n$ is $1$ less than a perfect square.\nIII. $n$ is the product of exactly two prime numbers.",
    choices: ["$0$", "$1$", "$2$", "$3$", "$4$"],
    answerIndex: 2,
    explanation:
      "Property I says $n + 1$ ends in $00$, so by property II, $n + 1 = k^2$ is a multiple of $100$, which forces $k$ to be a multiple of $10$; the candidates are $n = k^2 - 1 = (k-1)(k+1)$ for $k = 10, 20, \\ldots, 100$. Since $k - 1$ and $k + 1$ both exceed $1$, property III holds exactly when both factors are prime \u2014 if either were composite, $n$ would have at least three prime factors. Checking the ten pairs $(9,11), (19,21), (29,31), (39,41), (49,51), (59,61), (69,71), (79,81), (89,91), (99,101)$, only $(29,31)$ and $(59,61)$ consist of two primes, giving $n = 899$ and $n = 3599$. So the count is $2$. The most tempting distractor, $3$, comes from believing $91$ is prime and counting $8099 = 89 \\cdot 91$ \u2014 in fact $91 = 7 \\cdot 13$.",
    source: SOURCE,
  },
  // ── Algebra & Patterns ──
  {
    // ages with a time shift and a sum condition
    id: "alg-01",
    topic: "algebra",
    difficulty: "easy",
    stem: "Three years ago, Leo turned $10$. The sum of Leo's age and his sister Nina's age today is $22$. How old is Nina today?",
    choices: ["$9$", "$10$", "$12$", "$13$", "$15$"],
    answerIndex: 0,
    explanation:
      "Leo turned $10$ three years ago, so today he is $10 + 3 = 13$ years old. Since the two ages add to $22$ today, Nina is $22 - 13 = 9$ years old. The most tempting distractor, $12$, comes from forgetting the time shift and subtracting $10$ directly from $22$.",
    source: SOURCE,
  },
  {
    // evaluate nested custom binary operations
    id: "alg-02",
    topic: "algebra",
    difficulty: "easy",
    stem: "Sam invents two operations for a math team warm-up: $a \\bullet b = 3a - b$ and $a \\circ b = a + 2b$. What is the value of $(2 \\bullet 3) \\circ 4$?",
    choices: ["$3$", "$5$", "$8$", "$11$", "$20$"],
    answerIndex: 3,
    explanation:
      "Work inside the parentheses first: $2 \\bullet 3 = 3(2) - 3 = 3$. Then apply the second operation to that result: $3 \\circ 4 = 3 + 2(4) = 11$. The most tempting distractor, $20$, comes from swapping the two definitions and computing $(2 \\circ 3) \\bullet 4$ instead.",
    source: SOURCE,
  },
  {
    // recover a target from overlapping pair sums or averages
    id: "alg-03",
    topic: "algebra",
    difficulty: "medium",
    stem: "Amara writes four numbers in a row. The average of the first and second numbers is $18$, the average of the second and third numbers is $13$, and the average of the third and fourth numbers is $11$. What is the average of the first and fourth numbers?",
    choices: ["$6$", "$14$", "$16$", "$20$", "$42$"],
    answerIndex: 2,
    explanation:
      "The key insight is that the middle numbers cancel in the combination $(a+b) - (b+c) + (c+d) = a + d$. The three pair sums are $36$, $26$, and $22$, so $a + d = 36 - 26 + 22 = 32$, making the average of the first and fourth numbers $32 \\div 2 = 16$. No individual number can be determined, but this particular combination is forced. The most tempting distractor, $20$, comes from a sign slip: computing $18 + 13 - 11$ instead of $18 - 13 + 11$.",
    source: SOURCE,
  },
  {
    // total split under chained CUMULATIVE increments
    id: "alg-04",
    topic: "algebra",
    difficulty: "medium",
    stem: "Priya pours $86$ marbles into four bags. The second bag gets $1$ more marble than the first, the third bag gets $2$ more than the second, and the fourth bag gets $3$ more than the third. How many marbles are in the second bag?",
    choices: ["$19$", "$20$", "$21$", "$22$", "$25$"],
    answerIndex: 1,
    explanation:
      "Because the differences accumulate, if the first bag has $t$ marbles the four bags hold $t$, $t+1$, $t+3$, and $t+6$. The total is $4t + 10 = 86$, so $t = 19$, and the second bag has $19 + 1 = 20$ marbles. The bags hold $19$, $20$, $22$, and $25$, which accounts for three of the wrong choices. The most tempting distractor, $21$, comes from misreading each difference as measured from the first bag, giving amounts $t, t+1, t+2, t+3$ and $t = 20$.",
    source: SOURCE,
  },
  {
    // before/after ratio with two-way transfers
    id: "alg-05",
    topic: "algebra",
    difficulty: "medium",
    stem: "The Riverbend Chess Club is playing in two rooms. At first, the ratio of players in the Gold Room to players in the Silver Room is $3 : 1$. Then $7$ players move from the Gold Room to the Silver Room, and $3$ players move from the Silver Room to the Gold Room, after which the ratio is $2 : 1$. How many more players are in the Gold Room than in the Silver Room after the moves?",
    choices: ["$10$", "$12$", "$16$", "$24$", "$36$"],
    answerIndex: 2,
    explanation:
      "Let the Gold and Silver Rooms start with $3x$ and $x$ players. The two moves change the Gold Room by $-7 + 3 = -4$ players and the Silver Room by $+4$, so the new ratio gives $3x - 4 = 2(x + 4)$, hence $x = 12$. After the moves the rooms hold $32$ and $16$ players, a difference of $32 - 16 = 16$. The most tempting distractor, $12$, is the solved variable $x$ itself rather than the difference the question asks for.",
    source: SOURCE,
  },
  {
    // arithmetic progression pinned by interval constraints
    id: "alg-06",
    topic: "algebra",
    difficulty: "hard",
    stem: "An increasing arithmetic progression consists of $15$ positive integers. (In an arithmetic progression, the difference between consecutive terms is constant.) The second term is at least $15$ and at most $20$, and the fifteenth term is at least $104$ and at most $106$. What is the sum of the digits of the fourteenth term?",
    choices: ["$3$", "$7$", "$11$", "$16$", "$18$"],
    answerIndex: 4,
    explanation:
      "Let the first term be $a$ and the common difference be $d$; since the terms are increasing positive integers, $d$ is a positive integer. The fifteenth term minus the second term equals $13d$, which must lie between $104 - 20 = 84$ and $106 - 15 = 91$, and the only multiple of $13$ in that range is $91$, so $d = 7$. The fifteenth term is then exactly $91$ more than the second, which forces the second term to be $15$ and the fifteenth to be $106$, so $a = 8$. The fourteenth term is $8 + 13 \\cdot 7 = 99$, whose digit sum is $18$. The most tempting distractor, $7$, is the digit sum of the fifteenth term $106$ \u2014 an off-by-one in the term index.",
    source: SOURCE,
  },
  // ── Geometry ──
  {
    // total surface area to volume
    id: "geo-01",
    topic: "geometry",
    difficulty: "easy",
    stem: "Sam builds a closed box in the shape of a cube. The total area of all six faces of the box is $96$ square inches. What is the volume, in cubic inches, of the box?",
    choices: ["$4$", "$16$", "$24$", "$64$", "$96$"],
    answerIndex: 3,
    explanation:
      "Since a cube has $6$ congruent square faces, each face has area $96 \\div 6 = 16$ square inches, so each edge is $\\sqrt{16} = 4$ inches. The volume is therefore $4^3 = 64$ cubic inches. The most tempting wrong answer, $16$, comes from stopping at the area of one face instead of finding the edge length and cubing it.",
    source: SOURCE,
  },
  {
    // area of the union of two overlapping rectangles
    id: "geo-02",
    topic: "geometry",
    difficulty: "easy",
    stem: "On a coordinate grid, Leo shades two rectangles whose sides are parallel to the axes. The first rectangle has opposite corners at $(0,0)$ and $(7,5)$, and the second has opposite corners at $(3,2)$ and $(10,8)$. What is the area, in square units, of the region covered by at least one of the two rectangles?",
    choices: ["$12$", "$53$", "$65$", "$77$", "$89$"],
    answerIndex: 2,
    explanation:
      "The area of the union is the sum of the two rectangles' areas minus the area of their overlap, which would otherwise be counted twice. The first rectangle has area $7 \\times 5 = 35$ and the second has area $7 \\times 6 = 42$. They overlap where $3 \\le x \\le 7$ and $2 \\le y \\le 5$, a $4 \\times 3$ rectangle of area $12$. So the covered region has area $35 + 42 - 12 = 65$. The most tempting wrong answer, $77$, comes from adding the two areas without subtracting the doubly counted overlap.",
    source: SOURCE,
  },
  {
    // midpoint (Varignon) quadrilateral from coordinates
    id: "geo-03",
    topic: "geometry",
    difficulty: "medium",
    stem: "Jordan draws the rectangle with vertices $(1,1)$, $(11,1)$, $(11,7)$, and $(1,7)$ on a coordinate grid, then marks the midpoint of each of the four sides. Connecting the four midpoints in order forms a new quadrilateral. What is the area of this quadrilateral?",
    choices: ["$15$", "$30$", "$32$", "$60$", "$120$"],
    answerIndex: 1,
    explanation:
      "The key fact is that the quadrilateral formed by joining the midpoints of a rectangle's sides in order is a rhombus whose area is exactly half the rectangle's area. The rectangle is $10$ units wide and $6$ units tall, so its area is $60$. The midpoints are $(6,1)$, $(11,4)$, $(6,7)$, and $(1,4)$, so the rhombus has diagonals of lengths $10$ and $6$, giving area $\\frac{1}{2} \\cdot 10 \\cdot 6 = 30$, which is indeed half of $60$. The most tempting wrong answer, $60$, comes from reporting the rectangle's own area and forgetting the halving.",
    source: SOURCE,
  },
  {
    // similar-figure area ratio from a parallel cut
    id: "geo-04",
    topic: "geometry",
    difficulty: "medium",
    stem: "Maya draws a triangle and then draws a segment parallel to the triangle's base, with one endpoint on each of the other two sides. The distance from the triangle's top vertex down to the segment is $\\frac{2}{5}$ of the triangle's height. The segment splits the triangle into a smaller triangle above it and a trapezoid below it. What is the ratio of the area of the trapezoid to the area of the smaller triangle?",
    choices: ["$4 : 25$", "$4 : 21$", "$3 : 2$", "$9 : 4$", "$21 : 4$"],
    answerIndex: 4,
    explanation:
      "Because the segment is parallel to the base, the small top triangle is similar to the whole triangle with length ratio $\\frac{2}{5}$, and area scales as the square of the length ratio. So the small triangle has $\\left(\\frac{2}{5}\\right)^2 = \\frac{4}{25}$ of the whole area, leaving $\\frac{21}{25}$ of the area for the trapezoid. The ratio of the trapezoid's area to the small triangle's area is therefore $\\frac{21}{25} : \\frac{4}{25} = 21 : 4$. The most tempting wrong answer, $3 : 2$, comes from comparing the two heights directly, treating area as proportional to length instead of to its square.",
    source: SOURCE,
  },
  {
    // equal areas force a length via collapsing quadratic
    id: "geo-05",
    topic: "geometry",
    difficulty: "medium",
    stem: "Amara has a square sheet of paper. From one corner she cuts out a smaller square whose side is $6$ inches shorter than the side of the sheet, and the L-shaped piece that remains has area $132$ square inches. What is the side length, in inches, of the smaller square that Amara cut out?",
    choices: ["$8$", "$14$", "$22$", "$64$", "$196$"],
    answerIndex: 0,
    explanation:
      "Let $s$ be the side of the original sheet, so the smaller square has side $s - 6$ and the L-shaped piece has area $s^2 - (s-6)^2$. By the difference of squares this collapses to $(s + (s-6))(s - (s-6)) = 6(2s - 6) = 12s - 36$ \u2014 the squared terms cancel, leaving a linear equation. Setting $12s - 36 = 132$ gives $12s = 168$, so $s = 14$, and the smaller square has side $14 - 6 = 8$ inches. The most tempting wrong answer, $14$, is the side of the original sheet \u2014 the solved variable reported instead of the quantity the question asked for.",
    source: SOURCE,
  },
  {
    // count integer-sided constrained polygons of fixed perimeter
    id: "geo-06",
    topic: "geometry",
    difficulty: "hard",
    stem: "Priya builds picture frames shaped like isosceles trapezoids. In each frame the two parallel sides have different lengths, the two legs (the non-parallel sides) have equal length, and each of the two interior angles at the longer parallel side measures $60^\\circ$. A frame design is acceptable if it satisfies both of the following:\n(I) all four side lengths are positive integers, measured in inches, and\n(II) the perimeter is $42$ inches.\nTwo designs are considered the same if their trapezoids are congruent. How many different acceptable designs are there?",
    choices: ["$4$", "$5$", "$6$", "$7$", "$8$"],
    answerIndex: 2,
    explanation:
      "Drop a perpendicular from each end of the shorter parallel side to the longer one: each of the two right triangles created has a $60^\\circ$ angle at the longer side, so its horizontal leg is $L \\cos 60^\\circ = \\frac{L}{2}$, where $L$ is the leg length. Hence the longer side equals $b + L$, where $b$ is the shorter side, and the perimeter is $(b + L) + b + 2L = 2b + 3L = 42$. Since $2b = 42 - 3L$ must be a positive even integer, $L$ must be even, and $L = 2, 4, 6, 8, 10, 12$ give $b = 18, 15, 12, 9, 6, 3$ respectively \u2014 six valid trapezoids, each a different congruence class; $L = 14$ would force $b = 0$, a degenerate triangle rather than a trapezoid. So there are $6$ acceptable designs. The most tempting wrong answer, $7$, comes from including the degenerate case $b = 0$.",
    source: SOURCE,
  },
  // ── Counting ──
  {
    // distinct end-values of a short branching process
    id: "count-01",
    topic: "counting",
    difficulty: "easy",
    stem: "Maya writes the number $2$ on a whiteboard. She then performs $3$ steps. At each step she either doubles the number on the board or adds $4$ to it, erasing the old number and writing the new one. How many different numbers could be on the board after the $3$ steps?",
    choices: ["$4$", "$5$", "$6$", "$7$", "$8$"],
    answerIndex: 1,
    explanation:
      "Tracking the set of possible values step by step is faster than listing all $2^3 = 8$ branches separately. After one step the board shows $4$ or $6$; after two steps the possibilities are $\\{8, 10, 12\\}$, because doubling $4$ and adding $4$ to it both give $8$. After the third step, $8$ leads to $16$ or $12$, $10$ leads to $20$ or $14$, and $12$ leads to $24$ or $16$, so the distinct final values are $12, 14, 16, 20, 24$ \u2014 that is, $5$ different numbers. The most tempting wrong answer, $8$, comes from assuming all $2^3$ branches end at different values and skipping the collision check.",
    source: SOURCE,
  },
  {
    // multiplication principle with one forbidden pairing
    id: "count-02",
    topic: "counting",
    difficulty: "easy",
    stem: "Jordan is packing an outfit for a trip. He will choose one of his $5$ shirts, one of his $4$ pairs of pants, and one of his $2$ pairs of shoes. One of the shirts is striped, and Jordan never wears the striped shirt with his black pair of shoes. How many different outfits can Jordan choose?",
    choices: ["$11$", "$32$", "$36$", "$39$", "$40$"],
    answerIndex: 2,
    explanation:
      "First count with no restriction using the multiplication principle: $5 \\cdot 4 \\cdot 2 = 40$ outfits. The forbidden combination fixes the shirt (striped) and the shoes (black) but leaves all $4$ pants choices free, so exactly $4$ outfits are ruled out. That leaves $40 - 4 = 36$ outfits. The most tempting wrong answer, $39$, comes from subtracting only $1$ for the forbidden pairing instead of the full $4$ outfits it eliminates.",
    source: SOURCE,
  },
  {
    // arrangements with identical letters exactly filling the gaps
    id: "count-03",
    topic: "counting",
    difficulty: "medium",
    stem: "Priya is stringing $9$ beads in a row on a cord: $5$ identical blue beads and $4$ other beads of different colors \u2014 one red, one green, one yellow, and one white. She wants no two blue beads to be next to each other. In how many different orders can she string the $9$ beads?",
    choices: ["$24$", "$48$", "$120$", "$144$", "$3024$"],
    answerIndex: 0,
    explanation:
      "The key is that the four distinct beads create exactly $5$ gaps \u2014 $3$ between them and $2$ at the ends \u2014 and keeping blue beads apart forces every blue bead into a different gap. Since there are exactly $5$ blue beads and exactly $5$ gaps, each gap must receive exactly one blue bead, so the blue placement is completely forced. The whole arrangement is therefore determined by the left-to-right order of the four distinct beads, giving $4! = 24$ orders. The most tempting wrong answer, $3024$, is $9!/5!$, the count of all arrangements with the no-adjacent-blues rule ignored entirely.",
    source: SOURCE,
  },
  {
    // balanced up/down move sequences that never go below start
    id: "count-04",
    topic: "counting",
    difficulty: "medium",
    stem: "Leo operates a freight elevator that starts at street level. During one shift the elevator makes $8$ moves, each going up one level or down one level, with exactly $4$ moves up and $4$ moves down, and it is never allowed to go below street level at any point. (For example, up-up-down-down-up-up-down-down is one allowed sequence.) How many different sequences of $8$ moves are possible?",
    choices: ["$8$", "$13$", "$14$", "$16$", "$70$"],
    answerIndex: 2,
    explanation:
      "The restriction that the elevator never dips below street level means this is not a free arrangement count \u2014 track the height after each move and only keep sequences whose running total of ups minus downs never goes negative. Listing systematically (for instance, by the moment the elevator first returns to street level) gives exactly $14$ valid sequences; equivalently, of the $\\binom{8}{4} = 70$ unrestricted orders of $4$ ups and $4$ downs, exactly $56$ dip below street level at some point, leaving $70 - 56 = 14$. The most tempting wrong answer, $70$, counts every possible order of the moves and ignores the never-below-street-level restriction.",
    source: SOURCE,
  },
  {
    // extremal packing: minimum lines covering forced elements
    id: "count-05",
    topic: "counting",
    difficulty: "medium",
    stem: "Sam writes the numbers $1$ through $64$ in the cells of an $8 \\times 8$ grid, one number in each cell, in any order he likes. Call a row or column marked if it contains at least one multiple of $3$. (Note that there are $21$ multiples of $3$ from $1$ to $64$.) What is the least possible total number of marked rows and marked columns?",
    choices: ["$6$", "$8$", "$9$", "$10$", "$21$"],
    answerIndex: 3,
    explanation:
      "If the multiples of $3$ occupy $a$ rows and $b$ columns, then all $21$ of them lie among the $ab$ cells where those rows and columns cross, so $ab \\ge 21$. When $a + b = 9$ the product $ab$ is at most $4 \\cdot 5 = 20$, which is too small, so $a + b$ must be at least $10$. A total of $10$ is achievable: place all $21$ multiples of $3$ inside a $5 \\times 5$ block of cells, which has $25 \\ge 21$ cells, so only those $5$ rows and $5$ columns are marked. The least possible total is therefore $10$. The most tempting wrong answer, $6$, minimizes rows and columns separately ($3$ rows suffice, and $3$ columns suffice), but a $3 \\times 3$ crossing has only $9$ cells and cannot hold all $21$ multiples at the same time.",
    source: SOURCE,
  },
  {
    // count equal-sum partitions of 1..9 into three unordered triples
    id: "count-06",
    topic: "counting",
    difficulty: "hard",
    stem: "Amara has nine cards numbered $1$ through $9$. She deals all nine cards into three identical unlabeled boxes, with three cards in each box, so that the three boxes have equal card sums. Two dealings are considered the same if they produce the same three groups of cards. In how many different ways can Amara deal the cards?",
    choices: ["$1$", "$2$", "$3$", "$6$", "$12$"],
    answerIndex: 1,
    explanation:
      "Each box must sum to $45/3 = 15$, and anchoring the casework on the card $9$ makes the search complete: the two cards placed with $9$ must sum to $6$, so they are $\\{1, 5\\}$ or $\\{2, 4\\}$. If one box is $\\{9, 1, 5\\}$, the box containing $8$ needs two of the remaining cards summing to $7$, and only $\\{3, 4\\}$ works, which forces $\\{2, 6, 7\\}$ (sum $15$) as the last box. If one box is $\\{9, 2, 4\\}$, the box containing $8$ needs a pair summing to $7$, and only $\\{1, 6\\}$ works, which forces $\\{3, 5, 7\\}$ (sum $15$). Each case yields exactly one dealing, so there are $2$ ways in all. The most tempting wrong answer, $12$, equals $2 \\cdot 3!$ and comes from treating the three boxes as if they were labeled.",
    source: SOURCE,
  },
  // ── Probability ──
  {
    // random integer from a range has a divisibility property
    id: "prob-01",
    topic: "probability",
    difficulty: "easy",
    stem: "A jar contains $40$ raffle tickets numbered $1$ through $40$. Leo draws one ticket at random. What is the probability that the number on his ticket is a multiple of $4$ or a multiple of $6$?",
    choices: [
      "$\\frac{3}{40}$",
      "$\\frac{3}{20}$",
      "$\\frac{1}{4}$",
      "$\\frac{3}{10}$",
      "$\\frac{13}{40}$",
    ],
    answerIndex: 4,
    explanation:
      "The key is inclusion-exclusion: multiples of $12$ are counted once as multiples of $4$ and again as multiples of $6$, so they must be removed once. From $1$ to $40$ there are $10$ multiples of $4$ and $6$ multiples of $6$, while the multiples of $12$ are $12, 24, 36$ \u2014 three of them. So the number of favorable tickets is $10 + 6 - 3 = 13$, and the probability is $\\frac{13}{40}$. The most tempting distractor, $\\frac{1}{4}$, comes from counting only the $10$ multiples of $4$ and forgetting the multiples of $6$ entirely.",
    source: SOURCE,
  },
  {
    // two spinners form a two-digit number
    id: "prob-02",
    topic: "probability",
    difficulty: "easy",
    stem: "Maya plays a game with two fair spinners. The first spinner has three equal sectors labeled $1$, $2$, and $3$, and its result becomes the tens digit of a two-digit number. The second spinner has four equal sectors labeled $2$, $5$, $6$, and $8$, and its result becomes the ones digit. Maya spins both spinners once. What is the probability that the two-digit number she forms is a multiple of $4$?",
    choices: [
      "$\\frac{1}{3}$",
      "$\\frac{5}{12}$",
      "$\\frac{1}{2}$",
      "$\\frac{7}{12}$",
      "$\\frac{5}{7}$",
    ],
    answerIndex: 1,
    explanation:
      "There are $3 \\times 4 = 12$ equally likely two-digit numbers: $12, 15, 16, 18, 22, 25, 26, 28, 32, 35, 36, 38$. Checking each one, the multiples of $4$ are $12, 16, 28, 32,$ and $36$ \u2014 exactly $5$ of the $12$. So the probability is $\\frac{5}{12}$. The most tempting distractor, $\\frac{1}{2}$, comes from hastily counting an even number like $26$ or $18$ as a multiple of $4$.",
    source: SOURCE,
  },
  {
    // at least one occurrence via the complement
    id: "prob-03",
    topic: "probability",
    difficulty: "medium",
    stem: "At the school fair, Jordan spins a prize wheel that has three equal sections, exactly one of which is marked with a star. He spins the wheel $3$ times, and the spins are independent. What is the probability that the wheel lands on the star section at least once?",
    choices: [
      "$\\frac{8}{27}$",
      "$\\frac{4}{9}$",
      "$\\frac{5}{9}$",
      "$\\frac{19}{27}$",
      "$\\frac{65}{81}$",
    ],
    answerIndex: 3,
    explanation:
      'The key insight is to use the complement: "at least one star" is everything except "no stars at all." Each spin misses the star with probability $\\frac{2}{3}$, and the spins are independent, so the probability of missing all three times is $\\left(\\frac{2}{3}\\right)^3 = \\frac{8}{27}$. Therefore the probability of at least one star is $1 - \\frac{8}{27} = \\frac{19}{27}$. The most tempting distractor, $\\frac{8}{27}$, is the probability of no stars at all \u2014 the result of forgetting the final subtraction from $1$.',
    source: SOURCE,
  },
  {
    // random digit arrangement meets a divisibility condition
    id: "prob-04",
    topic: "probability",
    difficulty: "medium",
    stem: "Sam has five cards numbered $2$, $3$, $5$, $6$, and $7$. He draws two cards one at a time without replacement and forms a two-digit number, using the first card drawn as the tens digit and the second card drawn as the ones digit. What is the probability that the resulting number is divisible by $3$?",
    choices: [
      "$\\frac{3}{20}$",
      "$\\frac{1}{5}$",
      "$\\frac{3}{10}$",
      "$\\frac{2}{5}$",
      "$\\frac{3}{5}$",
    ],
    answerIndex: 2,
    explanation:
      "A number is divisible by $3$ exactly when its digit sum is divisible by $3$, so only the pair of digits matters, not the order. Checking all pairs from $\\{2, 3, 5, 6, 7\\}$, the sums divisible by $3$ come from $\\{2, 7\\}$, $\\{3, 6\\}$, and $\\{5, 7\\}$. There are $5 \\times 4 = 20$ equally likely ordered draws, and each qualifying pair occurs in $2$ orders, giving $6$ favorable outcomes and a probability of $\\frac{6}{20} = \\frac{3}{10}$. The most tempting distractor, $\\frac{3}{5}$, comes from dividing the $6$ ordered favorable outcomes by the $10$ unordered pairs \u2014 mixing an ordered count with an unordered denominator.",
    source: SOURCE,
  },
  {
    // random pair from a listed set satisfies a parity/sum condition
    id: "prob-05",
    topic: "probability",
    difficulty: "medium",
    stem: "Amara writes the seven numbers $2$, $5$, $6$, $9$, $11$, $14$, and $21$ on separate slips of paper and puts them in a bag. She draws two slips at random without replacement. What is the probability that the product of the two numbers she draws is odd?",
    choices: [
      "$\\frac{2}{7}$",
      "$\\frac{16}{49}$",
      "$\\frac{1}{2}$",
      "$\\frac{4}{7}$",
      "$\\frac{5}{7}$",
    ],
    answerIndex: 0,
    explanation:
      "The key insight is that a product is odd only when both factors are odd, so classify the list by parity instead of listing all pairs. The odd numbers are $5$, $9$, $11$, and $21$ \u2014 four of the seven. The probability both draws are odd is $\\frac{4}{7} \\cdot \\frac{3}{6} = \\frac{2}{7}$ (equivalently, $\\binom{4}{2} = 6$ favorable pairs out of $\\binom{7}{2} = 21$). The most tempting distractor, $\\frac{16}{49}$, multiplies $\\frac{4}{7}$ by itself, ignoring that the second slip is drawn without replacement so the draws are not independent.",
    source: SOURCE,
  },
  {
    // return-to-start probability of a symmetric random process
    id: "prob-06",
    topic: "probability",
    difficulty: "hard",
    stem: "Pip the frog sits on one of five lily pads in a pond. Every minute, Pip jumps from its current pad to one of the other four pads, each chosen with equal probability, and each jump is independent of the others. What is the probability that after exactly $4$ jumps, Pip is on the pad where it started?",
    choices: [
      "$\\frac{13}{256}$",
      "$\\frac{3}{16}$",
      "$\\frac{1}{5}$",
      "$\\frac{13}{64}$",
      "$\\frac{7}{32}$",
    ],
    answerIndex: 3,
    explanation:
      "The key insight is a recursion: let $p_n$ be the probability Pip is on its starting pad after $n$ jumps. Pip can be home after jump $n+1$ only if it was away (probability $1 - p_n$) and then chose the home pad out of $4$ options, so $p_{n+1} = \\frac{1 - p_n}{4}$. Starting from $p_1 = 0$, we get $p_2 = \\frac{1}{4}$, $p_3 = \\frac{3}{16}$, and $p_4 = \\frac{1 - \\frac{3}{16}}{4} = \\frac{13}{64}$. Equivalently, $52$ of the $4^4 = 256$ equally likely jump sequences return to the start, and $\\frac{52}{256} = \\frac{13}{64}$. The most tempting distractor, $\\frac{1}{5}$, assumes all five pads are equally likely after only four jumps \u2014 the long-run steady state, not the four-jump probability.",
    source: SOURCE,
  },
  // ── Data Analysis ──
  {
    // cumulative at-least table to a range count
    id: "data-01",
    topic: "data-analysis",
    difficulty: "easy",
    stem: "The $48$ members of the Riverbend Coding Club all took the same skills quiz. The organizer reports these results:\n- $7$ members scored at least $90$ points.\n- $19$ members scored at least $80$ points.\n- $35$ members scored at least $70$ points.\nHow many members scored at least $70$ points but less than $80$ points?",
    choices: ["$7$", "$12$", "$13$", "$16$", "$28$"],
    answerIndex: 3,
    explanation:
      'The key is choosing which two rows to subtract: everyone counted in the "at least $70$" row either scored at least $80$ or scored in the $70$s, so the members scoring at least $70$ but less than $80$ number $35 - 19 = 16$. The rows are cumulative, so no other combination isolates that bracket. The total of $48$ is only needed for scores below $70$, which is $48 - 35 = 13$. The most tempting distractor, $12$, comes from subtracting the wrong pair of rows ($19 - 7$), which counts the members scoring in the $80$s instead.',
    source: SOURCE,
  },
  {
    // linear extrapolation from a constant real-world rate
    id: "data-02",
    topic: "data-analysis",
    difficulty: "easy",
    stem: "At the start of $1995$, an oak tree in the town square was $3.2$ meters tall. Since then it has grown at a constant rate of $0.4$ meters per year. If the tree keeps growing at this rate, how tall, in meters, will it be at the start of $2025$? Round your answer to the nearest meter.",
    choices: ["$11$", "$12$", "$15$", "$16$", "$19$"],
    answerIndex: 2,
    explanation:
      "The elapsed span from the start of $1995$ to the start of $2025$ is exactly $30$ years. The tree grows $0.4 \\times 30 = 12$ meters in that time, so its height is $3.2 + 12 = 15.2$ meters, which rounds to $15$ meters. Choice $11$ uses a $20$-year span and $19$ uses a $40$-year span, each a one-decade slip. The most tempting distractor, $12$, is the growth alone, forgetting to add the tree's starting height.",
    source: SOURCE,
  },
  {
    // insert a value to force a mean-median relation
    id: "data-03",
    topic: "data-analysis",
    difficulty: "medium",
    stem: "Maya writes the numbers $2$, $5$, $7$, and $14$ on a whiteboard. She wants to write one more positive integer $N$ on the board so that the mean of the five numbers is exactly twice their median. What is the value of $N$?",
    choices: ["$7$", "$14$", "$28$", "$32$", "$42$"],
    answerIndex: 4,
    explanation:
      "The key insight is that writing $N$ can change which number is the median, so each position for $N$ must be tested for consistency. If $N \\geq 7$, the median of the five numbers is $7$, so the mean must be $14$, giving $2+5+7+14+N = 70$ and $N = 42$, which is consistent since $42 \\geq 7$. If $N \\leq 5$ the median is $5$, forcing $N = 22$, a contradiction; and if $5 \\leq N \\leq 7$ the median is $N$, giving $28 + N = 10N$, which has no integer solution. So $N = 42$ is the unique answer. The most tempting distractor, $32$, comes from assuming the median stays at its current value of $6$ after $N$ is added.",
    source: SOURCE,
  },
  {
    // minimum edits to force a target median
    id: "data-04",
    topic: "data-analysis",
    difficulty: "medium",
    stem: "The $16$ members of the Hillside Chess Club each took a rating quiz. Five members scored $60$ points, six scored $70$, three scored $80$, and two scored $90$. After a review, the coach may change some members' scores to any new values. What is the least number of scores the coach must change so that the median of the $16$ scores becomes $80$? (The median of $16$ scores is the average of the $8$th and $9$th scores when they are listed in increasing order.)",
    choices: ["$3$", "$4$", "$5$", "$6$", "$11$"],
    answerIndex: 1,
    explanation:
      "Only the order statistics around the middle matter: the $8$th and $9$th scores must average $80$. If the $9$th score were larger than $80$, then all eight scores in positions $9$ through $16$ would exceed $80$, but only two current scores do, requiring at least six changes; so the cheapest plan makes the $8$th and $9$th scores both equal $80$. That requires at least nine scores of $80$ or more, and only $3 + 2 = 5$ such scores exist now, so at least $4$ changes are needed \u2014 and changing four $70$s to $80$ works, since the ordered list then reads five $60$s, two $70$s, seven $80$s, two $90$s with median $80$. Choice $6$ changes all six $70$s and $11$ changes every score below $80$, both wasteful. The most tempting distractor, $3$, comes from requiring only eight scores of at least $80$, which leaves the $8$th score at $70$ and the median at $75$.",
    source: SOURCE,
  },
  {
    // best unit rate from a price-size table
    id: "data-05",
    topic: "data-analysis",
    difficulty: "medium",
    stem: "A farmers'-market stand sells granola in four bag sizes:\n- a $6$-ounce bag for $\\$2.70$\n- a $12$-ounce bag for $\\$5.04$\n- a $20$-ounce bag for $\\$7.60$\n- a $32$-ounce bag for $\\$12.80$\nSam wants the bag with the lowest cost per ounce. How many cents per ounce does Sam save by buying that bag instead of the largest bag?",
    choices: ["$0$", "$2$", "$4$", "$5$", "$7$"],
    answerIndex: 1,
    explanation:
      "Computing each unit price shows the biggest bag is not the best deal: the bags cost $270/6 = 45$, $504/12 = 42$, $760/20 = 38$, and $1280/32 = 40$ cents per ounce. The best value is the $20$-ounce bag at $38$ cents per ounce, while the largest ($32$-ounce) bag costs $40$ cents per ounce. So Sam saves $40 - 38 = 2$ cents per ounce. Choice $7$ compares the best bag with the smallest bag instead of the largest, and $5$ compares the smallest and largest bags. The most tempting distractor, $0$, comes from assuming the biggest package automatically has the lowest unit price.",
    source: SOURCE,
  },
  {
    // list simultaneously constrained by mean, unique mode, and median
    id: "data-06",
    topic: "data-analysis",
    difficulty: "hard",
    stem: "A list of eight positive integers satisfies all three of the following conditions:\n- (I) The mean of the list is $12$.\n- (II) The median of the list is $10$.\n- (III) The unique mode of the list is $7$.\n(The median of $8$ numbers is the average of the $4$th and $5$th numbers when the list is written in increasing order, and the unique mode is the one value that appears more times than every other value.) What is the greatest possible value of the largest number in the list?",
    choices: ["$33$", "$36$", "$37$", "$39$", "$41$"],
    answerIndex: 2,
    explanation:
      "To maximize the largest entry, minimize the sum of the other seven while re-checking every constraint: the total is $8 \\times 12 = 96$, and the median forces the $4$th and $5$th entries to sum to $20$. Since $7$ must appear more often than any other value, taking two $7$s means every other value appears once; placing the $7$s in positions $3$ and $4$ forces the $5$th entry to be $13$, and the cheapest completion is $1, 2, 7, 7, 13, 14, 15$, summing to $59$. The largest entry is then $96 - 59 = 37$, and the list $1, 2, 7, 7, 13, 14, 15, 37$ satisfies all three conditions. Using three $7$s (choice $33$) or putting the $7$s in positions $2$ and $3$ (choice $36$) satisfies the conditions but is not maximal, while $41$ drops the mode condition entirely. The most tempting distractor, $39$, comes from shrinking the small entries to $1, 1, 7, 7, 13, 14, 14$, which silently breaks the uniqueness of the mode.",
    source: SOURCE,
  },
  // ── Logic & Spatial Reasoning ──
  {
    // deduce a missing row of a win-loss table
    id: "logic-01",
    topic: "logic",
    difficulty: "easy",
    stem: "Four teams \u2014 the Foxes, the Owls, the Bears, and the Cranes \u2014 play a round-robin tournament in which each team plays every other team exactly once, and every game has exactly one winner and one loser. All of the games have been played, and the scoreboard shows:\n- The Owls won $2$ games and lost $1$.\n- The Bears won $1$ game and lost $2$.\n- The Cranes won $0$ games and lost $3$.\nThe Foxes' row of the scoreboard is smudged and unreadable. How many games did the Foxes win?",
    choices: ["$0$", "$1$", "$2$", "$3$", "$4$"],
    answerIndex: 3,
    explanation:
      "Each game produces exactly one win and one loss, so the total number of wins across all four teams equals the total number of games, $\\binom{4}{2} = 6$. The Owls, Bears, and Cranes account for $2 + 1 + 0 = 3$ wins, so the Foxes won $6 - 3 = 3$ games. This is consistent: the Foxes went $3$-$0$, and the total losses are $1 + 2 + 3 + 0 = 6$ as well. The tempting distractor $2$ comes from copying the Owls' record instead of using the wins-equal-games invariant.",
    source: SOURCE,
  },
  {
    // ordering deduction from pairwise clues
    id: "logic-02",
    topic: "logic",
    difficulty: "easy",
    stem: "Five friends \u2014 Leo, Priya, Sam, Jordan, and Amara \u2014 line up to compare heights, and no two of them are the same height. They find that:\n- Leo is taller than Priya.\n- Priya is taller than Sam.\n- Jordan is taller than Amara, and Amara is taller than Leo.\nWho is the second tallest of the five friends?",
    choices: ["Leo", "Priya", "Sam", "Jordan", "Amara"],
    answerIndex: 4,
    explanation:
      "The third clue gives Jordan taller than Amara, who is taller than Leo, and the first two clues give Leo taller than Priya, who is taller than Sam. Chaining these yields the single consistent order Jordan, Amara, Leo, Priya, Sam from tallest to shortest. The second tallest is therefore Amara. The tempting distractor Jordan is the tallest friend \u2014 the right ordering with the wrong position read off.",
    source: SOURCE,
  },
  {
    // cuts-versus-pieces fencepost invariant
    id: "logic-03",
    topic: "logic",
    difficulty: "medium",
    stem: "Amara is making gift ties for a craft fair. She has $3$ ribbons, each $120$ centimeters long, and she cuts every ribbon into $20$-centimeter ties, using all of each ribbon with nothing left over. She makes one cut at a time and never stacks or folds the ribbons. Each cut takes $12$ seconds. How many seconds does Amara spend making cuts?",
    choices: ["$168$", "$180$", "$192$", "$204$", "$216$"],
    answerIndex: 1,
    explanation:
      "The key insight is the fencepost fact: cutting one ribbon into $n$ pieces requires only $n - 1$ cuts, because the last piece falls free. Each $120$-centimeter ribbon yields $120 \\div 20 = 6$ ties and therefore needs $5$ cuts, so the three ribbons need $3 \\times 5 = 15$ cuts in all. At $12$ seconds per cut, Amara spends $15 \\times 12 = 180$ seconds. The tempting distractor $216$ counts $6$ cuts per ribbon, one per tie, forgetting that the final tie needs no cut of its own; $204$ comes from treating the three ribbons as one continuous strip needing $18 - 1 = 17$ cuts.",
    source: SOURCE,
  },
  {
    // minimum overlap of two majority subsets
    id: "logic-04",
    topic: "logic",
    difficulty: "medium",
    stem: "Ms. Alvarez surveys her class of $30$ students. Exactly $18$ of the students walked to school today, and exactly $25$ of the students brought a packed lunch. What is the least possible number of students in the class who both walked to school and brought a packed lunch?",
    choices: ["$0$", "$5$", "$7$", "$12$", "$13$"],
    answerIndex: 4,
    explanation:
      "Since $18 + 25 = 43$ counts $43$ student-properties among only $30$ students, at least $43 - 30 = 13$ students must be counted twice \u2014 that is, at least $13$ did both. This bound is achievable: $13$ students do both, $5$ only walk, $12$ only bring lunch, and $0$ do neither, giving $30$ students with $18$ walkers and $25$ packed lunches. So the least possible overlap is $13$. The tempting distractor $0$ assumes the two groups could be disjoint, which is impossible because $43 > 30$.",
    source: SOURCE,
  },
  {
    // board-operation invariant determines feasible final values
    id: "logic-05",
    topic: "logic",
    difficulty: "medium",
    stem: "The numbers $1, 2, 3, 4, 5, 6, 7, 8$ are written on a whiteboard. On each move, Sam chooses two numbers on the board, erases them, and writes a single new number in their place: either their sum or their positive difference. He keeps making moves until only one number remains on the board. Which of the following could be the number that remains?",
    choices: ["$4$", "$5$", "$15$", "$21$", "$35$"],
    answerIndex: 0,
    explanation:
      'The key insight is an invariant: replacing $a$ and $b$ by $a + b$ keeps the total of the board the same, while replacing them by their positive difference lowers the total by $2 \\cdot \\min(a, b)$ \u2014 either way, the total\'s parity never changes. The starting total is $1 + 2 + \\cdots + 8 = 36$, which is even, so the final number must be even, and $4$ is the only even choice. It really is reachable: $2 + 3 = 5$, $5 + 4 = 9$, $9 + 5 = 14$, $14 + 6 = 20$, then $20 - 8 = 12$, $12 - 7 = 5$, and $5 - 1 = 4$. The tempting distractor $35$ plays on the idea of "the sum minus a little," but every difference move lowers the total by an even amount, so $35$ can never remain.',
    source: SOURCE,
  },
  {
    // pursuit simulation with a conditional boarding/waiting rule
    id: "logic-06",
    topic: "logic",
    difficulty: "hard",
    stem: "Maya hikes from checkpoint $0$ to checkpoint $8$ along a straight trail, where the $9$ checkpoints are numbered in order and equally spaced. She leaves checkpoint $0$ at time $0$ and walks at a steady pace, taking $5$ minutes for each stretch between consecutive checkpoints. A shuttle cart leaves checkpoint $0$ along the same trail exactly $9$ minutes after Maya, takes $1$ minute for each stretch, and waits for exactly $2$ minutes at each checkpoint it reaches. Each time Maya arrives at a checkpoint, if the shuttle is waiting there at that moment she boards it and rides the rest of the way to checkpoint $8$; otherwise she continues walking without waiting. The shuttle never stops between checkpoints, and Maya cannot board it between checkpoints. How many minutes after time $0$ does Maya arrive at checkpoint $8$?",
    choices: ["$22$", "$29$", "$31$", "$33$", "$40$"],
    answerIndex: 2,
    explanation:
      "Track both travelers minute by minute: the shuttle leaves checkpoint $0$ at time $9$ and, with $1$-minute stretches and $2$-minute waits, is at checkpoint $1$ from time $10$ to $12$, checkpoint $2$ from $13$ to $15$, checkpoint $3$ from $16$ to $18$, and checkpoint $4$ from $19$ to $21$. Maya reaches checkpoints $1$, $2$, and $3$ at times $5$, $10$, and $15$, and each time the shuttle has not yet arrived there, so she keeps walking. Between checkpoints $3$ and $4$ the shuttle overtakes her, and when she reaches checkpoint $4$ at time $20$ it is still waiting, so she boards. The shuttle departs checkpoint $4$ at time $21$, covers the $4$ remaining stretches in $4$ minutes with $2$-minute waits at checkpoints $5$, $6$, and $7$, and arrives at checkpoint $8$ at time $21 + 4 + 6 = 31$. The tempting distractor $40$ assumes that once the shuttle passes Maya between checkpoints she can never board it, so she walks the entire way.",
    source: SOURCE,
  },
];
