import type { Question } from "@mathprep/core";

const SOURCE = "MathPrep original (AMC 8 style)";

export const SET_04_QUESTIONS: Question[] = [
  {
    // extend a figurate dot-pattern sequence
    id: "s04-q01",
    topic: "algebra",
    difficulty: "easy",
    stem: "Maya makes designs with pennies. The first design uses $1$ penny, and each later design is made by adding a new ring of pennies around the previous design, where each new ring uses $4$ more pennies than the ring before it. The first three designs use $1$, $5$, and $13$ pennies. How many pennies does the fifth design use?",
    choices: ["$25$", "$29$", "$37$", "$41$", "$61$"],
    answerIndex: 3,
    explanation:
      "The key is that the rings grow by $4$ pennies each time, so the rings use $4, 8, 12, 16, \\ldots$ pennies. The design totals are therefore $1$, $1+4=5$, $5+8=13$, $13+12=25$, and $25+16=41$. So the fifth design uses $41$ pennies. Choosing $25$ comes from stopping at the fourth design instead of continuing to the fifth.",
    source: SOURCE,
  },
  {
    // sum of an arithmetic sequence
    id: "s04-q02",
    topic: "algebra",
    difficulty: "easy",
    stem: "Leo is training for a fitness badge. He does $1$ sit-up on the first day, $3$ sit-ups on the second day, $5$ sit-ups on the third day, and so on, doing $2$ more sit-ups each day than the day before. How many sit-ups does he do in total during the first $25$ days?",
    choices: ["$49$", "$325$", "$576$", "$600$", "$625$"],
    answerIndex: 4,
    explanation:
      "The daily counts $1, 3, 5, \\ldots$ are the first $25$ odd numbers, and the sum of the first $n$ odd numbers is $n^2$. So the total is $25^2 = 625$. As a check, day $25$ has $2 \\cdot 25 - 1 = 49$ sit-ups, and the arithmetic-series formula gives $\\frac{(1 + 49) \\cdot 25}{2} = 625$. Choosing $576$ comes from adding only the first $24$ days.",
    source: SOURCE,
  },
  {
    // rate times quantity with unit conversion
    id: "s04-q03",
    topic: "arithmetic",
    difficulty: "easy",
    stem: "A stamping machine at the Riverbend post office takes $20$ seconds to stamp each package. How many minutes does the machine take to stamp $240$ packages?",
    choices: ["$4$", "$12$", "$48$", "$80$", "$4800$"],
    answerIndex: 3,
    explanation:
      "First find the total time in seconds, then convert to minutes. Stamping takes $240 \\times 20 = 4800$ seconds, and $4800 \\div 60 = 80$ minutes. Choosing $12$ comes from dividing $240$ by $20$ instead of multiplying, and choosing $4800$ comes from forgetting to convert seconds to minutes.",
    source: SOURCE,
  },
  {
    // evaluate nested custom-defined operations
    id: "s04-q04",
    topic: "algebra",
    difficulty: "easy",
    stem: "For any two numbers $a$ and $b$, define the operations $a \\oplus b = a^2 - b^2$ and $a \\ominus b = (a - b)^2$. What is the value of $(6 \\oplus 5) \\ominus 3$?",
    choices: ["$8$", "$20$", "$64$", "$112$", "$121$"],
    answerIndex: 2,
    explanation:
      "Evaluate the operation inside the parentheses first: $6 \\oplus 5 = 6^2 - 5^2 = 36 - 25 = 11$. Then apply the second definition: $11 \\ominus 3 = (11 - 3)^2 = 8^2 = 64$. Choosing $8$ comes from computing $11 - 3$ but forgetting to square the result.",
    source: SOURCE,
  },
  {
    // solve for time from fixed head start plus constant rate
    id: "s04-q05",
    topic: "algebra",
    difficulty: "easy",
    stem: "Priya wants to buy a telescope that costs $\\$160$. She has already saved $\\$40$ of birthday money, and she earns $\\$8$ each week watering her neighbor's garden. After how many weeks of watering will she have exactly enough money for the telescope?",
    choices: ["$5$", "$15$", "$16$", "$20$", "$25$"],
    answerIndex: 1,
    explanation:
      "Subtract the head start first: Priya still needs $\\$160 - \\$40 = \\$120$. At $\\$8$ per week, that takes $120 \\div 8 = 15$ weeks. Choosing $20$ comes from dividing the full price $\\$160$ by $\\$8$ and ignoring the $\\$40$ she has already saved.",
    source: SOURCE,
  },
  {
    // compare per-unit rates across two scenarios
    id: "s04-q06",
    topic: "arithmetic",
    difficulty: "easy",
    stem: "Jordan hiked the flat River Trail, covering $12$ miles in $180$ minutes. The next day he hiked the steep Summit Trail, covering $8$ miles in $200$ minutes. How many more minutes did each mile take on the Summit Trail than on the River Trail?",
    choices: ["$4$", "$10$", "$15$", "$20$", "$25$"],
    answerIndex: 1,
    explanation:
      "Convert each hike to minutes per mile before comparing. The River Trail took $180 \\div 12 = 15$ minutes per mile, and the Summit Trail took $200 \\div 8 = 25$ minutes per mile. The difference is $25 - 15 = 10$ minutes per mile. Choosing $20$ comes from subtracting the total times $200 - 180$ instead of comparing per-mile rates.",
    source: SOURCE,
  },
  {
    // compound successive percent changes
    id: "s04-q07",
    topic: "arithmetic",
    difficulty: "easy",
    stem: "A board game at the Maple Street toy shop costs $\\$40$. In April the price is reduced by $10\\%$, and in May the reduced price is increased by $25\\%$. What is the price of the game after the May increase?",
    choices: ["$\\$36$", "$\\$40$", "$\\$45$", "$\\$46$", "$\\$50$"],
    answerIndex: 2,
    explanation:
      "Successive percent changes multiply rather than add, and each applies to the current price. After April the price is $40 \\times 0.90 = \\$36$, and after May it is $36 \\times 1.25 = \\$45$. Choosing $\\$46$ comes from adding the percents ($-10\\% + 25\\% = +15\\%$) and taking $40 \\times 1.15$.",
    source: SOURCE,
  },
  {
    // arithmetic progression with ratio constraint on endpoints
    id: "s04-q08",
    topic: "algebra",
    difficulty: "easy",
    stem: "The Cedar Grove science fair awards three cash prizes totaling $\\$63$. The amounts are equally spaced: the middle prize exceeds the smallest prize by the same amount that the largest prize exceeds the middle prize. The largest prize is $5$ times the smallest prize. What is the amount of the smallest prize?",
    choices: ["$\\$7$", "$\\$9$", "$\\$10.50$", "$\\$21$", "$\\$35$"],
    answerIndex: 0,
    explanation:
      "Equally spaced amounts make the middle prize the average of all three, so the middle prize is $63 \\div 3 = \\$21$ and the smallest and largest together total $63 - 21 = \\$42$. With the largest equal to $5$ times the smallest, $s + 5s = 42$ gives $s = 7$, and the prizes $\\$7$, $\\$21$, $\\$35$ are indeed equally spaced with the largest $5$ times the smallest. Choosing $\\$21$ reports the middle prize instead of the smallest one.",
    source: SOURCE,
  },
  {
    // test answer choices against a number property
    id: "s04-q09",
    topic: "arithmetic",
    difficulty: "easy",
    stem: "Sam calls a number _timid_ if it is less than its reciprocal. For example, $\\frac{2}{3}$ is timid because $\\frac{2}{3} < \\frac{3}{2}$. (The number $0$ has no reciprocal, so it is not timid.) Which of the following numbers is timid?",
    choices: ["$-2$", "$-1$", "$0$", "$1$", "$2$"],
    answerIndex: 0,
    explanation:
      "For negative numbers the usual size comparison with the reciprocal flips: the reciprocal of $-2$ is $-\\frac{1}{2}$, and $-2 < -\\frac{1}{2}$, so $-2$ is timid. Checking the others: $-1$ and $1$ each equal their own reciprocals, $0$ has no reciprocal, and $2 > \\frac{1}{2}$. So $-2$ is the only timid choice. Choosing $-1$ overlooks that $-1$ is exactly equal to its reciprocal, not less than it.",
    source: SOURCE,
  },
  {
    // compare mean and median of a set with an outlier
    id: "s04-q10",
    topic: "data-analysis",
    difficulty: "easy",
    stem: "Amara sold raffle tickets for the school carnival on five days, selling $11$, $4$, $90$, $6$, and $9$ tickets on those days. How much greater is the mean of these five daily counts than the median?",
    choices: ["$0$", "$9$", "$15$", "$24$", "$66$"],
    answerIndex: 2,
    explanation:
      "The outlier day of $90$ tickets pulls the mean up but leaves the median untouched. The mean is $(11 + 4 + 90 + 6 + 9) \\div 5 = 120 \\div 5 = 24$, while sorting the counts as $4, 6, 9, 11, 90$ shows the median is $9$. The mean exceeds the median by $24 - 9 = 15$. Choosing $66$ comes from taking $90$, the middle number as listed, as the median instead of sorting the data first.",
    source: SOURCE,
  },
  {
    // area ratio in rectangle-plus-semicircles composite
    id: "s04-q11",
    topic: "geometry",
    difficulty: "medium",
    stem: "A landscape architect is designing a lawn shaped like a rectangle with a semicircular flower bed attached to each of its two shorter sides. The rectangle is $40$ meters long and $20$ meters wide, and each semicircle has one of the $20$-meter sides as its diameter. What is the ratio of the area of the rectangular part of the lawn to the combined area of the two semicircular beds?",
    choices: ["$2 : \\pi$", "$4 : \\pi$", "$16 : 3\\pi$", "$8 : \\pi$", "$16 : \\pi$"],
    answerIndex: 3,
    explanation:
      "The key insight is that the two semicircles, each built on a $20$-meter side as diameter, fit together to form one complete circle of radius $10$. The rectangle's area is $40 \\cdot 20 = 800$ square meters, and the circle's area is $\\pi \\cdot 10^2 = 100\\pi$ square meters. The ratio is therefore $800 : 100\\pi = 8 : \\pi$. The choice $2 : \\pi$ comes from using the full $20$-meter width as the radius instead of the diameter, which makes the circular area four times too large.",
    source: SOURCE,
  },
  {
    // count digit strings by filling the most restricted position first
    id: "s04-q12",
    topic: "counting",
    difficulty: "medium",
    stem: "A school assigns each student a four-digit ID number from $1000$ to $9999$. Maya wonders how many of these ID numbers are even and have four distinct digits. How many such ID numbers are there?",
    choices: ["$2240$", "$2268$", "$2296$", "$2520$", "$4536$"],
    answerIndex: 2,
    explanation:
      "Fill the most restricted position, the units digit, first \u2014 but split into cases, because a units digit of $0$ leaves more options for the thousands digit. If the units digit is $0$, the thousands, hundreds, and tens digits can be chosen in $9 \\cdot 8 \\cdot 7 = 504$ ways. If the units digit is $2$, $4$, $6$, or $8$, the thousands digit must avoid both $0$ and the units digit, giving $4 \\cdot 8 \\cdot 8 \\cdot 7 = 1792$ ways. The total is $504 + 1792 = 2296$. The choice $2240$ comes from treating $0$ like every other even units digit and allowing only $8$ choices for the thousands digit in that case.",
    source: SOURCE,
  },
  {
    // cryptarithm solved by carry analysis
    id: "s04-q13",
    topic: "number-theory",
    difficulty: "medium",
    stem: "In the correctly worked addition problem $\\overline{AA} + \\overline{BB} = \\overline{CAC}$, the letters $A$, $B$, and $C$ stand for three different digits, and the same letter always stands for the same digit. Here $\\overline{AA}$ is the two-digit number with both digits equal to $A$, and $\\overline{CAC}$ is a three-digit number. What is the value of $A + B + C$?",
    choices: ["$10$", "$11$", "$12$", "$13$", "$14$"],
    answerIndex: 2,
    explanation:
      "The key is the tens column: $A + B$ plus the carry from the units column must end in $A$ again, so $B$ plus that carry equals $10$, forcing $B = 9$ with a carry of $1$ from the units. The carry out of the tens column becomes the hundreds digit, so $C = 1$. The units column then reads $A + 9 = 10 + C = 11$, so $A = 2$, and indeed $22 + 99 = 121$. Therefore $A + B + C = 2 + 9 + 1 = 12$. The choice $11$ comes from adding only $A + B$ and forgetting to include $C$.",
    source: SOURCE,
  },
  {
    // angle chase with isosceles triangle and bisector
    id: "s04-q14",
    topic: "geometry",
    difficulty: "medium",
    stem: "In triangle $PQR$, sides $PQ$ and $PR$ are equal and $\\angle QPR = 44^\\circ$. The bisector of $\\angle PQR$ meets side $PR$ at point $S$. What is the degree measure of $\\angle QSR$?",
    choices: ["$34$", "$44$", "$68$", "$78$", "$102$"],
    answerIndex: 3,
    explanation:
      "Since $PQ = PR$, the base angles are equal, so $\\angle PQR = \\angle PRQ = (180^\\circ - 44^\\circ)/2 = 68^\\circ$. The bisector splits $\\angle PQR$ into two $34^\\circ$ angles, so triangle $QSR$ has $\\angle SQR = 34^\\circ$ and $\\angle QRS = 68^\\circ$. The angle sum then gives $\\angle QSR = 180^\\circ - 34^\\circ - 68^\\circ = 78^\\circ$. The choice $102$ comes from finding $\\angle QSP$, the angle on the other side of $S$, instead of the requested $\\angle QSR$.",
    source: SOURCE,
  },
  {
    // common remainder via least common multiple
    id: "s04-q15",
    topic: "number-theory",
    difficulty: "medium",
    stem: "Priya is organizing her sticker collection. When she sorts the stickers into piles of $4$, piles of $5$, or piles of $6$, exactly $3$ stickers are left over each time. Priya has more than $20$ stickers, and she owns the smallest number of stickers for which all of this is possible. When she sorts her stickers into piles of $7$, how many stickers are left over?",
    choices: ["$0$", "$1$", "$2$", "$3$", "$4$"],
    answerIndex: 0,
    explanation:
      "Since the remainder is $3$ in every case, Priya's total is $3$ more than a common multiple of $4$, $5$, and $6$, whose least common multiple is $60$. The possible totals are $3, 63, 123, \\ldots$, and the smallest one greater than $20$ is $63$. Because $63 = 7 \\cdot 9$, sorting into piles of $7$ leaves $0$ stickers over. The choice $3$ comes from assuming the same remainder of $3$ must appear again for piles of $7$, but $7$ was not one of the original pile sizes.",
    source: SOURCE,
  },
  {
    // probability by analyzing the removed element
    id: "s04-q16",
    topic: "probability",
    difficulty: "medium",
    stem: "Amara has six tiles numbered $2$, $3$, $4$, $5$, $6$, and $7$. She removes one tile at random and multiplies the numbers on the five remaining tiles. What is the probability that this product is a multiple of $6$?",
    choices: ["$\\frac{1}{3}$", "$\\frac{1}{2}$", "$\\frac{2}{3}$", "$\\frac{5}{6}$", "$1$"],
    answerIndex: 4,
    explanation:
      "The product is a multiple of $6$ exactly when the remaining tiles include a multiple of $2$ and a multiple of $3$, so analyze what each removal leaves behind. The multiples of $2$ are $2$, $4$, and $6$, and removing one tile still leaves at least two of them; the multiples of $3$ are $3$ and $6$, and removing either one leaves the other. So no matter which tile Amara removes, the product is a multiple of $6$, and the probability is $1$. The choice $\\frac{5}{6}$ comes from assuming that removing the $6$ ruins the product, overlooking that the tiles $2$ and $3$ together still supply a factor of $6$.",
    source: SOURCE,
  },
  {
    // count digit strings from factorizations and their permutations
    id: "s04-q17",
    topic: "counting",
    difficulty: "medium",
    stem: "Leo calls a three-digit number $\\textit{bountiful}$ if the product of its three digits equals $36$. For example, $149$ is bountiful because $1 \\cdot 4 \\cdot 9 = 36$. How many bountiful numbers are there?",
    choices: ["$9$", "$12$", "$15$", "$18$", "$21$"],
    answerIndex: 4,
    explanation:
      "First list the unordered triples of digits from $1$ to $9$ whose product is $36$: they are $\\{1,4,9\\}$, $\\{2,3,6\\}$, $\\{1,6,6\\}$, $\\{2,2,9\\}$, and $\\{3,3,4\\}$. Each triple with three distinct digits can be arranged in $3! = 6$ ways, and each triple with a repeated digit can be arranged in only $3$ ways. No digit can be $0$, since the product would then be $0$, so every arrangement is a valid three-digit number. The total is $2 \\cdot 6 + 3 \\cdot 3 = 21$. The choice $18$ comes from overlooking one of the repeated-digit triples, most often $\\{2,2,9\\}$.",
    source: SOURCE,
  },
  {
    // minimize exposed faces when assembling a cube from unit cubes
    id: "s04-q18",
    topic: "geometry",
    difficulty: "medium",
    stem: "Sam builds a $3 \\times 3 \\times 3$ cube from $27$ unit cubes, of which $7$ are red and $20$ are gray. Sam wants as little red as possible to show on the outside of the large cube. What is the smallest possible fraction of the surface area of the large cube that is red?",
    choices: [
      "$\\frac{1}{9}$",
      "$\\frac{7}{54}$",
      "$\\frac{4}{27}$",
      "$\\frac{1}{6}$",
      "$\\frac{7}{27}$",
    ],
    answerIndex: 0,
    explanation:
      "The surface of the large cube consists of $6 \\cdot 9 = 54$ unit faces, and different positions hide different amounts: the one center cube shows $0$ faces, the $6$ face-center cubes show $1$ face each, edge cubes show $2$, and corner cubes show $3$. Placing one red cube in the hidden center and the other $6$ red cubes at the face centers exposes only $6$ red unit faces \u2014 exactly the $7$ best positions for the $7$ red cubes. The minimum fraction is therefore $\\frac{6}{54} = \\frac{1}{9}$. The choice $\\frac{7}{54}$ comes from assuming every red cube must show at least one face, overlooking the completely hidden center position.",
    source: SOURCE,
  },
  {
    // radius-to-corner right triangle in a circle
    id: "s04-q19",
    topic: "geometry",
    difficulty: "medium",
    stem: "A community theater is building a rectangular stage inside a semicircular patio of radius $13$ meters. One side of the stage lies along the straight edge of the patio (the diameter), and the two corners opposite that side touch the curved edge. The side along the diameter is $10$ meters long. What is the area, in square meters, of the stage?",
    choices: ["$60$", "$120$", "$130$", "$169$", "$240$"],
    answerIndex: 1,
    explanation:
      "The key move is to draw a radius from the center of the diameter to one of the top corners of the stage. Since the corners touching the arc are equally high, the stage is centered, so this radius is the hypotenuse of a right triangle whose legs are half the base, $5$ meters, and the stage's height $h$. The Pythagorean theorem gives $h = \\sqrt{13^2 - 5^2} = \\sqrt{144} = 12$, so the area is $10 \\cdot 12 = 120$ square meters. The choice $130$ comes from using the radius $13$ itself as the height instead of applying the Pythagorean theorem.",
    source: SOURCE,
  },
  {
    // probability of a divisibility event on two dice via complement counting
    id: "s04-q20",
    topic: "probability",
    difficulty: "medium",
    stem: "Jordan rolls two fair eight-sided dice, each with faces numbered $1$ through $8$. What is the probability that the product of the two numbers rolled is a multiple of $7$?",
    choices: [
      "$\\frac{1}{64}$",
      "$\\frac{1}{8}$",
      "$\\frac{7}{32}$",
      "$\\frac{15}{64}$",
      "$\\frac{1}{4}$",
    ],
    answerIndex: 3,
    explanation:
      "Since $7$ is prime and $7$ is the only multiple of $7$ from $1$ to $8$, the product is a multiple of $7$ exactly when at least one die shows a $7$. Count the complement: both dice avoid $7$ with probability $\\frac{7}{8} \\cdot \\frac{7}{8} = \\frac{49}{64}$, so the desired probability is $1 - \\frac{49}{64} = \\frac{15}{64}$. Equivalently, $8 + 8 - 1 = 15$ of the $64$ equally likely rolls contain a $7$. The choice $\\frac{1}{4}$ comes from adding $\\frac{1}{8} + \\frac{1}{8}$ without subtracting the double-counted roll where both dice show $7$.",
    source: SOURCE,
  },
  {
    // work backwards greedily through allowed operations (halve when even)
    id: "s04-q21",
    topic: "logic",
    difficulty: "hard",
    stem: "Jordan is playing with a calculator that shows the number $1$. The calculator has exactly two buttons: pressing the first button adds $1$ to the number shown, and pressing the second button doubles the number shown. What is the fewest number of button presses Jordan needs to make the calculator show $172$?",
    choices: ["$8$", "$9$", "$10$", "$11$", "$12$"],
    answerIndex: 2,
    explanation:
      'The key insight is to work backwards from $172$: reversed, the two buttons become "subtract $1$" and "halve," and halving whenever the number is even is optimal because it shrinks the number the most while any solution must undo the same doublings. The backward chain is $172 \\to 86 \\to 43 \\to 42 \\to 21 \\to 20 \\to 10 \\to 5 \\to 4 \\to 2 \\to 1$, which takes exactly $10$ steps. Forward, this means doubling $7$ times and adding $1$ three times, matching the binary form $172 = 10101100_2$: one doubling per place after the leading bit, and one addition for each later $1$ digit. So the fewest number of presses is $10$. Choice $9$ comes from stopping the backward chain at $2$ and forgetting the final halving down to $1$.',
    source: SOURCE,
  },
  {
    // count congruence classes of triangles from a symmetric point set
    id: "s04-q22",
    topic: "counting",
    difficulty: "hard",
    stem: "Priya hammers $7$ pegs into a board: six pegs at the vertices of a regular hexagon with side length $1$, and one peg at the center of the hexagon. She forms a triangle by stretching a rubber band around $3$ of the pegs. How many noncongruent triangles can she form? (Three pegs that lie on a single straight line do not form a triangle.)",
    choices: ["$3$", "$4$", "$5$", "$6$", "$7$"],
    answerIndex: 1,
    explanation:
      "The key insight is to sort the triangles by shape using the hexagon's symmetry instead of checking all the triples of pegs one by one. Three hexagon vertices split the six gaps around the hexagon as $(1,1,4)$, $(1,2,3)$, or $(2,2,2)$, giving side lengths $\\{1, 1, \\sqrt{3}\\}$, $\\{1, \\sqrt{3}, 2\\}$, and $\\{\\sqrt{3}, \\sqrt{3}, \\sqrt{3}\\}$ \u2014 three shapes. Triangles using the center peg come from two adjacent vertices, which give an equilateral triangle with side $1$ (a genuinely new, smaller shape), or from two vertices with one vertex skipped between them, which give sides $\\{1, 1, \\sqrt{3}\\}$ \u2014 congruent to the first shape above; two opposite vertices lie on a line through the center, so they form no triangle. That makes $3 + 2 - 1 = 4$ noncongruent triangles. Choice $5$ counts the center triangle with sides $\\{1, 1, \\sqrt{3}\\}$ as a new shape, missing that it is congruent to the triangle made from three hexagon vertices.",
    source: SOURCE,
  },
  {
    // area comparison of equal-perimeter figures via dissection into unit triangles
    id: "s04-q23",
    topic: "geometry",
    difficulty: "hard",
    stem: "Maya bends two pieces of wire of equal length into shapes: one becomes an equilateral triangle and the other becomes a regular hexagon. The triangle encloses an area of $18$ square centimeters. What is the area, in square centimeters, enclosed by the hexagon?",
    choices: ["$12$", "$18$", "$24$", "$27$", "$36$"],
    answerIndex: 3,
    explanation:
      "The key insight is that equal perimeters make the hexagon's side exactly half the triangle's side, since $6s = 3t$ gives $t = 2s$. Connecting the midpoints of the triangle's sides splits it into $4$ small equilateral triangles whose side length equals the hexagon's side $s$, so each small triangle has area $18 \\div 4 = \\frac{9}{2}$. Connecting the hexagon's center to its six vertices splits the hexagon into $6$ equilateral triangles of that same side $s$, so its area is $6 \\times \\frac{9}{2} = 27$. Choice $18$ comes from assuming that equal perimeters force equal areas.",
    source: SOURCE,
  },
  {
    // count partitions into equal-sum groups
    id: "s04-q24",
    topic: "counting",
    difficulty: "hard",
    stem: "Leo has $8$ stones weighing $1, 2, 3, 4, 5, 6, 7,$ and $8$ pounds. He divides the stones into two groups of $4$ stones each so that both groups have the same total weight. (Two divisions that differ only by swapping the two groups count as the same division.) In how many ways can Leo divide the stones?",
    choices: ["$4$", "$5$", "$6$", "$7$", "$8$"],
    answerIndex: 0,
    explanation:
      "The key insight is that the stones weigh $1 + 2 + \\cdots + 8 = 36$ pounds in all, so each group must weigh exactly $18$ pounds, and fixing the group that contains the $8$-pound stone counts every division exactly once. That group's other three stones must sum to $10$, and the only such triples from $1$ through $7$ are $\\{1, 2, 7\\}$, $\\{1, 3, 6\\}$, $\\{1, 4, 5\\}$, and $\\{2, 3, 5\\}$. Each choice leaves a complementary group of four stones that automatically also sums to $18$, so there are exactly $4$ divisions. Choice $8$ comes from treating the two groups as labeled, which counts every division twice.",
    source: SOURCE,
  },
  {
    // identify the unattainable total under a scoring rule
    id: "s04-q25",
    topic: "number-theory",
    difficulty: "hard",
    stem: "In the Riverbend trivia league, each team faces $15$ questions. Every question is either answered correctly, answered incorrectly, or skipped: a correct answer earns $7$ points, a skipped question earns $2$ points, and an incorrect answer earns $0$ points. Which of the following could not be a team's total score?",
    choices: ["$84$", "$86$", "$88$", "$90$", "$92$"],
    answerIndex: 4,
    explanation:
      "The key insight is that a score of $7c + 2u$ (with $c$ correct and $u$ skipped, $c + u \\le 15$) is even only when $c$ is even, so a score of $92$ forces an even number of correct answers. With $c = 12$ at most $15 - 12 = 3$ questions remain to skip, so the largest possible score is $7(12) + 2(3) = 90$; with $c = 14$ the smallest possible score is already $98$; and smaller even values of $c$ fall far short, so $92$ lies in an unreachable gap. Every other choice is attainable with $12$ correct answers: skipping $0, 1, 2,$ or $3$ of the remaining questions gives $84, 86, 88,$ and $90$. Choice $90$ is the most tempting to reject, but $12$ correct, $3$ skipped, and $0$ incorrect is perfectly allowed.",
    source: SOURCE,
  },
];
