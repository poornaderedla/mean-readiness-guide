import React from 'react';
import { ArrowRight, Download, Target, Brain, Code, TrendingUp, CheckCircle, AlertTriangle, XCircle, Users, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import AssessmentLayout from '@/components/AssessmentLayout';

const Results = () => {
  // Mock results data
  const overallScore = 78;
  const recommendation = "YES";
  const confidence = 82;
  const psychometric = { overall: 85, categories: { 'Interest (RIASEC)': 80, 'Personality (Big 5)': 90, 'Motivation': 75 } };
  const technical = { overall: 72, correctAnswers: 6, totalQuestions: 8, categories: { 'JavaScript': 70, 'Backend': 80, 'Frontend': 65 } };
  const wiscar = { overall: 76, quadrant: 'Ready to Start', dimensions: { 'Will': 90, 'Interest': 88, 'Skill': 65 } };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-orange-600';
    return 'text-red-600';
  };

  const getRecommendationData = () => {
    if (recommendation === 'YES') {
      return {
        title: 'MEAN Stack is an Excellent Fit for You!',
        color: 'green',
        icon: CheckCircle,
        description: 'You show strong alignment across psychological fit, technical readiness, and holistic assessment dimensions.'
      };
    } else if (recommendation === 'MAYBE') {
      return {
        title: 'MEAN Stack Could Be Right with Preparation',
        color: 'orange',
        icon: AlertTriangle,
        description: 'You have potential but may need to strengthen certain areas before diving deep into MEAN Stack.'
      };
    } else {
      return {
        title: 'Consider Alternative Paths',
        color: 'red',
        icon: XCircle,
        description: 'Based on your current profile, other technology paths might be a better fit for your interests and skills.'
      };
    }
  };

  const recommendationData = getRecommendationData();
  const RecommendationIcon = recommendationData.icon;

  return (
    <AssessmentLayout progress={100}>
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Overall Recommendation */}
        <Card className={`border-2 ${
          recommendationData.color === 'green' ? 'border-green-200 bg-green-50' :
          recommendationData.color === 'orange' ? 'border-orange-200 bg-orange-50' :
          'border-red-200 bg-red-50'
        }`}>
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className={`p-4 rounded-full ${
                recommendationData.color === 'green' ? 'bg-green-100' :
                recommendationData.color === 'orange' ? 'bg-orange-100' :
                'bg-red-100'
              }`}>
                <RecommendationIcon className={`w-12 h-12 ${
                  recommendationData.color === 'green' ? 'text-green-600' :
                  recommendationData.color === 'orange' ? 'text-orange-600' :
                  'text-red-600'
                }`} />
              </div>
            </div>
            <CardTitle className="text-3xl font-bold text-gray-900 mb-2">
              {recommendationData.title}
            </CardTitle>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {recommendationData.description}
            </p>
            <Badge 
              variant="outline" 
              className={`mt-4 text-lg px-4 py-2 ${
                recommendationData.color === 'green' ? 'bg-green-100 text-green-800 border-green-300' :
                recommendationData.color === 'orange' ? 'bg-orange-100 text-orange-800 border-orange-300' :
                'bg-red-100 text-red-800 border-red-300'
              }`}
            >
              Recommendation: {recommendation}
            </Badge>
          </CardHeader>
        </Card>

        {/* Score Breakdown */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-purple-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Brain className="w-5 h-5 text-purple-600" />
                <span>Psychological Fit</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-2xl font-bold text-purple-600">
                      {psychometric.overall}%
                    </span>
                    <Badge variant={psychometric.overall >= 75 ? 'default' : psychometric.overall >= 60 ? 'secondary' : 'destructive'}>
                      {psychometric.overall >= 75 ? 'Excellent' : psychometric.overall >= 60 ? 'Good' : 'Needs Work'}
                    </Badge>
                  </div>
                  <Progress value={psychometric.overall} className="h-3" />
                </div>
                <div className="space-y-2">
                  {Object.entries(psychometric.categories).map(([category, score]) => (
                    <div key={category} className="flex justify-between text-sm">
                      <span className="text-gray-600">{category.replace(/\(.*\)/, '').trim()}</span>
                      <span className="font-medium">{score}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Code className="w-5 h-5 text-green-600" />
                <span>Technical Readiness</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-2xl font-bold text-green-600">
                      {technical.overall}%
                    </span>
                    <Badge variant={technical.overall >= 75 ? 'default' : technical.overall >= 60 ? 'secondary' : 'destructive'}>
                      {technical.overall >= 75 ? 'Strong' : technical.overall >= 60 ? 'Moderate' : 'Developing'}
                    </Badge>
                  </div>
                  <Progress value={technical.overall} className="h-3" />
                </div>
                <div className="text-sm text-gray-600">
                  Correct: {technical.correctAnswers} / {technical.totalQuestions}
                </div>
                <div className="space-y-2">
                  {Object.entries(technical.categories).map(([category, score]) => (
                    <div key={category} className="flex justify-between text-sm">
                      <span className="text-gray-600">{category}</span>
                      <span className="font-medium">{score}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-orange-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="w-5 h-5 text-orange-600" />
                <span>WISCAR Analysis</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-2xl font-bold text-orange-600">
                      {wiscar.overall}%
                    </span>
                    <Badge variant="outline" className="bg-orange-50 text-orange-700">
                      {wiscar.quadrant}
                    </Badge>
                  </div>
                  <Progress value={wiscar.overall} className="h-3" />
                </div>
                <div className="space-y-2">
                  {Object.entries(wiscar.dimensions).map(([dimension, score]) => (
                    <div key={dimension} className="flex justify-between text-sm">
                      <span className="text-gray-600">{dimension}</span>
                      <span className="font-medium">{score}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* ... (rest of the sections to be added: career path, learning path, etc.) ... */}

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4">
          <Button 
            className="bg-blue-600 hover:bg-blue-700 text-white"
            onClick={() => window.location.reload()}
          >
            Retake Assessment
          </Button>
          {recommendation === 'YES' && (
            <Button variant="outline" className="border-green-500 text-green-700 hover:bg-green-50">
              View Learning Resources
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          )}
        </div>
      </div>
    </AssessmentLayout>
  );
};

export default Results;