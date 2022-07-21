import React from 'react';
import './TextAboutUs.css';


function TextAboutUs() {
    return (
        <>
            <main id="about">

                <section id='section1' className='Section1'>
                    <div className='text-right'>
                        <h2>QUEM SOMOS?</h2>
                        <p>Somos uma e-commerce sem fins lucrativos, focada em auxiliar os pequenos e médios produtores de orgânicos, bem como no arrecadamento de fundos para solucionar as problemáticas da fome, da desnutrição e agroeconomia seguindo os parâmetros dos objetivos da ods 2 da ONU: Acabar com a fome, alcançar a segurança alimentar e melhoria da nutrição e promover a agricultura   sustentável.</p>
                    </div>
                    <img src="https://agriseiva.com.br/wp-content/uploads/2019/03/Agricultura-de-precis%C3%A3o.jpeg" alt="Foto do murilo" />
                </section>

                <section className='Section2'>
                    <img src="https://www.fundacao1demaio.org.br/media/2021/07/woman-hat-holding-funnel-works-garden-2-scaled.jpg" alt="" />
                    <div className='text-left'>
                        <h2>POR QUE COMPRAR NO GREENIVERSE?</h2>
                        <p>Somos uma empresa ética de seguimentos claros a sustentabilidade. Ademais, possuímos uma variedade de produtos desde frutas; verduras; legumes; produtos de mercearia; bebidas e laticínios; ovos e carnes até produtos de corpo e casa com um preço acessível e de boa qualidade.</p>
                    </div>

                </section>

                <section id='section3' className='Section3'>
                    <div className='text-right'>
                        <h2>COMO SURGIU A IDEIA?</h2>
                        <p>O surgimento do greeniverse se deu através de ideias de integrantes do grupo 1 da primeira turma .Net no projeto integrador no Bootcamp da Generation Brasil com o intuito de sanar as necessidades do objetivo 2 da ONU.</p>
                    </div>
                    <img src="https://revistacampoenegocios.com.br/wp-content/uploads/2021/06/Tecnologia.jpg" alt="" />
                </section>

                <section className='Section4'>
                    <img src="https://www.brasilagro.com.br/uploads/conteudo/conteudo/2018/08/dEBSh/supercana-TOqB64_510x400.jpg" alt="" />
                    <div className='text-left'>
                        <h2>COMO FUNCIONA A PLATAFORMA?</h2>
                        <p>O site Greeniverse faz a conexão de pequenos e médios produtores a consumidores (tanto pessoa física como jurídica) proporcionando uma maior facilidade aos interessados em comprar produtos orgânicos. A plataforma funciona como um mercado online com uma grande área de distribuição, trabalhando de forma ágil e eficiente. Somando-se a isso, tanto os produtores quanto pessoas em situação de vulnerabilidade podem se cadastrar na plataforma e irão ser avaliados por nossa equipe.</p>
                    </div>
                </section>


            </main>


        </>
    );
}

export default TextAboutUs;