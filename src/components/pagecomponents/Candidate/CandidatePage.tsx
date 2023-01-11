import { Button } from 'react-bootstrap';
import './CandidatePage.css';
import { FC, Dispatch, SetStateAction, useEffect } from 'react';
import { User } from '../../../model';

interface Props {
    user: User;
    setUser: Dispatch<SetStateAction<User | null>>;
}
const CandidatePage: FC<Props> = props => {

    useEffect(() => {
    }, [props.user])

    const logoutHandler = () => {
        props.setUser(null);
        localStorage.setItem('user', JSON.stringify(null));
    }

    return (
        <div id="CandidatePage">
            <h1>Candidate Page</h1>
            <h2>Welcome {props.user.email}</h2>
            <Button variant="outline-info" className="btn-login" onClick={logoutHandler}>Logout</Button>
        </div>
    )
}
export default CandidatePage;