import { FaGoogle, FaFacebookF, FaTwitter, FaGithub } from "react-icons/fa";
import SPLIT_IMAGE from "../assets/Images/split_screen_img.jpg";
import { supabase } from "../config/supabaseClient";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    async function signInWithFacebook() {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: "facebook",
        });
        if (error) {
            console.log("Error signing in with Facebook", error.message);
        }
        if (data) {
            console.log(data);
            localStorage.setItem("userData", JSON.stringify(data));
            navigate("/home");
        }
    }

    async function signInWithGitHub() {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: "github",
        });
        if (error) {
            console.log("Error signing in with GitHub", error.message);
        }
        if (data) {
            console.log(data);
            localStorage.setItem("userData", JSON.stringify(data));
            navigate("/home");
        }
    }

    // TODO: Implement signInWithGoogle, signInWithTwitter and signInWithGitHub functions

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

                        <button className="py-4 px-16 flex gap-4 items-center">
                            <FaGoogle className="text-red-500" />
                            <span className="border-b-2 border-b-black/25 hover:border-b-black">
                                Sign in with Google
                            </span>
                        </button>

                        <button className="py-4 px-16 flex gap-4 items-center">
                            <FaTwitter className="text-sky-500" />
                            <span className="border-b-2 border-b-black/25 hover:border-b-black">
                                Sign in with Twitter
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
