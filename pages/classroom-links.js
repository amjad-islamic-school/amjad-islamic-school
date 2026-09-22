// ============================================================
// CLASSROOM LINKS — one place to manage every class's meeting link
// ============================================================
// HOW TO USE:
// 1. Find the category below that matches the program (Weekend School,
//    After-School Program, Homeschooling, or Islamic Studies Institute).
// 2. Find the exact subject/level name inside that category.
// 3. Replace the value with the real link ENCODED IN BASE64 (see below),
//    or leave it as '#' if there's no link yet.
//
// WHY THE LINKS LOOK LIKE RANDOM TEXT:
// These are the real Zoom / Google Meet / Google Classroom links, but
// encoded (Base64) so they don't sit here in plain, copy-pasteable text.
// This is NOT unbreakable encryption — anyone who really wants to can
// decode it in one line of JavaScript. Its only purpose is to stop
// students from casually right-clicking / viewing the page source and
// grabbing a link to forward to someone outside the school.
//
// HOW TO ADD OR CHANGE A LINK:
// Open the browser console (or any JS tool) and run:
//     btoa("https://the-real-link-here")
// Copy the result and paste it as the value below.
// To leave a class with no link yet, use '#' — do NOT try to encode '#'.
//
// IMPORTANT — why it's split by category:
// "Weekend School" and "After-School Program" both happen to offer a
// program called "Discover Your Talent" (same name, different session).
// If we only matched by name, a Weekend School student could accidentally
// get the After-School classroom link, or vice versa. That's why every
// link is nested under its category first, then its exact name — so two
// classes can never share a link by mistake.
//
// The name must match EXACTLY (spelling, spacing, punctuation, dashes)
// or it will fall back to '#' and the student will see "link not added
// yet" on the My Classes page. Copy names straight from this file rather
// than retyping them.
// ============================================================

const CLASSROOM_LINKS = {

  "Weekend School": {
    "Weekend School": "#",                 // general registration (no specific program picked)
    "Discover Your Talent": "aHR0cHM6Ly9jbGFzc3Jvb20uZ29vZ2xlLmNvbS9jL09EZzFOekEyTVRZd09UZ3g/Y2pjPXJwMmo3bnd3",
    "Future Speakers": "aHR0cHM6Ly9jbGFzc3Jvb20uZ29vZ2xlLmNvbS9jL09EZzFOekEzTURRd016a3g/Y2pjPXFhM3g3dWd0",
    "Light of Knowledge": "aHR0cHM6Ly9jbGFzc3Jvb20uZ29vZ2xlLmNvbS9jL09EZzFOekEzTlRNMk5qUXk/Y2pjPWtqeWVlc2hl",
    "Me & My Child": "aHR0cHM6Ly9jbGFzc3Jvb20uZ29vZ2xlLmNvbS9jL09EZzFOekEzTlRNMk5qUXk/Y2pjPWtqeWVlc2hl",
    "Ramadan Family Programs": "aHR0cHM6Ly9jbGFzc3Jvb20uZ29vZ2xlLmNvbS9jL09EZzFOekUwT1RZNE1UUTM/Y2pjPWp3ejRxaW94"
  },

  "After-School Program": {
    "After-School Program": "#",           // general registration (no specific program picked)
    "Discover Your Talent": "aHR0cHM6Ly9jbGFzc3Jvb20uZ29vZ2xlLmNvbS9jL09EZzFOekUyTVRRNU56QTM/Y2pjPXp5ZjJxcmV1",
    "Future Speakers": "aHR0cHM6Ly9jbGFzc3Jvb20uZ29vZ2xlLmNvbS9jL09EZzFOekV5TlRnMU5UVTQ/Y2pjPXBmbXlnZWtl",
    "Light of Knowledge": "aHR0cHM6Ly9jbGFzc3Jvb20uZ29vZ2xlLmNvbS9jL09EZzFOekV4TkRZd01ERXc/Y2pjPWk0a2RjbXVp",
    "Me & My Child": "aHR0cHM6Ly9jbGFzc3Jvb20uZ29vZ2xlLmNvbS9jL09ESTJORE14TVRJME5ETTQ/Y2pjPTRtbnRydWRs",
    "Ramadan Family Programs": "aHR0cHM6Ly9jbGFzc3Jvb20uZ29vZ2xlLmNvbS9jL09EZzFOekUyTXpNd05qQTU/Y2pjPW1jYW90eTQy"
  },

  "Homeschooling": {
    "Level 1 — Kindergarten": "aHR0cHM6Ly9jbGFzc3Jvb20uZ29vZ2xlLmNvbS9jL09EZzFOekV6TURFeE5UYzQ/Y2pjPWo1bXFrYndq",
    "Level 2 — Grades 1–3": "aHR0cHM6Ly9jbGFzc3Jvb20uZ29vZ2xlLmNvbS9jL09EZzFOekUxTWpnM09UUTU/Y2pjPW5nY2pkeDJr",
    "Level 3 — Grades 4–6": "aHR0cHM6Ly9jbGFzc3Jvb20uZ29vZ2xlLmNvbS9jL09EZzFOekUxTnpVM056QXk/Y2pjPXNqaGtweWN5",
    "Level 4 — Grades 7–8": "aHR0cHM6Ly9jbGFzc3Jvb20uZ29vZ2xlLmNvbS9jL09EZzFOekUxTVRJM056TTA/Y2pjPXMzYTZ0cXB1",
    "Amjad Academic Enrichment": "#"
  },

  "Islamic Studies Institute": {
    "Year 1 — Islamic Foundations": "aHR0cHM6Ly9jbGFzc3Jvb20uZ29vZ2xlLmNvbS9jL09EZzFOekU0TlRBNE5UTTA/Y2pjPTU3aHRsbmtn",
    "Year 2 — Qur'an, Hadith & Arabic Sciences": "aHR0cHM6Ly9jbGFzc3Jvb20uZ29vZ2xlLmNvbS9jL09EZzFOekU1T0RVek1EZzI/Y2pjPXVnZ3puZDNn",
    "Year 3 — Advanced Islamic Sciences": "aHR0cHM6Ly9jbGFzc3Jvb20uZ29vZ2xlLmNvbS9jL09EZzFOekUyTkRFNE5qY3g/Y2pjPXBuY2hwdXJ1",
    "Year 4 — Leadership, Da'wah & Islamic Thought": "aHR0cHM6Ly9jbGFzc3Jvb20uZ29vZ2xlLmNvbS9jL09EZzFOekUzTlRFek9EZ3g/Y2pjPXI3Z2dlYjJw"
  }

};

// Decodes a stored value back into a real, usable link.
// Returns null if there's no link yet (value is '#' or missing).
function getClassroomLink(category, name){
  try{
    const stored = CLASSROOM_LINKS[category] && CLASSROOM_LINKS[category][name];
    if(!stored || stored === '#') return null;
    return atob(stored);
  }catch(err){
    return null;
  }
}
