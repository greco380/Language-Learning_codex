import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { createLessonPlanFromVocabulary, loadLessonPlans, loadProgress, loadVocabulary } from '../services/learningService';

const LearningContext = createContext(undefined);

const defaultProgress = {
  wordsLearnt: 0,
  lessonsCompleted: 0,
  reviewAccuracy: 0,
  activeMinutes: 0
};

export const LearningProvider = ({ children }) => {
  const [vocabulary, setVocabulary] = useState([]);
  const [lessonPlans, setLessonPlans] = useState([]);
  const [progress, setProgress] = useState(defaultProgress);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const bootstrap = async () => {
      setIsLoading(true);
      try {
        const [vocabData, lessonData, progressData] = await Promise.all([
          loadVocabulary(),
          loadLessonPlans(),
          loadProgress()
        ]);
        setVocabulary(vocabData);
        setLessonPlans(lessonData);
        setProgress(progressData);
      } finally {
        setIsLoading(false);
      }
    };

    void bootstrap();
  }, []);

  const captureVocabulary = useCallback((entry) => {
    setVocabulary((current) => [
      {
        id: `voc-${Math.random().toString(36).slice(2, 8)}`,
        createdAt: new Date().toISOString(),
        ...entry
      },
      ...current
    ]);
  }, []);

  const addLessonPlan = useCallback((plan) => {
    setLessonPlans((current) => [
      {
        id: `lesson-${Math.random().toString(36).slice(2, 8)}`,
        ...plan
      },
      ...current
    ]);
  }, []);

  useEffect(() => {
    if (vocabulary.length === 0) {
      return;
    }

    const newPlan = createLessonPlanFromVocabulary(vocabulary.slice(0, 3));
    setLessonPlans((current) => {
      const hasPlan = current.some((plan) => plan.title === newPlan.title);
      return hasPlan ? current : [newPlan, ...current];
    });
  }, [vocabulary]);

  const value = useMemo(
    () => ({
      vocabulary,
      lessonPlans,
      progress,
      isLoading,
      captureVocabulary,
      addLessonPlan
    }),
    [vocabulary, lessonPlans, progress, isLoading, captureVocabulary, addLessonPlan]
  );

  return <LearningContext.Provider value={value}>{children}</LearningContext.Provider>;
};

export const useLearningContext = () => {
  const context = useContext(LearningContext);
  if (!context) {
    throw new Error('useLearningContext must be used within a LearningProvider');
  }
  return context;
};
