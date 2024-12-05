import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';

interface NumberLineCanvasProps {
  targetValue: number;
  onCorrectAnswer: () => void;
}

export function NumberLineCanvas({ targetValue, onCorrectAnswer }: NumberLineCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [markerPosition, setMarkerPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  // Reset state when target value changes
  useEffect(() => {
    setMarkerPosition(0);
    setIsDragging(false);
    setIsCorrect(false);
    
    // Redraw canvas with initial state
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw number line
    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.lineTo(550, 50);
    ctx.stroke();

    // Draw ticks
    for (let i = 0; i <= 10; i++) {
      const x = 50 + (i * 50);
      ctx.beginPath();
      ctx.moveTo(x, 45);
      ctx.lineTo(x, 55);
      ctx.stroke();
      
      // Add numbers
      ctx.fillStyle = 'black';
      ctx.textAlign = 'center';
      ctx.fillText((i/2).toString(), x, 70);
    }

    // Draw initial marker position
    ctx.beginPath();
    ctx.arc(50, 50, 8, 0, 2 * Math.PI);
    ctx.fillStyle = 'blue';
    ctx.fill();
  }, [targetValue]);

  // Update canvas when marker position or correct state changes
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw number line
    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.lineTo(550, 50);
    ctx.stroke();

    // Draw ticks
    for (let i = 0; i <= 10; i++) {
      const x = 50 + (i * 50);
      ctx.beginPath();
      ctx.moveTo(x, 45);
      ctx.lineTo(x, 55);
      ctx.stroke();
      
      // Add numbers
      ctx.fillStyle = 'black';
      ctx.textAlign = 'center';
      ctx.fillText((i/2).toString(), x, 70);
    }

    // Draw marker
    ctx.beginPath();
    ctx.arc(50 + markerPosition, 50, 8, 0, 2 * Math.PI);
    ctx.fillStyle = isCorrect ? 'green' : 'blue';
    ctx.fill();
  }, [markerPosition, isCorrect]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!isCorrect) {
      setIsDragging(true);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !canvasRef.current || isCorrect) return;
    
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - 50;
    const clampedX = Math.max(0, Math.min(x, 500));
    setMarkerPosition(clampedX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const checkAnswer = () => {
    const userValue = (markerPosition / 500) * 5;
    const isAnswerCorrect = Math.abs(userValue - targetValue) < 0.1;
    setIsCorrect(isAnswerCorrect);
    if (isAnswerCorrect) {
      onCorrectAnswer();
    }
  };

  return (
    <div className="space-y-4">
      <canvas
        ref={canvasRef}
        width={600}
        height={100}
        className="border rounded cursor-pointer"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      />
      <div className="flex justify-end">
        <Button onClick={checkAnswer} disabled={isCorrect}>בדוק תשובה</Button>
      </div>
    </div>
  );
}