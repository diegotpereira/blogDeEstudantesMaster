<template>
    <div>
        <div class="container">
            <h2>Novo Estudante</h2>
            <div class="panel panel-primary">
                <div class="panel-heading">
                    Adicionar Estudante
                    <router-link to="/" class="btn btn-info pull-right" style="margin-top:-7px;margin-left:2px;">Lista de Estudantes</router-link>
                </div>
                <div class="panel-body">
                    <form @submit.prevent="novoEstudante">
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

    methods: {
        novoEstudante() {
            this.axios.post("http://localhost:8000/api/estudantes", this.estudante)
                      .then((response)=> this.$router.push({ name: "home"}))
                      .catch((err)=> console.log(err))
                      .finally(()=> (this.loading = false));
        },
    },
};
</script>
<style lang="">
    
</style>