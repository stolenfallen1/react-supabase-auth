import { FaGoogle, FaFacebookF, FaTwitter } from "react-icons/fa";
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

    // TODO: Implement Google Sign In
    // async function signInWithGoogle() {
    //     await supabase.auth.signInWithOAuth({
    //         provider: "google",
    //     });
    // }

    return (
        <>
            <main className="h-screen flex items-center justify-center">
                <section className="w-1/2 flex flex-col items-center justify-center">
                    <form className="max-w-lg border border-black/75 rounded-lg flex flex-col gap-8">
                        <div className="border-2 mx-4 mt-8 flex items-center justify-center rounded-lg">
                            <button className="py-4 px-16 flex gap-4 items-center">
                                <FaGoogle className="text-red-500" />
                                <span>Sign in with Google</span>
                            </button>
                        </div>
                        <div className="border-2 mx-4 flex items-center justify-center rounded-lg">
                            <button
                                onClick={signInWithFacebook}
                                className="py-4 px-16 flex gap-4 items-center"
                            >
                                <FaFacebookF className="text-blue-500" />
                                <span>Sign in with Facebook</span>
                            </button>
                        </div>
                        <div className="border-2 mx-4 mb-8 flex items-center justify-center rounded-lg">
                            <button className="py-4 px-16 flex gap-4 items-center">
                                <FaTwitter className="text-sky-500" />
                                <span>Sign in with Twitter</span>
                            </button>
                        </div>
                    </form>
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
