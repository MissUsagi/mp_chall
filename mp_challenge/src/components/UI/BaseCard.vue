<template>
  <div class="card flex-center"><slot></slot></div>
</template>

<style scoped>
.card {
  width: 100%;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 1rem;
  margin: 1rem 0.5rem;
  border-radius: 20px;
  box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.25),
    -8px -8px 12px 0 rgba(255, 255, 255, 0.5);
  word-break: break-all;
  overflow-wrap: break-word;
}
</style>