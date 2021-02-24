<template>
  <div class="Pare">
    <ModalBootstrap  @msg="msgPadre = $event" :number="number">
      <template v-slot:header>
        <h5 class="modal-title" id="exampleModalLabel">Hola mundo</h5>
        <button type="button" @click="theAlert()" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </template>
      <template v-slot:body>
        <label for="cambio">Cambio de moneda</label>
        <input type="number" v-model="number"/>
        <p>{{ msg }}</p>
      </template>
      <template v-slot:footer>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button class="btn btn-primary">Enviar</button>
      </template>
    </ModalBootstrap>
    <Modal v-model="prueba" :class1="'inputClass'" :id="'inputId'" :type="'text'" :placeholder="'Marta'" :autocomplete="'off'">
    </Modal>
  </div>
</template>

<script src="../scripts/Pare.js"></script>