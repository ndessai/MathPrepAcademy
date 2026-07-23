---
"@mathprep/core": minor
"@mathprep/api": minor
"@mathprep/web": minor
---

Add AMC 10 and AMC 12 support with one full verified practice set each. Assessments
now carry an exam type with official contest scoring — AMC 8 stays +1/0/0 in 40
minutes; AMC 10/12 score +6 per correct, +1.5 per blank (max 150) over 75 minutes —
and score reports use per-contest performance bands (AIME qualification pace for
10/12). The seed's practice sets are partitioned by contest
(`seed/sets/{amc8,amc10,amc12}/`), the hub groups exams into AMC 8 / AMC 10 / AMC 12
sections, and a precalculus topic covers AMC 12 trig/log/complex content. Both new
sets were authored against style guides mined from the real 2022-2024 exams and every
question passed independent multi-solver verification.
