import React from 'react';

interface ToolBarProps {
  showFields: boolean;
  onHideFields: () => void;
  onSort: () => void;
  onFilter: () => void;
  onImport: () => void;
  onExport: () => void;
  onShare: () => void;
  onNewAction: () => void;
}

const ToolBar: React.FC<ToolBarProps> = ({
  showFields,
  onHideFields,
  onSort,
  onFilter,
  onImport,
  onExport,
  onShare,
  onNewAction
}) => {
  return (
    <div className="flex justify-between items-center py-1.5 px-2 border-b border-[#EEEEEE] bg-white">
      <div className="flex items-center">
        <div className="p-2 rounded hover:bg-gray-100 flex items-center gap-1">
          <span className="text-sm text-[#121212]">Tool bar</span>
          <img src="assets/images/chevron-double.svg" alt="Expand" className="h-4 w-4" />
        </div>
        <div className="w-px h-6 bg-[#EEEEEE] mx-2"></div>
        <div className="flex items-center gap-2">
          <button 
            className="flex items-center gap-1 py-2 px-2 text-sm text-[#121212] rounded hover:bg-gray-100"
            onClick={onHideFields}
          >
            <img src="assets/images/eye.svg" alt="Hide fields" className="h-4 w-4" />
            <span>{showFields ? 'Hide fields' : 'Show fields'}</span>
          </button>
          <button 
            className="flex items-center gap-1 py-2 px-2 text-sm text-[#121212] rounded hover:bg-gray-100"
            onClick={onSort}
          >
            <img src="assets/images/arrow-sort.svg" alt="Sort" className="h-4 w-4" />
            <span>Sort</span>
          </button>
          <button 
            className="flex items-center gap-1 py-2 px-2 text-sm text-[#121212] rounded hover:bg-gray-100"
            onClick={onFilter}
          >
            <img src="assets/images/filter.svg" alt="Filter" className="h-4 w-4" />
            <span>Filter</span>
          </button>
          <button 
            className="flex items-center gap-1 py-2 px-2 text-sm text-[#121212] rounded hover:bg-gray-100"
          >
            <img src="assets/images/arrow-autofit.svg" alt="Cell view" className="h-4 w-4" />
            <span>Cell view</span>
          </button>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2">
          <button 
            className="flex items-center gap-1 py-2 px-2 text-sm text-[#545454] rounded hover:bg-gray-100 border border-[#EEEEEE]"
            onClick={onImport}
          >
            <img src="assets/images/arrow-download.svg" alt="Import" className="h-4 w-4" />
            <span>Import</span>
          </button>
          <button 
            className="flex items-center gap-1 py-2 px-2 text-sm text-[#545454] rounded hover:bg-gray-100 border border-[#EEEEEE]"
            onClick={onExport}
          >
            <img src="assets/images/arrow-upload.svg" alt="Export" className="h-4 w-4" />
            <span>Export</span>
          </button>
          <button 
            className="flex items-center gap-1 py-2 px-2 text-sm text-[#545454] rounded hover:bg-gray-100 border border-[#EEEEEE]"
            onClick={onShare}
          >
            <img src="assets/images/share.svg" alt="Share" className="h-4 w-4" />
            <span>Share</span>
          </button>
        </div>
        <button 
          className="flex items-center gap-1 py-2 px-6 text-sm text-white rounded bg-[#4B6A4F] hover:bg-[#3E5741]"
          onClick={onNewAction}
        >
          <img src="assets/images/arrow-split.svg" alt="New Action" className="h-4 w-4" />
          <span>New Action</span>
        </button>
      </div>
    </div>
  );
};

export default ToolBar;