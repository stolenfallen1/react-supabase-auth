import { useState, useEffect } from "react";
import { FaGoogle, FaFacebookF, FaGithub, FaDiscord } from "react-icons/fa";
import SPLIT_IMAGE from "../assets/Images/split_screen_img.jpg";
import { supabase } from "../config/supabaseClient";

export default function Login() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Methods to sign in with OAuth
    const signInWithFacebook = async () => {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: "facebook",
            options: {
                redirectTo: "http://localhost:5173/home",
            },
        });
        if (error) {
            console.log("Error signing in with Facebook", error.message);
        }
    }
    const signInWithGitHub = async () => {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: "github",
            options: {
                redirectTo: "http://localhost:5173/home",
            },
        });
        if (error) {
            console.log("Error signing in with GitHub", error.message);
        }
    }
    const signInWithGoogle = async () => {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: "google",
            options: {
                redirectTo: "http://localhost:5173/home",
            },
        });
        if (error) {
            console.log("Error signing in with Google", error.message);
        }
    }
    const signInWithDiscord = async () => {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: "discord",
            options: {
                redirectTo: "http://localhost:5173/home",
            },
        });
        if (error) {
            console.log("Error signing in with Discord", error.message);
        }
    }

    return (
        <>
            <main
                className={`h-screen flex items-center justify-center ${windowWidth <= 768 ? 'bg-cover bg-center' : ''}`}
                style={{ backgroundImage: windowWidth <= 768 ? `url(${SPLIT_IMAGE})` : 'none' }}
            >
                <section className="w-1/2 flex flex-col items-center justify-center z-20">
                    <div className="flex flex-col items-center justify-center border-2 border-white rounded-lg md:border-black/75">
                        <button
                            onClick={signInWithFacebook}
                            className="py-4 px-8 md:px-16 flex gap-4 items-center"
                        >
                            <FaFacebookF className="text-blue-500 h-5 w-5" />
                            <span className="border-b-2 text-white text-sm md:text-lg md:text-black border-white/50 hover:border-white md:border-black/25 md:hover:border-black">
                                Sign in with Facebook
                            </span>
                        </button>

                        <button
                            onClick={signInWithGitHub}
                            className="py-4 px-8 md:px-16 flex gap-4 items-center"
                        >
                            <FaGithub className="text-black/75 h-5 w-5" />
                            <span className="border-b-2 text-white text-sm md:text-lg md:text-black border-white/50 hover:border-white md:border-black/25 md:hover:border-black">
                                Sign in with GitHub
                            </span>
                        </button>

                        <button
                            onClick={signInWithGoogle}
                            className="py-4 px-8 md:px-16 flex gap-4 items-center"
                        >
                            <FaGoogle className="text-red-500 h-5 w-5" />
                            <span className="border-b-2 text-white text-sm md:text-lg md:text-black border-white/50 hover:border-white md:border-black/25 md:hover:border-black">
                                Sign in with Google
                            </span>
                        </button>

                        <button
                            onClick={signInWithDiscord}
                            className="py-4 px-8 md:px-16 flex gap-4 items-center"
                        >
                            <FaDiscord className="text-purple-500 h-5 w-5" />
                            <span className="border-b-2 text-white text-sm md:text-lg md:text-black border-white/50 hover:border-white md:border-black/25 md:hover:border-black">
                                Sign in with Discord
                            </span>
                        </button>
                    </div>
                </section>
                <section className="w-1/2 hidden md:block">
                    <div className="h-screen flex">
                        <img
                            src={SPLIT_IMAGE}
                            alt="split image"
                            className="object-cover h-full w-full"
                        />
                    </div>
                </section>
            </main>
            {windowWidth <= 768 && (
                <div className="absolute inset-0 bg-black/50 z-10" />
            )}
        </>
    );
}
