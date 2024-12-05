export interface Student {
  name: string;
  points: number;
  streak: number;
}

export interface Exercise {
  id: string;
  type: 'addition' | 'subtraction' | 'conversion' | 'numberLine' | 'wordProblems';
  difficulty: 1 | 2 | 3;
  question: string;
  answer: string | number;
  explanation?: string;
}

export interface Topic {
  id: string;
  title: string;
  icon: string;
  description: string;
}