export default function MainHeadline({ text, subtitle }) {
  return (
    <header className="text-center py-24">
      <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
        {text}
      </h1>
      <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
    {subtitle}
      </p>
    </header>
  );
}
