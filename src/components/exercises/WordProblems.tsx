import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { WordProblemCard } from './WordProblems/WordProblemCard';
import { exercises } from './WordProblems/exercises';
import { useState } from 'react';

interface WordProblemsProps {
  onBack: () => void;
  onCorrect: () => void;
}

export function WordProblems({ onBack, onCorrect }: WordProblemsProps) {
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
        <h2 className="text-2xl font-bold">בעיות מילוליות</h2>
        <Button variant="ghost" onClick={onBack}>
          <ArrowRight className="ml-2" />
          חזרה
        </Button>
      </div>
      <Card className="p-6">
        <div className="prose max-w-none">
          <h3 className="text-xl font-bold mb-4">הסבר</h3>
          <p className="mb-4">
            בעיות מילוליות עוזרות לנו להבין כיצד שברים משמשים בחיי היומיום.
            חשוב לקרוא את השאלה בעיון ולזהות את הפעולות הנדרשות.
          </p>
          <p>
            למשל: אם אכלנו ⅓ מהעוגה ואחר כך עוד ¼,
            כמה נשאר מהעוגה?
          </p>
        </div>
      </Card>
      <WordProblemCard
        {...exercises[currentExercise]}
        onCorrect={handleNext}
        isLastExercise={currentExercise === exercises.length - 1}
      />
    </div>
  );
}