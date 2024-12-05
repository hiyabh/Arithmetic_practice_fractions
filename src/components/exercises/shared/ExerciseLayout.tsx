import { ReactNode } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface ExerciseLayoutProps {
  title: string;
  explanation: ReactNode;
  children: ReactNode;
  onBack: () => void;
}

export function ExerciseLayout({ title, explanation, children, onBack }: ExerciseLayoutProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">{title}</h2>
        <Button variant="ghost" onClick={onBack}>
          <ArrowRight className="ml-2" />
          חזרה לדף הבית
        </Button>
      </div>
      
      <Card className="p-6">
        <div className="prose max-w-none">
          <h3 className="text-xl font-bold mb-4">הסבר</h3>
          {explanation}
        </div>
      </Card>

      {children}
    </div>
  );
}