"use client";

export default function ActionPreview() {
  return (
    <svg
      viewBox="0 0 520 520"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Background */}
      <rect width="520" height="520" fill="#F2F1E9" />

      {/* App Header */}
      <rect width="520" height="64" fill="#111111" />
      <text
        x="32"
        y="40"
        fontSize="18"
        fontWeight="600"
        fill="#FFFFFF"
        fontFamily="system-ui"
      >
        NoDelay Automation
      </text>

      <text
        x="488"
        y="40"
        fontSize="12"
        textAnchor="end"
        fill="#D9F01B"
        fontFamily="system-ui"
      >
        Live
      </text>

      {/* Summary KPIs */}
      <g>
        <rect x="24" y="88" width="472" height="72" rx="12" fill="#FFFFFF" />

        <text x="48" y="118" fontSize="12" fill="#6B7280">Active workflows</text>
        <text x="48" y="140" fontSize="20" fontWeight="600" fill="#111111">6</text>

        <text x="220" y="118" fontSize="12" fill="#6B7280">Tasks processed</text>
        <text x="220" y="140" fontSize="20" fontWeight="600" fill="#111111">1,137</text>

        <text x="380" y="118" fontSize="12" fill="#6B7280">Success rate</text>
        <text x="380" y="140" fontSize="20" fontWeight="600" fill="#111111">94%</text>
      </g>

      {/* Section title */}
      <text
        x="24"
        y="192"
        fontSize="14"
        fontWeight="600"
        fill="#111111"
        fontFamily="system-ui"
      >
        Active workflows
      </text>

      {/* === CARD COMPONENT TEMPLATE === */}

      {/* Card 1 */}
      <g>
        <rect x="24" y="210" width="472" height="88" rx="14" fill="#FFFFFF" />

        {/* Icon */}
        <rect x="40" y="230" width="40" height="40" rx="10" fill="#D9F01B" />
        <text x="60" y="258" fontSize="18" textAnchor="middle">📄</text>

        {/* Title */}
        <text x="96" y="242" fontSize="13" fontWeight="600" fill="#111111">
          Document Processing
        </text>

        {/* Status */}
        <rect x="380" y="228" width="92" height="22" rx="11" fill="#ECFDF3" />
        <text x="426" y="243" fontSize="11" textAnchor="middle" fill="#15803D">
          Running
        </text>

        {/* Description */}
        <text x="96" y="260" fontSize="11" fill="#4B5563">
          Extracting & classifying 847 files
        </text>

        {/* Progress */}
        <rect x="96" y="274" width="300" height="6" rx="3" fill="#E5E7EB" />
        <rect x="96" y="274" width="225" height="6" rx="3" fill="#748347" />
        <text x="410" y="280" fontSize="11" fill="#748347">75%</text>
      </g>

      {/* Card 2 */}
      <g>
        <rect x="24" y="310" width="472" height="88" rx="14" fill="#FFFFFF" />

        <rect x="40" y="330" width="40" height="40" rx="10" fill="#748347" />
        <text x="60" y="358" fontSize="18" textAnchor="middle" fill="#FFFFFF">💬</text>

        <text x="96" y="342" fontSize="13" fontWeight="600" fill="#111111">
          Support Copilot
        </text>

        <rect x="380" y="328" width="92" height="22" rx="11" fill="#FFFBEB" />
        <text x="426" y="343" fontSize="11" textAnchor="middle" fill="#A16207">
          High load
        </text>

        <text x="96" y="360" fontSize="11" fill="#4B5563">
          Responded to 234 customer queries
        </text>

        <rect x="96" y="374" width="300" height="6" rx="3" fill="#E5E7EB" />
        <rect x="96" y="374" width="270" height="6" rx="3" fill="#D9F01B" />
        <text x="410" y="380" fontSize="11" fill="#D9F01B">90%</text>
      </g>

      {/* Card 3 */}
      <g>
        <rect x="24" y="410" width="472" height="88" rx="14" fill="#FFFFFF" />

        <rect x="40" y="430" width="40" height="40" rx="10" fill="#D9F01B" />
        <text x="60" y="458" fontSize="18" textAnchor="middle">📊</text>

        <text x="96" y="442" fontSize="13" fontWeight="600" fill="#111111">
          Data Analysis
        </text>

        <rect x="380" y="428" width="92" height="22" rx="11" fill="#ECFDF3" />
        <text x="426" y="443" fontSize="11" textAnchor="middle" fill="#15803D">
          Stable
        </text>

        <text x="96" y="460" fontSize="11" fill="#4B5563">
          Generated 56 actionable insights
        </text>

        <rect x="96" y="474" width="300" height="6" rx="3" fill="#E5E7EB" />
        <rect x="96" y="474" width="240" height="6" rx="3" fill="#748347" />
        <text x="410" y="480" fontSize="11" fill="#748347">80%</text>
      </g>
    </svg>
  );
}
