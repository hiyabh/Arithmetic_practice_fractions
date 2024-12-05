import { useState } from 'react';
import { StudentHeader } from '@/components/StudentHeader';
import { TopicCard } from '@/components/TopicCard';
import { topics } from '@/data/topics';
import { BasicOperations } from '@/components/exercises/BasicOperations';
import { FractionConversion } from '@/components/exercises/FractionConversion';
import { NumberLine } from '@/components/exercises/NumberLine';
import { WordProblems } from '@/components/exercises/WordProblems';
import './App.css';

function App() {
  const [student, setStudent] = useState({
    name: 'שמואל בן חמו',
    points: 0,
    streak: 0
  });

  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const handleTopicSelect = (topicId: string) => {
    setSelectedTopic(topicId);
  };

  const handleBackToHome = () => {
    setSelectedTopic(null);
  };

  const handleCorrectAnswer = () => {
    setStudent(prev => ({
      ...prev,
      points: prev.points + 10,
      streak: prev.streak + 1
    }));
  };

  const renderContent = () => {
    switch (selectedTopic) {
      case 'basic-operations':
        return <BasicOperations onBack={handleBackToHome} onCorrect={handleCorrectAnswer} />;
      case 'fraction-conversion':
        return <FractionConversion onBack={handleBackToHome} onCorrect={handleCorrectAnswer} />;
      case 'number-line':
        return <NumberLine onBack={handleBackToHome} onCorrect={handleCorrectAnswer} />;
      case 'word-problems':
        return <WordProblems onBack={handleBackToHome} onCorrect={handleCorrectAnswer} />;
      default:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {topics.map((topic) => (
              <TopicCard
                key={topic.id}
                topic={topic}
                onSelect={handleTopicSelect}
              />
            ))}
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-8 rtl">
      <div className="max-w-6xl mx-auto">
        <StudentHeader student={student} />
        {renderContent()}
      </div>
    </div>
  );
}

export default App;