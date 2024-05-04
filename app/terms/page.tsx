import MainHeadline from '@/components/core/Mainheadline';

export default function Terms() {
  return (
    <>
      <MainHeadline text="Terms of Service" />
      <div className="ml-[4rem] mt-16">
        <p>
          Hello and a warm welcome to Innenanzeiger, the website for passenger information system emulations on trains🥳
        </p>
        <p className="mt-2">
          Before you get started, there are a few things you should know. Don&apos;t worry, we&apos;ve tried to make
          them as simple and friendly as possible.
        </p>
        <p className="mt-3 font-bold">Privacy is important to us! 🛡️</p>
        <p>
          We value your privacy and do our best to protect your personal data. Please read our privacy policy to learn
          more about how we protect and use your personal data.
        </p>
        <p className="mt-2 font-bold">Be nice and fair! 🤝</p>
        <p>We ask you to follow a few simple rules:</p>
        <ul className="ml-10 mt-1">
          <li>No spamming, please.</li>
          <li>Always provide accurate information.</li>
          <li>Do not use automatic scripts or bots that could overload our systems.</li>
          <li>Do not share content that violates laws and regulations.</li>
          <li>Respect copyright.</li>
        </ul>
        <p className="mt-2 font-bold">Your Responsibility 👍</p>
        <p>
          As a user of our service, we ask you to ensure that all the information you provide is correct and up-to-date.
          Please do not upload any content that promotes violence or hate, violates the privacy of other users, or
          infringes the intellectual property or trademark rights of third parties. And of course, keep your access data
          safe and secret!
        </p>
        <p className="mt-2 font-bold">For Personal Use Only 🚫💼</p>
        <p>
          Please note that commercial use of our services is not allowed. Innenanzeiger is intended for personal use
          only.
        </p>
        <p className="mt-2 font-bold">Account Termination 🚪</p>
        <p>
          We reserve the right to delete your account at any time if you do not comply with these rules, without any
          notice, or if we discontinue the service. But don’t worry, you also have the right to delete your account at
          any time.
        </p>
        <p className="mt-2 font-bold">We&apos;re here for you, but... ⏳</p>
        <p>
          Please understand that as a non-commercial, private project, we cannot offer support and cannot guarantee the
          availability of our website. But we do our best to keep the availability as high as possible!
        </p>
        <p className="mt-2 font-bold">And finally… 📝</p>
        <p>
          The use of our services is at your own risk. We do not warrant the suitability of our services for a
          particular purpose or the non-infringement of third-party rights.
        </p>
        <p>
          Thank you for taking the time to read this. Now you can get started and enjoy Innenanzeiger to the fullest! 🎉
        </p>
      </div>
    </>
  );
}
