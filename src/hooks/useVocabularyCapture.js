import { useState } from 'react';
import { useLearningContext } from '../context/LearningContext';

const initialState = {
  term: '',
  translation: '',
  context: ''
};

export const useVocabularyCapture = () => {
  const { captureVocabulary } = useLearningContext();
  const [form, setForm] = useState(initialState);

  const updateField = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const submit = () => {
    if (!form.term || !form.translation) {
      return false;
    }

    captureVocabulary({ ...form, proficiency: 'new' });
    setForm(initialState);
    return true;
  };

  return { form, updateField, submit };
};
