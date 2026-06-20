import { useEffect, useState } from "react";
import { href, useNavigate } from "react-router-dom";
import { label } from "three/tsl";

export default function hello() {
    const [token, settoken] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token1 = localStorage.getItem('access_token');
        settoken(token1);
    }, []);

    // lock background scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    async function register() {
        const t = localStorage.getItem('access_token');
        if (!t) {
            navigate('/signin');
            return
        }else{
            navigate('/register');
        }
    }

    const navLinks = [
        { label: "About", href: "#shelly" },
        { label: "Testimonials", href: "#testimonials" },
        { label: "Gallery", href: "#gallery" },
        { label:"PastShadows",href:'#pastshadows'},
        { label:"Team",href:'#team'},
        { label: "Contact", href: "#contact" }
    ];

    return (
        <div className="relative">
            <div className="flex bg-black/40 backdrop-blur-md border-b border-white/10 text-white h-[60px] items-center justify-between px-2">
                <div className="flex items-center">
                    <img src="/shadow.png" className="rounded-lg size-10 mx-2"></img>
                    <div className="px-1 font-bold whitespace-nowrap">Shadow Program</div>
                </div>

                {/* Desktop links */}
                <div className="hidden md:flex flex-wrap justify-evenly w-[500px] gap-2.5 items-center font-medium">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="hover:text-pink-200 transition-colors duration-200"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-3">
                    <div className="font-bold hover:text-blue-400 transition-colors duration-200 text-base border-1 rounded-md px-2 py-1">
                        <button onClick={register}>Register</button>
                    </div>

                    {/* Mobile hamburger button */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-1.5"
                        aria-label="Toggle menu"
                        aria-expanded={menuOpen}
                    >
                        <span
                            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
                                menuOpen ? "rotate-45 translate-y-2" : ""
                            }`}
                        />
                        <span
                            className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${
                                menuOpen ? "opacity-0" : "opacity-100"
                            }`}
                        />
                        <span
                            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
                                menuOpen ? "-rotate-45 -translate-y-2" : ""
                            }`}
                        />
                    </button>
                </div>
            </div>

            {/* Mobile dropdown menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-black/80 backdrop-blur-md border-b border-white/10 ${
                    menuOpen ? "max-h-screen" : "max-h-0"
                }`}
            >
                <div className="flex flex-col px-4 py-3 gap-1">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="text-white hover:text-pink-200 hover:bg-white/5 rounded-md py-3 px-2 font-medium transition-colors duration-200"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}