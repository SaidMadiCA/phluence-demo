import { useState } from 'react';
import svgPaths from "../../../imports/svg-4pzkauivu6";

interface Conversation {
  id: string;
  name: string;
  number: string;
  time: string;
  status: 'active' | 'scheduled';
  avatarBg: string;
  showOutbound?: boolean;
}

const conversations: Conversation[] = [
  { id: '1', name: 'United Healthcare', number: '39810513', time: '35m', status: 'active', avatarBg: '#253382', showOutbound: true },
  { id: '2', name: 'Aetna', number: '39810513', time: '23m', status: 'active', avatarBg: '#7D3F98' },
  { id: '3', name: 'Cigna', number: '91516212', time: '26m', status: 'active', avatarBg: '#0033fe' },
  { id: '4', name: 'BCBS', number: '97239152', time: '27m', status: 'active', avatarBg: '#00acec' },
  { id: '5', name: 'Humana', number: '47123558', time: '24m', status: 'active', avatarBg: '#78be20' },
  { id: '6', name: 'Aetna', number: '39810513', time: 'In 30m', status: 'scheduled', avatarBg: '#7D3F98' },
  { id: '7', name: 'Cigna', number: '91516212', time: 'In 30m', status: 'scheduled', avatarBg: '#0033fe' },
  { id: '8', name: 'United Healthcare', number: '46237862', time: 'In 30m', status: 'scheduled', avatarBg: '#253382' },
  { id: '9', name: 'United Healthcare', number: '90231841', time: 'In 30m', status: 'scheduled', avatarBg: '#253382' },
  { id: '10', name: 'Humana', number: '47123558', time: 'In 40m', status: 'scheduled', avatarBg: '#78be20' },
  { id: '11', name: 'BCBS', number: '97239152', time: 'In 40m', status: 'scheduled', avatarBg: '#00acec' },
  { id: '12', name: 'United Healthcare', number: '68343452', time: 'In 40m', status: 'scheduled', avatarBg: '#253382' },
  { id: '13', name: 'Aetna', number: '39810513', time: 'In 40m', status: 'scheduled', avatarBg: '#7D3F98' },
  { id: '14', name: 'Cigna', number: '91516212', time: 'In 60m', status: 'scheduled', avatarBg: '#0033fe' },
  { id: '15', name: 'United Healthcare', number: '56823412', time: 'In 60m', status: 'scheduled', avatarBg: '#253382' },
];

interface ConversationsListProps {
  selectedId?: string;
  onSelect?: (id: string) => void;
}

export function ConversationsList({ selectedId = '1', onSelect }: ConversationsListProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'active' | 'scheduled'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredConversations = conversations.filter(conv => {
    const matchesTab = activeTab === 'all' || conv.status === activeTab;
    const matchesSearch = conv.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         conv.number.includes(searchQuery);
    return matchesTab && matchesSearch;
  });

  const activeCount = conversations.filter(c => c.status === 'active').length;
  const scheduledCount = conversations.filter(c => c.status === 'scheduled').length;
  const allCount = conversations.length;

  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col h-[1024px] items-start px-0 py-[12px] relative shrink-0 w-[320px]">
      {/* Header */}
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
        <div className="relative shrink-0 w-full">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center px-[16px] py-0 relative w-full">
              <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0">
                <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
                  <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#181d27] text-[15px] w-full">
                    Conversations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="relative shrink-0 w-full mt-[12px]">
        <div className="content-stretch flex flex-col items-start px-[16px] py-0 relative w-full">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
            <div className="absolute border-[#e9eaeb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex gap-[12px] items-start relative shrink-0">
              <button
                onClick={() => setActiveTab('all')}
                className="content-stretch flex gap-[8px] items-center justify-center pb-[8px] pt-[2px] px-[4px] relative shrink-0"
              >
                {activeTab === 'all' && (
                  <div className="absolute border-[#c02b6c] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
                )}
                <p className={`font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[12px] text-nowrap ${
                  activeTab === 'all' ? 'text-[#7d1846]' : 'text-[#717680]'
                }`}>
                  All
                </p>
                <div className={`content-stretch flex items-center px-[8px] py-px relative rounded-[9999px] shrink-0 ${
                  activeTab === 'all' ? 'bg-[rgba(125,24,70,0.1)]' : 'bg-[#fafafa]'
                }`}>
                  <div className={`absolute border border-solid inset-[-1px] pointer-events-none rounded-[10000px] ${
                    activeTab === 'all' ? 'border-[#c02b6c]' : 'border-[#e9eaeb]'
                  }`} />
                  <p className={`font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[11px] text-center text-nowrap ${
                    activeTab === 'all' ? 'text-[#7d1846]' : 'text-[#414651]'
                  }`}>
                    {allCount}
                  </p>
                </div>
              </button>

              <button
                onClick={() => setActiveTab('active')}
                className="content-stretch flex gap-[8px] items-center justify-center pb-[8px] pt-[2px] px-[4px] relative shrink-0"
              >
                {activeTab === 'active' && (
                  <div className="absolute border-[#c02b6c] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
                )}
                <p className={`font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[12px] text-nowrap ${
                  activeTab === 'active' ? 'text-[#7d1846]' : 'text-[#717680]'
                }`}>
                  Active
                </p>
                <div className={`content-stretch flex items-center px-[8px] py-px relative rounded-[9999px] shrink-0 ${
                  activeTab === 'active' ? 'bg-[rgba(125,24,70,0.1)]' : 'bg-[#fafafa]'
                }`}>
                  <div className={`absolute border border-solid inset-[-1px] pointer-events-none rounded-[10000px] ${
                    activeTab === 'active' ? 'border-[#c02b6c]' : 'border-[#e9eaeb]'
                  }`} />
                  <p className={`font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[11px] text-center text-nowrap ${
                    activeTab === 'active' ? 'text-[#7d1846]' : 'text-[#414651]'
                  }`}>
                    {activeCount}
                  </p>
                </div>
              </button>

              <button
                onClick={() => setActiveTab('scheduled')}
                className="content-stretch flex gap-[8px] items-center justify-center pb-[8px] pt-[2px] px-[4px] relative self-stretch shrink-0"
              >
                {activeTab === 'scheduled' && (
                  <div className="absolute border-[#c02b6c] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
                )}
                <p className={`font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[12px] text-nowrap ${
                  activeTab === 'scheduled' ? 'text-[#7d1846]' : 'text-[#717680]'
                }`}>
                  Scheduled
                </p>
                <div className={`content-stretch flex items-center px-[8px] py-px relative rounded-[9999px] shrink-0 ${
                  activeTab === 'scheduled' ? 'bg-[rgba(125,24,70,0.1)]' : 'bg-[#fafafa]'
                }`}>
                  <div className={`absolute border border-solid inset-[-1px] pointer-events-none rounded-[10000px] ${
                    activeTab === 'scheduled' ? 'border-[#c02b6c]' : 'border-[#e9eaeb]'
                  }`} />
                  <p className={`font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[11px] text-center text-nowrap ${
                    activeTab === 'scheduled' ? 'text-[#7d1846]' : 'text-[#414651]'
                  }`}>
                    {scheduledCount}
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="relative shrink-0 w-full mt-[12px]">
        <div className="content-stretch flex flex-col items-start px-[16px] py-0 relative w-full">
          <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
            <div className="bg-white relative rounded-[6px] shrink-0 w-full">
              <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[4px] relative w-full">
                  <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
                    <div className="relative shrink-0 size-[16px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                        <path d={svgPaths.pdc56a00} stroke="#A4A7AE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      placeholder="Search"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#717680] text-[13px] text-nowrap bg-transparent border-0 outline-none"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute border border-[#d5d7da] border-solid inset-[-1px] pointer-events-none rounded-[7px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
            </div>
          </div>
        </div>
      </div>

      {/* Conversations List */}
      <div className="content-stretch flex flex-col items-start mt-[8px] relative shrink-0 w-full overflow-y-auto flex-1">
        {filteredConversations.map((conv) => {
          const isSelected = selectedId === conv.id;
          const isActive = conv.status === 'active';
          
          return (
            <div key={conv.id} className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="relative shrink-0 w-full">
                <div className="content-stretch flex flex-col items-start px-[8px] py-0 relative w-full">
                  <button
                    onClick={() => onSelect?.(conv.id)}
                    className={`relative rounded-[8px] shrink-0 w-full transition-colors ${
                      isSelected ? 'bg-[#e9eaeb]' : 'bg-[#fafafa] hover:bg-[#f0f0f0]'
                    }`}
                  >
                    <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative w-full">
                      <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                        {/* Avatar */}
                        {conv.name === 'United Healthcare' && (
                          <div className="bg-[#253382] relative rounded-[200px] shrink-0 size-[32px]">
                            <div className="absolute inset-[12.5%_28.6%_12.5%_28.13%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8495 24">
                                <g>
                                  <path d={svgPaths.p393295f0} fill="white" />
                                  <path d={svgPaths.p2adb7900} fill="white" />
                                  <path d={svgPaths.p3c95b980} fill="white" />
                                  <path d={svgPaths.p1e774100} fill="white" />
                                </g>
                              </svg>
                            </div>
                          </div>
                        )}
                        {conv.name === 'Aetna' && (
                          <div className="relative shrink-0 size-[32px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                              <g>
                                <rect fill="#7D3F98" height="32" rx="16" width="32" />
                                <path d={svgPaths.pbb16980} fill="white" />
                              </g>
                            </svg>
                          </div>
                        )}
                        {conv.name === 'Cigna' && (
                          <div className="bg-[#0033fe] relative rounded-[200px] shrink-0 size-[32px]">
                            <div className="absolute inset-[12.5%_17.8%_12.5%_15.63%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.3056 24">
                                <g>
                                  <path d={svgPaths.p25b42b80} fill="white" />
                                  <path d={svgPaths.p34c34580} fill="#01CE54" />
                                  <path d={svgPaths.p17080fb0} fill="#01CE54" />
                                  <path d={svgPaths.p1cc9c1c0} fill="#01CE54" />
                                  <path d={svgPaths.p1d9c1d00} fill="#01CE54" />
                                  <path d={svgPaths.p225efb80} fill="#01CE54" />
                                  <path d={svgPaths.pa413e00} fill="white" />
                                  <path d={svgPaths.p16cc18a0} fill="#01CE54" />
                                  <path d={svgPaths.p20334600} fill="#01CE54" />
                                  <path d={svgPaths.p3c2e4600} fill="#01CE54" />
                                  <path d={svgPaths.p323ceac0} fill="#01CE54" />
                                </g>
                              </svg>
                            </div>
                          </div>
                        )}
                        {conv.name === 'BCBS' && (
                          <div className="bg-[#00acec] relative rounded-[200px] shrink-0 size-[32px]">
                            <div className="absolute inset-[21.88%_26.99%_21.88%_28.13%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3632 18">
                                <g>
                                  <path d={svgPaths.p2d6f8a00} fill="white" />
                                  <path d={svgPaths.p229e4800} fill="#00ACEC" />
                                  <path d={svgPaths.p1c5f9e80} fill="white" />
                                  <path d={svgPaths.p23d840} fill="#00ACEC" />
                                  <path d={svgPaths.ped86930} fill="#00ACEC" />
                                  <path d={svgPaths.p6c472c0} fill="#00ACEC" />
                                  <path d={svgPaths.p4efc100} fill="#00ACEC" />
                                  <path d={svgPaths.p217d7e00} fill="#00ACEC" />
                                  <path d={svgPaths.p2845c000} fill="#00ACEC" />
                                  <path d={svgPaths.p30c94c40} fill="#00ACEC" />
                                </g>
                              </svg>
                            </div>
                          </div>
                        )}
                        {conv.name === 'Humana' && (
                          <div className="bg-[#78be20] relative rounded-[200px] shrink-0 size-[32px]">
                            <div className="absolute h-[18px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[14px]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 18">
                                <g clipPath="url(#clip0_3_11329)">
                                  <path d={svgPaths.p24e30af0} fill="white" />
                                </g>
                                <defs>
                                  <clipPath id="clip0_3_11329">
                                    <rect fill="white" height="18" width="14" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                          </div>
                        )}

                        {/* Content */}
                        <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start min-h-px min-w-px relative shrink-0">
                          <div className="absolute border-0 border-[#e9eaeb] border-solid inset-0 pointer-events-none" />
                          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                            {/* Name and Icon */}
                            <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
                              <p className="basis-0 font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#414651] text-[13px] truncate text-left">
                                {conv.name}
                              </p>
                              {isActive ? (
                                <div className="relative shrink-0 size-[20px]">
                                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                                    <g>
                                      <path clipRule="evenodd" d={svgPaths.p12c42a00} fill="#871B4C" fillRule="evenodd" />
                                      <path clipRule="evenodd" d={svgPaths.p29061a80} fill="#871B4C" fillRule="evenodd" />
                                      <path clipRule="evenodd" d={svgPaths.p1e24e100} fill="#871B4C" fillRule="evenodd" />
                                      <path clipRule="evenodd" d={svgPaths.p3c3a5500} fill="#871B4C" fillRule="evenodd" />
                                      <path clipRule="evenodd" d={svgPaths.p174c9f00} fill="#871B4C" fillRule="evenodd" />
                                    </g>
                                  </svg>
                                </div>
                              ) : (
                                <div className="relative shrink-0 size-[14px]">
                                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                                    <path clipRule="evenodd" d={svgPaths.p2969dc80} fill="#A4A7AE" fillRule="evenodd" />
                                  </svg>
                                </div>
                              )}
                            </div>

                            {/* Subtext and Time */}
                            <div className="content-stretch flex gap-[12px] items-end justify-end relative shrink-0 w-full">
                              <div className="basis-0 content-stretch flex gap-[12px] grow items-end justify-end min-h-px min-w-px relative shrink-0">
                                <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
                                  <div className="content-stretch flex items-center relative shrink-0 w-full">
                                    {conv.showOutbound ? (
                                      <div className="basis-0 content-stretch flex gap-[4px] grow items-start min-h-px min-w-px relative shrink-0">
                                        <div className="flex items-center justify-center relative shrink-0">
                                          <div className="flex-none rotate-[180deg]">
                                            <div className="relative size-[16px]">
                                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                                <path d={svgPaths.p1f072800} stroke="#079455" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                              </svg>
                                            </div>
                                          </div>
                                        </div>
                                        <p className="-webkit-box basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#414651] text-[12px] text-left">
                                          Outbound call
                                        </p>
                                      </div>
                                    ) : (
                                      <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0">
                                        <p className="-webkit-box basis-0 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#414651] text-[12px] text-left">
                                          {conv.number}
                                        </p>
                                      </div>
                                    )}
                                  </div>
                                </div>
                                <div className="content-stretch flex items-center relative shrink-0">
                                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#717680] text-[11px] text-nowrap">
                                    {conv.time}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}