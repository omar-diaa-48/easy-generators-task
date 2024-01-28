import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
            <div className="xl:pt-24 w-full xl:w-3/5 relative pb-12 lg:pb-0">
                <div className="relative">
                    <div className="absolute">
                        <div>
                            <h1 className="my-2 text-gray-800 font-bold text-2xl">
                                Looks like you&apos;ve found the
                                doorway to the great nothing
                            </h1>
                            <p className="my-2 text-gray-800">Sorry about that! Please visit our homepage to get where you need to go.</p>
                            <Link to="/" className="sm:w-full lg:w-auto my-6 border rounded md py-2 px-4 text-center bg-teal-500">Take me there!</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Error