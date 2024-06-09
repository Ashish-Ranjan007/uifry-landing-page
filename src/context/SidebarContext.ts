import { Dispatch, SetStateAction, createContext } from "react";

export const SidebarContext = createContext<{
    openSidebar: boolean;
    setOpenSidebar: Dispatch<SetStateAction<boolean>>;
}>({
    openSidebar: false,
    setOpenSidebar: () => {},
});
