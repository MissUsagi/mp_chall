<script>
export default {
  props: {
    inputType: {
      type: String,
      default: "text",
    },
    inputId: {
      type: String,
      required: true,
    },
    inputLabel: {
      type: String,
    },
    inputPlaceholder: {
      type: String,
      default: "Type here...",
    },
    modelValue: {
      type: String,
    },
  },
};
</script>

<template>
  <div class="input-group flex-center">
    <label v-if="inputLabel" class="label" :for="inputId">{{
      inputLabel
    }}</label>
    <input
      class="input"
      :id="inputId"
      :type="inputType"
      :placeholder="inputPlaceholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<style scoped lang="scss">
.input-group {
  width: 100%;
  flex-direction: row;
  text-align: center;
  gap: 10px;
  margin: 0.5rem;
}
.label {
  text-transform: capitalize;
  font-size: 1rem;
  color: var(--color-primary-gray);
}
.input {
  width: 250px;
  padding: 8px 15px 8px 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  color: var(--color-primary-gray);
  background: rgba($color: #fff, $alpha: 1);
  &:focus {
    outline: solid 2px var(--color-secondary-blue);
  }
}
</style>