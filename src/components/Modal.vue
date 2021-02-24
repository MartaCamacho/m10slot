<template>
    <input :type="type"     
           :value="value"
           :class="class1"
           :id="id"
           :placeholder="placeholder"
            @input="$emit('input', $event.target.value)" :autocomplete="autocomplete" />
    
</template>
<script>
export default {
    props: ['value', 'class1', 'id', 'type', 'placeholder', 'autocomplete']
}
</script>