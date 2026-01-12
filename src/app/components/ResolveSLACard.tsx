import { useState } from 'react';
import svgPaths from "../../imports/svg-kj01rvydwu";

interface SLABreach {
  account: string;
  countdown: string;
  priority: 'P1' | 'P2' | 'P3';
  caseId?: string;
  owner?: string;
  programType?: string;
  careModel?: string;
  action?: string;
  isExpanded?: boolean;
  countdownColor: 'critical' | 'warning' | 'normal';
}

const mockBreaches: SLABreach[] = [
  {
    account: "Midtown Rheumatology",
    countdown: "-4h",
    priority: "P1",
    countdownColor: "critical",
    caseId: "PT4521",
    owner: "HCP Office staff",
    programType: "PAP",
    careModel: "High",
    action: "Follow up on PA appeal status",
    isExpanded: false
  },
  {
    account: "Northside Oncology",
    countdown: "8h",
    priority: "P2",
    countdownColor: "warning",
    isExpanded: false
  },
  {
    account: "Lakeside Gastroenterology",
    countdown: "42h",
    priority: "P3",
    countdownColor: "normal",
    isExpanded: false
  },
  {
    account: "Lakeside Gastroenterology",
    countdown: "42h",
    priority: "P3",
    countdownColor: "normal",
    isExpanded: false
  },
];

function PriorityBadge({ priority }: { priority: 'P1' | 'P2' | 'P3' }) {
  const styles = {
    P1: { bg: 'bg-[#fef3f2]', border: 'border-[#fecdca]', text: 'text-[#b42318]' },
    P2: { bg: 'bg-[#fef6ee]', border: 'border-[#f9dbaf]', text: 'text-[#b93815]' },
    P3: { bg: 'bg-[#eff8ff]', border: 'border-[#b2ddff]', text: 'text-[#175cd3]' }
  };

  const style = styles[priority];

  return (
    <div className={`${style.bg} content-stretch flex items-center px-[8px] py-px relative rounded-[9999px] shrink-0`}>
      <div className={`absolute ${style.border} border-[0.5px] border-solid inset-[-0.5px] pointer-events-none rounded-[9999.5px]`} />
      <p className={`font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 ${style.text} text-[11px] text-center text-nowrap`}>
        {priority}
      </p>
    </div>
  );
}

function BreachRow({ breach, onClick }: { breach: SLABreach; onClick?: () => void }) {
  const [isExpanded, setIsExpanded] = useState(breach.isExpanded || false);

  const countdownColors = {
    critical: 'text-[#d92d20]',
    warning: 'text-[#dc6803]',
    normal: 'text-[#2970ff]'
  };

  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start px-0 py-[12px] relative shrink-0 w-full hover:bg-gray-50 transition-colors">
      <div className="absolute border-[#e9eaeb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      
      {/* Main row */}
      <div
        onClick={() => {
          setIsExpanded(!isExpanded);
          onClick?.();
        }}
        className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full cursor-pointer"
      >
        <div className="flex items-center justify-center relative shrink-0 size-[12px]">
          <div className={`flex-none transition-transform ${isExpanded ? 'rotate-[180deg]' : 'rotate-[270deg]'}`}>
            <div className="relative size-[12px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                <path d="M9 7.5L6 4.5L3 7.5" stroke="var(--stroke-0, #181D27)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              </svg>
            </div>
          </div>
        </div>
        <p className="basis-0 font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#181d27] text-[13px]">
          {breach.account}
        </p>
        <div className="content-stretch flex items-center justify-center relative shrink-0 w-[90px]">
          <div className={`flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 ${countdownColors[breach.countdownColor]} text-[12px] text-nowrap text-right`}>
            <p className="leading-[18px]">{breach.countdown}</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[48px]">
          <PriorityBadge priority={breach.priority} />
        </div>
      </div>

      {/* Expanded details */}
      {isExpanded && breach.caseId && (
        <div className="relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[12px] items-start pl-[24px] pr-0 py-0 relative w-full">
            {/* Case details */}
            <div className="content-stretch flex gap-[12px] h-[40px] items-start relative shrink-0 w-full">
              <div className="basis-0 content-stretch flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal gap-[4px] grow items-start min-h-px min-w-px relative shrink-0 text-[12px]">
                <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#717680] w-[110px]">
                  <p className="leading-[18px]">Case ID</p>
                </div>
                <p className="leading-[18px] min-w-full relative shrink-0 text-[#181d27] w-[min-content]">{breach.caseId}</p>
              </div>
              <div className="basis-0 content-stretch flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal gap-[4px] grow items-start min-h-px min-w-px relative shrink-0 text-[12px]">
                <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#717680] w-[110px]">
                  <p className="leading-[18px]">Owner</p>
                </div>
                <p className="leading-[18px] min-w-full relative shrink-0 text-[#181d27] w-[min-content]">{breach.owner}</p>
              </div>
            </div>

            <div className="content-stretch flex gap-[12px] h-[40px] items-start relative shrink-0 w-full">
              <div className="basis-0 content-stretch flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal gap-[4px] grow items-start min-h-px min-w-px relative shrink-0 text-[12px]">
                <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#717680] w-[110px]">
                  <p className="leading-[18px]">Program Type</p>
                </div>
                <p className="leading-[18px] min-w-full relative shrink-0 text-[#181d27] w-[min-content]">{breach.programType}</p>
              </div>
              <div className="basis-0 content-stretch flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal gap-[4px] grow items-start min-h-px min-w-px relative shrink-0 text-[12px]">
                <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#717680] w-[110px]">
                  <p className="leading-[18px]">Care Model</p>
                </div>
                <p className="leading-[18px] min-w-full relative shrink-0 text-[#181d27] w-[min-content]">{breach.careModel}</p>
              </div>
            </div>

            {/* Action button */}
            <button className="bg-[#e5eeee] relative rounded-[8px] shrink-0 w-full hover:bg-[#d5e8e8] transition-colors">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center px-[8px] py-[6px] relative w-full">
                  <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
                    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
                      <div className="relative shrink-0 size-[12px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                          <g>
                            <path d={svgPaths.p4ed4400} fill="var(--fill-0, #337576)" />
                            <path d={svgPaths.p249f9d80} fill="var(--fill-0, #337576)" />
                          </g>
                        </svg>
                      </div>
                      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#005354] text-[12px] text-nowrap">
                        {breach.action}
                      </p>
                    </div>
                    <div className="relative shrink-0 size-[12px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                        <path d={svgPaths.p20d73500} fill="var(--fill-0, #337576)" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export function ResolveSLACard() {
  const [showAll, setShowAll] = useState(false);
  const displayedBreaches = showAll ? mockBreaches : mockBreaches.slice(0, 3);

  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-[12px] pt-0 px-0 relative w-full">
          {/* Header */}
          <div className="h-[62px] relative shrink-0 w-full" style={{ backgroundImage: "linear-gradient(-28.0511deg, rgba(240, 68, 56, 0.1) 21.489%, rgba(240, 68, 56, 0.05) 50%, rgba(10, 13, 18, 0) 78.511%)" }}>
            <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-center justify-between p-[16px] relative size-full">
                <div className="content-stretch flex flex-col items-start relative shrink-0">
                  <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#181d27] text-[15px] text-nowrap">
                    <p className="leading-[22px]">Resolve SLA Breaches</p>
                  </div>
                </div>
                <div className="overflow-clip relative rounded-[9999px] shrink-0 size-[48px]">
                  <div className="absolute left-[12px] size-[24px] top-[12px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <path d={svgPaths.p968f180} stroke="var(--stroke-0, #D92D20)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute border-0 border-[#e9eaeb] border-solid inset-0 pointer-events-none" />
          </div>

          {/* Table Header */}
          <div className="content-stretch flex gap-[16px] h-[20px] items-start relative shrink-0 w-full px-[16px] py-[12px]">
            <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#717680] text-[11px]">
              Account
            </p>
            <div className="content-stretch flex items-center justify-center relative shrink-0">
              <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#717680] text-[11px] text-center w-[90px]">
                SLA Countdown
              </p>
            </div>
            <div className="content-stretch flex items-center justify-center relative shrink-0 w-[48px]">
              <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#717680] text-[11px] text-nowrap">
                Priority
              </p>
            </div>
            <div className="content-stretch flex items-center justify-center relative shrink-0 w-[16px]">
              <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16px] opacity-0 relative shrink-0 text-[#717680] text-[11px] text-nowrap">
                ar
              </p>
            </div>
          </div>

          {/* Breaches */}
          <div className="relative shrink-0 w-full px-[16px]">
            {displayedBreaches.map((breach, index) => (
              <BreachRow key={index} breach={breach} onClick={() => console.log(`Clicked breach: ${breach.account}`)} />
            ))}
          </div>

          {/* Show all button */}
          <div className="content-stretch flex flex-col items-center justify-center px-0 py-[4px] relative shrink-0 w-full">
            <button
              onClick={() => setShowAll(!showAll)}
              className="content-stretch flex gap-[6px] h-[20px] items-center justify-center overflow-clip relative shrink-0 hover:opacity-70 transition-opacity"
            >
              <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#005354] text-[13px] text-nowrap">
                {showAll ? 'Show less' : 'Show all (7)'}
              </p>
            </button>
          </div>
        </div>
      </div>
      <div className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}
