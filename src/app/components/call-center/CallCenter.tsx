import React from 'react';
import { Sidebar } from '../Sidebar';
import { ConversationsList } from './ConversationsList';
import { CallInterface } from './CallInterface';
import { CaseDetails } from './CaseDetails';

interface CallCenterProps {
  onNavigateBack?: () => void;
}

export function CallCenter({ onNavigateBack }: CallCenterProps) {
  return (
    <div className="bg-white flex h-screen w-screen overflow-hidden">
      {/* Sidebar and Conversations List */}
      <div className="content-stretch flex items-start relative shrink-0 h-full">
        <Sidebar activeNav={3} onNavigateBack={onNavigateBack} />
        <ConversationsList />
      </div>

      {/* Call Interface - grows to fill available space */}
      <div className="flex-1 h-full overflow-hidden">
        <CallInterface />
      </div>

      {/* Case Details - fixed width */}
      <div className="w-[417px] h-full overflow-hidden shrink-0">
        <CaseDetails />
      </div>
    </div>
  );
}