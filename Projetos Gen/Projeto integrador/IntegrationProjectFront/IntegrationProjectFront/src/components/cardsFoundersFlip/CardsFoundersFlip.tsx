import { CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import './CardsFoundersFlip.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function CardsFlip() {

    return (
        <>
            <div><h1 className="heading"> Fundadores<span>Greeniverse</span> </h1></div>
            <div className="flip-container" >
                <div className="flipper" >
                    <CardActionArea className="front">
                        <CardMedia
                            component="img"
                            image="https://i.imgur.com/2qHOEx2.jpg"
                            alt="Murilo"
                            className='img-card'

                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" className='card-name'>
                                Murilo Andrade da Gama
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardContent className="back">
                        <Typography variant="body2" className="back2" >
                            <h5 >21 anos, Desenvolvedor .NET FullStack Jr, Formado em análise e desenvolvimento de sistemas.</h5>
                            <a href='https://www.linkedin.com/in/muriloagama/' ><LinkedInIcon className='back-icons' /></a>
                            <a href='https://github.com/MuriloAGama' ><GitHubIcon className='back-icons'/></a>
                        </Typography>
                    </CardContent>
                </div>

                <div className="flipper" >
                    <CardActionArea className="front">
                        <CardMedia
                            component="img"
                            image="https://i.imgur.com/CcaG6Qs.png"
                            alt="Matheus Catel"
                            className='img-card'

                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" className='card-name'>
                                Matheus Alexandre Catel de Barros Soares
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardContent className="back">
                        <Typography variant="body2" className="back2">
                            <h5>25 anos, Desenvolvedor .NET FullStack Jr, Formado em publicidade e propaganda.</h5>
                            <a href='https://www.linkedin.com/in/matheuscatel/'><LinkedInIcon className='back-icons' /></a>
                            <a href='https://github.com/cateldev'><GitHubIcon className='back-icons' /></a>
                        </Typography>
                    </CardContent>
                </div>

                <div className="flipper" >
                    <CardActionArea className="front">
                        <CardMedia
                            component="img"
                            image="https://i.imgur.com/BfKM67O.png"
                            alt="Kauane Farias"
                            className='img-card'

                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" className='card-name'>
                                Kauane Farias
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardContent className="back">
                        <Typography variant="body2" className="back2">
                            <h5>18 anos, Desenvolvedora .NET FullStack Jr, com preferência em backend, persistente e orientada a detalhes</h5>
                            <a href='https://www.linkedin.com/in/kauane-farias/'><LinkedInIcon className='back-icons' /></a>
                            <a href='https://github.com/kaufariax'><GitHubIcon className='back-icons' /></a>
                        </Typography>
                    </CardContent>
                </div>

                <div className="flipper" >
                    <CardActionArea className="front">
                        <CardMedia
                            component="img"
                            image="https://i.imgur.com/eNv3z84.png"
                            alt="Rodrigo da Silva França"
                            className='img-card'

                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" className='card-name'>
                                Rodrigo da Silva França
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardContent className="back">
                        <Typography variant="body2" className="back2">
                            <h5>23 anos, Desenvolvedor .NET FullStack Jr, com experiência na área.</h5>
                            <a href='https://www.linkedin.com/in/rodrigo-sfranca/'><LinkedInIcon className='back-icons' /></a>
                            <a href='https://github.com/NotBuer'><GitHubIcon className='back-icons' /></a>
                        </Typography>
                    </CardContent>
                </div>

                <div className="flipper" >
                    <CardActionArea className="front">
                        <CardMedia
                            component="img"
                            image="https://i.imgur.com/d3ltCqC.png"
                            alt="Thamyres Cavalcanti"
                            className='img-card'

                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" className='card-name'>
                                Thamyres Vitoria da Silva Cavalcanti
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardContent className="back">
                        <Typography variant="body2" className="back2">
                            <h5>18 anos, Desenvolvedora .NET FullStack Jr, persistente e bom trabalho em equipe.</h5>
                            <a href='https://www.linkedin.com/in/thamyrescavalcanti/'><LinkedInIcon className='back-icons' /></a>
                            <a href='https://github.com/ThamyC1001'><GitHubIcon className='back-icons' /></a>
                        </Typography>
                    </CardContent>
                </div>

                <div className="flipper" >
                    <CardActionArea className="front">
                        <CardMedia
                            component="img"
                            image="https://i.imgur.com/N201MWg.png"
                            alt="Uriel"
                            className='img-card'

                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" className='card-name'>
                                Uriel Pereira Alves
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardContent className="back">
                        <Typography variant="body2" className="back2">
                            <h5>30 anos, Desenvolvedor .NET FullStack Jr, estudando análise e desenvolvimento de sistemas.</h5>
                            <a href='https://www.linkedin.com/in/uriel-pereira/'><LinkedInIcon className='back-icons' /></a>
                            <a href='https://github.com/urielpereiraalves'><GitHubIcon className='back-icons' /></a>
                        </Typography>
                    </CardContent>
                </div>

                <div className="flipper" >
                    <CardActionArea className="front">
                        <CardMedia
                            component="img"
                            image="https://i.imgur.com/whxdHdF.png"
                            alt="Gabriela"
                            className='img-card'

                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" className='card-name'>
                                Gabriela Maria Dantas Peres
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardContent className="back">
                        <Typography variant="body2" className="back2">
                            <h5>23 anos, Desenvolvedora .NET FullStack Jr, criativa e persistente.</h5>
                            <a href='https://www.linkedin.com/in/-gabrielaperes/' className='back2'><LinkedInIcon className='back-icons' /></a>
                            <a href='https://github.com/GabrielaPeres' className='back2'><GitHubIcon className='back-icons' /></a>
                        </Typography>
                    </CardContent>
                </div>

            </div>
        </>
    );
}

export default CardsFlip;