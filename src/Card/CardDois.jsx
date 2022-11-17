
import './Cards.css';

export default () =>{ 
    return (
        <section>

                 <div class="row m-auto justify-content-evenly">
                    <div class="card col-4  g-5 " style="width: 18rem;">
                        <img src="fotos/1-recode.png" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Depoimentos</h5>
                                <p class="card-text" style="text-align: justify;">“Tem sido um prazer poder colaborar com o projeto, ter status de como é aplicado o recurso que doamos e ver o andamento e atendimento desde alunos. A educação realmente transforma. Feliz de participar dessa mudança de vidas.” <br/> Mário Cabral</p>
                            </div>
                    </div>
                    <div class="card col-4  g-5 " style="width: 18rem;">
                        <img src="fotos/2-recode.png" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Depoimentos</h5>
                                <p class="card-text" style="text-align: justify;">“Aplicar aquilo que aprendemos na faculdade e já poder mudar o mundo, mesmo que seja somente um passo de cada, é algo incrível. Poder participar com uma parte das férias e ver o sorriso desse jovens e adultos, é algo que faz a gente se sentir realizados.”<br/> Adriana Magalhães</p>
                            </div>
                    </div>
                    <div class="card col-4  g-5 " style="width: 18rem;">
                        <img src="fotos/3-recode.png" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Depoimentos</h5>
                                <p class="card-text "
                                    style="text-align: justify;">
                                    “Ouvir do projeto da Alpha Rural e decidir parte doando livros e materiais escolares, assim como poder vim até essa comunidade e doar uma parte das férias. É algo surreal ver suas ações modificando a perspectivas das pessoas. Usar o privilégio que temos para dar essa mesma perspectiva a outros.” <br/> Fernanda Andrade</p>
                            </div>
                    </div>
                </div>
        </section>
    )
}