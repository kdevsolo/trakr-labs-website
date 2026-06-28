import { Bug, MessageSquare, Terminal, X } from 'lucide-react'

export default function FeedbackWidget({ className = '' }) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-xl shadow-gray-200/60 ${className}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-200 bg-white px-5 py-4">
        <div className="flex items-center gap-2.5">
          <Bug size={18} className="text-brand-600" strokeWidth={2.25} />
          <span className="text-sm font-semibold text-gray-900">Feedback &amp; Bug Reports</span>
        </div>
        <button
          type="button"
          aria-label="Close widget"
          className="flex h-7 w-7 items-center justify-center rounded-md text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
        >
          <X size={16} />
        </button>
      </div>

      <div className="space-y-3 p-4">
        {/* Report a Bug */}
        <button
          type="button"
          className="flex w-full items-start gap-4 rounded-xl border border-gray-200 bg-white p-4 text-left transition-colors hover:border-gray-300 hover:bg-gray-50/80"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white">
            <Bug size={20} strokeWidth={2.25} />
          </span>
          <span>
            <span className="block text-sm font-semibold text-gray-900">Report a Bug</span>
            <span className="mt-0.5 block text-sm text-gray-500">
              Something&apos;s broken or not working right.
            </span>
          </span>
        </button>

        {/* General Feedback */}
        <button
          type="button"
          className="flex w-full items-start gap-4 rounded-xl border border-gray-200 bg-white p-4 text-left transition-colors hover:border-gray-300 hover:bg-gray-50/80"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
            <MessageSquare size={20} strokeWidth={2.25} />
          </span>
          <span>
            <span className="block text-sm font-semibold text-gray-900">Send General Feedback</span>
            <span className="mt-0.5 block text-sm text-gray-500">
              Ideas, suggestions, or general thoughts.
            </span>
          </span>
        </button>
      </div>

      {/* Technical logs bar */}
      <div className="mx-4 mb-4 flex items-center gap-2.5 rounded-lg border border-brand-100 bg-brand-50 px-3 py-2.5">
        <Terminal size={14} className="shrink-0 text-brand-600" />
        <span className="flex-1 font-mono text-[11px] text-gray-700">
          Technical logs captured automatically
        </span>
        <span className="h-2 w-2 shrink-0 rounded-full bg-blue-500" aria-hidden />
      </div>

      {/* Footer */}
      <div className="border-t border-brand-100 bg-brand-50 px-4 py-3 text-center">
        <p className="text-[10px] font-medium tracking-[0.18em] text-gray-500 uppercase">
          Powered by{' '}
          <span className="font-display text-xs font-bold tracking-normal text-brand-600 normal-case">
            Trakr Labs
          </span>
        </p>
      </div>
    </div>
  )
}
