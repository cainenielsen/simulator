<template>
  <div>
    <label v-if="name">{{ name }}</label
    ><br />
    <div class="custom-select" :tabindex="tabindex" @blur="open = false">
      <div class="selected" :class="{ open: open }" @click="open = !open">
        {{ selected.display }}
      </div>
      <div class="items" :class="{ selectHide: !open }">
        <div
          v-for="(option, i) of options"
          :key="i"
          @click="
            selected = option;
            open = false;
            $emit('update:modelValue', option);
          "
        >
          {{ option.display }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    default: {
      type: Object,
      required: false,
      default: null,
    },
    name: {
      type: String,
      default: "Name",
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  data() {
    return {
      selected: this.default
        ? this.default
        : this.options.length > 0
        ? this.options[0]
        : null,
      open: false,
    };
  },
  mounted() {
    this.$emit("update:modelValue", this.selected);
  },
  emits: ["update:modelValue"],
};
</script>

<style scoped>
.custom-select {
  position: relative;
  height: 48px;
  line-height: 48px;
  box-sizing: border-box;
  display: inline-block;
}

.custom-select .selected {
  background-color: var(--clouds-50);
  border-radius: 8px;
  border: 2px solid var(--clouds-600);
  padding-left: 16px;
  padding-right: 32px;
  cursor: pointer;
  user-select: none;
  min-width: 128px;
}

.custom-select .selected.open {
  border: 2px solid var(--clouds-900);
  border-radius: 8px 8px 0px 0px;
}

.custom-select .selected:after {
  position: absolute;
  content: "";
  top: 24px;
  right: 16px;
  width: 0;
  height: 0;
  border: 6px solid transparent;
  border-color: var(--clouds-900) transparent transparent transparent;
}

.custom-select .items {
  border-radius: 0px 0px 8px 8px;
  overflow: hidden;
  border-right: 2px solid var(--clouds-900);
  border-left: 2px solid var(--clouds-900);
  border-bottom: 2px solid var(--clouds-900);
  position: absolute;
  background-color: var(--clouds-500);
  left: 0;
  right: 0;
  z-index: 1;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.custom-select .items div {
  padding-left: 16px;
  padding-right: 8px;
  cursor: pointer;
  user-select: none;
}

.custom-select .items div:hover {
  background-color: var(--clouds-600);
}

.selectHide {
  display: none;
}

/* Label */
label {
  height: 48px;
  font-weight: bold;
  box-sizing: border-box;
  line-height: 48px;
  font-size: 16px;
  padding-left: 16px;
  padding-right: 8px;
  display: inline-block;
  min-width: 48px;
  margin-top: 32px;
}
</style>
