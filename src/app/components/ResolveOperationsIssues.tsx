import { useState } from 'react';
import svgPaths from "../../imports/svg-kj01rvydwu";

interface Issue {
  title: string;
  count: string;
  priority: 'High' | 'Medium' | 'Immediate';
  isExpanded?: boolean;
}

const mockIssues: Issue[] = [
  { title: "PA cycle time trending high", count: "14 cases", priority: "High", isExpanded: false },
  { title: "Multiple bridge expirations approaching", count: "8 cases", priority: "High", isExpanded: false },
  { title: "Submission failures detected", count: "16 cases", priority: "High", isExpanded: false },
  { title: "Copay card generation delayed", count: "4 cases", priority: "Medium", isExpanded: false },
  { title: "BI completion lagging", count: "22 cases", priority: "Medium", isExpanded: false },
];

function PriorityBadge({ priority }: { priority: 'High' | 'Medium' | 'Immediate' }) {
  const styles = {
    High: { bg: 'bg-[#fef3f2]', border: 'border-[#fecdca]', text: 'text-[#b42318]' },
    Medium: { bg: 'bg-[#fffaeb]', border: 'border-[#fedf89]', text: 'text-[#b54708]' },
    Immediate: { bg: 'bg-[#fef3f2]', border: 'border-[#fecdca]', text: 'text-[#b42318]' }
  };

  const style = styles[priority];

  return (
    <div className={`${style.bg} relative rounded-[9999px] shrink-0`}>
      <div className={`absolute ${style.border} border-[0.5px] border-solid inset-0 pointer-events-none rounded-[9999.5px]`} />
      <div className="bg-clip-padding border-[0.5px] border-[transparent] border-solid content-stretch flex items-center px-[8px] py-px relative">
        <p className={`font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 ${style.text} text-[11px] text-center text-nowrap`}>
          {priority}
        </p>
      </div>
    </div>
  );
}

function IssueRow({ issue, onClick }: { issue: Issue; onClick?: () => void }) {
  const [isExpanded, setIsExpanded] = useState(issue.isExpanded || false);

  return (
    <div
      onClick={() => {
        setIsExpanded(!isExpanded);
        onClick?.();
      }}
      className="content-stretch flex gap-[12px] items-center justify-between relative shrink-0 w-full px-[16px] py-[12px] hover:bg-gray-50 transition-colors cursor-pointer border-b border-[#e9eaeb]"
    >
      <div className="flex items-center justify-center relative shrink-0 size-[12px]">
        <div className={`flex-none transition-transform ${isExpanded ? 'rotate-[180deg]' : 'rotate-[270deg]'}`}>
          <div className="relative size-[12px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
              <path d="M3 4.5L6 7.5L9 4.5" stroke="var(--stroke-0, #181D27)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] text-[#181d27] text-[13px]">
          {issue.title}
        </p>
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[18px] text-[#717680] text-[11px] mt-[2px]">
          {issue.count}
        </p>
      </div>
      <PriorityBadge priority={issue.priority} />
    </div>
  );
}

export function ResolveOperationsIssues() {
  const [showAll, setShowAll] = useState(false);
  const displayedIssues = showAll ? mockIssues : mockIssues.slice(0, 3);

  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-[12px] pt-0 px-0 relative w-full">
          {/* Header */}
          <div className="relative shrink-0 w-full" style={{ backgroundImage: "linear-gradient(-27.3884deg, rgba(229, 238, 238, 0.6) 21.489%, rgba(229, 238, 238, 0.2) 44.215%, rgba(229, 238, 238, 0) 78.511%)" }}>
            <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-center p-[16px] relative w-full">
                <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
                  <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#181d27] text-[15px] text-nowrap">
                    <p className="leading-[22px]">Resolve Operations Issues</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute border-0 border-[#e9eaeb] border-solid inset-0 pointer-events-none" />
          </div>

          {/* Issues */}
          <div className="w-full">
            {displayedIssues.map((issue, index) => (
              <IssueRow key={index} issue={issue} onClick={() => console.log(`Clicked issue: ${issue.title}`)} />
            ))}
          </div>

          {/* Show all button */}
          <div className="content-stretch flex flex-col items-center justify-center px-0 py-[8px] relative shrink-0 w-full">
            <button
              onClick={() => setShowAll(!showAll)}
              className="content-stretch flex gap-[6px] h-[20px] items-center justify-center overflow-clip relative shrink-0 hover:opacity-70 transition-opacity"
            >
              <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#005354] text-[13px] text-nowrap">
                {showAll ? 'Show less' : 'Show all (8)'}
              </p>
            </button>
          </div>
        </div>
      </div>
      <div className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}
