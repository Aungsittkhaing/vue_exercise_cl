<template>
  <div>
    <div
      class="shadow-sm my-2 p-3 text-danger"
      v-for="(task, index) in tasks"
      :key="index"
    >
      <!-- {{ task.name }} -->
      <h3>{{ titleText }}</h3>
      <p>{{ paraText }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleList",
  props: {
    titleText: {
      type: String,
      required: true,
      default: "this is default",
    },
    paraText: {
      type: Number,
      default: 200,
      validator(value) {
        return value > 10;
      },
    },
  },
  data() {
    return {
      title: "this is all list",
      tasks: [
        {
          name: "task One",
          status: true,
        },
        {
          name: "task two",
          status: false,
        },
        {
          name: "task three",
          status: true,
        },
      ],
    };
  },
};
</script>
