<template>
  <div class="card"><slot /></div>
</template>

<script>
export default {};
</script>

<style>
.card {
  background-color: white;
  border-radius: 16px;
  padding: 16px;
  margin: 16px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  transition: box-shadow 0.5s;
}
</style>
