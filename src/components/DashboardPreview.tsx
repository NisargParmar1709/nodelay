import React from "react";

export default function DashboardPreview({ className = "" }) {
  return (
    <svg
      viewBox="0 0 900 640"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Financial dashboard preview"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Canvas bg */}
      <rect width="900" height="640" fill="#F2F1E9" />

      {/* Header */}
      <rect x="0" y="0" width="900" height="72" fill="#0F1724" rx="0" />
      <text
        x="36"
        y="45"
        fontFamily="Inter, system-ui, -apple-system, 'Segoe UI', Roboto"
        fontSize="18"
        fontWeight="700"
        fill="#FFFFFF"
      >
        NoDelay Dashboard
      </text>

      {/* Live badge / user */}
      <g transform="translate(760,12)">
        <rect x="0" y="10" width="120" height="36" rx="18" fill="#D9F01B" />
        <text
          x="60"
          y="35"
          fontSize="12"
          fontWeight="700"
          textAnchor="middle"
          fill="#0F1724"
          fontFamily="Inter, system-ui"
        >
          Live • 0.8s
        </text>
      </g>

      {/* KPI strip (cards) */}
      <g transform="translate(36,92)">
        <rect x="0" y="0" width="248" height="78" rx="12" fill="#FFFFFF" />
        <text x="18" y="22" fontSize="12" fill="#6B7280">Active workflows</text>
        <text x="18" y="48" fontSize="26" fontWeight="700" fill="#111827">$6</text>
        <text x="220" y="48" fontSize="12" textAnchor="end" fill="#10B981">+4%</text>

        <rect x="268" y="0" width="248" height="78" rx="12" fill="#FFFFFF" />
        <text x="286" y="22" fontSize="12" fill="#6B7280">Tasks processed</text>
        <text x="286" y="48" fontSize="26" fontWeight="700" fill="#111827">1,137</text>
        <text x="508" y="48" fontSize="12" textAnchor="end" fill="#1FA77A">+9.3%</text>

        <rect x="536" y="0" width="328" height="78" rx="12" fill="#FFFFFF" />
        <text x="554" y="22" fontSize="12" fill="#6B7280">System health</text>
        <text x="554" y="48" fontSize="26" fontWeight="700" fill="#111827">94%</text>
        <text x="852" y="48" fontSize="12" textAnchor="end" fill="#D9F01B">Stable</text>
      </g>

      {/* Main content area */}
      {/* Left column (two primary cards stacked) */}
      <g transform="translate(36,190)">
        {/* Income card */}
        <rect x="0" y="0" width="520" height="220" rx="14" fill="#FFFFFF" />
        {/* title + chip */}
        <text x="20" y="28" fontSize="12" fill="#6B7280">Income analysis</text>
        <text x="20" y="64" fontSize="32" fontWeight="700" fill="#111827">$8,527,224</text>
        <rect x="180" y="46" width="72" height="28" rx="8" fill="#ECFDF3" />
        <text x="216" y="66" fontSize="12" textAnchor="middle" fill="#15803D" fontWeight="700">+9.3%</text>

        {/* mini bars */}
        <g transform="translate(20,100)">
          <rect x="0" y="40" width="28" height="40" rx="6" fill="#9CA46E" opacity="0.25" />
          <rect x="44" y="20" width="28" height="60" rx="6" fill="#9CA46E" opacity="0.45" />
          <rect x="88" y="0" width="28" height="80" rx="6" fill="#D9F01B" />
          <rect x="132" y="34" width="28" height="46" rx="6" fill="#9CA46E" opacity="0.35" />
          <rect x="176" y="12" width="28" height="68" rx="6" fill="#6B7A3F" opacity="0.55" />
        </g>

        <text x="20" y="200" fontSize="11" fill="#6B7280">Expense increased by $2,172 this month</text>

        {/* Expense card (side-by-side in same row) */}
        <rect x="540" y="0" width="320" height="220" rx="14" fill="#FFFFFF" />
        <text x="560" y="28" fontSize="12" fill="#6B7280">Expense analysis</text>
        <text x="560" y="64" fontSize="28" fontWeight="700" fill="#111827">$2,056,123</text>
        <rect x="720" y="46" width="72" height="28" rx="8" fill="#FEF3C7" />
        <text x="756" y="66" fontSize="12" textAnchor="middle" fill="#B45309" fontWeight="700">-2.3%</text>

        {/* small line sparkline */}
        <polyline
          points="560,110 600,95 640,108 680,86 720,96 760,84 800,92"
          fill="none"
          stroke="#6B7A3F"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="800" cy="92" r="5.5" fill="#D9F01B" stroke="#111827" strokeWidth="1.5" />

        <text x="560" y="200" fontSize="11" fill="#6B7280">Expense decreased by $1,456 this month</text>
      </g>

      {/* Right side: device / mockup area with floating cards */}
      <g transform="translate(580,190)">
        <rect x="0" y="0" width="292" height="380" rx="16" fill="#FFFFFF" />
        {/* inner subtle frame to simulate device */}
        <rect x="12" y="14" width="268" height="352" rx="10" fill="#F8F9FA" />

        {/* Floating metric card 1 */}
        <g transform="translate(-28,-34)">
          <rect x="26" y="34" width="220" height="64" rx="12" fill="#FFFFFF" opacity="0.98" />
          <text x="36" y="56" fontSize="11" fill="#6B7280">Income (monthly)</text>
          <text x="36" y="78" fontSize="16" fontWeight="700" fill="#111827">$8.5M</text>
          <text x="226" y="78" fontSize="12" textAnchor="end" fill="#10B981">+3.3%</text>
        </g>

        {/* Floating metric card 2 */}
        <g transform="translate(-6,140)">
          <rect x="26" y="180" width="220" height="64" rx="12" fill="#FFFFFF" opacity="0.98" />
          <text x="36" y="202" fontSize="11" fill="#6B7280">Expenses (monthly)</text>
          <text x="36" y="224" fontSize="16" fontWeight="700" fill="#111827">$2.05M</text>
          <text x="226" y="224" fontSize="12" textAnchor="end" fill="#F97316">-2.1%</text>
        </g>

        {/* small mock content - grid / table look */}
        <g transform="translate(26,24)">
          <rect x="0" y="0" width="220" height="120" rx="8" fill="#FFFFFF" stroke="#E6E6E9" />
          <rect x="12" y="14" width="80" height="18" rx="6" fill="#EFF6F2" />
          <rect x="12" y="44" width="60" height="10" rx="4" fill="#EDEFF1" />
          <rect x="12" y="64" width="180" height="10" rx="4" fill="#EDEFF1" />
          <rect x="12" y="84" width="120" height="10" rx="4" fill="#EDEFF1" />
        </g>
      </g>

      {/* Bottom row: Expense breakdown + Currency list */}
      <g transform="translate(36,430)">
        {/* Expense breakdown (donut) */}
        <rect x="0" y="0" width="360" height="180" rx="14" fill="#FFFFFF" />
        <text x="20" y="28" fontSize="12" fill="#111827" fontWeight="600">Expense category</text>

        {/* donut (simple layered arcs) */}
        <g transform="translate(120,110)">
          <circle r="52" fill="none" stroke="#EDEBE7" strokeWidth="18" />
          <circle r="52" fill="none" stroke="#6B7A3F" strokeWidth="18" strokeDasharray="88 252" transform="rotate(-90)" />
          <circle r="52" fill="none" stroke="#D9F01B" strokeWidth="18" strokeDasharray="58 252" strokeDashoffset="-88" transform="rotate(-90)" />
          <text x="0" y="6" fontSize="18" fontWeight="700" textAnchor="middle" fill="#111827">100%</text>
        </g>

        {/* Currency table */}
        <rect x="392" y="0" width="472" height="180" rx="14" fill="#FFFFFF" />
        <text x="412" y="28" fontSize="12" fill="#111827" fontWeight="600">Currency</text>

        {/* Rows */}
        <g transform="translate(412,50)" fontFamily="Inter, system-ui">
          <g transform="translate(0,0)">
            <circle cx="8" cy="8" r="7" fill="#EF4444" />
            <text x="30" y="12" fontSize="12" fill="#111827">Rupiah</text>
            <text x="170" y="12" fontSize="12" fontWeight="700" fill="#111827">850,000</text>
            <text x="290" y="12" fontSize="12" fill="#6B7280">IDR</text>
          </g>

          <g transform="translate(0,32)">
            <circle cx="8" cy="8" r="7" fill="#3B82F6" />
            <text x="30" y="12" fontSize="12" fill="#111827">Dollar</text>
            <text x="170" y="12" fontSize="12" fontWeight="700" fill="#111827">500,000</text>
            <text x="290" y="12" fontSize="12" fill="#6B7280">USD</text>
          </g>

          <g transform="translate(0,64)">
            <circle cx="8" cy="8" r="7" fill="#10B981" />
            <text x="30" y="12" fontSize="12" fill="#111827">Euro</text>
            <text x="170" y="12" fontSize="12" fontWeight="700" fill="#111827">350,000</text>
            <text x="290" y="12" fontSize="12" fill="#6B7280">EUR</text>
          </g>

          <g transform="translate(0,96)">
            <circle cx="8" cy="8" r="7" fill="#F59E0B" />
            <text x="30" y="12" fontSize="12" fill="#111827">Chinese Yuan</text>
            <text x="170" y="12" fontSize="12" fontWeight="700" fill="#111827">850,000</text>
            <text x="290" y="12" fontSize="12" fill="#6B7280">CNY</text>
          </g>
        </g>
      </g>

      {/* subtle corner accents */}
      <rect x="820" y="18" width="40" height="32" rx="8" fill="#D9F01B" opacity="0.25" />
      <rect x="24" y="612" width="44" height="12" rx="6" fill="#748347" opacity="0.18" />
    </svg>
  );
}