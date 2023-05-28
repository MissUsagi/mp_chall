<script>
export default {
  props: {
    buttonType: {
      type: String,
      default: "button",
    },
    buttonClass: {
      type: String,
      default: "basic",
    },
    buttonText: {
      type: String,
      default: "Button",
    },
    buttonTitle: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <button
    class="button"
    :class="buttonClass"
    :type="buttonType"
    :title="buttonTitle"
  >
    {{ buttonText }}
  </button>
</template>

<style scoped lang="scss">
.button {
  -webkit-font-smoothing: subpixel-antialiased;
  min-width: 250px;
  padding: 0.6rem 1.5rem;
  font-size: 1.6rem;
  text-align: center;
  border: none;
  border-radius: 10px;
  transition: all 0.5s ease-out;
  &:hover,
  :focus,
  :active {
    cursor: pointer;
    text-decoration: none;
    box-shadow: 0 0.5em 0.5em -0.4em var(--color-primary-gray);
    transform: translateY(-0.15em) translateZ(0);
  }
  &.basic {
    background-color: var(--color-primary-gray);
    color: var(--color-primary-white);
  }
  &.gradient {
    background-image: linear-gradient(
      to right,
      #2c3e50 0%,
      #3498db 51%,
      #2c3e50 100%
    );
    background-size: 200% auto;
    color: var(--color-primary-white);
    &:hover,
    :focus,
    :active {
      background-position: right center;
      color: var(--color-primary-white);
    }
  }
}
</style>