export default function Privacy() {
  return (
    <main className="relative px-4 py-24 pt-32">
      <div className="mx-auto max-w-3xl">
        <header className="mb-12">
          <h1 className="font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trakr Labs Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-gray-500">
            <span className="font-medium text-gray-600">Last Updated:</span> June 2026
          </p>
        </header>

        <article className="space-y-12 text-gray-600">
          <section>
            <h2 className="font-display mb-4 text-xl font-semibold text-gray-900">Introduction</h2>
            <div className="space-y-4 leading-relaxed">
              <p>
                Trakr Labs (&quot;Trakr&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;)
                provides a feedback collection platform that enables businesses to collect,
                organize, and analyze user feedback through embeddable widgets and dashboards.
              </p>
              <p>
                This Privacy Policy explains how we collect, use, store, disclose, and protect
                information when you use our services.
              </p>
              <p>
                By using Trakr Labs, you agree to the practices described in this Privacy
                Policy.
              </p>
            </div>
          </section>

          <hr className="border-gray-200" />

          <section>
            <h2 className="font-display mb-6 text-2xl font-bold text-gray-900">
              Information We Collect
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="mb-3 text-lg font-semibold text-gray-900">Account Information</h3>
                <p className="mb-3 leading-relaxed">When you create an account, we may collect:</p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Full name</li>
                  <li>Email address</li>
                  <li>Company name</li>
                  <li>Account credentials</li>
                  <li>Subscription and billing information</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 text-lg font-semibold text-gray-900">Feedback Data</h3>
                <p className="mb-3 leading-relaxed">
                  When feedback is submitted through Trakr widgets, we may collect:
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Feedback text and comments</li>
                  <li>Bug reports</li>
                  <li>Feature requests</li>
                  <li>Screenshots uploaded by users</li>
                  <li>Screen recordings submitted through the widget</li>
                  <li>Attachments provided by users</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 text-lg font-semibold text-gray-900">Technical Metadata</h3>
                <p className="mb-3 leading-relaxed">
                  To help diagnose issues and improve service quality, we may automatically
                  collect:
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Website URL where feedback was submitted</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Device information</li>
                  <li>Session timestamps</li>
                  <li>IP address (where applicable)</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 text-lg font-semibold text-gray-900">Payment Information</h3>
                <div className="space-y-4 leading-relaxed">
                  <p>
                    Payments are processed by third-party payment providers such as Paddle or
                    Lemon Squeezy.
                  </p>
                  <p>Trakr Labs does not store or process full credit card information.</p>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-gray-200" />

          <section>
            <h2 className="font-display mb-4 text-2xl font-bold text-gray-900">
              How We Use Information
            </h2>
            <p className="mb-3 leading-relaxed">We use collected information to:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Provide and maintain the Trakr platform</li>
              <li>Process subscriptions and payments</li>
              <li>Deliver customer support</li>
              <li>Analyze feedback submissions</li>
              <li>Improve platform functionality</li>
              <li>Detect abuse, fraud, or unauthorized access</li>
              <li>Generate AI-powered summaries, categorization, and sentiment analysis</li>
            </ul>
          </section>

          <hr className="border-gray-200" />

          <section>
            <h2 className="font-display mb-4 text-2xl font-bold text-gray-900">AI Processing</h2>
            <div className="space-y-4 leading-relaxed">
              <p>
                To provide AI-powered insights, portions of submitted feedback may be processed
                by third-party AI providers.
              </p>
              <p>This may include:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Feedback text</li>
                <li>Feature requests</li>
                <li>Bug reports</li>
                <li>Customer comments</li>
              </ul>
              <p>
                These providers process data solely for the purpose of delivering requested AI
                analysis.
              </p>
            </div>
          </section>

          <hr className="border-gray-200" />

          <section>
            <h2 className="font-display mb-4 text-2xl font-bold text-gray-900">
              Third-Party Service Providers
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>We use trusted service providers to operate our platform.</p>
              <p>These may include:</p>

              <div className="space-y-6 pt-2">
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">Infrastructure &amp; Hosting</h3>
                  <ul className="list-disc space-y-2 pl-5">
                    <li>Supabase (database and authentication)</li>
                    <li>Supabase Storage (file storage)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">AI Services</h3>
                  <ul className="list-disc space-y-2 pl-5">
                    <li>Anthropic (Claude API)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">Payment Processing</h3>
                  <ul className="list-disc space-y-2 pl-5">
                    <li>Paddle</li>
                    <li>Lemon Squeezy</li>
                  </ul>
                </div>
              </div>

              <p>
                We only share information necessary for these providers to perform their
                services.
              </p>
            </div>
          </section>

          <hr className="border-gray-200" />

          <section>
            <h2 className="font-display mb-4 text-2xl font-bold text-gray-900">Data Storage</h2>
            <div className="space-y-4 leading-relaxed">
              <p>
                Data is stored using secure cloud infrastructure operated by our service
                providers.
              </p>
              <p>Depending on configuration, data may be stored in cloud regions including:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>India (Mumbai)</li>
                <li>Other regions selected by Trakr Labs infrastructure providers</li>
              </ul>
              <p>
                We take reasonable measures to protect data from unauthorized access,
                disclosure, alteration, or destruction.
              </p>
            </div>
          </section>

          <hr className="border-gray-200" />

          <section>
            <h2 className="font-display mb-4 text-2xl font-bold text-gray-900">Data Retention</h2>
            <div className="space-y-4 leading-relaxed">
              <p>Unless otherwise required by law:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Account information is retained while an account remains active.</li>
                <li>
                  Feedback submissions, screenshots, and recordings may be retained for up to 12
                  months after creation.
                </li>
                <li>
                  Deleted accounts may have associated data removed within a reasonable period.
                </li>
              </ul>
              <p>Users may request deletion of their data by contacting us.</p>
            </div>
          </section>

          <hr className="border-gray-200" />

          <section>
            <h2 className="font-display mb-4 text-2xl font-bold text-gray-900">
              Customer Responsibilities
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>Businesses using Trakr Labs are responsible for:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Informing their users that feedback collection tools are active.</li>
                <li>Obtaining any legally required consent.</li>
                <li>Maintaining their own privacy policies and disclosures.</li>
              </ul>
              <p>
                Trakr Labs acts as a service provider processing information on behalf of our
                customers.
              </p>
            </div>
          </section>

          <hr className="border-gray-200" />

          <section>
            <h2 className="font-display mb-4 text-2xl font-bold text-gray-900">Your Rights</h2>
            <div className="space-y-4 leading-relaxed">
              <p>Depending on your jurisdiction, you may have rights to:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Access your data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion</li>
                <li>Restrict processing</li>
                <li>Object to processing</li>
                <li>Request data portability</li>
              </ul>
              <p>Requests may be submitted through our support channels.</p>
            </div>
          </section>

          <hr className="border-gray-200" />

          <section>
            <h2 className="font-display mb-4 text-2xl font-bold text-gray-900">Security</h2>
            <div className="space-y-4 leading-relaxed">
              <p>
                We implement reasonable technical and organizational safeguards to protect
                information.
              </p>
              <p>
                However, no internet transmission or storage system can be guaranteed 100%
                secure.
              </p>
            </div>
          </section>

          <hr className="border-gray-200" />

          <section>
            <h2 className="font-display mb-4 text-2xl font-bold text-gray-900">
              Children&apos;s Privacy
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>Trakr Labs is not intended for individuals under the age of 13.</p>
              <p>We do not knowingly collect information from children.</p>
            </div>
          </section>

          <hr className="border-gray-200" />

          <section>
            <h2 className="font-display mb-4 text-2xl font-bold text-gray-900">
              Changes to this Policy
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>We may update this Privacy Policy from time to time.</p>
              <p>Material changes will be communicated through the platform or by email.</p>
              <p>
                Continued use of the service after updates constitutes acceptance of the revised
                policy.
              </p>
            </div>
          </section>

          <hr className="border-gray-200" />

          <section>
            <h2 className="font-display mb-4 text-2xl font-bold text-gray-900">Contact Us</h2>
            <div className="space-y-4 leading-relaxed">
              <p>For privacy-related questions, contact:</p>
              <p>
                <a
                  href="mailto:privacy@trakrlabs.com"
                  className="text-brand-300 transition-colors hover:text-brand-400"
                >
                  privacy@trakrlabs.com
                </a>
              </p>
              <p>
                Trakr Labs
                <br />
                India
              </p>
            </div>
          </section>
        </article>
      </div>
    </main>
  )
}
