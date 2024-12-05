import { useState } from 'react';
import { ExerciseLayout } from '../shared/ExerciseLayout';
import { WordProblemCard } from './WordProblemCard';
import { exercises } from './exercises';

interface WordProblemsProps {
  onBack: () => void;
}

export function WordProblems({ onBack }: WordProblemsProps) {
  const [currentExercise, setCurrentExercise] = useState(0);

  const handleNext = () => {
    if (currentExercise < exercises.length - 1) {
      setCurrentExercise(currentExercise + 1);
    }
  };

  const explanation = (
    <>
      <p className="mb-4">
        בעיות מילוליות עוזרות לנו להבין כיצד שברים משמשים בחיי היומיום.
        חשוב לקרוא את השאלה בעיון ולזהות את הפעולות הנדרשות.
      </p>
      <p>
        למשל: אם אכלנו ⅓ מהעוגה ואחר כך עוד ¼,
        כמה נשאר מהעוגה?
      </p>
    </>
  );

  return (
    <ExerciseLayout title="בעיות מילוליות" explanation={explanation} onBack={onBack}>
      <WordProblemCard
        {...exercises[currentExercise]}
        onCorrect={handleNext}
        isLastExercise={currentExercise === exercises.length - 1}
      />
    </ExerciseLayout>
  );
}