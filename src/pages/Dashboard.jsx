import LessonPlanCard from '../components/LessonPlanCard';
import ProgressSummary from '../components/ProgressSummary';
import VocabularyList from '../components/VocabularyList';
import LoadingState from '../components/LoadingState';
import { useLearningContext } from '../context/LearningContext';

const Dashboard = () => {
  const { vocabulary, lessonPlans, progress, isLoading } = useLearningContext();

  if (isLoading) {
    return <LoadingState message="Preparing your personalised dashboard" />;
  }

  return (
    <div className="grid" style={{ gap: '1.5rem' }}>
      <ProgressSummary progress={progress} />
      <section className="grid columns-2" aria-label="Suggested lessons">
        {lessonPlans.map((plan) => (
          <LessonPlanCard key={plan.id} plan={plan} />
        ))}
      </section>
      <VocabularyList entries={vocabulary.slice(0, 5)} />
    </div>
  );
};

export default Dashboard;
