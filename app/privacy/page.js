import MainHeadline from '@/components/core/MainHeadline';
import Header from '@/components/Header';

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="bg-white dark:bg-black min-h-screen">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Header Section */}
          <section className="text-center">
            <MainHeadline text="Privacy Policy" subtitle="We value your trust and take your privacy seriously. Here&apos;s everything you need to know about how we handle your data." />
          </section>

          {/* Content Section */}
          <section className="flex justify-center mt-12">
            <div className="max-w-3xl text-gray-800 dark:text-gray-300">
              <h2 className="text-2xl font-semibold mb-4">
                A Privacy-First Approach to Analytics
              </h2>
              <p className="mb-6 leading-relaxed">
                On this website, we&apos;ve made a deliberate choice to use an analytics solution that respects your privacy. Our analytics tool of choice is{' '}
                <a
                  href="https://umami.is/"
                  className="text-blue-600 hover:underline dark:text-blue-400"
                >
                  Umami
                </a>, an open-source, GDPR-compliant platform that allows us to monitor website usage responsibly. Unlike many other analytics tools, Umami does not rely on third-party servers or invasive tracking techniques.
              </p>

              <h2 className="text-2xl font-semibold mb-4">
                Data Handling: Transparent and Anonymous
              </h2>
              <p className="mb-6 leading-relaxed">
                Umami is installed directly on our own server, located in Vienna, Austria. By keeping all operations under our control, we ensure that your data remains private and secure. Here are the key principles guiding how we handle analytics data:
              </p>
              <ul className="list-disc pl-6 mb-6 leading-relaxed">
                <li>We don&apos;t collect user-specific information—nothing that could identify you personally.</li>
                <li>All data is anonymized. For example, IP addresses that appear in the dashboard are hashed and cannot be traced back to individual users.</li>
                <li>We do not share data with any third-party services or advertisers.</li>
                <li>By hosting the analytics platform on our own server in Vienna, all data is processed locally and securely.</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4">
                Why Do We Use Analytics?
              </h2>
              <p className="mb-6 leading-relaxed">
                We use analytics to make Innenanzeiger better for you. By understanding how the website is used—completely anonymously—we can prioritize features, fix issues, and improve your overall experience. For instance:
              </p>
              <ul className="list-disc pl-6 mb-6 leading-relaxed">
                <li>We analyze which features are most popular to focus on further development.</li>
                <li>We identify patterns that might indicate areas of confusion or where improvements are needed.</li>
                <li>We monitor overall website performance to ensure everything runs smoothly.</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4">
                Departure Requests and Data Handling
              </h2>
              <p className="mb-6 leading-relaxed">
                When you make a request for departure data on our website, please be aware that all requests are routed through our backend. From there, the request is securely forwarded to our data provider to retrieve the relevant departure information. This process ensures that we can deliver the most accurate and up-to-date information while maintaining control over the request flow.
              </p>
              <p className="mb-6 leading-relaxed">
                Importantly, since all departure requests originate from our server, they cannot be tracked back to individual users. This means that your personal data or any identifiable information is never involved in these requests, further safeguarding your privacy.
              </p>

              <h2 className="text-2xl font-semibold mb-4">
                Your Privacy is Our Priority
              </h2>
              <p className="leading-relaxed">
                We believe that great user experiences don&apos;t need to come at the expense of your privacy. That&apos;s why we&apos;ve chosen solutions that align with this principle. If you have any questions, concerns, or feedback about our privacy practices or the website in general, we encourage you to reach out to us. We&apos;re here to listen and help.
              </p>
            </div>
          </section>

        </div>
      </main>
    </>
  );
}
