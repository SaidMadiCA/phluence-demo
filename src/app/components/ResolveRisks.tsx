import svgPaths from "../../imports/svg-kj01rvydwu";

interface Risk {
  title: string;
  description: string;
  priority: 'Immediate';
  action: string;
}

const mockRisks: Risk[] = [
  {
    title: "PA criteria updated for Drug Y",
    description: "Regenerate PA packages and notify HCP",
    priority: "Immediate",
    action: "Resolve impact of 12 cases (4 cases at high denial risk)"
  },
  {
    title: "New PA form version published",
    description: "Pause submissions and switch to updated form",
    priority: "Immediate",
    action: "Resolve impact of 7 submissions that will be invalid"
  },
  {
    title: "Portal outage detected",
    description: "Route submissions via fax and activate voice follow-ups",
    priority: "Immediate",
    action: "Unblock all PA submissions"
  },
  {
    title: "Bridge eligibility rules updated",
    description: "Notify HRMs and adjust bridge duration limits",
    priority: "Immediate",
    action: "Resolve impact"
  },
];

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
              <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#005354] text-[12px]">
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

function RiskRow({ risk, onClick }: { risk: Risk; onClick?: () => void }) {
  return (
    <div className="relative shrink-0 w-full hover:bg-gray-50 transition-colors cursor-pointer" onClick={onClick}>
      <div className="absolute border-[#e9eaeb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[12px] items-start px-[16px] py-[16px] relative w-full">
        {/* Header */}
        <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
          <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative w-full">
              <div className="content-stretch flex h-[20px] items-center relative shrink-0">
                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#181d27] text-[13px] tracking-[-0.0762px]">
                  {risk.title}
                </p>
              </div>
              <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#717680] text-[11px] tracking-[0.0645px]">
                {risk.description}
              </p>
            </div>
          </div>
          <div className="bg-[#fef3f2] relative rounded-[9999px] shrink-0">
            <div className="absolute border-[#fecdca] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[9999.5px]" />
            <div className="bg-clip-padding border-[0.5px] border-[transparent] border-solid content-stretch flex items-center px-[8px] py-px relative">
              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#b42318] text-[11px] text-center text-nowrap">
                {risk.priority}
              </p>
            </div>
          </div>
        </div>

        {/* Action */}
        <ActionButton action={risk.action} />
      </div>
    </div>
  );
}

export function ResolveRisks() {
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
                    <p className="leading-[22px]">Resolve Risks from External Changes</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute border-0 border-[#e9eaeb] border-solid inset-0 pointer-events-none" />
          </div>

          {/* Risks */}
          {mockRisks.map((risk, index) => (
            <RiskRow key={index} risk={risk} onClick={() => console.log(`Clicked risk: ${risk.title}`)} />
          ))}
        </div>
      </div>
      <div className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}
