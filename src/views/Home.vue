<template class="test">
    <div class="container text-center com1">
        <div>
            <h5>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
             corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, 
             similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. 
             Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, 
             cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, 
             omnis voluptas assumenda est, omnis dolor repellendus. 
             Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates 
             repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus,
              ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."</h5>
        </div><hr>
        <div class="my-4 ml-5">
            <b-card-group deck>
                    <b-card
                    title= "name1"
                    img-src= "https://placekitten.com/480/210"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2">
                    <b-card-text />
                    
                    <b-button v-b-modal.modal-xl variant="primary">Detalles</b-button>
                    <b-modal id="modal-xl" scrollable size="xl" title="Curso Disponible">
                        an modal for more info
                    </b-modal>
                </b-card>

                    <b-card
                    title= "name2"
                    img-src= "https://placekitten.com/480/210"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2">
                    <b-card-text />
                    
                    <b-button v-b-modal.modal-xl variant="primary" class="bton2">Detalles</b-button>
                    <b-modal id="modal-xl2" scrollable size="xl" title="Curso Disponible">
                        an modal for more info
                    </b-modal>
                </b-card>

                    <b-card
                    title= "name3"
                    img-src= "https://placekitten.com/480/210"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2">
                    <b-card-text />
                    
                    <b-button v-b-modal.modal-xl variant="primary" class="bton3">Detalles</b-button>
                    <b-modal id="modal-xl3" scrollable size="xl" title="Curso Disponible">
                        an modal for more info
                    </b-modal>
                </b-card>
            </b-card-group>
        </div>
    </div>
    
</template>
<style scoped>
/* .test{
    
}
.com1{
    max-height: 100%;
    height: 80%;
} */
</style>