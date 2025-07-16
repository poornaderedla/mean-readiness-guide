import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Target, Brain, Lightbulb, Users, TrendingUp, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import AssessmentLayout from '@/components/AssessmentLayout';
import { useNavigate } from 'react-router-dom';

const WiscarAnalysis = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const questions = [
    {
      id: 1,
      dimension: "Will",
      icon: Target,
      question: "I am willing to dedicate 5+ hours weekly to learning MEAN Stack technologies for the next 6 months.",
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
      dimension: "Interest",
      icon: Brain,
      question: "Web development and creating interactive applications genuinely excites me.",
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
      dimension: "Skill",
      icon: Lightbulb,
      question: "I have experience with at least one programming language and understand basic programming concepts.",
      options: [
        { value: "5", label: "Extensive experience" },
        { value: "4", label: "Good experience" },
        { value: "3", label: "Some experience" },
        { value: "2", label: "Limited experience" },
        { value: "1", label: "No experience" }
      ]
    },
    {
      id: 4,
      dimension: "Cognitive Readiness",
      icon: TrendingUp,
      question: "When debugging complex problems, I can systematically break them down into smaller, manageable parts.",
      options: [
        { value: "5", label: "Always" },
        { value: "4", label: "Usually" },
        { value: "3", label: "Sometimes" },
        { value: "2", label: "Rarely" },
        { value: "1", label: "Never" }
      ]
    },
    {
      id: 5,
      dimension: "Ability to Learn",
      icon: Star,
      question: "When I receive constructive feedback, I actively seek to understand and apply it to improve my skills.",
      options: [
        { value: "5", label: "Always" },
        { value: "4", label: "Usually" },
        { value: "3", label: "Sometimes" },
        { value: "2", label: "Rarely" },
        { value: "1", label: "Never" }
      ]
    },
    {
      id: 6,
      dimension: "Real-World Fit",
      icon: Users,
      question: "I understand that MEAN Stack developers often work in agile teams with changing requirements and tight deadlines.",
      options: [
        { value: "5", label: "Fully understand and embrace this" },
        { value: "4", label: "Understand and am comfortable" },
        { value: "3", label: "Somewhat understand" },
        { value: "2", label: "Limited understanding" },
        { value: "1", label: "Don't understand this environment" }
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
      navigate('/results');
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    } else {
      navigate('/technical-aptitude');
    }
  };

  const canProceed = answers[currentQuestion] !== undefined;
  const progress = 75 + (currentQuestion / questions.length) * 25;

  const getDimensionColor = (dimension: string) => {
    const colors = {
      'Will': 'bg-primary/10 text-primary border-primary/20',
      'Interest': 'bg-secondary/10 text-secondary border-secondary/20',
      'Skill': 'bg-accent/10 text-accent border-accent/20',
      'Cognitive Readiness': 'bg-primary/10 text-primary border-primary/20',
      'Ability to Learn': 'bg-secondary/10 text-secondary border-secondary/20',
      'Real-World Fit': 'bg-accent/10 text-accent border-accent/20'
    };
    return colors[dimension as keyof typeof colors] || 'bg-muted/10 text-muted-foreground border-muted/20';
  };

  return (
    <AssessmentLayout progress={Math.round(progress)}>
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-accent to-secondary rounded-xl flex items-center justify-center">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold gradient-text">
              WISCAR Framework Analysis
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            This section provides a holistic 6-dimensional view of your readiness for MEAN Stack development using the proven WISCAR model.
          </p>
        </div>

        {/* WISCAR Dimensions Overview */}
        <div className="grid md:grid-cols-6 gap-4 mb-8">
          {[
            { letter: 'W', word: 'Will', icon: Target, color: 'primary' },
            { letter: 'I', word: 'Interest', icon: Brain, color: 'secondary' },
            { letter: 'S', word: 'Skill', icon: Lightbulb, color: 'accent' },
            { letter: 'C', word: 'Cognitive', icon: TrendingUp, color: 'primary' },
            { letter: 'A', word: 'Ability', icon: Star, color: 'secondary' },
            { letter: 'R', word: 'Real-World', icon: Users, color: 'accent' }
          ].map((item, index) => {
            const Icon = item.icon;
            const isActive = index === currentQuestion;
            return (
              <Card key={item.letter} className={`card-gradient border-0 transition-all ${isActive ? 'shadow-strong scale-105' : 'shadow-medium'}`}>
                <CardContent className="p-4 text-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 ${
                    isActive ? `bg-${item.color} text-white` : `bg-${item.color}/10 text-${item.color}`
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg">{item.letter}</h3>
                  <p className="text-xs text-muted-foreground">{item.word}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Question Card */}
        <Card className="border-0 shadow-strong bg-gradient-to-br from-card to-muted/20 mb-8">
          <CardHeader>
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-muted-foreground font-medium">
                Dimension {currentQuestion + 1} of {questions.length}
              </span>
              <Badge variant="outline" className={getDimensionColor(questions[currentQuestion].dimension)}>
                {questions[currentQuestion].dimension}
              </Badge>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-accent to-secondary rounded-xl flex items-center justify-center">
                {React.createElement(questions[currentQuestion].icon, { className: "w-6 h-6 text-white" })}
              </div>
              <div>
                <h3 className="text-lg font-semibold">{questions[currentQuestion].dimension}</h3>
                <p className="text-sm text-muted-foreground">WISCAR Dimension Assessment</p>
              </div>
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
            {currentQuestion === 0 ? 'Back to Technical Assessment' : 'Previous'}
          </Button>

          <div className="text-center">
            <div className="text-sm text-muted-foreground mb-2">
              WISCAR Progress: {currentQuestion + 1}/{questions.length}
            </div>
            <div className="w-32 bg-muted rounded-full h-2">
              <div 
                className="bg-accent rounded-full h-2 transition-all"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          <Button 
            variant={canProceed ? "hero" : "outline"}
            onClick={handleNext}
            disabled={!canProceed}
            className="flex items-center gap-2"
          >
            {currentQuestion === questions.length - 1 ? 'See Your Results' : 'Next'}
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </AssessmentLayout>
  );
};

export default WiscarAnalysis;