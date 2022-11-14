import {Carousel} from 'react-bootstrap';
import './Carrosel.css';

export default () => {
    return (
        <main className="Carrosel">

            <Carousel fade>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-500"
                        src="/imagens/na_escola_um.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-500"
                        src="/imagens/na_escola_dois.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-500"
                        src="/imagens/na_escola_tres.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-500"
                        src="/imagens/na_escola_quatro.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>

        </main>
    )

}