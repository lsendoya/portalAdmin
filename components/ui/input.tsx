import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, leftIcon, rightIcon, ...props }, ref) => {
        return (
            <div className="flex items-center relative">
                {leftIcon && (
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        {leftIcon}
                    </div>
                )}
                <input
                    type={type}
                    className={cn(
                        "w-full h-10 rounded-md border border-stone-200 bg-white px-3 py-2 text-sm placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-stone-950",
                        leftIcon ? "pl-10" : "pl-3",
                        rightIcon ? "pr-10" : "pr-3",
                        className
                    )}
                    ref={ref}
                    {...props}
                />
                {rightIcon && (
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
                        {rightIcon}
                    </div>
                )}
            </div>
        );
    }
);
Input.displayName = "Input";

export { Input };
