import React from 'react';
import { ArrowRight, Download, Target, Brain, Code, TrendingUp, CheckCircle, AlertTriangle, XCircle, Users, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import AssessmentLayout from '@/components/AssessmentLayout';

const Results = () => {
  // Mock results data - in a real app, this would come from the assessment responses
  const overallScore = 78;
  const recommendation = "YES";
  const confidence = 82;

  const sectionScores = {
    psychological: 85,
    technical: 72,
    wiscar: 76
  };

  const wiscarScores = {
    will: 90,
    interest: 88,
    skill: 65,
    cognitive: 80,
    ability: 85,
    realWorld: 70
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-secondary';
    if (score >= 60) return 'text-primary';
    return 'text-accent';
  };

  const getScoreIcon = (score: number) => {
    if (score >= 80) return CheckCircle;
    if (score >= 60) return AlertTriangle;
    return XCircle;
  };

  const getRecommendationColor = (rec: string) => {
    switch (rec) {
      case 'YES': return 'bg-secondary/10 text-secondary border-secondary/20';
      case 'MAYBE': return 'bg-primary/10 text-primary border-primary/20';
      case 'NO': return 'bg-accent/10 text-accent border-accent/20';
      default: return 'bg-muted/10 text-muted-foreground border-muted/20';
    }
  };

  return (
    <AssessmentLayout progress={100}>
      <div className="max-w-6xl mx-auto">
        {/* Results Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-secondary to-primary rounded-xl flex items-center justify-center">
              <Star className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold gradient-text">
              Your MEAN Stack Readiness Results
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive analysis of your psychological fit, technical readiness, and career potential for MEAN Stack development.
          </p>
        </div>

        {/* Main Results Summary */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Overall Recommendation */}
          <Card className="border-0 shadow-strong bg-gradient-to-br from-card to-secondary/5 md:col-span-1">
            <CardHeader className="text-center">
              <CardTitle className="text-lg">Recommendation</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-secondary" />
              </div>
              <Badge variant="outline" className={`${getRecommendationColor(recommendation)} text-lg px-4 py-2 mb-3`}>
                {recommendation}
              </Badge>
              <h2 className="text-2xl font-bold mb-2">You Should Learn MEAN Stack!</h2>
              <p className="text-sm text-muted-foreground">
                Strong alignment across psychological, technical, and motivational factors.
              </p>
            </CardContent>
          </Card>

          {/* Overall Score */}
          <Card className="border-0 shadow-strong bg-gradient-to-br from-card to-primary/5">
            <CardHeader className="text-center">
              <CardTitle className="text-lg">Overall Readiness Score</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <svg className="w-24 h-24" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-muted"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray={`${overallScore}, 100`}
                    className="text-primary"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold">{overallScore}</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Highly Compatible</h3>
              <p className="text-sm text-muted-foreground">
                Above average readiness for MEAN Stack learning
              </p>
            </CardContent>
          </Card>

          {/* Confidence Score */}
          <Card className="border-0 shadow-strong bg-gradient-to-br from-card to-accent/5">
            <CardHeader className="text-center">
              <CardTitle className="text-lg">Confidence Level</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                <Target className="w-10 h-10 text-accent" />
              </div>
              <div className="text-3xl font-bold mb-2">{confidence}%</div>
              <h3 className="text-lg font-semibold mb-2">High Confidence</h3>
              <p className="text-sm text-muted-foreground">
                Strong predictive accuracy for success
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Section Breakdown */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="border-0 shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-primary" />
                Psychological Fit
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium">Score</span>
                <span className={`text-lg font-bold ${getScoreColor(sectionScores.psychological)}`}>
                  {sectionScores.psychological}/100
                </span>
              </div>
              <Progress value={sectionScores.psychological} className="mb-3" />
              <p className="text-sm text-muted-foreground">
                Strong personality alignment with MEAN Stack development traits.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="w-5 h-5 text-secondary" />
                Technical Aptitude
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium">Score</span>
                <span className={`text-lg font-bold ${getScoreColor(sectionScores.technical)}`}>
                  {sectionScores.technical}/100
                </span>
              </div>
              <Progress value={sectionScores.technical} className="mb-3" />
              <p className="text-sm text-muted-foreground">
                Good technical foundation with room for growth in specific areas.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-accent" />
                WISCAR Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium">Score</span>
                <span className={`text-lg font-bold ${getScoreColor(sectionScores.wiscar)}`}>
                  {sectionScores.wiscar}/100
                </span>
              </div>
              <Progress value={sectionScores.wiscar} className="mb-3" />
              <p className="text-sm text-muted-foreground">
                Strong motivation and learning capacity indicators.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* WISCAR Radar Chart Representation */}
        <Card className="border-0 shadow-strong bg-gradient-to-br from-card to-muted/20 mb-12">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">WISCAR Dimensional Analysis</CardTitle>
            <p className="text-muted-foreground">Your readiness profile across six key dimensions</p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { key: 'will', label: 'Will', icon: Target, score: wiscarScores.will },
                { key: 'interest', label: 'Interest', icon: Brain, score: wiscarScores.interest },
                { key: 'skill', label: 'Skill', icon: Code, score: wiscarScores.skill },
                { key: 'cognitive', label: 'Cognitive', icon: TrendingUp, score: wiscarScores.cognitive },
                { key: 'ability', label: 'Ability', icon: Star, score: wiscarScores.ability },
                { key: 'realWorld', label: 'Real-World', icon: Users, score: wiscarScores.realWorld }
              ].map((dimension) => {
                const Icon = dimension.icon;
                const ScoreIcon = getScoreIcon(dimension.score);
                return (
                  <div key={dimension.key} className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">{dimension.label}</h4>
                    <div className="flex items-center justify-center gap-1 mb-2">
                      <ScoreIcon className={`w-4 h-4 ${getScoreColor(dimension.score)}`} />
                      <span className={`font-bold ${getScoreColor(dimension.score)}`}>
                        {dimension.score}
                      </span>
                    </div>
                    <Progress value={dimension.score} className="h-2" />
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <Card className="border-0 shadow-strong bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl gradient-text">Your Personalized Learning Path</CardTitle>
            <p className="text-muted-foreground">Recommended steps to start your MEAN Stack journey</p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Immediate Next Steps
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary mt-0.5" />
                    <div>
                      <span className="font-medium">Strengthen JavaScript Fundamentals</span>
                      <p className="text-sm text-muted-foreground">Focus on ES6+, async/await, and DOM manipulation</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary mt-0.5" />
                    <div>
                      <span className="font-medium">Start with Node.js Basics</span>
                      <p className="text-sm text-muted-foreground">Learn server-side JavaScript and NPM package management</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary mt-0.5" />
                    <div>
                      <span className="font-medium">Join Developer Communities</span>
                      <p className="text-sm text-muted-foreground">Connect with MEAN Stack developers on GitHub and Discord</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-accent" />
                  Learning Timeline
                </h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-primary pl-4">
                    <h4 className="font-medium">Months 1-2: Foundations</h4>
                    <p className="text-sm text-muted-foreground">JavaScript, HTML/CSS, Git basics</p>
                  </div>
                  <div className="border-l-2 border-secondary pl-4">
                    <h4 className="font-medium">Months 3-4: Backend</h4>
                    <p className="text-sm text-muted-foreground">Node.js, Express.js, MongoDB</p>
                  </div>
                  <div className="border-l-2 border-accent pl-4">
                    <h4 className="font-medium">Months 5-6: Frontend</h4>
                    <p className="text-sm text-muted-foreground">Angular framework and integration</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Button variant="hero" size="lg">
                <TrendingUp className="w-5 h-5 mr-2" />
                Start Learning Path
              </Button>
              <Button variant="outline" size="lg">
                <Download className="w-5 h-5 mr-2" />
                Download Report
              </Button>
              <Button variant="secondary" size="lg">
                <Users className="w-5 h-5 mr-2" />
                Join Community
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </AssessmentLayout>
  );
};

export default Results;