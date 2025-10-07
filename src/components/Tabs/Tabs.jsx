import React from 'react';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  if (!tabs || tabs.length === 0) {
    return null;
  }

  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const isActive = tab.id === activeTab.id;
            const tabClass = isActive ? 'is-active' : '';

            const handleClick = e => {
              e.preventDefault();
              if (!isActive) {
                onTabSelected(tab.id);
              }
            };

            return (
              <li key={tab.id} className={tabClass} data-cy="Tab">
                <a href={`#${tab.id}`} data-cy="TabLink" onClick={handleClick}>
                  {`Selected tab is ${tab.title}`}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {activeTab.content}
      </div>
    </div>
  );
};
