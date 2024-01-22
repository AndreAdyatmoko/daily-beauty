export const Button1 = ({ children }) => {
  return (
    <div>
      <button className="bg-pink-400 hover:bg-pink-500 text-gray-800 font-bold py-2 px-4 rounded">
        {children}
      </button>
    </div>
  );
};

export const Button2 = ({ children }) => {
  return (
    <div>
      <button className="bg-white hover:bg-slate-100 text-gray-800 border border-slate-600 font-bold py-2 px-4 rounded">
        {children}
      </button>
    </div>
  );
};
