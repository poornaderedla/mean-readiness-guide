import React from 'react';
import { ArrowRight, Clock, Target, TrendingUp, Code, Server, Database, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { useNavigate } from 'react-router-dom';
import heroImage from '@/assets/hero-mean-stack.jpg';

const Introduction = () => {
  const navigate = useNavigate();

  const startAssessment = () => {
    navigate('/psychological-fit');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Header */}
      <header className="border-b bg-card/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold">MEAN Stack Readiness</h1>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                20% Complete
              </Badge>
            </div>
          </div>
          <Progress value={20} className="h-1 mt-3" />
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="border-b bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <nav className="flex space-x-8 py-4">
            <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-primary bg-primary/10 rounded-md border border-primary/20">
              <Target className="w-4 h-4" />
              Introduction
            </button>
            <button 
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => navigate('/psychological-fit')}
            >
              <TrendingUp className="w-4 h-4" />
              Psychological Fit
            </button>
            <button 
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => navigate('/technical-aptitude')}
            >
              <Code className="w-4 h-4" />
              Technical Aptitude
            </button>
            <button 
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => navigate('/wiscar-analysis')}
            >
              <Database className="w-4 h-4" />
              WISCAR Analysis
            </button>
            <button 
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => navigate('/results')}
            >
              <Globe className="w-4 h-4" />
              Your Results
            </button>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="relative rounded-2xl overflow-hidden shadow-strong mb-12">
          <div className="absolute inset-0">
            <img 
              src={heroImage} 
              alt="MEAN Stack Assessment" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 hero-gradient"></div>
          </div>
          <div className="relative z-10 px-8 py-16 text-center text-white">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Discover Your MEAN Stack Career Potential
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
                Take our comprehensive assessment to evaluate your psychological fit,
                technical readiness, and career alignment for a future in MEAN Stack
                development and full-stack engineering.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <Clock className="w-5 h-5" />
                  <span className="text-sm font-medium">25-30 minutes</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <Target className="w-5 h-5" />
                  <span className="text-sm font-medium">Personalized Results</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <TrendingUp className="w-5 h-5" />
                  <span className="text-sm font-medium">Career Guidance</span>
                </div>
              </div>
              <Button variant="hero" size="lg" className="text-lg px-8 py-4" onClick={startAssessment}>
                Start Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>

        {/* What is MEAN Stack Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">What is the MEAN Stack?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The MEAN stack is a powerful full-stack JavaScript solution that comprises four key technologies working together to create modern web applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="card-gradient border-0 shadow-medium hover:shadow-strong transition-all hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Database className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle className="text-lg">MongoDB</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground mb-3">NoSQL database for flexible data storage</p>
                <Badge variant="secondary" className="text-xs">Database</Badge>
              </CardContent>
            </Card>

            <Card className="card-gradient border-0 shadow-medium hover:shadow-strong transition-all hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Server className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Express.js</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground mb-3">Backend web framework for Node.js</p>
                <Badge variant="outline" className="text-xs border-primary/20 text-primary">Backend</Badge>
              </CardContent>
            </Card>

            <Card className="card-gradient border-0 shadow-medium hover:shadow-strong transition-all hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-lg">Angular</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground mb-3">Frontend framework for dynamic web apps</p>
                <Badge variant="outline" className="text-xs border-accent/20 text-accent">Frontend</Badge>
              </CardContent>
            </Card>

            <Card className="card-gradient border-0 shadow-medium hover:shadow-strong transition-all hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Code className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle className="text-lg">Node.js</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground mb-3">Server-side JavaScript runtime environment</p>
                <Badge variant="secondary" className="text-xs">Runtime</Badge>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/10">
            <h3 className="text-2xl font-semibold mb-4 text-center">Common Career Roles</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="font-semibold text-lg mb-2">Full Stack Developer</h4>
                <p className="text-sm text-muted-foreground">End-to-end web application development</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-lg mb-2">Frontend Developer</h4>
                <p className="text-sm text-muted-foreground">UI building using Angular framework</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-lg mb-2">Backend Developer</h4>
                <p className="text-sm text-muted-foreground">Server logic with Node.js & Express</p>
              </div>
            </div>
          </div>
        </section>

        {/* Personality Traits Section */}
        <section className="mb-16">
          <Card className="border-0 shadow-medium bg-gradient-to-br from-card to-muted/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl md:text-3xl mb-4">
                <span className="gradient-text">Personality Traits That Succeed</span>
              </CardTitle>
              <p className="text-muted-foreground">Successful MEAN Stack developers typically exhibit these characteristics</p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Problem-Solver</h4>
                  <p className="text-sm text-muted-foreground">Enjoys debugging and finding creative solutions</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-secondary" />
                  </div>
                  <h4 className="font-semibold mb-2">Self-Learner</h4>
                  <p className="text-sm text-muted-foreground">Continuously adapts to new technologies</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Code className="w-8 h-8 text-accent" />
                  </div>
                  <h4 className="font-semibold mb-2">Logical Thinker</h4>
                  <p className="text-sm text-muted-foreground">Approaches problems systematically</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Full-Stack Mindset</h4>
                  <p className="text-sm text-muted-foreground">Enjoys working across frontend and backend</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Assessment Preview Section */}
        <section className="text-center">
          <Card className="border-0 shadow-strong bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 p-8">
            <CardContent className="space-y-6">
              <h2 className="text-3xl font-bold gradient-text">Ready to Discover Your Potential?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our comprehensive assessment evaluates your psychological fit, technical aptitude, and career readiness using the proven WISCAR framework.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full">
                  <Target className="w-4 h-4" />
                  Psychometric Analysis
                </span>
                <span className="flex items-center gap-2 bg-secondary/10 text-secondary px-3 py-1 rounded-full">
                  <Code className="w-4 h-4" />
                  Technical Assessment
                </span>
                <span className="flex items-center gap-2 bg-accent/10 text-accent px-3 py-1 rounded-full">
                  <TrendingUp className="w-4 h-4" />
                  Career Guidance
                </span>
              </div>
              <Button variant="hero" size="lg" className="text-lg px-12 py-4" onClick={startAssessment}>
                Begin Your Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default Introduction;