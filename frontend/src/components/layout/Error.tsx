import React from 'react'
import { Link } from 'react-router-dom';

interface Props {
    title?: string;
    message?: string;
}

const Error: React.FC<Props> = ({ title = '', message = 'Something went wrong' }) => {
    return (
        <section className="flex items-center p-16">
            <div className="container flex flex-col items-center ">
                <div className="flex flex-col gap-6 text-center">
                    <h2 className="font-extrabold text-9xl text-gray-600">
                        <span className="sr-only">Error</span>{title}
                    </h2>
                    <p className="text-2xl md:text-3xl text-gray-400">{message}</p>
                    <Link to='/' className="px-8 py-4 text-xl font-semibold rounded bg-purple-600 text-gray-50 hover:text-gray-200">Back to homepage</Link>
                </div>
            </div>
        </section>
    )
}

export default Error