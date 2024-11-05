<template>
  <div>
    <select
      :value="modelValue" 
      @change="emitSelection"
      class="form-select pl-4 pr-8 py-2 border rounded-md dark:bg-gray-800 text-gray-600 dark:text-gray-300 font-medium w-full"
    >
      <!-- Display the label while using key as the value -->
      <option v-for="option in options" :key="option.key" :value="option.key">
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'SelectComponent',
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    options: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  methods: {
    emitSelection(event) {
      this.$emit('update:modelValue', event.target.value); // Emit only the selected key
    },
  },
};
</script>

<style scoped>
.form-select {
  transition: color 0.2s, background-color 0.2s;
}
.form-select:hover {
  color: #374151; /* hover:text-gray-800 */
}
</style>
