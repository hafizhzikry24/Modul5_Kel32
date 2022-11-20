import "./CardProfile.css";

export default function CardProfile(props) {
    return (
        <div className="containerCardProfile">
            <img src={props.avatar} alt="avatar" className="avatarProfile" />
            <div className="containerProfileitems">
                <p className="usernameProfile">username: {props.username}</p>
                <p className="emailProfile">email: {props.email}</p>
                <p className="nameProfile">nama: {props.name}</p>
                <p className="blogProfile">blog: {props.blog}</p>
                <p className="locationProfile">Lokasi: {props.location}</p>
                <p className="twitterProfile">twitter: {props.twitter}</p>
            </div>
        </div>
    );
}