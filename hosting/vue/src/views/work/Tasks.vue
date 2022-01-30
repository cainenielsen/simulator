<template>
  <div>
    <p class="text-align-center">
      Here you can see a list of available tasks to complete for your business.
    </p>
    <div class="tag-list">
      <tag
        v-for="task in $store.getters.get_allTasks"
        :key="task.id"
        :title="task.name"
      ></tag>
    </div>
  </div>
</template>

<script>
import tag from "@/components/tag.vue";
export default {
  components: { tag: tag },
};
</script>

<style>
.tag-list {
  line-height: 48px;
}
</style>
