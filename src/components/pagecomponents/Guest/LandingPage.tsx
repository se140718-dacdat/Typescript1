import { Button } from 'react-bootstrap';
import './LandingPage.css';
import { FC, Dispatch, SetStateAction, useEffect } from 'react';
import { User } from '../../../model';

interface Props {
    setUser: Dispatch<SetStateAction<User | null>>;
}
const LandingPage: FC<Props> = props => {

    useEffect(() => {
    }, [])

    const logoutHandler = () => {
        props.setUser(null);
        localStorage.setItem('user', JSON.stringify(null));
    }

    return (
        <div id="LandingPage">
            <h1>Landing Page</h1>
        </div>
    )
}
export default LandingPage;