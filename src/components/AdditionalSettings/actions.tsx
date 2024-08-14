import exercises from './../../../assets/pratice.json'; 

export interface Exercise {
  id: number;
  exercise: string;
  description: string;
  image: string;
}

export const getExerciseById = (id: number): Exercise | undefined => {
  return exercises.find(exercise => exercise.id === id);
};
