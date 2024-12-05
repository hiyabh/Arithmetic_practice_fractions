import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { ExerciseCard } from './BasicOperations/ExerciseCard';
import { exercises } from './BasicOperations/exercises';
import { useState } from 'react';

interface BasicOperationsProps {
  onBack: () => void;
  onCorrect: () => void;
}

export function BasicOperations({ onBack, onCorrect }: BasicOperationsProps) {
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
        <h2 className="text-2xl font-bold">חיבור וחיסור שברים</h2>
        <Button variant="ghost" onClick={onBack}>
          <ArrowRight className="ml-2" />
          חזרה
        </Button>
      </div>
      <Card className="p-6">
        <div className="prose max-w-none">
          <h3 className="text-xl font-bold mb-4">הסבר</h3>
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