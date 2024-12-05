import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { NumberLineCanvas } from './NumberLine/NumberLineCanvas';
import { exercises } from './NumberLine/exercises';
import { useState } from 'react';

interface NumberLineProps {
  onBack: () => void;
  onCorrect: () => void;
}

export function NumberLine({ onBack, onCorrect }: NumberLineProps) {
  const [currentExercise, setCurrentExercise] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleNext = () => {
    if (currentExercise < exercises.length - 1) {
      setCurrentExercise(currentExercise + 1);
      setIsCorrect(false);
      onCorrect();
    }
  };

  const handleCorrectAnswer = () => {
    setIsCorrect(true);
    onCorrect();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">ישר המספרים</h2>
        <Button variant="ghost" onClick={onBack}>
          <ArrowRight className="ml-2" />
          חזרה
        </Button>
      </div>
      <Card className="p-6">
        <div className="prose max-w-none">
          <h3 className="text-xl font-bold mb-4">הסבר</h3>
          <p className="mb-4">
            ישר המספרים הוא כלי חשוב להבנת היחס בין שברים ומספרים שלמים.
            כל שבר מייצג נקודה על ישר המספרים.
          </p>
          <p>
            לדוגמה: השבר ½ נמצא באמצע הדרך בין 0 ל-1,
            והשבר ¼ נמצא ברבע הדרך בין 0 ל-1.
          </p>
        </div>
      </Card>
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
    </div>
  );
}