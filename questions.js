const QUESTION_BANK = [
  {
    "id": "Q0001",
    "exam": "WAEC",
    "level": "Secondary School",
    "subject": "Mathematics",
    "topic": "Algebra",
    "question": "If 3x + 5 = 20, find x.",
    "options": [
      "3",
      "5",
      "7",
      "15"
    ],
    "correctIndex": 1,
    "explanation": "Subtract 5 from both sides to get 3x = 15. Divide by 3, so x = 5.",
    "sourceNote": "Inspired by WAEC/WASSCE syllabus and public sample-question format."
  },
  {
    "id": "Q0002",
    "exam": "WAEC",
    "level": "Secondary School",
    "subject": "Mathematics",
    "topic": "Indices",
    "question": "Simplify 2^3 \u00d7 2^4.",
    "options": [
      "2^7",
      "2^12",
      "4^7",
      "16"
    ],
    "correctIndex": 0,
    "explanation": "When multiplying powers with the same base, add the powers: 2^(3+4) = 2^7.",
    "sourceNote": "Inspired by WAEC/WASSCE syllabus and public sample-question format."
  },
  {
    "id": "Q0003",
    "exam": "WAEC",
    "level": "Secondary School",
    "subject": "Mathematics",
    "topic": "Mensuration",
    "question": "The area of a rectangle is 48 cm\u00b2 and its length is 8 cm. Find its breadth.",
    "options": [
      "4 cm",
      "6 cm",
      "8 cm",
      "12 cm"
    ],
    "correctIndex": 1,
    "explanation": "Area = length \u00d7 breadth. Breadth = 48 \u00f7 8 = 6 cm.",
    "sourceNote": "Inspired by WAEC/WASSCE syllabus and public sample-question format."
  },
  {
    "id": "Q0004",
    "exam": "WAEC",
    "level": "Secondary School",
    "subject": "English",
    "topic": "Grammar",
    "question": "Choose the correct sentence.",
    "options": [
      "He do not like rice.",
      "He does not like rice.",
      "He did not likes rice.",
      "He don\u2019t likes rice."
    ],
    "correctIndex": 1,
    "explanation": "With the singular subject \u201che\u201d, the correct auxiliary is \u201cdoes\u201d; the main verb remains \u201clike\u201d.",
    "sourceNote": "Inspired by WAEC/WASSCE syllabus and public sample-question format."
  },
  {
    "id": "Q0005",
    "exam": "WAEC",
    "level": "Secondary School",
    "subject": "English",
    "topic": "Vocabulary",
    "question": "Choose the word nearest in meaning to \u201cbrief\u201d.",
    "options": [
      "short",
      "heavy",
      "late",
      "difficult"
    ],
    "correctIndex": 0,
    "explanation": "\u201cBrief\u201d means short in time, length, or words.",
    "sourceNote": "Inspired by WAEC/WASSCE syllabus and public sample-question format."
  },
  {
    "id": "Q0006",
    "exam": "WAEC",
    "level": "Secondary School",
    "subject": "Biology",
    "topic": "Cell Biology",
    "question": "Which organelle is mainly responsible for photosynthesis in plants?",
    "options": [
      "Mitochondrion",
      "Ribosome",
      "Chloroplast",
      "Nucleus"
    ],
    "correctIndex": 2,
    "explanation": "Chloroplasts contain chlorophyll, which traps light energy for photosynthesis.",
    "sourceNote": "Inspired by WAEC/WASSCE syllabus and public sample-question format."
  },
  {
    "id": "Q0007",
    "exam": "WAEC",
    "level": "Secondary School",
    "subject": "Biology",
    "topic": "Ecology",
    "question": "In a food chain, green plants are called _____.",
    "options": [
      "consumers",
      "producers",
      "decomposers",
      "predators"
    ],
    "correctIndex": 1,
    "explanation": "Green plants produce their own food by photosynthesis, so they are producers.",
    "sourceNote": "Inspired by WAEC/WASSCE syllabus and public sample-question format."
  },
  {
    "id": "Q0008",
    "exam": "WAEC",
    "level": "Secondary School",
    "subject": "Chemistry",
    "topic": "Atomic Structure",
    "question": "An atom with 11 protons has atomic number _____.",
    "options": [
      "10",
      "11",
      "12",
      "22"
    ],
    "correctIndex": 1,
    "explanation": "The atomic number of an element equals the number of protons in its atom.",
    "sourceNote": "Inspired by WAEC/WASSCE syllabus and public sample-question format."
  },
  {
    "id": "Q0009",
    "exam": "WAEC",
    "level": "Secondary School",
    "subject": "Chemistry",
    "topic": "Acids and Bases",
    "question": "A solution with pH 2 is _____.",
    "options": [
      "strongly acidic",
      "neutral",
      "weakly alkaline",
      "strongly alkaline"
    ],
    "correctIndex": 0,
    "explanation": "pH values below 7 are acidic. pH 2 indicates a strong acid.",
    "sourceNote": "Inspired by WAEC/WASSCE syllabus and public sample-question format."
  },
  {
    "id": "Q0010",
    "exam": "WAEC",
    "level": "Secondary School",
    "subject": "Physics",
    "topic": "Motion",
    "question": "A car travels 100 m in 5 s. Its average speed is _____.",
    "options": [
      "5 m/s",
      "20 m/s",
      "50 m/s",
      "500 m/s"
    ],
    "correctIndex": 1,
    "explanation": "Average speed = distance \u00f7 time = 100 \u00f7 5 = 20 m/s.",
    "sourceNote": "Inspired by WAEC/WASSCE syllabus and public sample-question format."
  },
  {
    "id": "Q0011",
    "exam": "WAEC",
    "level": "Secondary School",
    "subject": "Physics",
    "topic": "Electricity",
    "question": "The SI unit of electric current is _____.",
    "options": [
      "volt",
      "ampere",
      "ohm",
      "watt"
    ],
    "correctIndex": 1,
    "explanation": "Electric current is measured in amperes.",
    "sourceNote": "Inspired by WAEC/WASSCE syllabus and public sample-question format."
  },
  {
    "id": "Q0012",
    "exam": "WAEC",
    "level": "Secondary School",
    "subject": "Government",
    "topic": "Constitution",
    "question": "The 1954 Lyttleton Constitution is important because it strengthened ____ in Nigeria.",
    "options": [
      "unitary rule",
      "federalism",
      "military government",
      "one-party rule"
    ],
    "correctIndex": 1,
    "explanation": "The 1954 Constitution gave clearer federal structure to Nigeria by recognizing regions and their powers.",
    "sourceNote": "Inspired by WAEC/WASSCE syllabus and public sample-question format."
  },
  {
    "id": "Q0013",
    "exam": "WAEC",
    "level": "Secondary School",
    "subject": "Economics",
    "topic": "Demand",
    "question": "When price rises and quantity demanded falls, this shows the law of _____.",
    "options": [
      "supply",
      "demand",
      "cost",
      "utility"
    ],
    "correctIndex": 1,
    "explanation": "The law of demand states that, other things being equal, higher price leads to lower quantity demanded.",
    "sourceNote": "Inspired by WAEC/WASSCE syllabus and public sample-question format."
  },
  {
    "id": "Q0014",
    "exam": "WAEC",
    "level": "Secondary School",
    "subject": "CRS",
    "topic": "Old Testament",
    "question": "Who led the Israelites out of Egypt?",
    "options": [
      "Joshua",
      "Moses",
      "David",
      "Samuel"
    ],
    "correctIndex": 1,
    "explanation": "Moses was called to lead the Israelites out of bondage in Egypt.",
    "sourceNote": "Inspired by WAEC/WASSCE syllabus and public sample-question format."
  },
  {
    "id": "Q0015",
    "exam": "NECO",
    "level": "Secondary School",
    "subject": "Mathematics",
    "topic": "Algebra",
    "question": "If 3x + 5 = 20, find x.",
    "options": [
      "3",
      "5",
      "7",
      "15"
    ],
    "correctIndex": 1,
    "explanation": "Subtract 5 from both sides to get 3x = 15. Divide by 3, so x = 5.",
    "sourceNote": "Inspired by NECO senior secondary objective-question format."
  },
  {
    "id": "Q0016",
    "exam": "NECO",
    "level": "Secondary School",
    "subject": "Mathematics",
    "topic": "Indices",
    "question": "Simplify 2^3 \u00d7 2^4.",
    "options": [
      "2^7",
      "2^12",
      "4^7",
      "16"
    ],
    "correctIndex": 0,
    "explanation": "When multiplying powers with the same base, add the powers: 2^(3+4) = 2^7.",
    "sourceNote": "Inspired by NECO senior secondary objective-question format."
  },
  {
    "id": "Q0017",
    "exam": "NECO",
    "level": "Secondary School",
    "subject": "Mathematics",
    "topic": "Mensuration",
    "question": "The area of a rectangle is 48 cm\u00b2 and its length is 8 cm. Find its breadth.",
    "options": [
      "4 cm",
      "6 cm",
      "8 cm",
      "12 cm"
    ],
    "correctIndex": 1,
    "explanation": "Area = length \u00d7 breadth. Breadth = 48 \u00f7 8 = 6 cm.",
    "sourceNote": "Inspired by NECO senior secondary objective-question format."
  },
  {
    "id": "Q0018",
    "exam": "NECO",
    "level": "Secondary School",
    "subject": "English",
    "topic": "Grammar",
    "question": "Choose the correct sentence.",
    "options": [
      "He do not like rice.",
      "He does not like rice.",
      "He did not likes rice.",
      "He don\u2019t likes rice."
    ],
    "correctIndex": 1,
    "explanation": "With the singular subject \u201che\u201d, the correct auxiliary is \u201cdoes\u201d; the main verb remains \u201clike\u201d.",
    "sourceNote": "Inspired by NECO senior secondary objective-question format."
  },
  {
    "id": "Q0019",
    "exam": "NECO",
    "level": "Secondary School",
    "subject": "English",
    "topic": "Vocabulary",
    "question": "Choose the word nearest in meaning to \u201cbrief\u201d.",
    "options": [
      "short",
      "heavy",
      "late",
      "difficult"
    ],
    "correctIndex": 0,
    "explanation": "\u201cBrief\u201d means short in time, length, or words.",
    "sourceNote": "Inspired by NECO senior secondary objective-question format."
  },
  {
    "id": "Q0020",
    "exam": "NECO",
    "level": "Secondary School",
    "subject": "Biology",
    "topic": "Cell Biology",
    "question": "Which organelle is mainly responsible for photosynthesis in plants?",
    "options": [
      "Mitochondrion",
      "Ribosome",
      "Chloroplast",
      "Nucleus"
    ],
    "correctIndex": 2,
    "explanation": "Chloroplasts contain chlorophyll, which traps light energy for photosynthesis.",
    "sourceNote": "Inspired by NECO senior secondary objective-question format."
  },
  {
    "id": "Q0021",
    "exam": "NECO",
    "level": "Secondary School",
    "subject": "Biology",
    "topic": "Ecology",
    "question": "In a food chain, green plants are called _____.",
    "options": [
      "consumers",
      "producers",
      "decomposers",
      "predators"
    ],
    "correctIndex": 1,
    "explanation": "Green plants produce their own food by photosynthesis, so they are producers.",
    "sourceNote": "Inspired by NECO senior secondary objective-question format."
  },
  {
    "id": "Q0022",
    "exam": "NECO",
    "level": "Secondary School",
    "subject": "Chemistry",
    "topic": "Atomic Structure",
    "question": "An atom with 11 protons has atomic number _____.",
    "options": [
      "10",
      "11",
      "12",
      "22"
    ],
    "correctIndex": 1,
    "explanation": "The atomic number of an element equals the number of protons in its atom.",
    "sourceNote": "Inspired by NECO senior secondary objective-question format."
  },
  {
    "id": "Q0023",
    "exam": "NECO",
    "level": "Secondary School",
    "subject": "Chemistry",
    "topic": "Acids and Bases",
    "question": "A solution with pH 2 is _____.",
    "options": [
      "strongly acidic",
      "neutral",
      "weakly alkaline",
      "strongly alkaline"
    ],
    "correctIndex": 0,
    "explanation": "pH values below 7 are acidic. pH 2 indicates a strong acid.",
    "sourceNote": "Inspired by NECO senior secondary objective-question format."
  },
  {
    "id": "Q0024",
    "exam": "NECO",
    "level": "Secondary School",
    "subject": "Physics",
    "topic": "Motion",
    "question": "A car travels 100 m in 5 s. Its average speed is _____.",
    "options": [
      "5 m/s",
      "20 m/s",
      "50 m/s",
      "500 m/s"
    ],
    "correctIndex": 1,
    "explanation": "Average speed = distance \u00f7 time = 100 \u00f7 5 = 20 m/s.",
    "sourceNote": "Inspired by NECO senior secondary objective-question format."
  },
  {
    "id": "Q0025",
    "exam": "NECO",
    "level": "Secondary School",
    "subject": "Physics",
    "topic": "Electricity",
    "question": "The SI unit of electric current is _____.",
    "options": [
      "volt",
      "ampere",
      "ohm",
      "watt"
    ],
    "correctIndex": 1,
    "explanation": "Electric current is measured in amperes.",
    "sourceNote": "Inspired by NECO senior secondary objective-question format."
  },
  {
    "id": "Q0026",
    "exam": "NECO",
    "level": "Secondary School",
    "subject": "Government",
    "topic": "Constitution",
    "question": "The 1954 Lyttleton Constitution is important because it strengthened ____ in Nigeria.",
    "options": [
      "unitary rule",
      "federalism",
      "military government",
      "one-party rule"
    ],
    "correctIndex": 1,
    "explanation": "The 1954 Constitution gave clearer federal structure to Nigeria by recognizing regions and their powers.",
    "sourceNote": "Inspired by NECO senior secondary objective-question format."
  },
  {
    "id": "Q0027",
    "exam": "NECO",
    "level": "Secondary School",
    "subject": "Economics",
    "topic": "Demand",
    "question": "When price rises and quantity demanded falls, this shows the law of _____.",
    "options": [
      "supply",
      "demand",
      "cost",
      "utility"
    ],
    "correctIndex": 1,
    "explanation": "The law of demand states that, other things being equal, higher price leads to lower quantity demanded.",
    "sourceNote": "Inspired by NECO senior secondary objective-question format."
  },
  {
    "id": "Q0028",
    "exam": "NECO",
    "level": "Secondary School",
    "subject": "CRS",
    "topic": "Old Testament",
    "question": "Who led the Israelites out of Egypt?",
    "options": [
      "Joshua",
      "Moses",
      "David",
      "Samuel"
    ],
    "correctIndex": 1,
    "explanation": "Moses was called to lead the Israelites out of bondage in Egypt.",
    "sourceNote": "Inspired by NECO senior secondary objective-question format."
  },
  {
    "id": "Q0029",
    "exam": "JAMB",
    "level": "Secondary School",
    "subject": "Mathematics",
    "topic": "Algebra",
    "question": "If 3x + 5 = 20, find x.",
    "options": [
      "3",
      "5",
      "7",
      "15"
    ],
    "correctIndex": 1,
    "explanation": "Subtract 5 from both sides to get 3x = 15. Divide by 3, so x = 5.",
    "sourceNote": "Inspired by JAMB/UTME CBT format and public practice-question structure."
  },
  {
    "id": "Q0030",
    "exam": "JAMB",
    "level": "Secondary School",
    "subject": "Mathematics",
    "topic": "Indices",
    "question": "Simplify 2^3 \u00d7 2^4.",
    "options": [
      "2^7",
      "2^12",
      "4^7",
      "16"
    ],
    "correctIndex": 0,
    "explanation": "When multiplying powers with the same base, add the powers: 2^(3+4) = 2^7.",
    "sourceNote": "Inspired by JAMB/UTME CBT format and public practice-question structure."
  },
  {
    "id": "Q0031",
    "exam": "JAMB",
    "level": "Secondary School",
    "subject": "Mathematics",
    "topic": "Mensuration",
    "question": "The area of a rectangle is 48 cm\u00b2 and its length is 8 cm. Find its breadth.",
    "options": [
      "4 cm",
      "6 cm",
      "8 cm",
      "12 cm"
    ],
    "correctIndex": 1,
    "explanation": "Area = length \u00d7 breadth. Breadth = 48 \u00f7 8 = 6 cm.",
    "sourceNote": "Inspired by JAMB/UTME CBT format and public practice-question structure."
  },
  {
    "id": "Q0032",
    "exam": "JAMB",
    "level": "Secondary School",
    "subject": "English",
    "topic": "Grammar",
    "question": "Choose the correct sentence.",
    "options": [
      "He do not like rice.",
      "He does not like rice.",
      "He did not likes rice.",
      "He don\u2019t likes rice."
    ],
    "correctIndex": 1,
    "explanation": "With the singular subject \u201che\u201d, the correct auxiliary is \u201cdoes\u201d; the main verb remains \u201clike\u201d.",
    "sourceNote": "Inspired by JAMB/UTME CBT format and public practice-question structure."
  },
  {
    "id": "Q0033",
    "exam": "JAMB",
    "level": "Secondary School",
    "subject": "English",
    "topic": "Vocabulary",
    "question": "Choose the word nearest in meaning to \u201cbrief\u201d.",
    "options": [
      "short",
      "heavy",
      "late",
      "difficult"
    ],
    "correctIndex": 0,
    "explanation": "\u201cBrief\u201d means short in time, length, or words.",
    "sourceNote": "Inspired by JAMB/UTME CBT format and public practice-question structure."
  },
  {
    "id": "Q0034",
    "exam": "JAMB",
    "level": "Secondary School",
    "subject": "Biology",
    "topic": "Cell Biology",
    "question": "Which organelle is mainly responsible for photosynthesis in plants?",
    "options": [
      "Mitochondrion",
      "Ribosome",
      "Chloroplast",
      "Nucleus"
    ],
    "correctIndex": 2,
    "explanation": "Chloroplasts contain chlorophyll, which traps light energy for photosynthesis.",
    "sourceNote": "Inspired by JAMB/UTME CBT format and public practice-question structure."
  },
  {
    "id": "Q0035",
    "exam": "JAMB",
    "level": "Secondary School",
    "subject": "Biology",
    "topic": "Ecology",
    "question": "In a food chain, green plants are called _____.",
    "options": [
      "consumers",
      "producers",
      "decomposers",
      "predators"
    ],
    "correctIndex": 1,
    "explanation": "Green plants produce their own food by photosynthesis, so they are producers.",
    "sourceNote": "Inspired by JAMB/UTME CBT format and public practice-question structure."
  },
  {
    "id": "Q0036",
    "exam": "JAMB",
    "level": "Secondary School",
    "subject": "Chemistry",
    "topic": "Atomic Structure",
    "question": "An atom with 11 protons has atomic number _____.",
    "options": [
      "10",
      "11",
      "12",
      "22"
    ],
    "correctIndex": 1,
    "explanation": "The atomic number of an element equals the number of protons in its atom.",
    "sourceNote": "Inspired by JAMB/UTME CBT format and public practice-question structure."
  },
  {
    "id": "Q0037",
    "exam": "JAMB",
    "level": "Secondary School",
    "subject": "Chemistry",
    "topic": "Acids and Bases",
    "question": "A solution with pH 2 is _____.",
    "options": [
      "strongly acidic",
      "neutral",
      "weakly alkaline",
      "strongly alkaline"
    ],
    "correctIndex": 0,
    "explanation": "pH values below 7 are acidic. pH 2 indicates a strong acid.",
    "sourceNote": "Inspired by JAMB/UTME CBT format and public practice-question structure."
  },
  {
    "id": "Q0038",
    "exam": "JAMB",
    "level": "Secondary School",
    "subject": "Physics",
    "topic": "Motion",
    "question": "A car travels 100 m in 5 s. Its average speed is _____.",
    "options": [
      "5 m/s",
      "20 m/s",
      "50 m/s",
      "500 m/s"
    ],
    "correctIndex": 1,
    "explanation": "Average speed = distance \u00f7 time = 100 \u00f7 5 = 20 m/s.",
    "sourceNote": "Inspired by JAMB/UTME CBT format and public practice-question structure."
  },
  {
    "id": "Q0039",
    "exam": "JAMB",
    "level": "Secondary School",
    "subject": "Physics",
    "topic": "Electricity",
    "question": "The SI unit of electric current is _____.",
    "options": [
      "volt",
      "ampere",
      "ohm",
      "watt"
    ],
    "correctIndex": 1,
    "explanation": "Electric current is measured in amperes.",
    "sourceNote": "Inspired by JAMB/UTME CBT format and public practice-question structure."
  },
  {
    "id": "Q0040",
    "exam": "JAMB",
    "level": "Secondary School",
    "subject": "Government",
    "topic": "Constitution",
    "question": "The 1954 Lyttleton Constitution is important because it strengthened ____ in Nigeria.",
    "options": [
      "unitary rule",
      "federalism",
      "military government",
      "one-party rule"
    ],
    "correctIndex": 1,
    "explanation": "The 1954 Constitution gave clearer federal structure to Nigeria by recognizing regions and their powers.",
    "sourceNote": "Inspired by JAMB/UTME CBT format and public practice-question structure."
  },
  {
    "id": "Q0041",
    "exam": "JAMB",
    "level": "Secondary School",
    "subject": "Economics",
    "topic": "Demand",
    "question": "When price rises and quantity demanded falls, this shows the law of _____.",
    "options": [
      "supply",
      "demand",
      "cost",
      "utility"
    ],
    "correctIndex": 1,
    "explanation": "The law of demand states that, other things being equal, higher price leads to lower quantity demanded.",
    "sourceNote": "Inspired by JAMB/UTME CBT format and public practice-question structure."
  },
  {
    "id": "Q0042",
    "exam": "JAMB",
    "level": "Secondary School",
    "subject": "CRS",
    "topic": "Old Testament",
    "question": "Who led the Israelites out of Egypt?",
    "options": [
      "Joshua",
      "Moses",
      "David",
      "Samuel"
    ],
    "correctIndex": 1,
    "explanation": "Moses was called to lead the Israelites out of bondage in Egypt.",
    "sourceNote": "Inspired by JAMB/UTME CBT format and public practice-question structure."
  },
  {
    "id": "Q0043",
    "exam": "POST-UTME",
    "level": "University",
    "subject": "Mathematics",
    "topic": "Functions",
    "question": "If f(x)=2x\u22121, find f(4).",
    "options": [
      "5",
      "6",
      "7",
      "8"
    ],
    "correctIndex": 2,
    "explanation": "Substitute x=4: f(4)=2(4)\u22121=8\u22121=7.",
    "sourceNote": "Original tertiary-entry style question."
  },
  {
    "id": "Q0044",
    "exam": "POST-UTME",
    "level": "University",
    "subject": "English",
    "topic": "Comprehension",
    "question": "A passage that argues for one side of an issue is mainly _____.",
    "options": [
      "narrative",
      "argumentative",
      "descriptive",
      "dramatic"
    ],
    "correctIndex": 1,
    "explanation": "Argumentative writing presents reasons to support a position.",
    "sourceNote": "Original tertiary-entry style question."
  },
  {
    "id": "Q0045",
    "exam": "POST-UTME",
    "level": "University",
    "subject": "Physics",
    "topic": "Waves",
    "question": "The relationship between wave speed v, frequency f, and wavelength \u03bb is _____.",
    "options": [
      "v=f\u03bb",
      "v=f/\u03bb",
      "v=\u03bb/f",
      "v=f+\u03bb"
    ],
    "correctIndex": 0,
    "explanation": "Wave speed equals frequency multiplied by wavelength: v=f\u03bb.",
    "sourceNote": "Original tertiary-entry style question."
  },
  {
    "id": "Q0046",
    "exam": "POST-UTME",
    "level": "Polytechnic",
    "subject": "Mathematics",
    "topic": "Functions",
    "question": "If f(x)=2x\u22121, find f(4).",
    "options": [
      "5",
      "6",
      "7",
      "8"
    ],
    "correctIndex": 2,
    "explanation": "Substitute x=4: f(4)=2(4)\u22121=8\u22121=7.",
    "sourceNote": "Original tertiary-entry style question."
  },
  {
    "id": "Q0047",
    "exam": "POST-UTME",
    "level": "Polytechnic",
    "subject": "English",
    "topic": "Comprehension",
    "question": "A passage that argues for one side of an issue is mainly _____.",
    "options": [
      "narrative",
      "argumentative",
      "descriptive",
      "dramatic"
    ],
    "correctIndex": 1,
    "explanation": "Argumentative writing presents reasons to support a position.",
    "sourceNote": "Original tertiary-entry style question."
  },
  {
    "id": "Q0048",
    "exam": "POST-UTME",
    "level": "Polytechnic",
    "subject": "Physics",
    "topic": "Waves",
    "question": "The relationship between wave speed v, frequency f, and wavelength \u03bb is _____.",
    "options": [
      "v=f\u03bb",
      "v=f/\u03bb",
      "v=\u03bb/f",
      "v=f+\u03bb"
    ],
    "correctIndex": 0,
    "explanation": "Wave speed equals frequency multiplied by wavelength: v=f\u03bb.",
    "sourceNote": "Original tertiary-entry style question."
  },
  {
    "id": "Q0049",
    "exam": "POST-UTME",
    "level": "College of Education",
    "subject": "Mathematics",
    "topic": "Functions",
    "question": "If f(x)=2x\u22121, find f(4).",
    "options": [
      "5",
      "6",
      "7",
      "8"
    ],
    "correctIndex": 2,
    "explanation": "Substitute x=4: f(4)=2(4)\u22121=8\u22121=7.",
    "sourceNote": "Original tertiary-entry style question."
  },
  {
    "id": "Q0050",
    "exam": "POST-UTME",
    "level": "College of Education",
    "subject": "English",
    "topic": "Comprehension",
    "question": "A passage that argues for one side of an issue is mainly _____.",
    "options": [
      "narrative",
      "argumentative",
      "descriptive",
      "dramatic"
    ],
    "correctIndex": 1,
    "explanation": "Argumentative writing presents reasons to support a position.",
    "sourceNote": "Original tertiary-entry style question."
  },
  {
    "id": "Q0051",
    "exam": "POST-UTME",
    "level": "College of Education",
    "subject": "Physics",
    "topic": "Waves",
    "question": "The relationship between wave speed v, frequency f, and wavelength \u03bb is _____.",
    "options": [
      "v=f\u03bb",
      "v=f/\u03bb",
      "v=\u03bb/f",
      "v=f+\u03bb"
    ],
    "correctIndex": 0,
    "explanation": "Wave speed equals frequency multiplied by wavelength: v=f\u03bb.",
    "sourceNote": "Original tertiary-entry style question."
  },
  {
    "id": "Q0052",
    "exam": "WAEC",
    "level": "Secondary School",
    "subject": "Mathematics",
    "topic": "Percentages",
    "question": "A student scored 36 out of 60. What is the percentage score?",
    "options": [
      "40%",
      "50%",
      "60%",
      "70%"
    ],
    "correctIndex": 2,
    "explanation": "36/60 \u00d7 100 = 60%.",
    "sourceNote": "Original exam-style question."
  },
  {
    "id": "Q0053",
    "exam": "WAEC",
    "level": "Secondary School",
    "subject": "Mathematics",
    "topic": "Probability",
    "question": "A fair die is thrown once. What is the probability of getting an even number?",
    "options": [
      "1/6",
      "1/3",
      "1/2",
      "2/3"
    ],
    "correctIndex": 2,
    "explanation": "Even outcomes are 2, 4, 6: 3 outcomes out of 6, so 3/6 = 1/2.",
    "sourceNote": "Original exam-style question."
  },
  {
    "id": "Q0054",
    "exam": "WAEC",
    "level": "Secondary School",
    "subject": "Chemistry",
    "topic": "Chemical Bonding",
    "question": "The bond formed by transfer of electrons is called ____ bond.",
    "options": [
      "covalent",
      "ionic",
      "metallic",
      "hydrogen"
    ],
    "correctIndex": 1,
    "explanation": "Ionic bonding involves electron transfer from one atom to another.",
    "sourceNote": "Original exam-style question."
  },
  {
    "id": "Q0055",
    "exam": "WAEC",
    "level": "Secondary School",
    "subject": "Biology",
    "topic": "Genetics",
    "question": "The physical appearance of an organism is called its _____.",
    "options": [
      "genotype",
      "phenotype",
      "allele",
      "gene"
    ],
    "correctIndex": 1,
    "explanation": "Phenotype is the observable expression of traits.",
    "sourceNote": "Original exam-style question."
  },
  {
    "id": "Q0056",
    "exam": "WAEC",
    "level": "Secondary School",
    "subject": "Physics",
    "topic": "Energy",
    "question": "The energy possessed by a body due to its position is ____ energy.",
    "options": [
      "kinetic",
      "potential",
      "sound",
      "heat"
    ],
    "correctIndex": 1,
    "explanation": "Potential energy is stored energy due to position or state.",
    "sourceNote": "Original exam-style question."
  },
  {
    "id": "Q0057",
    "exam": "WAEC",
    "level": "Secondary School",
    "subject": "Economics",
    "topic": "Production",
    "question": "Land, labour, capital and entrepreneur are factors of _____.",
    "options": [
      "consumption",
      "production",
      "exchange",
      "distribution"
    ],
    "correctIndex": 1,
    "explanation": "These are the four basic factors used to produce goods and services.",
    "sourceNote": "Original exam-style question."
  },
  {
    "id": "Q0058",
    "exam": "WAEC",
    "level": "Secondary School",
    "subject": "Government",
    "topic": "Democracy",
    "question": "Rule of law means _____.",
    "options": [
      "leaders are above the law",
      "everyone is subject to the law",
      "only courts make laws",
      "laws do not change"
    ],
    "correctIndex": 1,
    "explanation": "Rule of law means the law applies to citizens and government officials alike.",
    "sourceNote": "Original exam-style question."
  },
  {
    "id": "Q0059",
    "exam": "WAEC",
    "level": "Secondary School",
    "subject": "CRS",
    "topic": "New Testament",
    "question": "The parable of the Good Samaritan teaches _____.",
    "options": [
      "revenge",
      "neighbourly love",
      "wealth",
      "fasting"
    ],
    "correctIndex": 1,
    "explanation": "The story teaches compassion and love beyond ethnic or social boundaries.",
    "sourceNote": "Original exam-style question."
  },
  {
    "id": "Q0060",
    "exam": "NECO",
    "level": "Secondary School",
    "subject": "Mathematics",
    "topic": "Percentages",
    "question": "A student scored 36 out of 60. What is the percentage score?",
    "options": [
      "40%",
      "50%",
      "60%",
      "70%"
    ],
    "correctIndex": 2,
    "explanation": "36/60 \u00d7 100 = 60%.",
    "sourceNote": "Original exam-style question."
  },
  {
    "id": "Q0061",
    "exam": "NECO",
    "level": "Secondary School",
    "subject": "Mathematics",
    "topic": "Probability",
    "question": "A fair die is thrown once. What is the probability of getting an even number?",
    "options": [
      "1/6",
      "1/3",
      "1/2",
      "2/3"
    ],
    "correctIndex": 2,
    "explanation": "Even outcomes are 2, 4, 6: 3 outcomes out of 6, so 3/6 = 1/2.",
    "sourceNote": "Original exam-style question."
  },
  {
    "id": "Q0062",
    "exam": "NECO",
    "level": "Secondary School",
    "subject": "Chemistry",
    "topic": "Chemical Bonding",
    "question": "The bond formed by transfer of electrons is called ____ bond.",
    "options": [
      "covalent",
      "ionic",
      "metallic",
      "hydrogen"
    ],
    "correctIndex": 1,
    "explanation": "Ionic bonding involves electron transfer from one atom to another.",
    "sourceNote": "Original exam-style question."
  },
  {
    "id": "Q0063",
    "exam": "NECO",
    "level": "Secondary School",
    "subject": "Biology",
    "topic": "Genetics",
    "question": "The physical appearance of an organism is called its _____.",
    "options": [
      "genotype",
      "phenotype",
      "allele",
      "gene"
    ],
    "correctIndex": 1,
    "explanation": "Phenotype is the observable expression of traits.",
    "sourceNote": "Original exam-style question."
  },
  {
    "id": "Q0064",
    "exam": "NECO",
    "level": "Secondary School",
    "subject": "Physics",
    "topic": "Energy",
    "question": "The energy possessed by a body due to its position is ____ energy.",
    "options": [
      "kinetic",
      "potential",
      "sound",
      "heat"
    ],
    "correctIndex": 1,
    "explanation": "Potential energy is stored energy due to position or state.",
    "sourceNote": "Original exam-style question."
  },
  {
    "id": "Q0065",
    "exam": "NECO",
    "level": "Secondary School",
    "subject": "Economics",
    "topic": "Production",
    "question": "Land, labour, capital and entrepreneur are factors of _____.",
    "options": [
      "consumption",
      "production",
      "exchange",
      "distribution"
    ],
    "correctIndex": 1,
    "explanation": "These are the four basic factors used to produce goods and services.",
    "sourceNote": "Original exam-style question."
  },
  {
    "id": "Q0066",
    "exam": "NECO",
    "level": "Secondary School",
    "subject": "Government",
    "topic": "Democracy",
    "question": "Rule of law means _____.",
    "options": [
      "leaders are above the law",
      "everyone is subject to the law",
      "only courts make laws",
      "laws do not change"
    ],
    "correctIndex": 1,
    "explanation": "Rule of law means the law applies to citizens and government officials alike.",
    "sourceNote": "Original exam-style question."
  },
  {
    "id": "Q0067",
    "exam": "NECO",
    "level": "Secondary School",
    "subject": "CRS",
    "topic": "New Testament",
    "question": "The parable of the Good Samaritan teaches _____.",
    "options": [
      "revenge",
      "neighbourly love",
      "wealth",
      "fasting"
    ],
    "correctIndex": 1,
    "explanation": "The story teaches compassion and love beyond ethnic or social boundaries.",
    "sourceNote": "Original exam-style question."
  },
  {
    "id": "Q0068",
    "exam": "JAMB",
    "level": "Secondary School",
    "subject": "Mathematics",
    "topic": "Percentages",
    "question": "A student scored 36 out of 60. What is the percentage score?",
    "options": [
      "40%",
      "50%",
      "60%",
      "70%"
    ],
    "correctIndex": 2,
    "explanation": "36/60 \u00d7 100 = 60%.",
    "sourceNote": "Original exam-style question."
  },
  {
    "id": "Q0069",
    "exam": "JAMB",
    "level": "Secondary School",
    "subject": "Mathematics",
    "topic": "Probability",
    "question": "A fair die is thrown once. What is the probability of getting an even number?",
    "options": [
      "1/6",
      "1/3",
      "1/2",
      "2/3"
    ],
    "correctIndex": 2,
    "explanation": "Even outcomes are 2, 4, 6: 3 outcomes out of 6, so 3/6 = 1/2.",
    "sourceNote": "Original exam-style question."
  },
  {
    "id": "Q0070",
    "exam": "JAMB",
    "level": "Secondary School",
    "subject": "Chemistry",
    "topic": "Chemical Bonding",
    "question": "The bond formed by transfer of electrons is called ____ bond.",
    "options": [
      "covalent",
      "ionic",
      "metallic",
      "hydrogen"
    ],
    "correctIndex": 1,
    "explanation": "Ionic bonding involves electron transfer from one atom to another.",
    "sourceNote": "Original exam-style question."
  },
  {
    "id": "Q0071",
    "exam": "JAMB",
    "level": "Secondary School",
    "subject": "Biology",
    "topic": "Genetics",
    "question": "The physical appearance of an organism is called its _____.",
    "options": [
      "genotype",
      "phenotype",
      "allele",
      "gene"
    ],
    "correctIndex": 1,
    "explanation": "Phenotype is the observable expression of traits.",
    "sourceNote": "Original exam-style question."
  },
  {
    "id": "Q0072",
    "exam": "JAMB",
    "level": "Secondary School",
    "subject": "Physics",
    "topic": "Energy",
    "question": "The energy possessed by a body due to its position is ____ energy.",
    "options": [
      "kinetic",
      "potential",
      "sound",
      "heat"
    ],
    "correctIndex": 1,
    "explanation": "Potential energy is stored energy due to position or state.",
    "sourceNote": "Original exam-style question."
  },
  {
    "id": "Q0073",
    "exam": "JAMB",
    "level": "Secondary School",
    "subject": "Economics",
    "topic": "Production",
    "question": "Land, labour, capital and entrepreneur are factors of _____.",
    "options": [
      "consumption",
      "production",
      "exchange",
      "distribution"
    ],
    "correctIndex": 1,
    "explanation": "These are the four basic factors used to produce goods and services.",
    "sourceNote": "Original exam-style question."
  },
  {
    "id": "Q0074",
    "exam": "JAMB",
    "level": "Secondary School",
    "subject": "Government",
    "topic": "Democracy",
    "question": "Rule of law means _____.",
    "options": [
      "leaders are above the law",
      "everyone is subject to the law",
      "only courts make laws",
      "laws do not change"
    ],
    "correctIndex": 1,
    "explanation": "Rule of law means the law applies to citizens and government officials alike.",
    "sourceNote": "Original exam-style question."
  },
  {
    "id": "Q0075",
    "exam": "JAMB",
    "level": "Secondary School",
    "subject": "CRS",
    "topic": "New Testament",
    "question": "The parable of the Good Samaritan teaches _____.",
    "options": [
      "revenge",
      "neighbourly love",
      "wealth",
      "fasting"
    ],
    "correctIndex": 1,
    "explanation": "The story teaches compassion and love beyond ethnic or social boundaries.",
    "sourceNote": "Original exam-style question."
  }
];