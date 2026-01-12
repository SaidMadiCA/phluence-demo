import svgPaths from "./svg-4pzkauivu6";

function HeaderTextWrapper() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Header text wrapper">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#181d27] text-[15px] w-full">Conversations</p>
    </div>
  );
}

function HeaderTextContainer() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Header text container">
      <HeaderTextWrapper />
    </div>
  );
}

function HeaderContent() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-0 relative w-full">
          <HeaderTextContainer />
        </div>
      </div>
    </div>
  );
}

function HeaderContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Header container">
      <HeaderContent />
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

function TabsContainer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Tabs container">
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

function SearchContainer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Search container">
      <div className="content-stretch flex flex-col items-start px-[16px] py-0 relative w-full">
        <Select />
      </div>
    </div>
  );
}

function AvatarIconContainer() {
  return (
    <div className="absolute inset-[12.5%_28.6%_12.5%_28.13%]" data-name="Avatar icon container">
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
      <AvatarIconContainer />
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

function ListItemTextInnerWrapper() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="List item text inner wrapper">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <Component20Line />
        </div>
      </div>
      <p className="-webkit-box basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#414651] text-[12px]">Outbound call</p>
    </div>
  );
}

function ListItemTextInnerContainer() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="List item text inner container">
      <ListItemTextInnerWrapper />
    </div>
  );
}

function ListItemTextContent() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="List item text content">
      <ListItemTextInnerContainer />
    </div>
  );
}

function ListItemTimeContainer() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="List item time container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#717680] text-[11px] text-nowrap">35m</p>
    </div>
  );
}

function ListItemTextWrapper() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-end justify-end min-h-px min-w-px relative shrink-0" data-name="List item text wrapper">
      <ListItemTextContent />
      <ListItemTimeContainer />
    </div>
  );
}

function ListItemTextContainer() {
  return (
    <div className="content-stretch flex gap-[12px] items-end justify-end relative shrink-0 w-full" data-name="List item text container">
      <ListItemTextWrapper />
    </div>
  );
}

function TextAndSupportingText() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text and supporting text">
      <TextAndSubtext />
      <ListItemTextContainer />
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

function ListItemWrapper() {
  return (
    <div className="bg-[#e9eaeb] relative rounded-[8px] shrink-0 w-full" data-name="List item wrapper">
      <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative w-full">
        <FeedItemBase />
      </div>
    </div>
  );
}

function ListItemContainer() {
  return (
    <div className="relative shrink-0 w-full" data-name="List item container">
      <div className="content-stretch flex flex-col items-start px-[8px] py-0 relative w-full">
        <ListItemWrapper />
      </div>
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

function ListItemTextInnerWrapper1() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="List item text inner wrapper">
      <p className="-webkit-box basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#414651] text-[12px]">39810513</p>
    </div>
  );
}

function ListItemTextInnerContainer1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="List item text inner container">
      <ListItemTextInnerWrapper1 />
    </div>
  );
}

function ListItemTextContent1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="List item text content">
      <ListItemTextInnerContainer1 />
    </div>
  );
}

function ListItemTimeContainer1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="List item time container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#717680] text-[11px] text-nowrap">23m</p>
    </div>
  );
}

function ListItemTextWrapper1() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-end justify-end min-h-px min-w-px relative shrink-0" data-name="List item text wrapper">
      <ListItemTextContent1 />
      <ListItemTimeContainer1 />
    </div>
  );
}

function ListItemTextContainer1() {
  return (
    <div className="content-stretch flex gap-[12px] items-end justify-end relative shrink-0 w-full" data-name="List item text container">
      <ListItemTextWrapper1 />
    </div>
  );
}

function TextAndSupportingText1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text and supporting text">
      <TextAndSubtext1 />
      <ListItemTextContainer1 />
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

function ListItemWrapper1() {
  return (
    <div className="bg-[#fafafa] relative rounded-[8px] shrink-0 w-full" data-name="List item wrapper">
      <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative w-full">
        <FeedItemBase1 />
      </div>
    </div>
  );
}

function ListItemContainer1() {
  return (
    <div className="relative shrink-0 w-full" data-name="List item container">
      <div className="content-stretch flex flex-col items-start px-[4px] py-0 relative w-full">
        <ListItemWrapper1 />
      </div>
    </div>
  );
}

function AvatarIconContainer1() {
  return (
    <div className="absolute inset-[12.5%_17.8%_12.5%_15.63%]" data-name="Avatar icon container">
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
      <AvatarIconContainer1 />
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

function ListItemTextInnerWrapper2() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="List item text inner wrapper">
      <p className="-webkit-box basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#414651] text-[12px]">91516212</p>
    </div>
  );
}

function ListItemTextInnerContainer2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="List item text inner container">
      <ListItemTextInnerWrapper2 />
    </div>
  );
}

function ListItemTextContent2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="List item text content">
      <ListItemTextInnerContainer2 />
    </div>
  );
}

function ListItemTimeContainer2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="List item time container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#717680] text-[11px] text-nowrap">26m</p>
    </div>
  );
}

function ListItemTextWrapper2() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-end justify-end min-h-px min-w-px relative shrink-0" data-name="List item text wrapper">
      <ListItemTextContent2 />
      <ListItemTimeContainer2 />
    </div>
  );
}

function ListItemTextContainer2() {
  return (
    <div className="content-stretch flex gap-[12px] items-end justify-end relative shrink-0 w-full" data-name="List item text container">
      <ListItemTextWrapper2 />
    </div>
  );
}

function TextAndSupportingText2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text and supporting text">
      <TextAndSubtext2 />
      <ListItemTextContainer2 />
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

function ListItemWrapper2() {
  return (
    <div className="bg-[#fafafa] relative rounded-[8px] shrink-0 w-full" data-name="List item wrapper">
      <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative w-full">
        <FeedItemBase2 />
      </div>
    </div>
  );
}

function ListItemWrapper3() {
  return (
    <div className="relative shrink-0 w-full" data-name="List item wrapper">
      <div className="content-stretch flex flex-col items-start px-[4px] py-0 relative w-full">
        <ListItemWrapper2 />
      </div>
    </div>
  );
}

function AvatarIconContainer2() {
  return (
    <div className="absolute inset-[21.88%_26.99%_21.88%_28.13%]" data-name="Avatar icon container">
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
      <AvatarIconContainer2 />
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

function ListItemTextInnerWrapper3() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="List item text inner wrapper">
      <p className="-webkit-box basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#414651] text-[12px]">97239152</p>
    </div>
  );
}

function ListItemTextInnerContainer3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="List item text inner container">
      <ListItemTextInnerWrapper3 />
    </div>
  );
}

function ListItemTextContent3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="List item text content">
      <ListItemTextInnerContainer3 />
    </div>
  );
}

function ListItemTimeContainer3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="List item time container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#717680] text-[11px] text-nowrap">27m</p>
    </div>
  );
}

function ListItemTextWrapper3() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-end justify-end min-h-px min-w-px relative shrink-0" data-name="List item text wrapper">
      <ListItemTextContent3 />
      <ListItemTimeContainer3 />
    </div>
  );
}

function ListItemTextContainer3() {
  return (
    <div className="content-stretch flex gap-[12px] items-end justify-end relative shrink-0 w-full" data-name="List item text container">
      <ListItemTextWrapper3 />
    </div>
  );
}

function TextAndSupportingText3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text and supporting text">
      <TextAndSubtext3 />
      <ListItemTextContainer3 />
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

function ListItemWrapper4() {
  return (
    <div className="bg-[#fafafa] relative rounded-[8px] shrink-0 w-full" data-name="List item wrapper">
      <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative w-full">
        <FeedItemBase3 />
      </div>
    </div>
  );
}

function ListItemWrapper5() {
  return (
    <div className="relative shrink-0 w-full" data-name="List item wrapper">
      <div className="content-stretch flex flex-col items-start px-[4px] py-0 relative w-full">
        <ListItemWrapper4 />
      </div>
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

function ListItemTextInnerWrapper4() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="List item text inner wrapper">
      <p className="-webkit-box basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#414651] text-[12px]">47123358</p>
    </div>
  );
}

function ListItemTextInnerContainer4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="List item text inner container">
      <ListItemTextInnerWrapper4 />
    </div>
  );
}

function ListItemTextContent4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="List item text content">
      <ListItemTextInnerContainer4 />
    </div>
  );
}

function ListItemTimeContainer4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="List item time container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#717680] text-[11px] text-nowrap">24m</p>
    </div>
  );
}

function ListItemTextWrapper4() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-end justify-end min-h-px min-w-px relative shrink-0" data-name="List item text wrapper">
      <ListItemTextContent4 />
      <ListItemTimeContainer4 />
    </div>
  );
}

function ListItemTextContainer4() {
  return (
    <div className="content-stretch flex gap-[12px] items-end justify-end relative shrink-0 w-full" data-name="List item text container">
      <ListItemTextWrapper4 />
    </div>
  );
}

function TextAndSupportingText4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text and supporting text">
      <TextAndSubtext4 />
      <ListItemTextContainer4 />
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

function ListItemWrapper6() {
  return (
    <div className="bg-[#fafafa] relative rounded-[8px] shrink-0 w-full" data-name="List item wrapper">
      <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative w-full">
        <FeedItemBase4 />
      </div>
    </div>
  );
}

function ListItemWrapper7() {
  return (
    <div className="relative shrink-0 w-full" data-name="List item wrapper">
      <div className="content-stretch flex flex-col items-start px-[4px] py-0 relative w-full">
        <ListItemWrapper6 />
      </div>
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

function ListItemTextInnerWrapper5() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="List item text inner wrapper">
      <p className="-webkit-box basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#414651] text-[12px]">39810513</p>
    </div>
  );
}

function ListItemTextInnerContainer5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="List item text inner container">
      <ListItemTextInnerWrapper5 />
    </div>
  );
}

function ListItemTextContent5() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="List item text content">
      <ListItemTextInnerContainer5 />
    </div>
  );
}

function ListItemTimeContainer5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="List item time container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#717680] text-[11px] text-nowrap">In 30m</p>
    </div>
  );
}

function ListItemTextWrapper5() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-end justify-end min-h-px min-w-px relative shrink-0" data-name="List item text wrapper">
      <ListItemTextContent5 />
      <ListItemTimeContainer5 />
    </div>
  );
}

function ListItemTextContainer5() {
  return (
    <div className="content-stretch flex gap-[12px] items-end justify-end relative shrink-0 w-full" data-name="List item text container">
      <ListItemTextWrapper5 />
    </div>
  );
}

function TextAndSupportingText5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text and supporting text">
      <TextAndSubtext5 />
      <ListItemTextContainer5 />
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

function ListItemWrapper8() {
  return (
    <div className="bg-[#fafafa] relative rounded-[8px] shrink-0 w-full" data-name="List item wrapper">
      <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative w-full">
        <FeedItemBase5 />
      </div>
    </div>
  );
}

function ListItemWrapper9() {
  return (
    <div className="relative shrink-0 w-full" data-name="List item wrapper">
      <div className="content-stretch flex flex-col items-start px-[4px] py-0 relative w-full">
        <ListItemWrapper8 />
      </div>
    </div>
  );
}

function AvatarIconContainer3() {
  return (
    <div className="absolute inset-[12.5%_17.8%_12.5%_15.63%]" data-name="Avatar icon container">
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
      <AvatarIconContainer3 />
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

function ListItemTextInnerWrapper6() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="List item text inner wrapper">
      <p className="-webkit-box basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#414651] text-[12px]">91516212</p>
    </div>
  );
}

function ListItemTextInnerContainer6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="List item text inner container">
      <ListItemTextInnerWrapper6 />
    </div>
  );
}

function ListItemTextContent6() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="List item text content">
      <ListItemTextInnerContainer6 />
    </div>
  );
}

function ListItemTimeContainer6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="List item time container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#717680] text-[11px] text-nowrap">In 30m</p>
    </div>
  );
}

function ListItemTextWrapper6() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-end justify-end min-h-px min-w-px relative shrink-0" data-name="List item text wrapper">
      <ListItemTextContent6 />
      <ListItemTimeContainer6 />
    </div>
  );
}

function ListItemTextContainer6() {
  return (
    <div className="content-stretch flex gap-[12px] items-end justify-end relative shrink-0 w-full" data-name="List item text container">
      <ListItemTextWrapper6 />
    </div>
  );
}

function TextAndSupportingText6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text and supporting text">
      <TextAndSubtext6 />
      <ListItemTextContainer6 />
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

function ListItemWrapper10() {
  return (
    <div className="bg-[#fafafa] relative rounded-[8px] shrink-0 w-full" data-name="List item wrapper">
      <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative w-full">
        <FeedItemBase6 />
      </div>
    </div>
  );
}

function ListItemWrapper11() {
  return (
    <div className="relative shrink-0 w-full" data-name="List item wrapper">
      <div className="content-stretch flex flex-col items-start px-[4px] py-0 relative w-full">
        <ListItemWrapper10 />
      </div>
    </div>
  );
}

function AvatarIconContainer4() {
  return (
    <div className="absolute inset-[12.5%_28.6%_12.5%_28.13%]" data-name="Avatar icon container">
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
      <AvatarIconContainer4 />
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

function ListItemTextInnerWrapper7() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="List item text inner wrapper">
      <p className="-webkit-box basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#414651] text-[12px]">46237862</p>
    </div>
  );
}

function ListItemTextInnerContainer7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="List item text inner container">
      <ListItemTextInnerWrapper7 />
    </div>
  );
}

function ListItemTextContent7() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="List item text content">
      <ListItemTextInnerContainer7 />
    </div>
  );
}

function ListItemTimeContainer7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="List item time container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#717680] text-[11px] text-nowrap">In 30m</p>
    </div>
  );
}

function ListItemTextWrapper7() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-end justify-end min-h-px min-w-px relative shrink-0" data-name="List item text wrapper">
      <ListItemTextContent7 />
      <ListItemTimeContainer7 />
    </div>
  );
}

function ListItemTextContainer7() {
  return (
    <div className="content-stretch flex gap-[12px] items-end justify-end relative shrink-0 w-full" data-name="List item text container">
      <ListItemTextWrapper7 />
    </div>
  );
}

function TextAndSupportingText7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text and supporting text">
      <TextAndSubtext7 />
      <ListItemTextContainer7 />
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

function ListItemWrapper12() {
  return (
    <div className="bg-[#fafafa] relative rounded-[8px] shrink-0 w-full" data-name="List item wrapper">
      <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative w-full">
        <FeedItemBase7 />
      </div>
    </div>
  );
}

function ListItemWrapper13() {
  return (
    <div className="relative shrink-0 w-full" data-name="List item wrapper">
      <div className="content-stretch flex flex-col items-start px-[4px] py-0 relative w-full">
        <ListItemWrapper12 />
      </div>
    </div>
  );
}

function AvatarIconContainer5() {
  return (
    <div className="absolute inset-[12.5%_28.6%_12.5%_28.13%]" data-name="Avatar icon container">
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
      <AvatarIconContainer5 />
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

function ListItemTextInnerWrapper8() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="List item text inner wrapper">
      <p className="-webkit-box basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#414651] text-[12px]">90231841</p>
    </div>
  );
}

function ListItemTextInnerContainer8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="List item text inner container">
      <ListItemTextInnerWrapper8 />
    </div>
  );
}

function ListItemTextContent8() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="List item text content">
      <ListItemTextInnerContainer8 />
    </div>
  );
}

function ListItemTimeContainer8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="List item time container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#717680] text-[11px] text-nowrap">In 30m</p>
    </div>
  );
}

function ListItemTextWrapper8() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-end justify-end min-h-px min-w-px relative shrink-0" data-name="List item text wrapper">
      <ListItemTextContent8 />
      <ListItemTimeContainer8 />
    </div>
  );
}

function ListItemTextContainer8() {
  return (
    <div className="content-stretch flex gap-[12px] items-end justify-end relative shrink-0 w-full" data-name="List item text container">
      <ListItemTextWrapper8 />
    </div>
  );
}

function TextAndSupportingText8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text and supporting text">
      <TextAndSubtext8 />
      <ListItemTextContainer8 />
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

function ListItemWrapper14() {
  return (
    <div className="bg-[#fafafa] relative rounded-[8px] shrink-0 w-full" data-name="List item wrapper">
      <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative w-full">
        <FeedItemBase8 />
      </div>
    </div>
  );
}

function ListItemWrapper15() {
  return (
    <div className="relative shrink-0 w-full" data-name="List item wrapper">
      <div className="content-stretch flex flex-col items-start px-[4px] py-0 relative w-full">
        <ListItemWrapper14 />
      </div>
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

function ListItemTextInnerWrapper9() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="List item text inner wrapper">
      <p className="-webkit-box basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#414651] text-[12px]">47123358</p>
    </div>
  );
}

function ListItemTextInnerContainer9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="List item text inner container">
      <ListItemTextInnerWrapper9 />
    </div>
  );
}

function ListItemTextContent9() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="List item text content">
      <ListItemTextInnerContainer9 />
    </div>
  );
}

function ListItemTimeContainer9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="List item time container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#717680] text-[11px] text-nowrap">In 40m</p>
    </div>
  );
}

function ListItemTextWrapper9() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-end justify-end min-h-px min-w-px relative shrink-0" data-name="List item text wrapper">
      <ListItemTextContent9 />
      <ListItemTimeContainer9 />
    </div>
  );
}

function ListItemTextContainer9() {
  return (
    <div className="content-stretch flex gap-[12px] items-end justify-end relative shrink-0 w-full" data-name="List item text container">
      <ListItemTextWrapper9 />
    </div>
  );
}

function TextAndSupportingText9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text and supporting text">
      <TextAndSubtext9 />
      <ListItemTextContainer9 />
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

function ListItemWrapper16() {
  return (
    <div className="bg-[#fafafa] relative rounded-[8px] shrink-0 w-full" data-name="List item wrapper">
      <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative w-full">
        <FeedItemBase9 />
      </div>
    </div>
  );
}

function ListItemWrapper17() {
  return (
    <div className="relative shrink-0 w-full" data-name="List item wrapper">
      <div className="content-stretch flex flex-col items-start px-[4px] py-0 relative w-full">
        <ListItemWrapper16 />
      </div>
    </div>
  );
}

function AvatarIconContainer6() {
  return (
    <div className="absolute inset-[21.88%_26.99%_21.88%_28.13%]" data-name="Avatar icon container">
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
      <AvatarIconContainer6 />
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

function ListItemTextInnerWrapper10() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="List item text inner wrapper">
      <p className="-webkit-box basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#414651] text-[12px]">97239152</p>
    </div>
  );
}

function ListItemTextInnerContainer10() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="List item text inner container">
      <ListItemTextInnerWrapper10 />
    </div>
  );
}

function ListItemTextContent10() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="List item text content">
      <ListItemTextInnerContainer10 />
    </div>
  );
}

function ListItemTimeContainer10() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="List item time container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#717680] text-[11px] text-nowrap">In 40m</p>
    </div>
  );
}

function ListItemTextWrapper10() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-end justify-end min-h-px min-w-px relative shrink-0" data-name="List item text wrapper">
      <ListItemTextContent10 />
      <ListItemTimeContainer10 />
    </div>
  );
}

function ListItemTextContainer10() {
  return (
    <div className="content-stretch flex gap-[12px] items-end justify-end relative shrink-0 w-full" data-name="List item text container">
      <ListItemTextWrapper10 />
    </div>
  );
}

function TextAndSupportingText10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text and supporting text">
      <TextAndSubtext10 />
      <ListItemTextContainer10 />
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

function ListItemWrapper18() {
  return (
    <div className="bg-[#fafafa] relative rounded-[8px] shrink-0 w-full" data-name="List item wrapper">
      <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative w-full">
        <FeedItemBase10 />
      </div>
    </div>
  );
}

function ListItemWrapper19() {
  return (
    <div className="relative shrink-0 w-full" data-name="List item wrapper">
      <div className="content-stretch flex flex-col items-start px-[4px] py-0 relative w-full">
        <ListItemWrapper18 />
      </div>
    </div>
  );
}

function AvatarIconContainer7() {
  return (
    <div className="absolute inset-[12.5%_28.6%_12.5%_28.13%]" data-name="Avatar icon container">
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
      <AvatarIconContainer7 />
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

function ListItemTextInnerWrapper11() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="List item text inner wrapper">
      <p className="-webkit-box basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#414651] text-[12px]">68343452</p>
    </div>
  );
}

function ListItemTextInnerContainer11() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="List item text inner container">
      <ListItemTextInnerWrapper11 />
    </div>
  );
}

function ListItemTextContent11() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="List item text content">
      <ListItemTextInnerContainer11 />
    </div>
  );
}

function ListItemTimeContainer11() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="List item time container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#717680] text-[11px] text-nowrap">In 40m</p>
    </div>
  );
}

function ListItemTextWrapper11() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-end justify-end min-h-px min-w-px relative shrink-0" data-name="List item text wrapper">
      <ListItemTextContent11 />
      <ListItemTimeContainer11 />
    </div>
  );
}

function ListItemTextContainer11() {
  return (
    <div className="content-stretch flex gap-[12px] items-end justify-end relative shrink-0 w-full" data-name="List item text container">
      <ListItemTextWrapper11 />
    </div>
  );
}

function TextAndSupportingText11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text and supporting text">
      <TextAndSubtext11 />
      <ListItemTextContainer11 />
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

function ListItemWrapper20() {
  return (
    <div className="bg-[#fafafa] relative rounded-[8px] shrink-0 w-full" data-name="List item wrapper">
      <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative w-full">
        <FeedItemBase11 />
      </div>
    </div>
  );
}

function ListItemWrapper21() {
  return (
    <div className="relative shrink-0 w-full" data-name="List item wrapper">
      <div className="content-stretch flex flex-col items-start px-[4px] py-0 relative w-full">
        <ListItemWrapper20 />
      </div>
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

function ListItemTextInnerWrapper12() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="List item text inner wrapper">
      <p className="-webkit-box basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#414651] text-[12px]">39810513</p>
    </div>
  );
}

function ListItemTextInnerContainer12() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="List item text inner container">
      <ListItemTextInnerWrapper12 />
    </div>
  );
}

function ListItemTextContent12() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="List item text content">
      <ListItemTextInnerContainer12 />
    </div>
  );
}

function ListItemTimeContainer12() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="List item time container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#717680] text-[11px] text-nowrap">In 40m</p>
    </div>
  );
}

function ListItemTextWrapper12() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-end justify-end min-h-px min-w-px relative shrink-0" data-name="List item text wrapper">
      <ListItemTextContent12 />
      <ListItemTimeContainer12 />
    </div>
  );
}

function ListItemTextContainer12() {
  return (
    <div className="content-stretch flex gap-[12px] items-end justify-end relative shrink-0 w-full" data-name="List item text container">
      <ListItemTextWrapper12 />
    </div>
  );
}

function TextAndSupportingText12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text and supporting text">
      <TextAndSubtext12 />
      <ListItemTextContainer12 />
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

function ListItemWrapper22() {
  return (
    <div className="bg-[#fafafa] relative rounded-[8px] shrink-0 w-full" data-name="List item wrapper">
      <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative w-full">
        <FeedItemBase12 />
      </div>
    </div>
  );
}

function ListItemWrapper23() {
  return (
    <div className="relative shrink-0 w-full" data-name="List item wrapper">
      <div className="content-stretch flex flex-col items-start px-[4px] py-0 relative w-full">
        <ListItemWrapper22 />
      </div>
    </div>
  );
}

function AvatarIconContainer8() {
  return (
    <div className="absolute inset-[12.5%_17.8%_12.5%_15.63%]" data-name="Avatar icon container">
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
      <AvatarIconContainer8 />
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

function ListItemTextInnerWrapper13() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="List item text inner wrapper">
      <p className="-webkit-box basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#414651] text-[12px]">91516212</p>
    </div>
  );
}

function ListItemTextInnerContainer13() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="List item text inner container">
      <ListItemTextInnerWrapper13 />
    </div>
  );
}

function ListItemTextContent13() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="List item text content">
      <ListItemTextInnerContainer13 />
    </div>
  );
}

function ListItemTimeContainer13() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="List item time container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#717680] text-[11px] text-nowrap">In 60m</p>
    </div>
  );
}

function ListItemTextWrapper13() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-end justify-end min-h-px min-w-px relative shrink-0" data-name="List item text wrapper">
      <ListItemTextContent13 />
      <ListItemTimeContainer13 />
    </div>
  );
}

function ListItemTextContainer13() {
  return (
    <div className="content-stretch flex gap-[12px] items-end justify-end relative shrink-0 w-full" data-name="List item text container">
      <ListItemTextWrapper13 />
    </div>
  );
}

function TextAndSupportingText13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text and supporting text">
      <TextAndSubtext13 />
      <ListItemTextContainer13 />
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

function ListItemWrapper24() {
  return (
    <div className="bg-[#fafafa] relative rounded-[8px] shrink-0 w-full" data-name="List item wrapper">
      <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative w-full">
        <FeedItemBase13 />
      </div>
    </div>
  );
}

function ListItemWrapper25() {
  return (
    <div className="relative shrink-0 w-full" data-name="List item wrapper">
      <div className="content-stretch flex flex-col items-start px-[4px] py-0 relative w-full">
        <ListItemWrapper24 />
      </div>
    </div>
  );
}

function AvatarIconContainer9() {
  return (
    <div className="absolute inset-[12.5%_28.6%_12.5%_28.13%]" data-name="Avatar icon container">
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
      <AvatarIconContainer9 />
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

function ListItemTextInnerWrapper14() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="List item text inner wrapper">
      <p className="-webkit-box basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#414651] text-[12px]">56823412</p>
    </div>
  );
}

function ListItemTextInnerContainer14() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="List item text inner container">
      <ListItemTextInnerWrapper14 />
    </div>
  );
}

function ListItemTextContent14() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="List item text content">
      <ListItemTextInnerContainer14 />
    </div>
  );
}

function ListItemTimeContainer14() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="List item time container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#717680] text-[11px] text-nowrap">In 60m</p>
    </div>
  );
}

function ListItemTextWrapper14() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-end justify-end min-h-px min-w-px relative shrink-0" data-name="List item text wrapper">
      <ListItemTextContent14 />
      <ListItemTimeContainer14 />
    </div>
  );
}

function ListItemTextContainer14() {
  return (
    <div className="content-stretch flex gap-[12px] items-end justify-end relative shrink-0 w-full" data-name="List item text container">
      <ListItemTextWrapper14 />
    </div>
  );
}

function TextAndSupportingText14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text and supporting text">
      <TextAndSubtext14 />
      <ListItemTextContainer14 />
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

function ListItemWrapper26() {
  return (
    <div className="bg-[#fafafa] relative rounded-[8px] shrink-0 w-full" data-name="List item wrapper">
      <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative w-full">
        <FeedItemBase14 />
      </div>
    </div>
  );
}

function ListItemWrapper27() {
  return (
    <div className="relative shrink-0 w-full" data-name="List item wrapper">
      <div className="content-stretch flex flex-col items-start px-[4px] py-0 relative w-full">
        <ListItemWrapper26 />
      </div>
    </div>
  );
}

function ListWrapper() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="List wrapper">
      <ListItemContainer />
      <ListItemContainer1 />
      <ListItemWrapper3 />
      <ListItemWrapper5 />
      <ListItemWrapper7 />
      <ListItemWrapper9 />
      <ListItemWrapper11 />
      <ListItemWrapper13 />
      <ListItemWrapper15 />
      <ListItemWrapper17 />
      <ListItemWrapper19 />
      <ListItemWrapper21 />
      <ListItemWrapper23 />
      <ListItemWrapper25 />
      <ListItemWrapper27 />
    </div>
  );
}

function ListContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="List container">
      <ListWrapper />
    </div>
  );
}

function SearchAndListContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Search and list container">
      <SearchContainer />
      <ListContainer />
    </div>
  );
}

function ContentContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content container">
      <TabsContainer />
      <SearchAndListContainer />
    </div>
  );
}

export default function MainContainer() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col gap-[12px] items-start px-0 py-[12px] relative size-full" data-name="Main container">
      <HeaderContainer />
      <ContentContainer />
    </div>
  );
}