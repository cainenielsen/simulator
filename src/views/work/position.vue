<template>
  <div v-if="positionData">
    <h1>
      {{ $store.getters.get_typeById(positionData.type).name }}
      -
      {{ $store.getters.get_levelById(positionData.level).name }}
    </h1>
    <h2>Details</h2>
    <h3>Compensation</h3>

    <li>{{ $store.getters.getCurrencyFormat(positionData.compensation) }}</li>

    <h3>Location</h3>
    <li>{{ $store.getters.get_officeById(positionData.location).name }}</li>
    <hr />
    <h2>Work</h2>
    <span v-if="$store.getters.get_taskById(positionData.selectedTask)"
      >{{ $store.getters.get_taskById(positionData.selectedTask).name }}
      <label for="work"></label>
      <br />
      <progress id="work" max="100" :value="positionData.taskComplete">
        70%
      </progress>
    </span>

    <span v-else><i>No task selected</i></span>
    <Select
      v-model="selectedTask"
      name="Selected Task"
      :disabled="false"
      :default="{ id: null, display: 'Select a task' }"
      :options="
        availableTasks.map((a) => {
          return { id: a.id, display: a.name };
        })
      "
    ></Select>
    <br />
    <Button
      backgroundColor="var(--emerald)"
      textColor="var(--white)"
      name="Set Task"
      v-if="selectedTask.id !== null"
      @click="setTask(positionData.id, selectedTask.id)"
    ></Button>
    <hr />
    <h2>Holder</h2>
    <div v-if="positionData.holder">
      <router-link
        style="color: var(--peter-river); font-weight: bold"
        :to="`/people/staff/member/${positionData.holder}`"
        ><h3 :title="positionData.holder">
          {{ $store.getters.get_staffMember(positionData.holder).firstName }}
          {{ $store.getters.get_staffMember(positionData.holder).lastName }}
        </h3></router-link
      >
      <h3>Gender</h3>
      <li>{{ $store.getters.get_staffMember(positionData.holder).gender }}</li>
      <h3>Age</h3>
      <li>{{ $store.getters.get_staffMember(positionData.holder).age }}</li>
      <br />
      <Button
        backgroundColor="var(--pomegranate)"
        textColor="var(--white)"
        name="Remove Team Member"
        v-if="positionData.holder !== null"
        @click="removeTeamMember(positionData.id, positionData.holder)"
      ></Button>
    </div>
    <div v-else>
      <p><i>This position is not currently held</i></p>
      <Button
        backgroundColor="var(--emerald)"
        textColor="var(--white)"
        name="Add Team Member"
        v-if="addingTeamMember == false && positionData.holder === null"
        @click="addTeamMember()"
      ></Button>
      <Select
        v-if="addingTeamMember"
        v-model="selectedTeamMember"
        name="Team Member"
        :disabled="false"
        :default="{ id: null, display: 'Select a staff member' }"
        :options="
          $store.getters.get_staffMembersWithoutPostions.map((a) => {
            return { id: a.id, display: a.getFullName() };
          })
        "
      ></Select>
      <br />
      <Button
        backgroundColor="var(--orange)"
        textColor="var(--white)"
        name="Select Team Member"
        v-if="addingTeamMember"
        @click="selectTeamMember(positionData.id)"
      ></Button>
      <Button
        backgroundColor="var(--pomegranate)"
        textColor="var(--white)"
        name="Cancel"
        v-if="addingTeamMember"
        @click="addTeamMember()"
      ></Button>
    </div>
    <hr />
    <Button
      v-if="positionData.restricted === false"
      icon="fas fa-fire"
      name="Close Position"
      :disabled="false"
      backgroundColor="var(--pomegranate)"
      textColor="var(--white)"
      @click="closePosition(positionData)"
    ></Button>
    <p class="text-align-center" v-else>
      <i>This position cannot be deleted</i>
    </p>
  </div>
  <div v-else>
    <p>Position Not Found</p>
  </div>
</template>

<script>
import button from "@/components/button.vue";
import select from "@/components/select.vue";

export default {
  components: { Select: select, Button: button },
  data() {
    return {
      selectedTask: { id: null, display: "Select a task" },
      positionData: null,
      addingTeamMember: false,
      selectedTeamMember: { id: null },
    };
  },
  computed: {
    availableTasks() {
      let tasks = [];
      this.$store.getters
        .get_typeById(this.positionData.type)
        .tasks.forEach((tag) => {
          tasks.push(this.$store.getters.get_taskByTag(tag));
        });
      return tasks;
    },
  },
  methods: {
    setTask(positionId, taskId) {
      this.$store.dispatch("setSelectedTask", { positionId, taskId });
    },
    pullData() {
      this.positionData = this.$store.getters.get_positionById(
        parseInt(this.$route.params.id)
      );
    },
    addTeamMember() {
      this.addingTeamMember = !this.addingTeamMember;
    },
    selectTeamMember(positionId) {
      if (this.selectedTeamMember.id !== null) {
        this.$store.dispatch("addPositionHolder", {
          positionId: positionId,
          memberId: this.selectedTeamMember.id,
        });
        this.$store.dispatch("addMemberRole", {
          positionId: positionId,
          memberId: this.selectedTeamMember.id,
        });
        this.addingTeamMember = !this.addingTeamMember;
      } else {
        alert("Select a staff member");
      }
    },
    removeTeamMember(positionId, memberId) {
      this.$store.dispatch("removePositionHolder", positionId);
      this.$store.dispatch("removeMemberRole", memberId);
    },
    closePosition(position) {
      if (confirm("Are you sure you want to delete the position?")) {
        this.$store
          .dispatch("closePosition", {
            memberId: position.holder,
            positionId: position.id,
          })
          .then(() => {
            this.$router.push("/work/positions");
            alert("Position Deleted");
          });
      }
    },
  },
  beforeMount() {
    this.pullData();
  },
};
</script>

<style></style>
