function Frame() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#414651] text-[13px] w-full">Transcript</p>
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
        <div className="content-stretch flex items-center px-[18.725px] py-0 relative w-full">
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function Frame101() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 px-0 py-[4px] top-0 w-[634px]">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-[1px_0px] border-solid inset-0 pointer-events-none" />
      <Frame2 />
    </div>
  );
}

function Frame109() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex items-start px-[18.725px] py-0 relative w-full">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#717680] text-[13px] text-center text-nowrap">Phone rings</p>
      </div>
    </div>
  );
}

function Frame102() {
  return (
    <div className="content-stretch flex gap-[4.681px] items-start relative shrink-0">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#253382] text-[12px] text-center text-nowrap">IVR System</p>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Header">
      <Frame102 />
    </div>
  );
}

function Frame115() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Header />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal gap-[4.681px] items-start leading-[1.5] relative rounded-[9.363px] shrink-0 text-[#181d27] text-[13px] w-full">
      <p className="relative shrink-0 w-full">Thank you for calling United Healthcare Specialty Pharmacy Services. Para español, oprima el dos.</p>
      <p className="relative shrink-0 w-full">{`For your security, this call may be monitored or recorded. Please listen carefully as our menu options have changed. `}</p>
      <p className="relative shrink-0 w-full">If you are a patient calling about a prescription, press 1.</p>
      <p className="relative shrink-0 w-full">If you are a healthcare provider, press 2.</p>
      <p className="relative shrink-0 w-full">For all other inquiries, press 3.</p>
    </div>
  );
}

function Frame120() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame6 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2.341px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame115 />
      <Frame120 />
    </div>
  );
}

function Frame112() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex gap-[14.044px] items-start px-[18.725px] py-0 relative w-full">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#717680] text-[11px] text-center text-nowrap">00:05</p>
        <Frame3 />
      </div>
    </div>
  );
}

function Frame103() {
  return (
    <div className="content-stretch flex gap-[4.681px] items-start relative shrink-0">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#871b4c] text-[12px] text-center text-nowrap" dir="auto">
        FRM Agent
      </p>
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Header">
      <Frame103 />
    </div>
  );
}

function Frame122() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Header1 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[4.681px] items-start relative rounded-[9.363px] shrink-0 w-full">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#181d27] text-[13px] w-full">2</p>
    </div>
  );
}

function Frame159() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame7 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2.341px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame122 />
      <Frame159 />
    </div>
  );
}

function Frame113() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex gap-[14.044px] items-start px-[18.725px] py-0 relative w-full">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#717680] text-[11px] text-center text-nowrap">00:10</p>
        <Frame4 />
      </div>
    </div>
  );
}

function Frame104() {
  return (
    <div className="content-stretch flex gap-[4.681px] items-start relative shrink-0">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#253382] text-[12px] text-center text-nowrap">IVR System</p>
    </div>
  );
}

function Header2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Header">
      <Frame104 />
    </div>
  );
}

function Frame162() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Header2 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal gap-[4.681px] items-start leading-[1.5] relative rounded-[9.363px] shrink-0 text-[#181d27] text-[13px] w-full">
      <p className="relative shrink-0 w-full">You have reached the healthcare provider line.</p>
      <p className="relative shrink-0 w-full">If you are calling to submit a new prior authorization, press 1.</p>
      <p className="relative shrink-0 w-full">If you are calling to check the status of an existing prior authorization, press 2.</p>
      <p className="relative shrink-0 w-full">For pharmacy network questions, press 3.</p>
      <p className="relative shrink-0 w-full">To speak with a representative, press 0.</p>
    </div>
  );
}

function Frame163() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame8 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2.341px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame162 />
      <Frame163 />
    </div>
  );
}

function Frame114() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex gap-[14.044px] items-start px-[18.725px] py-0 relative w-full">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#717680] text-[11px] text-center text-nowrap">00:12</p>
        <Frame5 />
      </div>
    </div>
  );
}

function Frame105() {
  return (
    <div className="content-stretch flex gap-[4.681px] items-start relative shrink-0">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#871b4c] text-[12px] text-center text-nowrap" dir="auto">
        FRM Agent
      </p>
    </div>
  );
}

function Header3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Header">
      <Frame105 />
    </div>
  );
}

function Frame164() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Header3 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[4.681px] items-start relative rounded-[9.363px] shrink-0 w-full">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#181d27] text-[13px] w-full">2</p>
    </div>
  );
}

function Frame165() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame9 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2.341px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame164 />
      <Frame165 />
    </div>
  );
}

function Frame166() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex gap-[14.044px] items-start px-[18.725px] py-0 relative w-full">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#717680] text-[11px] text-center text-nowrap">00:30</p>
        <Frame10 />
      </div>
    </div>
  );
}

function Frame106() {
  return (
    <div className="content-stretch flex gap-[4.681px] items-start relative shrink-0">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#253382] text-[12px] text-center text-nowrap">IVR System</p>
    </div>
  );
}

function Header4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Header">
      <Frame106 />
    </div>
  );
}

function Frame167() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Header4 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal gap-[4.681px] items-start leading-[1.5] relative rounded-[9.363px] shrink-0 text-[#181d27] text-[13px] w-full">
      <p className="relative shrink-0 w-full">{`To help us locate your prior authorization, please enter the patient's member ID number followed by the pound key.`}</p>
      <p className="relative shrink-0 w-full">{`You can find this on the patient's insurance card.`}</p>
    </div>
  );
}

function Frame168() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame11 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2.341px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame167 />
      <Frame168 />
    </div>
  );
}

function Frame116() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex gap-[14.044px] items-start px-[18.725px] py-0 relative w-full">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#717680] text-[11px] text-center text-nowrap">00:35</p>
        <Frame12 />
      </div>
    </div>
  );
}

function Frame107() {
  return (
    <div className="content-stretch flex gap-[4.681px] items-start relative shrink-0">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#871b4c] text-[12px] text-center text-nowrap" dir="auto">
        FRM Agent
      </p>
    </div>
  );
}

function Header5() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Header">
      <Frame107 />
    </div>
  );
}

function Frame169() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Header5 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[4.681px] items-start relative rounded-[9.363px] shrink-0 w-full">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#181d27] text-[13px] w-full">987654321#</p>
    </div>
  );
}

function Frame170() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame13 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2.341px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame169 />
      <Frame170 />
    </div>
  );
}

function Frame117() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex gap-[14.044px] items-start px-[18.725px] py-0 relative w-full">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#717680] text-[11px] text-center text-nowrap">00:45</p>
        <Frame14 />
      </div>
    </div>
  );
}

function Frame108() {
  return (
    <div className="content-stretch flex gap-[4.681px] items-start relative shrink-0">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#253382] text-[12px] text-center text-nowrap">IVR System</p>
    </div>
  );
}

function Header6() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Header">
      <Frame108 />
    </div>
  );
}

function Frame171() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Header6 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal gap-[4.681px] items-start leading-[1.5] relative rounded-[9.363px] shrink-0 text-[#181d27] text-[13px] w-full">
      <p className="relative shrink-0 w-full">You entered 9-8-7-6-5-4-3-2-1</p>
      <p className="relative shrink-0 w-full">If this is correct, press 1.</p>
      <p className="relative shrink-0 w-full">To re-enter, press 2.</p>
    </div>
  );
}

function Frame172() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame15 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2.341px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame171 />
      <Frame172 />
    </div>
  );
}

function Frame118() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex gap-[14.044px] items-start px-[18.725px] py-0 relative w-full">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#717680] text-[11px] text-center text-nowrap">00:50</p>
        <Frame16 />
      </div>
    </div>
  );
}

function Frame110() {
  return (
    <div className="content-stretch flex gap-[4.681px] items-start relative shrink-0">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#871b4c] text-[12px] text-center text-nowrap" dir="auto">
        FRM Agent
      </p>
    </div>
  );
}

function Header7() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Header">
      <Frame110 />
    </div>
  );
}

function Frame173() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Header7 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[4.681px] items-start relative rounded-[9.363px] shrink-0 w-full">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#181d27] text-[13px] w-full">1</p>
    </div>
  );
}

function Frame174() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame17 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2.341px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame173 />
      <Frame174 />
    </div>
  );
}

function Frame119() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex gap-[14.044px] items-start px-[18.725px] py-0 relative w-full">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#717680] text-[11px] text-center text-nowrap">01:04</p>
        <Frame18 />
      </div>
    </div>
  );
}

function Frame111() {
  return (
    <div className="content-stretch flex gap-[4.681px] items-start relative shrink-0">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#253382] text-[12px] text-center text-nowrap">IVR System</p>
    </div>
  );
}

function Header8() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Header">
      <Frame111 />
    </div>
  );
}

function Frame175() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Header8 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal gap-[4.681px] items-start leading-[1.5] relative rounded-[9.363px] shrink-0 text-[#181d27] text-[13px] w-full">
      <p className="relative shrink-0 w-full">Thank you. Please hold while we connect you to a representative.</p>
      <p className="relative shrink-0 w-full">Your estimated wait time is approximately 30 minutes.</p>
    </div>
  );
}

function Frame176() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame19 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2.341px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame175 />
      <Frame176 />
    </div>
  );
}

function Frame177() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex gap-[14.044px] items-start px-[18.725px] py-0 relative w-full">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#717680] text-[11px] text-center text-nowrap">01:10</p>
        <Frame20 />
      </div>
    </div>
  );
}

function Frame178() {
  return (
    <div className="content-stretch flex gap-[4.681px] items-start relative shrink-0">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#253382] text-[12px] text-center text-nowrap">Payer Rep</p>
    </div>
  );
}

function Header9() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Header">
      <Frame178 />
    </div>
  );
}

function Frame179() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Header9 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal gap-[4.681px] items-start leading-[1.5] relative rounded-[9.363px] shrink-0 text-[#181d27] text-[13px] w-full">
      <p className="relative shrink-0 w-full">Thank you for holding</p>
      <p className="relative shrink-0 w-full">his is James Wilson with United Healthcare Specialty Pharmacy Services.</p>
      <p className="relative shrink-0 w-full">May I have your name and your relationship to the patient?</p>
    </div>
  );
}

function Frame180() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame21 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2.341px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame179 />
      <Frame180 />
    </div>
  );
}

function Frame123() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex gap-[14.044px] items-start px-[18.725px] py-0 relative w-full">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#717680] text-[11px] text-center text-nowrap">32:15</p>
        <Frame22 />
      </div>
    </div>
  );
}

function Frame181() {
  return (
    <div className="content-stretch flex gap-[4.681px] items-start relative shrink-0">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#871b4c] text-[12px] text-center text-nowrap" dir="auto">
        FRM Agent
      </p>
    </div>
  );
}

function Header10() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Header">
      <Frame181 />
    </div>
  );
}

function Frame182() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Header10 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[4.681px] items-start relative rounded-[9.363px] shrink-0 w-full">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#181d27] text-[13px] w-full">Yes, hi James. I am the automated assistant at Phluence.</p>
    </div>
  );
}

function Frame183() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame23 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[4.681px] items-start relative rounded-[9.363px] shrink-0 w-full">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#181d27] text-[13px] w-full">{`I'm calling on the request of Dr. Sarah Chen's office. Dr. Chen is the prescribing physician.`}</p>
    </div>
  );
}

function Frame121() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame24 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2.341px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame182 />
      <Frame183 />
      <Frame121 />
    </div>
  );
}

function Frame124() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex gap-[14.044px] items-start px-[18.725px] py-0 relative w-full">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#717680] text-[11px] text-center text-nowrap">32:45</p>
        <Frame25 />
      </div>
    </div>
  );
}

function Frame184() {
  return (
    <div className="content-stretch flex gap-[4.681px] items-start relative shrink-0">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#253382] text-[12px] text-center text-nowrap">Payer Rep : James Wilson</p>
    </div>
  );
}

function Header11() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Header">
      <Frame184 />
    </div>
  );
}

function Frame185() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Header11 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[4.681px] items-start relative rounded-[9.363px] shrink-0 w-full">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#181d27] text-[13px] w-full">{`Thank you. Can you confirm the patient's name and date of birth for verification purposes?`}</p>
    </div>
  );
}

function Frame186() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame26 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2.341px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame185 />
      <Frame186 />
    </div>
  );
}

function Frame125() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex gap-[14.044px] items-start px-[18.725px] py-0 relative w-full">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#717680] text-[11px] text-center text-nowrap">33:05</p>
        <Frame27 />
      </div>
    </div>
  );
}

function Frame187() {
  return (
    <div className="content-stretch flex gap-[4.681px] items-start relative shrink-0">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#871b4c] text-[12px] text-center text-nowrap" dir="auto">
        FRM Agent
      </p>
    </div>
  );
}

function Header12() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Header">
      <Frame187 />
    </div>
  );
}

function Frame188() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Header12 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[4.681px] items-start relative rounded-[9.363px] shrink-0 w-full">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#181d27] text-[13px] w-full">Yes, hi James. I am the automated assistant at Phluence.</p>
    </div>
  );
}

function Frame189() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame28 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col gap-[4.681px] items-start relative rounded-[9.363px] shrink-0 w-full">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#181d27] text-[13px] w-full">{`I'm calling on the request of Dr. Sarah Chen's office. Dr. Chen is the prescribing physician.`}</p>
    </div>
  );
}

function Frame190() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame29 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2.341px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame188 />
      <Frame189 />
      <Frame190 />
    </div>
  );
}

function Frame126() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex gap-[14.044px] items-start px-[18.725px] py-0 relative w-full">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#717680] text-[11px] text-center text-nowrap">33:32</p>
        <Frame30 />
      </div>
    </div>
  );
}

function Frame191() {
  return (
    <div className="content-stretch flex gap-[4.681px] items-start relative shrink-0">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#253382] text-[12px] text-center text-nowrap">Payer Rep : James Wilson</p>
    </div>
  );
}

function Header13() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Header">
      <Frame191 />
    </div>
  );
}

function Frame192() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Header13 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[4.681px] items-start relative rounded-[9.363px] shrink-0 w-full">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#181d27] text-[13px] w-full">{`Thank you. Can you confirm the patient's name and date of birth for verification purposes?`}</p>
    </div>
  );
}

function Frame193() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame31 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2.341px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame192 />
      <Frame193 />
    </div>
  );
}

function Frame127() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex gap-[14.044px] items-start px-[18.725px] py-0 relative w-full">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#717680] text-[11px] text-center text-nowrap">33:40</p>
        <Frame32 />
      </div>
    </div>
  );
}

function Frame194() {
  return (
    <div className="content-stretch flex gap-[4.681px] items-start relative shrink-0">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#871b4c] text-[12px] text-center text-nowrap" dir="auto">
        FRM Agent
      </p>
    </div>
  );
}

function Header14() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Header">
      <Frame194 />
    </div>
  );
}

function Frame195() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Header14 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col gap-[4.681px] items-start relative rounded-[9.363px] shrink-0 w-full">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#181d27] text-[13px] w-full">{`Yes, the patient's name is Robert Thompson, date of birth March 15, 1968.`}</p>
    </div>
  );
}

function Frame196() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame33 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2.341px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame195 />
      <Frame196 />
    </div>
  );
}

function Frame128() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex gap-[14.044px] items-start px-[18.725px] py-0 relative w-full">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#717680] text-[11px] text-center text-nowrap">33:48</p>
        <Frame34 />
      </div>
    </div>
  );
}

function Frame197() {
  return (
    <div className="content-stretch flex gap-[4.681px] items-start relative shrink-0">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#253382] text-[12px] text-center text-nowrap">Payer Rep : James Wilson</p>
    </div>
  );
}

function Header15() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Header">
      <Frame197 />
    </div>
  );
}

function Frame198() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Header15 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col gap-[4.681px] items-start relative rounded-[9.363px] shrink-0 w-full">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#181d27] text-[13px] w-full">Perfect, thank you.</p>
    </div>
  );
}

function Frame199() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame35 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col gap-[4.681px] items-start relative rounded-[9.363px] shrink-0 w-full">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#181d27] text-[13px] w-full">{`I have the patient's record pulled up here. And for security purposes, can you confirm the last four digits of the patient's member ID?`}</p>
    </div>
  );
}

function Frame200() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame36 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2.341px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame198 />
      <Frame199 />
      <Frame200 />
    </div>
  );
}

function Frame129() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex gap-[14.044px] items-start px-[18.725px] py-0 relative w-full">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#717680] text-[11px] text-center text-nowrap">33:55</p>
        <Frame37 />
      </div>
    </div>
  );
}

function Frame201() {
  return (
    <div className="content-stretch flex gap-[4.681px] items-start relative shrink-0">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#871b4c] text-[12px] text-center text-nowrap" dir="auto">
        FRM Agent
      </p>
    </div>
  );
}

function Header16() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Header">
      <Frame201 />
    </div>
  );
}

function Frame202() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Header16 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col gap-[4.681px] items-start relative rounded-[9.363px] shrink-0 w-full">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#181d27] text-[13px] w-full">{`Yes, that's 4321.`}</p>
    </div>
  );
}

function Frame203() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame38 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2.341px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame202 />
      <Frame203 />
    </div>
  );
}

function Frame130() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex gap-[14.044px] items-start px-[18.725px] py-0 relative w-full">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#717680] text-[11px] text-center text-nowrap">34:02</p>
        <Frame39 />
      </div>
    </div>
  );
}

function Frame206() {
  return (
    <div className="content-stretch flex gap-[4.681px] items-start relative shrink-0">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#253382] text-[12px] text-center text-nowrap">Payer Rep : James Wilson</p>
    </div>
  );
}

function Header17() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Header">
      <Frame206 />
    </div>
  );
}

function Frame207() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Header17 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col gap-[4.681px] items-start relative rounded-[9.363px] shrink-0 w-full">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#181d27] text-[13px] w-full">Great, thank you. How can I help you today?</p>
    </div>
  );
}

function Frame208() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame40 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2.341px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame207 />
      <Frame208 />
    </div>
  );
}

function Frame131() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex gap-[14.044px] items-start px-[18.725px] py-0 relative w-full">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#717680] text-[11px] text-center text-nowrap">34:12</p>
        <Frame41 />
      </div>
    </div>
  );
}

function Frame209() {
  return (
    <div className="content-stretch flex gap-[4.681px] items-start relative shrink-0">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#871b4c] text-[12px] text-center text-nowrap" dir="auto">
        FRM Agent
      </p>
    </div>
  );
}

function Header18() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Header">
      <Frame209 />
    </div>
  );
}

function Frame210() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Header18 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-col gap-[4.681px] items-start relative rounded-[9.363px] shrink-0 w-full">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#181d27] text-[13px] w-full">{`We submitted a prior authorization request for Mr. Thompson about a week and a half ago, and we're calling to check on the status. The medication is for a specialty biologic.`}</p>
    </div>
  );
}

function Frame211() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame42 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2.341px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame210 />
      <Frame211 />
    </div>
  );
}

function Frame132() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex gap-[14.044px] items-start px-[18.725px] py-0 relative w-full">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#717680] text-[11px] text-center text-nowrap">34:18</p>
        <Frame43 />
      </div>
    </div>
  );
}

function Frame212() {
  return (
    <div className="content-stretch flex gap-[4.681px] items-start relative shrink-0">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#253382] text-[12px] text-center text-nowrap">Payer Rep : James Wilson</p>
    </div>
  );
}

function Header19() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Header">
      <Frame212 />
    </div>
  );
}

function Frame213() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Header19 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col gap-[4.681px] items-start relative rounded-[9.363px] shrink-0 w-full">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#181d27] text-[13px] w-full">Absolutely, let me pull up the prior authorization details. Can you tell me what medication this is for?</p>
    </div>
  );
}

function Frame214() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame44 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2.341px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame213 />
      <Frame214 />
    </div>
  );
}

function Frame133() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex gap-[14.044px] items-start px-[18.725px] py-0 relative w-full">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#717680] text-[11px] text-center text-nowrap">34:24</p>
        <Frame45 />
      </div>
    </div>
  );
}

function Frame215() {
  return (
    <div className="content-stretch flex gap-[4.681px] items-start relative shrink-0">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#871b4c] text-[12px] text-center text-nowrap" dir="auto">
        FRM Agent
      </p>
    </div>
  );
}

function Header20() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Header">
      <Frame215 />
    </div>
  );
}

function Frame216() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Header20 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-col gap-[4.681px] items-start relative rounded-[9.363px] shrink-0 w-full">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#181d27] text-[13px] w-full">{`It's for Humira, 50 milligrams, subcutaneous injection.`}</p>
    </div>
  );
}

function Frame217() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame46 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2.341px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame216 />
      <Frame217 />
    </div>
  );
}

function Frame134() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex gap-[14.044px] items-start px-[18.725px] py-0 relative w-full">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#717680] text-[11px] text-center text-nowrap">34:29</p>
        <Frame47 />
      </div>
    </div>
  );
}

function Frame218() {
  return (
    <div className="content-stretch flex gap-[4.681px] items-start relative shrink-0">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#253382] text-[12px] text-center text-nowrap">Payer Rep : James Wilson</p>
    </div>
  );
}

function Header21() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Header">
      <Frame218 />
    </div>
  );
}

function Frame219() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Header21 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-col gap-[4.681px] items-start relative rounded-[9.363px] shrink-0 w-full">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#181d27] text-[13px] w-full">{`Got it. Let me search our system here... Okay, I see the prior authorization request. It was submitted on December 23rd, 2025. Is that the one you're inquiring about?`}</p>
    </div>
  );
}

function Frame220() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame48 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2.341px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame219 />
      <Frame220 />
    </div>
  );
}

function Frame135() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex gap-[14.044px] items-start px-[18.725px] py-0 relative w-full">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#717680] text-[11px] text-center text-nowrap">34:42</p>
        <Frame49 />
      </div>
    </div>
  );
}

function Frame221() {
  return (
    <div className="content-stretch flex gap-[4.681px] items-start relative shrink-0">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#871b4c] text-[12px] text-center text-nowrap" dir="auto">
        FRM Agent
      </p>
    </div>
  );
}

function Header22() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Header">
      <Frame221 />
    </div>
  );
}

function Frame222() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Header22 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-col gap-[4.681px] items-start relative rounded-[9.363px] shrink-0 w-full">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#181d27] text-[13px] w-full">{`Yes, that's correct.`}</p>
    </div>
  );
}

function Frame223() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame50 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2.341px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame222 />
      <Frame223 />
    </div>
  );
}

function Frame136() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex gap-[14.044px] items-start px-[18.725px] py-0 relative w-full">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#717680] text-[11px] text-center text-nowrap">34:48</p>
        <Frame51 />
      </div>
    </div>
  );
}

function Frame224() {
  return (
    <div className="content-stretch flex gap-[4.681px] items-start relative shrink-0">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#253382] text-[12px] text-center text-nowrap">Payer Rep : James Wilson</p>
    </div>
  );
}

function Header23() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Header">
      <Frame224 />
    </div>
  );
}

function Frame225() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Header23 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-col gap-[4.681px] items-start relative rounded-[9.363px] shrink-0 w-full">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#181d27] text-[13px] w-full">{`Excellent. Good news – I can see that this prior authorization has been approved. I prefer to talk to a person to make sure they received this status so that we don't get any more unnecessary calls from a BOT.`}</p>
    </div>
  );
}

function Frame226() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame52 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2.341px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame225 />
      <Frame226 />
    </div>
  );
}

function Frame137() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex gap-[14.044px] items-start px-[18.725px] py-0 relative w-full">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#717680] text-[11px] text-center text-nowrap">34:56</p>
        <Frame53 />
      </div>
    </div>
  );
}

function Frame227() {
  return (
    <div className="content-stretch flex gap-[4.681px] items-start relative shrink-0">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#871b4c] text-[12px] text-center text-nowrap" dir="auto">
        FRM Agent
      </p>
    </div>
  );
}

function Header24() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Header">
      <Frame227 />
    </div>
  );
}

function Frame228() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Header24 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex flex-col gap-[4.681px] items-start relative rounded-[9.363px] shrink-0 w-full">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#181d27] text-[13px] w-full">{`Give me 30 seconds and I'll get a human representative on the call.`}</p>
    </div>
  );
}

function Frame229() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame54 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2.341px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame228 />
      <Frame229 />
    </div>
  );
}

function Frame138() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex gap-[14.044px] items-start px-[18.725px] py-0 relative w-full">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#717680] text-[11px] text-center text-nowrap">35:01</p>
        <Frame55 />
      </div>
    </div>
  );
}

function Frame230() {
  return (
    <div className="content-stretch flex gap-[4.681px] items-start relative shrink-0">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#bc296a] text-[12px] text-center text-nowrap" dir="auto">
        Natalie Green
      </p>
    </div>
  );
}

function Header25() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Header">
      <Frame230 />
    </div>
  );
}

function Frame231() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Header25 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-col gap-[4.681px] items-start relative rounded-[9.363px] shrink-0 w-full">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#181d27] text-[13px] w-full">{`Hi James, this is Natalie Green at Phluence. I wanted to confirm that we received the good new that the PA  was approved. Can you provide me with the details?`}</p>
    </div>
  );
}

function Frame232() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame56 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2.341px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame231 />
      <Frame232 />
    </div>
  );
}

function Frame140() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex gap-[14.044px] items-start px-[18.725px] py-0 relative w-full">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#717680] text-[11px] text-center text-nowrap">35:52</p>
        <Frame57 />
      </div>
    </div>
  );
}

function Frame233() {
  return (
    <div className="content-stretch flex gap-[4.681px] items-start relative shrink-0">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#253382] text-[12px] text-center text-nowrap">Payer Rep : James Wilson</p>
    </div>
  );
}

function Header26() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Header">
      <Frame233 />
    </div>
  );
}

function Frame234() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Header26 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex flex-col gap-[4.681px] items-start relative rounded-[9.363px] shrink-0 w-full">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#181d27] text-[13px] w-full">{` Of course. Let me give you all the information you'll need. `}</p>
    </div>
  );
}

function Frame235() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame58 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex flex-col gap-[4.681px] items-start relative rounded-[9.363px] shrink-0 w-full">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#181d27] text-[13px] w-full">The prior authorization approval number is PA-2025-UHC-887452.</p>
    </div>
  );
}

function Frame236() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame59 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2.341px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame234 />
      <Frame235 />
      <Frame236 />
    </div>
  );
}

function Frame139() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex gap-[14.044px] items-start px-[18.725px] py-0 relative w-full">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#717680] text-[11px] text-center text-nowrap">36:05</p>
        <Frame60 />
      </div>
    </div>
  );
}

function Frame237() {
  return (
    <div className="content-stretch flex gap-[4.681px] items-start relative shrink-0">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#bc296a] text-[12px] text-center text-nowrap" dir="auto">
        Natalie Green
      </p>
    </div>
  );
}

function Header27() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Header">
      <Frame237 />
    </div>
  );
}

function Frame238() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Header27 />
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex flex-col gap-[4.681px] items-start relative rounded-[9.363px] shrink-0 w-full">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#181d27] text-[13px] w-full">Okay, let me write that down. PA-2025-UHC-887452. Got it.</p>
    </div>
  );
}

function Frame239() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame61 />
    </div>
  );
}

function Frame62() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2.341px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame238 />
      <Frame239 />
    </div>
  );
}

function Frame141() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex gap-[14.044px] items-start px-[18.725px] py-0 relative w-full">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#717680] text-[11px] text-center text-nowrap">36:10</p>
        <Frame62 />
      </div>
    </div>
  );
}

function Frame240() {
  return (
    <div className="content-stretch flex gap-[4.681px] items-start relative shrink-0">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#253382] text-[12px] text-center text-nowrap">Payer Rep : James Wilson</p>
    </div>
  );
}

function Header28() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Header">
      <Frame240 />
    </div>
  );
}

function Frame241() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Header28 />
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex flex-col gap-[4.681px] items-start relative rounded-[9.363px] shrink-0 w-full">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#181d27] text-[13px] w-full">Correct. The approval date is December 30th, 2025.</p>
    </div>
  );
}

function Frame242() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame63 />
    </div>
  );
}

function Frame64() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2.341px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame241 />
      <Frame242 />
    </div>
  );
}

function Frame142() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex gap-[14.044px] items-start px-[18.725px] py-0 relative w-full">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#717680] text-[11px] text-center text-nowrap">36:12</p>
        <Frame64 />
      </div>
    </div>
  );
}

function Frame243() {
  return (
    <div className="content-stretch flex gap-[4.681px] items-start relative shrink-0">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#bc296a] text-[12px] text-center text-nowrap" dir="auto">
        Natalie Green
      </p>
    </div>
  );
}

function Header29() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Header">
      <Frame243 />
    </div>
  );
}

function Frame244() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Header29 />
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex flex-col gap-[4.681px] items-start relative rounded-[9.363px] shrink-0 w-full">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#181d27] text-[13px] w-full">December 30th, 2025.</p>
    </div>
  );
}

function Frame245() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame65 />
    </div>
  );
}

function Frame66() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2.341px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame244 />
      <Frame245 />
    </div>
  );
}

function Frame143() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex gap-[14.044px] items-start px-[18.725px] py-0 relative w-full">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#717680] text-[11px] text-center text-nowrap">36:16</p>
        <Frame66 />
      </div>
    </div>
  );
}

function Frame246() {
  return (
    <div className="content-stretch flex gap-[4.681px] items-start relative shrink-0">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#253382] text-[12px] text-center text-nowrap">Payer Rep : James Wilson</p>
    </div>
  );
}

function Header30() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Header">
      <Frame246 />
    </div>
  );
}

function Frame247() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Header30 />
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex flex-col gap-[4.681px] items-start relative rounded-[9.363px] shrink-0 w-full">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#181d27] text-[13px] w-full">And the authorization is valid through December 29th, 2026, so you have a full year from the approval date.</p>
    </div>
  );
}

function Frame248() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame67 />
    </div>
  );
}

function Frame68() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2.341px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame247 />
      <Frame248 />
    </div>
  );
}

function Frame144() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex gap-[14.044px] items-start px-[18.725px] py-0 relative w-full">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#717680] text-[11px] text-center text-nowrap">36:20</p>
        <Frame68 />
      </div>
    </div>
  );
}

function Frame249() {
  return (
    <div className="content-stretch flex gap-[4.681px] items-start relative shrink-0">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#bc296a] text-[12px] text-center text-nowrap" dir="auto">
        Natalie Green
      </p>
    </div>
  );
}

function Header31() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Header">
      <Frame249 />
    </div>
  );
}

function Frame250() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Header31 />
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex flex-col gap-[4.681px] items-start relative rounded-[9.363px] shrink-0 w-full">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#181d27] text-[13px] w-full">{`Perfect. So that's an expiration date of December 29th, 2026?`}</p>
    </div>
  );
}

function Frame251() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame69 />
    </div>
  );
}

function Frame70() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2.341px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame250 />
      <Frame251 />
    </div>
  );
}

function Frame145() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex gap-[14.044px] items-start px-[18.725px] py-0 relative w-full">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#717680] text-[11px] text-center text-nowrap">36:24</p>
        <Frame70 />
      </div>
    </div>
  );
}

function Frame252() {
  return (
    <div className="content-stretch flex gap-[4.681px] items-start relative shrink-0">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#253382] text-[12px] text-center text-nowrap">Payer Rep : James Wilson</p>
    </div>
  );
}

function Header32() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Header">
      <Frame252 />
    </div>
  );
}

function Frame253() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Header32 />
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex flex-col gap-[4.681px] items-start relative rounded-[9.363px] shrink-0 w-full">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#181d27] text-[13px] w-full">{`That's correct.`}</p>
    </div>
  );
}

function Frame254() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame71 />
    </div>
  );
}

function Frame72() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2.341px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame253 />
      <Frame254 />
    </div>
  );
}

function Frame146() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex gap-[14.044px] items-start px-[18.725px] py-0 relative w-full">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#717680] text-[11px] text-center text-nowrap">36:28</p>
        <Frame72 />
      </div>
    </div>
  );
}

function Frame255() {
  return (
    <div className="content-stretch flex gap-[4.681px] items-start relative shrink-0">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#bc296a] text-[12px] text-center text-nowrap" dir="auto">
        Natalie Green
      </p>
    </div>
  );
}

function Header33() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Header">
      <Frame255 />
    </div>
  );
}

function Frame256() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Header33 />
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex flex-col gap-[4.681px] items-start relative rounded-[9.363px] shrink-0 w-full">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#181d27] text-[13px] w-full">And this covers the Humira 40 milligram injections?</p>
    </div>
  );
}

function Frame257() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame73 />
    </div>
  );
}

function Frame74() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2.341px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame256 />
      <Frame257 />
    </div>
  );
}

function Frame147() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex gap-[14.044px] items-start px-[18.725px] py-0 relative w-full">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#717680] text-[11px] text-center text-nowrap">36:32</p>
        <Frame74 />
      </div>
    </div>
  );
}

function Frame258() {
  return (
    <div className="content-stretch flex gap-[4.681px] items-start relative shrink-0">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#253382] text-[12px] text-center text-nowrap">Payer Rep : James Wilson</p>
    </div>
  );
}

function Header34() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Header">
      <Frame258 />
    </div>
  );
}

function Frame259() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Header34 />
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex flex-col gap-[4.681px] items-start relative rounded-[9.363px] shrink-0 w-full">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#181d27] text-[13px] w-full">{`Yes, the authorization is for Humira 40 milligrams subcutaneous injection. It's approved for a quantity of 4 syringes per 28 days, which aligns with the typical dosing schedule.`}</p>
    </div>
  );
}

function Frame260() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame75 />
    </div>
  );
}

function Frame76() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2.341px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame259 />
      <Frame260 />
    </div>
  );
}

function Frame148() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex gap-[14.044px] items-start px-[18.725px] py-0 relative w-full">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#717680] text-[11px] text-center text-nowrap">36:34</p>
        <Frame76 />
      </div>
    </div>
  );
}

function Frame261() {
  return (
    <div className="content-stretch flex gap-[4.681px] items-start relative shrink-0">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#bc296a] text-[12px] text-center text-nowrap" dir="auto">
        Natalie Green
      </p>
    </div>
  );
}

function Header35() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Header">
      <Frame261 />
    </div>
  );
}

function Frame262() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Header35 />
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex flex-col gap-[4.681px] items-start relative rounded-[9.363px] shrink-0 w-full">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#181d27] text-[13px] w-full">Excellent. Is there anything specific the patient needs to do, or can we just send the prescription to the specialty pharmacy?</p>
    </div>
  );
}

function Frame263() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame77 />
    </div>
  );
}

function Frame78() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2.341px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame262 />
      <Frame263 />
    </div>
  );
}

function Frame149() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex gap-[14.044px] items-start px-[18.725px] py-0 relative w-full">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#717680] text-[11px] text-center text-nowrap">36:40</p>
        <Frame78 />
      </div>
    </div>
  );
}

function Frame264() {
  return (
    <div className="content-stretch flex gap-[4.681px] items-start relative shrink-0">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#253382] text-[12px] text-center text-nowrap">Payer Rep : James Wilson</p>
    </div>
  );
}

function Header36() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Header">
      <Frame264 />
    </div>
  );
}

function Frame265() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Header36 />
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex flex-col gap-[4.681px] items-start relative rounded-[9.363px] shrink-0 w-full">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#181d27] text-[13px] w-full">{` You can send the prescription directly to our contracted specialty pharmacy. The patient is set up with Accredo Specialty Pharmacy. The prescription should reference the prior authorization number I provided. They'll also need to contact the specialty pharmacy to set up delivery.`}</p>
    </div>
  );
}

function Frame266() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame79 />
    </div>
  );
}

function Frame80() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2.341px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame265 />
      <Frame266 />
    </div>
  );
}

function Frame150() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex gap-[14.044px] items-start px-[18.725px] py-0 relative w-full">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#717680] text-[11px] text-center text-nowrap">36:48</p>
        <Frame80 />
      </div>
    </div>
  );
}

function Frame267() {
  return (
    <div className="content-stretch flex gap-[4.681px] items-start relative shrink-0">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#bc296a] text-[12px] text-center text-nowrap" dir="auto">
        Natalie Green
      </p>
    </div>
  );
}

function Header37() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Header">
      <Frame267 />
    </div>
  );
}

function Frame268() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Header37 />
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex flex-col gap-[4.681px] items-start relative rounded-[9.363px] shrink-0 w-full">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#181d27] text-[13px] w-full">Perfect. And the number for Accredo?</p>
    </div>
  );
}

function Frame269() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame81 />
    </div>
  );
}

function Frame82() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2.341px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame268 />
      <Frame269 />
    </div>
  );
}

function Frame151() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex gap-[14.044px] items-start px-[18.725px] py-0 relative w-full">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#717680] text-[11px] text-center text-nowrap">36:52</p>
        <Frame82 />
      </div>
    </div>
  );
}

function Frame270() {
  return (
    <div className="content-stretch flex gap-[4.681px] items-start relative shrink-0">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#253382] text-[12px] text-center text-nowrap">Payer Rep : James Wilson</p>
    </div>
  );
}

function Header38() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Header">
      <Frame270 />
    </div>
  );
}

function Frame271() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Header38 />
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex flex-col gap-[4.681px] items-start relative rounded-[9.363px] shrink-0 w-full">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#181d27] text-[13px] w-full">The specialty pharmacy can be reached at 1-800-803-2523. The patient can also manage their prescription online at Accredo.com.</p>
    </div>
  );
}

function Frame272() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame83 />
    </div>
  );
}

function Frame84() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2.341px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame271 />
      <Frame272 />
    </div>
  );
}

function Frame152() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex gap-[14.044px] items-start px-[18.725px] py-0 relative w-full">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#717680] text-[11px] text-center text-nowrap">36:57</p>
        <Frame84 />
      </div>
    </div>
  );
}

function Frame273() {
  return (
    <div className="content-stretch flex gap-[4.681px] items-start relative shrink-0">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#bc296a] text-[12px] text-center text-nowrap" dir="auto">
        Natalie Green
      </p>
    </div>
  );
}

function Header39() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Header">
      <Frame273 />
    </div>
  );
}

function Frame274() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Header39 />
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex flex-col gap-[4.681px] items-start relative rounded-[9.363px] shrink-0 w-full">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#181d27] text-[13px] w-full">{`Great. Is there anything else we need to know? `}</p>
    </div>
  );
}

function Frame275() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame85 />
    </div>
  );
}

function Frame86() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2.341px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame274 />
      <Frame275 />
    </div>
  );
}

function Frame153() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex gap-[14.044px] items-start px-[18.725px] py-0 relative w-full">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#717680] text-[11px] text-center text-nowrap">37:02</p>
        <Frame86 />
      </div>
    </div>
  );
}

function Frame276() {
  return (
    <div className="content-stretch flex gap-[4.681px] items-start relative shrink-0">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#253382] text-[12px] text-center text-nowrap">Payer Rep : James Wilson</p>
    </div>
  );
}

function Header40() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Header">
      <Frame276 />
    </div>
  );
}

function Frame277() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Header40 />
    </div>
  );
}

function Frame87() {
  return (
    <div className="content-stretch flex flex-col gap-[4.681px] items-start relative rounded-[9.363px] shrink-0 w-full">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#181d27] text-[13px] w-full">Just to confirm – the prior authorization is specifically for the diagnosis code that was submitted, which is rheumatoid arthritis. If the medication is being used for a different indication, a new prior authorization would be required.</p>
    </div>
  );
}

function Frame278() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame87 />
    </div>
  );
}

function Frame88() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2.341px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame277 />
      <Frame278 />
    </div>
  );
}

function Frame154() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex gap-[14.044px] items-start px-[18.725px] py-0 relative w-full">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#717680] text-[11px] text-center text-nowrap">37:07</p>
        <Frame88 />
      </div>
    </div>
  );
}

function Frame279() {
  return (
    <div className="content-stretch flex gap-[4.681px] items-start relative shrink-0">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#bc296a] text-[12px] text-center text-nowrap" dir="auto">
        Natalie Green
      </p>
    </div>
  );
}

function Header41() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Header">
      <Frame279 />
    </div>
  );
}

function Frame280() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Header41 />
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-stretch flex flex-col gap-[4.681px] items-start relative rounded-[9.363px] shrink-0 w-full">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#181d27] text-[13px] w-full">Understood. It is for rheumatoid arthritis, so we should be all set.</p>
    </div>
  );
}

function Frame281() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame89 />
    </div>
  );
}

function Frame90() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2.341px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame280 />
      <Frame281 />
    </div>
  );
}

function Frame155() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex gap-[14.044px] items-start px-[18.725px] py-0 relative w-full">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#717680] text-[11px] text-center text-nowrap">37:11</p>
        <Frame90 />
      </div>
    </div>
  );
}

function Frame282() {
  return (
    <div className="content-stretch flex gap-[4.681px] items-start relative shrink-0">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#253382] text-[12px] text-center text-nowrap">Payer Rep : James Wilson</p>
    </div>
  );
}

function Header42() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Header">
      <Frame282 />
    </div>
  );
}

function Frame283() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Header42 />
    </div>
  );
}

function Frame91() {
  return (
    <div className="content-stretch flex flex-col gap-[4.681px] items-start relative rounded-[9.363px] shrink-0 w-full">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#181d27] text-[13px] w-full">{` Perfect. Is there anything else I can help you with today?`}</p>
    </div>
  );
}

function Frame284() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame91 />
    </div>
  );
}

function Frame92() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2.341px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame283 />
      <Frame284 />
    </div>
  );
}

function Frame156() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex gap-[14.044px] items-start px-[18.725px] py-0 relative w-full">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#717680] text-[11px] text-center text-nowrap">37:14</p>
        <Frame92 />
      </div>
    </div>
  );
}

function Frame285() {
  return (
    <div className="content-stretch flex gap-[4.681px] items-start relative shrink-0">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#bc296a] text-[12px] text-center text-nowrap" dir="auto">
        Natalie Green
      </p>
    </div>
  );
}

function Header43() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Header">
      <Frame285 />
    </div>
  );
}

function Frame286() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Header43 />
    </div>
  );
}

function Frame93() {
  return (
    <div className="content-stretch flex flex-col gap-[4.681px] items-start relative rounded-[9.363px] shrink-0 w-full">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#181d27] text-[13px] w-full">No, I think that covers everything. Thank you so much for your help, James.</p>
    </div>
  );
}

function Frame287() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame93 />
    </div>
  );
}

function Frame94() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2.341px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame286 />
      <Frame287 />
    </div>
  );
}

function Frame157() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex gap-[14.044px] items-start px-[18.725px] py-0 relative w-full">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#717680] text-[11px] text-center text-nowrap">37:19</p>
        <Frame94 />
      </div>
    </div>
  );
}

function Frame288() {
  return (
    <div className="content-stretch flex gap-[4.681px] items-start relative shrink-0">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#253382] text-[12px] text-center text-nowrap">Payer Rep : James Wilson</p>
    </div>
  );
}

function Header44() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Header">
      <Frame288 />
    </div>
  );
}

function Frame289() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Header44 />
    </div>
  );
}

function Frame95() {
  return (
    <div className="content-stretch flex flex-col gap-[4.681px] items-start relative rounded-[9.363px] shrink-0 w-full">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#181d27] text-[13px] w-full">{`You're very welcome, Maria. Just to recap, your prior authorization number is PA-2025-UHC-887452, approved on December 30th, 2025, valid through December 29th, 2026. Have a great day!`}</p>
    </div>
  );
}

function Frame290() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame95 />
    </div>
  );
}

function Frame96() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2.341px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame289 />
      <Frame290 />
    </div>
  );
}

function Frame158() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex gap-[14.044px] items-start px-[18.725px] py-0 relative w-full">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#717680] text-[11px] text-center text-nowrap">37:23</p>
        <Frame96 />
      </div>
    </div>
  );
}

function Frame291() {
  return (
    <div className="content-stretch flex gap-[4.681px] items-start relative shrink-0">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#871b4c] text-[12px] text-center text-nowrap" dir="auto">
        FRM Agent
      </p>
    </div>
  );
}

function Header45() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Header">
      <Frame291 />
    </div>
  );
}

function Frame292() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Header45 />
    </div>
  );
}

function Frame97() {
  return (
    <div className="content-stretch flex flex-col gap-[4.681px] items-start relative rounded-[9.363px] shrink-0 w-full">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#181d27] text-[13px] w-full">You too, thank you!</p>
    </div>
  );
}

function Frame293() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame97 />
    </div>
  );
}

function Frame98() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2.341px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame292 />
      <Frame293 />
    </div>
  );
}

function Frame160() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex gap-[14.044px] items-start px-[18.725px] py-0 relative w-full">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#717680] text-[11px] text-center text-nowrap">37:25</p>
        <Frame98 />
      </div>
    </div>
  );
}

function Frame294() {
  return (
    <div className="content-stretch flex gap-[4.681px] items-start relative shrink-0">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#253382] text-[12px] text-center text-nowrap">Payer Rep : James Wilson</p>
    </div>
  );
}

function Header46() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Header">
      <Frame294 />
    </div>
  );
}

function Frame295() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Header46 />
    </div>
  );
}

function Frame99() {
  return (
    <div className="content-stretch flex flex-col gap-[4.681px] items-start relative rounded-[9.363px] shrink-0 w-full">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#181d27] text-[13px] w-full">Goodbye.</p>
    </div>
  );
}

function Frame296() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame99 />
    </div>
  );
}

function Frame100() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2.341px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame295 />
      <Frame296 />
    </div>
  );
}

function Frame161() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex gap-[14.044px] items-start px-[18.725px] py-0 relative w-full">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#717680] text-[11px] text-center text-nowrap">37:27</p>
        <Frame100 />
      </div>
    </div>
  );
}

function Frame204() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[3362px] items-start overflow-clip pb-0 pt-[12px] px-0 relative shrink-0 w-full">
      <Frame109 />
      <Frame112 />
      <Frame113 />
      <Frame114 />
      <Frame166 />
      <Frame116 />
      <Frame117 />
      <Frame118 />
      <Frame119 />
      <Frame177 />
      <Frame123 />
      <Frame124 />
      <Frame125 />
      <Frame126 />
      <Frame127 />
      <Frame128 />
      <Frame129 />
      <Frame130 />
      <Frame131 />
      <Frame132 />
      <Frame133 />
      <Frame134 />
      <Frame135 />
      <Frame136 />
      <Frame137 />
      <Frame138 />
      <Frame140 />
      <Frame139 />
      <Frame141 />
      <Frame142 />
      <Frame143 />
      <Frame144 />
      <Frame145 />
      <Frame146 />
      <Frame147 />
      <Frame148 />
      <Frame149 />
      <Frame150 />
      <Frame151 />
      <Frame152 />
      <Frame153 />
      <Frame154 />
      <Frame155 />
      <Frame156 />
      <Frame157 />
      <Frame158 />
      <Frame160 />
      <Frame161 />
    </div>
  );
}

function Frame205() {
  return (
    <div className="absolute bg-gradient-to-b content-stretch flex flex-col from-[rgba(255,255,255,0)] items-start left-0 overflow-x-clip overflow-y-auto to-[22.814%] to-white top-[28px] w-[634px]">
      <Frame204 />
    </div>
  );
}

export default function Frame297() {
  return (
    <div className="bg-white relative size-full">
      <Frame101 />
      <Frame205 />
    </div>
  );
}