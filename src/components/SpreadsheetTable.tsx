import React from 'react';
import type { JobRequest } from '../types';

interface SpreadsheetTableProps {
  jobs: JobRequest[];
  showFields: boolean;
  sortColumn: string | null;
  sortDirection: 'asc' | 'desc';
  onSort: (column: keyof JobRequest) => void;
}

const SpreadsheetTable: React.FC<SpreadsheetTableProps> = ({ 
  jobs, 
  showFields,
  sortColumn,
  sortDirection,
  onSort
}) => {
  const renderSortIndicator = (column: string) => {
    if (sortColumn === column) {
      return sortDirection === 'asc' ? ' ↑' : ' ↓';
    }
    return '';
  };
  
  const renderStatus = (status: string) => {
    let statusClass = '';
    
    switch(status) {
      case 'In-process':
        statusClass = 'status-in-process';
        break;
      case 'Need to start':
        statusClass = 'status-need-to-start';
        break;
      case 'Complete':
        statusClass = 'status-complete';
        break;
      case 'Blocked':
        statusClass = 'status-blocked';
        break;
      default:
        statusClass = '';
    }
    
    return (
      <div className={`px-2 py-1 rounded-full ${statusClass} inline-block`}>
        {status}
      </div>
    );
  };
  
  const renderPriority = (priority: string) => {
    let priorityClass = '';
    
    switch(priority) {
      case 'High':
        priorityClass = 'priority-high';
        break;
      case 'Medium':
        priorityClass = 'priority-medium';
        break;
      case 'Low':
        priorityClass = 'priority-low';
        break;
      default:
        priorityClass = '';
    }
    
    return <span className={`font-semibold ${priorityClass}`}>{priority}</span>;
  };
  
  return (
    <div className="flex-grow overflow-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-[#EEEEEE]">
            <th className="p-2 text-left w-12">#</th>
            <th 
              className="p-2 text-left text-[#757575] font-semibold text-xs cursor-pointer"
              onClick={() => onSort('title')}
            >
              <div className="flex items-center gap-1">
                <img src="assets/images/briefcase.svg" alt="Job" className="h-4 w-4" />
                <span>Job Request{renderSortIndicator('title')}</span>
              </div>
            </th>
            <th 
              className="p-2 text-left text-[#757575] font-semibold text-xs cursor-pointer"
              onClick={() => onSort('submittedDate')}
            >
              <div className="flex items-center gap-1">
                <img src="assets/images/calendar.svg" alt="Date" className="h-4 w-4" />
                <span>Submitted{renderSortIndicator('submittedDate')}</span>
              </div>
            </th>
            <th 
              className="p-2 text-left text-[#757575] font-semibold text-xs cursor-pointer"
              onClick={() => onSort('status')}
            >
              <div className="flex items-center gap-1">
                <img src="assets/images/chevron-circle.svg" alt="Status" className="h-4 w-4" />
                <span>Status{renderSortIndicator('status')}</span>
              </div>
            </th>
            <th 
              className="p-2 text-left text-[#757575] font-semibold text-xs cursor-pointer"
              onClick={() => onSort('submitter')}
            >
              <div className="flex items-center gap-1">
                <img src="assets/images/person.svg" alt="Person" className="h-4 w-4" />
                <span>Submitter{renderSortIndicator('submitter')}</span>
              </div>
            </th>
            <th 
              className="p-2 text-left text-[#757575] font-semibold text-xs cursor-pointer"
              onClick={() => onSort('url')}
            >
              <div className="flex items-center gap-1">
                <img src="assets/images/globe.svg" alt="URL" className="h-4 w-4" />
                <span>URL{renderSortIndicator('url')}</span>
              </div>
            </th>
            {showFields && (
              <>
                <th className="p-2 text-left bg-[#E8F0E9] border-b border-[#EEEEEE]">
                  <div className="text-[#666C66] font-semibold text-xs flex items-center gap-1">
                    <img src="assets/images/emoji.svg" alt="Assigned" className="h-4 w-4" />
                    <span>Assigned</span>
                  </div>
                </th>
                <th 
                  className="p-2 text-left bg-[#EAE3FC] text-[#645C7F] font-semibold text-xs cursor-pointer"
                  onClick={() => onSort('priority')}
                >
                  <span>Priority{renderSortIndicator('priority')}</span>
                </th>
                <th 
                  className="p-2 text-left bg-[#EAE3FC] text-[#645C7F] font-semibold text-xs cursor-pointer"
                  onClick={() => onSort('dueDate')}
                >
                  <span>Due Date{renderSortIndicator('dueDate')}</span>
                </th>
                <th 
                  className="p-2 text-left bg-[#FFE9E0] text-[#8C6B61] font-semibold text-xs cursor-pointer"
                  onClick={() => onSort('estimatedValue')}
                >
                  <span>Est. Value{renderSortIndicator('estimatedValue')}</span>
                </th>
              </>
            )}
            <th className="p-2 text-left bg-[#EEEEEE]">
              <div className="flex justify-center">
                <img src="assets/images/add.svg" alt="Add column" className="h-4 w-4" />
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job.id} className="border-b border-[#EEEEEE] hover:bg-gray-50">
              <td className="p-2 text-[#757575] text-center">{job.id}</td>
              <td className="p-2 text-[#121212] text-xs">{job.title}</td>
              <td className="p-2 text-[#121212] text-xs text-right">{job.submittedDate}</td>
              <td className="p-2 text-[#121212] text-xs">
                {renderStatus(job.status)}
              </td>
              <td className="p-2 text-[#121212] text-xs">{job.submitter}</td>
              <td className="p-2 text-[#121212] text-xs">{job.url}</td>
              {showFields && (
                <>
                  <td className="p-2 text-[#121212] text-xs bg-white">{job.assignedTo}</td>
                  <td className="p-2 text-center text-xs bg-white">
                    {renderPriority(job.priority)}
                  </td>
                  <td className="p-2 text-[#121212] text-xs text-right bg-white">{job.dueDate}</td>
                  <td className="p-2 text-[#121212] text-xs bg-white">
                    <div className="flex items-center justify-end gap-1">
                      <span>{job.estimatedValue}</span>
                      <span className="text-[#AFAFAF]">₹</span>
                    </div>
                  </td>
                </>
              )}
              <td className="p-2"></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SpreadsheetTable;