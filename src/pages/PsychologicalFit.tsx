import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Brain, Target, TrendingUp, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import AssessmentLayout from '@/components/AssessmentLayout';
import { useNavigate } from 'react-router-dom';

const PsychologicalFit = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const questions = [
    {
      id: 1,
      category: "Interest Scale (RIASEC)",
      question: "I enjoy figuring out how websites and applications work behind the scenes.",
      options: [
        { value: "5", label: "Strongly Agree" },
        { value: "4", label: "Agree" },
        { value: "3", label: "Neutral" },
        { value: "2", label: "Disagree" },
        { value: "1", label: "Strongly Disagree" }
      ]
    },
    {
      id: 2,
      category: "Personality Compatibility",
      question: "I prefer structured, systematic approaches to solving complex problems.",
      options: [
        { value: "5", label: "Strongly Agree" },
        { value: "4", label: "Agree" },
        { value: "3", label: "Neutral" },
        { value: "2", label: "Disagree" },
        { value: "1", label: "Strongly Disagree" }
      ]
    },
    {
      id: 3,
      category: "Growth Mindset",
      question: "When I encounter a technical challenge I can't solve immediately, I see it as an exciting learning opportunity.",
      options: [
        { value: "5", label: "Strongly Agree" },
        { value: "4", label: "Agree" },
        { value: "3", label: "Neutral" },
        { value: "2", label: "Disagree" },
        { value: "1", label: "Strongly Disagree" }
      ]
    },
    {
      id: 4,
      category: "Work Style Preference",
      question: "I work best when I can focus deeply on a single complex task for extended periods.",
      options: [
        { value: "5", label: "Strongly Agree" },
        { value: "4", label: "Agree" },
        { value: "3", label: "Neutral" },
        { value: "2", label: "Disagree" },
        { value: "1", label: "Strongly Disagree" }
      ]
    },
    {
      id: 5,
      category: "Motivation Profile",
      question: "I am primarily motivated by understanding how things work rather than external rewards.",
      options: [
        { value: "5", label: "Strongly Agree" },
        { value: "4", label: "Agree" },
        { value: "3", label: "Neutral" },
        { value: "2", label: "Disagree" },
        { value: "1", label: "Strongly Disagree" }
      ]
    },
    {
      id: 6,
      category: "Collaboration Style",
      question: "I enjoy working in teams where I can contribute both technical solutions and creative ideas.",
      options: [
        { value: "5", label: "Strongly Agree" },
        { value: "4", label: "Agree" },
        { value: "3", label: "Neutral" },
        { value: "2", label: "Disagree" },
        { value: "1", label: "Strongly Disagree" }
      ]
    }
  ];

  const handleAnswerChange = (value: string) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion]: value
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      // Navigate to next section
      navigate('/technical-aptitude');
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    } else {
      navigate('/');
    }
  };

  const canProceed = answers[currentQuestion] !== undefined;
  const progress = 25 + (currentQuestion / questions.length) * 25;

  return (
    <AssessmentLayout progress={Math.round(progress)}>
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold gradient-text">
              Psychological Fit Assessment
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            This section evaluates your psychological and motivational alignment with MEAN Stack development through validated personality assessments.
          </p>
        </div>

        {/* Assessment Overview */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card className="card-gradient border-0 shadow-medium">
            <CardContent className="p-4 text-center">
              <Target className="w-8 h-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold text-sm">Interest Scale</h3>
              <p className="text-xs text-muted-foreground">RIASEC Types</p>
            </CardContent>
          </Card>
          <Card className="card-gradient border-0 shadow-medium">
            <CardContent className="p-4 text-center">
              <Brain className="w-8 h-8 text-secondary mx-auto mb-2" />
              <h3 className="font-semibold text-sm">Personality</h3>
              <p className="text-xs text-muted-foreground">Big Five + Tech Traits</p>
            </CardContent>
          </Card>
          <Card className="card-gradient border-0 shadow-medium">
            <CardContent className="p-4 text-center">
              <TrendingUp className="w-8 h-8 text-accent mx-auto mb-2" />
              <h3 className="font-semibold text-sm">Cognitive Style</h3>
              <p className="text-xs text-muted-foreground">Work Preferences</p>
            </CardContent>
          </Card>
          <Card className="card-gradient border-0 shadow-medium">
            <CardContent className="p-4 text-center">
              <Users className="w-8 h-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold text-sm">Motivation</h3>
              <p className="text-xs text-muted-foreground">Intrinsic vs Extrinsic</p>
            </CardContent>
          </Card>
        </div>

        {/* Question Card */}
        <Card className="border-0 shadow-strong bg-gradient-to-br from-card to-muted/20 mb-8">
          <CardHeader>
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-muted-foreground font-medium">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span className="text-sm text-primary font-semibold">
                {questions[currentQuestion].category}
              </span>
            </div>
            <CardTitle className="text-xl md:text-2xl leading-relaxed">
              {questions[currentQuestion].question}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup
              value={answers[currentQuestion] || ''}
              onValueChange={handleAnswerChange}
              className="space-y-4"
            >
              {questions[currentQuestion].options.map((option) => (
                <div key={option.value} className="flex items-center space-x-3">
                  <RadioGroupItem 
                    value={option.value} 
                    id={option.value}
                    className="border-2"
                  />
                  <Label 
                    htmlFor={option.value}
                    className="text-base font-medium cursor-pointer flex-1 py-3 px-4 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <Button 
            variant="outline" 
            onClick={handlePrevious}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            {currentQuestion === 0 ? 'Back to Introduction' : 'Previous'}
          </Button>

          <div className="text-center">
            <div className="text-sm text-muted-foreground mb-2">
              Progress: {currentQuestion + 1}/{questions.length}
            </div>
            <div className="w-32 bg-muted rounded-full h-2">
              <div 
                className="bg-primary rounded-full h-2 transition-all"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          <Button 
            variant={canProceed ? "default" : "outline"}
            onClick={handleNext}
            disabled={!canProceed}
            className="flex items-center gap-2"
          >
            {currentQuestion === questions.length - 1 ? 'Continue to Technical Assessment' : 'Next'}
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </AssessmentLayout>
  );
};

export default PsychologicalFit;