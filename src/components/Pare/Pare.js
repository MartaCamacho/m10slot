import ModalBootstrap from '../ModalBootstrap/ModalBootstrap.vue';

export default {
    name: 'Pare',
    components: {
    ModalBootstrap
  },
    data() {
        return {
            number: '',
            msg: ''
        }
    },
        methods: {
        theMessage: function(number) {
            return  this.msg = `El cambio de ${number}€ en dólares son ${number / 1.23}$`
        }
    }
}