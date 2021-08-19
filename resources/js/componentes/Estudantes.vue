<template>
    <div>
        <div class="container">
            <h2>Estudantes</h2>
            <div class="panel panel-primary">
                <div class="panel-heading">
                    Estudantes
                    <router-link to="/novo" class="btn btn-info pull-right" style="margin-top:-7px;margin-left:2px;">Novo Estudante</router-link>
                </div>
                <div class="panel-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Email</th>
                                <th>Telefone</th>
                                <th>Gênero</th>
                                <th>Ação</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="estudante in estudantes" :key="estudante.id">
                                <td>{{estudante.id}}</td>
                                <td>{{estudante.nome}}</td>
                                <td>{{estudante.email}}</td>
                                <td>{{estudante.telefone}}</td>
                                <td>{{estudante.genero}}</td>
                                <td>
                                    <div class="btn-group" role="group">
                                        <router-link :to="{name: 'editar', params: {id: estudante.id}}" class="btn btn-success">Editar</router-link>
                                        <button class="btn btn-danger" @click="excluirEstudante(estudante.id)">Excluir</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            estudantes: [],
        };
    },

    created() {
        this.axios.get("http://localhost:8000/api/estudantes").then((response)=> {
            this.estudantes = response.data;
        });
    },

    methods: {
        excluirEstudante(id) {
            this.axios.delete(`http:localhost:8000/api/estudantes/${id}`)
                      .then((response)=> {
                          let i = this.estudantes.map((data)=> data.id).indexOf(id);
                          this.estudantes.splice(i,1);
                      });
        },
    },
};
</script>
<style lang="">
    
</style>