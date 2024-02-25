import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../config/supabaseClient";

export function useAuthentication() {
    const navigate = useNavigate();

    useEffect(() => {
        const checkUser = async () => {
            const { data } = await supabase.auth.getSession();
            if (data.session === null) {
                navigate("/");
            }
        };
        checkUser();
    }, [navigate]);
}
