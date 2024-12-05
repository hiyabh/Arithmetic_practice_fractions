import { useState } from 'react';
import { ExerciseLayout } from '../shared/ExerciseLayout';
import { ExerciseCard } from './ExerciseCard';
import { exercises } from './exercises';

interface FractionConversionProps {
  onBack: () => void;
}

export function FractionConversion({ onBack }: FractionConversionProps) {
  const [currentExercise, setCurrentExercise] = useState(0);

  const handleNext = () => {
    if (currentExercise < exercises.length - 1) {
      setCurrentExercise(currentExercise + 1);
    }
  };

  const explanation = (
    <>
      <p className="mb-4">
        שבר מעורב הוא מספר שלם עם שבר (למשל: 1½).
        כדי להמיר שבר מעורב לשבר פשוט:
      </p>
      <ol className="list-decimal list-inside mb-4">
        <li>כפול את המספר השלם במכנה</li>
        <li>הוסף את המונה</li>
        <li>השאר את אותו מכנה</li>
      </ol>
      <p>לדוגמה: 1½ = 3/2 (1×2 + 1 = 3)</p>
    </>
  );

  return (
    <ExerciseLayout title="המרת שברים" explanation={explanation} onBack={onBack}>
      <ExerciseCard
        {...exercises[currentExercise]}
        onCorrect={handleNext}
        isLastExercise={currentExercise === exercises.length - 1}
      />
    </ExerciseLayout>
  );
}