import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Sidebar: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-gray-800 text-white h-full p-4">
      <List>
        {['announcements', 'quizzes', 'schedule', 'grades'].map((item) => (
          <ListItem
            key={item}
            className="hover:bg-white hover:text-gray-800 transition-colors duration-200"
          >
            <ListItemText primary={t(item)} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Sidebar;