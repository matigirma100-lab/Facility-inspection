import MetricCard from "@/components/dashboard/MetricCard";
import UpcomingScroller from "@/components/dashboard/UpcomingScroller";
import RecentTimeline from "@/components/dashboard/RecentTimeline";
import IssuesList from "@/components/dashboard/IssuesList";
import ChartsGroup from "@/components/dashboard/ChartsGroup";

export default function DashboardPage() {
  return (
    <div className="space-y-8 pb-10">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="text-3xl font-light mb-1">Dashboard</h1>
          <p className="text-foreground/60">Overview of facility health and recent inspections.</p>
        </div>
        <div className="text-sm font-medium px-4 py-2 bg-indigo-500/10 text-indigo-500 rounded-lg">
          Oct 24, 2026
        </div>
      </div>
      
      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <MetricCard 
          title="Upcoming Inspections" 
          value={12} 
          colorClass="bg-indigo-500" 
          delay={100} 
        />
        <MetricCard 
          title="Open Issues" 
          value={28} 
          trend={-5}
          colorClass="bg-orange-500" 
          delay={200}
        />
        <MetricCard 
          title="Overdue Items" 
          value={4} 
          trend={10}
          colorClass="bg-red-500"
          delay={300} 
        />
        <MetricCard 
          title="Avg Completion" 
          value={92} 
          suffix="%"
          trend={2}
          colorClass="bg-success-500" 
          delay={400}
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column (Wider) */}
        <div className="lg:col-span-2 space-y-6 flex flex-col">
          
          <div className="glass rounded-xl p-6 relative overflow-hidden flex-1 border-indigo-500/10">
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
             <div className="h-full flex flex-col justify-between relative z-10 w-full">
               <UpcomingScroller />
             </div>
          </div>
          
          <div className="h-[350px]">
            <ChartsGroup />
          </div>

        </div>

        {/* Right Column (Sidebar-ish) */}
        <div className="flex flex-col gap-6">
          <div className="h-[380px]">
             <IssuesList />
          </div>
          
          <div className="h-[380px]">
             <RecentTimeline />
          </div>
        </div>

      </div>
    </div>
  );
}
