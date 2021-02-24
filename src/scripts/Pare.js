import ModalBootstrap from '../components/ModalBootstrap.vue';

export default {
    name: 'Pare',
    components: {
    ModalBootstrap
  },
    data() {
        return {
            number: '',
            msg: '',
            prueba: ''
        }
    },
        methods: {
        theAlert: function() {
            return alert('Heu tancat el Modal')
        }
    }
}