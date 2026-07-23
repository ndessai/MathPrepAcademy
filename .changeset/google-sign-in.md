---
"@mathprep/core": minor
"@mathprep/api": minor
"@mathprep/web": minor
---

Add sign-in and a post-login competition picker. The app now opens on a sign-in
page: Sign in with Google (rendered when the API is configured with a
`GOOGLE_CLIENT_ID`; ID tokens are verified server-side against Google's JWKS)
or a development name + email sign-in used while Google isn't configured and in
e2e. Sessions are stored server-side in SQLite behind an HttpOnly cookie, with
`/api/auth/{config,me,google,dev,logout}` endpoints. After signing in, the
header shows the student's name and email with a sign-out button, the home page
greets the student and offers AMC 8 / AMC 10 / AMC 12 assessment selection, and
the assessment hub uses the signed-in identity (the "Student name" box is gone)
and supports `?exam=` filtering by competition.
