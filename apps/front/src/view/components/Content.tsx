interface ContentProps {
    children: React.ReactNode;
}

export function Content({ children }: ContentProps){
    return (
        <div className="bg-white w-full p-6 rounded-lg shadow-[0_1px_2px_-1px_rgba(0,0,0,0.10),_0_1px_3px_0_rgba(0,0,0,0.10)]">
            {children}
        </div>
    );
}