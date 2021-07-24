<template>
  <span
    class="nav-item"
    :class="{
      'nav-item-free': type === 'free',
      'nav-item-button': type === 'button',
    }"
    ><slot
  /></span>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "free",
    },
  },
};
</script>

<style scoped>
.nav-item {
  display: inline-block;
  min-width: 48px;
  height: 48px;
  margin: 0px;
  padding: 0px;
  overflow: hidden;
  user-select: none;
  cursor: pointer;
  line-height: 48px;
  box-sizing: border-box;
  text-align: center;
  border-radius: 8px;
  line-height: 48px;
}

.nav-item:hover {
  background-color: var(--clouds);
}

.router-link-active .nav-item {
  background-color: var(--peter-river-100);
}

.nav-item:active {
  background-color: var(--peter-river-200);
}

.nav-item-free {
  padding-left: 16px;
  padding-right: 16px;
}

.nav-item-button {
  font-size: 26px;
}
</style>