<template>
  <div class="Pare">
    <ModalBootstrap >
      <template v-slot:header>
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </template>
      <template v-slot:body>
        ...
      </template>
      <template v-slot:footer>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </template>
    </ModalBootstrap>
  </div>
</template>

<script src="./Pare.js"></script>

