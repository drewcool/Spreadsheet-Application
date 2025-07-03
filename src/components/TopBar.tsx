import React from 'react';

interface TopBarProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const TopBar: React.FC<TopBarProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="flex justify-between items-center p-2 px-4 border-b border-[#EEEEEE] bg-white">
      <div className="flex items-center gap-4">
        <div className="flex items-center">
          <img src="assets/images/panel-shape.svg" alt="Panel" className="h-6 w-6" />
        </div>
        <div className="flex items-center gap-1">
          <span className="text-[#AFAFAF] text-sm font-medium">Workspace</span>
          <img src="assets/images/chevron.svg" alt="Chevron" className="h-4 w-4" />
          <span className="text-[#AFAFAF] text-sm font-medium">Folder 2</span>
          <img src="assets/images/chevron.svg" alt="Chevron" className="h-4 w-4" />
          <span className="text-[#121212] text-sm font-medium">Spreadsheet 3</span>
          <div className="p-1 rounded hover:bg-gray-100">
            <img src="assets/images/more.svg" alt="More options" className="h-4 w-4" />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="bg-[#F6F6F6] flex items-center gap-2 p-3 rounded-md">
          <img src="assets/images/search.svg" alt="Search" className="h-4 w-4" />
          <input 
            type="text" 
            placeholder="Search within sheet" 
            className="bg-transparent text-xs outline-none w-40 text-[#757575]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="p-2 rounded-lg relative hover:bg-gray-100">
          <img src="assets/images/alert.svg" alt="Notifications" className="h-5 w-5" />
          <span className="notification-badge">2</span>
        </div>
        <div className="flex items-center gap-2 p-1.5 px-3 rounded-lg hover:bg-gray-100">
          <div className="w-6 h-6 rounded-full overflow-hidden">
            <img src="https://public.youware.com/users-website-assets/prod/06acf9f5-9a01-4377-88b5-2ba90dd293e7/b2703f1289214f249a2a5b019ac061fa.jpg" alt="Profile" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col -gap-0.5">
            <span className="text-xs text-[#121212]">John Doe</span>
            <span className="text-[10px] text-[#757575]">john.doe@companyname.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;