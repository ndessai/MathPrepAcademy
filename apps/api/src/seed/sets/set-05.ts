import type { Question } from "@mathprep/core";

const SOURCE = "MathPrep original (AMC 8 style)";

export const SET_05_QUESTIONS: Question[] = [
  {
    // at-least-one probability via complement
    id: "s05-q01",
    topic: "probability",
    difficulty: "easy",
    stem: "Maya is playing a game with a fair spinner that has $5$ equal sections numbered $1$ through $5$. She spins it twice and multiplies the two numbers she gets. What is the probability that the product is even?",
    choices: [
      "$\\frac{4}{25}$",
      "$\\frac{9}{25}$",
      "$\\frac{2}{5}$",
      "$\\frac{3}{5}$",
      "$\\frac{16}{25}$",
    ],
    answerIndex: 4,
    explanation:
      "The product is even unless both spins land on odd numbers, so use the complement. Each spin lands on an odd number ($1$, $3$, or $5$) with probability $\\frac{3}{5}$, so both spins are odd with probability $\\frac{3}{5} \\cdot \\frac{3}{5} = \\frac{9}{25}$. Therefore the probability of an even product is $1 - \\frac{9}{25} = \\frac{16}{25}$. Choice $\\frac{9}{25}$ is the probability the product is odd \u2014 it comes from forgetting to subtract the complement from $1$.",
    source: SOURCE,
  },
  {
    // off-by-one count of annual events to date an age
    id: "s05-q02",
    topic: "algebra",
    difficulty: "easy",
    stem: "The first annual Riverbend Kite Festival was held in $2010$. Leo was $9$ years old when he attended the twelfth annual festival. In what year was Leo born?",
    choices: ["$2010$", "$2011$", "$2012$", "$2013$", "$2019$"],
    answerIndex: 2,
    explanation:
      "Because the first festival was in $2010$, the twelfth annual festival happened $11$ years later, in $2010 + 11 = 2021$. Leo was $9$ that year, so he was born in $2021 - 9 = 2012$. The most tempting wrong answer, $2013$, comes from placing the twelfth festival in $2010 + 12 = 2022$ instead of counting $11$ years after the first.",
    source: SOURCE,
  },
  {
    // heads-and-legs two-variable count
    id: "s05-q03",
    topic: "algebra",
    difficulty: "easy",
    stem: "Amara is counting vehicles at the community fair. She sees $15$ vehicles in the parking area, each of which is either a bicycle with $2$ wheels or a go-kart with $4$ wheels, and she counts $42$ wheels in all. How many of the vehicles are go-karts?",
    choices: ["$3$", "$6$", "$9$", "$12$", "$15$"],
    answerIndex: 1,
    explanation:
      "Give every vehicle $2$ wheels first: $15$ vehicles account for $2 \\times 15 = 30$ wheels, leaving $42 - 30 = 12$ extra wheels. Each go-kart has exactly $2$ wheels more than a bicycle, so there are $12 \\div 2 = 6$ go-karts (and $9$ bicycles). Choice $9$ is the number of bicycles \u2014 the right method reporting the wrong vehicle.",
    source: SOURCE,
  },
  {
    // linear extrapolation from a constant yearly rate
    id: "s05-q04",
    topic: "arithmetic",
    difficulty: "easy",
    stem: "Ms. Diaz monitors water quality at Lake Verna. In $2000$ the phosphate concentration was $62$ parts per million, and it has been falling at a steady rate of $0.8$ parts per million per year. If the rate stays the same, what will the concentration be, in parts per million, in the year $2050$?",
    choices: ["$22$", "$30$", "$40$", "$54$", "$62$"],
    answerIndex: 0,
    explanation:
      "From $2000$ to $2050$ is $50$ years, so the total decrease is $50 \\times 0.8 = 40$ parts per million. Subtracting from the starting level gives $62 - 40 = 22$ parts per million. Choice $40$ is the size of the decrease itself, reported instead of the final concentration.",
    source: SOURCE,
  },
  {
    // weighted average of two group means
    id: "s05-q05",
    topic: "data-analysis",
    difficulty: "easy",
    stem: "Ms. Okafor teaches two math classes. Her morning class of $10$ students averaged $82$ points on a test, and her afternoon class of $15$ students averaged $92$ points on the same test. What is the average score of all $25$ students?",
    choices: ["$82$", "$86$", "$87$", "$88$", "$92$"],
    answerIndex: 3,
    explanation:
      "Combine totals, not averages. The morning class scored $10 \\times 82 = 820$ points in all and the afternoon class scored $15 \\times 92 = 1380$ points, for $820 + 1380 = 2200$ points among $25$ students. The overall average is $2200 \\div 25 = 88$. Choice $87$ is the unweighted average of $82$ and $92$, which ignores the different class sizes.",
    source: SOURCE,
  },
  {
    // sum selected cells of a two-way table
    id: "s05-q06",
    topic: "data-analysis",
    difficulty: "easy",
    stem: "The librarian at Riverbend Library recorded last week's checkouts by genre and format:\n- Mystery: $34$ print, $18$ digital\n- Science: $27$ print, $25$ digital\n- Fantasy: $41$ print, $22$ digital\n- History: $16$ print, $30$ digital\nMystery and Fantasy count as fiction. How many fiction books were checked out in print format?",
    choices: ["$40$", "$43$", "$75$", "$115$", "$118$"],
    answerIndex: 2,
    explanation:
      "Fiction means the Mystery and Fantasy lines, and the question asks for the print counts only. Adding those two print counts gives $34 + 41 = 75$. Choice $40$ comes from reading the digital counts ($18 + 22$) instead of the print counts.",
    source: SOURCE,
  },
  {
    // evaluate a newly defined operation
    id: "s05-q07",
    topic: "algebra",
    difficulty: "easy",
    stem: "For any two numbers $a$ and $b$, define the operation $a \\diamond b = 2a + 3b$. What is the value of $4 \\diamond 5$?",
    choices: ["$9$", "$14$", "$20$", "$22$", "$23$"],
    answerIndex: 4,
    explanation:
      "Substitute $a = 4$ and $b = 5$ directly into the definition. This gives $4 \\diamond 5 = 2 \\cdot 4 + 3 \\cdot 5 = 8 + 15 = 23$. Choice $22$ comes from swapping the coefficients and computing $3 \\cdot 4 + 2 \\cdot 5 = 22$.",
    source: SOURCE,
  },
  {
    // successive fractional reductions of a whole
    id: "s05-q08",
    topic: "arithmetic",
    difficulty: "easy",
    stem: "Sam's rain barrel is full on Sunday night. On Monday he uses $\\frac{1}{3}$ of the water, on Tuesday he uses $\\frac{1}{4}$ of what remains, and on Wednesday he uses $\\frac{2}{5}$ of what then remains. What fraction of the barrel's water is left after Wednesday?",
    choices: [
      "$\\frac{3}{10}$",
      "$\\frac{2}{5}$",
      "$\\frac{1}{2}$",
      "$\\frac{2}{3}$",
      "$\\frac{7}{10}$",
    ],
    answerIndex: 0,
    explanation:
      "Track the fraction remaining after each day by multiplying. Monday leaves $\\frac{2}{3}$ of the water, Tuesday leaves $\\frac{3}{4}$ of that, and Wednesday leaves $\\frac{3}{5}$ of that, so the barrel holds $\\frac{2}{3} \\cdot \\frac{3}{4} \\cdot \\frac{3}{5} = \\frac{18}{60} = \\frac{3}{10}$ of its water. Choice $\\frac{7}{10}$ is the fraction of the water that was used, not the fraction that is left.",
    source: SOURCE,
  },
  {
    // compound percent changes multiply, not add
    id: "s05-q09",
    topic: "arithmetic",
    difficulty: "easy",
    stem: "Jordan is resizing a rectangular poster design on a computer. The width is increased by $30\\%$ and the height is decreased by $30\\%$. The new poster's area is what percent of the original poster's area?",
    choices: ["$70$", "$91$", "$100$", "$109$", "$130$"],
    answerIndex: 1,
    explanation:
      "Successive percent changes multiply rather than add. The new area is $1.30 \\times 0.70 = 0.91$ times the old area, which is $91\\%$ of it. Choice $100$ comes from assuming the $+30\\%$ and $-30\\%$ cancel out, but because the changes multiply, the area actually shrinks by $9\\%$.",
    source: SOURCE,
  },
  {
    // nth term of an arithmetic sequence
    id: "s05-q10",
    topic: "algebra",
    difficulty: "easy",
    stem: "The auditorium at Brookfield School has $14$ seats in the first row, and each row after the first has $5$ more seats than the row directly in front of it. How many seats are in the eleventh row?",
    choices: ["$50$", "$55$", "$59$", "$64$", "$69$"],
    answerIndex: 3,
    explanation:
      "Row $11$ is $10$ rows beyond the first, so it has gained $10 \\times 5 = 50$ seats over the first row's $14$. That gives $14 + 50 = 64$ seats. Choice $69$ comes from counting $11$ jumps of $5$ instead of $10$ \u2014 the classic fencepost error.",
    source: SOURCE,
  },
  {
    // count balanced up/down sequences never dipping below start
    id: "s05-q11",
    topic: "counting",
    difficulty: "medium",
    stem: "Milo the frog sits on the bottom landing of a staircase and makes exactly $6$ hops. Each hop moves him either up one step or down one step. Milo never goes below the bottom landing, and after the $6$ hops he is back on the landing where he started. In how many different orders can Milo make his $6$ hops?",
    choices: ["$5$", "$6$", "$8$", "$10$", "$20$"],
    answerIndex: 0,
    explanation:
      "Since Milo ends where he started, he makes exactly $3$ up-hops and $3$ down-hops, and to avoid dipping below the landing every beginning portion of the sequence must contain at least as many ups as downs. Writing U for up and D for down, checking the arrangements of three U's and three D's shows exactly five never dip below the start: UUUDDD, UUDUDD, UUDDUD, UDUUDD, and UDUDUD. (These are the sequences counted by the Catalan number $C_3 = 5$.) The tempting answer $20$ counts all $\\binom{6}{3}$ arrangements of three U's and three D's and forgets the rule that Milo can never go below his starting landing.",
    source: SOURCE,
  },
  {
    // count multiples of an LCM in a range
    id: "s05-q12",
    topic: "number-theory",
    difficulty: "medium",
    stem: "Leo lists every integer from $500$ to $1{,}000$. How many numbers in his list are divisible by $8$, by $12$, and by $20$?",
    choices: ["$0$", "$1$", "$2$", "$3$", "$4$"],
    answerIndex: 4,
    explanation:
      "A number divisible by all of $8$, $12$, and $20$ must be a multiple of their least common multiple, and since $8 = 2^3$, $12 = 2^2 \\cdot 3$, and $20 = 2^2 \\cdot 5$, that least common multiple is $2^3 \\cdot 3 \\cdot 5 = 120$. The multiples of $120$ between $500$ and $1{,}000$ are $600$, $720$, $840$, and $960$, so $4$ numbers qualify. The tempting answer $2$ comes from miscomputing the least common multiple as $240$, which wrongly drops $600$ and $840$ from the count.",
    source: SOURCE,
  },
  {
    // complement rule: probabilities sum to one
    id: "s05-q13",
    topic: "probability",
    difficulty: "medium",
    stem: "At the school fair, Jordan spins a wheel that always lands on exactly one of three colors: red, blue, or gold. The probability that the wheel lands on red is $\\frac{2}{5}$, and the probability that it lands on blue is $\\frac{1}{4}$. What is the probability that the wheel lands on gold?",
    choices: [
      "$\\frac{1}{10}$",
      "$\\frac{7}{20}$",
      "$\\frac{3}{5}$",
      "$\\frac{13}{20}$",
      "$\\frac{3}{4}$",
    ],
    answerIndex: 1,
    explanation:
      "The wheel must land on exactly one of the three colors, so the three probabilities add up to $1$. Therefore the probability of gold is $1 - \\frac{2}{5} - \\frac{1}{4} = \\frac{20}{20} - \\frac{8}{20} - \\frac{5}{20} = \\frac{7}{20}$. The tempting answer $\\frac{13}{20}$ is the probability of landing on red or blue \u2014 it computes the sum of the two given probabilities but forgets to subtract that sum from $1$.",
    source: SOURCE,
  },
  {
    // permutations with a restricted position
    id: "s05-q14",
    topic: "counting",
    difficulty: "medium",
    stem: "Five students are riding to a math competition in a van with $5$ seats: one driver's seat and $4$ passenger seats. Exactly $2$ of the students are licensed to drive, and one of those two must sit in the driver's seat. In how many different ways can the $5$ students be assigned to the $5$ seats?",
    choices: ["$12$", "$24$", "$48$", "$120$", "$240$"],
    answerIndex: 2,
    explanation:
      "Fill the most restricted seat first: the driver's seat can be taken by either of the $2$ licensed students. The remaining $4$ students can then be arranged in the $4$ passenger seats in $4! = 24$ ways, so the total is $2 \\times 24 = 48$. The tempting answer $120 = 5!$ ignores the driver restriction entirely, while $24$ forgets that either of the two licensed students could be the driver.",
    source: SOURCE,
  },
  {
    // distribution of remainders of an arithmetic progression
    id: "s05-q15",
    topic: "number-theory",
    difficulty: "medium",
    stem: "Amara writes the first $30$ positive multiples of $4$ in a list: $4, 8, 12, \\ldots, 120$. How many numbers in her list leave a remainder of $1$ when divided by $7$?",
    choices: ["$1$", "$2$", "$3$", "$4$", "$5$"],
    answerIndex: 4,
    explanation:
      "The $k$th number in the list is $4k$, and $4k$ leaves remainder $1$ when divided by $7$ exactly when $k$ leaves remainder $2$, since $4 \\cdot 2 = 8$ leaves remainder $1$; the remainders of $4k$ repeat in a cycle of length $7$. The qualifying values in $k = 1, 2, \\ldots, 30$ are $k = 2, 9, 16, 23, 30$, giving the list numbers $8, 36, 64, 92, 120$ \u2014 each is $1$ more than a multiple of $7$. So $5$ numbers in the list work. The tempting answer $4$ comes from computing $\\lfloor 30/7 \\rfloor = 4$ full cycles and missing that the leftover partial cycle at the end of the list contributes one more qualifying value, $k = 30$.",
    source: SOURCE,
  },
  {
    // pad prime exponents to reach a perfect square/cube
    id: "s05-q16",
    topic: "number-theory",
    difficulty: "medium",
    stem: "Maya is studying the number $540$. She finds the smallest positive integer $a$ for which $540a$ is a perfect square, and the smallest positive integer $b$ for which $540b$ is a perfect cube. What is the value of $a + b$?",
    choices: ["$15$", "$25$", "$50$", "$65$", "$90$"],
    answerIndex: 3,
    explanation:
      "Factor $540 = 2^2 \\cdot 3^3 \\cdot 5$. For $540a$ to be a perfect square every prime exponent must be even, so $a$ must supply one more $3$ and one more $5$: $a = 15$, and indeed $540 \\cdot 15 = 8100 = 90^2$. For $540b$ to be a perfect cube every exponent must be a multiple of $3$, so $b$ must supply one more $2$ and two more $5$s: $b = 2 \\cdot 25 = 50$, and indeed $540 \\cdot 50 = 27{,}000 = 30^3$. Therefore $a + b = 15 + 50 = 65$. The tempting answer $25$ comes from padding the exponent of $5$ only up to $2$ instead of $3$ when building the cube, which gives $b = 10$.",
    source: SOURCE,
  },
  {
    // inscribed rectangle in a semicircle via the Pythagorean radius
    id: "s05-q17",
    topic: "geometry",
    difficulty: "medium",
    stem: "A rectangular stage prop is inscribed in a semicircular archway. The rectangle's base is $8$ feet long and lies along the diameter of the semicircle, centered at the semicircle's center, and the rectangle is $3$ feet tall, so its two top corners lie exactly on the semicircle. What is the area, in square feet, of the semicircle?",
    choices: ["$8\\pi$", "$\\frac{25\\pi}{2}$", "$25\\pi$", "$\\frac{73\\pi}{2}$", "$50\\pi$"],
    answerIndex: 1,
    explanation:
      "Draw the radius from the center of the semicircle to a top corner of the rectangle: it is the hypotenuse of a right triangle whose legs are half the base, $4$ feet, and the full height, $3$ feet. So $r^2 = 4^2 + 3^2 = 25$, and the semicircle's area is $\\frac{1}{2}\\pi r^2 = \\frac{25\\pi}{2}$ square feet. The tempting answer $25\\pi$ is the area of the entire circle of radius $5$ \u2014 it forgets to take half for the semicircle.",
    source: SOURCE,
  },
  {
    // optimize a value under lcm constraints
    id: "s05-q18",
    topic: "number-theory",
    difficulty: "medium",
    stem: "Three positive integers $a$, $b$, and $c$ are written on a whiteboard. They satisfy $\\text{lcm}(a, b) = 20$ and $\\text{lcm}(b, c) = 28$. What is the least possible value of $\\text{lcm}(a, c)$?",
    choices: ["$20$", "$28$", "$35$", "$70$", "$140$"],
    answerIndex: 2,
    explanation:
      "The key is to see which prime factors are forced into $a$ and $c$. Since $b$ divides $\\text{lcm}(b, c) = 28$ and $5 \\nmid 28$, the factor $5$ in $\\text{lcm}(a, b) = 20$ must come from $a$; likewise $7 \\nmid 20$, so the factor $7$ in $28$ must come from $c$. Therefore $\\text{lcm}(a, c)$ is a multiple of $5 \\cdot 7 = 35$, and $35$ is achievable with $a = 5$, $b = 4$, $c = 7$, since $\\text{lcm}(5, 4) = 20$ and $\\text{lcm}(4, 7) = 28$. The tempting answer $140 = \\text{lcm}(20, 28)$ assumes $\\text{lcm}(a, c)$ must absorb every factor of both given values, but the factor $4$ can live entirely inside $b$.",
    source: SOURCE,
  },
  {
    // two-set inclusion-exclusion
    id: "s05-q19",
    topic: "counting",
    difficulty: "medium",
    stem: "Ms. Chen surveys her class of $32$ students about what they ride to school. She finds that $24$ students own a bicycle, $19$ students own a skateboard, and $4$ students own neither. How many students own both a bicycle and a skateboard?",
    choices: ["$15$", "$19$", "$24$", "$28$", "$43$"],
    answerIndex: 0,
    explanation:
      "First remove the students who own neither: $32 - 4 = 28$ students own at least one of the two items. By inclusion-exclusion, the bicycle and skateboard counts together total $24 + 19 = 43$, which counts the both-owners twice, so the number owning both is $43 - 28 = 15$. The tempting answer $28$ is the number of students owning at least one item \u2014 it stops one step early, before the final inclusion-exclusion subtraction.",
    source: SOURCE,
  },
  {
    // solve for an unknown coordinate from a triangle area
    id: "s05-q20",
    topic: "geometry",
    difficulty: "medium",
    stem: "Triangle $ABC$ has vertices $A(1, 2)$, $B(9, 2)$, and $C(4, k)$, where $k > 2$. The area of triangle $ABC$ is $24$ square units. What is the value of $k$?",
    choices: ["$4$", "$5$", "$6$", "$8$", "$14$"],
    answerIndex: 3,
    explanation:
      "Since $A$ and $B$ have the same $y$-coordinate, segment $AB$ is a horizontal base of length $9 - 1 = 8$, and the triangle's height is the vertical distance from $C$ to the line $y = 2$, which is $k - 2$ (the $x$-coordinate of $C$ does not affect the area). Setting $\\frac{1}{2} \\cdot 8 \\cdot (k - 2) = 24$ gives $k - 2 = 6$, so $k = 8$. The tempting answer $6$ is the height of the triangle \u2014 it forgets to add back the $y$-coordinate of the base line.",
    source: SOURCE,
  },
  {
    // unroll a spiral by conserving cross-sectional area
    id: "s05-q21",
    topic: "geometry",
    difficulty: "hard",
    stem: "Priya is unrolling a roll of decorative craft tape to find its length. The tape is wound tightly in a spiral around a circular cardboard core with no gaps between layers. The core has diameter $4$ centimeters, the full roll has diameter $8$ centimeters, and the tape is $0.2$ millimeters thick. When fully unrolled, the tape forms one long flat strip of the same thickness. Which of the following is closest to the length, in meters, of the unrolled tape? (You may use $3.14$ as an approximation for $\\pi$.)",
    choices: ["$6$", "$19$", "$25$", "$38$", "$75$"],
    answerIndex: 1,
    explanation:
      "The key insight is that unrolling the tape preserves its cross-sectional area: the wound tape fills the annulus between the core and the outer edge, with area $\\pi(4^2 - 2^2) = 12\\pi \\approx 37.7$ square centimeters. The tape is $0.2$ millimeters $= 0.02$ centimeters thick, so its length is $\\frac{12\\pi}{0.02} = 600\\pi \\approx 1885$ centimeters, or about $18.8$ meters, which is closest to $19$. As a check, the roll has $(4 - 2)/0.02 = 100$ layers with average circumference $2\\pi \\cdot 3 \\approx 18.85$ centimeters, giving the same total. Choice $25$ comes from forgetting to subtract the cardboard core and using the full disk area $\\pi \\cdot 4^2$ instead of the annulus.",
    source: SOURCE,
  },
  {
    // area ratio by subtracting corner triangles from a square
    id: "s05-q22",
    topic: "geometry",
    difficulty: "hard",
    stem: "Square $ABCD$ has vertices $A(0,0)$, $B(6,0)$, $C(6,6)$, and $D(0,6)$. Point $E$ lies on side $BC$ with $BE = 2$, and point $F$ lies on side $CD$ with $DF = 4$. What fraction of the area of square $ABCD$ is the area of $\\triangle AEF$?",
    choices: [
      "$\\frac{7}{18}$",
      "$\\frac{1}{2}$",
      "$\\frac{11}{18}$",
      "$\\frac{2}{3}$",
      "$\\frac{13}{18}$",
    ],
    answerIndex: 0,
    explanation:
      "The key insight is that $\\triangle AEF$ is what remains when three right triangles are cut from the corners of the square. With $E(6,2)$ and $F(4,6)$, the corner triangles are $\\triangle ABE$ with area $\\frac{1}{2} \\cdot 6 \\cdot 2 = 6$, $\\triangle ECF$ with area $\\frac{1}{2} \\cdot 4 \\cdot 2 = 4$ (since $CE = 4$ and $CF = 2$), and $\\triangle FDA$ with area $\\frac{1}{2} \\cdot 4 \\cdot 6 = 12$. So $[\\triangle AEF] = 36 - 6 - 4 - 12 = 14$, and the fraction is $\\frac{14}{36} = \\frac{7}{18}$. Choice $\\frac{11}{18}$ is the complement \u2014 the combined share of the three corner triangles rather than the share belonging to $\\triangle AEF$.",
    source: SOURCE,
  },
  {
    // step-by-step simulation of two movers with a decision rule
    id: "s05-q23",
    topic: "logic",
    difficulty: "hard",
    stem: "A safari-park tram leaves the entrance gate at exactly $10{:}00$ a.m. and drives along a straight trail past viewing platforms numbered $1, 2, 3, \\ldots$ in order. The tram takes $1$ minute to drive from the gate to platform $1$ and $1$ minute between consecutive platforms, and it waits exactly $2$ minutes at every platform it reaches. Sam is standing at platform $4$ and begins walking along the trail toward the higher-numbered platforms at $10{:}01$ a.m., taking $5$ minutes between consecutive platforms. Sam never waits: whenever he reaches a platform where the tram is not currently stopped, he immediately keeps walking. Passengers can board only while the tram is stopped at a platform. At which platform does Sam board the tram?",
    choices: ["$6$", "$7$", "$8$", "$9$", "$10$"],
    answerIndex: 3,
    explanation:
      "The key is a minute-by-minute schedule: the tram is stopped at platform $n$ from $3n - 2$ to $3n$ minutes after $10{:}00$, while Sam reaches platform $n$ at $5n - 19$ minutes. Checking his arrivals: platform $5$ at minute $6$, platform $6$ at $11$, platform $7$ at $16$, and platform $8$ at $21$ \u2014 each time the tram has not yet arrived there, so he keeps walking (at platform $8$ he leaves at $10{:}21$ and the tram pulls in at $10{:}22$). The tram then passes Sam between platforms $8$ and $9$, arriving at platform $9$ at $10{:}25$ and waiting until $10{:}27$. Sam reaches platform $9$ at $10{:}26$, finds the tram stopped there, and boards. Choice $8$ comes from letting Sam wait the extra minute at platform $8$, which his never-wait rule forbids.",
    source: SOURCE,
  },
  {
    // count binomial outcomes meeting a threshold
    id: "s05-q24",
    topic: "probability",
    difficulty: "hard",
    stem: "At a school fair, Jordan plays a token game. A token starts at $0$ on a number line, and Jordan flips a fair coin $6$ times: on each heads the token moves $1$ unit to the right, and on each tails it moves $1$ unit to the left. Jordan wins a prize if the token finishes at $2$ or greater. What is the probability that Jordan wins a prize?",
    choices: [
      "$\\frac{7}{64}$",
      "$\\frac{15}{64}$",
      "$\\frac{11}{32}$",
      "$\\frac{21}{32}$",
      "$\\frac{11}{16}$",
    ],
    answerIndex: 2,
    explanation:
      "The key insight is to convert the finishing position into a head count: with $H$ heads and $6 - H$ tails, the token finishes at $H - (6 - H) = 2H - 6$, so finishing at $2$ or greater means $H \\ge 4$. The number of favorable flip sequences is $\\binom{6}{4} + \\binom{6}{5} + \\binom{6}{6} = 15 + 6 + 1 = 22$ out of $2^6 = 64$ equally likely sequences. The probability is therefore $\\frac{22}{64} = \\frac{11}{32}$. Choice $\\frac{15}{64}$ counts only the sequences with exactly $4$ heads, where the token finishes exactly at $2$, forgetting that it can also finish at $4$ or $6$.",
    source: SOURCE,
  },
  {
    // unknown trapezoid side via dropped altitudes and area
    id: "s05-q25",
    topic: "geometry",
    difficulty: "hard",
    stem: "In trapezoid $ABCD$, sides $AB$ and $CD$ are parallel with $AB < CD$, and the angles at $C$ and $D$ are both acute. The legs have lengths $DA = 13$ and $BC = 20$, the distance between the parallel sides is $12$, and the area of the trapezoid is $270$. What is the length of side $CD$?",
    choices: ["$12$", "$21$", "$24$", "$28$", "$33$"],
    answerIndex: 4,
    explanation:
      "The key insight is to drop altitudes from $A$ and $B$ to $CD$, splitting each leg into a right triangle of height $12$: leg $DA = 13$ gives a horizontal piece $\\sqrt{13^2 - 12^2} = 5$, and leg $BC = 20$ gives $\\sqrt{20^2 - 12^2} = 16$. Because the angles at $C$ and $D$ are acute, both altitude feet land inside $CD$, so $CD = AB + 5 + 16 = AB + 21$. The area formula gives $\\frac{12(AB + CD)}{2} = 270$, so $AB + CD = 45$; combined with $CD = AB + 21$, this yields $AB = 12$ and $CD = 33$. Choice $12$ is the length of the shorter base $AB$ \u2014 the solved variable rather than the side the question asks for.",
    source: SOURCE,
  },
];
