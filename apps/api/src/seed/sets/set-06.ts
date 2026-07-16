import type { Question } from "@mathprep/core";

const SOURCE = "MathPrep original (AMC 8 style)";

export const SET_06_QUESTIONS: Question[] = [
  {
    // estimate a product using rounding and powers of ten
    id: "s06-q01",
    topic: "arithmetic",
    difficulty: "easy",
    stem: "Maya is estimating the total mass of a pollen sample under a microscope. Each grain of pollen weighs about $0.000398$ milligrams, and the sample contains about $5{,}102{,}000$ grains. Which of the following is closest to the total mass of the sample, in milligrams?",
    choices: ["$20$", "$200$", "$2{,}000$", "$20{,}000$", "$200{,}000$"],
    answerIndex: 2,
    explanation:
      "Round each factor to one significant digit and track the powers of ten: $0.000398 \\approx 4 \\times 10^{-4}$ and $5{,}102{,}000 \\approx 5 \\times 10^{6}$. Their product is $20 \\times 10^{2} = 2{,}000$, and the exact product is about $2{,}031$, so $2{,}000$ is closest. The five choices differ by factors of $10$, so only the power-of-ten bookkeeping matters. Choice $20{,}000$ comes from miscounting the combined exponent by one when multiplying the powers of ten.",
    source: SOURCE,
  },
  {
    // work backwards through a chain of operations
    id: "s06-q02",
    topic: "algebra",
    difficulty: "easy",
    stem: "Leo is reading a book over two days. On Monday he reads half of the pages in the book plus $8$ more pages. On Tuesday he reads half of the remaining pages plus $6$ more pages. After Tuesday, exactly $30$ pages are left. How many pages are in the book?",
    choices: ["$72$", "$80$", "$140$", "$144$", "$160$"],
    answerIndex: 4,
    explanation:
      "Work backwards, undoing the last day first. The $30$ leftover pages are half of Monday's remainder minus $6$, so $30 + 6 = 36$ is half of that remainder, and $72$ pages remained after Monday. Undoing Monday the same way, $72 + 8 = 80$ is half the book, so the book has $2 \\times 80 = 160$ pages. Check: Leo reads $80 + 8 = 88$ pages Monday, leaving $72$, then $36 + 6 = 42$ pages Tuesday, leaving $30$. Choice $140$ comes from doubling first and then adding back the extra pages when reversing each day.",
    source: SOURCE,
  },
  {
    // difference of cumulative 'at least' counts
    id: "s06-q03",
    topic: "data-analysis",
    difficulty: "easy",
    stem: "The organizer of a school reading challenge reports the results as cumulative counts:\n- $62$ students read at least $10$ books\n- $45$ students read at least $20$ books\n- $28$ students read at least $30$ books\n- $9$ students read at least $40$ books\nHow many students read at least $20$ books but fewer than $30$ books?",
    choices: ["$17$", "$19$", "$34$", "$36$", "$45$"],
    answerIndex: 0,
    explanation:
      "Because the counts are cumulative, every student in the 'at least $30$' row is also counted in the 'at least $20$' row. So the students who read at least $20$ but fewer than $30$ books number $45 - 28 = 17$. Choice $19$ comes from subtracting the wrong pair of rows ($28 - 9$), and choice $34$ from using $62 - 28$. Choice $45$ comes from reading the 'at least $20$' row directly and forgetting to remove the students who read $30$ or more books.",
    source: SOURCE,
  },
  {
    // age problem via shifting a timeline
    id: "s06-q04",
    topic: "algebra",
    difficulty: "easy",
    stem: "Jordan is $4$ years older than his sister Mia, and their puppy is $2$ years old. In $6$ years, the sum of Jordan's age, Mia's age, and the puppy's age will be $40$. How old, in years, is Jordan now?",
    choices: ["$8$", "$10$", "$12$", "$15$", "$18$"],
    answerIndex: 2,
    explanation:
      "Shift the whole timeline forward: in $6$ years the puppy will be $2 + 6 = 8$, so Jordan's and Mia's future ages must sum to $40 - 8 = 32$. Removing the $6$ years each of them gains, their current ages sum to $32 - 12 = 20$. Since Jordan is $4$ years older, Mia is $8$ and Jordan is $12$. Check: in $6$ years the ages $18$, $14$, and $8$ do sum to $40$. Choice $15$ comes from forgetting that the puppy also ages $6$ years, and choice $18$ is Jordan's age in $6$ years rather than now.",
    source: SOURCE,
  },
  {
    // evaluate a nested custom operation
    id: "s06-q05",
    topic: "algebra",
    difficulty: "easy",
    stem: "For any two numbers $a$ and $b$, the operation $\\star$ is defined by $a \\star b = 2a + b$. For example, $1 \\star 5 = 2 \\cdot 1 + 5 = 7$. What is the value of $(3 \\star 2) \\star 4$?",
    choices: ["$8$", "$14$", "$16$", "$20$", "$24$"],
    answerIndex: 3,
    explanation:
      "Evaluate the operation in parentheses first: $3 \\star 2 = 2 \\cdot 3 + 2 = 8$. Then feed that result in as the first input: $8 \\star 4 = 2 \\cdot 8 + 4 = 20$. The order matters because $\\star$ doubles only its first input. Choice $14$ comes from grouping from the right and computing $3 \\star (2 \\star 4)$ instead, and choice $16$ from swapping the inputs in the second step.",
    source: SOURCE,
  },
  {
    // percent of a monetary face value
    id: "s06-q06",
    topic: "arithmetic",
    difficulty: "easy",
    stem: "A coin dealer offers to pay $1500\\%$ of face value for old nickels. (A nickel has a face value of $5$ cents.) Sam sells the dealer $6$ nickels. How much money, in dollars, does Sam receive?",
    choices: ["$0.45$", "$4.50$", "$4.80$", "$45$", "$450$"],
    answerIndex: 1,
    explanation:
      "A payment of $1500\\%$ of face value means a multiplier of $15$. Six nickels have a face value of $6 \\times \\$0.05 = \\$0.30$, so Sam receives $15 \\times \\$0.30 = \\$4.50$. Choice $4.80$ comes from adding $1500\\%$ to the original value (a multiplier of $16$), and choice $0.45$ from treating $1500\\%$ as a multiplier of $1.5$. Choice $450$ comes from multiplying by $1500$ instead of $15$, forgetting to convert the percent.",
    source: SOURCE,
  },
  {
    // chain ratios through successive multiplications
    id: "s06-q07",
    topic: "arithmetic",
    difficulty: "easy",
    stem: "Amara is mixing a batch of trail mix. For every cup of raisins she uses $3$ cups of peanuts, and for every cup of peanuts she uses $2$ cups of granola. If Amara uses $2$ cups of raisins, how many cups of granola does she use?",
    choices: ["$5$", "$6$", "$10$", "$12$", "$24$"],
    answerIndex: 3,
    explanation:
      "Chain the ratios by multiplying through them in order. Two cups of raisins call for $2 \\times 3 = 6$ cups of peanuts, and those $6$ cups of peanuts call for $6 \\times 2 = 12$ cups of granola. Choice $10$ comes from adding the ratio numbers $3 + 2$ and multiplying by the $2$ cups of raisins, and choice $24$ from multiplying by the $2$ cups of raisins a second time. Choice $6$ is the number of cups of peanuts \u2014 the result of stopping one step early in the chain.",
    source: SOURCE,
  },
  {
    // off-by-one count of annual events to date an age
    id: "s06-q08",
    topic: "algebra",
    difficulty: "easy",
    stem: "The first annual Maple Grove Puzzle Festival was held in $2004$. Nina turned $9$ years old in the year she attended the twelfth annual festival. In what year was Nina born?",
    choices: ["$1995$", "$2005$", "$2006$", "$2007$", "$2015$"],
    answerIndex: 2,
    explanation:
      "The key is a fencepost count: the twelfth annual festival happens $11$ years after the first, since the first festival itself adds $0$ years. So the twelfth festival was held in $2004 + 11 = 2015$, and since Nina turned $9$ that year, she was born in $2015 - 9 = 2006$. Choice $1995$ comes from subtracting Nina's age from the first festival's year instead of the twelfth's, and $2015$ is the festival year itself, one step short of the answer. The most tempting distractor, $2007$, comes from adding $12$ years instead of $11$ to find the festival year.",
    source: SOURCE,
  },
  {
    // evaluate expression respecting order of operations
    id: "s06-q09",
    topic: "arithmetic",
    difficulty: "easy",
    stem: "What is the value of $(4 \\times 9 + 3) - (6 + 2 \\times 5)$?",
    choices: ["$8$", "$23$", "$33$", "$39$", "$43$"],
    answerIndex: 1,
    explanation:
      "Multiplication is done before addition inside each set of parentheses: $4 \\times 9 + 3 = 36 + 3 = 39$ and $6 + 2 \\times 5 = 6 + 10 = 16$. Subtracting gives $39 - 16 = 23$. Choice $43$ comes from distributing the subtraction incorrectly as $39 - 6 + 10$, and choice $33$ from dropping the $2 \\times 5$ term entirely. Choice $8$ comes from adding before multiplying, computing $4 \\times (9 + 3) = 48$ and $(6 + 2) \\times 5 = 40$.",
    source: SOURCE,
  },
  {
    // solve for time from fixed head start plus constant rate
    id: "s06-q10",
    topic: "algebra",
    difficulty: "easy",
    stem: "Priya wants to buy a telescope that costs $\\$300$. She has already saved $\\$60$ of birthday money, and she earns $\\$15$ each week walking her neighbor's dog. If she saves all of her earnings, after how many weeks of dog walking will Priya have exactly enough money to buy the telescope?",
    choices: ["$15$", "$16$", "$17$", "$20$", "$24$"],
    answerIndex: 1,
    explanation:
      "Priya only needs to earn the difference between the price and her head start: $\\$300 - \\$60 = \\$240$. At $\\$15$ per week, that takes $240 \\div 15 = 16$ weeks. Check: after $16$ weeks she has $\\$60 + 16 \\times \\$15 = \\$300$, exactly the price. Choices $15$ and $17$ are off-by-one miscounts of the weeks. Choice $20$ comes from dividing the full $\\$300$ price by $\\$15$ and ignoring the $\\$60$ she has already saved.",
    source: SOURCE,
  },
  {
    // digit-position casework count
    id: "s06-q11",
    topic: "counting",
    difficulty: "medium",
    stem: "Maya lists every three-digit number that contains the digit $7$ exactly once. How many numbers are on Maya's list?",
    choices: ["$216$", "$225$", "$243$", "$252$", "$270$"],
    answerIndex: 1,
    explanation:
      "Split into cases by which position holds the lone $7$. If the hundreds digit is $7$, the tens and units digits can each be any of the $9$ digits other than $7$, giving $9 \\cdot 9 = 81$ numbers. If the tens digit is $7$, the hundreds digit must be nonzero and not $7$ ($8$ choices) while the units digit has $9$ choices, giving $8 \\cdot 9 = 72$ numbers, and the same count applies when the units digit is $7$. The total is $81 + 72 + 72 = 225$. Choice $243$ comes from treating all three cases as $9 \\cdot 9 = 81$, forgetting that the hundreds digit cannot be $0$.",
    source: SOURCE,
  },
  {
    // annulus area via tangent chord right triangle
    id: "s06-q12",
    topic: "geometry",
    difficulty: "medium",
    stem: "A flat metal washer is the region between two circles that have the same center. A straight scratch on the washer is $20$ centimeters long, has both endpoints on the outer circle, and touches the inner circle at exactly one point. What is the area, in square centimeters, of the washer?",
    choices: ["$25\\pi$", "$50\\pi$", "$100\\pi$", "$200\\pi$", "$400\\pi$"],
    answerIndex: 2,
    explanation:
      "The key is that the inner radius drawn to the point of tangency is perpendicular to the scratch and meets it at its midpoint. If $R$ and $r$ are the outer and inner radii, this creates a right triangle with legs $r$ and $10$ and hypotenuse $R$, so $R^2 - r^2 = 10^2 = 100$. The washer's area is $\\pi R^2 - \\pi r^2 = \\pi(R^2 - r^2) = 100\\pi$, with no need to find either radius separately. Choice $400\\pi$ comes from using the full scratch length $20$ instead of the half-length $10$ as the leg of the right triangle.",
    source: SOURCE,
  },
  {
    // scale volume by the cube of the linear factor
    id: "s06-q13",
    topic: "geometry",
    difficulty: "medium",
    stem: "Jordan's classroom aquarium holds exactly $4$ liters of water when full. The science museum has a display aquarium of exactly the same shape, but every dimension \u2014 length, width, and height \u2014 is $3$ times as large. How many liters of water does the display aquarium hold when full?",
    choices: ["$12$", "$36$", "$64$", "$108$", "$324$"],
    answerIndex: 3,
    explanation:
      "When every linear dimension is scaled by a factor of $3$, the volume scales by $3^3 = 27$, not by $3$ or by $3^2$. So the display aquarium holds $27 \\cdot 4 = 108$ liters. Choices $12$ and $324$ come from scaling by $3$ and by $3^4$ respectively, and $64$ comes from cubing the $4$ liters instead of the scale factor. The most tempting error, choice $36$, scales the capacity by $3^2 = 9$, as if it grew like area rather than volume.",
    source: SOURCE,
  },
  {
    // area ratio from similar figures with given side ratio
    id: "s06-q14",
    topic: "geometry",
    difficulty: "medium",
    stem: "A park is shaped like an equilateral triangle with side length $5$ meters. In the middle of the park is a flower bed shaped like an equilateral triangle with side length $2$ meters; the two triangles have the same center, and their sides are parallel. A straight path joins each vertex of the flower bed to the nearest vertex of the park, dividing the lawn between the two triangles into $3$ congruent trapezoids. What is the ratio of the area of one trapezoid to the area of the flower bed?",
    choices: ["$4 : 7$", "$7 : 4$", "$5 : 2$", "$21 : 4$", "$25 : 4$"],
    answerIndex: 1,
    explanation:
      "Because the two triangles are similar with side ratio $5 : 2$, their areas are in the ratio $5^2 : 2^2 = 25 : 4$. Taking the flower bed's area as $4$ units makes the whole park $25$ units, so the lawn between the triangles has area $25 - 4 = 21$ units, and by symmetry each of the $3$ congruent trapezoids has area $7$ units. The requested ratio is therefore $7 : 4$. Choice $21 : 4$ forgets to divide the lawn among the three trapezoids, and the most tempting error, choice $5 : 2$, compares side lengths directly \u2014 but area scales with the square of the side ratio.",
    source: SOURCE,
  },
  {
    // area ratios from parallel lines and similar triangles
    id: "s06-q15",
    topic: "geometry",
    difficulty: "medium",
    stem: "Nadia is painting a triangular banner $ABC$. Points $D$ and $E$ lie on side $AB$ with $AD = \\frac{1}{2} AB$ and $AE = \\frac{3}{4} AB$. The lines through $D$ and $E$ parallel to side $BC$ divide the banner into $3$ regions, and Nadia paints the middle region gold. What fraction of the banner's area is painted gold?",
    choices: [
      "$\\frac{1}{16}$",
      "$\\frac{3}{16}$",
      "$\\frac{1}{4}$",
      "$\\frac{5}{16}$",
      "$\\frac{9}{16}$",
    ],
    answerIndex: 3,
    explanation:
      "Each line parallel to $BC$ cuts off a triangle similar to $ABC$, and area scales with the square of the similarity ratio. The line through $E$ cuts off a triangle of area $\\left(\\frac{3}{4}\\right)^2 = \\frac{9}{16}$ of the banner, and the line through $D$ cuts off one of area $\\left(\\frac{1}{2}\\right)^2 = \\frac{1}{4}$. The gold middle region is the difference: $\\frac{9}{16} - \\frac{1}{4} = \\frac{5}{16}$. Choice $\\frac{1}{4}$ comes from linear reasoning \u2014 taking $AE - AD = \\frac{1}{4}$ of the base as the fraction of the area \u2014 but the regions grow with the square of the ratio, not the ratio itself.",
    source: SOURCE,
  },
  {
    // maximize a number under a digit-product constraint
    id: "s06-q16",
    topic: "number-theory",
    difficulty: "medium",
    stem: "Leo writes down the greatest four-digit number whose digits have a product of $72$. What is the sum of the digits of Leo's number?",
    choices: ["$15$", "$16$", "$17$", "$18$", "$19$"],
    answerIndex: 4,
    explanation:
      "To make the number as large as possible, make the leading digit as large as possible, then the next, and so on, while keeping the digit product equal to $72$. The first digit can be $9$, leaving a product of $8$ for three digits; the second digit can then be $8$, leaving a product of $1$, so the last two digits are both $1$. Leo's number is $9811$, and its digit sum is $9 + 8 + 1 + 1 = 19$. Choice $16$ comes from settling for $9421$ instead of pushing the second digit to its maximum, and choice $17$ comes from adding only $9 + 8$ and forgetting the two $1$s.",
    source: SOURCE,
  },
  {
    // deduce a ranking from knowledge-based statements
    id: "s06-q17",
    topic: "logic",
    difficulty: "medium",
    stem: "Tess, Priya, and Sam took the same quiz, and their three scores were all different. Tess showed her score to the other two, but Priya and Sam kept theirs hidden, so Priya and Sam each saw exactly two scores: their own and Tess's. Priya announced, 'I am certain I did not get the lowest score.' Then Sam announced, 'I am certain I did not get the highest score.' Both announcements were correct, and each speaker was certain based only on the scores they had seen. What is the order of the three scores from highest to lowest?",
    choices: [
      "Priya, Sam, Tess",
      "Sam, Tess, Priya",
      "Tess, Priya, Sam",
      "Tess, Sam, Priya",
      "Priya, Tess, Sam",
    ],
    answerIndex: 4,
    explanation:
      "The key is to ask what each speaker could actually know. Priya saw only her own score and Tess's, so she could be certain she was not lowest only if she beat Tess \u2014 otherwise Sam's hidden score would leave open the chance that Priya was last. Similarly, Sam could be certain he was not highest only if he scored below Tess, since he could not rule out Priya outscoring him in any other case. Therefore Priya $>$ Tess $>$ Sam, and the order from highest to lowest is Priya, Tess, Sam. The choice Tess, Priya, Sam comes from assuming the person who showed her score must have scored highest, rather than analyzing what each speaker could be certain of.",
    source: SOURCE,
  },
  {
    // enumerate integer triangles under perimeter and triangle-inequality constraints
    id: "s06-q18",
    topic: "counting",
    difficulty: "medium",
    stem: "Amara has $27$ toothpicks, each $1$ inch long. Using all $27$ toothpicks without breaking or overlapping any, she forms the border of a triangle that has at least two sides of the same length. How many non-congruent triangles can Amara form this way?",
    choices: ["$5$", "$6$", "$7$", "$8$", "$13$"],
    answerIndex: 2,
    explanation:
      "Such a triangle has sides of $a$, $a$, and $27 - 2a$ toothpicks. The triangle inequality requires $a + a > 27 - 2a$, which gives $a \\geq 7$, and the base must use at least one toothpick, so $27 - 2a \\geq 1$ gives $a \\leq 13$. Every value $a = 7, 8, 9, 10, 11, 12, 13$ produces a valid triangle \u2014 including the equilateral $9, 9, 9$ \u2014 so there are $7$ triangles. Choice $13$ ignores the triangle inequality entirely, and the most tempting error, choice $6$, excludes the equilateral triangle, which still has at least two equal sides.",
    source: SOURCE,
  },
  {
    // parity of squares constrains a sum
    id: "s06-q19",
    topic: "number-theory",
    difficulty: "medium",
    stem: "Felix chooses two positive integers $m$ and $n$, not necessarily different, so that $m^2 + n^2$ is even. Which of the following cannot be the value of $m + n$?",
    choices: ["$15$", "$16$", "$22$", "$26$", "$30$"],
    answerIndex: 0,
    explanation:
      "A perfect square has the same parity as the number being squared: odd numbers have odd squares and even numbers have even squares. For $m^2 + n^2$ to be even, the two squares must have the same parity, so $m$ and $n$ have the same parity \u2014 and two numbers of the same parity always have an even sum. Thus $m + n$ can never be odd, which rules out $15$; every even choice is achievable, for example $8 + 8 = 16$ and $11 + 11 = 22$. Rejecting an even value like $16$ comes from assuming both integers must be odd, when two even integers satisfy the condition just as well.",
    source: SOURCE,
  },
  {
    // case split on which angle of an isosceles triangle repeats
    id: "s06-q20",
    topic: "geometry",
    difficulty: "medium",
    stem: "In isosceles triangle $PQR$, $\\angle P$ measures $40^\\circ$. The measure of $\\angle Q$ is not determined, because the problem does not say which two angles of the triangle are equal. What is the sum, in degrees, of all the possible measures of $\\angle Q$?",
    choices: ["$110$", "$140$", "$170$", "$210$", "$250$"],
    answerIndex: 3,
    explanation:
      "The $40^\\circ$ angle can play three different roles. If $\\angle P$ is the apex angle, the two equal base angles measure $\\frac{180 - 40}{2} = 70$, so $\\angle Q = 70^\\circ$. If $\\angle P$ and $\\angle Q$ are the equal angles, then $\\angle Q = 40^\\circ$; if instead $\\angle P$ and $\\angle R$ are the equal angles, then $\\angle Q = 180 - 40 - 40 = 100^\\circ$. The sum of the possible measures is $40 + 70 + 100 = 210$. Choice $170$ comes from dropping the case $\\angle Q = 40^\\circ$, forgetting that $\\angle Q$ itself may be one of the two equal angles.",
    source: SOURCE,
  },
  {
    // probability over a product sample space with a divisor/square condition
    id: "s06-q21",
    topic: "probability",
    difficulty: "hard",
    stem: "At the Riverbend carnival, Amara plays a game with a deck of $12$ cards numbered $1$ through $12$ and a fair eight-sided die whose faces show the numbers $1$ through $8$. She draws one card at random and rolls the die once, and she wins a prize if the product of the number on her card and the number she rolls is a perfect square. What is the probability that Amara wins a prize?",
    choices: [
      "$\\frac{1}{16}$",
      "$\\frac{1}{12}$",
      "$\\frac{5}{48}$",
      "$\\frac{5}{32}$",
      "$\\frac{1}{6}$",
    ],
    answerIndex: 3,
    explanation:
      "The key is to count, for each card, the die faces whose product with it is a perfect square. Listing the squares up to $96$: the product is $1$ only for $(1,1)$; it is $4$ for $(1,4)$, $(4,1)$, $(2,2)$; it is $9$ for $(9,1)$, $(3,3)$; it is $16$ for $(2,8)$, $(4,4)$, $(8,2)$; it is $25$ for $(5,5)$; it is $36$ for $(6,6)$, $(9,4)$, $(12,3)$; it is $49$ for $(7,7)$; and it is $64$ for $(8,8)$. That is $1+3+2+3+1+3+1+1 = 15$ winning pairs out of $12 \\times 8 = 96$ equally likely pairs, so the probability is $\\frac{15}{96} = \\frac{5}{32}$. The most tempting wrong answer, $\\frac{1}{12}$, counts only the $8$ doubles where the die roll matches the card, missing mixed squares like $2 \\times 8 = 16$ and $12 \\times 3 = 36$.",
    source: SOURCE,
  },
  {
    // count numbers avoiding a forbidden digit position by position
    id: "s06-q22",
    topic: "counting",
    difficulty: "hard",
    stem: "Tickets for the Brookfield spring raffle are numbered with the whole numbers from $1$ to $4999$. Priya calls a ticket lucky if no digit of its number is a $3$. How many of the tickets are lucky?",
    choices: ["$2187$", "$2915$", "$2916$", "$3644$", "$6560$"],
    answerIndex: 1,
    explanation:
      "Count position by position: write each ticket number as a four-digit string from $0001$ to $4999$. The thousands digit must be one of $0$, $1$, $2$, or $4$ \u2014 that is $4$ choices, since $3$ is forbidden and the number is at most $4999$ \u2014 while each of the other three digits can be any of the $9$ digits other than $3$. This gives $4 \\times 9^3 = 2916$ strings, and removing the string $0000$, which is not a ticket, leaves $2915$. As a check, counting by length gives $8 + 72 + 648 + 3 \\cdot 729 = 2915$ as well. The most tempting wrong answer, $2916$, forgets to discard the string $0000$, which does not correspond to any ticket.",
    source: SOURCE,
  },
  {
    // area of a plane cross-section of a cube via space and face diagonals
    id: "s06-q23",
    topic: "geometry",
    difficulty: "hard",
    stem: "A cube has edge length $4$; its vertices are the eight points $(x, y, z)$ in which each coordinate is $0$ or $4$. A plane slices the cube through vertex $A = (0, 0, 0)$, vertex $G = (4, 4, 4)$, the point $M = (4, 0, 2)$, which is the midpoint of the edge from $(4, 0, 0)$ to $(4, 0, 4)$, and the point $N = (0, 4, 2)$, which is the midpoint of the edge from $(0, 4, 0)$ to $(0, 4, 4)$. What is the area of quadrilateral $AMGN$?",
    choices: ["$2\\sqrt{6}$", "$8\\sqrt{2}$", "$8\\sqrt{3}$", "$16$", "$8\\sqrt{6}$"],
    answerIndex: 4,
    explanation:
      "The key is that $AMGN$ is a rhombus whose diagonals are a space diagonal and a face diagonal of the cube. Segments $AM$ and $NG$ both run along the vector $(4, 0, 2)$, so $AMGN$ is a parallelogram, and all four sides have length $\\sqrt{4^2 + 2^2} = 2\\sqrt{5}$, so it is a rhombus. Its diagonal $AG$ is a space diagonal of length $4\\sqrt{3}$, and its diagonal $MN$, from $(4, 0, 2)$ to $(0, 4, 2)$, has length $\\sqrt{4^2 + 4^2} = 4\\sqrt{2}$. A rhombus has area half the product of its diagonals, so the area is $\\frac{1}{2} \\cdot 4\\sqrt{3} \\cdot 4\\sqrt{2} = 8\\sqrt{6}$. The most tempting wrong answer, $16$, assumes the slice has the same area as a square face of the cube, but the tilted cross-section is strictly larger.",
    source: SOURCE,
  },
  {
    // race between two completion events in sequential draws
    id: "s06-q24",
    topic: "probability",
    difficulty: "hard",
    stem: "A jar contains $4$ lime candies and $3$ cherry candies, identical except for flavor. Sam draws candies from the jar one at a time at random, without replacement, until the jar is empty. What is the probability that Sam finishes drawing all $4$ lime candies before he finishes drawing all $3$ cherry candies?",
    choices: [
      "$\\frac{1}{35}$",
      "$\\frac{1}{7}$",
      "$\\frac{3}{7}$",
      "$\\frac{1}{2}$",
      "$\\frac{4}{7}$",
    ],
    answerIndex: 2,
    explanation:
      "The key insight is that the limes run out before the cherries exactly when the very last candy drawn is cherry: the fourth lime comes before the third cherry precisely when a cherry occupies the final, seventh position. Since the candies are drawn in a uniformly random order, each of the $7$ candies is equally likely to be the last one, and $3$ of them are cherry. So the probability is $\\frac{3}{7}$. The most tempting wrong answer, $\\frac{1}{2}$, assumes the two flavors are equally likely to run out first, ignoring that there are more limes to get through than cherries.",
    source: SOURCE,
  },
  {
    // deduce assignments from pairwise sums under range constraints
    id: "s06-q25",
    topic: "logic",
    difficulty: "hard",
    stem: "Maya, Jordan, and Leo each entered a stone sculpture in the Riverbend Art Fair, which holds several shows each month. Each sculpture weighs a whole number of kilograms that is a perfect square greater than $1$, and no two of the sculptures weigh the same. Today, at the current show, the three friends notice the following.\n- Jordan's and Maya's sculptures together weigh as many kilograms as the day of the month of this month's earlier show, which has already taken place.\n- Jordan's and Leo's sculptures together weigh as many kilograms as today's day of the month.\n- Leo's and Maya's sculptures together weigh as many kilograms as the day of the month of the next show, later this month.\nWhat is the weight, in kilograms, of Jordan's sculpture?",
    choices: ["$4$", "$9$", "$13$", "$16$", "$20$"],
    answerIndex: 0,
    explanation:
      "The key is that all three pairwise sums are days of the same month, so each is at most $31$. If any sculpture weighed $25$ kilograms or more, its sum with the larger of the other two weights (at least $9$) would be at least $34$, which is impossible \u2014 so the three weights must be $4$, $9$, and $16$, with pairwise sums $13$, $20$, and $25$. The show dates satisfy earlier $<$ today $<$ later, so Jordan $+$ Maya $= 13$, Jordan $+$ Leo $= 20$, and Leo $+$ Maya $= 25$. Subtracting the first equation from the second gives Leo $-$ Maya $= 7$, so Leo weighs $16$, Maya weighs $9$, and Jordan weighs $20 - 16 = 4$. The most tempting wrong answer, $16$, is the weight of Leo's sculpture \u2014 the heaviest one \u2014 not Jordan's.",
    source: SOURCE,
  },
];
