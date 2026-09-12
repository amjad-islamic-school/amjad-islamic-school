// ============================================================
// CLASSROOM LINKS — one place to manage every class's meeting link
// ============================================================
// HOW TO USE:
// 1. Find the category below that matches the program (Weekend School,
//    After-School Program, or Homeschooling).
// 2. Find the exact subject/level name inside that category.
// 3. Replace the '#' with the real Zoom / Google Meet / Teams link for
//    THAT SPECIFIC class only.
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
    "Discover Your Talent": "#",
    "Future Speakers": "#",
    "Light of Knowledge": "#",
    "Me & My Child": "https://classroom.google.com/c/ODI2MzI5OTUwNzIx?cjc=syr7vjq2",
    "Ramadan Family Programs": "#"
  },

  "After-School Program": {
    "After-School Program": "#",           // general registration (no specific program picked)
    "Discover Your Talent": "#",
    "Future Speakers": "#",
    "Light of Knowledge": "#",
    "Me & My Child": "#",
    "Ramadan Family Programs": "#"
  },

  "Homeschooling": {
    "Level 1 — Kindergarten": "#",
    "Level 2 — Grades 1–3": "#",
    "Level 3 — Grades 4–6": "#",
    "Level 4 — Grades 7–8": "#",
    "Amjad Academic Enrichment": "#"
  }

};

// Looks up the correct link for a given category + exact class name.
// Always returns '#' (never crashes) if either isn't found, so the
// registration pages can call this safely even before you've filled
// in every link above.
function getClassroomLink(category, name){
  try{
    const byCategory = CLASSROOM_LINKS[category];
    if(!byCategory) return '#';
    return byCategory[name] || '#';
  }catch(err){
    return '#';
  }
}
