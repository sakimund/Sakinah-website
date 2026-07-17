// Shared content for all three directions. Synced to Sakinah's CV.

const SAKINAH = {
  name: 'Sakinah Munday',
  role: 'PhD Candidate, Philosophy',
  institution: 'Massachusetts Institute of Technology',
  department: 'Department of Linguistics and Philosophy',
  office: '32-D772',
  phone: '617-258-8084',
  // Split into parts so the full address never sits in the raw source for
  // spam bots to harvest. Reassembled in the browser at render time.
  emailUser: 'sakimund',
  emailDomain: 'mit.edu',

  bioShort:
    'PhD candidate in the Department of Linguistics and Philosophy at MIT. I work on philosophy of language and social and political philosophy, with related interests in applied ethics, philosophy of race, and Islamic and Buddhist philosophy.',

  bio: [
    'I am a PhD candidate in the Department of Linguistics and Philosophy at MIT, where I work on philosophy of language and social and political philosophy.',
    'Before coming to MIT, I lived in Melbourne, Australia, where I completed a Masters in Philosophy and a Bachelor of Arts in International Relations, Philosophy, and German Studies at the University of Melbourne. Alongside academic work, I worked in non-profit and hospitality — including seven years at one much-loved café.',
  ],

  aos: ['Philosophy of Language', 'Social and Political Philosophy'],
  aoc: ['Applied Ethics', 'Philosophy of Race', 'Islamic Philosophy', 'Buddhist Philosophy'],

  papers: [
    {
      title: '‘Baiting Speech’',
      status: 'Under review',
      synopsis: '',
    },
    {
      title: '‘“She did resist!”: A pluralist account of speech acts’',
      status: 'Manuscript',
      synopsis: '',
    },
    {
      title: '‘When Blocking Backfires: Self-Reinforcing Presuppositions’',
      status: 'Manuscript',
      synopsis: '',
    },
  ],

  upcoming: [
    {
      title: 'Speech and Society: Contemporary Philosophy of Language',
      venue: 'Cardiff University',
      when: 'June 23–24, 2026',
      url: 'https://philevents.org/event/show/145953',
    },
  ],

  talks: [
    { title: '‘Baiting Speech’', venue: 'MITing of the Minds (commentator: Rachel Fraser)', when: '2026' },
    { title: '‘Speech and Power’', venue: 'Philosophy Café Talk Series (invited)', when: '2025' },
    { title: '‘Baiting Speech’', venue: 'Michigan–MIT Workshop in Social Philosophy (keynote: Anne Eaton)', when: '2025' },
    { title: '‘“It’s Okay to Be White”: Ventriloquist Speech Acts’', venue: 'Australasian Society for Continental Philosophy (keynote: Camisha Russell)', when: '2024' },
    { title: '‘“It’s Okay to Be White”: Ventriloquist Speech Acts’', venue: 'Social Justice through Counter-Speech, De-platforming, and Silencing, Ohio State University (keynote: Mary-Kate McGowan)', when: '2024' },
    { title: '‘“It’s Okay to Be White”: Ventriloquist Speech Acts’', venue: 'Michigan–MIT Graduate Workshop in Social Philosophy (keynote: Adam Hosein)', when: '2024' },
    { title: '‘Pragmatic Silencing’', venue: 'Australasian Association of Philosophy Conference, University of Wollongong', when: '2019' },
  ],

  comments: [
    { title: 'On Samia Hesni, ‘How Scripts Harm’', venue: 'MITing of the Minds (invited)', when: '2025' },
    { title: 'On Alex Radulescu and Emmanuel Viebahn, ‘Art, Language, and the Limits of Intentionalism’', venue: 'Philosophy of Language Association Conference, Amherst–MIT', when: '2024' },
  ],

  teachingInstructor: [
    { name: 'Experiential Ethics', where: 'MIT', term: 'Summer 2024, 2025' },
    { name: 'Educational Thought', where: 'Australian Catholic University', term: 'Spring, Fall 2022' },
  ],
  teachingAssist: [
    { name: 'Classics in Western Philosophy', lead: 'Sally Haslanger', where: 'MIT', term: 'Fall 2025' },
    { name: 'Good Food', lead: 'Sally Haslanger', where: 'MIT', term: 'Spring 2025' },
    { name: 'Moral Problems', lead: 'Sam Berstler', where: 'MIT', term: 'Spring 2024' },
    { name: 'Problems of Philosophy', lead: 'Eliot Watkins', where: 'MIT', term: 'Fall 2023' },
    { name: 'Race and Gender', lead: 'Karen Jones', where: 'University of Melbourne', term: 'Spring 2021' },
    { name: 'Philosophy of Language', lead: 'Laura Schroeter', where: 'University of Melbourne', term: 'Fall 2021' },
  ],

  cvHighlights: [
    { year: '2022–', what: 'PhD, Philosophy — MIT (expected 2027)' },
    { year: '2022', what: 'MA, Philosophy — University of Melbourne' },
    { year: '2019', what: 'BA, Philosophy, International Relations &amp; German Studies — University of Melbourne' },
  ],
};

window.SAKINAH = SAKINAH;
