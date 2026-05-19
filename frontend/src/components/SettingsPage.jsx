import React, { useState } from "react";
import { CheckCircle2, Settings2, Sliders, BellRing, Briefcase, RefreshCcw, Save } from "lucide-react";
import DashboardLayout from "./DashboardLayout";
import Card from "./ui/Card";
import Button from "./ui/Button";

const SettingsPage = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    reminderFrequency: "Weekly",
    preferredServiceProvider: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings({
      ...settings,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1200);
  };

  return (
    <DashboardLayout>
      <div className="page-wrapper max-w-2xl mx-auto">
        
        {/* Page Header */}
        <div className="page-header">
          <div>
            <h1 className="section-header flex items-center gap-3">
               <Settings2 className="w-8 h-8 text-indigo-400" /> System Settings
            </h1>
            <p className="section-subheader">Configure your personal preferences and notification rules</p>
          </div>
        </div>

        <Card variant="bordered" className="bg-[#0D1424]/80 p-8 relative overflow-hidden">
          
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-[60px] pointer-events-none" />

          <div className="flex items-center gap-3 border-b border-white/5 pb-5 mb-8 relative z-10">
            <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <Sliders className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-extrabold text-white">Application Preferences</h2>
          </div>

          <form onSubmit={handleSave} className="space-y-8 relative z-10">
            
            {/* Enable Notifications checkbox */}
            <div className="p-5 rounded-xl border border-white/5 bg-white/[0.02] flex items-start gap-4">
               <div className="mt-1">
                  <BellRing className="w-5 h-5 text-indigo-400" />
               </div>
               <div className="flex-grow">
                  <label className="flex items-start justify-between cursor-pointer group">
                     <div>
                        <span className="text-white font-bold block mb-1">Email Notifications</span>
                        <span className="text-slate-400 text-sm">Receive updates regarding oil status and rotations</span>
                     </div>
                     <div className="relative inline-flex items-center cursor-pointer">
                        <input
                           type="checkbox"
                           name="notifications"
                           checked={settings.notifications}
                           onChange={handleChange}
                           className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-[#0D121F] peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-indigo-500/50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all border border-white/10 peer-checked:bg-indigo-500"></div>
                     </div>
                  </label>
               </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               {/* Reminder Frequency */}
               <div className="space-y-2">
                 <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Reminder Frequency</label>
                 <div className="relative group">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-500 pointer-events-none">
                       <RefreshCcw className="w-4 h-4" />
                    </span>
                    <select
                      name="reminderFrequency"
                      value={settings.reminderFrequency}
                      onChange={handleChange}
                      className="input-field pl-10 appearance-none bg-no-repeat bg-[position:right_10px_center]"
                      style={{ backgroundImage: `url('data:image/svg+xml;utf8,<svg fill="%2364748b" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>')` }}
                    >
                      <option value="Daily">Daily Sync</option>
                      <option value="Weekly">Weekly Summary</option>
                      <option value="Monthly">Monthly Digest</option>
                    </select>
                 </div>
               </div>

               {/* Preferred Service Provider */}
               <div className="space-y-2">
                 <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Preferred Provider</label>
                 <div className="relative group">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-500 group-focus-within:text-indigo-400 transition-colors">
                       <Briefcase className="w-4 h-4" />
                    </span>
                    <input
                      type="text"
                      name="preferredServiceProvider"
                      value={settings.preferredServiceProvider}
                      onChange={handleChange}
                      className="input-field pl-10"
                      placeholder="Toyota Certified Service"
                    />
                 </div>
               </div>
            </div>

            {success && (
              <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold justify-center bg-emerald-500/10 border border-emerald-500/20 py-3 rounded-xl animate-scale-in">
                <CheckCircle2 className="w-5 h-5" /> Settings updated successfully!
              </div>
            )}

            {/* Save button */}
            <div className="pt-4 border-t border-white/5">
               <Button type="submit" variant="primary" className="w-full" size="lg" isLoading={loading} icon={Save}>
                 Save Preferences
               </Button>
            </div>
          </form>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default SettingsPage;
