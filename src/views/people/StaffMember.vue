<template>
  <div v-if="staffData">
    <h1>{{ staffData.firstName }} {{ staffData.lastName }}</h1>
    <h2>Details</h2>
    <h3>General</h3>
    <ul>
      <li>
        Gender: <b>{{ staffData.gender }}</b>
      </li>
      <li>
        Age: <b>{{ staffData.age }}</b>
      </li>
    </ul>
    <h3>Skills</h3>
    <ul>
      <li>
        Technical: <b>{{ staffData.skills.technical }}</b>
      </li>
      <li>
        Strategic: <b>{{ staffData.skills.strategic }}</b>
      </li>
      <li>
        Leadership: <b>{{ staffData.skills.leadership }}</b>
      </li>
      <li>
        Communication: <b>{{ staffData.skills.communication }}</b>
      </li>
      <li>
        Financial: <b>{{ staffData.skills.financial }}</b>
      </li>
      <li>
        Analytical: <b>{{ staffData.skills.analytical }}</b>
      </li>
      <li>
        Creative: <b>{{ staffData.skills.creative }}</b>
      </li>
      <li>
        Promotional: <b>{{ staffData.skills.promotional }}</b>
      </li>
    </ul>
    <hr />
    <h2>Position</h2>
    <div v-if="staffData.role">
      <router-link
        style="color: var(--peter-river); font-weight: bold"
        :to="`/work/positions/position/${staffData.role}`"
        ><h3 :title="staffData.role">
          {{
            $store.getters.get_typeById(
              $store.getters.get_positionById(staffData.role).type
            ).name
          }}
          -
          {{
            $store.getters.get_levelById(
              $store.getters.get_positionById(staffData.role).level
            ).name
          }}
        </h3></router-link
      >
      <h4>Compensation</h4>

      <li>
        {{
          $store.getters.getCurrencyFormat(
            $store.getters.get_positionById(staffData.role).compensation
          )
        }}
      </li>

      <h4>Location</h4>
      <li>
        {{
          $store.getters.get_facilityById(
            $store.getters.get_positionById(staffData.role).location
          ).name
        }}
      </li>
    </div>
    <div v-else><i>This member does not hold any position</i></div>
    <hr />
    <Button
      v-if="staffData.restricted === false"
      icon="fas fa-fire"
      name="Fire Staff Member"
      :disabled="false"
      backgroundColor="var(--pomegranate)"
      textColor="var(--white)"
      @click="fireStaff(staffData)"
    ></Button>
    <p class="text-align-center" v-else><i>This person cannot be deleted</i></p>
  </div>
  <div v-else>
    <p>Staff Member Not Found</p>
  </div>
</template>

<script>
import button from "@/components/button.vue";

export default {
  components: { Button: button },
  data() {
    return {
      staffData: null,
    };
  },
  methods: {
    pullData() {
      this.staffData = this.$store.getters.get_staffMember(
        parseInt(this.$route.params.id)
      );
    },
    fireStaff(member) {
      if (confirm("Are you sure you want to fire the staff member?")) {
        this.$store
          .dispatch("fireStaffMember", {
            memberId: member.id,
            positionId: member.role,
          })
          .then(() => {
            this.$router.push("/people/staff");
            alert("Staff Member Deleted");
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
