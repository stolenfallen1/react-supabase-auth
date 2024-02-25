import { FaGoogle, FaFacebookF, FaGithub, FaDiscord } from "react-icons/fa";
import SPLIT_IMAGE from "../assets/Images/split_screen_img.jpg";
import { supabase } from "../config/supabaseClient";

export default function Login() {
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
            <main className="h-screen flex items-center justify-center">
                <section className="w-1/2 flex flex-col items-center justify-center">
                    <div className="flex flex-col items-center justify-center border-2 border-black/25 rounded-lg">
                        <button
                            onClick={signInWithFacebook}
                            className="py-4 px-16 flex gap-4 items-center"
                        >
                            <FaFacebookF className="text-blue-500" />
                            <span className="border-b-2 border-b-black/25 hover:border-b-black">
                                Sign in with Facebook
                            </span>
                        </button>

                        <button
                            onClick={signInWithGitHub}
                            className="py-4 px-16 flex gap-4 items-center"
                        >
                            <FaGithub className="text-black/75" />
                            <span className="border-b-2 border-b-black/25 hover:border-b-black">
                                Sign in with GitHub
                            </span>
                        </button>

                        <button
                            onClick={signInWithGoogle}
                            className="py-4 px-16 flex gap-4 items-center"
                        >
                            <FaGoogle className="text-red-500" />
                            <span className="border-b-2 border-b-black/25 hover:border-b-black">
                                Sign in with Google
                            </span>
                        </button>

                        <button
                            onClick={signInWithDiscord}
                            className="py-4 px-16 flex gap-4 items-center"
                        >
                            <FaDiscord className="text-purple-500" />
                            <span className="border-b-2 border-b-black/25 hover:border-b-black">
                                Sign in with Discord
                            </span>
                        </button>
                    </div>
                </section>
                <section className="w-1/2">
                    <div className="h-screen flex">
                        <img
                            src={SPLIT_IMAGE}
                            alt="split image"
                            className="object-cover h-full w-full"
                        />
                    </div>
                </section>
            </main>
        </>
    );
}
