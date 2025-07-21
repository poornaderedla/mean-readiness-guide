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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">MEAN Stack Readiness</h1>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Badge variant="outline" className="text-sm">
                {progress}% Complete
              </Badge>
            </div>
          </div>
          <Progress value={progress} className="h-2 mt-3" />
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="border-b bg-white/80 backdrop-blur-sm">
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
                  className={`flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md border min-w-fit transition-all whitespace-nowrap ${
                    active
                      ? 'bg-blue-100 text-blue-700 border-2 border-blue-300'
                      : completed
                      ? 'bg-green-100 text-green-700'
                      : 'bg-gray-100 text-gray-500'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                  {completed && !active && (
                    <div className="w-2 h-2 bg-green-500 rounded-full ml-1" />
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