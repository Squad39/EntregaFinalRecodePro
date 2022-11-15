import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './Cards.css';

export default () => {
    return (
        <section className="Cards">
            <Card style={{ width: '18rem', textAlign: 'center' }}>
                <Card.Img variant="top" src="imagens/1-recode.png" />
                <Card.Body>
                    <Card.Title>Depoimentos</Card.Title>
                    <Card.Text style={{fontSize: '12px', textAlign: 'justify'}}>
                    “Tem sido um prazer poder colaborar com o projeto, ter status de como é aplicado o recurso que doamos e ver o andamento e atendimento desde alunos. A educação realmente transforma. Feliz de participar dessa mudança de vidas.”
                    <p>Mário Cabral</p>
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem', textAlign: 'center'  }}>
                <Card.Img variant="top" src="imagens/2-recode.png" />
                <Card.Body>
                    <Card.Title>Depoimentos</Card.Title>
                    <Card.Text style={{fontSize: '12px', textAlign: 'justify'}}>
                    “Aplicar aquilo que aprendemos na faculdade e já poder mudar o mundo, mesmo que seja somente um passo de cada, é algo incrível. Poder participar com uma parte das férias e ver o sorriso desse jovens e adultos, é algo que faz a gente se sentir realizados.”
                    <p>Adriana Magalhães</p>
                    </Card.Text>
                    <Button variant="primary">Participe Você</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem', textAlign: 'center'  }}>
                <Card.Img variant="top" src="imagens/3-recode.png" />
                <Card.Body>
                    <Card.Title>Depoimentos</Card.Title>
                    <Card.Text style={{fontSize: '12px', textAlign: 'justify'}}>
                    “Ouvir do projeto da Alpha Rural e decidir parte doando livros e materiais escolares, assim como poder vim até essa comunidade e doar uma parte das férias. É algo surreal ver suas ações modificando a perspectivas das pessoas. Usar o privilégio que temos para dar essa mesma perspectiva a outros.”
                    </Card.Text>
                </Card.Body>
            </Card>
        </section>
    )
}