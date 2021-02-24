export default {
  name: "ModalBootstrap",
  props: {
    number: "",
    msg: "",
  },
  data() {
    return {
      euros: "",
      dollar: "",
    };
  },
  methods: {
    changeInput(number) {
      this.dollar = number * 1.23;
    }
  }
};
