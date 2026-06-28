import './dashboard-mockup.css'

function NavItem({ active = false, icon, label, fill = false }) {
  return (
    <div
      className={`dm-nav-item relative flex items-center gap-3 overflow-hidden rounded-lg px-4 py-2 transition-all duration-200 ease-in-out ${
        active
          ? 'bg-[#d5e3fc] font-semibold text-[#57657a]'
          : 'text-[#464555] hover:bg-[#e4e1ee]'
      }`}
    >
      <div className={`dm-nav-indicator ${active ? 'h-[60%]' : ''}`} />
      <span
        className="material-symbols-outlined"
        style={fill ? { fontVariationSettings: "'FILL' 1" } : undefined}
      >
        {icon}
      </span>
      {label}
    </div>
  )
}

export default function DashboardMockup() {
  return (
    <div className="dashboard-mockup flex h-full min-h-[640px] overflow-hidden">
      {/* Sidebar */}
      <aside className="hidden w-60 shrink-0 border-r border-[#c7c4d8] bg-[#fcf8ff] md:block">
        <div className="flex h-full flex-col p-4">
          <div className="mb-8 flex items-center gap-3 px-4">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-[#3525cd] text-white">
              <span className="material-symbols-outlined text-lg">bug_report</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-[#3525cd]">Trakr Labs</h1>
            </div>
          </div>

          <div className="mb-8 flex w-full items-center justify-center gap-2 rounded-lg bg-[#3525cd] px-4 py-2 font-semibold text-white transition-all duration-300">
            <span className="material-symbols-outlined">add</span>
            New Issue
          </div>

          <nav className="flex-1 space-y-1">
            <NavItem active icon="dashboard" label="Overview" fill />
            <NavItem icon="bug_report" label="Issues" />
            <NavItem icon="group" label="Team" />
            <NavItem icon="settings" label="Settings" />
          </nav>

          <div className="mt-auto space-y-1 border-t border-[#c7c4d8] pt-4">
            <NavItem icon="description" label="Documentation" />
            <NavItem icon="help" label="Support" />
          </div>
        </div>
      </aside>

      {/* Main column */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* Top bar */}
        <header className="flex h-16 shrink-0 items-center border-b border-[#c7c4d8] bg-[#fcf8ff] px-4 md:px-6">
          <div className="flex items-center gap-2 md:hidden">
            <span className="material-symbols-outlined text-[#3525cd]">bug_report</span>
            <span className="text-lg font-bold text-[#3525cd]">Trakr</span>
          </div>

          <div className="hidden max-w-md flex-1 items-center md:flex">
            <div className="relative w-full">
              <span className="material-symbols-outlined absolute top-1/2 left-3 -translate-y-1/2 text-[#777587]">
                search
              </span>
              <div className="w-full rounded-lg border border-[#c7c4d8] bg-[#f5f2ff] py-1.5 pr-4 pl-10 text-[#464555]">
                Search issues, projects, or users...
              </div>
            </div>
          </div>

          <div className="ml-auto flex items-center gap-4">
            <div className="relative text-[#464555]">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-[#ba1a1a]" />
            </div>
            <div className="text-[#464555]">
              <span className="material-symbols-outlined">history</span>
            </div>
            <div className="ml-2 h-8 w-8 overflow-hidden rounded-full border border-[#c7c4d8]">
              <img
                alt=""
                className="h-full w-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9UY54fmQ4g7xog78PesHMOhhcd9p_u2VVdM60vYSKMdOIOzo8_9bJX5lw5698QdwpEmJRqKyt54iE90myp50_KAfmxtUxzziZ91Ge2PphnPwSHR_X6BzxdX71O0v4H6cCZP4Bi_wg2mcXMl5RbAbvz_oDirhFaISlkJBpOmKLuvdqCan8qJpSkJwi4pfqsV-SUX-NafL_o_gjIwhLySVlu8inXhYj1fOxYbGXMLWqvHImVeUnnb799qtmzzKZiX6VWyb8a1KIJNI"
              />
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-hidden p-4 md:p-8">
          <div className="mx-auto max-w-7xl space-y-8">
            <div className="dm-animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <h2 className="text-[28px] leading-tight font-bold tracking-tight text-[#1b1b24] md:text-4xl">
                Dashboard Overview
              </h2>
              <p className="mt-1 text-base text-[#464555]">
                System status and issue triage metrics for current sprint.
              </p>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div
                className="card-level-1 dm-animate-fade-in-up flex h-32 flex-col justify-between rounded-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ animationDelay: '0.2s' }}
              >
                <div className="flex items-start justify-between">
                  <span className="dm-mono text-[11px] font-semibold tracking-wider text-[#464555] uppercase">
                    Open Issues
                  </span>
                  <span className="material-symbols-outlined text-[#777587]">article</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-[#1b1b24]">248</span>
                  <span className="flex items-center text-[#ba1a1a]">
                    <span className="material-symbols-outlined text-sm">trending_up</span>
                    +12%
                  </span>
                </div>
              </div>

              <div
                className="card-level-1 dm-animate-fade-in-up flex h-32 flex-col justify-between rounded-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ animationDelay: '0.3s' }}
              >
                <div className="flex items-start justify-between">
                  <span className="dm-mono text-[11px] font-semibold tracking-wider text-[#464555] uppercase">
                    New Reports (24h)
                  </span>
                  <span className="material-symbols-outlined text-[#777587]">fiber_new</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-[#1b1b24]">34</span>
                  <span className="flex items-center text-[#57657a]">
                    <span className="material-symbols-outlined text-sm">trending_down</span>
                    -5%
                  </span>
                </div>
              </div>

              <div
                className="card-level-1 dm-animate-fade-in-up flex h-32 flex-col justify-between rounded-lg border-l-4 border-l-[#ba1a1a] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ animationDelay: '0.4s' }}
              >
                <div className="flex items-start justify-between">
                  <span className="dm-mono text-[11px] font-semibold tracking-wider text-[#464555] uppercase">
                    Critical Triage Needed
                  </span>
                  <span className="material-symbols-outlined text-[#ba1a1a]">warning</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-[#1b1b24]">7</span>
                  <span className="text-[#464555]">Unassigned</span>
                </div>
              </div>
            </div>

            {/* Chart + AI */}
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
              <div
                className="card-level-1 dm-animate-fade-in-up flex flex-col rounded-lg p-6 transition-all duration-300 hover:shadow-md lg:col-span-2"
                style={{ animationDelay: '0.5s' }}
              >
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-[#1b1b24]">Bug Volume (7-Day Trend)</h3>
                  <span className="dm-mono rounded border border-[#c7c4d8] px-3 py-1 text-[11px] font-semibold tracking-wider text-[#3525cd] uppercase">
                    Export
                  </span>
                </div>
                <div className="flex min-h-[160px] flex-1 items-center justify-center rounded border border-dashed border-[#c7c4d8] bg-[#f5f2ff]">
                  <span className="dm-mono text-[13px] text-[#464555]">
                    [Line Chart Visualization Placeholder]
                  </span>
                </div>
              </div>

              <div
                className="group dm-animate-fade-in-up relative flex flex-col overflow-hidden rounded-lg border border-[#c7c4d8] bg-[#f5f2ff] p-6 transition-all duration-300 hover:shadow-md lg:col-span-1"
                style={{ animationDelay: '0.6s' }}
              >
                <div className="dm-shimmer-effect pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-1000 group-hover:opacity-100" />
                <div className="pointer-events-none absolute top-0 right-0 p-4 opacity-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                  <span className="material-symbols-outlined text-6xl text-[#3525cd]">auto_awesome</span>
                </div>
                <div className="relative z-10 mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#3525cd]">smart_toy</span>
                  <h3 className="text-lg font-semibold text-[#1b1b24]">AI Insights</h3>
                </div>
                <div className="relative z-10 flex-1 space-y-4">
                  <div className="rounded border border-[#c7c4d8] bg-[#fcf8ff] p-2 transition-all hover:border-[#3525cd]/30">
                    <p className="dm-mono text-[13px] leading-relaxed text-[#464555]">
                      <strong className="text-[#1b1b24]">Pattern Detected:</strong> Spike in
                      NullReferenceExceptions in{' '}
                      <code className="rounded bg-[#e4e1ee] px-1 text-[#3525cd]">
                        PaymentGateway.cs
                      </code>{' '}
                      over the last 12 hours. Correlates with recent deploy v2.3.9.
                    </p>
                  </div>
                  <div className="rounded border border-[#c7c4d8] bg-[#fcf8ff] p-2 transition-all hover:border-[#3525cd]/30">
                    <p className="dm-mono text-[13px] leading-relaxed text-[#464555]">
                      <strong className="text-[#1b1b24]">Recommendation:</strong> Revert PR #4592
                      or apply hotfix to address unhandled API timeout responses.
                    </p>
                  </div>
                </div>
                <div className="relative z-10 mt-4 w-full rounded border border-[#3525cd] bg-[#fcf8ff] py-2 text-center dm-mono text-[11px] font-semibold tracking-wider text-[#3525cd] uppercase">
                  View Detailed Logs
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="card-level-1 dm-animate-fade-in-up overflow-hidden rounded-lg" style={{ animationDelay: '0.7s' }}>
              <div className="flex items-center justify-between border-b border-[#c7c4d8] bg-[#fcf8ff] p-6">
                <h3 className="text-lg font-semibold text-[#1b1b24]">Recent Critical Issues</h3>
                <span className="text-[#3525cd]">View All</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-left">
                  <thead>
                    <tr className="border-b border-[#c7c4d8] bg-white">
                      {['ID', 'Title', 'Reporter', 'Status', 'Assignee'].map((col) => (
                        <th
                          key={col}
                          className="dm-mono px-6 py-2 text-[11px] font-semibold tracking-wider text-[#464555] uppercase"
                        >
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="group border-b border-[#c7c4d8] transition-all duration-300 hover:bg-[#f5f2ff]">
                      <td className="dm-mono px-6 py-2 text-[13px] text-[#3525cd] transition-transform group-hover:translate-x-1">
                        BUG-8492
                      </td>
                      <td className="px-6 py-2 font-medium text-[#1b1b24]">
                        Memory leak in main dashboard rendering loop
                      </td>
                      <td className="px-6 py-2 text-[#464555]">S. Connor</td>
                      <td className="px-6 py-2">
                        <span className="dm-mono inline-flex items-center rounded-full bg-[#ffdad6] px-2 py-0.5 text-[11px] font-semibold tracking-wider text-[#93000a] uppercase">
                          Open
                        </span>
                      </td>
                      <td className="px-6 py-2">
                        <div className="flex items-center gap-2">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full border border-[#c7c4d8] bg-[#e4e1ee] text-[#464555]">
                            <span className="material-symbols-outlined text-[14px]">person</span>
                          </div>
                          <span className="text-sm text-[#464555]">Unassigned</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="group border-b border-[#c7c4d8] transition-all duration-300 hover:bg-[#f5f2ff]">
                      <td className="dm-mono px-6 py-2 text-[13px] text-[#3525cd] transition-transform group-hover:translate-x-1">
                        BUG-8490
                      </td>
                      <td className="px-6 py-2 font-medium text-[#1b1b24]">
                        API Timeout during bulk upload (Payment Gateway)
                      </td>
                      <td className="px-6 py-2 text-[#464555]">Automated System</td>
                      <td className="px-6 py-2">
                        <span className="dm-mono inline-flex items-center rounded-full bg-[#ffdbcc] px-2 py-0.5 text-[11px] font-semibold tracking-wider text-[#351000] uppercase">
                          In Progress
                        </span>
                      </td>
                      <td className="px-6 py-2">
                        <div className="flex items-center gap-2">
                          <div className="h-6 w-6 overflow-hidden rounded-full border border-[#c7c4d8]">
                            <img
                              alt=""
                              className="h-full w-full object-cover"
                              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTGNqjBPMFuWhcIP5aXLS8YLEt-SszdSkVKccv4jzeD2aNV2Oi_IOT5Wz3f3mbLLwBC9SAV3fpzu9QCEXnb1vWrBJL6VK7ZBIs0jQtw9WBswHK4643GeLvSLb2xa193GryWI47bArj9cMSQYJ2mN2HesoLiVJNhDyj2E19eT7FEKs2cGoGkjSrdrccUsVpVOpZGJ73LjEjHlRRUZ2LjVbVv4x0sq0Sy5TPanwIdal2grcUDyeS97xfkpkZXPJgX-JdGTlpYrjkVK4"
                            />
                          </div>
                          <span className="text-sm text-[#464555]">E. Ripley</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="group transition-all duration-300 hover:bg-[#f5f2ff]">
                      <td className="dm-mono px-6 py-2 text-[13px] text-[#3525cd] transition-transform group-hover:translate-x-1">
                        BUG-8485
                      </td>
                      <td className="px-6 py-2 font-medium text-[#1b1b24]">
                        Authentication token bypass on legacy endpoint
                      </td>
                      <td className="px-6 py-2 text-[#464555]">External Pentest</td>
                      <td className="px-6 py-2">
                        <span className="dm-mono inline-flex items-center rounded-full bg-[#e4e1ee] px-2 py-0.5 text-[11px] font-semibold tracking-wider text-[#464555] uppercase">
                          In Review
                        </span>
                      </td>
                      <td className="px-6 py-2">
                        <div className="flex items-center gap-2">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full border border-[#c3c0ff] bg-[#e2dfff] text-xs font-bold text-[#0f0069]">
                            JD
                          </div>
                          <span className="text-sm text-[#464555]">J. Doe</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
