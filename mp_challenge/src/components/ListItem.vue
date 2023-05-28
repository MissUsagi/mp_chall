<template>
  <li class="list">{{ item }}</li>
</template>

<script>
export default {
  props: {
    item: {
      type: String,
    },
  },
};
</script>

<style scoped>
.list {
  list-style: none;
}
</style>