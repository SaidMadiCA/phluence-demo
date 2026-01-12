import { useState } from 'react';
import svgPaths from "../../../imports/svg-4pzkauivu6";

export function CaseDetails() {
  const [activeTab, setActiveTab] = useState<'details' | 'tracker'>('details');
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['summary', 'case', 'auth']));

  const toggleSection = (section: string) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(section)) {
        newSet.delete(section);
      } else {
        newSet.add(section);
      }
      return newSet;
    });
  };

  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] h-full items-start pb-0 pt-[12px] px-0 relative shrink-0 w-full">
      <div className="absolute border-[#f5f5f5] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none" />

      {/* Tabs - Segmented Control */}
      <div className="relative shrink-0 w-full">
        <div className="content-stretch flex flex-col items-start px-[16px] py-0 relative w-full">
          <div className="bg-[#fafafa] relative rounded-[6px] shrink-0 w-full">
            <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex gap-[4px] items-center p-[2px] relative w-full">
                <button
                  onClick={() => setActiveTab('details')}
                  className={`basis-0 grow min-h-px min-w-px relative rounded-[6px] shrink-0 ${
                    activeTab === 'details' 
                      ? 'bg-white shadow-[0px_1px_3px_0px_rgba(10,13,18,0.1),0px_1px_2px_-1px_rgba(10,13,18,0.1)]' 
                      : ''
                  }`}
                >
                  <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                    <div className="content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[2px] relative w-full">
                      <p className={`font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[13px] text-nowrap ${
                        activeTab === 'details' ? 'text-[#414651]' : 'text-[#717680]'
                      }`}>
                        Call details
                      </p>
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => setActiveTab('tracker')}
                  className={`basis-0 grow min-h-px min-w-px relative rounded-[6px] shrink-0 ${
                    activeTab === 'tracker' 
                      ? 'bg-white shadow-[0px_1px_3px_0px_rgba(10,13,18,0.1),0px_1px_2px_-1px_rgba(10,13,18,0.1)]' 
                      : ''
                  }`}
                >
                  <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                    <div className="content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[3px] relative w-full">
                      <p className={`font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[12px] text-nowrap ${
                        activeTab === 'tracker' ? 'text-[#414651]' : 'text-[#717680]'
                      }`}>
                        Case tracker
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[#f5f5f5] border-solid inset-[-1px] pointer-events-none rounded-[7px]" />
          </div>
        </div>
      </div>

      {/* Content */}
      {activeTab === 'details' && (
        <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px px-[16px] py-0 relative shrink-0 w-full overflow-y-auto">
          <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-full">
                {/* Case Details Section */}
                <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                  {/* Section Header */}
                  <div className="content-stretch flex flex-col items-start justify-center px-0 py-[4px] relative shrink-0 w-full">
                    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                      <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0">
                        <p className="basis-0 font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#181d27] text-[13px]">
                          Case details
                        </p>
                      </div>
                      <div className="relative shrink-0 size-[16px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                          <path d="M4 6L8 10L12 6" stroke="#535862" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.06667" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Case Details Fields */}
                  <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                    {/* Case ID */}
                    <div className="content-stretch flex items-start px-0 py-[6px] relative shrink-0 w-full">
                      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                      <div className="basis-0 content-stretch flex flex-col grow items-start justify-between min-h-px min-w-px relative self-stretch shrink-0">
                        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                          <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
                            <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
                              <div className="content-stretch flex items-center max-w-[176px] relative shrink-0">
                                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#181d27] text-[13px] w-[125px]">
                                  Case ID
                                </p>
                              </div>
                              <div className="basis-0 flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium grow justify-center leading-[0] max-w-[176px] min-h-px min-w-px not-italic relative shrink-0 text-[#181d27] text-[13px] text-right">
                                <p className="leading-[20px]">58825667</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Patient Name */}
                    <div className="content-stretch flex items-start px-0 py-[6px] relative shrink-0 w-full">
                      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                      <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative self-stretch shrink-0">
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
                            <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
                              <div className="content-stretch flex items-center max-w-[176px] relative shrink-0">
                                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#181d27] text-[13px] w-[125px]">
                                  Patient Name
                                </p>
                              </div>
                              <div className="basis-0 flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium grow justify-center leading-[0] max-w-[176px] min-h-px min-w-px not-italic relative shrink-0 text-[#181d27] text-[13px] text-right">
                                <p className="leading-[20px]">Robert Thompson</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Patient DOB */}
                    <div className="content-stretch flex items-start px-0 py-[6px] relative shrink-0 w-full">
                      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                      <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative self-stretch shrink-0">
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
                            <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
                              <div className="content-stretch flex items-center max-w-[176px] relative shrink-0">
                                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#181d27] text-[13px] w-[125px]">
                                  Patient DOB
                                </p>
                              </div>
                              <div className="basis-0 flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium grow justify-center leading-[0] max-w-[176px] min-h-px min-w-px not-italic relative shrink-0 text-[#181d27] text-[13px] text-right">
                                <p className="leading-[20px]">March 15, 1968</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Group Number */}
                    <div className="content-stretch flex items-start px-0 py-[6px] relative shrink-0 w-full">
                      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                      <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative self-stretch shrink-0">
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
                            <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
                              <div className="content-stretch flex items-center max-w-[176px] relative shrink-0">
                                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#181d27] text-[13px] w-[125px]">
                                  Group Number
                                </p>
                              </div>
                              <div className="basis-0 flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium grow justify-center leading-[0] max-w-[176px] min-h-px min-w-px not-italic relative shrink-0 text-[#181d27] text-[13px] text-right">
                                <p className="leading-[20px]">523362172</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Member ID */}
                    <div className="content-stretch flex items-start px-0 py-[6px] relative shrink-0 w-full">
                      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                      <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative self-stretch shrink-0">
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
                            <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
                              <div className="content-stretch flex items-center max-w-[176px] relative shrink-0">
                                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#181d27] text-[13px] w-[125px]">
                                  Member ID
                                </p>
                              </div>
                              <div className="basis-0 flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium grow justify-center leading-[0] max-w-[176px] min-h-px min-w-px not-italic relative shrink-0 text-[#181d27] text-[13px] text-right">
                                <p className="leading-[20px]">912388404321</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* HCP */}
                    <div className="content-stretch flex items-start px-0 py-[6px] relative shrink-0 w-full">
                      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                      <div className="basis-0 content-stretch flex flex-col grow items-start justify-between min-h-px min-w-px relative self-stretch shrink-0">
                        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                          <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
                            <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
                              <div className="content-stretch flex items-center max-w-[176px] relative shrink-0">
                                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#181d27] text-[13px] w-[125px]">
                                  HCP
                                </p>
                              </div>
                              <div className="basis-0 flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium grow justify-center leading-[0] max-w-[176px] min-h-px min-w-px not-italic relative shrink-0 text-[#181d27] text-[13px] text-right">
                                <p className="leading-[20px]">Dr. Sarah Chen</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Medication Type */}
                    <div className="content-stretch flex items-start px-0 py-[6px] relative shrink-0 w-full">
                      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                      <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative self-stretch shrink-0">
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
                            <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
                              <div className="content-stretch flex items-center max-w-[176px] relative shrink-0">
                                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#181d27] text-[13px] w-[125px]">
                                  Medication Type
                                </p>
                              </div>
                              <div className="basis-0 flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium grow justify-center leading-[0] max-w-[176px] min-h-px min-w-px not-italic relative shrink-0 text-[#181d27] text-[13px] text-right">
                                <p className="leading-[20px]">Specialty biologic</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Drug */}
                    <div className="content-stretch flex items-start px-0 py-[6px] relative shrink-0 w-full">
                      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                      <div className="basis-0 content-stretch flex flex-col grow items-start justify-between min-h-px min-w-px relative self-stretch shrink-0">
                        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                          <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
                            <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
                              <div className="content-stretch flex items-center max-w-[176px] relative shrink-0">
                                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#181d27] text-[13px] w-[125px]">
                                  Drug
                                </p>
                              </div>
                              <div className="basis-0 flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium grow justify-center leading-[0] max-w-[176px] min-h-px min-w-px not-italic relative shrink-0 text-[#181d27] text-[13px] text-right">
                                <p className="leading-[20px]">Humira</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Dose */}
                    <div className="content-stretch flex items-start px-0 py-[6px] relative shrink-0 w-full">
                      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                      <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative self-stretch shrink-0">
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
                            <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
                              <div className="content-stretch flex items-center max-w-[176px] relative shrink-0">
                                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#181d27] text-[13px] w-[125px]">
                                  Dose
                                </p>
                              </div>
                              <div className="basis-0 flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium grow justify-center leading-[0] max-w-[176px] min-h-px min-w-px not-italic relative shrink-0 text-[#181d27] text-[13px] text-right">
                                <p className="leading-[20px]">40 mg per week</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Administration */}
                    <div className="content-stretch flex items-start px-0 py-[6px] relative shrink-0 w-full">
                      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                      <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative self-stretch shrink-0">
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
                            <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
                              <div className="content-stretch flex items-center max-w-[176px] relative shrink-0">
                                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#181d27] text-[13px] w-[125px]">
                                  Administration
                                </p>
                              </div>
                              <div className="basis-0 flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium grow justify-center leading-[0] max-w-[176px] min-h-px min-w-px not-italic relative shrink-0 text-[#181d27] text-[13px] text-right">
                                <p className="leading-[20px]">Subcutaneous injection</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Summary Section */}
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                  <div className="content-stretch flex items-start px-0 py-[4px] relative shrink-0 w-full">
                    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative self-stretch shrink-0">
                      <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                        <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0">
                          <p className="basis-0 font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#181d27] text-[13px] w-full">
                            Summary
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                      <div className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#181d27] text-[13px] w-full">
                        <p className="mb-[13px]">Agent traversed the IVR to get status of PA. James Wilson took the call and responded that the PA has been approved. He wants confirmation from a human.</p>
                        <p className="mb-[13px]">Say something like: Hi James, this is Natalie Green at Phluence. I wanted to confirm that we received the good new that the PA  was approved. Can you provide me with the details?</p>
                        <p>Follow whisper mode instructions from FRM Agent for guidance.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'tracker' && (
        <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px px-[16px] py-0 relative shrink-0 w-full overflow-y-auto">
          <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#181d27] text-[13px] text-nowrap">
            Case Timeline
          </p>

          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
              <div className="relative shrink-0 size-[8px] mt-[6px]">
                <div className="size-full rounded-full bg-[#10b981]" />
              </div>
              <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start min-h-px min-w-px relative shrink-0">
                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#181d27] text-[13px] text-nowrap">
                  Call in Progress
                </p>
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#717680] text-[11px] text-nowrap">
                  Today at 11:30 AM
                </p>
              </div>
            </div>

            <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
              <div className="relative shrink-0 size-[8px] mt-[6px]">
                <div className="size-full rounded-full bg-[#10b981]" />
              </div>
              <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start min-h-px min-w-px relative shrink-0">
                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#181d27] text-[13px] text-nowrap">
                  PA Approved
                </p>
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#717680] text-[11px] text-nowrap">
                  Yesterday at 2:45 PM
                </p>
              </div>
            </div>

            <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
              <div className="relative shrink-0 size-[8px] mt-[6px]">
                <div className="size-full rounded-full bg-[#6b7280]" />
              </div>
              <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start min-h-px min-w-px relative shrink-0">
                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#181d27] text-[13px] text-nowrap">
                  PA Submitted
                </p>
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#717680] text-[11px] text-nowrap">
                  Jan 9 at 10:30 AM
                </p>
              </div>
            </div>

            <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
              <div className="relative shrink-0 size-[8px] mt-[6px]">
                <div className="size-full rounded-full bg-[#6b7280]" />
              </div>
              <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start min-h-px min-w-px relative shrink-0">
                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#181d27] text-[13px] text-nowrap">
                  Case Created
                </p>
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#717680] text-[11px] text-nowrap">
                  Jan 8 at 9:15 AM
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}