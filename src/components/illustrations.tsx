export function HeroIllustration() {
  return (
    <svg viewBox="0 0 480 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-md mx-auto">
      <rect x="40" y="30" width="400" height="260" rx="16" fill="#1e1b4b" className="dark:fill-indigo-950/60" />
      <rect x="40" y="30" width="400" height="36" rx="16" fill="#312e81" className="dark:fill-indigo-900/60" />
      <circle cx="64" cy="48" r="6" fill="#ef4444" />
      <circle cx="84" cy="48" r="6" fill="#fbbf24" />
      <circle cx="104" cy="48" r="6" fill="#22c55e" />

      <text x="72" y="100" fill="#f472b6" fontFamily="monospace" fontSize="14" fontWeight="bold">GET</text>
      <text x="110" y="100" fill="#93c5fd" fontFamily="monospace" fontSize="14">https://api.example.com</text>
      <rect x="56" y="110" width="288" height="1" fill="#4338ca" opacity="0.3" />

      <text x="72" y="132" fill="#818cf8" fontFamily="monospace" fontSize="12" fontWeight="bold">[Captures]</text>
      <text x="72" y="150" fill="#67e8f9" fontFamily="monospace" fontSize="12">token: jsonpath</text>
      <text x="168" y="150" fill="#a5f3a4" fontFamily="monospace" fontSize="12">&quot;$.token&quot;</text>
      <rect x="56" y="160" width="288" height="1" fill="#4338ca" opacity="0.3" />

      <text x="72" y="180" fill="#c084fc" fontFamily="monospace" fontSize="12" fontWeight="bold">export</text>
      <text x="120" y="180" fill="#e0e7ff" fontFamily="monospace" fontSize="12">token</text>

      <rect x="340" y="88" width="88" height="56" rx="10" fill="#312e81" className="dark:fill-indigo-900/50" stroke="#6366f1" strokeWidth="1.5" />
      <text x="364" y="112" fill="#a5f3a4" fontFamily="monospace" fontSize="10">200 OK</text>
      <text x="356" y="128" fill="#22c55e" fontFamily="monospace" fontSize="16">&#10003;</text>

      <rect x="340" y="156" width="88" height="48" rx="10" fill="#312e81" className="dark:fill-indigo-900/50" stroke="#8b5cf6" strokeWidth="1.5" />
      <text x="356" y="176" fill="#fbbf24" fontFamily="monospace" fontSize="10">{"{token}"}</text>
      <text x="352" y="192" fill="#c084fc" fontFamily="monospace" fontSize="9">captured</text>

      <circle cx="100" cy="240" r="24" fill="#4338ca" opacity="0.4" />
      <circle cx="100" cy="240" r="16" fill="#6366f1" opacity="0.6" />
      <circle cx="100" cy="240" r="8" fill="#818cf8" />

      <line x1="124" y1="240" x2="200" y2="240" stroke="#6366f1" strokeWidth="2" strokeDasharray="6 4" />
      <circle cx="220" cy="240" r="20" fill="#7c3aed" opacity="0.4" />
      <circle cx="220" cy="240" r="12" fill="#a78bfa" />
      <text x="212" y="244" fill="white" fontFamily="monospace" fontSize="12" fontWeight="bold">&lt;/&gt;</text>

      <line x1="240" y1="240" x2="310" y2="240" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="6 4" />
      <circle cx="330" cy="240" r="20" fill="#6d28d9" opacity="0.4" />
      <circle cx="330" cy="240" r="12" fill="#8b5cf6" />
      <text x="322" y="244" fill="white" fontFamily="monospace" fontSize="14">&#10003;</text>
    </svg>
  );
}

export function RocketIllustration() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-40 h-40 mx-auto">
      <circle cx="100" cy="100" r="90" fill="#eef2ff" className="dark:fill-indigo-950/40" />
      <circle cx="100" cy="100" r="70" fill="#e0e7ff" className="dark:fill-indigo-900/30" />

      <ellipse cx="100" cy="145" rx="20" ry="8" fill="#6366f1" opacity="0.3" />

      <path d="M100 40 C100 40 80 70 80 110 L90 130 L110 130 L120 110 C120 70 100 40 100 40Z" fill="#6366f1" />
      <path d="M90 130 L85 145 L95 135Z" fill="#ef4444" />
      <path d="M110 130 L115 145 L105 135Z" fill="#ef4444" />
      <circle cx="100" cy="80" r="10" fill="#e0e7ff" className="dark:fill-indigo-200" />
      <circle cx="100" cy="80" r="6" fill="#818cf8" />

      <path d="M80 90 L65 100 L78 100Z" fill="#818cf8" />
      <path d="M120 90 L135 100 L122 100Z" fill="#818cf8" />

      <path d="M92 130 L95 160 L100 145 L105 160 L108 130Z" fill="#fbbf24" opacity="0.8" />
      <path d="M94 130 L97 155 L100 145 L103 155 L106 130Z" fill="#f97316" opacity="0.6" />
    </svg>
  );
}

export function ModularBlocksIllustration() {
  return (
    <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-sm mx-auto">
      <rect x="20" y="40" width="100" height="80" rx="12" fill="#6366f1" opacity="0.15" stroke="#6366f1" strokeWidth="1.5" />
      <text x="40" y="68" fill="#6366f1" fontFamily="monospace" fontSize="10" fontWeight="bold">auth.hurlx</text>
      <text x="36" y="84" fill="#818cf8" fontFamily="monospace" fontSize="8">export token</text>
      <text x="36" y="96" fill="#818cf8" fontFamily="monospace" fontSize="8">export expires</text>

      <rect x="150" y="40" width="100" height="80" rx="12" fill="#8b5cf6" opacity="0.15" stroke="#8b5cf6" strokeWidth="1.5" />
      <text x="166" y="68" fill="#8b5cf6" fontFamily="monospace" fontSize="10" fontWeight="bold">config.hurlx</text>
      <text x="162" y="84" fill="#a78bfa" fontFamily="monospace" fontSize="8">export base_url</text>
      <text x="162" y="96" fill="#a78bfa" fontFamily="monospace" fontSize="8">export api_ver</text>

      <rect x="280" y="20" width="100" height="80" rx="12" fill="#22c55e" opacity="0.15" stroke="#22c55e" strokeWidth="1.5" />
      <text x="300" y="48" fill="#22c55e" fontFamily="monospace" fontSize="10" fontWeight="bold">test.hurlx</text>
      <text x="292" y="64" fill="#4ade80" fontFamily="monospace" fontSize="8">import auth</text>
      <text x="292" y="76" fill="#4ade80" fontFamily="monospace" fontSize="8">import config</text>
      <text x="292" y="88" fill="#4ade80" fontFamily="monospace" fontSize="8">{"GET {{users}}"}</text>

      <line x1="120" y1="80" x2="150" y2="80" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="4 3" />
      <line x1="250" y1="70" x2="280" y2="55" stroke="#8b5cf6" strokeWidth="1.5" strokeDasharray="4 3" />
      <line x1="250" y1="90" x2="280" y2="70" stroke="#8b5cf6" strokeWidth="1.5" strokeDasharray="4 3" markerEnd="url(#arrow)" />

      <path d="M290 100 L290 160 L380 160 L380 100" fill="#fbbf24" opacity="0.1" stroke="#fbbf24" strokeWidth="1.5" rx="12" />
      <rect x="290" y="100" width="90" height="60" rx="12" fill="#fbbf24" opacity="0.1" stroke="#fbbf24" strokeWidth="1.5" />
      <text x="308" y="125" fill="#d97706" fontFamily="monospace" fontSize="10" fontWeight="bold">results</text>
      <text x="300" y="142" fill="#fbbf24" fontFamily="monospace" fontSize="18">&#10003;</text>

      <line x1="335" y1="100" x2="335" y2="100" stroke="#22c55e" strokeWidth="1.5" />

      <text x="55" y="148" fill="#6b7280" fontFamily="sans-serif" fontSize="9" textAnchor="middle">Module A</text>
      <text x="200" y="148" fill="#6b7280" fontFamily="sans-serif" fontSize="9" textAnchor="middle">Module B</text>
      <text x="330" y="178" fill="#6b7280" fontFamily="sans-serif" fontSize="9" textAnchor="middle">Test Suite</text>
    </svg>
  );
}

export function TestPassedIllustration() {
  return (
    <svg viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-36 h-36 mx-auto">
      <circle cx="90" cy="90" r="80" fill="#f0fdf4" className="dark:fill-green-950/30" />
      <circle cx="90" cy="90" r="60" fill="#dcfce7" className="dark:fill-green-900/20" />
      <circle cx="90" cy="90" r="40" fill="#22c55e" opacity="0.8" />
      <path d="M70 90 L84 104 L112 76" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function NetworkIllustration() {
  return (
    <svg viewBox="0 0 300 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-xs mx-auto">
      <circle cx="60" cy="90" r="30" fill="#eef2ff" className="dark:fill-indigo-950/40" stroke="#6366f1" strokeWidth="1.5" />
      <text x="48" y="86" fill="#6366f1" fontFamily="monospace" fontSize="9">&lt;/&gt;</text>
      <text x="38" y="100" fill="#6366f1" fontFamily="sans-serif" fontSize="8">Client</text>

      <circle cx="240" cy="90" r="30" fill="#faf5ff" className="dark:fill-purple-950/40" stroke="#8b5cf6" strokeWidth="1.5" />
      <text x="228" y="86" fill="#8b5cf6" fontFamily="monospace" fontSize="9">API</text>
      <text x="220" y="100" fill="#8b5cf6" fontFamily="sans-serif" fontSize="8">Server</text>

      <line x1="90" y1="90" x2="210" y2="90" stroke="#6366f1" strokeWidth="2" strokeDasharray="8 4" />

      <rect x="130" y="70" width="40" height="40" rx="8" fill="#fbbf24" opacity="0.2" stroke="#fbbf24" strokeWidth="1.5" />
      <text x="137" y="94" fill="#d97706" fontFamily="monospace" fontSize="9">hurlx</text>

      <path d="M150 45 L155 35 L160 45" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" />
      <line x1="155" y1="35" x2="155" y2="70" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" />

      <path d="M150 135 L155 145 L160 135" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" />
      <line x1="155" y1="110" x2="155" y2="145" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" />

      <text x="95" y="80" fill="#6366f1" fontFamily="monospace" fontSize="8">GET</text>
      <text x="185" y="80" fill="#22c55e" fontFamily="monospace" fontSize="8">200</text>

      <text x="105" y="108" fill="#8b5cf6" fontFamily="monospace" fontSize="8">{"{token}"}</text>
    </svg>
  );
}
