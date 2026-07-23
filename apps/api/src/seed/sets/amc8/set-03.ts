import type { Question } from "@mathprep/core";

const SOURCE = "MathPrep original (AMC 8 style)";

export const SET_03_QUESTIONS: Question[] = [
  {
    // compare expressions mixing addition and multiplication
    id: "s03-q01",
    topic: "arithmetic",
    difficulty: "easy",
    stem: "Which of the following expressions has the largest value?",
    choices: [
      "$3+0+1+8$",
      "$3\\times 0+1+8$",
      "$3+0\\times 1+8$",
      "$3+0+1\\times 8$",
      "$3\\times 0\\times 1\\times 8$",
    ],
    answerIndex: 0,
    explanation:
      "Any product that includes a factor of $0$ collapses to $0$, and multiplying by $1$ gains nothing, so multiplication only hurts here. Evaluating each choice gives $3+0+1+8 = 12$, $3\\times 0+1+8 = 9$, $3+0\\times 1+8 = 11$, $3+0+1\\times 8 = 11$, and $3\\times 0\\times 1\\times 8 = 0$. The all-addition expression keeps the full value of every number, so the answer is $3+0+1+8 = 12$. The tempting choice $3+0+1\\times 8$ comes from assuming multiplication always makes things bigger, but $1\\times 8$ just throws away the $+1$, leaving only $11$.",
    source: SOURCE,
  },
  {
    // sum-and-difference system reduced to a ratio
    id: "s03-q02",
    topic: "algebra",
    difficulty: "easy",
    stem: "The Riverbend Middle School choir has $36$ singers, and every singer is either an alto or a soprano. There are $6$ more altos than sopranos. What is the ratio of altos to sopranos in the choir?",
    choices: ["$5 : 7$", "$4 : 3$", "$7 : 5$", "$3 : 2$", "$2 : 1$"],
    answerIndex: 2,
    explanation:
      "The key is to split the difference: if $s$ is the number of sopranos, then there are $s + 6$ altos, so $s + (s + 6) = 36$ gives $s = 15$ sopranos and $21$ altos. As a check, $21 + 15 = 36$ and $21 - 15 = 6$. The ratio of altos to sopranos is $21 : 15$, which reduces to $7 : 5$. Choice $2 : 1$ comes from adding the entire difference of $6$ to half of $36$ and subtracting it from the other half, giving $24$ and $12$ \u2014 but those groups differ by $12$, not $6$.",
    source: SOURCE,
  },
  {
    // iterate a stated recurrence to a target term
    id: "s03-q03",
    topic: "algebra",
    difficulty: "easy",
    stem: "Priya writes a sequence whose first three terms are $1$, $1$, and $2$. Every term after the third is the sum of the three terms just before it, so the fourth term is $1 + 1 + 2 = 4$. What is the eighth term of Priya's sequence?",
    choices: ["$21$", "$24$", "$37$", "$44$", "$45$"],
    answerIndex: 3,
    explanation:
      "The fastest route is to apply the rule directly, one term at a time. The sequence runs $1, 1, 2, 4$, then $1 + 2 + 4 = 7$, then $2 + 4 + 7 = 13$, then $4 + 7 + 13 = 24$, and finally $7 + 13 + 24 = 44$. So the eighth term is $44$. Choice $24$ is the seventh term \u2014 the result of stopping one term too early.",
    source: SOURCE,
  },
  {
    // split a fraction into equal parts as a percent
    id: "s03-q04",
    topic: "arithmetic",
    difficulty: "easy",
    stem: "Sam's cooler is $\\frac{4}{5}$ full of water. He pours all of the water into $4$ empty bottles, putting an equal amount in each bottle. What percent of the cooler's full capacity did each bottle receive?",
    choices: ["$5\\%$", "$16\\%$", "$20\\%$", "$25\\%$", "$80\\%$"],
    answerIndex: 2,
    explanation:
      "Each bottle gets one fourth of the water that is actually in the cooler, not one fourth of a full cooler. That is $\\frac{4}{5} \\div 4 = \\frac{1}{5}$ of the cooler's full capacity, and $\\frac{1}{5} = 20\\%$. Choice $25\\%$ comes from dividing a full cooler by $4$ and ignoring that the cooler held only $\\frac{4}{5}$ of its capacity.",
    source: SOURCE,
  },
  {
    // weighted average across groups of different sizes
    id: "s03-q05",
    topic: "arithmetic",
    difficulty: "easy",
    stem: "During a three-round math practice, Jordan solved $90\\%$ of the $60$ warm-up problems, $80\\%$ of the $30$ speed problems, and $70\\%$ of the $10$ challenge problems. What percent of all $100$ problems did Jordan solve?",
    choices: ["$70\\%$", "$75\\%$", "$80\\%$", "$84\\%$", "$85\\%$"],
    answerIndex: 4,
    explanation:
      "Percentages of different-sized groups cannot simply be averaged \u2014 count the problems Jordan actually solved. He solved $0.9 \\times 60 = 54$ warm-ups, $0.8 \\times 30 = 24$ speed problems, and $0.7 \\times 10 = 7$ challenge problems, for a total of $54 + 24 + 7 = 85$ out of $100$. That is $85\\%$. Choice $80\\%$ comes from averaging the three percentages $90$, $80$, and $70$, which ignores the fact that the rounds have very different numbers of problems.",
    source: SOURCE,
  },
  {
    // mean of group means equals overall mean
    id: "s03-q06",
    topic: "data-analysis",
    difficulty: "easy",
    stem: "Amara writes each of the integers $1$ through $16$ on its own card and deals the $16$ cards into $8$ pairs. For each pair she computes the average of its two cards, giving her a list of $8$ numbers. What is the average of the $8$ numbers on Amara's list?",
    choices: ["$7.5$", "$8$", "$8.5$", "$9$", "It cannot be determined from the information given"],
    answerIndex: 2,
    explanation:
      "Averaging equal-size groups never changes the overall average: each pair's average is half the pair's sum, so the $8$ averages total $\\frac{1}{2}(1 + 2 + \\cdots + 16) = \\frac{136}{2} = 68$, and $\\frac{68}{8} = 8.5$. This equals the average of $1$ through $16$, namely $\\frac{1 + 16}{2} = 8.5$, no matter how the cards are paired. The last choice tempts because the pairing is left up to Amara, but every possible pairing produces exactly the same overall average.",
    source: SOURCE,
  },
  {
    // telescoping product of consecutive fractions
    id: "s03-q07",
    topic: "arithmetic",
    difficulty: "easy",
    stem: "What is the value of the product $\\frac{1}{3} \\cdot \\frac{2}{4} \\cdot \\frac{3}{5} \\cdot \\frac{4}{6} \\cdots \\frac{13}{15} \\cdot \\frac{14}{16}$?",
    choices: [
      "$\\frac{1}{240}$",
      "$\\frac{1}{120}$",
      "$\\frac{1}{112}$",
      "$\\frac{1}{8}$",
      "$\\frac{2}{15}$",
    ],
    answerIndex: 1,
    explanation:
      "The product telescopes: every numerator from $3$ through $14$ cancels with the matching denominator two fractions earlier. The only factors that survive are the numerators $1$ and $2$ and the denominators $15$ and $16$. The product is therefore $\\frac{1 \\cdot 2}{15 \\cdot 16} = \\frac{2}{240} = \\frac{1}{120}$. Choice $\\frac{1}{240}$ comes from forgetting that the numerator $2$ also survives the cancellation, leaving only $\\frac{1}{15 \\cdot 16}$.",
    source: SOURCE,
  },
  {
    // two-variable heads-and-legs system
    id: "s03-q08",
    topic: "algebra",
    difficulty: "easy",
    stem: "The Maple Hollow petting zoo keeps only chickens and rabbits. Each chicken has $2$ legs and each rabbit has $4$ legs. Altogether the animals have $30$ heads and $84$ legs. How many rabbits are at the petting zoo?",
    choices: ["$6$", "$12$", "$15$", "$18$", "$21$"],
    answerIndex: 1,
    explanation:
      "Give every one of the $30$ animals $2$ legs first, accounting for $60$ legs; the remaining $84 - 60 = 24$ legs must be the extra $2$ legs each rabbit has beyond a chicken. So there are $24 \\div 2 = 12$ rabbits, and hence $18$ chickens. Checking: $18 \\cdot 2 + 12 \\cdot 4 = 36 + 48 = 84$ legs. Choice $18$ is the number of chickens \u2014 the right method applied to the wrong animal.",
    source: SOURCE,
  },
  {
    // effect of correcting one data value on mean and median
    id: "s03-q09",
    topic: "data-analysis",
    difficulty: "easy",
    stem: "Ms. Patel recorded five quiz scores: $60$, $70$, $75$, $80$, and $90$. She then noticed that the score recorded as $90$ should actually have been $100$. After she corrects it, which of the following statements is true?",
    choices: [
      "The mean and the median both increase by $2$",
      "The mean increases by $10$ and the median does not change",
      "The mean does not change and the median increases by $2$",
      "The mean increases by $2$ and the median does not change",
      "The mean and the median both increase by $10$",
    ],
    answerIndex: 3,
    explanation:
      "The mean depends on the total, while the median depends only on the middle value in order. The correction raises the total by $10$, so the mean rises by $\\frac{10}{5} = 2$, from $\\frac{375}{5} = 75$ to $\\frac{385}{5} = 77$. The corrected score $100$ is still the largest value, so the ordered middle score stays $75$ and the median does not move. The choice saying the mean increases by $10$ forgets to divide the change in the total by the $5$ scores.",
    source: SOURCE,
  },
  {
    // min/max a total with a fixed count of two item types
    id: "s03-q10",
    topic: "arithmetic",
    difficulty: "easy",
    stem: "At an arcade, Leo has $60$ prize tokens. Each token is worth either $3$ tickets or $7$ tickets, and Leo has at least one token of each kind. What is the difference, in tickets, between the greatest possible total value and the least possible total value of Leo's tokens?",
    choices: ["$184$", "$232$", "$236$", "$240$", "$416$"],
    answerIndex: 1,
    explanation:
      "The extremes come from making all but one token the same kind, since at least one of each is required. The greatest total is $59 \\cdot 7 + 3 = 416$ tickets and the least is $59 \\cdot 3 + 7 = 184$ tickets, so the difference is $416 - 184 = 232$. Equivalently, moving from the least to the greatest swaps $58$ tokens from $3$-ticket to $7$-ticket, each swap adding $4$ tickets, and $58 \\cdot 4 = 232$. Choice $240$ comes from computing $60 \\cdot 4$, which ignores that Leo must keep at least one token of each kind.",
    source: SOURCE,
  },
  {
    // digit swap changes a number by a multiple of 9
    id: "s03-q11",
    topic: "number-theory",
    difficulty: "medium",
    stem: "Leo bowled a game and earned a two-digit score. When the score was posted, its tens digit and units digit were accidentally swapped, and the posted score was greater than Leo's actual score. Which of the following could be the difference between the posted score and Leo's actual score?",
    choices: ["$42$", "$48$", "$54$", "$60$", "$66$"],
    answerIndex: 2,
    explanation:
      "The key insight is that swapping the digits of a two-digit number changes its value by a multiple of $9$: if the actual score has tens digit $a$ and units digit $b$, the posted score is $10b + a$, so the difference is $(10b + a) - (10a + b) = 9(b - a)$. Among the choices, only $54 = 9 \\cdot 6$ is a multiple of $9$, and it is achievable \u2014 for example, an actual score of $17$ posted as $71$. The tempting choice $60$ comes from thinking the swap shifts the value by $10$ times the digit difference, and $66$ comes from using the sum formula $11(a + b)$ instead of the difference.",
    source: SOURCE,
  },
  {
    // count rounds via an elimination invariant
    id: "s03-q12",
    topic: "logic",
    difficulty: "medium",
    stem: "The Riverbend Running Club holds a sprint tournament for $181$ runners. Each race has exactly $6$ runners; the winner advances to a later round, and the other $5$ runners are eliminated. If the number of runners remaining in a round is not a multiple of $6$, some runners receive a bye and advance to the next round without racing. The tournament continues until a single champion remains. How many races are run in all?",
    choices: ["$30$", "$31$", "$35$", "$36$", "$37$"],
    answerIndex: 3,
    explanation:
      "The key insight is to count eliminations instead of simulating rounds: every race eliminates exactly $5$ runners, and byes eliminate no one. Everyone except the champion must be eliminated exactly once, so $181 - 1 = 180$ runners are eliminated, requiring $180 \\div 5 = 36$ races. Indeed the tournament works out: $30$ races leave $30$ winners plus $1$ bye, then $5$ races leave $5$ winners plus $1$ bye, then $1$ final race crowns the champion. The tempting choice $30$ counts only the first round's races, and $37$ adds an unneeded extra race for the champion.",
    source: SOURCE,
  },
  {
    // maximize a product by allocating increments among its factors
    id: "s03-q13",
    topic: "counting",
    difficulty: "medium",
    stem: "The Maple Street Bike Shop gives each bicycle model a code consisting of one color, one frame style, and one wheel size. The shop currently offers $8$ colors, $5$ frame styles, and $2$ wheel sizes. It plans to introduce two new options, each of which may be added to any one of the three categories (both may be added to the same category). What is the greatest possible number of additional codes the shop can make?",
    choices: ["$20$", "$28$", "$55$", "$64$", "$80$"],
    answerIndex: 4,
    explanation:
      "The number of codes is the product $8 \\cdot 5 \\cdot 2 = 80$, and the key insight is that a fixed increase grows a product most when it goes entirely to the smallest factor. Adding both new options to the wheel sizes gives $8 \\cdot 5 \\cdot 4 = 160$ codes, an increase of $160 - 80 = 80$. Checking every other placement confirms this: $10 \\cdot 5 \\cdot 2 = 100$, $8 \\cdot 7 \\cdot 2 = 112$, $9 \\cdot 6 \\cdot 2 = 108$, $9 \\cdot 5 \\cdot 3 = 135$, and $8 \\cdot 6 \\cdot 3 = 144$ all give smaller gains. The tempting choice $64$ comes from splitting the two options between the two smallest categories ($8 \\cdot 6 \\cdot 3 = 144$), which feels balanced but is not optimal.",
    source: SOURCE,
  },
  {
    // count equilateral triangles among cube vertices through a fixed vertex
    id: "s03-q14",
    topic: "geometry",
    difficulty: "medium",
    stem: "The eight vertices of a cube are the points $(x, y, z)$ where each of $x$, $y$, and $z$ equals $0$ or $2$. Let $P$ be the vertex $(0, 0, 0)$. How many equilateral triangles have $P$ as a vertex and all three of their vertices among the vertices of the cube?",
    choices: ["$1$", "$3$", "$4$", "$6$", "$8$"],
    answerIndex: 1,
    explanation:
      "The key insight is that an equilateral triangle on cube vertices must use the face-diagonal distance for all three sides. The vertices at face-diagonal distance $2\\sqrt{2}$ from $P$ are $(2, 2, 0)$, $(2, 0, 2)$, and $(0, 2, 2)$, and any two of these are also $2\\sqrt{2}$ apart, so each of the $3$ pairs forms an equilateral triangle with $P$. Edge-length sides fail because two edge-neighbors of $P$, such as $(2, 0, 0)$ and $(0, 2, 0)$, are $2\\sqrt{2}$ apart rather than $2$, and only one vertex sits at space-diagonal distance. These $3$ triangles are exactly the faces through $P$ of a regular tetrahedron inscribed in the cube. The tempting choice $4$ counts all four faces of that tetrahedron, forgetting that one face does not contain $P$; $8$ counts every equilateral triangle in the cube, not just those through $P$.",
    source: SOURCE,
  },
  {
    // linear equation from a two-outcome scoring system
    id: "s03-q15",
    topic: "algebra",
    difficulty: "medium",
    stem: "In the Cedar Valley math relay, a team answers all $24$ questions, earning $5$ points for each correct answer and losing $3$ points for each incorrect answer. Jordan's team finished with $56$ points. How many questions did Jordan's team answer correctly?",
    choices: ["$8$", "$14$", "$15$", "$16$", "$17$"],
    answerIndex: 3,
    explanation:
      "The key is that the number of incorrect answers is determined by the number of correct ones: with $c$ correct answers there are $24 - c$ incorrect, so the score is $5c - 3(24 - c) = 56$. This simplifies to $8c - 72 = 56$, so $8c = 128$ and $c = 16$. Checking: $16 \\cdot 5 - 8 \\cdot 3 = 80 - 24 = 56$. The tempting choice $8$ is the number of incorrect answers \u2014 the right method applied to the wrong quantity.",
    source: SOURCE,
  },
  {
    // parity casework on dice sums
    id: "s03-q16",
    topic: "probability",
    difficulty: "medium",
    stem: "Amara rolls a fair eight-sided die whose faces are labeled $1$, $2$, $3$, $5$, $7$, $8$, $9$, and $11$. She rolls the die twice. What is the probability that the sum of the two numbers she rolls is even?",
    choices: [
      "$\\frac{3}{8}$",
      "$\\frac{7}{16}$",
      "$\\frac{1}{2}$",
      "$\\frac{9}{16}$",
      "$\\frac{5}{8}$",
    ],
    answerIndex: 4,
    explanation:
      "The key insight is that a sum is even exactly when the two rolls have the same parity. Six of the eight faces are odd and two are even, so each roll is odd with probability $\\frac{6}{8} = \\frac{3}{4}$ and even with probability $\\frac{1}{4}$. The probability of matching parities is $\\left(\\frac{3}{4}\\right)^2 + \\left(\\frac{1}{4}\\right)^2 = \\frac{9}{16} + \\frac{1}{16} = \\frac{5}{8}$. The tempting choice $\\frac{9}{16}$ counts only the both-odd case and forgets that two even rolls also produce an even sum.",
    source: SOURCE,
  },
  {
    // region area by subtracting circular sectors from a rectangle
    id: "s03-q17",
    topic: "geometry",
    difficulty: "medium",
    stem: "Mr. Ortiz is paving a rectangular patio with corners at $(0, 0)$, $(8, 0)$, $(8, 5)$, and $(0, 5)$, where the units are meters. Four circular flower beds are centered at the corners: the bed centered at $(0, 0)$ has radius $3$, the bed at $(8, 0)$ has radius $2$, the bed at $(8, 5)$ has radius $1$, and the bed at $(0, 5)$ has radius $2$. No two beds overlap. Which of the following is closest to the area, in square meters, of the part of the patio not covered by any flower bed?",
    choices: ["$24$", "$25$", "$26$", "$27$", "$28$"],
    answerIndex: 2,
    explanation:
      "The key insight is that each bed, being centered at a corner, meets the patio in exactly a quarter disk, so the covered area is $\\frac{\\pi}{4}\\left(3^2 + 2^2 + 1^2 + 2^2\\right) = \\frac{\\pi}{4} \\cdot 18 = 4.5\\pi$. The patio has area $8 \\cdot 5 = 40$, so the uncovered area is $40 - 4.5\\pi \\approx 40 - 14.14 = 25.86$. This is closest to $26$. The tempting choice $27$ comes from overlooking the small radius-$1$ bed, which gives $40 - 4.25\\pi \\approx 26.65$ instead.",
    source: SOURCE,
  },
  {
    // two-set inclusion-exclusion overlap
    id: "s03-q18",
    topic: "counting",
    difficulty: "medium",
    stem: "Each of the $40$ students in Ms. Rivera's homeroom belongs to at least one of two clubs: $18$ students belong to the chess club, and $27$ students belong to the garden club. How many students belong to both clubs?",
    choices: ["$5$", "$9$", "$13$", "$18$", "$22$"],
    answerIndex: 0,
    explanation:
      "The key is inclusion-exclusion: the chess count plus the garden count equals the number in at least one club plus the number in both, since students in both clubs are counted twice. Because every student belongs to at least one club, the union is all $40$ students, so the overlap is $18 + 27 - 40 = 5$. Checking: $13$ students are in chess only, $22$ in garden only, and $5$ in both, totaling $40$. The tempting choice $9$ is the difference $27 - 18$ between the club sizes, which has no bearing on the overlap.",
    source: SOURCE,
  },
  {
    // extremize rectangle area at fixed perimeter
    id: "s03-q19",
    topic: "geometry",
    difficulty: "medium",
    stem: "Priya has $46$ one-meter fence panels and uses all of them to form the perimeter of a rectangular garden whose side lengths are whole numbers of meters. Let $M$ be the greatest possible area of the garden and let $m$ be the least possible area. What is the value, in square meters, of $M - m$?",
    choices: ["$22$", "$90$", "$108$", "$110$", "$132$"],
    answerIndex: 3,
    explanation:
      "The key insight is that the length and width must sum to half the perimeter, $46 \\div 2 = 23$ meters, and at a fixed perimeter the area is greatest when the sides are as close together as possible and least when they are as far apart as possible. The closest whole-number split of $23$ is $11 \\times 12 = 132$, so $M = 132$, and the skinniest rectangle is $1 \\times 22 = 22$, so $m = 22$. Therefore $M - m = 132 - 22 = 110$. The tempting choice $132$ is $M$ itself, stopping one step early, while $90$ comes from taking the skinniest rectangle to be $2 \\times 21 = 42$ instead of $1 \\times 22$.",
    source: SOURCE,
  },
  {
    // lattice polygon area via bounding box subtraction
    id: "s03-q20",
    topic: "geometry",
    difficulty: "medium",
    stem: "Maya has a rectangular sheet of grid paper covering the region with corners $(0, 0)$, $(5, 0)$, $(5, 4)$, and $(0, 4)$. She shades the triangle with vertices $(0, 0)$, $(5, 1)$, and $(2, 4)$. What fraction of the sheet is shaded?",
    choices: [
      "$\\frac{2}{5}$",
      "$\\frac{9}{20}$",
      "$\\frac{1}{2}$",
      "$\\frac{11}{20}$",
      "$\\frac{3}{5}$",
    ],
    answerIndex: 1,
    explanation:
      "The key insight is to enclose the tilted triangle in the full $5 \\times 4$ sheet and subtract the three right triangles between its sides and the sheet's edges. Those right triangles have legs $5$ and $1$ (area $\\frac{5}{2}$), legs $3$ and $3$ (area $\\frac{9}{2}$), and legs $2$ and $4$ (area $4$), totaling $11$. The shaded area is therefore $20 - 11 = 9$, so the shaded fraction is $\\frac{9}{20}$. The tempting choice $\\frac{11}{20}$ is the unshaded fraction \u2014 the complement of what was asked.",
    source: SOURCE,
  },
  {
    // simultaneous remainder conditions (CRT) counted in a range
    id: "s03-q21",
    topic: "number-theory",
    difficulty: "hard",
    stem: "Leo's sticker collection contains a three-digit number of stickers. When he arranges the stickers in rows of $6$, exactly $5$ are left over. When he arranges them in rows of $8$, exactly $7$ are left over. When he arranges them in rows of $9$, exactly $8$ are left over. How many possible values are there for the number of stickers in Leo's collection?",
    choices: ["$2$", "$6$", "$11$", "$12$", "$13$"],
    answerIndex: 3,
    explanation:
      "The key observation is that each remainder is exactly one less than its divisor, so $n + 1$ is divisible by $6$, $8$, and $9$ \u2014 that is, by $\\text{lcm}(6, 8, 9) = 72$. Thus $n = 72k - 1$ for a positive integer $k$, and $n$ is a three-digit number exactly when $101 \\le 72k \\le 1000$. This gives $k = 2$ through $k = 13$, which is $13 - 2 + 1 = 12$ possible values of $n$, from $143$ up to $935$. The most tempting distractor, $13$, comes from also counting $k = 1$, but $72 \\cdot 1 - 1 = 71$ has only two digits.",
    source: SOURCE,
  },
  {
    // count onto distributions of distinct items (surjections)
    id: "s03-q22",
    topic: "counting",
    difficulty: "hard",
    stem: "The Riverbend Science Club is preparing for its spring fair. There are $6$ different jobs to be done, and each job must be assigned to exactly one of $3$ volunteers: Priya, Sam, or Jordan. Each volunteer must be assigned at least one job. In how many ways can the $6$ jobs be assigned?",
    choices: ["$90$", "$360$", "$450$", "$537$", "$540$"],
    answerIndex: 4,
    explanation:
      "Count all assignments and remove those that leave a volunteer with no job: by inclusion-exclusion this is $3^6 - 3 \\cdot 2^6 + 3 \\cdot 1^6 = 729 - 192 + 3 = 540$. Alternatively, split by how many jobs each volunteer gets: a $4{-}1{-}1$ split gives $3 \\cdot \\binom{6}{4} \\cdot 2 = 90$ ways, a $3{-}2{-}1$ split gives $3! \\cdot \\binom{6}{3}\\binom{3}{2} = 360$ ways, and a $2{-}2{-}2$ split gives $\\binom{6}{2}\\binom{4}{2} = 90$ ways, again totaling $540$. The most tempting distractor, $537$, comes from subtracting the $3 \\cdot 2^6$ assignments that miss a volunteer without adding back the $3$ assignments that give all six jobs to one volunteer, which were subtracted twice.",
    source: SOURCE,
  },
  {
    // largest tilted square inscribed in a notched region
    id: "s03-q23",
    topic: "geometry",
    difficulty: "hard",
    stem: "Maya's square patio measures $6$ meters on each side. A square planter box exactly covers the $1$-meter-by-$1$-meter square at each of the four corners of the patio, leaving a cross-shaped open region. Maya wants the largest possible square rug that lies flat entirely within the open region; the rug's sides do not need to be parallel to the patio's sides. What is the area, in square meters, of this rug?",
    choices: ["$18$", "$24$", "$30$", "$32$", "$36$"],
    answerIndex: 1,
    explanation:
      "The largest rug is tilted so that each of its sides passes through the inner corner of one planter. Place coordinates with the patio running from $(0,0)$ to $(6,6)$: by symmetry the rug has a vertex at $(x, 0)$, the adjacent vertex at $(6, x)$, and the side joining them passes through the planter corner $(5, 1)$. Substituting that point into the line through the two vertices (or using similar triangles) gives $x(5 - x) = 6 - x$, which rearranges to $x(6 - x) = 6$. The trick is that the rug's area is $x^2 + (6-x)^2 = 6^2 - 2x(6-x) = 36 - 12 = 24$, so the value of $x$ itself is never needed. The most tempting distractor, $18$, is the area of the $45^\\circ$ square joining the midpoints of the patio's sides, which fits inside the cross but is not the largest possible square.",
    source: SOURCE,
  },
  {
    // area of a triangle formed by intersecting lines in the coordinate plane
    id: "s03-q24",
    topic: "geometry",
    difficulty: "hard",
    stem: "In the coordinate plane, the three lines $y = 3x + 2$, $y = \\frac{1}{3}x + 2$, and $y = -x + 10$ intersect in pairs at three distinct points, and these points are the vertices of a triangle. What is the area of the triangle?",
    choices: ["$16$", "$22$", "$24$", "$32$", "$36$"],
    answerIndex: 0,
    explanation:
      "Setting the equations equal in pairs gives the vertices: $3x + 2 = \\frac{1}{3}x + 2$ yields $(0, 2)$, $3x + 2 = -x + 10$ yields $(2, 8)$, and $\\frac{1}{3}x + 2 = -x + 10$ yields $(6, 4)$. Enclose the triangle in the bounding rectangle with opposite corners $(0, 2)$ and $(6, 8)$, whose area is $6 \\cdot 6 = 36$. The three right triangles between the triangle and the rectangle have legs $6$ and $2$, legs $4$ and $4$, and legs $2$ and $6$, with total area $6 + 8 + 6 = 20$, so the triangle's area is $36 - 20 = 16$. The most tempting distractor, $22$, comes from subtracting only two of the three corner triangles, $36 - 6 - 8$.",
    source: SOURCE,
  },
  {
    // probability via a divisibility rule reducing order to subsets
    id: "s03-q25",
    topic: "probability",
    difficulty: "hard",
    stem: "Amara has five tiles numbered $1$ through $5$ in a bag. She draws three tiles at random, one at a time without replacement, and places them in a row from left to right to form a three-digit number. What is the probability that the resulting number is a multiple of $3$?",
    choices: [
      "$\\frac{1}{5}$",
      "$\\frac{1}{3}$",
      "$\\frac{2}{5}$",
      "$\\frac{1}{2}$",
      "$\\frac{3}{5}$",
    ],
    answerIndex: 2,
    explanation:
      "A number is a multiple of $3$ exactly when its digit sum is, so the order of the tiles is irrelevant \u2014 only which $3$ of the $5$ tiles are drawn matters, and all $\\binom{5}{3} = 10$ triples are equally likely. Checking digit sums, exactly four triples work: $\\{1,2,3\\}$, $\\{1,3,5\\}$, $\\{2,3,4\\}$, and $\\{3,4,5\\}$, giving a probability of $\\frac{4}{10} = \\frac{2}{5}$. The most tempting distractor, $\\frac{3}{5}$, counts the six triples that contain the tile $3$, but two of them, $\\{1,3,4\\}$ and $\\{2,3,5\\}$, have digit sums $8$ and $10$, which are not multiples of $3$.",
    source: SOURCE,
  },
];
