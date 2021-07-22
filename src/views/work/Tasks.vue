<template>
  <div class="tag-list">

    <tag v-for="task in $store.getters.get_allTasks" :key="task.id" :title="task.name"></tag>

  </div>
</template>

<script>
import tag from "@/components/tag.vue"
export default {
  components: {tag: tag},
}
</script>

<style>
.tag-list {
  line-height: 48px;
}
</style>