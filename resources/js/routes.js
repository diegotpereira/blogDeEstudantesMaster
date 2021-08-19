import Estudantes from './componentes/Estudantes.vue';
import AdicionarEstudante from './componentes/AdicionarEstudante.vue';
import AtualizarEstudante from './componentes/AtualizarEstudante.vue';

export const routes = [{
        name: 'home',
        path: '/',
        component: Estudantes
    },
    {
        name: 'novo',
        path: '/novo',
        component: AdicionarEstudante
    },
    {
        name: 'editar',
        path: '/editar/:id',
        component: AtualizarEstudante
    }
];