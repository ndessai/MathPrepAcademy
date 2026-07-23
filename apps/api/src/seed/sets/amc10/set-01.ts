import type { Question } from "@mathprep/core";

const SOURCE = "MathPrep original (AMC 10 style)";

export const AMC10_SET_01_QUESTIONS: Question[] = [
  {
    // Collapsing near-identical products identity
    id: "a10s01-q01",
    topic: "arithmetic",
    difficulty: "easy",
    stem: "What is the value of $40404 \\cdot 2026 - 20202 \\cdot 4051$?",
    choices: ["$2026$", "$20202$", "$40404$", "$202020$", "$2020200$"],
    answerIndex: 1,
    explanation:
      "The key observation is that $40404 = 2 \\cdot 20202$, so the first product can be rewritten with the same factor as the second: $40404 \\cdot 2026 = 20202 \\cdot 4052$. The expression collapses to $20202 \\cdot 4052 - 20202 \\cdot 4051 = 20202 \\cdot (4052 - 4051) = 20202 \\cdot 1$. Hence the value is $20202$, with no long multiplication needed. The tempting answer $202020$ comes from a place-value slip that tacks an extra zero onto the collapsed factor.",
    source: SOURCE,
  },
  {
    // Two travelers meet between cities
    id: "a10s01-q02",
    topic: "algebra",
    difficulty: "easy",
    stem: "The towns of Ashford and Brookdale are $84$ miles apart along a straight road. Mara leaves Ashford riding toward Brookdale at a constant $15$ miles per hour, and at the same moment Jonas leaves Brookdale riding toward Ashford at a constant $13$ miles per hour. How many miles from Ashford are they when they meet?",
    choices: ["$30$", "$39$", "$42$", "$45$", "$60$"],
    answerIndex: 3,
    explanation:
      "Because both riders travel for the same amount of time, the meeting point splits the $84$ miles in the ratio of their speeds, $15 : 13$. Their combined speed is $15 + 13 = 28$ miles per hour, so they meet after $84 \\div 28 = 3$ hours. In $3$ hours Mara covers $15 \\cdot 3 = 45$ miles, so the meeting point is $45$ miles from Ashford. The tempting answer $39$ is Jonas's distance $13 \\cdot 3$ \u2014 the ratio applied to the wrong rider.",
    source: SOURCE,
  },
  {
    // Reverse percent chain with budget boundary
    id: "a10s01-q03",
    topic: "arithmetic",
    difficulty: "easy",
    stem: "Elena has $\\$42$ to spend at a store where every jacket is on sale for $20\\%$ off its sticker price, and a $5\\%$ sales tax is then added to the discounted price. Sticker prices are whole numbers of dollars. What is the greatest sticker price of a jacket that Elena can afford?",
    choices: ["$46$", "$47$", "$48$", "$49$", "$50$"],
    answerIndex: 4,
    explanation:
      "The two percent changes compose into a single factor: paying $80\\%$ of the sticker price and then $105\\%$ of that means Elena pays $0.8 \\times 1.05 = 0.84$ times the sticker price. She needs $0.84p \\le 42$, so $p \\le 42 \\div 0.84 = 50$. A jacket with sticker price $\\$50$ costs $0.84 \\cdot 50 = \\$42$ exactly, which she can just afford, so the answer is $50$. The tempting answer $49$ comes from adding the percents to get a net $15\\%$ decrease, since $0.85 \\cdot 50 = 42.5$ exceeds the budget under that faulty model.",
    source: SOURCE,
  },
  {
    // Units digit of a power sum via cycles
    id: "a10s01-q04",
    topic: "number-theory",
    difficulty: "easy",
    stem: "What is the units digit of $3^{2026} + 5^{2026} + 6^{2026}$?",
    choices: ["$0$", "$2$", "$4$", "$6$", "$8$"],
    answerIndex: 0,
    explanation:
      "Units digits of powers repeat with period dividing $4$, so reduce the exponent: $2026 = 4 \\cdot 506 + 2$, meaning each base behaves like its second power. The units digits of powers of $3$ cycle $3, 9, 7, 1$, so $3^{2026}$ ends in $9$; every positive power of $5$ ends in $5$; every positive power of $6$ ends in $6$. The sum of the units digits is $9 + 5 + 6 = 20$, whose units digit is $0$. The tempting answer $4$ comes from mis-reducing the exponent to $1$ and adding $3 + 5 + 6 = 14$.",
    source: SOURCE,
  },
  {
    // Three-unknown verbal linear system, derived-quantity ask
    id: "a10s01-q05",
    topic: "algebra",
    difficulty: "easy",
    stem: "Priya, Quinn, and Rosa collected a total of $65$ seashells. Priya collected $5$ more seashells than Quinn, and Rosa collected twice as many seashells as Quinn. How many seashells did Priya and Rosa collect combined?",
    choices: ["$30$", "$35$", "$45$", "$50$", "$65$"],
    answerIndex: 3,
    explanation:
      "Everything is expressible in terms of Quinn's count $q$: Priya has $q + 5$ and Rosa has $2q$, so $(q+5) + q + 2q = 65$ gives $4q = 60$ and $q = 15$. Then Priya collected $20$ and Rosa collected $30$, so together they collected $20 + 30 = 50$ seashells. The tempting answer $65$ is the grand total of all three collectors \u2014 the trap for solvers who do not reread which pair the question asks about.",
    source: SOURCE,
  },
  {
    // Hypotenuse-as-diameter circle ratio (Thales)
    id: "a10s01-q06",
    topic: "geometry",
    difficulty: "easy",
    stem: "A right triangle with legs of length $7$ and $24$ and hypotenuse of length $25$ is inscribed in a circle, so that all three vertices lie on the circle. What is the ratio of the area of the triangle to the area of the circle?",
    choices: [
      "$\\frac{84}{625\\pi}$",
      "$\\frac{168}{625\\pi}$",
      "$\\frac{336}{625\\pi}$",
      "$\\frac{7}{12\\pi}$",
      "$\\frac{336}{49\\pi}$",
    ],
    answerIndex: 2,
    explanation:
      "Since an inscribed right angle must subtend a diameter, the hypotenuse of length $25$ is a diameter of the circle, so the radius is $\\frac{25}{2}$. The triangle has area $\\frac{1}{2} \\cdot 7 \\cdot 24 = 84$, and the circle has area $\\pi \\left(\\frac{25}{2}\\right)^2 = \\frac{625\\pi}{4}$. The ratio is $84 \\div \\frac{625\\pi}{4} = \\frac{336}{625\\pi}$. The tempting answer $\\frac{84}{625\\pi}$ comes from treating the full hypotenuse $25$ as the radius instead of the diameter.",
    source: SOURCE,
  },
  {
    // Recover n from simultaneous lcm and gcd constraints
    id: "a10s01-q07",
    topic: "number-theory",
    difficulty: "easy",
    stem: "Let $n$ be a positive integer such that the least common multiple of $n$ and $12$ is $60$ and the least common multiple of $n$ and $50$ is $300$. What is $n$?",
    choices: ["$20$", "$30$", "$60$", "$150$", "$300$"],
    answerIndex: 2,
    explanation:
      "Work prime by prime, since each lcm takes the larger exponent of each prime. From $\\mathrm{lcm}(n, 12) = 60 = 2^2 \\cdot 3 \\cdot 5$ with $12 = 2^2 \\cdot 3$: the power of $2$ in $n$ is at most $2$, the power of $3$ is at most $1$, and $n$ must supply the factor $5$ exactly once. From $\\mathrm{lcm}(n, 50) = 300 = 2^2 \\cdot 3 \\cdot 5^2$ with $50 = 2 \\cdot 5^2$: $n$ must supply $2^2$ and the factor $3$ exactly. Combining, $n = 2^2 \\cdot 3 \\cdot 5 = 60$, and indeed $\\mathrm{lcm}(60, 12) = 60$ and $\\mathrm{lcm}(60, 50) = 300$. The tempting answer $30$ satisfies only the first condition, since $\\mathrm{lcm}(30, 50) = 150$, not $300$.",
    source: SOURCE,
  },
  {
    // Mean shifts under hypothetical future scores
    id: "a10s01-q08",
    topic: "data-analysis",
    difficulty: "easy",
    stem: "Nadia has taken several quizzes this term, each scored out of $100$. If she scores $90$ on tomorrow's quiz, the mean of all her scores will be $85$. If instead she scores $60$ on tomorrow's quiz, the mean of all her scores will be $80$. What is the mean of the quizzes she has taken so far?",
    choices: ["$70$", "$80$", "$84$", "$85$", "$90$"],
    answerIndex: 2,
    explanation:
      "Let $n$ be the number of quizzes taken so far and $T$ their total; then $T + 90 = 85(n+1)$ and $T + 60 = 80(n+1)$. Subtracting the equations eliminates $T$: $30 = 5(n+1)$, so $n + 1 = 6$ and $n = 5$. Then $T = 85 \\cdot 6 - 90 = 420$, so her current mean is $420 \\div 5 = 84$. The tempting answer $85$ is the hypothetical future mean from the first scenario, not the mean of the quizzes already taken.",
    source: SOURCE,
  },
  {
    // Unlabeled balanced-team partition
    id: "a10s01-q09",
    topic: "counting",
    difficulty: "easy",
    stem: "Six students are to be split into three teams of two students each for a class project. The teams are not labeled and are not distinguished from one another in any way. Two of the students, Ana and Boris, refuse to be on the same team. In how many ways can the six students be split into teams?",
    choices: ["$12$", "$15$", "$24$", "$72$", "$90$"],
    answerIndex: 0,
    explanation:
      "Build the pairing person by person, which automatically avoids counting team labels: Ana must be paired with one of the $4$ students other than Boris. The remaining $4$ students then form two pairs, and fixing one of them, that student has $3$ possible partners, after which the last pair is forced. This gives $4 \\cdot 3 = 12$ valid splits. As a check, there are $5 \\cdot 3 \\cdot 1 = 15$ pairings in all, and exactly $3$ of them pair Ana with Boris, leaving $15 - 3 = 12$. The tempting answer $72$ counts assignments to three labeled teams, forgetting to divide by the $3! = 6$ orderings of the identical teams.",
    source: SOURCE,
  },
  {
    // Staggered work-rate with unknown join time
    id: "a10s01-q10",
    topic: "algebra",
    difficulty: "easy",
    stem: "Printer P prints $40$ pages per minute and printer Q prints $25$ pages per minute, each at a constant rate. Printer P begins a $2200$-page job alone at $1{:}00$ PM. At some later time printer Q joins in, both printers run without stopping, and the job is finished at exactly $1{:}40$ PM. At what time did printer Q join?",
    choices: [
      "$1{:}10\\text{ PM}$",
      "$1{:}16\\text{ PM}$",
      "$1{:}20\\text{ PM}$",
      "$1{:}24\\text{ PM}$",
      "$1{:}25\\text{ PM}$",
    ],
    answerIndex: 1,
    explanation:
      "Printer P runs for the entire $40$ minutes, printing $40 \\cdot 40 = 1600$ pages, so printer Q must print the remaining $2200 - 1600 = 600$ pages. At $25$ pages per minute, Q works for $600 \\div 25 = 24$ minutes, and since Q runs until the $1{:}40$ PM finish, it joined at $1{:}40$ PM minus $24$ minutes, which is $1{:}16$ PM. The tempting answer $1{:}24$ PM comes from adding Q's $24$ working minutes to the start time instead of counting them back from the finish time.",
    source: SOURCE,
  },
  {
    // Bounded coin/bill Diophantine with parity filter
    id: "a10s01-q11",
    topic: "counting",
    difficulty: "medium",
    stem: "Nadia buys a puzzle that costs exactly $100$ credits. She pays with tokens worth $2$ credits, $5$ credits, and $10$ credits, using at least one token of each value. Two payments are considered the same if they use the same number of tokens of each value. In how many ways can she pay?",
    choices: ["$28$", "$36$", "$45$", "$55$", "$66$"],
    answerIndex: 1,
    explanation:
      "Since $2a$ and $10c$ are even and $100$ is even, the number $b$ of $5$-credit tokens must be even, so $b = 2B$ with $B \\ge 1$, and $2a + 5b + 10c = 100$ becomes $a + 5B + 5c = 50$, so $a = 50 - 5(B+c)$. Every choice of integers $B, c \\ge 1$ with $B + c \\le 9$ gives a valid payment, since then $a \\ge 5$. For each sum $s = B + c$ from $2$ to $9$ there are $s-1$ pairs, so the total is $1 + 2 + \\cdots + 8 = 36$. The answer $45$ comes from allowing $B + c = 10$, which forces $a = 0$ and violates the at-least-one-of-each condition.",
    source: SOURCE,
  },
  {
    // Truth-teller / liar / alternater yes-count census
    id: "a10s01-q12",
    topic: "logic",
    difficulty: "medium",
    stem: "Each of the $40$ inhabitants of an island is exactly one of three types: a truth-teller, who answers every question truthfully; a liar, who answers every question falsely; or a $\\textit{switcher}$, who answers the first question asked of them truthfully and thereafter alternates, answering the second question falsely, the third truthfully, and so on. A visitor asks every inhabitant the same three yes-or-no questions in the same order. The correct answer to the first question is yes, and the correct answer to each of the other two questions is no. Exactly $30$ inhabitants answer yes to the first question, exactly $24$ answer yes to the second, and exactly $10$ answer yes to the third. How many inhabitants are switchers?",
    choices: ["$6$", "$10$", "$14$", "$16$", "$40$"],
    answerIndex: 2,
    explanation:
      "Work out each type's yes-profile: on question 1 (true answer yes) truth-tellers and switchers say yes; on question 2 (true answer no) liars and switchers, who are now lying, say yes; on question 3 (true answer no) liars say yes while switchers, truthful again, say no. Writing $T$, $L$, $S$ for the group sizes gives $T + S = 30$, $L + S = 24$, and $L = 10$. Then $S = 24 - 10 = 14$ and $T = 30 - 14 = 16$, consistent with $T + L + S = 40$. The answer $10$ is the number of liars, not the number of switchers that the question asks for.",
    source: SOURCE,
  },
  {
    // Maximize a distance under a fixed viewing angle
    id: "a10s01-q13",
    topic: "geometry",
    difficulty: "medium",
    stem: "Points $A$ and $B$ lie in the plane with $AB = 6$, and $P$ is a point in the plane for which $\\angle APB = 60^\\circ$. What is the greatest possible length of $\\overline{PA}$?",
    choices: ["$2\\sqrt{3}$", "$3\\sqrt{3}$", "$6$", "$4\\sqrt{3}$", "$6\\sqrt{3}$"],
    answerIndex: 3,
    explanation:
      "By the extended law of sines in triangle $APB$, the circumdiameter is $\\frac{AB}{\\sin \\angle APB} = \\frac{6}{\\sin 60^\\circ} = 4\\sqrt{3}$, so $P$ lies on a fixed circle through $A$ and $B$ whose diameter is $4\\sqrt{3}$. Since $PA$ is a chord of this circle, $PA \\le 4\\sqrt{3}$. Equality is achieved: the point diametrically opposite $A$ lies on the major arc of $\\overline{AB}$, where the inscribed angle is still $60^\\circ$, so $PA = 4\\sqrt{3}$ occurs. The answer $6$ comes from assuming the maximum occurs at the symmetric position where triangle $APB$ is equilateral, but sliding $P$ along the arc makes $PA$ longer.",
    source: SOURCE,
  },
  {
    // Two-stage random choice: number, then divisor
    id: "a10s01-q14",
    topic: "probability",
    difficulty: "medium",
    stem: "An integer $N$ is chosen uniformly at random from $1$ to $20$, inclusive. Then a divisor $d$ is chosen uniformly at random from the positive divisors of $N$. What is the probability that $d^2 > N$?",
    choices: [
      "$\\frac{34}{75}$",
      "$\\frac{7}{15}$",
      "$\\frac{1}{2}$",
      "$\\frac{41}{75}$",
      "$\\frac{4}{5}$",
    ],
    answerIndex: 0,
    explanation:
      "For each nonsquare $N$ the divisors pair up as $d \\leftrightarrow N/d$ with exactly one member of each pair satisfying $d^2 > N$, so each of the $16$ nonsquare values contributes conditional probability exactly $\\tfrac{1}{2}$. The four squares must be handled separately: $N = 1$ contributes $0$, while $N = 4$ and $N = 9$ each contribute $\\tfrac{1}{3}$ (only the divisors $4$ and $9$ work) and $N = 16$ contributes $\\tfrac{2}{5}$ (divisors $8$ and $16$). The total is $\\tfrac{1}{20}\\left(16 \\cdot \\tfrac{1}{2} + 0 + \\tfrac{1}{3} + \\tfrac{1}{3} + \\tfrac{2}{5}\\right) = \\tfrac{1}{20} \\cdot \\tfrac{136}{15} = \\tfrac{34}{75}$. The answer $\\tfrac{1}{2}$ ignores the perfect squares, where the pairing argument breaks down because $\\sqrt{N}$ pairs with itself.",
    source: SOURCE,
  },
  {
    // Repeating-decimal / digit-constraint Diophantine enumeration
    id: "a10s01-q15",
    topic: "number-theory",
    difficulty: "medium",
    stem: "For how many ordered triples $(a, b, c)$ of nonzero digits does the repeating decimal $0.\\overline{abc}$ (the decimal $0.abcabc\\ldots$ whose repeating block consists of the digits $a$, $b$, $c$) satisfy $0.\\overline{abc} = \\frac{a+b+c}{27}$?",
    choices: ["$9$", "$11$", "$12$", "$13$", "$14$"],
    answerIndex: 3,
    explanation:
      "Since $0.\\overline{abc} = \\frac{100a + 10b + c}{999}$ and $999 = 27 \\cdot 37$, the equation becomes $100a + 10b + c = 37(a + b + c)$, which simplifies to $7a = 3b + 4c$. Reducing modulo $7$ gives $3b + 4c \\equiv 0 \\pmod{7}$, which is equivalent to $b \\equiv c \\pmod{7}$. If $b = c$, then $a = c$, giving the $9$ triples with $a = b = c$; otherwise $(b, c)$ is one of $(8,1), (9,2), (1,8), (2,9)$, giving $a = 4, 5, 5, 6$ respectively, all valid nonzero digits. The total is $9 + 4 = 13$; the answer $9$ comes from stopping at the obvious family $a = b = c$ and missing the four nontrivial solutions.",
    source: SOURCE,
  },
  {
    // Cyclic quadrilateral from two right triangles on a common hypotenuse
    id: "a10s01-q16",
    topic: "geometry",
    difficulty: "medium",
    stem: "Quadrilateral $ABCD$ is inscribed in a circle, with $AB = 15$, $BC = 20$, $CD = 7$, and $DA = 24$. The length of diagonal $\\overline{BD}$ can be written as $\\frac{m}{n}$, where $m$ and $n$ are relatively prime positive integers. What is $m + n$?",
    choices: ["$21$", "$122$", "$127$", "$493$", "$610$"],
    answerIndex: 1,
    explanation:
      "The key is that $15$-$20$-$25$ and $7$-$24$-$25$ are right triangles sharing the hypotenuse $25$, so taking $AC = 25$ makes $\\angle ABC = \\angle ADC = 90^\\circ$ and $\\overline{AC}$ a diameter; since a cyclic quadrilateral with given sides in order is unique, this is the configuration. Placing $A = (0,0)$ and $C = (25,0)$ gives $B = (9, 12)$ and $D = \\left(\\tfrac{576}{25}, -\\tfrac{168}{25}\\right)$, and computing the distance (or applying Ptolemy's theorem, $25 \\cdot BD = 15 \\cdot 7 + 20 \\cdot 24 = 585$) gives $BD = \\tfrac{117}{5}$. Since $\\gcd(117, 5) = 1$, the answer is $117 + 5 = 122$. The answer $610$ comes from failing to reduce $\\tfrac{585}{25}$ before adding numerator and denominator.",
    source: SOURCE,
  },
  {
    // Hybrid AP+GP sequence recovery with integrality filter
    id: "a10s01-q17",
    topic: "algebra",
    difficulty: "medium",
    stem: "Three positive integers form an increasing arithmetic progression. When $5$ is added to the smallest of the three integers and the other two are left unchanged, the resulting three numbers form a geometric progression. What is the least possible value of the largest of the three original integers?",
    choices: ["$15$", "$20$", "$30$", "$45$", "$80$"],
    answerIndex: 3,
    explanation:
      "Write the progression as $a - d$, $a$, $a + d$ with integers $d \\ge 1$; the geometric condition $a^2 = (a - d + 5)(a + d)$ expands to $5a = d^2 - 5d$, so $a = \\frac{d(d-5)}{5}$, which forces $5 \\mid d$. Writing $d = 5t$ gives $a = 5t(t-1)$: the case $t = 2$ produces $0, 10, 20$, which fails because $0$ is not a positive integer, while $t = 3$ produces $15, 30, 45$, and indeed $20, 30, 45$ is geometric with ratio $\\tfrac{3}{2}$. Larger $t$ only increases every term, so the least possible largest term is $45$. The answer $20$ comes from accepting the $t = 2$ branch without checking that all three original integers are positive.",
    source: SOURCE,
  },
  {
    // Base-b digit-polynomial divisibility count
    id: "a10s01-q18",
    topic: "number-theory",
    difficulty: "medium",
    stem: "Let $N$ be the number of integers $b$ with $2 \\le b \\le 2026$ for which the base-$b$ numeral $126_b$ (its digits $1$, $2$, and $6$ are given in base ten) represents an integer divisible by $7$. What is the sum of the digits of $N$?",
    choices: ["$11$", "$13$", "$18$", "$19$", "$20$"],
    answerIndex: 4,
    explanation:
      "The numeral $126_b$ equals $b^2 + 2b + 6 \\equiv b^2 - 5b + 6 = (b-2)(b-3) \\pmod{7}$, so it is divisible by $7$ exactly when $b \\equiv 2$ or $b \\equiv 3 \\pmod{7}$. A numeral is valid only when every digit is less than the base, so the digit $6$ requires $b \\ge 7$, which eliminates $b = 2$ and $b = 3$ themselves. In $[7, 2026]$, the class $b \\equiv 2 \\pmod 7$ is $9, 16, \\ldots, 2025$, containing $289$ values, and the class $b \\equiv 3 \\pmod 7$ is $10, 17, \\ldots, 2026$, also $289$ values, so $N = 578$ and the digit sum is $5 + 7 + 8 = 20$. The answer $13$ is the digit sum of $580$, obtained by forgetting that $b = 2$ and $b = 3$ are not legal bases for a numeral containing the digit $6$.",
    source: SOURCE,
  },
  {
    // Box diagonal from symmetric sums with a decoy datum
    id: "a10s01-q19",
    topic: "geometry",
    difficulty: "medium",
    stem: "The sum of the lengths of the $12$ edges of a rectangular box is $44$, the total surface area of the box is $72$, and the volume of the box is $36$. What is the length of an interior diagonal of the box?",
    choices: ["$7$", "$\\sqrt{85}$", "$\\sqrt{193}$", "$14$", "$49$"],
    answerIndex: 0,
    explanation:
      "Let the edge lengths be $a$, $b$, $c$: the givens say $4(a+b+c) = 44$ and $2(ab+bc+ca) = 72$, so $a + b + c = 11$. The diagonal is $\\sqrt{a^2+b^2+c^2} = \\sqrt{(a+b+c)^2 - 2(ab+bc+ca)} = \\sqrt{121 - 72} = \\sqrt{49} = 7$. The volume $36$ is never needed \u2014 recognizing it as an unused datum is part of the problem (the box is in fact $2 \\times 3 \\times 6$). The answer $\\sqrt{85}$ comes from subtracting only $ab+bc+ca = 36$, forgetting that the stated surface area already includes the factor of $2$.",
    source: SOURCE,
  },
  {
    // Monotone-digit census with an invented term
    id: "a10s01-q20",
    topic: "counting",
    difficulty: "medium",
    stem: "Call a positive integer with at least two digits $\\textit{uphill}$ if its digits are strictly increasing when read from left to right, and $\\textit{downhill}$ if its digits are strictly decreasing when read from left to right. (For example, $259$ is uphill and $9530$ is downhill.) How many more downhill positive integers are there than uphill positive integers?",
    choices: ["$0$", "$502$", "$511$", "$512$", "$1013$"],
    answerIndex: 2,
    explanation:
      "Downhill numbers correspond exactly to subsets of $\\{0, 1, \\ldots, 9\\}$ of size at least $2$, since arranging any such subset in decreasing order gives a valid numeral whose leading digit is automatically nonzero; this gives $2^{10} - 1 - 10 = 1013$ of them. An uphill number can never contain $0$, because $0$ would have to be its first digit, so uphill numbers correspond to subsets of $\\{1, \\ldots, 9\\}$ of size at least $2$, giving $2^9 - 1 - 9 = 502$. The difference is $1013 - 502 = 511$, which is exactly the count $2^9 - 1$ of downhill numbers ending in $0$. The answer $0$ comes from a false symmetry between the two families that ignores the special role of the digit $0$.",
    source: SOURCE,
  },
  {
    // Floor-function equation consistency count
    id: "a10s01-q21",
    topic: "algebra",
    difficulty: "hard",
    stem: "Let $\\lfloor x \\rfloor$ denote the greatest integer less than or equal to $x$. How many real numbers $x$ satisfy $9x^2 - 90\\lfloor x \\rfloor + 76 = 0$?",
    choices: ["$0$", "$3$", "$4$", "$5$", "$\\text{infinitely many}$"],
    answerIndex: 2,
    explanation:
      "The key move is to set $n = \\lfloor x \\rfloor$: the equation becomes $x^2 = \\frac{90n-76}{9}$, so each integer $n \\ge 1$ yields exactly one candidate $x = \\frac{\\sqrt{90n-76}}{3}$ (the negative root is impossible, since $90n - 76 \\ge 0$ forces $n \\ge 1$ while a negative $x$ needs $n \\le -1$). A candidate is a genuine solution only if it lands back in its own window, $n \\le x < n+1$, which after squaring reads $9n^2 \\le 90n - 76 < 9n^2 + 18n + 9$. The left inequality $9n^2 - 90n + 76 \\le 0$ holds exactly for $1 \\le n \\le 9$, and the right inequality $9n^2 - 72n + 85 > 0$ holds for $n = 1$ and for $n \\ge 7$. The surviving cases are $n = 1, 7, 8, 9$, giving $x = \\tfrac{\\sqrt{14}}{3}, \\tfrac{\\sqrt{554}}{3}, \\tfrac{\\sqrt{644}}{3}, \\tfrac{\\sqrt{734}}{3}$, so there are $4$ solutions. The tempting answer $\\text{infinitely many}$ comes from noting that every $n$ produces a candidate $x$ without ever testing whether that candidate falls back in $[n, n+1)$.",
    source: SOURCE,
  },
  {
    // Huge arrangement count, extract a prime-power valuation
    id: "a10s01-q22",
    topic: "counting",
    difficulty: "hard",
    stem: "Sixteen students are divided into four unlabeled study groups of four students each, and each group then designates one of its members as its leader. Let $N$ be the number of possible outcomes, where two outcomes are different exactly when the collection of groups differs or some group's leader differs. Suppose $N = 2^r \\cdot M$, where $r$ is a nonnegative integer and $M$ is an odd positive integer. What is $r$?",
    choices: ["$7$", "$8$", "$9$", "$10$", "$11$"],
    answerIndex: 1,
    explanation:
      "The count is $N = \\frac{16!}{(4!)^4 \\cdot 4!} \\cdot 4^4$: distribute the students into four labeled blocks of four in $\\frac{16!}{(4!)^4}$ ways, divide by $4!$ because the groups carry no labels, then choose a leader in $4$ ways per group. Now extract the power of $2$ by Legendre's formula: $v_2(16!) = 8 + 4 + 2 + 1 = 15$, while the denominator contributes $v_2\\big((4!)^4 \\cdot 4!\\big) = 4 \\cdot 3 + 3 = 15$ and the leader factor contributes $v_2(4^4) = 8$. Therefore $r = 15 - 15 + 8 = 8$, and since $16!/2^{15}$ is odd, the remaining factor $M$ is indeed odd. The most tempting wrong answer, $11$, is the valuation of the count that treats the four groups as labeled, forgetting to divide by $4!$.",
    source: SOURCE,
  },
  {
    // One number, two factorizations with prescribed gaps
    id: "a10s01-q23",
    topic: "number-theory",
    difficulty: "hard",
    stem: "There is a unique positive integer $N$ that can be written as the product of two positive integers that differ by $10$ and can also be written as the product of two positive integers that differ by $24$. What is the sum of the digits of $N$?",
    choices: ["$9$", "$11$", "$12$", "$16$", "$18$"],
    answerIndex: 4,
    explanation:
      "Write $N = x(x+10) = y(y+24)$ with $x, y$ positive integers and complete the square in each form: $N = (x+5)^2 - 25 = (y+12)^2 - 144$. Subtracting gives the difference of squares $(y+12)^2 - (x+5)^2 = 119 = 7 \\cdot 17$, so $\\big((y+12)-(x+5)\\big)\\big((y+12)+(x+5)\\big)$ must be $1 \\cdot 119$ or $7 \\cdot 17$. The pair $7 \\cdot 17$ forces $y + 12 = 12$ and $x + 5 = 5$, killing both variables at $0$, so only $1 \\cdot 119$ works: $y + 12 = 60$ and $x + 5 = 59$, giving $x = 54$, $y = 48$, and $N = 54 \\cdot 64 = 48 \\cdot 72 = 3456$. The sum of the digits is $3 + 4 + 5 + 6 = 18$. The tempting answer $11$ is the digit sum of the constant $119$ itself, reached by stopping at the difference-of-squares step instead of recovering $N$.",
    source: SOURCE,
  },
  {
    // Four distances from an interior point to trapezoid vertices
    id: "a10s01-q24",
    topic: "geometry",
    difficulty: "hard",
    stem: "Isosceles trapezoid $ABCD$ has $\\overline{BC} \\parallel \\overline{AD}$, $AB = CD$, and $BC < AD$. A point $P$ inside the trapezoid satisfies $PA = 11$, $PB = 8$, $PC = 6$, and $PD = 7$. The ratio $\\tfrac{BC}{AD}$ can be written as $\\tfrac{m}{n}$, where $m$ and $n$ are relatively prime positive integers. What is $m+n$?",
    choices: ["$3$", "$20$", "$23$", "$25$", "$100$"],
    answerIndex: 3,
    explanation:
      "The insight is that differences of squared distances eliminate every unknown coordinate: place the axis of symmetry on the $y$-axis, so $A = (-a, 0)$, $D = (a, 0)$, $B = (-b, h)$, $C = (b, h)$ with $AD = 2a$ and $BC = 2b$, and let $P = (p, q)$. Then $PA^2 - PD^2 = (p+a)^2 - (p-a)^2 = 4ap$ and $PB^2 - PC^2 = (p+b)^2 - (p-b)^2 = 4bp$, so $\\tfrac{BC}{AD} = \\tfrac{b}{a} = \\tfrac{PB^2 - PC^2}{PA^2 - PD^2}$ with no need to locate $P$. Substituting the given lengths, $\\tfrac{BC}{AD} = \\tfrac{64 - 36}{121 - 49} = \\tfrac{28}{72} = \\tfrac{7}{18}$, so $m + n = 7 + 18 = 25$. The tempting answer $100$ comes from extracting $28 + 72$ without first reducing the fraction $\\tfrac{28}{72}$ to lowest terms.",
    source: SOURCE,
  },
  {
    // Compare graph distances between random vertices of a solid
    id: "a10s01-q25",
    topic: "probability",
    difficulty: "hard",
    stem: "For vertices $A$ and $B$ of a cube, let $d(A,B)$ denote the least number of edges in a path from $A$ to $B$ that travels only along edges of the cube. (For example, if $A$ and $B$ are the endpoints of an edge, then $d(A,B) = 1$, and if $A$ and $B$ are opposite endpoints of a space diagonal, then $d(A,B) = 3$.) Vertices $Q$, $R$, and $S$ of the cube are chosen at random, with all ordered triples of distinct vertices equally likely. The probability that $d(Q,R) > d(R,S)$ can be written as $\\tfrac{m}{n}$, where $m$ and $n$ are relatively prime positive integers. What is $m+n$?",
    choices: ["$3$", "$9$", "$12$", "$19$", "$23$"],
    answerIndex: 3,
    explanation:
      "By the symmetry that swaps $Q$ and $S$, the events $d(Q,R) > d(R,S)$ and $d(Q,R) < d(R,S)$ are equally likely, so the whole problem reduces to computing the tie probability: $P(>) = \\tfrac{1 - P(=)}{2}$. From any fixed vertex $R$, the other $7$ vertices split by distance as $3$ at distance $1$, $3$ at distance $2$, and $1$ at distance $3$. Since $Q$ and $S$ are distinct vertices drawn from these $7$, there are $7 \\cdot 6 = 42$ ordered pairs, of which $3 \\cdot 2 + 3 \\cdot 2 + 1 \\cdot 0 = 12$ give equal distances, so $P(=) = \\tfrac{12}{42} = \\tfrac{2}{7}$. Therefore $P(>) = \\tfrac{1}{2}\\left(1 - \\tfrac{2}{7}\\right) = \\tfrac{5}{14}$, which is already in lowest terms, giving $m + n = 5 + 14 = 19$. The tempting answer $3$ comes from declaring the probability to be $\\tfrac{1}{2}$ by symmetry alone, ignoring the possibility that the two distances tie.",
    source: SOURCE,
  },
];
