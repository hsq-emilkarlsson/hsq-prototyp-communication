import { useState } from 'react';
import {
  AcademicCapIcon,
  StarIcon,
  TrophyIcon,
  FireIcon,
  BoltIcon,
  ChartBarIcon,
  PlayIcon,
  LockClosedIcon,
  CheckCircleIcon,
  ClockIcon,
  UserGroupIcon,
  GiftIcon,
  CreditCardIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';
import {
  TrophyIcon as TrophyIconSolid,
  FireIcon as FireIconSolid
} from '@heroicons/react/24/solid';

interface TrainingModule {
  id: string;
  title: string;
  category: 'automower' | 'chainsaw' | 'battery' | 'general' | 'advanced';
  difficulty: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  duration: number; // minutes
  credits: number;
  bonusCredits?: number;
  completed: boolean;
  locked: boolean;
  progress: number; // 0-100
  rating: number;
  participants: number;
  thumbnail: string;
  description: string;
  skills: string[];
  certificationType?: 'basic' | 'professional' | 'expert';
}

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconSolid: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  unlocked: boolean;
  credits: number;
  unlockedDate?: string;
}

interface UserStats {
  totalCredits: number;
  usedCredits: number;
  availableCredits: number;
  level: number;
  xp: number;
  nextLevelXp: number;
  streak: number;
  totalModulesCompleted: number;
  certificationsEarned: number;
  rank: number;
  totalUsers: number;
}

export function TrainingPage() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const userStats: UserStats = {
    totalCredits: 2450,
    usedCredits: 650,
    availableCredits: 1800,
    level: 7,
    xp: 3420,
    nextLevelXp: 4000,
    streak: 12,
    totalModulesCompleted: 28,
    certificationsEarned: 3,
    rank: 23,
    totalUsers: 1547
  };

  const trainingModules: TrainingModule[] = [
    {
      id: 'auto-basics',
      title: 'Automower Basics Course',
      category: 'automower',
      difficulty: 'beginner',
      duration: 45,
      credits: 150,
      bonusCredits: 50,
      completed: true,
      locked: false,
      progress: 100,
      rating: 4.8,
      participants: 847,
      thumbnail: '/api/placeholder/300/200',
      description: 'Learn the fundamentals of Automower technology and installation',
      skills: ['Installation', 'Basic troubleshooting', 'Customer service'],
      certificationType: 'basic'
    },
    {
      id: 'auto-advanced',
      title: 'Advanced Automower Service',
      category: 'automower',
      difficulty: 'advanced',
      duration: 120,
      credits: 300,
      bonusCredits: 100,
      completed: false,
      locked: false,
      progress: 35,
      rating: 4.9,
      participants: 423,
      thumbnail: '/api/placeholder/300/200',
      description: 'Deep dive into complex repairs and diagnostics',
      skills: ['Advanced diagnostics', 'Engine service', 'GPS calibration'],
      certificationType: 'professional'
    },
    {
      id: 'chainsaw-safety',
      title: 'Chainsaw Safety & Technology',
      category: 'chainsaw',
      difficulty: 'intermediate',
      duration: 90,
      credits: 200,
      completed: true,
      locked: false,
      progress: 100,
      rating: 4.7,
      participants: 692,
      thumbnail: '/api/placeholder/300/200',
      description: 'Safety protocols and technical knowledge for chainsaws',
      skills: ['Safety', 'Maintenance', 'Chain technology'],
      certificationType: 'basic'
    },
    {
      id: 'battery-expert',
      title: 'Battery Technology Expert',
      category: 'battery',
      difficulty: 'expert',
      duration: 180,
      credits: 500,
      bonusCredits: 200,
      completed: false,
      locked: true,
      progress: 0,
      rating: 4.9,
      participants: 156,
      thumbnail: '/api/placeholder/300/200',
      description: 'Become an expert on Husqvarna\'s latest battery technology',
      skills: ['Li-ion technology', 'BMS systems', 'Charging optimization'],
      certificationType: 'expert'
    },
    {
      id: 'customer-experience',
      title: 'Customer Experience & Sales',
      category: 'general',
      difficulty: 'intermediate',
      duration: 60,
      credits: 180,
      completed: false,
      locked: false,
      progress: 0,
      rating: 4.6,
      participants: 734,
      thumbnail: '/api/placeholder/300/200',
      description: 'Maximize customer satisfaction and sales',
      skills: ['Customer service', 'Sales techniques', 'Conflict resolution']
    }
  ];

  const achievements: Achievement[] = [
    {
      id: 'first-course',
      title: 'First Step',
      description: 'Complete your first course',
      icon: AcademicCapIcon,
      iconSolid: AcademicCapIcon,
      unlocked: true,
      credits: 50,
      unlockedDate: '2025-07-15'
    },
    {
      id: 'streak-master',
      title: 'Streak Master',
      description: 'Train for 10 days in a row',
      icon: FireIcon,
      iconSolid: FireIconSolid,
      unlocked: true,
      credits: 200,
      unlockedDate: '2025-08-10'
    },
    {
      id: 'expert-level',
      title: 'Expert Status',
      description: 'Reach level 10',
      icon: TrophyIcon,
      iconSolid: TrophyIconSolid,
      unlocked: false,
      credits: 500
    },
    {
      id: 'speed-learner',
      title: 'Speed Learner',
      description: 'Complete 5 courses in one week',
      icon: BoltIcon,
      iconSolid: BoltIcon,
      unlocked: false,
      credits: 300
    }
  ];

  const rewards = [
    {
      id: 'discount-10',
      title: '10% Tool Discount',
      description: 'Use on all repair tools',
      cost: 500,
      category: 'discount',
      icon: '🔧'
    },
    {
      id: 'training-voucher',
      title: 'Free Advanced Course',
      description: 'Choose a premium course for free',
      cost: 800,
      category: 'training',
      icon: '🎓'
    },
    {
      id: 'husqvarna-merch',
      title: 'Husqvarna Merchandise',
      description: 'Exclusive Husqvarna collection',
      cost: 300,
      category: 'merchandise',
      icon: '👕'
    },
    {
      id: 'vip-support',
      title: 'VIP Support (1 month)',
      description: 'Priority technical support',
      cost: 1200,
      category: 'support',
      icon: '⭐'
    },
    {
      id: 'conference-ticket',
      title: 'Husqvarna Conference',
      description: 'Ticket to annual conference',
      cost: 2000,
      category: 'event',
      icon: '🎫'
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-orange-100 text-orange-800';
      case 'expert': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'automower': return '🤖';
      case 'chainsaw': return '⚡';
      case 'battery': return '🔋';
      case 'general': return '📚';
      case 'advanced': return '🚀';
      default: return '📖';
    }
  };

  const filteredModules = selectedCategory === 'all' 
    ? trainingModules 
    : trainingModules.filter(module => module.category === selectedCategory);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header with User Stats */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Husqvarna Academy</h1>
            <p className="text-gray-600">Lär dig, tjäna credits och bli certifierad expert</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-[#273A60]">{userStats.availableCredits} credits</div>
            <div className="text-sm text-gray-500">Nivå {userStats.level} • Rank #{userStats.rank}</div>
          </div>
        </div>

        {/* User Progress Bar */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-[#273A60] to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                {userStats.level}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Emil Karlsson</h3>
                <p className="text-sm text-gray-600">Husqvarna Certified Professional</p>
              </div>
            </div>
            <div className="flex items-center space-x-6 text-center">
              <div>
                <div className="text-2xl font-bold text-[#273A60]">{userStats.streak}</div>
                <div className="text-xs text-gray-500">Dagars streak</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-600">{userStats.certificationsEarned}</div>
                <div className="text-xs text-gray-500">Certifieringar</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">{userStats.totalModulesCompleted}</div>
                <div className="text-xs text-gray-500">Kurser klara</div>
              </div>
            </div>
          </div>
          
          {/* XP Progress */}
          <div className="w-full">
            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <span>XP Progress</span>
              <span>{userStats.xp} / {userStats.nextLevelXp}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-[#273A60] to-blue-500 h-3 rounded-full transition-all duration-300"
                style={{ width: `${(userStats.xp / userStats.nextLevelXp) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
              activeTab === 'dashboard'
                ? 'border-[#273A60] text-[#273A60]'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <ChartBarIcon className="w-4 h-4 inline mr-2" />
            Dashboard
          </button>
          <button
            onClick={() => setActiveTab('courses')}
            className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
              activeTab === 'courses'
                ? 'border-[#273A60] text-[#273A60]'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <AcademicCapIcon className="w-4 h-4 inline mr-2" />
            Kurser
          </button>
          <button
            onClick={() => setActiveTab('achievements')}
            className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
              activeTab === 'achievements'
                ? 'border-[#273A60] text-[#273A60]'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <TrophyIcon className="w-4 h-4 inline mr-2" />
            Achievements
          </button>
          <button
            onClick={() => setActiveTab('rewards')}
            className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
              activeTab === 'rewards'
                ? 'border-[#273A60] text-[#273A60]'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <GiftIcon className="w-4 h-4 inline mr-2" />
            Rewards
          </button>
        </nav>
      </div>

      {/* Dashboard Tab */}
      {activeTab === 'dashboard' && (
        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-[#273A60] to-blue-600 text-white rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <RocketLaunchIcon className="w-8 h-8" />
                <span className="text-xs bg-white/20 px-2 py-1 rounded-full">Populär</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Fortsätt med Automower</h3>
              <p className="text-blue-100 text-sm mb-4">65% klar • 40 min kvar</p>
              <button className="bg-white text-[#273A60] px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                Fortsätt kurs
              </button>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <FireIconSolid className="w-8 h-8 text-orange-500" />
                <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full">Streak</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">12 dagars streak!</h3>
              <p className="text-gray-600 text-sm mb-4">Fortsätt träna för bonus credits</p>
              <button className="bg-orange-100 text-orange-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-200 transition-colors">
                Se streak bonus
              </button>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <TrophyIconSolid className="w-8 h-8 text-yellow-500" />
                <span className="text-xs bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full">Nytt</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Badge</h3>
              <p className="text-gray-600 text-sm mb-4">Bara 2 kurser kvar till expert</p>
              <button className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-yellow-200 transition-colors">
                Se requirements
              </button>
            </div>
          </div>

          {/* Learning Path */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Din Lärandeväg</h2>
            <div className="space-y-4">
              {trainingModules.slice(0, 3).map((module) => (
                <div key={module.id} className="flex items-center space-x-4 p-4 border border-gray-100 rounded-lg">
                  <div className="flex-shrink-0">
                    {module.completed ? (
                      <CheckCircleIcon className="w-8 h-8 text-green-500" />
                    ) : module.locked ? (
                      <LockClosedIcon className="w-8 h-8 text-gray-400" />
                    ) : (
                      <PlayIcon className="w-8 h-8 text-[#273A60]" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{module.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span className="flex items-center">
                        <ClockIcon className="w-4 h-4 mr-1" />
                        {module.duration} min
                      </span>
                      <span className="flex items-center">
                        <CreditCardIcon className="w-4 h-4 mr-1" />
                        {module.credits} credits
                      </span>
                      {module.bonusCredits && (
                        <span className="text-orange-600 font-medium">+{module.bonusCredits} bonus</span>
                      )}
                    </div>
                    {module.progress > 0 && !module.completed && (
                      <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-[#273A60] h-2 rounded-full"
                          style={{ width: `${module.progress}%` }}
                        ></div>
                      </div>
                    )}
                  </div>
                  <div className="text-right">
                    <span className={`text-xs px-2 py-1 rounded-full ${getDifficultyColor(module.difficulty)}`}>
                      {module.difficulty}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Courses Tab */}
      {activeTab === 'courses' && (
        <div className="space-y-6">
          {/* Category Filter */}
          <div className="flex space-x-4 overflow-x-auto pb-2">
            {[
              { id: 'all', label: 'All Courses', icon: '📚' },
              { id: 'automower', label: 'Automower', icon: '🤖' },
              { id: 'chainsaw', label: 'Chainsaw', icon: '⚡' },
              { id: 'battery', label: 'Battery', icon: '🔋' },
              { id: 'general', label: 'General', icon: '📖' },
              { id: 'advanced', label: 'Advanced', icon: '🚀' }
            ].map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-[#273A60] text-white'
                    : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
                }`}
              >
                <span>{category.icon}</span>
                <span className="text-sm font-medium">{category.label}</span>
              </button>
            ))}
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredModules.map((module) => (
              <div key={module.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                    <span className="text-4xl">{getCategoryIcon(module.category)}</span>
                  </div>
                  {module.locked && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <LockClosedIcon className="w-8 h-8 text-white" />
                    </div>
                  )}
                  {module.bonusCredits && (
                    <div className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      +{module.bonusCredits} bonus
                    </div>
                  )}
                </div>
                
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs px-2 py-1 rounded-full ${getDifficultyColor(module.difficulty)}`}>
                      {module.difficulty}
                    </span>
                    {module.completed && (
                      <CheckCircleIcon className="w-5 h-5 text-green-500" />
                    )}
                  </div>
                  
                  <h3 className="font-semibold text-gray-900 mb-2">{module.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{module.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                    <span className="flex items-center">
                      <ClockIcon className="w-4 h-4 mr-1" />
                      {module.duration} min
                    </span>
                    <span className="flex items-center">
                      <UserGroupIcon className="w-4 h-4 mr-1" />
                      {module.participants}
                    </span>
                    <span className="flex items-center">
                      <StarIcon className="w-4 h-4 mr-1 text-yellow-400" />
                      {module.rating}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-bold text-[#273A60]">{module.credits} credits</span>
                    {module.certificationType && (
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                        {module.certificationType} cert
                      </span>
                    )}
                  </div>
                  
                  {module.progress > 0 && !module.completed && (
                    <div className="mb-4">
                      <div className="flex justify-between text-xs text-gray-600 mb-1">
                        <span>Progress</span>
                        <span>{module.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-[#273A60] h-2 rounded-full"
                          style={{ width: `${module.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                  
                  <button 
                    className={`w-full py-2 rounded-lg text-sm font-medium transition-colors ${
                      module.locked 
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : module.completed
                          ? 'bg-green-100 text-green-700 hover:bg-green-200'
                          : 'bg-[#273A60] text-white hover:bg-blue-700'
                    }`}
                    disabled={module.locked}
                  >
                    {module.locked ? 'Låst' : module.completed ? 'Se certifikat' : module.progress > 0 ? 'Fortsätt' : 'Starta kurs'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Achievements Tab */}
      {activeTab === 'achievements' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement) => (
              <div key={achievement.id} className={`border rounded-lg p-6 ${
                achievement.unlocked 
                  ? 'border-yellow-200 bg-yellow-50' 
                  : 'border-gray-200 bg-white'
              }`}>
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-full ${
                    achievement.unlocked ? 'bg-yellow-100' : 'bg-gray-100'
                  }`}>
                    {achievement.unlocked ? (
                      <achievement.iconSolid className="w-8 h-8 text-yellow-600" />
                    ) : (
                      <achievement.icon className="w-8 h-8 text-gray-400" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-semibold ${
                      achievement.unlocked ? 'text-yellow-900' : 'text-gray-900'
                    }`}>
                      {achievement.title}
                    </h3>
                    <p className={`text-sm ${
                      achievement.unlocked ? 'text-yellow-700' : 'text-gray-600'
                    }`}>
                      {achievement.description}
                    </p>
                    {achievement.unlockedDate && (
                      <p className="text-xs text-yellow-600 mt-1">
                        Upplåst {achievement.unlockedDate}
                      </p>
                    )}
                  </div>
                  <div className="text-right">
                    <div className={`font-bold ${
                      achievement.unlocked ? 'text-yellow-600' : 'text-gray-400'
                    }`}>
                      {achievement.credits} credits
                    </div>
                    {achievement.unlocked && (
                      <span className="text-xs bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full">
                        Upplåst
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Rewards Tab */}
      {activeTab === 'rewards' && (
        <div className="space-y-6">
          {/* Credit Balance */}
          <div className="bg-gradient-to-r from-[#273A60] to-blue-600 text-white rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">{userStats.availableCredits} credits</h2>
                <p className="text-blue-100">Tillgängligt att spendera</p>
              </div>
              <div className="text-right">
                <p className="text-blue-100">Totalt tjänat</p>
                <p className="text-xl font-bold">{userStats.totalCredits}</p>
              </div>
            </div>
          </div>

          {/* Rewards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rewards.map((reward) => (
              <div key={reward.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">{reward.icon}</div>
                  <h3 className="font-semibold text-gray-900">{reward.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{reward.description}</p>
                </div>
                
                <div className="text-center mb-4">
                  <span className="text-2xl font-bold text-[#273A60]">{reward.cost}</span>
                  <span className="text-gray-500 ml-1">credits</span>
                </div>
                
                <button 
                  className={`w-full py-2 rounded-lg text-sm font-medium transition-colors ${
                    userStats.availableCredits >= reward.cost
                      ? 'bg-[#273A60] text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                  disabled={userStats.availableCredits < reward.cost}
                >
                  {userStats.availableCredits >= reward.cost ? 'Köp nu' : 'Inte tillräckligt credits'}
                </button>
              </div>
            ))}
          </div>

          {/* How to Earn More */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Så tjänar du fler credits</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 border border-gray-100 rounded-lg">
                <AcademicCapIcon className="w-8 h-8 text-[#273A60] mx-auto mb-2" />
                <h4 className="font-medium text-gray-900">Slutför kurser</h4>
                <p className="text-sm text-gray-600">150-500 credits per kurs</p>
              </div>
              <div className="text-center p-4 border border-gray-100 rounded-lg">
                <FireIconSolid className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                <h4 className="font-medium text-gray-900">Håll streak</h4>
                <p className="text-sm text-gray-600">50 credits per dag</p>
              </div>
              <div className="text-center p-4 border border-gray-100 rounded-lg">
                <TrophyIconSolid className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                <h4 className="font-medium text-gray-900">Lås upp achievements</h4>
                <p className="text-sm text-gray-600">50-500 credits</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
