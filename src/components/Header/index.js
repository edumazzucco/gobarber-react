import React from 'react';
import { Link } from 'react-router-dom';
import logo from '~/assets/logo-purple.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
    return (
        <Container>
            <Content>
                <nav>
                    <img src={logo} alt="GoBarber" />
                    <Link to="/dashboard">DASHBOARD</Link>
                </nav>

                <aside>
                    <Profile>
                        <div>
                            <strong>Eduardo Mazzucco Cividini</strong>
                            <Link to="/profile">Profile</Link>
                        </div>
                        <img
                            src="https://api.adorable.io/avatars/50/abott@adorable.png"
                            alt="Eduardo Mazzucco Cividini"
                        />
                    </Profile>
                </aside>
            </Content>
        </Container>
    );
}
