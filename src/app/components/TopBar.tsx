import svgPaths from "../../imports/svg-kj01rvydwu";

interface TopBarProps {
  title?: string;
  onRefresh?: () => void;
}

export function TopBar({ title = "FRM Pulse - Sumner Smith", onRefresh }: TopBarProps) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[24px] py-[16px] relative w-full">
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
            <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#181d27] text-[13px]">
              {title}
            </p>
            <button
              onClick={onRefresh}
              className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0 hover:opacity-70 transition-opacity"
            >
              <div className="relative shrink-0 size-[14px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <path
                    d={svgPaths.p16e5a300}
                    stroke="var(--stroke-0, #A4A7AE)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="0.98"
                  />
                </svg>
              </div>
              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#535862] text-[12px] text-nowrap">
                Refresh
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
