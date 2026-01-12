import { useState } from 'react';
import svgPaths from "../../imports/svg-kj01rvydwu";

interface CaseItem {
  name: string;
  description: string;
  organization: string;
  medication: string;
  status: string;
  priority: 'critical' | 'high' | 'low';
  action: string;
}

const mockCases: CaseItem[] = [
  {
    name: "Alex Johnson",
    description: "PA submission window will miss bridge coverage deadline",
    organization: "Midtown Rheumatology",
    medication: "Humira",
    status: "Bridge",
    priority: "critical",
    action: "Send PA completion reminder to HCP and notify patient"
  },
  {
    name: "Jordan Smith",
    description: "PA cannot be submitted until clinical criteria are satisfied",
    organization: "Northside Oncology",
    medication: "Humira",
    status: "PA Required",
    priority: "high",
    action: "Request missing clinical documentation from HCP"
  },
  {
    name: "River James",
    description: "Payer SLA exceeded for PA response",
    organization: "Northside Oncology",
    medication: "Humira",
    status: "PA Required",
    priority: "high",
    action: "Initiate payer follow-up via voice agent"
  },
  {
    name: "Kelly Clarkson",
    description: "PA approved but shipment not yet scheduled",
    organization: "Lakeside Gastroenterology",
    medication: "Humira",
    status: "PA Approved",
    priority: "low",
    action: "Initiate fulfillment and notify patient"
  },
];

function Badge({ priority }: { priority: 'critical' | 'high' | 'low' }) {
  const styles = {
    critical: {
      bg: 'bg-[#fef3f2]',
      border: 'border-[#fecdca]',
      text: 'text-[#b42318]',
      label: 'critical'
    },
    high: {
      bg: 'bg-[#fffaeb]',
      border: 'border-[#fedf89]',
      text: 'text-[#b54708]',
      label: 'high'
    },
    low: {
      bg: 'bg-[#ecfdf3]',
      border: 'border-[#abefc6]',
      text: 'text-[#067647]',
      label: 'low'
    }
  };

  const style = styles[priority];

  return (
    <div className={`${style.bg} relative rounded-[9999px] shrink-0`}>
      <div className={`absolute border-[${style.border}] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[9999.5px]`} />
      <div className="bg-clip-padding border-[0.5px] border-[transparent] border-solid content-stretch flex items-center px-[8px] py-px relative">
        <p className={`font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 ${style.text} text-[11px] text-center text-nowrap`}>
          {style.label}
        </p>
      </div>
    </div>
  );
}

function ActionButton({ action, onClick }: { action: string; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="bg-[#e5eeee] relative rounded-[8px] shrink-0 w-full hover:bg-[#d5e8e8] transition-colors"
    >
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
                {action}
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
  );
}

function CaseRow({ caseItem, onClick }: { caseItem: CaseItem; onClick?: () => void }) {
  return (
    <div className="relative shrink-0 w-full hover:bg-gray-50 transition-colors cursor-pointer">
      <div className="absolute border-[#e9eaeb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[12px] items-start pl-[20px] pr-[16px] py-[16px] relative w-full">
        {/* Header */}
        <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
          <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative w-full">
              <div className="content-stretch flex h-[20px] items-center relative shrink-0">
                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#181d27] text-[13px] text-nowrap tracking-[-0.0762px]">
                  {caseItem.name}
                </p>
              </div>
              <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#717680] text-[11px] tracking-[0.0645px]">
                {caseItem.description}
              </p>
            </div>
          </div>
          <Badge priority={caseItem.priority} />
        </div>

        {/* Meta info */}
        <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
          <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#717680] text-[12px] text-nowrap">
            {caseItem.organization}
          </p>
          <div className="flex h-[10.979px] items-center justify-center relative shrink-0 w-0">
            <div className="flex-none rotate-[90deg]">
              <div className="h-0 relative w-[10.979px]">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.9785 1">
                    <line stroke="var(--stroke-0, #D5D7DA)" x2="10.9785" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#717680] text-[12px] text-nowrap">
            {caseItem.medication}
          </p>
          <div className="flex h-[10.979px] items-center justify-center relative shrink-0 w-0">
            <div className="flex-none rotate-[90deg]">
              <div className="h-0 relative w-[10.979px]">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.9785 1">
                    <line stroke="var(--stroke-0, #D5D7DA)" x2="10.9785" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#717680] text-[12px] text-nowrap">
            {caseItem.status}
          </p>
        </div>

        {/* Action */}
        <ActionButton action={caseItem.action} onClick={(e) => {
          e?.stopPropagation();
          onClick?.();
        }} />
      </div>
    </div>
  );
}

export function NextMoveCard({ onActionClick }: { onActionClick?: () => void }) {
  const [showAll, setShowAll] = useState(false);
  const displayedCases = showAll ? mockCases : mockCases.slice(0, 4);

  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-[12px] pt-px px-px relative w-full">
          {/* Header */}
          <div className="relative shrink-0 w-full" style={{ backgroundImage: "linear-gradient(-27.3884deg, rgba(229, 238, 238, 0.6) 21.489%, rgba(229, 238, 238, 0.2) 44.215%, rgba(229, 238, 238, 0) 78.511%)" }}>
            <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-center p-[16px] relative w-full">
                <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
                  <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#181d27] text-[15px] text-nowrap">
                    <p className="leading-[22px]">Next Move by Case</p>
                  </div>
                </div>
                <button className="bg-white content-stretch flex gap-[8px] h-[28px] items-center pl-[12px] pr-[8px] py-[4px] relative rounded-[8px] shrink-0 hover:bg-gray-50 transition-colors">
                  <div className="absolute border border-[#e5eeee] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#005354] text-[12px] text-nowrap">
                    <p className="leading-[22px]">New Case</p>
                  </div>
                  <div className="relative shrink-0 size-[16px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <path d={svgPaths.pd4c4200} fill="var(--fill-0, #337576)" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
            <div className="absolute border-0 border-[#e9eaeb] border-solid inset-0 pointer-events-none" />
          </div>

          {/* Cases */}
          {displayedCases.map((caseItem, index) => (
            <CaseRow key={index} caseItem={caseItem} onClick={onActionClick} />
          ))}

          {/* Show all button */}
          <div className="content-stretch flex flex-col items-center justify-center px-0 py-[4px] relative shrink-0 w-full">
            <button
              onClick={() => setShowAll(!showAll)}
              className="content-stretch flex gap-[6px] h-[20px] items-center justify-center overflow-clip relative shrink-0 hover:opacity-70 transition-opacity"
            >
              <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#005354] text-[13px] text-nowrap">
                {showAll ? 'Show less' : 'Show all (12)'}
              </p>
            </button>
          </div>
        </div>
      </div>
      <div className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}