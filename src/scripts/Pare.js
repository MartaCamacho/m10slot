import ModalBootstrap from '../components/ModalBootstrap.vue';

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
            if(number == isNaN || number =="") {
                return  this.msg = `Introduce un número válido`
            } else {
                return  this.msg = `El cambio de ${number}€ en dólares son ${(number / 1.23).toFixed(2)}$`
            }
        },
        theAlert: function() {
            return alert('Heu tancat el Modal')
        }
    }
}