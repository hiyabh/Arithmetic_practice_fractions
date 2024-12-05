import { Student } from '@/types';
import { Trophy, Flame } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface StudentHeaderProps {
  student: Student;
}

export function StudentHeader({ student }: StudentHeaderProps) {
  return (
    <Card className="p-6 mb-8 bg-gradient-to-l from-primary/10 to-primary/5 rtl">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">שלום {student.name}!</h1>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-yellow-500" />
            <span className="font-bold">{student.points}</span>
          </div>
          <div className="flex items-center gap-2">
            <Flame className="h-5 w-5 text-orange-500" />
            <span className="font-bold">{student.streak}</span>
          </div>
        </div>
      </div>
    </Card>
  );
}