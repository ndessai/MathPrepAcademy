import type { Question } from "@mathprep/core";

const SOURCE = "MathPrep original (AMC 12 style)";

export const AMC12_SET_01_QUESTIONS: Question[] = [
  {
    // structured-number product difference
    id: "a12s01-q01",
    topic: "arithmetic",
    difficulty: "easy",
    stem: "What is the value of $2001 \\cdot 4999 - 1999 \\cdot 5001$?",
    choices: ["$-2$", "$600$", "$3{,}000$", "$6{,}000$", "$60{,}000$"],
    answerIndex: 3,
    explanation:
      "Write each product around $10^7$: $2001 \\cdot 4999 = (2000+1)(5000-1) = 10^7 + 5000 - 2000 - 1 = 10^7 + 2999$, while $1999 \\cdot 5001 = (2000-1)(5000+1) = 10^7 + 2000 - 5000 - 1 = 10^7 - 3001$. Subtracting, the $10^7$ terms cancel, leaving $2999 - (-3001) = 6000$. Multiplying everything out by hand also works but is far slower and invites carrying errors. The most tempting wrong answer, $-2$, comes from computing $2999 - 3001$, forgetting that the second product's deviation is negative and therefore must be added back.",
    source: SOURCE,
  },
  {
    // three-unknown linear translation with |difference| wrapper
    id: "a12s01-q02",
    topic: "algebra",
    difficulty: "easy",
    stem: "Ana, Ben, and Cara collected seashells at the beach. Ben collected twice as many seashells as Ana, Cara collected $5$ more seashells than Ana, and the three collected $53$ seashells in all. What is the positive difference between the numbers of seashells Ben and Cara collected?",
    choices: ["$7$", "$12$", "$17$", "$24$", "$41$"],
    answerIndex: 0,
    explanation:
      "Let $a$ be Ana's count; then Ben has $2a$ and Cara has $a + 5$, so $a + 2a + (a + 5) = 53$ gives $4a = 48$ and $a = 12$. Therefore Ben collected $24$ and Cara collected $17$, and the positive difference is $24 - 17 = 7$. Every intermediate value is an integer, so any fraction signals an equation set up wrong. The tempting answer $24$ is Ben's individual total \u2014 the error of reporting a solved value instead of the requested difference (and $41$ is their sum rather than their difference).",
    source: SOURCE,
  },
  {
    // perfect squares under a bound with divisibility filter
    id: "a12s01-q03",
    topic: "number-theory",
    difficulty: "easy",
    stem: "How many positive perfect squares less than $2025$ are divisible by $15$?",
    choices: ["$1$", "$2$", "$3$", "$4$", "$5$"],
    answerIndex: 1,
    explanation:
      'Since $15 = 3 \\cdot 5$ is squarefree, $15 \\mid n^2$ forces both $3 \\mid n$ and $5 \\mid n$, so $15 \\mid n$: every perfect square divisible by $15$ is actually divisible by $225$ and has the form $(15k)^2$. The condition $(15k)^2 < 2025$ becomes $k^2 < 9$, so $k \\in \\{1, 2\\}$, giving exactly the two squares $225$ and $900$. The bound is razor-thin because $45^2 = 2025$ exactly, and $2025$ is not less than $2025$. Answering $3$ is the error of including $45^2 = 2025$ itself, misreading "less than" as "at most."',
    source: SOURCE,
  },
  {
    // Thales circumcircle ratio
    id: "a12s01-q04",
    topic: "geometry",
    difficulty: "easy",
    stem: "A right triangle has legs of lengths $7$ and $24$. A first circle is circumscribed about the triangle, and a second circle has the longer leg as a diameter. What is the ratio of the area of the first circle to the area of the second circle?",
    choices: [
      "$\\frac{576}{625}$",
      "$\\frac{25}{24}$",
      "$\\frac{625}{576}$",
      "$\\frac{25}{7}$",
      "$\\frac{625}{49}$",
    ],
    answerIndex: 2,
    explanation:
      "Because the triangle has a right angle, its hypotenuse must be a diameter of the circumscribed circle (Thales), and the hypotenuse is $\\sqrt{7^2 + 24^2} = \\sqrt{625} = 25$. So the first circle has radius $\\frac{25}{2}$ and the second circle has radius $\\frac{24}{2} = 12$. The ratio of the areas equals the square of the ratio of the radii: $\\left(\\frac{25/2}{12}\\right)^2 = \\frac{625}{576}$. The tempting answer $\\frac{25}{24}$ comes from comparing the diameters without squaring, forgetting that area scales as the square of length.",
    source: SOURCE,
  },
  {
    // lattice points in a weighted taxicab ball
    id: "a12s01-q05",
    topic: "counting",
    difficulty: "easy",
    stem: "How many ordered pairs $(x, y)$ of integers satisfy $|x| + 2|y| \\le 10$?",
    choices: ["$91$", "$109$", "$111$", "$132$", "$144$"],
    answerIndex: 2,
    explanation:
      "For each integer $y$ with $|y| \\le 5$, the condition becomes $|x| \\le 10 - 2|y|$, which admits $2(10 - 2|y|) + 1 = 21 - 4|y|$ integer values of $x$. The row $y = 0$ contributes $21$ points, and the pairs $|y| = 1, 2, 3, 4, 5$ contribute $2(17 + 13 + 9 + 5 + 1) = 90$ points, for a total of $21 + 90 = 111$. Note the rows $y = \\pm 5$ each contribute a single point, which is easy to drop. The tempting answer $144$ counts the $36$ points in one closed quadrant and multiplies by $4$, double-counting every point on the axes.",
    source: SOURCE,
  },
  {
    // self-referential mean casework
    id: "a12s01-q06",
    topic: "data-analysis",
    difficulty: "easy",
    stem: "A list consists of the four numbers $2$, $5$, $11$, and $n$, where $n$ is a positive integer. The mean of the four numbers is equal to one of the four numbers. What is the sum of all possible values of $n$?",
    choices: ["$8$", "$24$", "$28$", "$32$", "$34$"],
    answerIndex: 4,
    explanation:
      "The mean is $\\frac{18 + n}{4}$, and setting it equal to each list member gives four cases. If the mean is $5$, then $18 + n = 20$ and $n = 2$; if the mean is $11$, then $18 + n = 44$ and $n = 26$; if the mean is $n$, then $18 + n = 4n$ and $n = 6$. If the mean is $2$, then $n = -10$, which is not a positive integer, so that case is discarded. The valid values $2$, $26$, and $6$ sum to $34$; the tempting answer $24$ comes from keeping the invalid $n = -10$ in the sum.",
    source: SOURCE,
  },
  {
    // nested absolute-value region area
    id: "a12s01-q07",
    topic: "algebra",
    difficulty: "easy",
    stem: "What is the area of the region in the $xy$-plane consisting of all points $(x, y)$ such that $\\left| |x| - 4 \\right| + |y| \\le 2$?",
    choices: ["$4$", "$8$", "$16$", "$32$", "$64$"],
    answerIndex: 2,
    explanation:
      "For $x \\ge 0$ the condition reads $|x - 4| + |y| \\le 2$, a diamond with vertices $(2, 0)$, $(6, 0)$, $(4, 2)$, and $(4, -2)$; by the symmetry $x \\mapsto -x$, the full region is this diamond together with its congruent mirror image centered at $(-4, 0)$. The two pieces do not overlap, since every point of the region satisfies $2 \\le |x| \\le 6$. Each diamond has both diagonals of length $4$, hence area $\\frac{1}{2} \\cdot 4 \\cdot 4 = 8$, so the total area is $2 \\cdot 8 = 16$. The tempting answer $8$ comes from handling the outer absolute value as if $|x|$ were simply $x$, counting only the diamond on the positive side.",
    source: SOURCE,
  },
  {
    // running total hits a small target
    id: "a12s01-q08",
    topic: "probability",
    difficulty: "easy",
    stem: "A fair four-sided die has its faces numbered $1$, $2$, $3$, and $4$. Keiko rolls the die repeatedly and keeps a running total of all the numbers she has rolled. What is the probability that at some point her running total equals $4$?",
    choices: [
      "$\\frac{101}{256}$",
      "$\\frac{7}{16}$",
      "$\\frac{31}{64}$",
      "$\\frac{125}{256}$",
      "$\\frac{131}{256}$",
    ],
    answerIndex: 3,
    explanation:
      "The running total hits $4$ exactly when the initial rolls form an ordered composition of $4$: the compositions are $4$; then $1+3$, $3+1$, $2+2$; then $1+1+2$, $1+2+1$, $2+1+1$; then $1+1+1+1$. A composition using $j$ rolls occurs with probability $\\left(\\frac{1}{4}\\right)^j$, and these events are mutually exclusive since only one sequence of rolls actually occurs. The probability is therefore $\\frac{1}{4} + \\frac{3}{16} + \\frac{3}{64} + \\frac{1}{256} = \\frac{64 + 48 + 12 + 1}{256} = \\frac{125}{256}$. The tempting answer $\\frac{31}{64} = \\frac{124}{256}$ omits exactly one composition, the easily forgotten $1+1+1+1$.",
    source: SOURCE,
  },
  {
    // log reciprocation equation
    id: "a12s01-q09",
    topic: "precalculus",
    difficulty: "easy",
    stem: "Let $x > 1$ be a real number such that $\\frac{1}{\\log_2 x} + \\frac{1}{\\log_8 x} = 4$. What is $x$?",
    choices: ["$\\frac{1}{2}$", "$2$", "$4$", "$8$", "$16$"],
    answerIndex: 1,
    explanation:
      "The key identity is the reciprocation $\\frac{1}{\\log_b x} = \\log_x b$, which turns the equation into $\\log_x 2 + \\log_x 8 = 4$. Adding the logarithms multiplies their arguments: $\\log_x 16 = 4$, so $x^4 = 16$. Since $x > 1$, taking the positive fourth root gives $x = 2$. The tempting answer $8$ comes from never reciprocating at all \u2014 solving $\\log_2 x + \\log_8 x = 4$, which gives $\\frac{4}{3}\\log_2 x = 4$ and $x = 2^3 = 8$ (while $16$ is the premature stop at $x^4$).",
    source: SOURCE,
  },
  {
    // truth-teller census from response tallies
    id: "a12s01-q10",
    topic: "logic",
    difficulty: "easy",
    stem: 'Each of the $30$ inhabitants of an island is a knight, a knave, or a waverer. Knights always answer questions truthfully, knaves always answer falsely, and each waverer alternates between truthful and false answers (a waverer\'s first answer may be of either kind, after which the alternation is strict). A visitor asked every inhabitant the same three questions in this order: "Are you a knight?", "Are you a waverer?", "Are you a knave?". Exactly $24$ inhabitants answered yes to the first question, exactly $16$ answered yes to the second, and exactly $7$ answered yes to the third. How many knaves are on the island?',
    choices: ["$7$", "$8$", "$9$", "$13$", "$16$"],
    answerIndex: 2,
    explanation:
      "Work out each type's yes-profile: a knight answers yes, no, no; a knave lies every time and answers yes, yes, no; a waverer whose first answer is truthful answers no, no, no; and a waverer whose first answer is a lie answers yes, yes, yes. Writing $t$, $\\ell$, $w_L$ for the numbers of knights, knaves, and lie-first waverers, the tallies give the triangular system $t + \\ell + w_L = 24$, $\\ell + w_L = 16$, and $w_L = 7$. Back-substituting, $\\ell = 16 - 7 = 9$ (and $t = 8$, with $30 - 24 = 6$ truth-first waverers, confirming consistency). The tempting answer $8$ is the number of knights, $24 - 16$ \u2014 the trap of answering the wrong census after doing all the work correctly.",
    source: SOURCE,
  },
  {
    // complementary-angle pairing of a trig sum
    id: "a12s01-q11",
    topic: "precalculus",
    difficulty: "medium",
    stem: "The sum $\\sin^2 0^\\circ + \\sin^2 5^\\circ + \\sin^2 10^\\circ + \\cdots + \\sin^2 90^\\circ$ contains $19$ terms, one for each multiple of $5^\\circ$ from $0^\\circ$ to $90^\\circ$, inclusive. What is the value of this sum?",
    choices: ["$\\frac{17}{2}$", "$9$", "$\\frac{19}{2}$", "$10$", "$\\frac{21}{2}$"],
    answerIndex: 2,
    explanation:
      "The key identity is $\\sin^2\\theta + \\sin^2(90^\\circ - \\theta) = \\sin^2\\theta + \\cos^2\\theta = 1$, so complementary angles pair off. The $19$ angles form nine complementary pairs $(0^\\circ, 90^\\circ), (5^\\circ, 85^\\circ), \\ldots, (40^\\circ, 50^\\circ)$, each pair contributing exactly $1$, for a subtotal of $9$. The middle angle $45^\\circ$ is its own complement and stands alone, contributing $\\sin^2 45^\\circ = \\frac{1}{2}$. The total is $9 + \\frac{1}{2} = \\frac{19}{2}$. The tempting answer $9$ comes from pairing all the terms and forgetting that the unpaired $45^\\circ$ term still contributes its half.",
    source: SOURCE,
  },
  {
    // base-b numeral divisibility count with digit-sum wrapper
    id: "a12s01-q12",
    topic: "number-theory",
    difficulty: "medium",
    stem: "For each integer $b \\ge 7$, let $f(b) = 2b^3 + 2b + 6$, which is the value of the numeral $2026$ when its digits are read in base $b$ (all constants here are written in base ten). Let $N$ be the number of integers $b$ with $7 \\le b \\le 2026$ such that $f(b)$ is divisible by $7$. What is the sum of the digits of $N$?",
    choices: ["$16$", "$17$", "$18$", "$19$", "$20$"],
    answerIndex: 2,
    explanation:
      "The insight is to reduce $f(b) = 2b^3 + 2b + 6$ modulo $7$ residue by residue: for $b \\equiv 0, 1, 2, 3, 4, 5, 6 \\pmod{7}$ the values of $f(b) \\bmod 7$ are $6, 3, 5, 3, 2, 0, 2$, so $f(b) \\equiv 0 \\pmod 7$ exactly when $b \\equiv 5 \\pmod 7$. The qualifying bases in $[7, 2026]$ are $12, 19, 26, \\ldots, 2021$, an arithmetic progression with $\\frac{2021 - 12}{7} + 1 = 288$ terms. Thus $N = 288$, and the sum of its digits is $2 + 8 + 8 = 18$. The tempting answer $19$ comes from also counting $b = 5$, which satisfies the congruence but is not a legal base for a numeral containing the digit $6$.",
    source: SOURCE,
  },
  {
    // shifted-roots product via polynomial evaluation
    id: "a12s01-q13",
    topic: "algebra",
    difficulty: "medium",
    stem: "Let $r$, $s$, and $t$ be the three roots of the equation $3x^3 - 5x^2 + 4x - 7 = 0$. What is the value of $(r+2)(s+2)(t+2)$?",
    choices: ["$-\\frac{59}{3}$", "$\\frac{5}{3}$", "$\\frac{35}{3}$", "$\\frac{59}{3}$", "$59$"],
    answerIndex: 3,
    explanation:
      "The roots are never needed: since $3x^3 - 5x^2 + 4x - 7 = 3(x-r)(x-s)(x-t)$, evaluating at $x = -2$ gives $P(-2) = 3(-2-r)(-2-s)(-2-t) = -3(r+2)(s+2)(t+2)$. Computing $P(-2) = 3(-8) - 5(4) + 4(-2) - 7 = -59$, so $(r+2)(s+2)(t+2) = \\frac{59}{3}$. A Vieta expansion confirms this: $rst + 2(rs+rt+st) + 4(r+s+t) + 8 = \\frac{7}{3} + \\frac{8}{3} + \\frac{20}{3} + 8 = \\frac{59}{3}$. The tempting answer $\\frac{5}{3}$ comes from evaluating at $x = +2$ instead of $x = -2$, and $59$ comes from dropping the leading coefficient $3$.",
    source: SOURCE,
  },
  {
    // cyclic quadrilateral chained computation
    id: "a12s01-q14",
    topic: "geometry",
    difficulty: "medium",
    stem: "Quadrilateral $ABCD$ is inscribed in a circle, with $AB = 15$, $AD = 8$, $CD = 8$, and $\\angle BAD = 60^\\circ$. What is the length of diagonal $\\overline{AC}$?",
    choices: [
      "$\\frac{120}{13}$",
      "$\\frac{176}{15}$",
      "$13$",
      "$\\frac{176}{13}$",
      "$\\frac{240}{13}$",
    ],
    answerIndex: 3,
    explanation:
      "The chain starts with the law of cosines in $\\triangle ABD$: $BD^2 = 15^2 + 8^2 - 2 \\cdot 15 \\cdot 8 \\cos 60^\\circ = 225 + 64 - 120 = 169$, so $BD = 13$. Because $ABCD$ is cyclic, $\\angle BCD = 180^\\circ - 60^\\circ = 120^\\circ$, and the law of cosines in $\\triangle BCD$ gives $169 = BC^2 + 64 + 8 \\cdot BC$, which factors as $(BC + 15)(BC - 7) = 0$, so $BC = 7$. Ptolemy's theorem then yields $AC \\cdot BD = AB \\cdot CD + BC \\cdot AD = 15 \\cdot 8 + 7 \\cdot 8 = 176$, so $AC = \\frac{176}{13}$. The tempting answer $13$ comes from pairing the wrong sides in Ptolemy's theorem ($AB \\cdot BC + AD \\cdot CD = 169$), which falsely suggests the diagonals are equal.",
    source: SOURCE,
  },
  {
    // self-referential subset condition
    id: "a12s01-q15",
    topic: "counting",
    difficulty: "medium",
    stem: "Let $S = \\{1, 2, \\ldots, 12\\}$. A nonempty subset $B$ of $S$ is called $\\textit{balanced}$ if the number of elements of $B$ is exactly one more than the least element of $B$. (For example, $B = \\{2, 5, 9\\}$ is balanced because it has $3$ elements and its least element is $2$.) How many balanced subsets of $S$ are there?",
    choices: ["$143$", "$144$", "$211$", "$231$", "$232$"],
    answerIndex: 4,
    explanation:
      "The key move is to classify by the least element: if $\\min(B) = m$, then $B$ must have $m + 1$ elements, so the other $m$ elements are chosen freely from $\\{m+1, \\ldots, 12\\}$, giving $\\binom{12-m}{m}$ subsets. Summing over $m = 1$ to $6$ (for $m \\ge 7$ the binomial is zero) gives $\\binom{11}{1} + \\binom{10}{2} + \\binom{9}{3} + \\binom{8}{4} + \\binom{7}{5} + \\binom{6}{6} = 11 + 45 + 84 + 70 + 21 + 1 = 232$. The tempting answer $231$ omits the single subset $\\{6, 7, 8, 9, 10, 11, 12\\}$ from the easily forgotten $m = 6$ family, while $144$ comes from misreading the condition as size equal to the least element itself.",
    source: SOURCE,
  },
  {
    // conjugate power equation root count
    id: "a12s01-q16",
    topic: "precalculus",
    difficulty: "medium",
    stem: "Let $\\overline{z}$ denote the complex conjugate of the complex number $z$. How many complex numbers $z$ satisfy the equation $z^6 = -\\overline{z}$?",
    choices: ["$2$", "$6$", "$7$", "$8$", "$9$"],
    answerIndex: 3,
    explanation:
      "Taking the modulus of both sides gives $|z|^6 = |z|$, so $|z| = 0$ or $|z| = 1$. The case $|z| = 0$ gives the solution $z = 0$. If $|z| = 1$, multiply both sides by $z$: the left side becomes $z^7$ and the right side becomes $-z\\overline{z} = -|z|^2 = -1$, so $z^7 = -1$, which has exactly $7$ solutions on the unit circle, and each one satisfies the original equation since $\\overline{z} = 1/z$ there. In total there are $7 + 1 = 8$ solutions. The tempting answer $7$ counts only the roots of $z^7 = -1$ and forgets the solution $z = 0$.",
    source: SOURCE,
  },
  {
    // random coefficients through a Vieta filter
    id: "a12s01-q17",
    topic: "probability",
    difficulty: "medium",
    stem: "Integers $b$ and $c$ are chosen independently and uniformly at random from the integers from $-5$ to $5$, inclusive. What is the probability that the polynomial $x^2 + bx + c$ has two distinct integer roots?",
    choices: [
      "$\\frac{16}{121}$",
      "$\\frac{26}{121}$",
      "$\\frac{28}{121}$",
      "$\\frac{31}{121}$",
      "$\\frac{13}{50}$",
    ],
    answerIndex: 1,
    explanation:
      "By Vieta, distinct integer roots $p \\neq q$ correspond bijectively to pairs $(b, c) = (-(p+q), pq)$, so we count unordered pairs of distinct integers with $|p + q| \\le 5$ and $|pq| \\le 5$. Pairs containing $0$: $\\{0, q\\}$ for $q = \\pm 1, \\ldots, \\pm 5$ gives $10$ pairs. Nonzero pairs must involve small factors; checking products $\\pm 2, \\pm 3, \\pm 4, \\pm 5$ and $-1$ yields exactly $16$ pairs, such as $\\{1, 4\\}$ and $\\{2, -2\\}$, after discarding $\\{1, 5\\}$ and $\\{-1, -5\\}$, whose products are in range but whose sums have absolute value $6$. The total is $\\frac{10 + 16}{11^2} = \\frac{26}{121}$. The tempting answer $\\frac{28}{121}$ keeps the near-miss pairs $\\{1, 5\\}$ and $\\{-1, -5\\}$, forgetting that they force $b = \\mp 6$ outside the drawing range.",
    source: SOURCE,
  },
  {
    // universal-exponent residue collapse
    id: "a12s01-q18",
    topic: "number-theory",
    difficulty: "medium",
    stem: "For each positive integer $n$, let $r(n)$ be the remainder when $n^{2026}$ is divided by $24$. How many distinct values does $r(n)$ take as $n$ ranges over all positive integers?",
    choices: ["$1$", "$3$", "$4$", "$8$", "$24$"],
    answerIndex: 2,
    explanation:
      "The collapse comes from working modulo $8$ and modulo $3$ separately: every odd square is $1 \\pmod 8$, so for odd $n$, $n^{2026} = (n^2)^{1013} \\equiv 1 \\pmod 8$, while for even $n$ the power $2^{2026}$ makes $n^{2026} \\equiv 0 \\pmod 8$. Similarly $n^{2026} \\equiv 1 \\pmod 3$ when $3 \\nmid n$ and $\\equiv 0 \\pmod 3$ otherwise. All four combinations occur (take $n = 1, 2, 3, 6$), and by the Chinese remainder theorem they give the remainders $1$, $16$, $9$, and $0$ modulo $24$. So exactly $4$ distinct remainders occur. The tempting answer $8$ is $\\varphi(24)$, which counts the units modulo $24$ rather than the distinct values of the collapsed powers.",
    source: SOURCE,
  },
  {
    // four vertex distances to an isosceles trapezoid
    id: "a12s01-q19",
    topic: "geometry",
    difficulty: "medium",
    stem: "Isosceles trapezoid $ABCD$ has $\\overline{AD} \\parallel \\overline{BC}$ and $AB = CD$. A point $P$ in the plane of the trapezoid satisfies $PA = 8$, $PB = 4$, $PC = 2$, and $PD = 6$. What is the ratio $\\tfrac{BC}{AD}$?",
    choices: ["$\\frac{3}{7}$", "$\\frac{1}{2}$", "$\\frac{5}{7}$", "$1$", "$\\frac{7}{3}$"],
    answerIndex: 0,
    explanation:
      "Place the axis of symmetry on the $y$-axis, so $A = (-a, 0)$, $D = (a, 0)$, $B = (-c, h)$, $C = (c, h)$ with $AD = 2a$ and $BC = 2c$, and let $P = (x, y)$. The insight is that squared-distance differences kill every unknown except the horizontal offset: $PA^2 - PD^2 = (x+a)^2 - (x-a)^2 = 4ax$ and $PB^2 - PC^2 = (x+c)^2 - (x-c)^2 = 4cx$. With the given distances, $PA^2 - PD^2 = 64 - 36 = 28$ and $PB^2 - PC^2 = 16 - 4 = 12$, so $\\tfrac{BC}{AD} = \\tfrac{c}{a} = \\tfrac{12}{28} = \\tfrac{3}{7}$. The tempting answer $\\tfrac{7}{3}$ comes from inverting the ratio by attaching the larger difference to the shorter side.",
    source: SOURCE,
  },
  {
    // recurrence closed form plus bounded-tail aggregate
    id: "a12s01-q20",
    topic: "algebra",
    difficulty: "medium",
    stem: "A sequence is defined by $a_1 = \\tfrac{5}{2}$ and $a_{n+1} = \\tfrac{a_n}{2} + n + 2$ for all positive integers $n$. What is the greatest integer less than or equal to $a_1 + a_2 + \\cdots + a_{20}$?",
    choices: ["$419$", "$420$", "$421$", "$422$", "$423$"],
    answerIndex: 1,
    explanation:
      "The reframe is to guess the closed form $a_n = 2n + 2^{-n}$, which matches $a_1 = \\tfrac{5}{2}$ and is verified by induction: $\\tfrac{2n + 2^{-n}}{2} + n + 2 = 2(n+1) + 2^{-(n+1)}$. The sum splits as $\\sum_{n=1}^{20} 2n + \\sum_{n=1}^{20} 2^{-n} = 2 \\cdot 210 + \\left(1 - 2^{-20}\\right) = 421 - 2^{-20}$. Since the geometric tail falls just short of $1$, the sum lies strictly between $420$ and $421$, so the answer is $420$. The tempting answer $421$ treats the geometric series as summing to exactly $1$ and misses that $421 - 2^{-20}$ is strictly less than $421$.",
    source: SOURCE,
  },
  {
    // cyclotomic factor detection in a sparse giant polynomial
    id: "a12s01-q21",
    topic: "precalculus",
    difficulty: "hard",
    stem: "Which of the following polynomials is a factor of $x^{2026} + x^{1019} + 1$?",
    choices: ["$x - 1$", "$x + 1$", "$x^2 + 1$", "$x^2 + x + 1$", "$x^2 - x + 1$"],
    answerIndex: 3,
    explanation:
      "The key is to test each candidate by substituting one of its roots and reducing the giant exponents modulo the multiplicative order of that root. For $x^2 + x + 1$, a root $\\omega$ satisfies $\\omega^3 = 1$ and $\\omega^2 + \\omega + 1 = 0$; since $2026 \\equiv 1$ and $1019 \\equiv 2 \\pmod{3}$, the value is $\\omega^{2026} + \\omega^{1019} + 1 = \\omega + \\omega^2 + 1 = 0$, so $x^2 + x + 1$ is a factor. Every other candidate survives its root test: $x = 1$ gives $3$, $x = -1$ gives $1 - 1 + 1 = 1$, $x = i$ gives $-1 - i + 1 = -i$ (as $2026 \\equiv 2$ and $1019 \\equiv 3 \\pmod{4}$), and a root $\\zeta$ of $x^2 - x + 1$, a primitive sixth root of unity with $\\zeta^3 = -1$, gives $\\zeta^{4} + \\zeta^{5} + 1 = 2 - 2\\zeta \\neq 0$. The tempting choice $x^2 - x + 1$ comes from treating $\\zeta$ as a primitive cube root of unity, using $\\zeta^3 = 1$ and $\\zeta^2 + \\zeta + 1 = 0$, which falsely collapses the test value to $0$.",
    source: SOURCE,
  },
  {
    // lcm/gcd exponent system solved prime by prime
    id: "a12s01-q22",
    topic: "number-theory",
    difficulty: "hard",
    stem: "Positive integers $a$, $b$, and $c$ satisfy $\\operatorname{lcm}(a,b) = 360$, $\\operatorname{lcm}(b,c) = 72$, $\\operatorname{lcm}(a,c) = 60$, and $abc = 51{,}840$. What is $\\gcd(a,b,c)$?",
    choices: ["$6$", "$12$", "$24$", "$36$", "$72$"],
    answerIndex: 1,
    explanation:
      "Work one prime at a time: for each prime, the three lcm conditions become max conditions on the exponents in $a$, $b$, $c$, and the product becomes a sum condition, using $51{,}840 = 2^7 \\cdot 3^4 \\cdot 5$. For the prime $2$: $\\operatorname{lcm}(a,c) = 60 = 2^2 \\cdot 3 \\cdot 5$ caps the $2$-exponents of $a$ and $c$ at $2$, so $b$ must carry the $2^3$ appearing in $360$ and $72$, and then the exponent sum $7$ forces $a$ and $c$ to have exponent exactly $2$ each. Identical reasoning gives $3$-exponents $(1,2,1)$ and $5$-exponents $(1,0,0)$, so $(a,b,c) = (60, 72, 12)$, which checks against all four conditions. Therefore $\\gcd(a,b,c) = 2^2 \\cdot 3 = 12$. The tempting answer $36$ keeps $b$'s factor $3^2$ in the gcd, taking the maximum rather than the minimum exponent of $3$.",
    source: SOURCE,
  },
  {
    // angle-relation Diophantine triangle search
    id: "a12s01-q23",
    topic: "geometry",
    difficulty: "hard",
    stem: "A triangle has integer side lengths, one of its interior angles is exactly twice another of its interior angles, and the triangle is obtuse. What is the least possible perimeter of such a triangle?",
    choices: ["$12$", "$15$", "$28$", "$40$", "$45$"],
    answerIndex: 2,
    explanation:
      "Let the doubled pair of angles be $\\theta$ and $2\\theta$ with opposite sides $a$ and $b$ and third side $c$; the double-angle relation is equivalent to $b^2 = a(a+c)$, with $\\cos\\theta = \\frac{b}{2a}$. Writing $d = \\gcd(a, a+c)$ makes $a(a+c)$ a square of coprime parts, so every solution is $(a,b,c) = d\\,(k^2,\\; km,\\; m^2 - k^2)$ with $k < m < 2k$ and $\\cos\\theta = \\frac{m}{2k}$. The smallest solution $(k,m) = (2,3)$ is the triangle $(4,6,5)$, but there $\\cos 2\\theta = 2\\cdot\\frac{9}{16} - 1 = \\frac{1}{8} > 0$ and all three angles are acute, so the obtuseness filter eliminates it; the next primitive $(k,m) = (3,4)$ gives $(9,12,7)$, where $\\cos\\theta = \\frac{2}{3}$ and $\\cos 2\\theta = -\\frac{1}{9} < 0$, an obtuse triangle of perimeter $28$. Nothing smaller works: multiples of $(4,6,5)$ are similar and hence acute, and every other primitive family has perimeter above $28$. The distractor $15$ is the perimeter of the well-known $(4,5,6)$ double-angle triangle, chosen by solvers who never check that it is acute.",
    source: SOURCE,
  },
  {
    // dominance-condition string counting
    id: "a12s01-q24",
    topic: "counting",
    difficulty: "hard",
    stem: "Let $N$ be the number of sequences $(a_1, a_2, \\ldots, a_7)$ of (not necessarily distinct) integers from $\\{1, 2, \\ldots, 7\\}$ such that for every integer $j$ with $1 \\le j \\le 7$, at least $j$ of the terms are less than or equal to $j$. (For example, $(2,1,1,5,3,7,4)$ satisfies the condition, but $(1,4,4,4,5,6,7)$ does not, because only one of its terms is less than or equal to $2$.) What is the units digit of $N$?",
    choices: ["$0$", "$2$", "$4$", "$6$", "$8$"],
    answerIndex: 2,
    explanation:
      "The collapse is a circular symmetry argument: enlarge the alphabet to $\\{1, \\ldots, 8\\}$ and place $8$ spots on a circle, letting driver $i$ park at the first free spot at or after spot $a_i$, wrapping around. Every one of the $8^7$ enlarged sequences fills all but exactly one spot, rotational symmetry makes each spot the empty one equally often, and the sequences that leave spot $8$ empty are precisely those using only $\\{1, \\ldots, 7\\}$ and satisfying the dominance condition. Hence $N = \\frac{8^7}{8} = 8^6 = 262{,}144$. Units digits of powers of $8$ cycle $8, 4, 2, 6$ with period $4$, and $6 \\equiv 2 \\pmod{4}$, so $8^6$ ends in $4$. The tempting answer $2$ is the units digit of $8^7$, reached by forgetting to divide out the $8$-fold rotational symmetry.",
    source: SOURCE,
  },
  {
    // empirical independence meta-probability
    id: "a12s01-q25",
    topic: "probability",
    difficulty: "hard",
    stem: "Each of $4$ distinct tokens is independently painted gold with probability $\\frac{1}{2}$ (otherwise silver), and each token is also independently stamped with probability $\\frac{1}{2}$ (otherwise unstamped). Once the batch is realized, one of the $4$ tokens is to be drawn uniformly at random; for this draw, let $A$ be the event that the drawn token is gold, and let $B$ be the event that the drawn token is stamped. (Recall that events $A$ and $B$ are independent if $P(A \\cap B) = P(A) \\cdot P(B)$, where $A \\cap B$ is the event that both occur.) The probability, taken over the painting and stamping, that $A$ and $B$ are independent for the realized batch can be written as $\\frac{m}{n}$, where $m$ and $n$ are relatively prime positive integers. What is $m$?",
    choices: ["$13$", "$15$", "$17$", "$19$", "$21$"],
    answerIndex: 4,
    explanation:
      "For a realized batch let $g$, $s$, and $t$ count the gold tokens, the stamped tokens, and the tokens that are both; independence for the uniform draw means $\\frac{t}{4} = \\frac{g}{4} \\cdot \\frac{s}{4}$, that is, $4t = gs$. The hidden branch is the vacuous one: whenever $g \\in \\{0,4\\}$ or $s \\in \\{0,4\\}$ the relation holds automatically, and inclusion-exclusion over these four boundary families gives $4 \\cdot 2^4 - 4 = 60$ of the $4^4 = 256$ equally likely batches. Otherwise $g, s \\in \\{1,2,3\\}$, and $4 \\mid gs$ forces $g = s = 2$ with $t = 1$, contributing $\\frac{4!}{1!\\,1!\\,1!\\,1!} = 24$ batches (one token of each gold-stamp type). The probability is therefore $\\frac{60 + 24}{256} = \\frac{84}{256} = \\frac{21}{64}$, so $m = 21$. The distractor $15$ comes from counting only the vacuous boundary batches, $\\frac{60}{256} = \\frac{15}{64}$, and missing the balanced $g = s = 2$ family.",
    source: SOURCE,
  },
];
