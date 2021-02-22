<template>
  <div class="Pare">
    <ModalBootstrap  @msg="msgPadre = $event">
      <template v-slot:header>
        <h5 class="modal-title" id="exampleModalLabel">Hola mundo</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </template>
      <template v-slot:body>
        <label for="cambio">Cambio de moneda</label>
        <input type="number" v-model="number"/>
        <p>{{ msg }}</p>
      </template>
      <template v-slot:footer>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button @click="theMessage(number)" class="btn btn-primary">Enviar</button>
      </template>
    </ModalBootstrap>
  </div>
</template>

<script src="./Pare.js"></script>

