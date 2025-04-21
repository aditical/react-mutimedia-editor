// context/TabContext.tsx
"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type TabContextType = {
    activeTab: number;
    setActiveTab: (tab: number) => void;
};

const TabContext = createContext<TabContextType>({
    activeTab: 1,
    setActiveTab: () => { },
});

export const useTab = () => useContext(TabContext);

export function TabProvider({ children }: { children: ReactNode }) {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <TabContext.Provider value={{ activeTab, setActiveTab }}>
            {children}
        </TabContext.Provider>
    );
}

export { TabContext };
