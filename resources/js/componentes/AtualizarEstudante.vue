<template>
    <div>
        <div class="container">
            <h2>Atualizar Estudante</h2>
            <div class="panel panel-primary">
                <div class="panel-heading">
                    Atualizar Estudante
                    <router-link to="/" class="btn btn-info pull-right" style="margin-top:-7px;margin-left:2px;">Lista de Estudantes</router-link>
                </div>
                <div class="panel-body">
                    <form @submit.prevent="atualizarEstudante">
                        <div class="form-group">
                            <label>Nome</label>
                            <input type="text" class="form-control" v-model="estudante.nome"/>
                        </div>
                        <div class="form-group">
                            <label>Email</label>
                            <input type="email" class="form-control" v-model="estudante.email"/>
                        </div>
                        <div class="form-group">
                            <label>Telefone</label>
                            <input type="text" class="form-control" v-model="estudante.telefone"/>
                        </div>
                        <div class="form-group">
                            <label>Gênero</label>
                            <select class="form-control" v-model="estudante.genero">
                                <option value="">Selecione o Gênero</option>
                                <option value="masculino">Maculino</option>
                                <option value="feminino">Feminino</option>
                                <option value="outro">Outro</option>
                            </select>
                        </div>
                        <button type="submit" class="btn btn-primary">Salvar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            estudante: {},
        };
    },

    created() {
        this.axios.get(`http://localhost:8000/api/estudantes/${this.$route.params.id}`)
                  .then((res)=> {
                      this.estudante = res.data
                  });
    },

    methods: {
        atualizarEstudante() {
            this.axios.patch(`http://localhost:8000/api/estudantes/${this.$route.params.id}`,this.estudante)
                      .then((res)=> {
                          this.$router.push({name: "home"});
                      });
        },
    },
};
</script>
<style lang="">
    
</style>