import AppSidebar from "@/components/global/app-side-bar";
import SearchBar from "@/components/global/search-bar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { UserButton } from "@clerk/nextjs";

type Props = {
  children: React.ReactNode;
};

const ProtectedLayout = ({ children }: Props) => {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full p-2">
          <SearchBar>
            <div className="ml-auto"></div>
            <UserButton />
          </SearchBar>
          <div className="mt-4 h-[calc(100vh-6rem)] overflow-y-auto rounded-md border p-2 shadow">
            {children}
          </div>
        </main>
      </SidebarProvider>
    </>
  );
};

export default ProtectedLayout;
