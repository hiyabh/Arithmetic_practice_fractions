import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Check, X } from 'lucide-react';

interface WordProblemCardProps {
  question: string;
  correctAnswer: string;
  explanation: string;
  hint?: string;
  onCorrect: () => void;
  isLastExercise: boolean;
}

export function WordProblemCard({ 
  question, 
  correctAnswer, 
  explanation, 
  hint,
  onCorrect,
  isLastExercise 
}: WordProblemCardProps) {
  const [answer, setAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [showHint, setShowHint] = useState(false);

  // Reset state when question changes
  useEffect(() => {
    setAnswer('');
    setIsCorrect(null);
    setShowExplanation(false);
    setShowHint(false);
  }, [question]);

  const handleSubmit = () => {
    const isAnswerCorrect = answer === correctAnswer;
    setIsCorrect(isAnswerCorrect);
    if (isAnswerCorrect) {
      onCorrect();
    } else {
      setShowExplanation(true);
    }
  };

  const handleNext = () => {
    setAnswer('');
    setIsCorrect(null);
    setShowExplanation(false);
    setShowHint(false);
    onCorrect();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !isCorrect) {
      handleSubmit();
    }
  };

  return (
    <Card className="p-6 space-y-4">
      <div className="space-y-4 rtl">
        <h3 className="text-xl font-bold">{question}</h3>
        {hint && (
          <div>
            <Button
              variant="outline"
              onClick={() => setShowHint(!showHint)}
              className="mb-2"
            >
              {showHint ? 'הסתר רמז' : 'הצג רמז'}
            </Button>
            {showHint && (
              <p className="text-muted-foreground">{hint}</p>
            )}
          </div>
        )}
      </div>
      <div className="flex gap-4 ltr">
        <Input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="הכנס את התשובה כאן"
          className="text-left"
          dir="ltr"
        />
        <Button onClick={handleSubmit}>בדוק</Button>
      </div>
      {isCorrect !== null && (
        <div className={`flex items-center gap-2 rtl ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
          {isCorrect ? <Check /> : <X />}
          <span>{isCorrect ? 'כל הכבוד!' : 'נסה שוב'}</span>
        </div>
      )}
      {showExplanation && (
        <div className="bg-muted p-4 rounded-lg rtl">
          <p className="font-semibold">הסבר:</p>
          <p>{explanation}</p>
        </div>
      )}
      {isCorrect && !isLastExercise && (
        <div className="flex justify-end rtl">
          <Button onClick={handleNext}>
            לתרגיל הבא
          </Button>
        </div>
      )}
    </Card>
  );
}