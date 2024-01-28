import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { RootState } from '../../store';
import { logoutAction } from '../../store/reducers/user.reducer';

export default function Header() {
    const location = useLocation();
    const dispatch = useAppDispatch();

    const { isAuthenticated } = useAppSelector((state: RootState) => state.user)
    const [animateHeader, setAnimateHeader] = useState(false);

    useEffect(() => {
        const listener = () => {
            if (window.scrollY > 40) {
                setAnimateHeader(true);
            } else {
                setAnimateHeader(false);
            }
        };

        window.addEventListener("scroll", listener);

        return () => {
            window.removeEventListener("scroll", listener);
        };
    }, []);

    const handleUserSignOut = () => {
        dispatch(logoutAction())
    }

    return (
        <header className={`w-full backdrop-filter backdrop-blur-lg bg-white/50 fixed z-20 transition-all ease-in-out duration-500 ${animateHeader && "shadow-xl"}`}>
            <div className={`flex max-w-screen-xl ${animateHeader && "py-5"} mx-auto items-center justify-between px-8 transition-all ease-in-out duration-500`}>
                <Link
                    to="/"
                    className="text-xl font-bold tracking-tighter text-indigo-400 pr-8"
                >
                    Easy Generators
                </Link>
                <nav>
                    <div className="flex items-center justify-start">
                        {[
                            { title: 'Sign in', link: '/sign-in', auth: false },
                        ].map((item) => (
                            <Link
                                key={item.title}
                                to={item.link}
                                className={`
                                    ct-header-link
                                    ${location.pathname === item.link ? 'border-indigo-400 text-indigo-500' : ''}
                                    ${item.auth === isAuthenticated ? '' : 'hidden'}
                                `}
                            >
                                {item.title}
                            </Link>
                        ))}

                        <button
                            onClick={handleUserSignOut}
                            className={`ct-header-link ${isAuthenticated ? '' : 'hidden'}`}>
                            Sign out
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    )
}
