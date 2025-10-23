import { useMemo, useState } from 'react';
import { useLearningContext } from '../context/LearningContext';

const filters = ['all', 'new', 'learning', 'mastered'];

export const useFilteredVocabulary = () => {
  const { vocabulary } = useLearningContext();
  const [filter, setFilter] = useState('all');

  const filteredVocabulary = useMemo(() => {
    if (filter === 'all') {
      return vocabulary;
    }
    return vocabulary.filter((entry) => entry.proficiency === filter);
  }, [filter, vocabulary]);

  const changeFilter = (value) => {
    if (filters.includes(value)) {
      setFilter(value);
    }
  };

  return { filteredVocabulary, filter, changeFilter };
};
