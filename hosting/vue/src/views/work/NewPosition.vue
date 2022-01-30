<template>
  <div v-if="positionNames.length > 0">
    <Select
      v-model="location"
      name="Location"
      :disabled="false"
      :default="{ id: null, display: 'Select a Location' }"
      :options="locationNames"
    ></Select>
    <br />
    <b>Open Seats: </b>
    <span v-if="location.id !== null">{{
      $store.getters.get_remainingCapacity(location.id)
    }}</span>
    <br />
    <br />
    <b>Total Capacity: </b>
    <span v-if="location.id !== null">{{
      $store.getters.get_capacity(location.id)
    }}</span>
    <Select
      v-model="type"
      name="Type"
      :disabled="false"
      :default="{ id: null, display: 'Select a Type' }"
      :options="positionNames"
    ></Select>
    <Select
      v-model="level"
      name="Level"
      :disabled="false"
      :default="{ id: null, display: 'Select a Level' }"
      :options="positionLevels"
    ></Select>
    <Input
      v-model="compensation"
      name="Compensation"
      placeholder="0"
      :disabled="false"
      type="number"
      extra="$"
    ></Input>
    <Button
      class="form-block"
      backgroundColor="var(--emerald)"
      textColor="var(--white)"
      name="Create Position"
      v-if="location"
      @click="createPosition"
      :disabled="
        location.id === null ||
        $store.getters.get_remainingCapacity(location.id) < 1
      "
    ></Button>
    <span v-if="location.id !== null">
      <p
        class="color-carrot"
        v-if="location && $store.getters.get_remainingCapacity(location.id) < 1"
      >
        This location does not have any available seats.
      </p>
    </span>

    <p>{{ type.display }}</p>

    <p>{{ level.display }}</p>

    <p>{{ compensation }}</p>

    <p>{{ location.display }}</p>
  </div>
  <div style="text-align: center" v-else>
    No position types researched.
    <router-link
      style="color: var(--peter-river); font-weight: bold"
      to="/research/positions"
      >Research new position types</router-link
    >
    then create new positions.
  </div>
</template>
<script>
import input from "@/components/input.vue";
import select from "@/components/select.vue";
import button from "@/components/button.vue";
export default {
  components: {
    Input: input,
    Select: select,
    Button: button,
  },
  data() {
    return {
      compensation: 0,
      type: { id: null, display: "Select a Type" },
      level: { id: null, display: "Select a Level" },
      location: { id: null, display: "Select a Location" },
    };
  },
  methods: {
    createPosition() {
      if (this.compensation > 0) {
        if (this.$store.getters.get_remainingCapacity(this.location.id) > 0) {
          if (
            this.type.id !== null &&
            this.level.id !== null &&
            this.location.id !== null
          ) {
            this.$store
              .dispatch("createPosition", {
                compensation: parseInt(this.compensation),
                type: this.type.id,
                level: this.level.id,
                location: this.location.id,
              })
              .then(() => {
                this.$router.push("/work/positions");
              });
          } else {
            alert("Select a position type, location, and level.");
          }
        } else {
          alert("The selected facility does not have enough capacity");
        }
      } else {
        alert("Enter a compensation amount");
      }
    },
  },
  computed: {
    positionNames() {
      let positions = [];
      this.$store.getters.get_selectablePositionTypes.forEach((position) => {
        positions.push({ id: position.id, display: position.name });
      });
      return positions;
    },
    positionLevels() {
      let levels = [];
      this.$store.getters.positionLevels.forEach((level) => {
        levels.push({ id: level.id, display: level.name });
      });
      return levels;
    },
    locationNames() {
      let locations = [];
      this.$store.getters.get_ownedFacilities.forEach((location) => {
        locations.push({ id: location.id, display: location.name });
      });
      return locations;
    },
  },
};
</script>

<style scoped>
.form-block {
  margin-top: 70px;
}
</style>
