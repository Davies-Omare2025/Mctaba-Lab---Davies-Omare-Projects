import { Avatar } from "./Avatar";
import { Greetings } from "./Greetings";

export function ProfileCard({name, role, avatar}){
    return(
        <div className="card">
            <Avatar src={avatar} alt={name}/>
            <Greetings name={name}/>
            <p>{role}</p>

        </div>
    );
}