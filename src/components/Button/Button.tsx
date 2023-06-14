import React from 'react';
// import '../../index.css';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
}

export default function Button({ label, ...props }: IProps) {
    return (
        <button className="bg-blue-300 px-2 py-3 text-white rounded-md" {...props}>
            {label}
        </button>
    );
}
