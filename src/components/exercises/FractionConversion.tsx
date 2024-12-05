import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { ExerciseCard } from './FractionConversion/ExerciseCard';
import { exercises } from './FractionConversion/exercises';
import { useState } from 'react';

interface FractionConversionProps {
  onBack: () => void;
  onCorrect: () => void;
}

export function FractionConversion({ onBack, onCorrect }: FractionConversionProps) {
  const [currentExercise, setCurrentExercise] = useState(0);

  const handleNext = () => {
    if (currentExercise < exercises.length - 1) {
      setCurrentExercise(currentExercise + 1);
      onCorrect();
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">המרת שברים</h2>
        <Button variant="ghost" onClick={onBack}>
          <ArrowRight className="ml-2" />
          חזרה
        </Button>
      </div>
      <Card className="p-6">
        <div className="prose max-w-none">
          <h3 className="text-xl font-bold mb-4">הסבר</h3>
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
        </div>
      </Card>
      <ExerciseCard
        {...exercises[currentExercise]}
        onCorrect={handleNext}
        isLastExercise={currentExercise === exercises.length - 1}
      />
    </div>
  );
}