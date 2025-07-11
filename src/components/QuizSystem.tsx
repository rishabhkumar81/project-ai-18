
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';

interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer?: number;
  explanation?: string;
}

interface QuizProps {
  title: string;
  description: string;
  questions: Question[];
  onComplete: (results: {
    score: number;
    totalQuestions: number;
    answeredQuestions: {
      questionId: number;
      selectedAnswer: number;
      isCorrect: boolean;
    }[];
  }) => void;
  showResults?: boolean;
}

const QuizSystem: React.FC<QuizProps> = ({
  title,
  description,
  questions,
  onComplete,
  showResults = true,
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  
  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  
  const handleAnswerSelection = (value: string) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion.id]: parseInt(value),
    });
  };
  
  const handleNextQuestion = () => {
    setShowExplanation(false);
    
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      completeQuiz();
    }
  };
  
  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  
  const completeQuiz = () => {
    const results = {
      score: 0,
      totalQuestions: questions.length,
      answeredQuestions: [] as {
        questionId: number;
        selectedAnswer: number;
        isCorrect: boolean;
      }[],
    };
    
    let correctAnswers = 0;
    
    questions.forEach((question) => {
      const selectedAnswer = selectedAnswers[question.id];
      const isCorrect = 
        question.correctAnswer !== undefined && 
        selectedAnswer === question.correctAnswer;
      
      if (isCorrect) {
        correctAnswers++;
      }
      
      results.answeredQuestions.push({
        questionId: question.id,
        selectedAnswer: selectedAnswer || 0,
        isCorrect: isCorrect || false,
      });
    });
    
    results.score = correctAnswers;
    setScore(correctAnswers);
    setQuizCompleted(true);
    onComplete(results);
  };
  
  const checkAnswer = () => {
    setShowExplanation(true);
  };
  
  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setQuizCompleted(false);
    setScore(0);
    setShowExplanation(false);
  };
  
  const isAnswerSelected = selectedAnswers[currentQuestion?.id] !== undefined;
  const isCorrectAnswer = 
    currentQuestion?.correctAnswer !== undefined && 
    selectedAnswers[currentQuestion.id] === currentQuestion.correctAnswer;
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {!quizCompleted ? (
        <div>
          <div className="bg-warmTaupe text-white p-4">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="text-sm opacity-90">{description}</p>
          </div>
          
          <div className="p-6">
            <div className="mb-6">
              <div className="flex justify-between text-sm text-gray-500 mb-2">
                <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
                <span>{Math.round(progress)}% Complete</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
            
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-darkBrown">{currentQuestion.text}</h3>
              
              <RadioGroup 
                value={selectedAnswers[currentQuestion.id]?.toString() || ''}
                onValueChange={handleAnswerSelection}
                className="space-y-3"
              >
                {currentQuestion.options.map((option, index) => (
                  <div 
                    key={index}
                    className={`
                      flex items-start border rounded-md p-3
                      ${showExplanation && index === currentQuestion.correctAnswer 
                        ? 'border-green-500 bg-green-50' 
                        : showExplanation && index === selectedAnswers[currentQuestion.id] && index !== currentQuestion.correctAnswer
                          ? 'border-red-500 bg-red-50'
                          : 'border-gray-200 hover:border-warmTaupe'}
                    `}
                  >
                    <RadioGroupItem 
                      value={index.toString()} 
                      id={`option-${index}`} 
                      className="mt-1"
                    />
                    <Label 
                      htmlFor={`option-${index}`} 
                      className="ml-3 flex-1 cursor-pointer"
                    >
                      {option}
                    </Label>
                    {showExplanation && index === currentQuestion.correctAnswer && (
                      <CheckCircle className="h-5 w-5 text-green-500 ml-2" />
                    )}
                    {showExplanation && index === selectedAnswers[currentQuestion.id] && index !== currentQuestion.correctAnswer && (
                      <XCircle className="h-5 w-5 text-red-500 ml-2" />
                    )}
                  </div>
                ))}
              </RadioGroup>
              
              {showExplanation && currentQuestion.explanation && (
                <div className="mt-4 bg-blue-50 border border-blue-200 rounded-md p-4">
                  <div className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                    <div>
                      <p className="font-medium text-blue-800">Explanation:</p>
                      <p className="text-blue-700">{currentQuestion.explanation}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="mt-8 flex justify-between">
              <Button
                variant="outline"
                onClick={handlePreviousQuestion}
                disabled={currentQuestionIndex === 0}
              >
                Previous
              </Button>
              
              <div className="space-x-3">
                {showResults && !showExplanation && isAnswerSelected && (
                  <Button 
                    variant="outline" 
                    onClick={checkAnswer}
                    className="border-warmTaupe text-warmTaupe"
                  >
                    Check Answer
                  </Button>
                )}
                
                <Button
                  onClick={handleNextQuestion}
                  disabled={!isAnswerSelected}
                  className="bg-warmTaupe hover:bg-opacity-90"
                >
                  {isLastQuestion ? "Complete Quiz" : "Next Question"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-6">
          <div className="text-center">
            <div className="inline-flex items-center justify-center bg-lightBeige rounded-full w-20 h-20 mb-6">
              <span className="text-2xl font-bold text-warmTaupe">{score}/{questions.length}</span>
            </div>
            <h3 className="text-2xl font-bold text-darkBrown mb-2">Quiz Completed!</h3>
            <p className="text-gray-600 mb-6">
              You scored {score} out of {questions.length} questions correctly.
            </p>
            
            <div className="space-x-4">
              <Button
                variant="outline"
                onClick={resetQuiz}
                className="border-warmTaupe text-warmTaupe"
              >
                Retry Quiz
              </Button>
              
              <Button
                onClick={() => {}}
                className="bg-warmTaupe hover:bg-opacity-90"
              >
                View Detailed Results
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizSystem;
