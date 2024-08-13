// src/components/Sidebar/props.ts
export interface SidebarProps {
    visible: boolean;
    onClose: () => void;
  }
  

export type RootStackParamList = {
    Home: undefined;
    Login: undefined;
};