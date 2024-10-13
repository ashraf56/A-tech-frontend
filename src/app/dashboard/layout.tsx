import Sidebar from "@/components/Sidebar/Sidebar";

const layout = ({ children }: {
    children: React.ReactNode;
}) => {
    return (
        <div className="flex gap-2">
            <Sidebar />
            <div className="w-full">
                {children}
            </div>
        </div>
    );
};

export default layout;