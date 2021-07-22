<template>
  <div>
    <label v-if="name">{{ name }}</label
    ><br />
    <span class="input">
      {{extra}}
      <input
        :type="type"
        :disabled="disabled === true"
        :placeholder="placeholder"
        v-bind="$attrs"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </span>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "text",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: "Name",
    },
    placeholder: {
      type: String,
      default: "Placeholder",
    },
    modelValue: {
      default: "",
    },
    extra: {
      type: String,
      default: "",
    },
  },
  emits: ["update:modelValue"],
};
</script>

<style scoped>
.input {
  position: relative;
  height: 48px;
  border-radius: 8px;
  box-sizing: border-box;
  border: 2px solid var(--clouds-600);
  line-height: 32px;
  font-size: 16px;
  padding-left: 16px;
  padding-right: 16px;
  background-color: var(--clouds-50);
  display: inline-block;
  min-width: 48px;
  user-select: none;
}

.input:active {
  border: 2px solid var(--clouds-900);
}

.input:hover {
  border: 2px solid var(--clouds-900);
}

input {
  height: 100%;
  box-sizing: border-box;
  line-height: 32px;
  font-size: 16px;
  outline: none;
  border: none;
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