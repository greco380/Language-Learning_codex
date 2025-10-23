const sampleVocabulary = [
  {
    id: 'voc-1',
    term: 'panadería',
    translation: 'bakery',
    context: 'Necesito ir a la panadería después del trabajo.',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 1).toISOString(),
    proficiency: 'learning'
  },
  {
    id: 'voc-2',
    term: 'reembolso',
    translation: 'refund',
    context: 'El cliente pidió un reembolso por el pedido.',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3).toISOString(),
    proficiency: 'new'
  },
  {
    id: 'voc-3',
    term: 'trámite',
    translation: 'paperwork',
    context: 'Tengo que terminar el trámite en el ayuntamiento.',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7).toISOString(),
    proficiency: 'mastered'
  }
];

const sampleLessons = [
  {
    id: 'lesson-1',
    title: 'Errands around the city',
    topic: 'Daily errands',
    summary: 'Practice phrases and vocabulary that help you navigate essential errands in Spanish.',
    objectives: [
      'Ask for directions politely',
      'Describe specific errands you need to do',
      'Rehearse conversation patterns for shops and services'
    ],
    estimatedMinutes: 25,
    vocabularyIds: ['voc-1', 'voc-3']
  },
  {
    id: 'lesson-2',
    title: 'Customer care follow up',
    topic: 'Workplace conversation',
    summary: 'Improve your confidence when discussing refunds and customer requests with colleagues.',
    objectives: [
      'Clarify the status of an order',
      'Respond empathetically to clients',
      'Ask for help from a teammate'
    ],
    estimatedMinutes: 20,
    vocabularyIds: ['voc-2']
  }
];

const sampleProgress = {
  wordsLearnt: 46,
  lessonsCompleted: 12,
  reviewAccuracy: 0.82,
  activeMinutes: 155
};

export const loadVocabulary = async () => Promise.resolve(sampleVocabulary);

export const loadLessonPlans = async () => Promise.resolve(sampleLessons);

export const loadProgress = async () => Promise.resolve(sampleProgress);

export const createLessonPlanFromVocabulary = (entries) => {
  const newId = `lesson-${Math.random().toString(36).slice(2, 8)}`;
  return {
    id: newId,
    title: 'Personalised conversation drill',
    topic: 'Custom vocabulary',
    summary: 'Rehearse your newest vocabulary in a guided conversation with spaced repetition prompts.',
    objectives: entries.slice(0, 3).map((entry) => `Use “${entry.term}” confidently in a sentence.`),
    estimatedMinutes: Math.max(10, entries.length * 5),
    vocabularyIds: entries.map((entry) => entry.id)
  };
};
