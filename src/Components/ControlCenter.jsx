const ControlCenter = () => {
  return (
    <div className="absolute inset-0 bottom-4 mx-auto mt-auto flex h-fit w-4/5 flex-row justify-around rounded-full border border-slate-300 bg-slate-200 p-0 py-2 opacity-60 transition-opacity duration-150 hover:opacity-100 print:hidden">
      <div>to be added</div>
      <button
        className="rounded-full bg-sky-500 px-6 py-2 text-white ring-1 "
        onClick={() => window.print()}
      >
        print
      </button>
    </div>
  );
};

export default ControlCenter;
