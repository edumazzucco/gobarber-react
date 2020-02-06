import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { Container, Time } from './styles';

export default function Dashboard() {
    return (
        <Container>
            <header>
                <button type="button">
                    <MdChevronLeft size={36} color="#FFF" />
                </button>
                <strong>06 de fevereiro</strong>
                <button type="button">
                    <MdChevronRight size={36} color="#FFF" />
                </button>
            </header>

            <ul>
                <Time past>
                    <strong>08:00</strong>
                    <span>Eduardo M.</span>
                </Time>
                <Time available>
                    <strong>09:00</strong>
                    <span>Free</span>
                </Time>
                <Time>
                    <strong>10:00</strong>
                    <span>Eduardo M.</span>
                </Time>
                <Time>
                    <strong>11:00</strong>
                    <span>Eduardo M.</span>
                </Time>
            </ul>
        </Container>
    );
}
