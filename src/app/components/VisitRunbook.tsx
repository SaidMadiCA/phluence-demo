import svgPaths from "../../imports/svg-kj01rvydwu";

interface Visit {
  doctor: string;
  specialty: string;
  time: string;
  action: string;
  cases?: string;
}

const mockVisits: Visit[] = [
  {
    doctor: "Dr. Sarah Chen - Midtown Rheumatology",
    specialty: "",
    time: "9:00 AM",
    action: "Review HCP invoices",
    cases: ""
  },
  {
    doctor: "Dr. John Smith - Downtown Cardiology",
    specialty: "",
    time: "10:30 AM",
    action: "Complete follow up actions",
    cases: ""
  },
  {
    doctor: "Dr. Emily Tran - Uptown Endocrinology",
    specialty: "",
    time: "1:00 PM",
    action: "Complete status of case recommendations",
    cases: ""
  },
];

const mockScheduled = [
  { time: "2:30 PM", name: "Dr. Jennifer Park - Lakeside Gastro", cases: "2 cases referenced" },
  { time: "4:00 PM", name: "Dr. Robert Kim - Metro Cardiology", cases: "1 case referenced" },
];

export function VisitRunbook() {
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
                    <p className="leading-[22px]">Visit Runbook</p>
                  </div>
                  <div className="flex items-center gap-[8px] mt-1">
                    <div className="relative shrink-0 size-[14px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                        <path d={svgPaths.p276b9900} stroke="var(--stroke-0, #717680)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                      </svg>
                    </div>
                    <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[18px] text-[#717680] text-[11px]">
                      10 Jan 2026
                    </p>
                  </div>
                </div>
                <button className="bg-white content-stretch flex gap-[8px] h-[28px] items-center pl-[12px] pr-[8px] py-[4px] relative rounded-[8px] shrink-0 hover:bg-gray-50 transition-colors">
                  <div className="absolute border border-[#e5eeee] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#005354] text-[12px] text-nowrap">
                    <p className="leading-[22px]">New Visit</p>
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

          {/* Visits */}
          <div className="w-full px-[16px] py-[12px] space-y-[16px]">
            {mockVisits.map((visit, index) => (
              <div key={index} className="flex items-start gap-[12px] hover:bg-gray-50 p-[8px] rounded-[8px] transition-colors cursor-pointer">
                <div className="flex items-center justify-center shrink-0 size-[24px] rounded-full bg-[#0d9488] text-white">
                  <div className="relative shrink-0 size-[12px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                      <circle cx="6" cy="6" r="5" fill="currentColor" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] text-[#181d27] text-[13px]">
                    {visit.doctor}
                  </p>
                  <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[18px] text-[#717680] text-[11px] mt-[4px]">
                    {visit.time}
                  </p>
                  <button className="bg-[#e5eeee] mt-[8px] relative rounded-[6px] shrink-0 hover:bg-[#d5e8e8] transition-colors">
                    <div className="flex items-center px-[8px] py-[4px]">
                      <div className="flex gap-[6px] items-center">
                        <div className="relative shrink-0 size-[12px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                            <g>
                              <path d={svgPaths.p4ed4400} fill="var(--fill-0, #337576)" />
                              <path d={svgPaths.p249f9d80} fill="var(--fill-0, #337576)" />
                            </g>
                          </svg>
                        </div>
                        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16px] text-[#005354] text-[12px]">
                          {visit.action}
                        </p>
                        <div className="relative shrink-0 size-[12px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                            <path d={svgPaths.p20d73500} fill="var(--fill-0, #337576)" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            ))}

            <div className="border-t border-[#e9eaeb] pt-[12px] mt-[12px]">
              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] text-[#717680] text-[11px] mb-[12px]">
                SCHEDULED
              </p>
              {mockScheduled.map((item, index) => (
                <div key={index} className="flex items-start gap-[12px] hover:bg-gray-50 p-[8px] rounded-[8px] transition-colors cursor-pointer mb-[8px]">
                  <div className="flex items-center justify-center shrink-0 size-[24px] rounded-full border-2 border-[#d1d5db]">
                    <div className="relative shrink-0 size-[8px]">
                      <svg className="block size-full" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="4" fill="#d1d5db" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[18px] text-[#717680] text-[11px]">
                      {item.time}
                    </p>
                    <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] text-[#181d27] text-[13px] mt-[2px]">
                      {item.name}
                    </p>
                    <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[18px] text-[#717680] text-[11px] mt-[2px]">
                      {item.cases}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}
