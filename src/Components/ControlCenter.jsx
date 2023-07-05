import DownloadIcon from "./DownloadIcon";
const ControlCenter = () => {
  return (
    <div className="fixed inset-0 bottom-4 mx-auto mt-auto flex h-fit w-3/5 flex-row justify-around rounded-lg border  bg-white py-2 opacity-60 shadow-md transition-opacity duration-150 hover:opacity-100 print:hidden">
      <div className="flex flex-col">
        <span className="text-sm">WIP🛠️</span>
        <p className="text-xs">Built with ReactJS and TailwindCSS</p>
      </div>
      <button
        className="rounded-md bg-[#D9E3EB] px-4 py-2 text-white"
        onClick={() => window.print()}
      >
        <DownloadIcon />
      </button>
    </div>
  );
};

export default ControlCenter;
