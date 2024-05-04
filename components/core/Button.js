export default function Button({ onClick, text }) {
  return (
    <>
      <button
        onClick={onClick}
        className="bg-blue-500 ml-4 rounded-xl pl-2 pr-2 transition-all text-white focus:outline focus:outline-2 focus:outline-offset-2"
      >
        {text}
      </button>
    </>
  );
}
