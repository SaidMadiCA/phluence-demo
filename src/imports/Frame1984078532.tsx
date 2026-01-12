import svgPaths from "./svg-f411l7b9b4";

function Frame() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#181d27] text-[15px] w-full">Conversations</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0">
      <Frame />
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-0 relative w-full">
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame2 />
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-[rgba(125,24,70,0.1)] content-stretch flex items-center px-[8px] py-px relative rounded-[9999px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#c02b6c] border-solid inset-[-1px] pointer-events-none rounded-[10000px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#7d1846] text-[11px] text-center text-nowrap">5</p>
    </div>
  );
}

function TabButtonBase() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center pb-[8px] pt-[2px] px-[4px] relative shrink-0" data-name="_Tab button base">
      <div aria-hidden="true" className="absolute border-[#c02b6c] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#7d1846] text-[12px] text-nowrap">Active</p>
      <Badge />
    </div>
  );
}

function Badge1() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center px-[8px] py-px relative rounded-[9999px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-[-1px] pointer-events-none rounded-[10000px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#414651] text-[11px] text-center text-nowrap">122</p>
    </div>
  );
}

function TabButtonBase1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center pb-[8px] pt-[2px] px-[4px] relative self-stretch shrink-0" data-name="_Tab button base">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#717680] text-[12px] text-nowrap">Scheduled</p>
      <Badge1 />
    </div>
  );
}

function Tabs() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Tabs">
      <TabButtonBase />
      <TabButtonBase1 />
    </div>
  );
}

function HorizontalTabs() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Horizontal tabs">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Tabs />
    </div>
  );
}

function Frame39() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[16px] py-0 relative w-full">
        <HorizontalTabs />
      </div>
    </div>
  );
}

function SearchLg() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="search-lg">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="search-lg">
          <path d={svgPaths.pdc56a00} id="Icon" stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <SearchLg />
      <p className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#717680] text-[13px] text-nowrap">Search</p>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[4px] relative w-full">
          <Content />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-[-1px] pointer-events-none rounded-[7px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function InputWithLabel() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input with label">
      <Input />
    </div>
  );
}

function Select() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Select">
      <InputWithLabel />
    </div>
  );
}

function Frame40() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[16px] py-0 relative w-full">
        <Select />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[12.5%_28.6%_12.5%_28.13%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8495 24">
        <g id="Group 133">
          <path d={svgPaths.p393295f0} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p2adb7900} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p3c95b980} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p1e774100} fill="var(--fill-0, white)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Avatar() {
  return (
    <div className="bg-[#253382] relative rounded-[200px] shrink-0 size-[32px]" data-name="Avatar">
      <Group />
    </div>
  );
}

function Recording4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="recording-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="20/solid">
          <g id="Solid">
            <path clipRule="evenodd" d={svgPaths.p12c42a00} fill="var(--fill-0, #871B4C)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p29061a80} fill="var(--fill-0, #871B4C)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p1e24e100} fill="var(--fill-0, #871B4C)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p3c3a5500} fill="var(--fill-0, #871B4C)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p174c9f00} fill="var(--fill-0, #871B4C)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TextAndSubtext() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Text and subtext">
      <p className="basis-0 font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#414651] text-[13px]">United Healthcare</p>
      <Recording4 />
    </div>
  );
}

function Component20Line() {
  return (
    <div className="relative size-[16px]" data-name="20/line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="16/line">
          <path d={svgPaths.p1f072800} id="Icon" stroke="var(--stroke-0, #079455)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Frame103() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <Component20Line />
        </div>
      </div>
      <p className="-webkit-box basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#414651] text-[12px]">Outbound call</p>
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame103 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <Frame86 />
    </div>
  );
}

function Frame101() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#717680] text-[11px] text-nowrap">35m</p>
    </div>
  );
}

function Frame102() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-end justify-end min-h-px min-w-px relative shrink-0">
      <Frame7 />
      <Frame101 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[12px] items-end justify-end relative shrink-0 w-full">
      <Frame102 />
    </div>
  );
}

function TextAndSupportingText() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text and supporting text">
      <TextAndSubtext />
      <Frame8 />
    </div>
  );
}

function Content1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <div aria-hidden="true" className="absolute border-0 border-[#e9eaeb] border-solid inset-0 pointer-events-none" />
      <TextAndSupportingText />
    </div>
  );
}

function FeedItemBase() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="_Feed item base">
      <Avatar />
      <Content1 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="bg-[#e9eaeb] relative rounded-[8px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative w-full">
        <FeedItemBase />
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[8px] py-0 relative w-full">
        <Frame41 />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame47 />
    </div>
  );
}

function Avatar1() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Avatar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Avatar">
          <rect fill="var(--fill-0, #7D3F98)" height="32" rx="16" width="32" />
          <path d={svgPaths.pbb16980} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Recording() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="recording-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="20/solid">
          <g id="Solid">
            <path clipRule="evenodd" d={svgPaths.p12c42a00} fill="var(--fill-0, #871B4C)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p29061a80} fill="var(--fill-0, #871B4C)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p1e24e100} fill="var(--fill-0, #871B4C)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p3c3a5500} fill="var(--fill-0, #871B4C)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p174c9f00} fill="var(--fill-0, #871B4C)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TextAndSubtext1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Text and subtext">
      <p className="basis-0 font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#414651] text-[13px]">Aetna</p>
      <Recording />
    </div>
  );
}

function Frame104() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0">
      <p className="-webkit-box basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#414651] text-[12px]">39810513</p>
    </div>
  );
}

function Frame87() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame104 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <Frame87 />
    </div>
  );
}

function Frame106() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#717680] text-[11px] text-nowrap">23m</p>
    </div>
  );
}

function Frame107() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-end justify-end min-h-px min-w-px relative shrink-0">
      <Frame9 />
      <Frame106 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[12px] items-end justify-end relative shrink-0 w-full">
      <Frame107 />
    </div>
  );
}

function TextAndSupportingText1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text and supporting text">
      <TextAndSubtext1 />
      <Frame10 />
    </div>
  );
}

function Content2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <div aria-hidden="true" className="absolute border-0 border-[#e9eaeb] border-solid inset-0 pointer-events-none" />
      <TextAndSupportingText1 />
    </div>
  );
}

function FeedItemBase1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="_Feed item base">
      <Avatar1 />
      <Content2 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="bg-[#fafafa] relative rounded-[8px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative w-full">
        <FeedItemBase1 />
      </div>
    </div>
  );
}

function Frame59() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[4px] py-0 relative w-full">
        <Frame42 />
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame59 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[12.5%_17.8%_12.5%_15.63%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.3056 24">
        <g id="Group 134">
          <path d={svgPaths.p25b42b80} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p34c34580} fill="var(--fill-0, #01CE54)" id="Vector_2" />
          <path d={svgPaths.p17080fb0} fill="var(--fill-0, #01CE54)" id="Vector_3" />
          <path d={svgPaths.p1cc9c1c0} fill="var(--fill-0, #01CE54)" id="Vector_4" />
          <path d={svgPaths.p1d9c1d00} fill="var(--fill-0, #01CE54)" id="Vector_5" />
          <path d={svgPaths.p225efb80} fill="var(--fill-0, #01CE54)" id="Vector_6" />
          <path d={svgPaths.pa413e00} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p16cc18a0} fill="var(--fill-0, #01CE54)" id="Vector_8" />
          <path d={svgPaths.p20334600} fill="var(--fill-0, #01CE54)" id="Vector_9" />
          <path d={svgPaths.p3c2e4600} fill="var(--fill-0, #01CE54)" id="Vector_10" />
          <path d={svgPaths.p323ceac0} fill="var(--fill-0, #01CE54)" id="Vector_11" />
        </g>
      </svg>
    </div>
  );
}

function Avatar2() {
  return (
    <div className="bg-[#0033fe] relative rounded-[200px] shrink-0 size-[32px]" data-name="Avatar">
      <Group1 />
    </div>
  );
}

function Recording1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="recording-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="20/solid">
          <g id="Solid">
            <path clipRule="evenodd" d={svgPaths.p12c42a00} fill="var(--fill-0, #871B4C)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p29061a80} fill="var(--fill-0, #871B4C)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p1e24e100} fill="var(--fill-0, #871B4C)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p3c3a5500} fill="var(--fill-0, #871B4C)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p174c9f00} fill="var(--fill-0, #871B4C)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TextAndSubtext2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Text and subtext">
      <p className="basis-0 font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#414651] text-[13px]">Cigna</p>
      <Recording1 />
    </div>
  );
}

function Frame108() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0">
      <p className="-webkit-box basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#414651] text-[12px]">91516212</p>
    </div>
  );
}

function Frame88() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame108 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <Frame88 />
    </div>
  );
}

function Frame109() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#717680] text-[11px] text-nowrap">26m</p>
    </div>
  );
}

function Frame110() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-end justify-end min-h-px min-w-px relative shrink-0">
      <Frame11 />
      <Frame109 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[12px] items-end justify-end relative shrink-0 w-full">
      <Frame110 />
    </div>
  );
}

function TextAndSupportingText2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text and supporting text">
      <TextAndSubtext2 />
      <Frame12 />
    </div>
  );
}

function Content3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <div aria-hidden="true" className="absolute border-0 border-[#e9eaeb] border-solid inset-0 pointer-events-none" />
      <TextAndSupportingText2 />
    </div>
  );
}

function FeedItemBase2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="_Feed item base">
      <Avatar2 />
      <Content3 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="bg-[#fafafa] relative rounded-[8px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative w-full">
        <FeedItemBase2 />
      </div>
    </div>
  );
}

function Frame60() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[4px] py-0 relative w-full">
        <Frame43 />
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame60 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[21.88%_26.99%_21.88%_28.13%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3632 18">
        <g id="Group 135">
          <path d={svgPaths.p2d6f8a00} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p229e4800} fill="var(--fill-0, #00ACEC)" id="Vector_2" />
          <path d={svgPaths.p1c5f9e80} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p23d840} fill="var(--fill-0, #00ACEC)" id="Vector_4" />
          <path d={svgPaths.ped86930} fill="var(--fill-0, #00ACEC)" id="Vector_5" />
          <path d={svgPaths.p6c472c0} fill="var(--fill-0, #00ACEC)" id="Vector_6" />
          <path d={svgPaths.p4efc100} fill="var(--fill-0, #00ACEC)" id="Vector_7" />
          <path d={svgPaths.p217d7e00} fill="var(--fill-0, #00ACEC)" id="Vector_8" />
          <path d={svgPaths.p2845c000} fill="var(--fill-0, #00ACEC)" id="Vector_9" />
          <path d={svgPaths.p30c94c40} fill="var(--fill-0, #00ACEC)" id="Vector_10" />
        </g>
      </svg>
    </div>
  );
}

function Avatar3() {
  return (
    <div className="bg-[#00acec] relative rounded-[200px] shrink-0 size-[32px]" data-name="Avatar">
      <Group2 />
    </div>
  );
}

function Recording2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="recording-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="20/solid">
          <g id="Solid">
            <path clipRule="evenodd" d={svgPaths.p12c42a00} fill="var(--fill-0, #871B4C)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p29061a80} fill="var(--fill-0, #871B4C)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p1e24e100} fill="var(--fill-0, #871B4C)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p3c3a5500} fill="var(--fill-0, #871B4C)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p174c9f00} fill="var(--fill-0, #871B4C)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TextAndSubtext3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Text and subtext">
      <p className="basis-0 font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#414651] text-[13px]">BCBS</p>
      <Recording2 />
    </div>
  );
}

function Frame111() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0">
      <p className="-webkit-box basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#414651] text-[12px]">97239152</p>
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame111 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <Frame89 />
    </div>
  );
}

function Frame112() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#717680] text-[11px] text-nowrap">27m</p>
    </div>
  );
}

function Frame113() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-end justify-end min-h-px min-w-px relative shrink-0">
      <Frame14 />
      <Frame112 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[12px] items-end justify-end relative shrink-0 w-full">
      <Frame113 />
    </div>
  );
}

function TextAndSupportingText3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text and supporting text">
      <TextAndSubtext3 />
      <Frame15 />
    </div>
  );
}

function Content4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <div aria-hidden="true" className="absolute border-0 border-[#e9eaeb] border-solid inset-0 pointer-events-none" />
      <TextAndSupportingText3 />
    </div>
  );
}

function FeedItemBase3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="_Feed item base">
      <Avatar3 />
      <Content4 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="bg-[#fafafa] relative rounded-[8px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative w-full">
        <FeedItemBase3 />
      </div>
    </div>
  );
}

function Frame61() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[4px] py-0 relative w-full">
        <Frame44 />
      </div>
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame61 />
    </div>
  );
}

function HumanaSymbol1() {
  return (
    <div className="absolute h-[18px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[14px]" data-name="Humana_Symbol_0 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 18">
        <g clipPath="url(#clip0_3_11329)" id="Humana_Symbol_0 1">
          <path d={svgPaths.p24e30af0} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_3_11329">
            <rect fill="white" height="18" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Avatar4() {
  return (
    <div className="bg-[#78be20] relative rounded-[200px] shrink-0 size-[32px]" data-name="Avatar">
      <HumanaSymbol1 />
    </div>
  );
}

function Recording3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="recording-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="20/solid">
          <g id="Solid">
            <path clipRule="evenodd" d={svgPaths.p12c42a00} fill="var(--fill-0, #871B4C)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p29061a80} fill="var(--fill-0, #871B4C)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p1e24e100} fill="var(--fill-0, #871B4C)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p3c3a5500} fill="var(--fill-0, #871B4C)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p174c9f00} fill="var(--fill-0, #871B4C)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TextAndSubtext4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Text and subtext">
      <p className="basis-0 font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#414651] text-[13px]">Humana</p>
      <Recording3 />
    </div>
  );
}

function Frame114() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0">
      <p className="-webkit-box basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#414651] text-[12px]">47123358</p>
    </div>
  );
}

function Frame90() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame114 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <Frame90 />
    </div>
  );
}

function Frame115() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#717680] text-[11px] text-nowrap">24m</p>
    </div>
  );
}

function Frame116() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-end justify-end min-h-px min-w-px relative shrink-0">
      <Frame16 />
      <Frame115 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[12px] items-end justify-end relative shrink-0 w-full">
      <Frame116 />
    </div>
  );
}

function TextAndSupportingText4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text and supporting text">
      <TextAndSubtext4 />
      <Frame17 />
    </div>
  );
}

function Content5() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <div aria-hidden="true" className="absolute border-0 border-[#e9eaeb] border-solid inset-0 pointer-events-none" />
      <TextAndSupportingText4 />
    </div>
  );
}

function FeedItemBase4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="_Feed item base">
      <Avatar4 />
      <Content5 />
    </div>
  );
}

function Frame63() {
  return (
    <div className="bg-[#fafafa] relative rounded-[8px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative w-full">
        <FeedItemBase4 />
      </div>
    </div>
  );
}

function Frame64() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[4px] py-0 relative w-full">
        <Frame63 />
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame64 />
    </div>
  );
}

function Avatar5() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Avatar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Avatar">
          <rect fill="var(--fill-0, #7D3F98)" height="32" rx="16" width="32" />
          <path d={svgPaths.pbb16980} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component20Line1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="20/line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="16/solid">
          <path clipRule="evenodd" d={svgPaths.p2969dc80} fill="var(--fill-0, #A4A7AE)" fillRule="evenodd" id="Solid" />
        </g>
      </svg>
    </div>
  );
}

function TextAndSubtext5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Text and subtext">
      <p className="basis-0 font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#414651] text-[13px]">Aetna</p>
      <Component20Line1 />
    </div>
  );
}

function Frame117() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0">
      <p className="-webkit-box basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#414651] text-[12px]">39810513</p>
    </div>
  );
}

function Frame91() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame117 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <Frame91 />
    </div>
  );
}

function Frame118() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#717680] text-[11px] text-nowrap">In 30m</p>
    </div>
  );
}

function Frame119() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-end justify-end min-h-px min-w-px relative shrink-0">
      <Frame18 />
      <Frame118 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[12px] items-end justify-end relative shrink-0 w-full">
      <Frame119 />
    </div>
  );
}

function TextAndSupportingText5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text and supporting text">
      <TextAndSubtext5 />
      <Frame19 />
    </div>
  );
}

function Content6() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <div aria-hidden="true" className="absolute border-0 border-[#e9eaeb] border-solid inset-0 pointer-events-none" />
      <TextAndSupportingText5 />
    </div>
  );
}

function FeedItemBase5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="_Feed item base">
      <Avatar5 />
      <Content6 />
    </div>
  );
}

function Frame65() {
  return (
    <div className="bg-[#fafafa] relative rounded-[8px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative w-full">
        <FeedItemBase5 />
      </div>
    </div>
  );
}

function Frame66() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[4px] py-0 relative w-full">
        <Frame65 />
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame66 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[12.5%_17.8%_12.5%_15.63%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.3056 24">
        <g id="Group 134">
          <path d={svgPaths.p25b42b80} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p34c34580} fill="var(--fill-0, #01CE54)" id="Vector_2" />
          <path d={svgPaths.p17080fb0} fill="var(--fill-0, #01CE54)" id="Vector_3" />
          <path d={svgPaths.p1cc9c1c0} fill="var(--fill-0, #01CE54)" id="Vector_4" />
          <path d={svgPaths.p1d9c1d00} fill="var(--fill-0, #01CE54)" id="Vector_5" />
          <path d={svgPaths.p225efb80} fill="var(--fill-0, #01CE54)" id="Vector_6" />
          <path d={svgPaths.pa413e00} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p16cc18a0} fill="var(--fill-0, #01CE54)" id="Vector_8" />
          <path d={svgPaths.p20334600} fill="var(--fill-0, #01CE54)" id="Vector_9" />
          <path d={svgPaths.p3c2e4600} fill="var(--fill-0, #01CE54)" id="Vector_10" />
          <path d={svgPaths.p323ceac0} fill="var(--fill-0, #01CE54)" id="Vector_11" />
        </g>
      </svg>
    </div>
  );
}

function Avatar6() {
  return (
    <div className="bg-[#0033fe] relative rounded-[200px] shrink-0 size-[32px]" data-name="Avatar">
      <Group3 />
    </div>
  );
}

function Component20Line2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="20/line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="16/solid">
          <path clipRule="evenodd" d={svgPaths.p2969dc80} fill="var(--fill-0, #A4A7AE)" fillRule="evenodd" id="Solid" />
        </g>
      </svg>
    </div>
  );
}

function TextAndSubtext6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Text and subtext">
      <p className="basis-0 font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#414651] text-[13px]">Cigna</p>
      <Component20Line2 />
    </div>
  );
}

function Frame120() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0">
      <p className="-webkit-box basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#414651] text-[12px]">91516212</p>
    </div>
  );
}

function Frame92() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame120 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <Frame92 />
    </div>
  );
}

function Frame121() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#717680] text-[11px] text-nowrap">In 30m</p>
    </div>
  );
}

function Frame122() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-end justify-end min-h-px min-w-px relative shrink-0">
      <Frame20 />
      <Frame121 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[12px] items-end justify-end relative shrink-0 w-full">
      <Frame122 />
    </div>
  );
}

function TextAndSupportingText6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text and supporting text">
      <TextAndSubtext6 />
      <Frame21 />
    </div>
  );
}

function Content7() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <div aria-hidden="true" className="absolute border-0 border-[#e9eaeb] border-solid inset-0 pointer-events-none" />
      <TextAndSupportingText6 />
    </div>
  );
}

function FeedItemBase6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="_Feed item base">
      <Avatar6 />
      <Content7 />
    </div>
  );
}

function Frame67() {
  return (
    <div className="bg-[#fafafa] relative rounded-[8px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative w-full">
        <FeedItemBase6 />
      </div>
    </div>
  );
}

function Frame68() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[4px] py-0 relative w-full">
        <Frame67 />
      </div>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame68 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[12.5%_28.6%_12.5%_28.13%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8495 24">
        <g id="Group 133">
          <path d={svgPaths.p393295f0} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p2adb7900} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p3c95b980} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p1e774100} fill="var(--fill-0, white)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Avatar7() {
  return (
    <div className="bg-[#253382] relative rounded-[200px] shrink-0 size-[32px]" data-name="Avatar">
      <Group4 />
    </div>
  );
}

function Component20Line3() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="20/line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="16/solid">
          <path clipRule="evenodd" d={svgPaths.p2969dc80} fill="var(--fill-0, #A4A7AE)" fillRule="evenodd" id="Solid" />
        </g>
      </svg>
    </div>
  );
}

function TextAndSubtext7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Text and subtext">
      <p className="basis-0 font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#414651] text-[13px]">United Healthcare</p>
      <Component20Line3 />
    </div>
  );
}

function Frame123() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0">
      <p className="-webkit-box basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#414651] text-[12px]">46237862</p>
    </div>
  );
}

function Frame93() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame123 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <Frame93 />
    </div>
  );
}

function Frame124() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#717680] text-[11px] text-nowrap">In 30m</p>
    </div>
  );
}

function Frame125() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-end justify-end min-h-px min-w-px relative shrink-0">
      <Frame22 />
      <Frame124 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[12px] items-end justify-end relative shrink-0 w-full">
      <Frame125 />
    </div>
  );
}

function TextAndSupportingText7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text and supporting text">
      <TextAndSubtext7 />
      <Frame23 />
    </div>
  );
}

function Content8() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <div aria-hidden="true" className="absolute border-0 border-[#e9eaeb] border-solid inset-0 pointer-events-none" />
      <TextAndSupportingText7 />
    </div>
  );
}

function FeedItemBase7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="_Feed item base">
      <Avatar7 />
      <Content8 />
    </div>
  );
}

function Frame69() {
  return (
    <div className="bg-[#fafafa] relative rounded-[8px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative w-full">
        <FeedItemBase7 />
      </div>
    </div>
  );
}

function Frame70() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[4px] py-0 relative w-full">
        <Frame69 />
      </div>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame70 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[12.5%_28.6%_12.5%_28.13%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8495 24">
        <g id="Group 133">
          <path d={svgPaths.p393295f0} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p2adb7900} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p3c95b980} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p1e774100} fill="var(--fill-0, white)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Avatar8() {
  return (
    <div className="bg-[#253382] relative rounded-[200px] shrink-0 size-[32px]" data-name="Avatar">
      <Group5 />
    </div>
  );
}

function Component20Line4() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="20/line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="16/solid">
          <path clipRule="evenodd" d={svgPaths.p2969dc80} fill="var(--fill-0, #A4A7AE)" fillRule="evenodd" id="Solid" />
        </g>
      </svg>
    </div>
  );
}

function TextAndSubtext8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Text and subtext">
      <p className="basis-0 font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#414651] text-[13px]">United Healthcare</p>
      <Component20Line4 />
    </div>
  );
}

function Frame126() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0">
      <p className="-webkit-box basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#414651] text-[12px]">90231841</p>
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame126 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <Frame94 />
    </div>
  );
}

function Frame127() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#717680] text-[11px] text-nowrap">In 30m</p>
    </div>
  );
}

function Frame128() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-end justify-end min-h-px min-w-px relative shrink-0">
      <Frame24 />
      <Frame127 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex gap-[12px] items-end justify-end relative shrink-0 w-full">
      <Frame128 />
    </div>
  );
}

function TextAndSupportingText8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text and supporting text">
      <TextAndSubtext8 />
      <Frame25 />
    </div>
  );
}

function Content9() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <div aria-hidden="true" className="absolute border-0 border-[#e9eaeb] border-solid inset-0 pointer-events-none" />
      <TextAndSupportingText8 />
    </div>
  );
}

function FeedItemBase8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="_Feed item base">
      <Avatar8 />
      <Content9 />
    </div>
  );
}

function Frame71() {
  return (
    <div className="bg-[#fafafa] relative rounded-[8px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative w-full">
        <FeedItemBase8 />
      </div>
    </div>
  );
}

function Frame72() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[4px] py-0 relative w-full">
        <Frame71 />
      </div>
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame72 />
    </div>
  );
}

function HumanaSymbol() {
  return (
    <div className="absolute h-[18px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[14px]" data-name="Humana_Symbol_0 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 18">
        <g clipPath="url(#clip0_3_11329)" id="Humana_Symbol_0 1">
          <path d={svgPaths.p24e30af0} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_3_11329">
            <rect fill="white" height="18" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Avatar9() {
  return (
    <div className="bg-[#78be20] relative rounded-[200px] shrink-0 size-[32px]" data-name="Avatar">
      <HumanaSymbol />
    </div>
  );
}

function Component20Line5() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="20/line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="16/solid">
          <path clipRule="evenodd" d={svgPaths.p2969dc80} fill="var(--fill-0, #A4A7AE)" fillRule="evenodd" id="Solid" />
        </g>
      </svg>
    </div>
  );
}

function TextAndSubtext9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Text and subtext">
      <p className="basis-0 font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#414651] text-[13px]">Humana</p>
      <Component20Line5 />
    </div>
  );
}

function Frame129() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0">
      <p className="-webkit-box basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#414651] text-[12px]">47123358</p>
    </div>
  );
}

function Frame95() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame129 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <Frame95 />
    </div>
  );
}

function Frame130() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#717680] text-[11px] text-nowrap">In 40m</p>
    </div>
  );
}

function Frame131() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-end justify-end min-h-px min-w-px relative shrink-0">
      <Frame26 />
      <Frame130 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[12px] items-end justify-end relative shrink-0 w-full">
      <Frame131 />
    </div>
  );
}

function TextAndSupportingText9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text and supporting text">
      <TextAndSubtext9 />
      <Frame27 />
    </div>
  );
}

function Content10() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <div aria-hidden="true" className="absolute border-0 border-[#e9eaeb] border-solid inset-0 pointer-events-none" />
      <TextAndSupportingText9 />
    </div>
  );
}

function FeedItemBase9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="_Feed item base">
      <Avatar9 />
      <Content10 />
    </div>
  );
}

function Frame73() {
  return (
    <div className="bg-[#fafafa] relative rounded-[8px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative w-full">
        <FeedItemBase9 />
      </div>
    </div>
  );
}

function Frame74() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[4px] py-0 relative w-full">
        <Frame73 />
      </div>
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame74 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute inset-[21.88%_26.99%_21.88%_28.13%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3632 18">
        <g id="Group 135">
          <path d={svgPaths.p2d6f8a00} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p229e4800} fill="var(--fill-0, #00ACEC)" id="Vector_2" />
          <path d={svgPaths.p1c5f9e80} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p23d840} fill="var(--fill-0, #00ACEC)" id="Vector_4" />
          <path d={svgPaths.ped86930} fill="var(--fill-0, #00ACEC)" id="Vector_5" />
          <path d={svgPaths.p6c472c0} fill="var(--fill-0, #00ACEC)" id="Vector_6" />
          <path d={svgPaths.p4efc100} fill="var(--fill-0, #00ACEC)" id="Vector_7" />
          <path d={svgPaths.p217d7e00} fill="var(--fill-0, #00ACEC)" id="Vector_8" />
          <path d={svgPaths.p2845c000} fill="var(--fill-0, #00ACEC)" id="Vector_9" />
          <path d={svgPaths.p30c94c40} fill="var(--fill-0, #00ACEC)" id="Vector_10" />
        </g>
      </svg>
    </div>
  );
}

function Avatar10() {
  return (
    <div className="bg-[#00acec] relative rounded-[200px] shrink-0 size-[32px]" data-name="Avatar">
      <Group6 />
    </div>
  );
}

function Component20Line6() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="20/line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="16/solid">
          <path clipRule="evenodd" d={svgPaths.p2969dc80} fill="var(--fill-0, #A4A7AE)" fillRule="evenodd" id="Solid" />
        </g>
      </svg>
    </div>
  );
}

function TextAndSubtext10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Text and subtext">
      <p className="basis-0 font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#414651] text-[13px]">BCBS</p>
      <Component20Line6 />
    </div>
  );
}

function Frame132() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0">
      <p className="-webkit-box basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#414651] text-[12px]">97239152</p>
    </div>
  );
}

function Frame96() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame132 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <Frame96 />
    </div>
  );
}

function Frame133() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#717680] text-[11px] text-nowrap">In 40m</p>
    </div>
  );
}

function Frame134() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-end justify-end min-h-px min-w-px relative shrink-0">
      <Frame28 />
      <Frame133 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[12px] items-end justify-end relative shrink-0 w-full">
      <Frame134 />
    </div>
  );
}

function TextAndSupportingText10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text and supporting text">
      <TextAndSubtext10 />
      <Frame29 />
    </div>
  );
}

function Content11() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <div aria-hidden="true" className="absolute border-0 border-[#e9eaeb] border-solid inset-0 pointer-events-none" />
      <TextAndSupportingText10 />
    </div>
  );
}

function FeedItemBase10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="_Feed item base">
      <Avatar10 />
      <Content11 />
    </div>
  );
}

function Frame75() {
  return (
    <div className="bg-[#fafafa] relative rounded-[8px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative w-full">
        <FeedItemBase10 />
      </div>
    </div>
  );
}

function Frame76() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[4px] py-0 relative w-full">
        <Frame75 />
      </div>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame76 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute inset-[12.5%_28.6%_12.5%_28.13%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8495 24">
        <g id="Group 133">
          <path d={svgPaths.p393295f0} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p2adb7900} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p3c95b980} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p1e774100} fill="var(--fill-0, white)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Avatar11() {
  return (
    <div className="bg-[#253382] relative rounded-[200px] shrink-0 size-[32px]" data-name="Avatar">
      <Group7 />
    </div>
  );
}

function Component20Line7() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="20/line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="16/solid">
          <path clipRule="evenodd" d={svgPaths.p2969dc80} fill="var(--fill-0, #A4A7AE)" fillRule="evenodd" id="Solid" />
        </g>
      </svg>
    </div>
  );
}

function TextAndSubtext11() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Text and subtext">
      <p className="basis-0 font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#414651] text-[13px]">United Healthcare</p>
      <Component20Line7 />
    </div>
  );
}

function Frame135() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0">
      <p className="-webkit-box basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#414651] text-[12px]">68343452</p>
    </div>
  );
}

function Frame97() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame135 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <Frame97 />
    </div>
  );
}

function Frame136() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#717680] text-[11px] text-nowrap">In 40m</p>
    </div>
  );
}

function Frame137() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-end justify-end min-h-px min-w-px relative shrink-0">
      <Frame30 />
      <Frame136 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex gap-[12px] items-end justify-end relative shrink-0 w-full">
      <Frame137 />
    </div>
  );
}

function TextAndSupportingText11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text and supporting text">
      <TextAndSubtext11 />
      <Frame31 />
    </div>
  );
}

function Content12() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <div aria-hidden="true" className="absolute border-0 border-[#e9eaeb] border-solid inset-0 pointer-events-none" />
      <TextAndSupportingText11 />
    </div>
  );
}

function FeedItemBase11() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="_Feed item base">
      <Avatar11 />
      <Content12 />
    </div>
  );
}

function Frame77() {
  return (
    <div className="bg-[#fafafa] relative rounded-[8px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative w-full">
        <FeedItemBase11 />
      </div>
    </div>
  );
}

function Frame78() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[4px] py-0 relative w-full">
        <Frame77 />
      </div>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame78 />
    </div>
  );
}

function Avatar12() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Avatar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Avatar">
          <rect fill="var(--fill-0, #7D3F98)" height="32" rx="16" width="32" />
          <path d={svgPaths.pbb16980} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component20Line8() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="20/line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="16/solid">
          <path clipRule="evenodd" d={svgPaths.p2969dc80} fill="var(--fill-0, #A4A7AE)" fillRule="evenodd" id="Solid" />
        </g>
      </svg>
    </div>
  );
}

function TextAndSubtext12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Text and subtext">
      <p className="basis-0 font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#414651] text-[13px]">Aetna</p>
      <Component20Line8 />
    </div>
  );
}

function Frame138() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0">
      <p className="-webkit-box basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#414651] text-[12px]">39810513</p>
    </div>
  );
}

function Frame98() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame138 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <Frame98 />
    </div>
  );
}

function Frame139() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#717680] text-[11px] text-nowrap">In 40m</p>
    </div>
  );
}

function Frame140() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-end justify-end min-h-px min-w-px relative shrink-0">
      <Frame32 />
      <Frame139 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex gap-[12px] items-end justify-end relative shrink-0 w-full">
      <Frame140 />
    </div>
  );
}

function TextAndSupportingText12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text and supporting text">
      <TextAndSubtext12 />
      <Frame33 />
    </div>
  );
}

function Content13() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <div aria-hidden="true" className="absolute border-0 border-[#e9eaeb] border-solid inset-0 pointer-events-none" />
      <TextAndSupportingText12 />
    </div>
  );
}

function FeedItemBase12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="_Feed item base">
      <Avatar12 />
      <Content13 />
    </div>
  );
}

function Frame79() {
  return (
    <div className="bg-[#fafafa] relative rounded-[8px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative w-full">
        <FeedItemBase12 />
      </div>
    </div>
  );
}

function Frame80() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[4px] py-0 relative w-full">
        <Frame79 />
      </div>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame80 />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute inset-[12.5%_17.8%_12.5%_15.63%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.3056 24">
        <g id="Group 134">
          <path d={svgPaths.p25b42b80} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p34c34580} fill="var(--fill-0, #01CE54)" id="Vector_2" />
          <path d={svgPaths.p17080fb0} fill="var(--fill-0, #01CE54)" id="Vector_3" />
          <path d={svgPaths.p1cc9c1c0} fill="var(--fill-0, #01CE54)" id="Vector_4" />
          <path d={svgPaths.p1d9c1d00} fill="var(--fill-0, #01CE54)" id="Vector_5" />
          <path d={svgPaths.p225efb80} fill="var(--fill-0, #01CE54)" id="Vector_6" />
          <path d={svgPaths.pa413e00} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p16cc18a0} fill="var(--fill-0, #01CE54)" id="Vector_8" />
          <path d={svgPaths.p20334600} fill="var(--fill-0, #01CE54)" id="Vector_9" />
          <path d={svgPaths.p3c2e4600} fill="var(--fill-0, #01CE54)" id="Vector_10" />
          <path d={svgPaths.p323ceac0} fill="var(--fill-0, #01CE54)" id="Vector_11" />
        </g>
      </svg>
    </div>
  );
}

function Avatar13() {
  return (
    <div className="bg-[#0033fe] relative rounded-[200px] shrink-0 size-[32px]" data-name="Avatar">
      <Group8 />
    </div>
  );
}

function Component20Line9() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="20/line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="16/solid">
          <path clipRule="evenodd" d={svgPaths.p2969dc80} fill="var(--fill-0, #A4A7AE)" fillRule="evenodd" id="Solid" />
        </g>
      </svg>
    </div>
  );
}

function TextAndSubtext13() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Text and subtext">
      <p className="basis-0 font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#414651] text-[13px]">Cigna</p>
      <Component20Line9 />
    </div>
  );
}

function Frame141() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0">
      <p className="-webkit-box basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#414651] text-[12px]">91516212</p>
    </div>
  );
}

function Frame99() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame141 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <Frame99 />
    </div>
  );
}

function Frame142() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#717680] text-[11px] text-nowrap">In 60m</p>
    </div>
  );
}

function Frame143() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-end justify-end min-h-px min-w-px relative shrink-0">
      <Frame34 />
      <Frame142 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex gap-[12px] items-end justify-end relative shrink-0 w-full">
      <Frame143 />
    </div>
  );
}

function TextAndSupportingText13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text and supporting text">
      <TextAndSubtext13 />
      <Frame36 />
    </div>
  );
}

function Content14() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <div aria-hidden="true" className="absolute border-0 border-[#e9eaeb] border-solid inset-0 pointer-events-none" />
      <TextAndSupportingText13 />
    </div>
  );
}

function FeedItemBase13() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="_Feed item base">
      <Avatar13 />
      <Content14 />
    </div>
  );
}

function Frame81() {
  return (
    <div className="bg-[#fafafa] relative rounded-[8px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative w-full">
        <FeedItemBase13 />
      </div>
    </div>
  );
}

function Frame82() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[4px] py-0 relative w-full">
        <Frame81 />
      </div>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame82 />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute inset-[12.5%_28.6%_12.5%_28.13%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8495 24">
        <g id="Group 133">
          <path d={svgPaths.p393295f0} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p2adb7900} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p3c95b980} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p1e774100} fill="var(--fill-0, white)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Avatar14() {
  return (
    <div className="bg-[#253382] relative rounded-[200px] shrink-0 size-[32px]" data-name="Avatar">
      <Group9 />
    </div>
  );
}

function Component20Line10() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="20/line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="16/solid">
          <path clipRule="evenodd" d={svgPaths.p2969dc80} fill="var(--fill-0, #A4A7AE)" fillRule="evenodd" id="Solid" />
        </g>
      </svg>
    </div>
  );
}

function TextAndSubtext14() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Text and subtext">
      <p className="basis-0 font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#414651] text-[13px]">United Healthcare</p>
      <Component20Line10 />
    </div>
  );
}

function Frame144() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0">
      <p className="-webkit-box basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#414651] text-[12px]">56823412</p>
    </div>
  );
}

function Frame100() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame144 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <Frame100 />
    </div>
  );
}

function Frame145() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#717680] text-[11px] text-nowrap">In 60m</p>
    </div>
  );
}

function Frame146() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-end justify-end min-h-px min-w-px relative shrink-0">
      <Frame37 />
      <Frame145 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex gap-[12px] items-end justify-end relative shrink-0 w-full">
      <Frame146 />
    </div>
  );
}

function TextAndSupportingText14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text and supporting text">
      <TextAndSubtext14 />
      <Frame38 />
    </div>
  );
}

function Content15() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <div aria-hidden="true" className="absolute border-0 border-[#e9eaeb] border-solid inset-0 pointer-events-none" />
      <TextAndSupportingText14 />
    </div>
  );
}

function FeedItemBase14() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="_Feed item base">
      <Avatar14 />
      <Content15 />
    </div>
  );
}

function Frame83() {
  return (
    <div className="bg-[#fafafa] relative rounded-[8px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative w-full">
        <FeedItemBase14 />
      </div>
    </div>
  );
}

function Frame84() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[4px] py-0 relative w-full">
        <Frame83 />
      </div>
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame84 />
    </div>
  );
}

function Frame147() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame3 />
      <Frame45 />
      <Frame46 />
      <Frame62 />
      <Frame48 />
      <Frame49 />
      <Frame50 />
      <Frame51 />
      <Frame54 />
      <Frame53 />
      <Frame52 />
      <Frame55 />
      <Frame56 />
      <Frame57 />
      <Frame58 />
    </div>
  );
}

function Frame105() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame147 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame40 />
      <Frame105 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame39 />
      <Frame6 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame13 />
      <Frame4 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[325px]">
      <Frame35 />
    </div>
  );
}

export default function Frame85() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col items-start px-0 py-[12px] relative size-full">
      <Frame5 />
    </div>
  );
}