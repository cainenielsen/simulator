<template>
  <div class="card"><slot /></div>
</template>

<script>
export default {

}
</script>

<style>
.card {
  background-color: white;
  border-radius: 16px;
  padding: 16px;
  margin: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.16), 0 2px 8px rgba(0, 0, 0, 0.24);
  transition: box-shadow 0.5s;
}

.card:hover {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.24), 0 2px 12px rgba(0, 0, 0, 0.32);
}
</style>