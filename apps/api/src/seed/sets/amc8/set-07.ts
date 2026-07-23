import type { Question } from "@mathprep/core";

const SOURCE = "MathPrep original (AMC 8 style)";

export const SET_07_QUESTIONS: Question[] = [
  {
    // mean-median-mode of a small data set
    id: "s07-q01",
    topic: "data-analysis",
    difficulty: "easy",
    stem: "The eight members of Maya's book club each reported how many chapters they read last month: $6$, $9$, $4$, $6$, $10$, $7$, $8$, $6$. What is the sum of the mean, the median, and the mode of these eight numbers? (Note that the median of $8$ numbers is the average of the $4$th and $5$th numbers when they are listed in increasing order.)",
    choices: ["$19$", "$19.5$", "$20$", "$20.5$", "$23.5$"],
    answerIndex: 1,
    explanation:
      "Compute the three statistics separately from the sorted list $4, 6, 6, 6, 7, 8, 9, 10$. The sum of all eight numbers is $56$, so the mean is $56 \\div 8 = 7$. The median is the average of the $4$th and $5$th values, $(6 + 7)/2 = 6.5$, and the mode is $6$, the only value that appears three times. Adding gives $7 + 6.5 + 6 = 19.5$. The tempting answer $20$ comes from taking the single middle-ish value $7$ as the median instead of averaging the two middle values $6$ and $7$.",
    source: SOURCE,
  },
  {
    // iterate a stated recurrence to a target term
    id: "s07-q02",
    topic: "algebra",
    difficulty: "easy",
    stem: "Kavi writes a list of numbers. The first two numbers are $1$ and $3$, and each number after the second equals the number just before it plus twice the number two places before it. For example, the third number is $3 + 2 \\cdot 1 = 5$. What is the seventh number in Kavi's list?",
    choices: ["$29$", "$43$", "$85$", "$171$", "$239$"],
    answerIndex: 2,
    explanation:
      "Apply the rule term by term, keeping careful track of which position you are on. The list runs $1, 3, 5, 11, 21, 43, 85$: for instance the fourth number is $5 + 2 \\cdot 3 = 11$ and the fifth is $11 + 2 \\cdot 5 = 21$. Continuing, the sixth is $21 + 2 \\cdot 11 = 43$ and the seventh is $43 + 2 \\cdot 21 = 85$. The tempting answer $43$ comes from stopping one term early at the sixth number instead of the seventh.",
    source: SOURCE,
  },
  {
    // arithmetic progression with ratio constraint on endpoints
    id: "s07-q03",
    topic: "algebra",
    difficulty: "easy",
    stem: "Leo planted three trees along his driveway. Their heights are equally spaced: the middle tree is taller than the shortest tree by the same amount that the tallest tree is taller than the middle tree. The tallest tree is $5$ times as tall as the shortest tree, and the three heights add up to $54$ feet. What is the height, in feet, of the shortest tree?",
    choices: ["$6$", "$9$", "$12$", "$18$", "$30$"],
    answerIndex: 0,
    explanation:
      "Because the heights are equally spaced, the middle height is the average of the other two. If the shortest tree has height $h$, the tallest is $5h$, so the middle is $(h + 5h)/2 = 3h$. The sum condition gives $h + 3h + 5h = 9h = 54$, so $h = 6$ feet. The tempting answer $9$ comes from writing $h + 5h = 54$ and forgetting to include the middle tree in the total.",
    source: SOURCE,
  },
  {
    // weighted mean from a frequency chart
    id: "s07-q04",
    topic: "data-analysis",
    difficulty: "easy",
    stem: "Each of the $20$ students in the Maplewood Chess Club reported how many tournaments they played this spring:\n- $1$ tournament: $3$ students\n- $2$ tournaments: $6$ students\n- $3$ tournaments: $7$ students\n- $4$ tournaments: $4$ students\nWhat is the mean number of tournaments played per student?",
    choices: ["$2.25$", "$2.4$", "$2.5$", "$2.6$", "$3$"],
    answerIndex: 3,
    explanation:
      "The mean is the total number of tournaments divided by the total number of students, so weight each value by how many students reported it. The total is $1 \\cdot 3 + 2 \\cdot 6 + 3 \\cdot 7 + 4 \\cdot 4 = 3 + 12 + 21 + 16 = 52$ tournaments. Dividing by the $20$ students gives $52 \\div 20 = 2.6$. The tempting answer $2.5$ comes from averaging the four values $1, 2, 3, 4$ without weighting them by the number of students in each row.",
    source: SOURCE,
  },
  {
    // scale a percent without finding the whole
    id: "s07-q05",
    topic: "arithmetic",
    difficulty: "easy",
    stem: "Sam is filling an empty aquarium with water at a steady rate. When the aquarium is $15\\%$ full, it contains $12$ gallons of water. How many gallons of water will the aquarium contain when it is $45\\%$ full?",
    choices: ["$4$", "$24$", "$36$", "$48$", "$80$"],
    answerIndex: 2,
    explanation:
      "There is no need to find the aquarium's full capacity: since $45\\% = 3 \\times 15\\%$, the amount of water is simply $3$ times as much. That gives $3 \\times 12 = 36$ gallons. (Checking with the whole: the full tank holds $12 \\div 0.15 = 80$ gallons, and $45\\%$ of $80$ is indeed $36$.) The tempting answer $80$ comes from solving for the aquarium's full capacity and stopping there instead of answering the question asked.",
    source: SOURCE,
  },
  {
    // extend a figurate dot-pattern sequence
    id: "s07-q06",
    topic: "algebra",
    difficulty: "easy",
    stem: "Jordan builds a sequence of dot figures. Figure $1$ is a single row of $2$ dots, and each later figure is formed from the previous one by adding one new row containing $2$ more dots than the row added before it. So Figure $2$ has $2 + 4 = 6$ dots, Figure $3$ has $12$ dots, and Figure $4$ has $20$ dots. How many dots does Figure $6$ have?",
    choices: ["$30$", "$36$", "$40$", "$42$", "$56$"],
    answerIndex: 3,
    explanation:
      "The number of dots added grows by $2$ with each new figure: the rows added have $4$, then $6$, then $8$ dots, so the next rows have $10$ and $12$ dots. Figure $5$ therefore has $20 + 10 = 30$ dots, and Figure $6$ has $30 + 12 = 42$ dots. The tempting answer $30$ comes from stopping at Figure $5$ instead of continuing one more step to Figure $6$.",
    source: SOURCE,
  },
  {
    // stack lengths with unit conversion
    id: "s07-q07",
    topic: "arithmetic",
    difficulty: "easy",
    stem: "The top shelf of the classroom bookcase is $2$ meters above the floor. Amara is $138$ centimeters tall and can reach $42$ centimeters above the top of her head. She wants to stand on a stool so that she can just reach the top shelf. What is the height, in centimeters, of the stool she needs?",
    choices: ["$20$", "$62$", "$96$", "$104$", "$180$"],
    answerIndex: 0,
    explanation:
      "First put every length in the same unit: the shelf is $2$ meters $= 200$ centimeters above the floor. Standing on the floor, Amara can reach $138 + 42 = 180$ centimeters high. The stool must make up the difference, $200 - 180 = 20$ centimeters. The tempting answer $62$ comes from computing $200 - 138$ and forgetting that she can also reach $42$ centimeters above her head.",
    source: SOURCE,
  },
  {
    // sum counts across disjoint groups
    id: "s07-q08",
    topic: "arithmetic",
    difficulty: "easy",
    stem: "The Riverbend Art Club meets in three separate sessions each week. The Monday session has $11$ students, the Wednesday session has $8$ students, and the Friday session has $9$ students. No student attends more than one session. How many students are in the art club?",
    choices: ["$17$", "$19$", "$20$", "$27$", "$28$"],
    answerIndex: 4,
    explanation:
      "Because no student attends more than one session, the three groups do not overlap, so the total is just the sum of the three counts. That gives $11 + 8 + 9 = 28$ students. The tempting answer $20$ comes from adding only the Monday and Friday counts, $11 + 9$, and leaving out the Wednesday session.",
    source: SOURCE,
  },
  {
    // extrapolate a counted rate over a total time
    id: "s07-q09",
    topic: "arithmetic",
    difficulty: "easy",
    stem: "Standing at a park pond, Priya counts $9$ geese flying overhead during a $20$-second interval. If geese continue to pass overhead at this same rate, how many geese will fly overhead in $3$ minutes?",
    choices: ["$27$", "$54$", "$72$", "$81$", "$90$"],
    answerIndex: 3,
    explanation:
      "Convert the total time to seconds so it can be compared with the counted interval: $3$ minutes is $3 \\times 60 = 180$ seconds. That is $180 \\div 20 = 9$ intervals of $20$ seconds each. At $9$ geese per interval, the total is $9 \\times 9 = 81$ geese. The tempting answer $27$ comes from multiplying $9$ geese by the $3$ minutes directly, as if each minute were a single $20$-second interval.",
    source: SOURCE,
  },
  {
    // follow a chain of relative-quantity clues
    id: "s07-q10",
    topic: "algebra",
    difficulty: "easy",
    stem: "At the school bake sale, Nora sold $54$ cookies. Omar sold one-third as many cookies as Nora, and Jade sold $11$ more cookies than Omar. How many cookies did Jade sell?",
    choices: ["$7$", "$18$", "$29$", "$47$", "$65$"],
    answerIndex: 2,
    explanation:
      "Translate each clue into one arithmetic step and follow the chain in order. Omar sold one-third of Nora's $54$ cookies, which is $54 \\div 3 = 18$ cookies. Jade sold $11$ more than Omar, which is $18 + 11 = 29$ cookies. The tempting answer $18$ comes from stopping at Omar's count instead of finishing the last step for Jade.",
    source: SOURCE,
  },
  {
    // deduce an ordering from agents' private-knowledge statements
    id: "s07-q11",
    topic: "logic",
    difficulty: "medium",
    stem: 'Four members of the Riverbend Puzzle Club \u2014 Maya, Leo, Nora, and Sam \u2014 each earned a score on the same puzzle challenge. Maya shows her score to the other three, but Leo, Nora, and Sam keep their own scores hidden, so each of them knows exactly two scores: Maya\'s and their own.\n- Leo thinks, "At least two of the four of us earned the same score."\n- Nora thinks, "I certainly did not earn the lowest score."\n- Sam thinks, "I certainly did not earn the highest score."\nEach thought is correct, and each thinker can be sure of it using only the scores they know. Which of the following lists Leo, Nora, and Sam in order from lowest score to highest score?',
    choices: [
      "Sam, Leo, Nora",
      "Sam, Nora, Leo",
      "Leo, Sam, Nora",
      "Leo, Nora, Sam",
      "Nora, Leo, Sam",
    ],
    answerIndex: 0,
    explanation:
      "Each student knows only Maya's score and their own, so each thought must be certain from just those two scores. Leo can only be sure of a tie if his own score equals Maya's, so Leo $=$ Maya. Nora can only be sure she is not lowest if Maya scored below her, and Sam can only be sure he is not highest if Maya scored above him. Therefore Sam $<$ Maya $=$ Leo $<$ Nora, and the order from lowest to highest is Sam, Leo, Nora. The choice Nora, Leo, Sam comes from listing the students from highest score to lowest instead of lowest to highest.",
    source: SOURCE,
  },
  {
    // meeting time on a cycle via modular arithmetic
    id: "s07-q12",
    topic: "number-theory",
    difficulty: "medium",
    stem: "Jordan and Priya play a game on a circular track of $16$ equally spaced stones, numbered $1$ through $16$ clockwise. Both of their tokens start on stone $1$. On each turn, Jordan's token moves $7$ stones clockwise and Priya's token moves $11$ stones counterclockwise, both at the same time. After how many turns will the two tokens first land on the same stone again?",
    choices: ["$2$", "$4$", "$8$", "$16$", "$18$"],
    answerIndex: 2,
    explanation:
      "Because the tokens move in opposite directions, the clockwise gap between them grows by $7 + 11 = 18$ stones each turn, and $18 \\equiv 2 \\pmod{16}$, so the gap is $2k$ stones after $k$ turns. The tokens share a stone exactly when this gap is a multiple of $16$, and $2k$ is first a multiple of $16$ when $k = 8$. Checking smaller values of $k$ confirms the gap $2, 4, \\ldots, 14$ never returns to $0$ before then. The choice $4$ comes from using the difference $11 - 7 = 4$ of the two speeds, as if the tokens moved in the same direction around the track.",
    source: SOURCE,
  },
  {
    // area by composing and subtracting Pythagorean-triple right triangles
    id: "s07-q13",
    topic: "geometry",
    difficulty: "medium",
    stem: "In quadrilateral $ABCD$, $\\angle ABC = 90^\\circ$ and $\\angle ACD = 90^\\circ$, with $AB = 9$, $BC = 12$, and $CD = 8$. Points $B$ and $D$ lie on opposite sides of line $AC$. What is the area of quadrilateral $ABCD$?",
    choices: ["$54$", "$60$", "$102$", "$108$", "$114$"],
    answerIndex: 4,
    explanation:
      "The key is to draw diagonal $AC$, which splits the quadrilateral into two right triangles. In right triangle $ABC$, the legs $9$ and $12$ give $AC = \\sqrt{9^2 + 12^2} = 15$ and area $\\frac{1}{2} \\cdot 9 \\cdot 12 = 54$. Since $\\angle ACD = 90^\\circ$, triangle $ACD$ has legs $AC = 15$ and $CD = 8$, so its area is $\\frac{1}{2} \\cdot 15 \\cdot 8 = 60$. Because $B$ and $D$ lie on opposite sides of $AC$, the two areas add to $54 + 60 = 114$. The choice $102$ comes from using $BC = 12$ instead of the diagonal $AC = 15$ as a leg of the second triangle.",
    source: SOURCE,
  },
  {
    // divisibility rule restricts arrangements of fixed digits
    id: "s07-q14",
    topic: "probability",
    difficulty: "medium",
    stem: "Amara writes the digits $1$, $3$, $5$, and $6$ on four cards and lines the cards up in a random order to form a four-digit number. What is the probability that the resulting number is a multiple of $6$?",
    choices: [
      "$\\frac{1}{24}$",
      "$\\frac{1}{6}$",
      "$\\frac{1}{4}$",
      "$\\frac{1}{2}$",
      "$\\frac{3}{4}$",
    ],
    answerIndex: 2,
    explanation:
      "A multiple of $6$ must be divisible by both $2$ and $3$. The digit sum $1 + 3 + 5 + 6 = 15$ is a multiple of $3$ in every arrangement, so divisibility by $3$ is automatic, and the number is even exactly when the units digit is $6$. The digit $6$ lands in the units place in $3! = 6$ of the $4! = 24$ equally likely arrangements, so the probability is $\\frac{6}{24} = \\frac{1}{4}$. The choice $\\frac{1}{2}$ comes from allowing the units digit to be $3$ or $6$, confusing the divisibility rule for $3$ (which uses the digit sum) with a last-digit rule.",
    source: SOURCE,
  },
  {
    // invariant sum under complementary-pair selection
    id: "s07-q15",
    topic: "logic",
    difficulty: "medium",
    stem: "In a classroom game, each of the numbers $1$ through $8$ is written on a red card, and each red card $k$ has a partner blue card showing $k + 8$, so the blue cards show $9$ through $16$. Tess takes exactly one card from each of the $8$ partner pairs, choosing exactly $4$ red cards and $4$ blue cards. What is the sum of the numbers on Tess's $8$ cards?",
    choices: ["$36$", "$60$", "$68$", "$76$", "$100$"],
    answerIndex: 2,
    explanation:
      "The key insight is that from each pair Tess takes either $k$ or $k + 8$, so her total equals $1 + 2 + \\cdots + 8 = 36$ plus an extra $8$ for every blue card she takes. Since she takes exactly $4$ blue cards, the sum is forced to be $36 + 4 \\cdot 8 = 68$ no matter which particular cards she chooses. The choice $60$ comes from counting only $3$ blue cards instead of $4$, an off-by-one in the number of $+8$ bonuses.",
    source: SOURCE,
  },
  {
    // smallest integer solution to a fraction equality
    id: "s07-q16",
    topic: "number-theory",
    difficulty: "medium",
    stem: "In the Maple Street Chess Club, exactly $\\frac{3}{5}$ of the girls and exactly $\\frac{2}{7}$ of the boys attended a weekend tournament, and the number of girls who attended was equal to the number of boys who attended. What is the smallest possible number of members in the club?",
    choices: ["$5$", "$12$", "$29$", "$31$", "$35$"],
    answerIndex: 3,
    explanation:
      "Let $g$ and $b$ be the numbers of girls and boys in the club; equal attendance gives $\\frac{3}{5}g = \\frac{2}{7}b$, which simplifies to $21g = 10b$. Since $21$ and $10$ share no common factor, $g$ must be a multiple of $10$ and $b$ a multiple of $21$, so the smallest solution is $g = 10$ and $b = 21$, with $6$ girls and $6$ boys attending. That makes the smallest club size $10 + 21 = 31$. The choice $12$ counts the students who attended the tournament rather than the members of the club.",
    source: SOURCE,
  },
  {
    // perimeter of a composite figure of scaled copies
    id: "s07-q17",
    topic: "geometry",
    difficulty: "medium",
    stem: "Four squares with side lengths $16$, $8$, $4$, and $2$ centimeters are arranged in a row from largest to smallest. All four squares sit on the same horizontal line, and each square after the first has its entire left side against the right side of the previous, larger square. What is the perimeter, in centimeters, of the resulting figure?",
    choices: ["$88$", "$92$", "$106$", "$120$", "$134$"],
    answerIndex: 1,
    explanation:
      "The key is that each place where two squares meet hides a segment equal to the smaller square's full side, once on each square. The four perimeters total $4(16 + 8 + 4 + 2) = 120$, and the shared segments have lengths $8$, $4$, and $2$, each hidden twice, so the figure's perimeter is $120 - 2(8 + 4 + 2) = 92$. Tracing the outline step by step confirms this total. The choice $106$ comes from subtracting each shared segment once instead of twice.",
    source: SOURCE,
  },
  {
    // equate areas to extract a length ratio
    id: "s07-q18",
    topic: "geometry",
    difficulty: "medium",
    stem: "A square garden and a circular garden have equal areas. What is the ratio of the side length of the square to the diameter of the circle?",
    choices: [
      "$\\frac{\\pi}{4}$",
      "$\\frac{\\sqrt{\\pi}}{2}$",
      "$\\frac{2}{\\sqrt{\\pi}}$",
      "$\\frac{\\pi}{2}$",
      "$\\sqrt{\\pi}$",
    ],
    answerIndex: 1,
    explanation:
      "Let the square have side $s$ and the circle have radius $r$; equal areas give $s^2 = \\pi r^2$. Taking square roots, $s = r\\sqrt{\\pi}$. The diameter is $d = 2r$, so $\\frac{s}{d} = \\frac{r\\sqrt{\\pi}}{2r} = \\frac{\\sqrt{\\pi}}{2}$. The choice $\\sqrt{\\pi}$ is the ratio of the side to the radius rather than to the diameter.",
    source: SOURCE,
  },
  {
    // smallest composite built from restricted prime factors
    id: "s07-q19",
    topic: "number-theory",
    difficulty: "medium",
    stem: "A positive integer $N$ has all three of the following properties:\n- $N$ is not prime.\n- $N$ is not a perfect square.\n- No prime factor of $N$ is less than $20$.\nWhat is the smallest possible value of $N$?",
    choices: ["$437$", "$483$", "$529$", "$667$", "$713$"],
    answerIndex: 3,
    explanation:
      "Every prime factor of $N$ must be at least $23$, the smallest prime not less than $20$. Since $N$ is not prime, it is a product of at least two such primes, and to keep $N$ small we want exactly two of the smallest allowed primes. The product $23 \\cdot 23 = 529$ is a perfect square and is ruled out, so the smallest remaining product is $23 \\cdot 29 = 667$. The choice $529$ comes from overlooking the perfect-square condition and stopping at $23^2$.",
    source: SOURCE,
  },
  {
    // non-adjacent arrangements via placing letters into gaps
    id: "s07-q20",
    topic: "counting",
    difficulty: "medium",
    stem: "A florist is creating a display by placing $6$ identical white tulips and $5$ roses, each a different color, in a single row. No two tulips may be next to each other. How many different displays are possible?",
    choices: ["$0$", "$120$", "$720$", "$55{,}440$", "$86{,}400$"],
    answerIndex: 1,
    explanation:
      "The key is to place the $5$ distinct roses first: they create exactly $6$ gaps \u2014 $4$ between neighboring roses plus one at each end of the row. Since no two identical tulips may be adjacent, each gap holds at most one tulip, and with $6$ tulips for $6$ gaps every gap must be filled, so the tulip positions are completely forced. Only the order of the roses matters, giving $5! = 120$ displays. The choice $0$ comes from forgetting the two end positions and concluding that $6$ tulips cannot be separated by only $5$ roses.",
    source: SOURCE,
  },
  {
    // surface-area change from gluing solids
    id: "s07-q21",
    topic: "geometry",
    difficulty: "hard",
    stem: "Maya builds a sculpture from wooden blocks. She starts with a cube of edge length $5$, then glues a cube of edge length $3$ onto the larger cube so that the small cube's bottom face lies entirely within the center of the larger cube's top face. Finally she carves out and discards a $1 \\times 1 \\times 1$ cube from one corner of the larger cube's bottom face. What is the total surface area, in square units, of the finished sculpture, including its bottom?",
    choices: ["$183$", "$186$", "$189$", "$195$", "$204$"],
    answerIndex: 1,
    explanation:
      "Gluing the small cube onto a flat face hides two $3 \\times 3$ squares \u2014 the small cube's bottom face and the equal patch it covers \u2014 so the glued solid has surface area $150 + 54 - 2 \\cdot 9 = 186$. Carving out a unit cube at a corner removes three exposed unit squares (the bottom and two sides of that corner) but reveals three new interior unit squares, so the surface area does not change at all. The finished sculpture therefore has surface area $186$ square units. The most tempting answer, $183$, assumes the corner notch reduces the surface area by $3$, but the three newly exposed faces exactly replace the three removed ones.",
    source: SOURCE,
  },
  {
    // pair-drawing probability via casework or complement counting
    id: "s07-q22",
    topic: "probability",
    difficulty: "hard",
    stem: "Priya owns $12$ stickers. Each sticker has one of $4$ colors (red, blue, green, or yellow) and one of $3$ shapes (star, moon, or heart), with exactly one sticker of each color-shape combination. She pulls $2$ of the $12$ stickers out of a drawer at random. What is the probability that the two stickers match in color or match in shape?",
    choices: [
      "$\\frac{2}{11}$",
      "$\\frac{5}{22}$",
      "$\\frac{3}{11}$",
      "$\\frac{5}{11}$",
      "$\\frac{6}{11}$",
    ],
    answerIndex: 3,
    explanation:
      "Because every color-shape combination appears exactly once, two distinct stickers can never match in both color and shape, so the two favorable cases are disjoint and can simply be added. There are $\\binom{12}{2} = 66$ equally likely pairs; $4 \\cdot \\binom{3}{2} = 12$ of them share a color and $3 \\cdot \\binom{4}{2} = 18$ share a shape. The probability is therefore $\\frac{12 + 18}{66} = \\frac{30}{66} = \\frac{5}{11}$. The tempting answer $\\frac{6}{11}$ is the probability of the complementary event \u2014 that the two stickers match in neither color nor shape.",
    source: SOURCE,
  },
  {
    // inclusion-exclusion over one LCM period, then scale to the full range
    id: "s07-q23",
    topic: "counting",
    difficulty: "hard",
    stem: "The Lakeview Community Center is open for a season of $200$ days, numbered $1$ through $200$. It holds a swim meet on every day whose number is a multiple of $4$, a trivia night on every day whose number is a multiple of $6$, and a craft fair on every day whose number is a multiple of $9$. On how many of the $200$ days does the center hold no event at all?",
    choices: ["$78$", "$95$", "$111$", "$122$", "$127$"],
    answerIndex: 3,
    explanation:
      "Count event days by inclusion-exclusion, taking care that the periods are not coprime: two events coincide every $\\operatorname{lcm}(4,6) = 12$, $\\operatorname{lcm}(4,9) = 36$, and $\\operatorname{lcm}(6,9) = 18$ days, and all three coincide every $\\operatorname{lcm}(4,6,9) = 36$ days. Up to $200$ there are $50 + 33 + 22 = 105$ single counts, minus $16 + 5 + 11 = 32$ pairwise overlaps, plus $5$ triple-overlap days, for $105 - 32 + 5 = 78$ event days. That leaves $200 - 78 = 122$ days with no event. The tempting answer $127$ forgets to add back the $5$ multiples of $36$ on which all three events fall, and $111$ comes from treating the periods as coprime, using products such as $6 \\cdot 9 = 54$ in place of least common multiples.",
    source: SOURCE,
  },
  {
    // area ratios via cevians and midpoints (mass points)
    id: "s07-q24",
    topic: "geometry",
    difficulty: "hard",
    stem: "Triangle $ABC$ has area $144$. Point $D$ lies on side $AB$ with $AD = 2 \\cdot DB$, and point $E$ is the midpoint of side $AC$. Segments $CD$ and $BE$ intersect at point $P$. What is the area of triangle $BPD$?",
    choices: ["$12$", "$16$", "$24$", "$36$", "$48$"],
    answerIndex: 0,
    explanation:
      "The key is to locate $P$ on cevian $CD$: assign mass $1$ to $A$ and mass $2$ to $B$ so that $D$ balances, and mass $1$ to $C$ so that the midpoint $E$ balances; then $D$ carries mass $1 + 2 = 3$, so $P$ divides $CD$ with $CP : PD = 3 : 1$. (Coordinates confirm this: with $A = (0,0)$, $B = (6,0)$, $C = (0,4)$, the segments meet at $P = (3,1)$.) Since $BD = \\frac{1}{3} AB$, triangle $BCD$ has area $\\frac{1}{3} \\cdot 144 = 48$, and triangles $BPD$ and $BCD$ share the same vertex $B$ over bases $PD$ and $CD$. Hence the area of triangle $BPD$ is $\\frac{1}{4} \\cdot 48 = 12$. The tempting answer $16$ assumes $P$ cuts $CD$ in the familiar centroid ratio $2 : 1$, but the centroid arises only from two medians, and $D$ is not a midpoint.",
    source: SOURCE,
  },
  {
    // count grid edges by rows and columns
    id: "s07-q25",
    topic: "counting",
    difficulty: "hard",
    stem: "Jordan uses toothpicks to build a flat lattice of unit squares exactly covering an L-shaped region. The region consists of all the unit squares of a rectangle $9$ units wide and $6$ units tall, except that the block of squares $4$ units wide and $3$ units tall at the rectangle's top-right corner is missing. Every side of every unit square in the region is exactly one toothpick, and two squares that share a side share the toothpick between them. How many toothpicks does Jordan use?",
    choices: ["$92$", "$96$", "$99$", "$106$", "$123$"],
    answerIndex: 2,
    explanation:
      "Count the horizontal and vertical toothpicks separately, column by column and row by row. Each of the $5$ left columns is $6$ squares tall and needs $7$ horizontal toothpicks, and each of the $4$ right columns is $3$ squares tall and needs $4$, giving $35 + 16 = 51$ horizontal toothpicks; each of the $3$ bottom rows is $9$ squares wide and needs $10$ vertical toothpicks, and each of the $3$ top rows is $5$ squares wide and needs $6$, giving $30 + 18 = 48$ vertical toothpicks. In total Jordan uses $51 + 48 = 99$ toothpicks. As a check, a full $9 \\times 6$ grid would use $7 \\cdot 9 + 10 \\cdot 6 = 123$ toothpicks, and deleting the notch removes exactly $24$ of them. The tempting answer $92$ subtracts all $31$ toothpicks of a stand-alone $4 \\times 3$ grid, but the $7$ toothpicks along the notch's left and bottom edges border squares that remain, so they must stay.",
    source: SOURCE,
  },
];
