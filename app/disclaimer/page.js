import MainHeadline from '@/components/core/MainHeadline';
import Header from '@/components/Header';

export default function DisclaimerPage() {
  return (
    <>
      <Header />
      <main className="bg-white dark:bg-black min-h-screen">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Header Section */}
          <section className="text-center">
            <MainHeadline 
              text="Disclaimer" 
              subtitle="Transparency is key! Here's what you need to know about Innenanzeiger and its use." 
            />
          </section>

          {/* Content Section */}
          <section className="flex justify-center mt-12">
            <div className="max-w-3xl text-gray-800 dark:text-gray-300">
              <h2 className="text-2xl font-semibold mb-4">
                Use at Your Own Risk
              </h2>
              <p className="mb-6 leading-relaxed">
                Innenanzeiger is designed to bring a touch of nostalgia and fun to train enthusiasts by simulating interior train displays. However, it&apos;s important to note that the information shown on this website may not always be accurate, complete, or up-to-date. The data presented is based on simulations and emulations and should not be used for real-world navigation, travel planning, or scheduling.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4">
                No Affiliation with Railway Companies
              </h2>
              <p className="mb-6 leading-relaxed">
                Innenanzeiger is an independent project and is in no way affiliated with Deutsche Bahn, Bayerische Regiobahn, S-Bahn München, or any other railway company. All trademarks, logos, and brand names referenced are the property of their respective owners and are used solely for the purpose of creating a realistic and enjoyable emulation. Their inclusion does not indicate endorsement, partnership, or authorization of this project by those companies.
              </p>

              <h2 className="text-2xl font-semibold mb-4">
                For Fun and Nostalgia
              </h2>
              <p className="mb-6 leading-relaxed">
                Our goal is to provide an engaging and nostalgic experience for train enthusiasts, developers, and anyone who loves transportation systems. While we strive to ensure the accuracy and quality of the emulations, please understand that this project is purely for entertainment and educational purposes.
              </p>

              <h2 className="text-2xl font-semibold mb-4">
                Disclaimer on Liability
              </h2>
              <p className="mb-6 leading-relaxed">
                By using Innenanzeiger, you agree that the creators cannot be held responsible for any inaccuracies, errors, or issues arising from the use of this website. The content and services provided are “as is” without any guarantees or warranties. You use this website entirely at your own risk.
              </p>

              <h2 className="text-2xl font-semibold mb-4">
                Feedback and Questions
              </h2>
              <p className="leading-relaxed">
                We&apos;re always open to hearing from you! If you have questions about this project, suggestions for improvement, or just want to share your thoughts, feel free to reach out. Your input helps us make Innenanzeiger better for everyone.
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
