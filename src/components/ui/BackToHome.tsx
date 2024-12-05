import { Button } from './button';
import { ArrowRight } from 'lucide-react';

export function BackToHome() {
  return (
    <Button variant="ghost" onClick={() => window.history.back()}>
      <ArrowRight className="ml-2" />
      חזרה
    </Button>
  );
}