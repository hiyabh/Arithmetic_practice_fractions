import { useState } from 'react';
import { ExerciseLayout } from '../shared/ExerciseLayout';
import { ExerciseCard } from './ExerciseCard';
import { exercises } from './exercises';

interface BasicOperationsProps {
  onBack: () => void;
}

export function BasicOperations({ onBack }: BasicOperationsProps) {
  const [currentExercise, setCurrentExercise] = useState(0);

  const handleNext = () => {
    if (currentExercise < exercises.length - 1) {
      setCurrentExercise(currentExercise + 1);
    }
  };

  const explanation = (
    <>
      <p className="mb-4">
        כדי לחבר או לחסר שברים, עלינו להביא אותם למכנה משותף. 
        המכנה המשותף הוא המספר הקטן ביותר שמתחלק בשני המכנים.
      </p>
      <p className="mb-4">
        לדוגמה: כדי לחבר ⅓ + ¼, נמצא מכנה משותף (12):
        <br />
        ⅓ = 4/12
        <br />
        ¼ = 3/12
        <br />
        4/12 + 3/12 = 7/12
      </p>
    </>
  );

  return (
    <ExerciseLayout title="חיבור וחיסור שברים" explanation={explanation} onBack={onBack}>
      <ExerciseCard
        {...exercises[currentExercise]}
        onCorrect={handleNext}
        isLastExercise={currentExercise === exercises.length - 1}
      />
    </ExerciseLayout>
  );
}