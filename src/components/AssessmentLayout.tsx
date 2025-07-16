import React from 'react';
import { Code, Target, TrendingUp, Database, Globe } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { useLocation, Link } from 'react-router-dom';

interface AssessmentLayoutProps {
  children: React.ReactNode;
  progress: number;
}

const AssessmentLayout: React.FC<AssessmentLayoutProps> = ({ children, progress }) => {
  const location = useLocation();

  const navigationItems = [
    {
      path: '/',
      label: 'Introduction',
      icon: Target,
      completed: progress > 0
    },
    {
      path: '/psychological-fit',
      label: 'Psychological Fit',
      icon: TrendingUp,
      completed: progress > 25
    },
    {
      path: '/technical-aptitude',
      label: 'Technical Aptitude',
      icon: Code,
      completed: progress > 50
    },
    {
      path: '/wiscar-analysis',
      label: 'WISCAR Analysis',
      icon: Database,
      completed: progress > 75
    },
    {
      path: '/results',
      label: 'Your Results',
      icon: Globe,
      completed: progress === 100
    }
  ];

  const isActive = (path: string) => location.pathname === path;

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
                {progress}% Complete
              </Badge>
            </div>
          </div>
          <Progress value={progress} className="h-1 mt-3" />
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="border-b bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <nav className="flex space-x-8 py-4 overflow-x-auto">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              const completed = item.completed;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md border transition-all whitespace-nowrap ${
                    active
                      ? 'text-primary bg-primary/10 border-primary/20'
                      : completed
                      ? 'text-secondary bg-secondary/10 border-secondary/20 hover:text-secondary'
                      : 'text-muted-foreground border-transparent hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                  {completed && !active && (
                    <div className="w-2 h-2 bg-secondary rounded-full ml-1" />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
};

export default AssessmentLayout;