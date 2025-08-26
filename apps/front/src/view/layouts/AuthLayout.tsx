import { Outlet } from 'react-router-dom';
import ilustration from '../../assets/8588126.png';
import { RocketIcon } from "@radix-ui/react-icons"
import { useCursorGlow } from '../../utils/useCursorGlow';

export function AuthLayout(){
    const cursorGlow = useCursorGlow();

    return (
        <div className="flex w-full h-full bg-blue-700 relative overflow-hidden"
            {...cursorGlow}
        >
            <div
                className="pointer-events-none absolute inset-0 mix-blend-soft-light"
                style={{
                    background: 'radial-gradient(300px circle at var(--x, -9999px) var(--y, -9999px), rgba(255,255,255,0.4), rgba(255,255,255,0) 65%)',
                }}
            />

            <div className="w-full h-full flex items-center justify-center flex-col gap-16 lg:w-1/2">
               <h1 className="text-2xl text-white ml-2 tracking-tight flex items-center">
                    <span className="mr-4"><RocketIcon className="w-6 h-6" /></span>
                    DiaFin
                </h1>
                <div className="mt-16 w-full max-w-[504px] px-8">
                    <Outlet />
                </div>
            </div>
            <div className="w-1/2 h-full justify-center items-center p-8 relative hidden lg:flex">
				<img src={ilustration} alt="" />
			</div>
        </div>
    )
}