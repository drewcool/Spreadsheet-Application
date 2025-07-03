import React, { useState } from 'react';

interface TabItem {
  id: string;
  label: string;
  isActive?: boolean;
}

interface FooterNavigationProps {
  onTabChange?: (tabId: string) => void;
  className?: string;
}

const FooterNavigation: React.FC<FooterNavigationProps> = ({
  onTabChange,
  className = ''
}) => {
  const [activeTab, setActiveTab] = useState<string>('all-orders');

  const tabs: TabItem[] = [
    { id: 'all-orders', label: 'All Orders' },
    { id: 'pending', label: 'Pending' },
    { id: 'reviewed', label: 'Reviewed' },
    { id: 'arrived', label: 'Arrived' }
  ];

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    onTabChange?.(tabId);
  };

  const handleAddClick = () => {
    console.log('Add button clicked');
  };

  return (
    <div className={`w-full bg-white border-t border-gray-200 ${className}`}>
      <div className="flex items-center px-8 py-1">
        <div className="flex">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`
                flex items-center justify-center px-4 py-2.5 text-base font-medium transition-colors
                ${activeTab === tab.id
                  ? 'text-green-800 bg-green-50 border-t-2 border-green-700'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                }
              `}
            >
              {tab.label}
            </button>
          ))}
          
          {/* Add Button */}
          <button
            onClick={handleAddClick}
            className="flex items-center justify-center px-1 py-2 ml-auto hover:bg-gray-50 transition-colors"
            aria-label="Add new item"
          >
            <div className="w-6 h-6 p-1 rounded bg-white flex items-center justify-center">
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 16 16" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-800"
              >
                <path 
                  d="M8 3.5V12.5M3.5 8H12.5" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FooterNavigation;