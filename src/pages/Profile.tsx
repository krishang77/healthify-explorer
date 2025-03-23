
import React, { useState } from 'react';
import { 
  BadgeCheck, 
  Calendar, 
  Camera, 
  Edit, 
  Gift, 
  Globe, 
  Lock, 
  LogOut, 
  Mail, 
  MapPin, 
  Phone, 
  Settings, 
  User 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import DashboardCard from '@/components/dashboard/DashboardCard';
import FadeIn from '@/components/animations/FadeIn';
import { ActionModal } from '@/components/ui/action-modal';
import ProfileEditForm from '@/components/profile/ProfileEditForm';
import PasswordChangeForm from '@/components/profile/PasswordChangeForm';
import { useToast } from '@/components/ui/use-toast';

const Profile = () => {
  const { toast } = useToast();
  const [editProfileOpen, setEditProfileOpen] = useState(false);
  const [changePasswordOpen, setChangePasswordOpen] = useState(false);

  const handleEditProfileSubmit = () => {
    toast({
      title: "Profile updated",
      description: "Your profile information has been updated successfully.",
    });
    setEditProfileOpen(false);
  };

  const handlePasswordChangeSubmit = () => {
    toast({
      title: "Password changed",
      description: "Your password has been changed successfully.",
    });
    setChangePasswordOpen(false);
  };

  const handleSignOut = () => {
    toast({
      title: "Signed out",
      description: "You have been signed out successfully.",
    });
    // In a real application, this would redirect to login or clear auth state
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <FadeIn direction="up" delay={100}>
          <h1 className="text-3xl font-bold tracking-tight">My Profile</h1>
          <p className="text-muted-foreground mt-1">
            Manage your account information and settings
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {/* Left Column */}
          <FadeIn delay={150} className="lg:col-span-1">
            <DashboardCard className="sticky top-24">
              <div className="flex flex-col items-center text-center">
                <div className="relative">
                  <div className="h-32 w-32 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="h-16 w-16 text-primary" />
                  </div>
                  <button 
                    className="absolute bottom-0 right-0 bg-primary text-primary-foreground p-2 rounded-full hover:bg-primary/80"
                    onClick={() => toast({
                      title: "Upload photo",
                      description: "Photo upload functionality would open here.",
                    })}
                  >
                    <Camera className="h-4 w-4" />
                  </button>
                </div>
                <h2 className="text-xl font-semibold mt-4">Alex Johnson</h2>
                <p className="text-muted-foreground">Fitness Enthusiast</p>
                <div className="flex items-center text-sm mt-2">
                  <BadgeCheck className="h-4 w-4 text-primary mr-1" />
                  <span>Verified Account</span>
                </div>
                
                <Separator className="my-6" />
                
                <div className="w-full space-y-2">
                  <Button 
                    variant="outline" 
                    className="justify-start w-full" 
                    onClick={() => setEditProfileOpen(true)}
                  >
                    <Edit className="mr-2 h-4 w-4" /> Edit Profile
                  </Button>
                  <Button 
                    variant="outline" 
                    className="justify-start w-full"
                    onClick={() => setChangePasswordOpen(true)}
                  >
                    <Settings className="mr-2 h-4 w-4" /> Settings
                  </Button>
                  <Button 
                    variant="outline" 
                    className="justify-start w-full text-destructive hover:text-destructive"
                    onClick={handleSignOut}
                  >
                    <LogOut className="mr-2 h-4 w-4" /> Sign Out
                  </Button>
                </div>
              </div>
            </DashboardCard>
          </FadeIn>
          
          {/* Right Column */}
          <FadeIn delay={200} className="lg:col-span-2">
            <DashboardCard title="Personal Information" className="mb-6">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Full Name</p>
                    <div className="flex items-center">
                      <User className="h-4 w-4 text-muted-foreground mr-2" />
                      <p>Alex Johnson</p>
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Email</p>
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 text-muted-foreground mr-2" />
                      <p>alex.j@example.com</p>
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 text-muted-foreground mr-2" />
                      <p>(555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Location</p>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 text-muted-foreground mr-2" />
                      <p>San Francisco, CA</p>
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Birthday</p>
                    <div className="flex items-center">
                      <Gift className="h-4 w-4 text-muted-foreground mr-2" />
                      <p>May 15, 1990</p>
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Member Since</p>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 text-muted-foreground mr-2" />
                      <p>January 10, 2022</p>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="font-medium mb-2">About Me</h3>
                  <p className="text-muted-foreground">
                    Fitness enthusiast and software developer. Love running and hiking on weekends.
                    Currently training for my first marathon and focusing on improving my overall health
                    and wellness through consistent exercise and balanced nutrition.
                  </p>
                </div>
              </div>
            </DashboardCard>
            
            <DashboardCard title="Account Information" className="mb-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">Password</h3>
                    <p className="text-sm text-muted-foreground">
                      Last updated 3 months ago
                    </p>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setChangePasswordOpen(true)}
                  >
                    <Lock className="mr-2 h-4 w-4" /> Change Password
                  </Button>
                </div>
                
                <Separator />
                
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">Language</h3>
                    <p className="text-sm text-muted-foreground">
                      English (US)
                    </p>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => toast({
                      title: "Language settings",
                      description: "Language settings would open here.",
                    })}
                  >
                    <Globe className="mr-2 h-4 w-4" /> Change
                  </Button>
                </div>
              </div>
            </DashboardCard>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <DashboardCard title="Health Data" className="mb-6">
                <div className="space-y-4 py-2">
                  <div className="flex justify-between items-center">
                    <span>Height</span>
                    <span className="font-medium">175 cm</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Weight</span>
                    <span className="font-medium">70.5 kg</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>BMI</span>
                    <span className="font-medium">23.0</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Blood Type</span>
                    <span className="font-medium">O+</span>
                  </div>
                </div>
              </DashboardCard>
              
              <DashboardCard title="Account Settings" className="mb-6">
                <div className="space-y-4 py-2">
                  <div className="flex justify-between items-center">
                    <span>Email Notifications</span>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => toast({
                        title: "Notification settings",
                        description: "Notification settings would open here.",
                      })}
                    >
                      Manage
                    </Button>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Connected Apps</span>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => toast({
                        title: "Connected apps",
                        description: "Connected apps settings would open here.",
                      })}
                    >
                      Manage
                    </Button>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Privacy Settings</span>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => toast({
                        title: "Privacy settings",
                        description: "Privacy settings would open here.",
                      })}
                    >
                      Manage
                    </Button>
                  </div>
                </div>
              </DashboardCard>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Edit Profile Modal */}
      <ActionModal
        title="Edit Profile"
        description="Update your profile information"
        isOpen={editProfileOpen}
        onOpenChange={setEditProfileOpen}
      >
        <ProfileEditForm onSubmit={handleEditProfileSubmit} onCancel={() => setEditProfileOpen(false)} />
      </ActionModal>

      {/* Change Password Modal */}
      <ActionModal
        title="Change Password"
        description="Update your account password"
        isOpen={changePasswordOpen}
        onOpenChange={setChangePasswordOpen}
      >
        <PasswordChangeForm onSubmit={handlePasswordChangeSubmit} onCancel={() => setChangePasswordOpen(false)} />
      </ActionModal>
    </div>
  );
};

export default Profile;
