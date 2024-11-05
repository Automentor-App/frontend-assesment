<template>
  <div class="autocomplete-container" @keydown.down.prevent="navigateOptions('down')" @keydown.up.prevent="navigateOptions('up')" @keydown.enter.prevent="selectHighlightedOption">
    <input
      type="text"
      :value="displayLabel"
      @input="onInput"
      @focus="onFocus"
      placeholder="Type to search..."
      class="form-input pl-4 pr-8 py-2 border rounded-md dark:bg-gray-800 text-gray-600 dark:text-gray-300 font-medium w-full"
      @keydown="onKeyDown"
    />
    <ul v-if="showDropdown" class="autocomplete-dropdown" @mousedown.prevent>
      <li
        v-for="(option, index) in filteredOptions"
        :key="option.key"
        @click="selectOption(option)"
        :class="{'autocomplete-option': true, 'highlighted-option': index === highlightedIndex}"
      >
        {{ option.label }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AutocompleteSelectComponent",
  props: {
    modelValue: {
      type: String,
      default: "",
    },
    options: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  emits: ["update:modelValue"],
  data() {
    return {
      filteredOptions: [],
      showDropdown: false,
      highlightedIndex: -1,
      inputText: "",
    };
  },
  computed: {
    displayLabel() {
      if (!this.inputText && this.modelValue) {
        const selectedOption = this.options.find(option => option.key === this.modelValue);
        return selectedOption ? selectedOption.label : "";
      }
      return this.inputText;
    }
  },
  watch: {
    modelValue(newValue) {
      this.updateFilteredOptions(this.inputText);
    },
  },
  methods: {
    onInput(event) {
      this.inputText = event.target.value;
      this.$emit("update:modelValue", "");
      this.updateFilteredOptions(this.inputText);
    },
    onFocus() {
      // Check if the input text matches any option label
      const matchingOption = this.options.find(option => option.label === this.inputText);
      if (matchingOption) {
        // If there's a match, hide the dropdown
        this.showDropdown = false;
      } else {
        // Otherwise, show the filtered options
        this.updateFilteredOptions(this.inputText);
        this.showDropdown = true;
      }
    },
    updateFilteredOptions(input) {
      if (input === "") {
        this.filteredOptions = this.options;
      } else {
        this.filteredOptions = this.options.filter(
          (option) =>
            option.label &&
            option.label.toLowerCase().includes(input.toLowerCase())
        );
      }
      this.highlightedIndex = -1;
      // Hide the dropdown if the input text matches an option
      this.showDropdown = !this.options.some(option => option.label === input);
    },
    selectOption(option) {
      this.$emit("update:modelValue", option.key);
      this.inputText = option.label;
      this.showDropdown = false;
    },
    hideDropdown() {
      setTimeout(() => {
        this.showDropdown = false;
      }, 100);
    },
    navigateOptions(direction) {
      if (!this.showDropdown) return;

      if (direction === "down") {
        this.highlightedIndex = (this.highlightedIndex + 1) % this.filteredOptions.length;
      } else if (direction === "up") {
        this.highlightedIndex =
          (this.highlightedIndex - 1 + this.filteredOptions.length) % this.filteredOptions.length;
      }
    },
    selectHighlightedOption() {
      if (this.highlightedIndex !== -1) {
        const selectedOption = this.filteredOptions[this.highlightedIndex];
        this.selectOption(selectedOption);
      }
    },
    onKeyDown(event) {
      if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        this.showDropdown = true;
      }
    },
  },
};
</script>

<style scoped>
.autocomplete-container {
  position: relative;
}
.form-input {
  transition: color 0.2s, background-color 0.2s;
}
.form-input:hover {
  color: #374151;
}
.autocomplete-dropdown {
  position: absolute;
  background-color: white;
  border: 1px solid #ddd;
  max-height: 150px;
  overflow-y: auto;
  width: 100%;
  z-index: 10;
}
.autocomplete-option {
  padding: 8px;
  cursor: pointer;
}
.highlighted-option {
  background-color: #f1f5f9;
}
.autocomplete-option:hover {
  background-color: #e5e7eb;
}
</style>
