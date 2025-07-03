import React from 'react';

interface ViewTabsProps {
  activeView: string;
  setView: React.Dispatch<React.SetStateAction<string>>;
}

const ViewTabs: React.FC<ViewTabsProps> = ({ activeView, setView }) => {
  const views = ['All Orders', 'Pending', 'Reviewed', 'Arrived'];
  
  return (
    <div className="flex items-center px-8 border-b border-[#EEEEEE] bg-white">
      {views.map(view => (
        <button 
          key={view}
          className={`py-2.5 px-4 text-base ${activeView === view ? 'view-active' : 'text-[#757575]'}`}
          onClick={() => setView(view)}
        >
          {view}
        </button>
      ))}
      <button className="p-2 ml-1 hover:bg-gray-100 rounded">
        <img src="assets/images/plus.svg" alt="Add view" className="h-4 w-4" />
      </button>
    </div>
  );
};

export default ViewTabs;