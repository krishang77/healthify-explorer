
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Apple, Coffee, MoreHorizontal, Plus, Sun, Utensils } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import DashboardCard from '@/components/dashboard/DashboardCard';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import FadeIn from '@/components/animations/FadeIn';

// Sample data
const mealsToday = [
  {
    id: 1,
    type: 'Breakfast',
    time: '7:30 AM',
    items: ['Oatmeal with berries', 'Greek yogurt', 'Coffee'],
    calories: 420,
    macros: { protein: 25, carbs: 65, fat: 8 }
  },
  {
    id: 2,
    type: 'Lunch',
    time: '12:45 PM',
    items: ['Grilled chicken salad', 'Whole grain bread', 'Avocado'],
    calories: 580,
    macros: { protein: 42, carbs: 45, fat: 22 }
  },
  {
    id: 3,
    type: 'Snack',
    time: '3:30 PM',
    items: ['Protein shake', 'Banana', 'Almonds'],
    calories: 320,
    macros: { protein: 28, carbs: 30, fat: 10 }
  },
  {
    id: 4,
    type: 'Dinner',
    time: '7:15 PM',
    items: ['Salmon', 'Quinoa', 'Roasted vegetables'],
    calories: 650,
    macros: { protein: 48, carbs: 50, fat: 25 }
  }
];

const nutritionGoals = {
  calories: { current: 1970, target: 2200 },
  protein: { current: 143, target: 160 },
  carbs: { current: 190, target: 220 },
  fat: { current: 65, target: 70 }
};

const macroData = [
  { name: 'Protein', value: 143, color: '#4f46e5' },
  { name: 'Carbs', value: 190, color: '#10b981' },
  { name: 'Fat', value: 65, color: '#f59e0b' },
];

const Nutrition = () => {
  const [activeTab, setActiveTab] = useState('log');

  return (
    <div className="min-h-screen flex flex-col pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <FadeIn direction="up" delay={100}>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Nutrition Tracker</h1>
              <p className="text-muted-foreground mt-1">
                Monitor your diet and nutritional intake
              </p>
            </div>
            <Button className="mt-4 md:mt-0" size="sm">
              <Plus className="h-4 w-4 mr-2" /> Log Meal
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={150}>
          <Tabs defaultValue="log" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="log">Meal Log</TabsTrigger>
              <TabsTrigger value="macros">Macros</TabsTrigger>
              <TabsTrigger value="plans">Meal Plans</TabsTrigger>
            </TabsList>
            
            <TabsContent value="log" className="space-y-6">
              <FadeIn delay={200}>
                <DashboardCard title="Today's Summary" subtitle="July 24, 2023">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                        <Utensils className="h-6 w-6 text-primary" />
                      </div>
                      <span className="text-xl font-bold">{nutritionGoals.calories.current}</span>
                      <div className="flex items-center text-sm">
                        <span className="text-muted-foreground mr-1">of</span>
                        <span>{nutritionGoals.calories.target} cal</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-center text-center">
                      <div className="w-14 h-14 rounded-full bg-indigo-100 flex items-center justify-center mb-3">
                        <span className="font-bold text-indigo-600">P</span>
                      </div>
                      <span className="text-xl font-bold">{nutritionGoals.protein.current}g</span>
                      <div className="flex items-center text-sm">
                        <span className="text-muted-foreground mr-1">of</span>
                        <span>{nutritionGoals.protein.target}g protein</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-center text-center">
                      <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-3">
                        <span className="font-bold text-green-600">C</span>
                      </div>
                      <span className="text-xl font-bold">{nutritionGoals.carbs.current}g</span>
                      <div className="flex items-center text-sm">
                        <span className="text-muted-foreground mr-1">of</span>
                        <span>{nutritionGoals.carbs.target}g carbs</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-center text-center">
                      <div className="w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center mb-3">
                        <span className="font-bold text-yellow-600">F</span>
                      </div>
                      <span className="text-xl font-bold">{nutritionGoals.fat.current}g</span>
                      <div className="flex items-center text-sm">
                        <span className="text-muted-foreground mr-1">of</span>
                        <span>{nutritionGoals.fat.target}g fat</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full"
                        style={{ width: `${(nutritionGoals.calories.current / nutritionGoals.calories.target) * 100}%` }}
                      />
                    </div>
                    <div className="flex justify-between mt-2 text-sm">
                      <span className="text-muted-foreground">{Math.round((nutritionGoals.calories.current / nutritionGoals.calories.target) * 100)}% of daily goal</span>
                      <span>{nutritionGoals.calories.target - nutritionGoals.calories.current} cal remaining</span>
                    </div>
                  </div>
                </DashboardCard>
              </FadeIn>
              
              {mealsToday.map((meal, index) => (
                <FadeIn key={meal.id} delay={250 + (index * 50)} direction="up">
                  <DashboardCard className="hover:shadow-md transition-all">
                    <div className="flex flex-col">
                      <div className="flex items-center">
                        <div className="mr-4">
                          {meal.type === 'Breakfast' && (
                            <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
                              <Sun className="h-6 w-6 text-yellow-600" />
                            </div>
                          )}
                          {meal.type === 'Lunch' && (
                            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                              <Utensils className="h-6 w-6 text-green-600" />
                            </div>
                          )}
                          {meal.type === 'Snack' && (
                            <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                              <Apple className="h-6 w-6 text-orange-600" />
                            </div>
                          )}
                          {meal.type === 'Dinner' && (
                            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                              <Utensils className="h-6 w-6 text-blue-600" />
                            </div>
                          )}
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center">
                            <h3 className="text-xl font-semibold">{meal.type}</h3>
                            <span className="text-sm text-muted-foreground ml-3">{meal.time}</span>
                            <div className="ml-auto">
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="icon">
                                    <MoreHorizontal className="h-4 w-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem>Edit Meal</DropdownMenuItem>
                                  <DropdownMenuItem>View Details</DropdownMenuItem>
                                  <DropdownMenuItem>Delete</DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </div>
                          </div>
                          
                          <div className="mt-2">
                            <p className="text-sm">
                              {meal.items.join(', ')}
                            </p>
                          </div>
                          
                          <div className="mt-4 flex flex-wrap gap-4">
                            <div className="text-sm">
                              <span className="font-medium">{meal.calories}</span>
                              <span className="text-muted-foreground ml-1">calories</span>
                            </div>
                            <div className="text-sm">
                              <span className="font-medium">{meal.macros.protein}g</span>
                              <span className="text-muted-foreground ml-1">protein</span>
                            </div>
                            <div className="text-sm">
                              <span className="font-medium">{meal.macros.carbs}g</span>
                              <span className="text-muted-foreground ml-1">carbs</span>
                            </div>
                            <div className="text-sm">
                              <span className="font-medium">{meal.macros.fat}g</span>
                              <span className="text-muted-foreground ml-1">fat</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </DashboardCard>
                </FadeIn>
              ))}
              
              <FadeIn delay={500}>
                <div className="flex justify-center mt-6">
                  <Button variant="outline">
                    <Plus className="h-4 w-4 mr-2" /> Add Another Meal
                  </Button>
                </div>
              </FadeIn>
            </TabsContent>
            
            <TabsContent value="macros">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FadeIn delay={200}>
                  <DashboardCard title="Macronutrient Distribution" subtitle="Current day">
                    <div className="h-[300px] w-full flex flex-col items-center justify-center">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={macroData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={90}
                            paddingAngle={2}
                            dataKey="value"
                          >
                            {macroData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip
                            contentStyle={{ 
                              backgroundColor: 'hsl(var(--card))',
                              borderColor: 'hsl(var(--border))',
                              borderRadius: 'var(--radius)'
                            }}
                            formatter={(value: number) => [`${value}g`, 'Amount']}
                          />
                        </PieChart>
                      </ResponsiveContainer>
                      <div className="flex flex-wrap justify-center gap-6 mt-2">
                        {macroData.map((item, index) => (
                          <div key={index} className="flex items-center">
                            <div 
                              className="w-3 h-3 rounded-full mr-2" 
                              style={{ backgroundColor: item.color }}
                            />
                            <span className="text-sm">{item.name}: {item.value}g</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </DashboardCard>
                </FadeIn>
                
                <FadeIn delay={250}>
                  <DashboardCard title="Macros Breakdown">
                    <div className="space-y-6 py-4">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center">
                            <div className="w-3 h-3 rounded-full bg-indigo-600 mr-2" />
                            <span className="font-medium">Protein</span>
                          </div>
                          <span>{nutritionGoals.protein.current}g / {nutritionGoals.protein.target}g</span>
                        </div>
                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-indigo-600 rounded-full" 
                            style={{ width: `${(nutritionGoals.protein.current / nutritionGoals.protein.target) * 100}%` }}
                          />
                        </div>
                        <div className="mt-1 text-xs text-right">
                          {Math.round((nutritionGoals.protein.current / nutritionGoals.protein.target) * 100)}%
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center">
                            <div className="w-3 h-3 rounded-full bg-green-600 mr-2" />
                            <span className="font-medium">Carbs</span>
                          </div>
                          <span>{nutritionGoals.carbs.current}g / {nutritionGoals.carbs.target}g</span>
                        </div>
                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-green-600 rounded-full" 
                            style={{ width: `${(nutritionGoals.carbs.current / nutritionGoals.carbs.target) * 100}%` }}
                          />
                        </div>
                        <div className="mt-1 text-xs text-right">
                          {Math.round((nutritionGoals.carbs.current / nutritionGoals.carbs.target) * 100)}%
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center">
                            <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2" />
                            <span className="font-medium">Fat</span>
                          </div>
                          <span>{nutritionGoals.fat.current}g / {nutritionGoals.fat.target}g</span>
                        </div>
                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-yellow-500 rounded-full" 
                            style={{ width: `${(nutritionGoals.fat.current / nutritionGoals.fat.target) * 100}%` }}
                          />
                        </div>
                        <div className="mt-1 text-xs text-right">
                          {Math.round((nutritionGoals.fat.current / nutritionGoals.fat.target) * 100)}%
                        </div>
                      </div>
                      
                      <div className="pt-4 mt-4 border-t border-border">
                        <h4 className="font-medium mb-2">Macronutrient Ratio</h4>
                        <div className="flex h-4 rounded-full overflow-hidden">
                          <div 
                            className="bg-indigo-600" 
                            style={{ width: `${(nutritionGoals.protein.current / (nutritionGoals.protein.current + nutritionGoals.carbs.current + nutritionGoals.fat.current)) * 100}%` }}
                          />
                          <div 
                            className="bg-green-600" 
                            style={{ width: `${(nutritionGoals.carbs.current / (nutritionGoals.protein.current + nutritionGoals.carbs.current + nutritionGoals.fat.current)) * 100}%` }}
                          />
                          <div 
                            className="bg-yellow-500" 
                            style={{ width: `${(nutritionGoals.fat.current / (nutritionGoals.protein.current + nutritionGoals.carbs.current + nutritionGoals.fat.current)) * 100}%` }}
                          />
                        </div>
                        <div className="flex justify-between text-xs mt-2">
                          <span>{Math.round((nutritionGoals.protein.current / (nutritionGoals.protein.current + nutritionGoals.carbs.current + nutritionGoals.fat.current)) * 100)}% Protein</span>
                          <span>{Math.round((nutritionGoals.carbs.current / (nutritionGoals.protein.current + nutritionGoals.carbs.current + nutritionGoals.fat.current)) * 100)}% Carbs</span>
                          <span>{Math.round((nutritionGoals.fat.current / (nutritionGoals.protein.current + nutritionGoals.carbs.current + nutritionGoals.fat.current)) * 100)}% Fat</span>
                        </div>
                      </div>
                    </div>
                  </DashboardCard>
                </FadeIn>
                
                <FadeIn delay={300} className="md:col-span-2">
                  <DashboardCard title="Nutrition Insights">
                    <div className="space-y-4 py-2">
                      <div className="flex items-start p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                        <Coffee className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 mr-3" />
                        <div>
                          <h4 className="font-medium text-blue-900 dark:text-blue-300">Hydration Reminder</h4>
                          <p className="text-sm text-blue-800/70 dark:text-blue-400/70 mt-1">
                            You've logged 1.2L of water today. Aim for at least 2.5L daily for optimal performance and recovery.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start p-4 rounded-lg bg-green-50 dark:bg-green-900/20">
                        <Apple className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 mr-3" />
                        <div>
                          <h4 className="font-medium text-green-900 dark:text-green-300">Nutrient Balance</h4>
                          <p className="text-sm text-green-800/70 dark:text-green-400/70 mt-1">
                            Your vitamin and mineral intake looks balanced. Consider adding more fiber-rich foods to reach your daily goal.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start p-4 rounded-lg bg-yellow-50 dark:bg-yellow-900/20">
                        <Utensils className="h-5 w-5 text-yellow-600 dark:text-yellow-400 mt-0.5 mr-3" />
                        <div>
                          <h4 className="font-medium text-yellow-900 dark:text-yellow-300">Meal Timing</h4>
                          <p className="text-sm text-yellow-800/70 dark:text-yellow-400/70 mt-1">
                            Consider spacing your meals more evenly throughout the day for better energy levels and metabolism.
                          </p>
                        </div>
                      </div>
                    </div>
                  </DashboardCard>
                </FadeIn>
              </div>
            </TabsContent>
            
            <TabsContent value="plans">
              <FadeIn delay={200}>
                <DashboardCard title="Your Meal Plans">
                  <div className="space-y-6 py-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="glass-card p-5 rounded-xl hover:shadow-lg transition-all">
                        <h3 className="text-lg font-semibold mb-2">Balanced Plan</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          A well-balanced nutrition plan with optimal macronutrient distribution.
                        </p>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Calories:</span>
                            <span className="font-medium">2,200 kcal</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Protein:</span>
                            <span className="font-medium">160g (30%)</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Carbs:</span>
                            <span className="font-medium">220g (40%)</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Fat:</span>
                            <span className="font-medium">70g (30%)</span>
                          </div>
                        </div>
                        <Button variant="outline" className="w-full mt-6">View Plan</Button>
                      </div>
                      
                      <div className="glass-card p-5 rounded-xl hover:shadow-lg transition-all">
                        <div className="absolute top-4 right-4">
                          <div className="bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded-full">
                            Active
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">High Protein</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Higher protein intake for muscle building and recovery.
                        </p>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Calories:</span>
                            <span className="font-medium">2,400 kcal</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Protein:</span>
                            <span className="font-medium">200g (35%)</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Carbs:</span>
                            <span className="font-medium">240g (40%)</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Fat:</span>
                            <span className="font-medium">65g (25%)</span>
                          </div>
                        </div>
                        <Button className="w-full mt-6">View Plan</Button>
                      </div>
                      
                      <div className="glass-card p-5 rounded-xl hover:shadow-lg transition-all">
                        <h3 className="text-lg font-semibold mb-2">Low Carb</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Reduced carb intake for fat loss and metabolic health.
                        </p>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Calories:</span>
                            <span className="font-medium">1,900 kcal</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Protein:</span>
                            <span className="font-medium">170g (35%)</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Carbs:</span>
                            <span className="font-medium">95g (20%)</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Fat:</span>
                            <span className="font-medium">95g (45%)</span>
                          </div>
                        </div>
                        <Button variant="outline" className="w-full mt-6">View Plan</Button>
                      </div>
                    </div>
                    
                    <div className="flex justify-center mt-8">
                      <Button>
                        <Plus className="h-4 w-4 mr-2" /> Create New Meal Plan
                      </Button>
                    </div>
                  </div>
                </DashboardCard>
              </FadeIn>
              
              <FadeIn delay={300} className="mt-6">
                <DashboardCard title="Recommended Recipes" subtitle="Based on your nutrition goals">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
                    <div className="rounded-xl overflow-hidden hover:shadow-lg transition-all">
                      <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                        <Utensils className="h-12 w-12 text-white" />
                      </div>
                      <div className="p-4">
                        <h4 className="font-medium">Protein-Packed Oatmeal Bowl</h4>
                        <div className="flex space-x-4 mt-2 text-xs">
                          <span className="text-muted-foreground">380 cal</span>
                          <span className="text-muted-foreground">24g protein</span>
                        </div>
                        <Button variant="ghost" size="sm" className="mt-4 w-full">
                          View Recipe
                        </Button>
                      </div>
                    </div>
                    
                    <div className="rounded-xl overflow-hidden hover:shadow-lg transition-all">
                      <div className="h-48 bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
                        <Utensils className="h-12 w-12 text-white" />
                      </div>
                      <div className="p-4">
                        <h4 className="font-medium">Quinoa & Vegetable Bowl</h4>
                        <div className="flex space-x-4 mt-2 text-xs">
                          <span className="text-muted-foreground">420 cal</span>
                          <span className="text-muted-foreground">18g protein</span>
                        </div>
                        <Button variant="ghost" size="sm" className="mt-4 w-full">
                          View Recipe
                        </Button>
                      </div>
                    </div>
                    
                    <div className="rounded-xl overflow-hidden hover:shadow-lg transition-all">
                      <div className="h-48 bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
                        <Utensils className="h-12 w-12 text-white" />
                      </div>
                      <div className="p-4">
                        <h4 className="font-medium">Greek Yogurt Parfait</h4>
                        <div className="flex space-x-4 mt-2 text-xs">
                          <span className="text-muted-foreground">320 cal</span>
                          <span className="text-muted-foreground">22g protein</span>
                        </div>
                        <Button variant="ghost" size="sm" className="mt-4 w-full">
                          View Recipe
                        </Button>
                      </div>
                    </div>
                  </div>
                </DashboardCard>
              </FadeIn>
            </TabsContent>
          </Tabs>
        </FadeIn>
      </div>
    </div>
  );
};

export default Nutrition;
