type TextSectionProps = {
    title?: string; // Optional title for the section
    content?: string; // Optional content (paragraph)
    list?: string[]; // Optional list of items
  };
  
  export default function TextSection({ title, content, list }: TextSectionProps) {
    return (
      <section className="my-12">
        {title && (
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
            {title}
          </h2>
        )}
        {content && (
          <p className="mb-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {content}
          </p>
        )}
        {list && (
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            {list.map((item, index) => (
              <li key={index} className="leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        )}
      </section>
    );
  }
  