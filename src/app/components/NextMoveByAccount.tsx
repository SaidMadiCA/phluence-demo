import { useState } from 'react';
import svgPaths from "../../imports/svg-kj01rvydwu";

interface AccountItem {
  name: string;
  impact: string;
  priority: 'P1' | 'P2' | 'P3';
  isExpanded?: boolean;
  isBold?: boolean;
}

const mockAccounts: AccountItem[] = [
  { name: "Midtown Rheumatology", impact: "12 patients (4 cases at high denial risk)", priority: "P1", isBold: true },
  { name: "Northside Oncology", impact: "9 patients (2 cases at high denial risk)", priority: "P2" },
  { name: "Lakeside Gastroenterology", impact: "8 patients (1 cases at high denial risk)", priority: "P2" },
  { name: "Metro Cardiology", impact: "8 patients (5 cases at high denial risk)", priority: "P2" },
  { name: "Midtown Rheumatology", impact: "1 patient (1 cases at high denial risk)", priority: "P3", isBold: true },
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

function AccountRow({ account, onClick }: { account: AccountItem; onClick?: () => void }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pb-[12px] pt-[8px] px-0 relative shrink-0 w-full hover:bg-gray-50 transition-colors cursor-pointer">
      <div className="absolute border-[#e9eaeb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div
        onClick={() => {
          setIsExpanded(!isExpanded);
          onClick?.();
        }}
        className="content-stretch flex items-start relative shrink-0 w-full px-[16px]"
      >
        <div className="basis-0 content-stretch flex gap-[12px] grow items-start min-h-px min-w-px relative shrink-0">
          <div className="basis-0 content-stretch flex gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
            {/* Chevron */}
            <div className="content-stretch flex items-center px-0 py-[2px] relative shrink-0">
              <div className="flex items-center justify-center relative shrink-0 size-[16px]">
                <div className={`flex-none transition-transform ${isExpanded ? '' : 'rotate-[270deg]'}`}>
                  <div className="relative size-[16px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <path d="M4 6L8 10L12 6" stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
              <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                <div className={`flex flex-col ${account.isBold ? "font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold" : "font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium"} justify-center leading-[0] relative shrink-0 ${account.isBold ? 'text-[#414651]' : 'text-[#181d27]'} text-[13px] w-full`}>
                  <p className="leading-[20px]">{account.name}</p>
                </div>
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#717680] text-[12px] w-full">
                  {account.impact}
                </p>
              </div>
            </div>
          </div>
          <PriorityBadge priority={account.priority} />
        </div>
      </div>
    </div>
  );
}

export function NextMoveByAccount() {
  const [showAll, setShowAll] = useState(false);
  const displayedAccounts = showAll ? mockAccounts : mockAccounts.slice(0, 4);

  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[16px] items-center justify-center overflow-clip pb-[16px] pt-0 px-0 relative rounded-[inherit] w-full">
        {/* Header */}
        <div className="h-[62px] relative shrink-0 w-full" style={{ backgroundImage: "linear-gradient(-28.0511deg, rgba(253, 176, 34, 0.1) 21.489%, rgba(253, 176, 34, 0.05) 50%, rgba(10, 13, 18, 0) 78.511%)" }}>
          <div className="absolute border-0 border-[#e9eaeb] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between p-[16px] relative size-full">
              <div className="content-stretch flex flex-col items-center relative shrink-0">
                <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#181d27] text-[15px] text-nowrap">
                  <p className="leading-[22px]">Next Move by Account</p>
                </div>
              </div>
              <div className="overflow-clip relative rounded-[9999px] shrink-0 size-[32px]">
                <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <g>
                      <path d={svgPaths.p21042080} stroke="var(--stroke-0, #F79009)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d={svgPaths.p30b86b00} stroke="var(--stroke-0, #F79009)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Accounts */}
        <div className="relative shrink-0 w-full">
          <div className="content-stretch flex flex-col items-start px-[16px] py-0 relative w-full">
            {displayedAccounts.map((account, index) => (
              <AccountRow key={index} account={account} onClick={() => console.log(`Clicked account: ${account.name}`)} />
            ))}
            <div className="content-stretch flex flex-col items-start px-0 py-[4px] relative shrink-0 w-full">
              <button
                onClick={() => setShowAll(!showAll)}
                className="content-stretch flex gap-[6px] h-[20px] items-center justify-center overflow-clip relative shrink-0 w-full hover:opacity-70 transition-opacity"
              >
                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#005354] text-[13px] text-nowrap">
                  {showAll ? 'Show less' : 'Show all (15)'}
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}
