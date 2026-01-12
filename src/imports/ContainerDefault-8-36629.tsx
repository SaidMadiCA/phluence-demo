function TabButtonBase() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[6px] shadow-[0px_1px_3px_0px_rgba(10,13,18,0.1),0px_1px_2px_-1px_rgba(10,13,18,0.1)] shrink-0" data-name="_Tab button base">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[2px] relative w-full">
          <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#414651] text-[13px] text-nowrap">Call details</p>
        </div>
      </div>
    </div>
  );
}

function TabButtonBase1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[6px] shrink-0" data-name="_Tab button base">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[3px] relative w-full">
          <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#717680] text-[12px] text-nowrap">Case tracker</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalTabs() {
  return (
    <div className="bg-[#fafafa] relative rounded-[6px] shrink-0 w-full" data-name="Horizontal tabs">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[2px] relative w-full">
          <TabButtonBase />
          <TabButtonBase1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f5f5f5] border-solid inset-[-1px] pointer-events-none rounded-[7px]" />
    </div>
  );
}

function Frame75() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[16px] py-0 relative w-full">
        <HorizontalTabs />
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0">
      <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#181d27] text-[13px]">Case details</p>
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="16/line">
          <path d="M4 6L8 10L12 6" id="Icon" stroke="var(--stroke-0, #535862)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.06667" />
        </g>
      </svg>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame26 />
      <ChevronDown />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center px-0 py-[4px] relative shrink-0 w-full">
      <Frame27 />
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex items-center max-w-[176px] relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#181d27] text-[13px] w-[125px]">Case ID</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame65 />
      <div className="basis-0 flex flex-col font-['Inter:Medium',sans-serif] font-medium grow justify-center leading-[0] max-w-[176px] min-h-px min-w-px not-italic relative shrink-0 text-[#181d27] text-[13px] text-right">
        <p className="leading-[20px]">58825667</p>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <Frame28 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame29 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-between min-h-px min-w-px relative self-stretch shrink-0">
      <Frame30 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-start px-0 py-[6px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame15 />
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex items-center max-w-[176px] relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#181d27] text-[13px] w-[125px]">Patient Name</p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame66 />
      <div className="basis-0 flex flex-col font-['Inter:Medium',sans-serif] font-medium grow justify-center leading-[0] max-w-[176px] min-h-px min-w-px not-italic relative shrink-0 text-[#181d27] text-[13px] text-right">
        <p className="leading-[20px]">Robert Thompson</p>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <Frame31 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Frame32 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative self-stretch shrink-0">
      <Frame33 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-start px-0 py-[6px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame16 />
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex items-center max-w-[176px] relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#181d27] text-[13px] w-[125px]">Patient DOB</p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame67 />
      <div className="basis-0 flex flex-col font-['Inter:Medium',sans-serif] font-medium grow justify-center leading-[0] max-w-[176px] min-h-px min-w-px not-italic relative shrink-0 text-[#181d27] text-[13px] text-right">
        <p className="leading-[20px]">March 15, 1968</p>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <Frame34 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Frame35 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative self-stretch shrink-0">
      <Frame36 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-start px-0 py-[6px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame17 />
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex items-center max-w-[176px] relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#181d27] text-[13px] w-[125px]">Group Number</p>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame68 />
      <div className="basis-0 flex flex-col font-['Inter:Medium',sans-serif] font-medium grow justify-center leading-[0] max-w-[176px] min-h-px min-w-px not-italic relative shrink-0 text-[#181d27] text-[13px] text-right">
        <p className="leading-[20px]">523362172</p>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <Frame37 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Frame38 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative self-stretch shrink-0">
      <Frame39 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-start px-0 py-[6px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame18 />
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex items-center max-w-[176px] relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#181d27] text-[13px] w-[125px]">Member ID</p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame69 />
      <div className="basis-0 flex flex-col font-['Inter:Medium',sans-serif] font-medium grow justify-center leading-[0] max-w-[176px] min-h-px min-w-px not-italic relative shrink-0 text-[#181d27] text-[13px] text-right">
        <p className="leading-[20px]">912388404321</p>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <Frame40 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Frame41 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative self-stretch shrink-0">
      <Frame42 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-start px-0 py-[6px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame19 />
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex items-center max-w-[176px] relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#181d27] text-[13px] w-[125px]">HCP</p>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame70 />
      <div className="basis-0 flex flex-col font-['Inter:Medium',sans-serif] font-medium grow justify-center leading-[0] max-w-[176px] min-h-px min-w-px not-italic relative shrink-0 text-[#181d27] text-[13px] text-right">
        <p className="leading-[20px]">Dr. Sarah Chen</p>
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <Frame43 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame44 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-between min-h-px min-w-px relative self-stretch shrink-0">
      <Frame45 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-start px-0 py-[6px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame20 />
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex items-center max-w-[176px] relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#181d27] text-[13px] w-[125px]">Medication Type</p>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame71 />
      <div className="basis-0 flex flex-col font-['Inter:Medium',sans-serif] font-medium grow justify-center leading-[0] max-w-[176px] min-h-px min-w-px not-italic relative shrink-0 text-[#181d27] text-[13px] text-right">
        <p className="leading-[20px]">Specialty biologic</p>
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <Frame46 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Frame47 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative self-stretch shrink-0">
      <Frame48 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-start px-0 py-[6px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame21 />
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex items-center max-w-[176px] relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#181d27] text-[13px] w-[125px]">Drug</p>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame72 />
      <div className="basis-0 flex flex-col font-['Inter:Medium',sans-serif] font-medium grow justify-center leading-[0] max-w-[176px] min-h-px min-w-px not-italic relative shrink-0 text-[#181d27] text-[13px] text-right">
        <p className="leading-[20px]">Humira</p>
      </div>
    </div>
  );
}

function Frame50() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <Frame49 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame50 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-between min-h-px min-w-px relative self-stretch shrink-0">
      <Frame51 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-start px-0 py-[6px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame22 />
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex items-center max-w-[176px] relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#181d27] text-[13px] w-[125px]">Dose</p>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame73 />
      <div className="basis-0 flex flex-col font-['Inter:Medium',sans-serif] font-medium grow justify-center leading-[0] max-w-[176px] min-h-px min-w-px not-italic relative shrink-0 text-[#181d27] text-[13px] text-right">
        <p className="leading-[20px]">40 mg per week</p>
      </div>
    </div>
  );
}

function Frame53() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <Frame52 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Frame53 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative self-stretch shrink-0">
      <Frame54 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-start px-0 py-[6px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame23 />
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex items-center max-w-[176px] relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#181d27] text-[13px] w-[125px]">Administration</p>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame74 />
      <div className="basis-0 flex flex-col font-['Inter:Medium',sans-serif] font-medium grow justify-center leading-[0] max-w-[176px] min-h-px min-w-px not-italic relative shrink-0 text-[#181d27] text-[13px] text-right">
        <p className="leading-[20px]">Subcutaneous injection</p>
      </div>
    </div>
  );
}

function Frame56() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <Frame55 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Frame56 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative self-stretch shrink-0">
      <Frame57 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-start px-0 py-[6px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame24 />
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame3 />
      <Frame12 />
      <Frame4 />
      <Frame5 />
      <Frame6 />
      <Frame7 />
      <Frame8 />
      <Frame9 />
      <Frame10 />
      <Frame11 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame14 />
      <Frame63 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#181d27] text-[13px] w-full">Summary</p>
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame58 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative self-stretch shrink-0">
      <Frame59 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-start px-0 py-[4px] relative shrink-0 w-full">
      <Frame25 />
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#181d27] text-[13px] w-full">
        <p className="mb-[13px]">Agent traversed the IVR to get status of PA. James Wilson took the call and responded that the PA has been approved. He wants confirmation from a human.</p>
        <p className="mb-[13px]">{` Say something like: Hi James, this is Natalie Green at Phluence. I wanted to confirm that we received the good new that the PA  was approved. Can you provide me with the details?`}</p>
        <p>{` Follow whisper mode instructions from FRM Agent for guidance.`}</p>
      </div>
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame62 />
    </div>
  );
}

function SummaryItem() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="summary_item">
      <Frame13 />
      <Frame64 />
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-full">
      <Frame60 />
      <SummaryItem />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame61 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame2 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px px-[16px] py-0 relative shrink-0 w-[417px]">
      <Frame />
    </div>
  );
}

export default function ContainerDefault() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start pb-0 pt-[12px] px-0 relative size-full" data-name="Container Default">
      <div aria-hidden="true" className="absolute border-[#f5f5f5] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame75 />
      <Frame1 />
    </div>
  );
}