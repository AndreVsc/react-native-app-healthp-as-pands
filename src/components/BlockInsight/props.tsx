export interface blockInsightProps {
    mode: 'water' | 'night' | 'practice';
    navigation: {
      navigate: (screen: string) => void;
    };
  }
  
export interface ProgressCircleProps {
    percentage: number; // De 0 a 100
    size: number;
    strokeWidth: number;
    backgroundColor: string;
    title:string|undefined,
  }
  