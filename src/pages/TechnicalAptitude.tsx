import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Code, Database, Server, Globe, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import AssessmentLayout from '@/components/AssessmentLayout';
import { useNavigate } from 'react-router-dom';

const TechnicalAptitude = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const questions = [
    {
      id: 1,
      category: "JavaScript Fundamentals",
      difficulty: "Basic",
      question: "What is the output of the following JavaScript code?\n\nconsole.log(typeof null);",
      options: [
        { value: "object", label: "\"object\"", correct: true },
        { value: "null", label: "\"null\"" },
        { value: "undefined", label: "\"undefined\"" },
        { value: "string", label: "\"string\"" }
      ]
    },
    {
      id: 2,
      category: "MEAN Stack Concepts",
      difficulty: "Intermediate",
      question: "In the MEAN stack, which component is primarily responsible for handling HTTP requests and routing?",
      options: [
        { value: "mongodb", label: "MongoDB" },
        { value: "express", label: "Express.js", correct: true },
        { value: "angular", label: "Angular" },
        { value: "nodejs", label: "Node.js" }
      ]
    },
    {
      id: 3,
      category: "REST API Design",
      difficulty: "Intermediate",
      question: "What HTTP method should be used to update a specific user's information in a RESTful API?",
      options: [
        { value: "get", label: "GET" },
        { value: "post", label: "POST" },
        { value: "put", label: "PUT", correct: true },
        { value: "delete", label: "DELETE" }
      ]
    },
    {
      id: 4,
      category: "Angular Concepts",
      difficulty: "Intermediate",
      question: "What is two-way data binding in Angular?",
      options: [
        { value: "one-way", label: "Data flows only from component to template" },
        { value: "two-way", label: "Data can flow both from component to template and template to component", correct: true },
        { value: "no-binding", label: "No data binding exists" },
        { value: "event-only", label: "Only event binding is possible" }
      ]
    },
    {
      id: 5,
      category: "Database Concepts",
      difficulty: "Basic",
      question: "What type of database is MongoDB?",
      options: [
        { value: "relational", label: "Relational Database" },
        { value: "nosql", label: "NoSQL Database", correct: true },
        { value: "graph", label: "Graph Database" },
        { value: "inmemory", label: "In-Memory Database" }
      ]
    },
    {
      id: 6,
      category: "Node.js Architecture",
      difficulty: "Intermediate",
      question: "What makes Node.js particularly suitable for building scalable network applications?",
      options: [
        { value: "multithreading", label: "Multi-threading capabilities" },
        { value: "eventloop", label: "Event-driven, non-blocking I/O model", correct: true },
        { value: "compiled", label: "Compiled language performance" },
        { value: "memory", label: "Large memory allocation" }
      ]
    },
    {
      id: 7,
      category: "Logical Reasoning",
      difficulty: "Basic",
      question: "If it takes 5 developers 10 days to complete a project, how many days would it take 10 developers to complete the same project? (Assume linear scalability)",
      options: [
        { value: "5", label: "5 days", correct: true },
        { value: "10", label: "10 days" },
        { value: "20", label: "20 days" },
        { value: "2", label: "2 days" }
      ]
    },
    {
      id: 8,
      category: "System Architecture",
      difficulty: "Advanced",
      question: "In a client-server architecture, where does business logic typically reside in a MEAN stack application?",
      options: [
        { value: "client", label: "Client-side (Angular)" },
        { value: "server", label: "Server-side (Node.js/Express)", correct: true },
        { value: "database", label: "Database (MongoDB)" },
        { value: "distributed", label: "Distributed across all components" }
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
      navigate('/wiscar-analysis');
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    } else {
      navigate('/psychological-fit');
    }
  };

  const canProceed = answers[currentQuestion] !== undefined;
  const progress = 50 + (currentQuestion / questions.length) * 25;

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Basic': return 'bg-secondary/10 text-secondary border-secondary/20';
      case 'Intermediate': return 'bg-primary/10 text-primary border-primary/20';
      case 'Advanced': return 'bg-accent/10 text-accent border-accent/20';
      default: return 'bg-muted/10 text-muted-foreground border-muted/20';
    }
  };

  return (
    <AssessmentLayout progress={Math.round(progress)}>
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-secondary to-primary rounded-xl flex items-center justify-center">
              <Code className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold gradient-text">
              Technical Aptitude Assessment
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            This section evaluates your technical knowledge and problem-solving abilities relevant to MEAN Stack development.
          </p>
        </div>

        {/* Assessment Categories */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card className="card-gradient border-0 shadow-medium">
            <CardContent className="p-4 text-center">
              <Code className="w-8 h-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold text-sm">JavaScript</h3>
              <p className="text-xs text-muted-foreground">Fundamentals</p>
            </CardContent>
          </Card>
          <Card className="card-gradient border-0 shadow-medium">
            <CardContent className="p-4 text-center">
              <Server className="w-8 h-8 text-secondary mx-auto mb-2" />
              <h3 className="font-semibold text-sm">Backend</h3>
              <p className="text-xs text-muted-foreground">Node.js & Express</p>
            </CardContent>
          </Card>
          <Card className="card-gradient border-0 shadow-medium">
            <CardContent className="p-4 text-center">
              <Globe className="w-8 h-8 text-accent mx-auto mb-2" />
              <h3 className="font-semibold text-sm">Frontend</h3>
              <p className="text-xs text-muted-foreground">Angular</p>
            </CardContent>
          </Card>
          <Card className="card-gradient border-0 shadow-medium">
            <CardContent className="p-4 text-center">
              <Database className="w-8 h-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold text-sm">Database</h3>
              <p className="text-xs text-muted-foreground">MongoDB</p>
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
              <div className="flex items-center gap-2">
                <Badge variant="outline" className={getDifficultyColor(questions[currentQuestion].difficulty)}>
                  {questions[currentQuestion].difficulty}
                </Badge>
                <Badge variant="outline" className="bg-muted/10 text-muted-foreground border-muted/20">
                  {questions[currentQuestion].category}
                </Badge>
              </div>
            </div>
            <CardTitle className="text-xl md:text-2xl leading-relaxed whitespace-pre-line">
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
                    className="text-base font-medium cursor-pointer flex-1 py-3 px-4 rounded-lg hover:bg-muted/50 transition-colors font-mono"
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
            {currentQuestion === 0 ? 'Back to Psychological Fit' : 'Previous'}
          </Button>

          <div className="text-center">
            <div className="text-sm text-muted-foreground mb-2">
              Progress: {currentQuestion + 1}/{questions.length}
            </div>
            <div className="w-32 bg-muted rounded-full h-2">
              <div 
                className="bg-secondary rounded-full h-2 transition-all"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          <Button 
            variant={canProceed ? "secondary" : "outline"}
            onClick={handleNext}
            disabled={!canProceed}
            className="flex items-center gap-2"
          >
            {currentQuestion === questions.length - 1 ? 'Continue to WISCAR Analysis' : 'Next'}
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </AssessmentLayout>
  );
};

export default TechnicalAptitude;