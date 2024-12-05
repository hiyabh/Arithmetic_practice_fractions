import { useState } from 'react';
import { ExerciseLayout } from '../shared/ExerciseLayout';
import { NumberLineCanvas } from './NumberLineCanvas';
import { exercises } from './exercises';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface NumberLineProps {
  onBack: () => void;
}

export function NumberLine({ onBack }: NumberLineProps) {
  const [currentExercise, setCurrentExercise] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleNext = () => {
    if (currentExercise < exercises.length - 1) {
      setCurrentExercise(currentExercise + 1);
      setIsCorrect(false);
    }
  };

  const handleCorrectAnswer = () => {
    setIsCorrect(true);
  };

  const explanation = (
    <>
      <p className="mb-4">
        ישר המספרים הוא כלי חשוב להבנת היחס בין שברים ומספרים שלמים.
        כל שבר מייצג נקודה על ישר המספרים.
      </p>
      <p>
        לדוגמה: השבר ½ נמצא באמצע הדרך בין 0 ל-1,
        והשבר ¼ נמצא ברבע הדרך בין 0 ל-1.
      </p>
    </>
  );

  return (
    <ExerciseLayout title="ישר המספרים" explanation={explanation} onBack={onBack}>
      <Card className="p-6 space-y-4">
        <h3 className="text-xl font-bold">{exercises[currentExercise].question}</h3>
        <NumberLineCanvas
          targetValue={exercises[currentExercise].value}
          onCorrectAnswer={handleCorrectAnswer}
        />
        {isCorrect && (
          <div className="text-green-600 font-bold">
            כל הכבוד! התשובה נכונה
          </div>
        )}
        {isCorrect && currentExercise < exercises.length - 1 && (
          <div className="flex justify-end">
            <Button onClick={handleNext}>
              לתרגיל הבא
            </Button>
          </div>
        )}
      </Card>
    </ExerciseLayout>
  );
}