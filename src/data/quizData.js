export const DEPARTMENTS = {
  STRATEGY: 'strategy',
  CREATIVE: 'creative',
  MEDIA: 'media',
  PR: 'pr',
  DESIGN: 'design',
};

// Choice A is always Strategy, B Creative, C Media Planning, D Public Relations, E Design
const CHOICE_DEPARTMENTS = [
  DEPARTMENTS.STRATEGY,
  DEPARTMENTS.CREATIVE,
  DEPARTMENTS.MEDIA,
  DEPARTMENTS.PR,
  DEPARTMENTS.DESIGN,
];

export const QUESTION_PAGES = [
  {
    progressPercent: 33,
    questions: [
      {
        number: 1,
        text: 'Pick a way to die in a horror movie',
        choices: [
          'Going back to "investigate the noise" one more time',
          'Too busy trying to figure out the plot twist',
          'Getting picked off last because you memorized where the exits were',
          'Trying to befriend the killer',
          "Dying because your outfit wasn't practical for running",
        ],
      },
      {
        number: 2,
        text: "What's the most satisfying part of finishing a group project?",
        choices: [
          'Your team thanking you for finding that one article that proved your team’s argument',
          'The "wait, THAT was your idea?" reactions',
          'Looking back at all the gcals you made throughout the semester',
          'Seeing people get your niche references throughout your presentation',
          'Grinding out the slideshow templates for your team to use',
        ],
      },
    ],
  },
  {
    progressPercent: 67,
    questions: [
      {
        number: 3,
        text: 'You and your friends go on a vacation trip, which friend are you?',
        choices: [
          'The one that picked the location',
          'The one who comes up with the funny group chat name',
          'The one who creates the spreadsheet of the expenses and books the plane tickets',
          'The one that finds the underground spots nearby',
          'The one with the instagram story everyone ends up reposting',
        ],
      },
      {
        number: 4,
        text: 'Your favorite application?',
        choices: ['Twitter', 'Tiktok', 'Google Sheets, Docs, Drive, etc.', 'Instagram', 'Pinterest'],
      },
    ],
  },
  {
    progressPercent: 100,
    questions: [
      {
        number: 5,
        text: 'Love?',
        choices: [
          'I wonder how other people answered this question 🤔',
          'Live, Laugh, ______',
          'erm... I don’t have time for that in my schedule.',
          '_____ Island',
          '❤️❤️❤️',
        ],
      },
      {
        number: 6,
        text: 'How would you solve a riddle?',
        choices: [
          'Recognize the structural pattern of a problem and map it to riddles you know the answer to',
          'Spit ball ideas till one of them sticks',
          'If its a math problem... I gotchu',
          'Ask my smart friend for the answer',
          'Doodle... gets my brain working',
        ],
      },
    ],
  },
];

export function departmentForChoice(choiceIndex) {
  return CHOICE_DEPARTMENTS[choiceIndex];
}

export function computeWinningDepartment(answers) {
  const tally = {
    [DEPARTMENTS.STRATEGY]: 0,
    [DEPARTMENTS.CREATIVE]: 0,
    [DEPARTMENTS.MEDIA]: 0,
    [DEPARTMENTS.PR]: 0,
    [DEPARTMENTS.DESIGN]: 0,
  };
  Object.values(answers).forEach((choiceIndex) => {
    if (choiceIndex == null) return;
    const dept = departmentForChoice(choiceIndex);
    tally[dept] += 1;
  });
  let winner = DEPARTMENTS.STRATEGY;
  let max = -1;
  Object.entries(tally).forEach(([dept, count]) => {
    if (count > max) {
      max = count;
      winner = dept;
    }
  });
  return winner;
}
