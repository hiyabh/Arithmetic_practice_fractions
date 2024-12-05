import { Topic } from '@/types';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import * as Icons from 'lucide-react';

interface TopicCardProps {
  topic: Topic;
  onSelect: (topicId: string) => void;
}

export function TopicCard({ topic, onSelect }: TopicCardProps) {
  const Icon = (Icons as any)[topic.icon];

  return (
    <Card className="p-6 hover:shadow-lg transition-shadow rtl">
      <div className="flex flex-col items-center gap-4">
        <Icon className="h-12 w-12 text-primary" />
        <h2 className="text-xl font-bold text-center">{topic.title}</h2>
        <p className="text-muted-foreground text-center">{topic.description}</p>
        <Button 
          className="w-full" 
          onClick={() => onSelect(topic.id)}
        >
          התחל ללמוד
        </Button>
      </div>
    </Card>
  );
}