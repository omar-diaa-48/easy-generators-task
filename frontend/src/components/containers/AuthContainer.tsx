import React, { PropsWithChildren } from 'react'
import { Link } from 'react-router-dom';

interface Props extends PropsWithChildren {
    title: string;
}

const AuthContainer: React.FC<Props> = (props) => {
    const { title, children } = props;

    return (
        <div className="flex min-h-full flex-col justify-center px-6 pt-48 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h1 className='text-center'>
                    <Link to="/">
                        Easy Generators
                    </Link>
                </h1>
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">{title}</h2>
            </div>
            {children}
        </div>
    )
}

export default AuthContainer;