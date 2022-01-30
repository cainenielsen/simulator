<template>
  <span
    class="button"
    :class="{
      'button-disabled': disabled === true,
      'button-active': disabled === false,
    }"
    :style="{ backgroundColor: backgroundColor, color: textColor }"
  >
    <i v-if="icon" :class="icon"></i> {{ name }}
  </span>
</template>

<script>
export default {
  props: {
    to: { type: String },
    name: { type: String },
    backgroundColor: { type: String },
    textColor: { type: String },
    disabled: {
      type: Boolean,
      default: false,
    },
    icon: { type: String },
  },
};
</script>

<style scoped>
.button {
  height: 48px;
  width: 100%;
  line-height: 48px;
  box-sizing: border-box;
  padding-left: 16px;
  padding-right: 8px;
  border-radius: 8px;
  user-select: none;
  background-color: white;
  font-size: 16px;
  font-weight: bold;
  min-width: 48px;
  border: 1px solid var(--clouds-700);
  display: inline-block;
  max-width: 256px;
}

.button-active:hover {
  border: 1px solid var(--clouds-800);
  filter: saturate(150%);
}

.button-disabled {
  filter: saturate(50%);
}

.button-active {
  cursor: pointer;
}

.button-active:active {
  border: 1px solid var(--clouds-900);
  filter: brightness(90%) saturate(150%);
}
</style>
