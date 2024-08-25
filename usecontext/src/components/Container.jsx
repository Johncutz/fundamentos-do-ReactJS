import UserInfo from "./UserInfo";

/* eslint-disable react/prop-types */
export default function Container({ children }) {
    return (
        <div>
            <p>Container do App</p>
            <UserInfo />
            {children}
        </div>
    )
}