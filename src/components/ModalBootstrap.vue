<template>
    <div>
      <button type="button" class="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <slot name="header"></slot>
            </div>
            <div class="modal-body">
              <slot name="body" v-bind="changeInput(number)"></slot>
              <p v-if="number !== ''" >
                El cambio de {{number}}€ es de <span> {{dollar}}$ </span>
              </p>
              <p v-if="number === ''" >
                El campo no puede estar vacío
              </p>
            </div>
            <div class="modal-footer">
              <slot name="footer"></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script src="../scripts/ModalBootstrap.js"></script>

