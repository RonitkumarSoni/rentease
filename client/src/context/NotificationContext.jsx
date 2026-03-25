import React, { createContext, useContext, useState } from 'react';

const NotificationContext = createContext();

export const useNotifications = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }) => {
    const [unreadCount, setUnreadCount] = useState(3); // Mock initial count

    const clearUnread = () => setUnreadCount(0);

    return (
        <NotificationContext.Provider value={{ unreadCount, setUnreadCount, clearUnread }}>
            {children}
        </NotificationContext.Provider>
    );
};
