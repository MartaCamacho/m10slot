import ModalBootstrap from '../components/ModalBootstrap.vue';
import Modal from '../components/Modal.vue';

export default {
    name: 'Pare',
    components: {
    ModalBootstrap,
    Modal
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