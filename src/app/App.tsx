import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';
import { NextMoveCard } from './components/NextMoveCard';
import { NextMoveByAccount } from './components/NextMoveByAccount';
import { ResolveSLACard } from './components/ResolveSLACard';
import { VisitRunbook } from './components/VisitRunbook';
import { ResolveOperationsIssues } from './components/ResolveOperationsIssues';
import { ResolveRisks } from './components/ResolveRisks';
import { CallCenter } from './components/call-center/CallCenter';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<'dashboard' | 'callcenter'>('dashboard');

  const handleRefresh = () => {
    console.log('Refreshing data...');
  };

  const handleNavigateToCallCenter = () => {
    setCurrentScreen('callcenter');
  };

  const handleNavigateBack = () => {
    setCurrentScreen('dashboard');
  };

  if (currentScreen === 'callcenter') {
    return <CallCenter onNavigateBack={handleNavigateBack} />;
  }

  return (
    <div className="bg-white flex h-screen w-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar activeNav={0} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Top Bar */}
        <TopBar onRefresh={handleRefresh} />

        {/* Dashboard Content */}
        <div className="flex-1 overflow-auto bg-[#fafafa]">
          <div className="h-full w-full">
            <div className="grid grid-cols-3 gap-[24px] p-[24px] auto-rows-min">
              {/* Left Column */}
              <div className="col-span-1 flex flex-col gap-[24px]">
                <NextMoveCard onActionClick={handleNavigateToCallCenter} />
                <NextMoveByAccount />
              </div>

              {/* Middle Column */}
              <div className="col-span-1 flex flex-col gap-[24px]">
                <ResolveSLACard />
                <ResolveOperationsIssues />
              </div>

              {/* Right Column */}
              <div className="col-span-1 flex flex-col gap-[24px]">
                <VisitRunbook />
                <ResolveRisks />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}