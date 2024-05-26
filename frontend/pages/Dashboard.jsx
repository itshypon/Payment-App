import { Appbar } from "../components/AppBar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users"

export function Dashboard(){
    return <>
        <Appbar />
        <div className="m-8">
            <Balance value={"Rs.5000"} />
            <Users />
        </div>
    </>
}