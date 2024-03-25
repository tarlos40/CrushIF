import axios from "axios";
import { useEffect, useState } from "react";

interface User {
    _id: string
    nickname: string
    email: string
    campus: string
}

export function getUserData() {
    const [userData, setUserData] = useState<User | null>(null);

    useEffect(() => {
        async function getData() {
            const userId = localStorage.getItem("userId");

            if (!userId || userId == "null") {
                window.location.href = "/auth/login"
                return;
            }


            
            const response = await axios.get(`http://localhost:4040/user/${userId}`);

            setUserData(response.data.userFinded);
        }
        getData();

    }, []);

    return userData;
}