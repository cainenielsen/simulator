import {
  selectRandom,
  idGenerator,
  randomNumberBetween,
} from "../scripts/tools.js";

class staffMember {
  constructor(
    id,
    gender,
    age,
    firstName,
    lastName,
    title,
    compensation,
    skills,
    role,
    restricted
  ) {
    this.id = id;
    this.gender = gender;
    this.age = age;
    this.firstName = firstName;
    this.lastName = lastName;
    this.title = title;
    this.compensation = compensation;
    this.skills = skills;
    this.role = role;
    this.restricted = restricted || false;
  }
  getFirstName() {
    return this.firstName[0].toUpperCase() + this.firstName.substring(1);
  }
  getLastName() {
    return this.lastName[0].toUpperCase() + this.lastName.substring(1);
  }
  getFullName() {
    return this.getFirstName() + " " + this.getLastName();
  }
}

class Position {
  constructor(id, type, compensation, startDate, status, holder) {
    this.id = id;
    this.type = type;
    this.compensation = compensation;
    this.startDate = startDate;
    this.status = status;
    this.holder = holder;
    this.listed = false;
  }
  getFirstName() {
    return this.firstName[0].toUpperCase() + this.firstName.substring(1);
  }
  getLastName() {
    return this.lastName[0].toUpperCase() + this.lastName.substring(1);
  }
  getFullName() {
    return this.getFirstName() + " " + this.getLastName();
  }
}

class Candidate {
  constructor(
    id,
    gender,
    age,
    firstName,
    lastName,
    compensation,
    skills,
    listing
  ) {
    this.id = id;
    this.gender = gender;
    this.age = age;
    this.firstName = firstName;
    this.lastName = lastName;
    this.compensation = compensation;
    this.skills = skills;
    this.listing = listing;
  }
  getFirstName() {
    return this.firstName[0].toUpperCase() + this.firstName.substring(1);
  }
  getLastName() {
    return this.lastName[0].toUpperCase() + this.lastName.substring(1);
  }
  getFullName() {
    return this.getFirstName() + " " + this.getLastName();
  }
}

const mod_People = {
  state: () => ({
    staff: [
      new staffMember(
        10000000,
        "male",
        18,
        "Caine",
        "Nielsen",
        "CEO",
        3000,
        {
          technical: 74,
          strategic: 21,
          leadership: 5,
          communication: -36,
          financial: -82,
          analytical: 79,
          creative: 18,
          promotional: -6,
        },
        {
          type: "recruiter",
          id: "66261201",
        },
        true
      ),
    ],
    positions: [
      new Position(
        55555823,
        "Manager",
        3000,
        "this is a string, not a date",
        "open",
        null,
        false
      ),
      new Position(
        66261201,
        "Recruiter",
        3000,
        "this is a string, not a date",
        "filled",
        10000000,
        false
      ),
    ],
    candidates: [],
  }),
  getters: {
    get_peopleState(state) {
      return state;
    },
    get_staffMembersWithoutPostions(state) {
      return state.staff.filter((element) => element.role.id === null);
    },
    get_listedPositions(state) {
      return state.positions.filter((element) => element.listed === true);
    },
    get_activePositions(state) {
      return state.positions.filter((element) => element.status === "filled");
    },
    get_totalPayRollCost(state) {
      let payRollCost = 0;
      const positions = state.positions.filter(
        (element) => element.status === "filled"
      );
      positions.forEach((position) => {
        payRollCost = payRollCost + position.compensation;
      });
      return payRollCost;
    },
    get_staffMember: (state) => (id) => {
      return state.staff.find((element) => element.id === id);
    },
  },
  mutations: {
    saveCandidate(state, candidate) {
      state.candidates.push(candidate);
    },
    saveTeamMember(state, teamMember) {
      state.staff.push(teamMember);
    },
    updatePosition(state, position) {
      let index = state.positions.findIndex(
        (element) => element.id == position.id
      );
      state.positions[index] = position;
    },
    updateStaff(state, member) {
      let index = state.staff.findIndex((element) => element.id == member.id);
      state.staff[index] = member;
    },
    deleteCandidate(state, candidate) {
      let index = state.candidates.findIndex(
        (element) => element.id == candidate
      );
      if (index > -1) {
        state.candidates.splice(index, 1);
      }
    },
    deleteStaff(state, member) {
      let index = state.staff.findIndex((element) => element.id == member);
      if (index > -1) {
        state.staff.splice(index, 1);
      }
    },
    toggleListing(state, position) {
      let index = state.positions.findIndex(
        (element) => element.id == position
      );
      state.positions[index].listed = !state.positions[index].listed;
    },
  },
  actions: {
    addMemberRole({ state, commit }, data) {
      let member = state.staff.find((element) => element.id == data.memberId);
      member.role.type = data.positionType;
      member.role.id = data.positionId;
      commit("updateStaff", member);
    },
    removeMemberRole({ state, commit }, memberId) {
      let member = state.staff.find((element) => element.id == memberId);
      member.role.type = null;
      member.role.id = null;
      commit("updateStaff", member);
    },
    createPosition() {
      console.log("");
    },
    fireStaffMember({ dispatch, commit }, data) {
      dispatch("removePositionHolder", data.positionId)
      commit("deleteStaff", data.memberId);
    },
    removePosition() {
      console.log("");
    },
    addPositionHolder({ state, commit }, data) {
      let position = state.positions.find(
        (element) => element.id == data.positionId
      );
      position.holder = data.memberId;
      position.status = "filled";
      position.listed = false;
      commit("updatePosition", position);
    },
    removePositionHolder({ state, commit }, positionId) {
      let position = state.positions.find(
        (element) => element.id == positionId
      );
      position.holder = null;
      position.status = "open";
      commit("updatePosition", position);
    },
    togglePositionListing({ commit }, position) {
      commit("toggleListing", position);
    },
    createCandidate({ commit, rootState }, data) {
      const generator = new idGenerator();
      const id = generator.generate();
      const gender = selectRandom(rootState.random_genders);
      const age = randomNumberBetween(18, 100);
      const lastName = selectRandom(rootState.random_lastNames);
      let firstName = null;
      switch (gender) {
        case "male":
          firstName = selectRandom(rootState.random_maleFirstNames);
          break;
        case "female":
          firstName = selectRandom(rootState.random_femaleFirstNames);
          break;
      }
      const compensation = randomNumberBetween(1500, 6000);;
      const skills = {
        technical: randomNumberBetween(-100, 100),
        strategic: randomNumberBetween(-100, 100),
        leadership: randomNumberBetween(-100, 100),
        communication: randomNumberBetween(-100, 100),
        financial: randomNumberBetween(-100, 100),
        analytical: randomNumberBetween(-100, 100),
        creative: randomNumberBetween(-100, 100),
        promotional: randomNumberBetween(-100, 100),
      };
      const listing = {
        id: data.listingId,
        type: data.listingType,
      };
      const candidate = new Candidate(
        id,
        gender,
        age,
        firstName,
        lastName,
        compensation,
        skills,
        listing
      );
      commit("saveCandidate", candidate);
    },
    acceptCandidate({ commit }, data) {
      const generator = new idGenerator();
      const id = generator.generate();
      const gender = data.gender;
      const age = data.age;
      const firstName = data.firstName;
      const lastName = data.lastName;
      const title = null;
      const compensation = data.compensation;
      const skills = data.skills;
      const role = {
        type: null,
        id: null,
      };
      const teamMember = new staffMember(
        id,
        gender,
        age,
        firstName,
        lastName,
        title,
        compensation,
        skills,
        role
      );
      commit("saveTeamMember", teamMember);
      commit("deleteCandidate", data.id);
    },
    removeCandidate() {
      console.log("");
    },
    interviewCandidate() {
      console.log("");
    },
    denyCandidate() {
      console.log("");
    },
  },
  modules: {},
};

export default mod_People;
