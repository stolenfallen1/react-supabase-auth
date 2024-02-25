import { supabase } from "../config/supabaseClient";
import { useNavigate } from "react-router-dom";
import { useAuthentication } from "../hooks/useAuthentication";

export default function Home() {
    useAuthentication(); 

    const navigate = useNavigate();

    async function signOut() {
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.log("Error signing out", error.message);
        } else {
            localStorage.removeItem("userData");
            navigate("/");
        }
    }

    return (
        <div>
            <h1>Welcome</h1>
            <button onClick={signOut}>Logout</button>
        </div>
    );
}
