import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

// Add CSS custom styles
const styles = `
.notification-badge {
  position: absolute;
  top: 2px;
  right: 2px;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #4B6A4F;
  color: white;
  font-size: 10px;
  border: 2px solid white;
}

.table-cell {
  border-bottom: 1px solid #EEEEEE;
  border-right: 1px solid #EEEEEE;
}

.status-in-process {
  background-color: #FFF3D6;
  color: #84640A;
}

.status-need-to-start {
  background-color: #E2E8F0;
  color: #475569;
}

.status-complete {
  background-color: #D2F2E2;
  color: #0A6D3C;
}

.status-blocked {
  background-color: #FFE1DD;
  color: #C12119;
}

.priority-high {
  color: #EF4C43;
}

.priority-medium {
  color: #C1920F;
}

.priority-low {
  color: #1A8CFF;
}

.view-active {
  background-color: #E8F0E9;
  border-top: 2px solid #4B6A4F;
  font-weight: 600;
  color: #3E5741;
}
`;

// Create style element and append to head
const styleElement = document.createElement('style');
styleElement.textContent = styles;
document.head.appendChild(styleElement);

// Create root and render app
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);