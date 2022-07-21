import TextAboutUs from '../../components/textAboutUs/TextAboutUs';
import React from 'react';
import './AboutUs.css';
import Navbar from '../../components/statics/navbar/Navbar';
import CardsFlip from '../../components/cardsFoundersFlip/CardsFoundersFlip';

function AboutUs() {
    return (
        <>
            <main id='about_main'>
                <Navbar />
                <TextAboutUs />
                <section >
                    <CardsFlip />
                </section>
            </main>

        </>
    );
}
export default AboutUs;