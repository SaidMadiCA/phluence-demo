import React from 'react';
import svgPaths from "../../imports/svg-kj01rvydwu";
import imgAvatar from "../../assets/0d25633c5a2abc75e273df1ec95fb8011263c4d8.png";

function Logo() {
  return (
    <div className="relative shrink-0 size-[34px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <g id="Frame 1984079054">
          <path d={svgPaths.pe5bbca0} fill="url(#paint0_linear_1_4272)" id="Vector" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_4272" x1="7.21517" x2="27.6653" y1="14.3812" y2="26.5486">
            <stop stopColor="#7D1846" />
            <stop offset="1" stopColor="#FF3C90" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

interface NavItemProps {
  icon: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}

function NavItem({ icon, isActive = false, onClick }: NavItemProps) {
  return (
    <button
      onClick={onClick}
      className={`content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-[6px] shrink-0 size-[40px] transition-all hover:bg-gray-100 ${
        isActive ? 'bg-white shadow-sm' : ''
      }`}
    >
      {icon}
    </button>
  );
}

interface NavIcon {
  name: string;
  svgPaths: string[];
  stroke?: string;
  fill?: string;
}

const navIcons: NavIcon[] = [
  { name: 'home', svgPaths: [svgPaths.p16138a00], stroke: 'var(--stroke-0, #181D27)' },
  { name: 'stars', svgPaths: [svgPaths.pf8e9f00, svgPaths.p26aa0c00], stroke: 'var(--stroke-0, #717680)' },
  { name: 'chart', svgPaths: [svgPaths.p16becbc0], stroke: 'var(--stroke-0, #717680)' },
  { name: 'rows', svgPaths: [svgPaths.p2155df00, svgPaths.p15161480], stroke: 'var(--stroke-0, #717680)' },
  { name: 'check', svgPaths: [svgPaths.p4e01c00], stroke: 'var(--stroke-0, #717680)' },
  { name: 'speedometer', svgPaths: [svgPaths.p3f1e0600], stroke: 'var(--stroke-0, #717680)' },
];

interface SidebarProps {
  activeNav?: number;
  onNavigateBack?: () => void;
}

export function Sidebar({ activeNav: activeNavProp, onNavigateBack }: SidebarProps = {}) {
  const [activeNav, setActiveNav] = React.useState(activeNavProp || 0);

  React.useEffect(() => {
    if (activeNavProp !== undefined) {
      setActiveNav(activeNavProp);
    }
  }, [activeNavProp]);

  const handleNavClick = (index: number) => {
    setActiveNav(index);
    if (index === 0 && onNavigateBack) {
      onNavigateBack();
    }
  };

  return (
    <div className="bg-[#fafafa] content-stretch flex h-full items-start p-[4px] relative shrink-0 w-[52px]">
      <div className="absolute border-[#e9eaeb] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col h-full items-center justify-between relative rounded-[12px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] shrink-0 w-full">
        {/* Header */}
        <div className="content-stretch flex flex-col gap-[16px] isolate items-center justify-center pb-0 pt-[12px] px-0 relative shrink-0">
          <div className="relative shrink-0 w-full">
            <div className="flex flex-col items-center size-full">
              <div className="content-stretch flex flex-col items-center pb-[4px] pt-0 px-[8px] relative w-full">
                <Logo />
              </div>
            </div>
          </div>

          {/* Navigation Items */}
          <div className="content-stretch flex flex-col gap-[8px] items-center px-[6px] py-0 relative shrink-0">
            {navIcons.map((navIcon, index) => (
              <NavItem
                key={navIcon.name}
                isActive={activeNav === index}
                onClick={() => handleNavClick(index)}
                icon={
                  <div className="relative shrink-0 size-[20px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g>
                        {navIcon.svgPaths.map((path, i) => (
                          <path
                            key={i}
                            d={path}
                            stroke={navIcon.stroke}
                            fill={navIcon.fill}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={navIcon.stroke ? "1.66667" : undefined}
                          />
                        ))}
                      </g>
                    </svg>
                  </div>
                }
              />
            ))}
            <button className="content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-[9999px] shrink-0 hover:opacity-80 transition-opacity">
              <div className="relative shrink-0 size-[20px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <path clipRule="evenodd" d={svgPaths.pf816480} fill="var(--fill-0, #BC296A)" fillRule="evenodd" />
                </svg>
              </div>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="content-stretch flex flex-col gap-[16px] items-center pb-[12px] pt-0 px-[8px] relative shrink-0">
          {/* Help & Settings */}
          <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
            <button className="content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-[6px] shrink-0 size-[40px] hover:bg-gray-100 transition-all">
              <div className="relative shrink-0 size-[20px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <path d={svgPaths.p18f82500} stroke="var(--stroke-0, #717680)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
                </svg>
              </div>
            </button>
            <button className="content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-[6px] shrink-0 size-[40px] hover:bg-gray-100 transition-all">
              <div className="relative shrink-0 size-[20px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <g>
                    <path d={svgPaths.p3b27f100} stroke="var(--stroke-0, #717680)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
                    <path d={svgPaths.p2953b100} stroke="var(--stroke-0, #717680)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
                  </g>
                </svg>
              </div>
            </button>
          </div>

          {/* Avatar */}
          <div className="pointer-events-none relative rounded-[9999px] shrink-0 size-[40px]">
            <div className="absolute inset-0 rounded-[9999px]">
              <div className="absolute bg-[#d3dccf] inset-0 rounded-[9999px]" />
              <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[9999px] size-full" src={imgAvatar} />
            </div>
            <div className="absolute border-[0.9px] border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[9999px]" />
          </div>
        </div>
      </div>
    </div>
  );
}