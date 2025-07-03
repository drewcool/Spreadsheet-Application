
import React, { useState, useMemo } from 'react';
import TopBar from './TopBar';
import ToolBar from './ToolBar';
import ViewTabs from './ViewTabs';
import SpreadsheetTable from './SpreadsheetTable';

import type { JobRequest } from '../types';


const App: React.FC = () => {
  const [jobs, setJobs] = useState<JobRequest[]>([
    {
      id: '1',
      title: 'Launch social media campaign for product XYZ',
      submittedDate: '15-11-2024',
      status: 'In-process',
      submitter: 'Aisha Patel',
      url: 'www.aishapatel.com',
      assignedTo: 'Sophie Choudhury',
      priority: 'Medium',
      dueDate: '20-11-2024',
      estimatedValue: '6,200,000'
    },
    {
      id: '2',
      title: 'Update press kit for company redesign',
      submittedDate: '28-10-2024',
      status: 'Need to start',
      submitter: 'Irfan Khan',
      url: 'www.irfankhanportfolio.com',
      assignedTo: 'Tejas Pandey',
      priority: 'High',
      dueDate: '30-10-2024',
      estimatedValue: '3,500,000'
    },
    {
      id: '3',
      title: 'Finalize user testing feedback for app update',
      submittedDate: '05-12-2024',
      status: 'In-process',
      submitter: 'Mark Johnson',
      url: 'www.markjohnsondesigns.com',
      assignedTo: 'Rachel Lee',
      priority: 'Medium',
      dueDate: '10-12-2024',
      estimatedValue: '4,750,000'
    },
    {
      id: '4',
      title: 'Design new features for the website',
      submittedDate: '10-01-2025',
      status: 'Complete',
      submitter: 'Emily Green',
      url: 'www.emilygreenart.com',
      assignedTo: 'Tom Wright',
      priority: 'Low',
      dueDate: '15-01-2025',
      estimatedValue: '5,900,000'
    },
    {
      id: '5',
      title: 'Prepare financial report for Q4',
      submittedDate: '25-01-2025',
      status: 'Blocked',
      submitter: 'Jessica Brown',
      url: 'www.jessicabrowncreative.com',
      assignedTo: 'Kevin Smith',
      priority: 'Low',
      dueDate: '30-01-2025',
      estimatedValue: '2,800,000'
    }
  ]);
  
  const [view, setView] = useState('All Orders');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFields, setShowFields] = useState(true);
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [filterStatus, setFilterStatus] = useState<string | null>(null);
  
  // Filter and sort jobs
  const filteredJobs = useMemo(() => {
    let result = [...jobs];
    
    // Apply view filter
    if (view === 'Pending') {
      result = result.filter(job => job.status === 'Need to start' || job.status === 'In-process');
    } else if (view === 'Reviewed') {
      result = result.filter(job => job.status === 'Complete');
    } else if (view === 'Arrived') {
      result = result.filter(job => job.status === 'Blocked');
    }
    
    // Apply status filter
    if (filterStatus) {
      result = result.filter(job => job.status === filterStatus);
    }
    
    // Apply search filter
    if (searchTerm) {
      const lowerSearchTerm = searchTerm.toLowerCase();
      result = result.filter(job => 
        job.title.toLowerCase().includes(lowerSearchTerm) ||
        job.submitter.toLowerCase().includes(lowerSearchTerm) ||
        job.url.toLowerCase().includes(lowerSearchTerm) ||
        job.assignedTo.toLowerCase().includes(lowerSearchTerm)
      );
    }
    
    // Apply sorting
    if (sortColumn) {
      result.sort((a, b) => {
        const aValue = a[sortColumn as keyof JobRequest];
        const bValue = b[sortColumn as keyof JobRequest];
        
        if (sortDirection === 'asc') {
          return aValue > bValue ? 1 : -1;
        } else {
          return aValue < bValue ? 1 : -1;
        }
      });
    }
    
    return result;
  }, [jobs, view, searchTerm, sortColumn, sortDirection, filterStatus]);
  
  const handleSort = (column: keyof JobRequest) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };
  
  const handleFilter = (status: string) => {
    setFilterStatus(status === filterStatus ? null : status);
  };
  
  const handleHideFields = () => {
    setShowFields(!showFields);
  };
  
  const handleImport = () => {
    alert('Import functionality would be implemented here');
  };
  
  const handleExport = () => {
    alert('Export functionality would be implemented here');
  };
  
  const handleShare = () => {
    alert('Share functionality would be implemented here');
  };
  
  const handleNewAction = () => {
    const newJob: JobRequest = {
      id: (jobs.length + 1).toString(),
      title: 'New Job Request',
      submittedDate: new Date().toLocaleDateString('en-GB'),
      status: 'Need to start',
      submitter: 'John Doe',
      url: 'www.example.com',
      assignedTo: 'Unassigned',
      priority: 'Medium',
      dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString('en-GB'),
      estimatedValue: '0'
    };
    setJobs([...jobs, newJob]);
    alert('New job request added');
  };
  
  
  return (
    <div className="bg-[#F8FAFC] min-h-screen flex flex-col">
      <TopBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ToolBar 
        showFields={showFields} 
        onHideFields={handleHideFields} 
        onSort={() => handleSort('title')}
        onFilter={() => handleFilter('In-process')}
        onImport={handleImport}
        onExport={handleExport}
        onShare={handleShare}
        onNewAction={handleNewAction}
      />
      <ViewTabs activeView={view} setView={setView} />
      <SpreadsheetTable 
        jobs={filteredJobs}
        showFields={showFields}
        sortColumn={sortColumn}
        sortDirection={sortDirection}
        onSort={handleSort}
      />
     
    </div>
  );
};



export default App;