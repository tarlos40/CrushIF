import { NavBar } from "../../components/navbar";
import { Bottombar } from "../../components/bottombar";
import { getUserData } from "../../utils/getUserData";

interface User {
    _id: string
    nickname: string
    email: string
    campus: string
}

export default function HomePage() {

    // const [userData, setUserData] = useState<User | null>(null);

    // function getUserData() {
    //     useEffect(() => {
    //         async function getData() {
    //             const userId = localStorage.getItem("userId");

    //             if (!userId || userId == "null") {
    //                 window.location.href = "/auth/login"
    //                 return;
    //             }

    //             const response = await axios.get(`http://localhost:4040/user/${userId}`);

    //             setUserData(response.data.userFinded);
    //         }
    //         getData();

    //     }, []);
    // }

    const userData = getUserData()

    console.log(userData);
    
    return (
        <>
            <NavBar user={userData} />

            <main className="bg-gray-200 dark:bg-zinc-800 my-14 p-5 h-full w-full">

            </main>

            <Bottombar />
        </>
    );
}