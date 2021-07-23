import {
  selectRandom,
  idGenerator,
  randomNumberBetween,
} from "../scripts/tools.js";

const generator = new idGenerator();

import staffMember from "@/defs/staffMember.js";
import Position from "@/defs/position.js";
import Candidate from "@/defs/candidate.js";

const mod_People = {
  state: () => ({
    staff: [
      new staffMember({
        gender: "male",
        age: 18,
        firstName: "Caine",
        lastName: "Nielsen",
        skills: {
          technical: 74,
          strategic: 21,
          leadership: 5,
          communication: -36,
          financial: -82,
          analytical: 79,
          creative: 18,
          promotional: -6,
        },
        role: null,
        restricted: true,
        self: true,
      }),
    ],
    positions: [],
    candidates: [],
  }),
  getters: {
    get_peopleState(state) {
      return state;
    },
    get_staffMembersWithoutPostions(state) {
      return state.staff.filter((element) => element.role === null);
    },
    get_listedPositions(state) {
      return state.positions.filter((element) => element.listed === true);
    },
    get_activePositions(state) {
      return state.positions.filter((element) => element.status === "filled");
    },
    get_positionById: (state) => (id) => {
      return state.positions.find((element) => element.id === id);
    },
    get_positionsInLocation: (state) => (location) => {
      return state.positions.filter((element) => element.location === location)
        .length;
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
    get_self(state) {
      return state.staff.find((element) => element.self === true);
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
    deletePosition(state, position) {
      let index = state.positions.findIndex(
        (element) => element.id == position
      );
      if (index > -1) {
        state.positions.splice(index, 1);
      }
    },
    toggleListing(state, position) {
      let index = state.positions.findIndex(
        (element) => element.id == position
      );
      state.positions[index].listed = !state.positions[index].listed;
    },
    setLocation(state, position) {
      state.positions.push(position);
    },
  },
  actions: {
    addMemberRole({ state, commit }, data) {
      let member = state.staff.find((element) => element.id == data.memberId);
      member.role = data.positionId;
      commit("updateStaff", member);
    },
    removeMemberRole({ state, commit }, memberId) {
      let member = state.staff.find((element) => element.id == memberId);
      member.role = null;
      commit("updateStaff", member);
    },
    createPosition({ commit }, data) {
      let position = new Position({
        compensation: data.compensation,
        type: data.type,
        level: data.level,
        location: data.location,
        status: "open",
        holder: null,
        restricted: data.restricted,
      });
      commit("setLocation", position);
    },
    fireStaffMember({ dispatch, commit }, data) {
      if (data.positionId) {
        dispatch("removePositionHolder", data.positionId);
      }
      commit("deleteStaff", data.memberId);
    },
    closePosition({ dispatch, commit }, data) {
      if (data.memberId) {
        dispatch("removeHolderPosition", data.memberId);
      }
      commit("deletePosition", data.positionId);
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
    removeHolderPosition({ state, commit }, memberId) {
      let member = state.staff.find((element) => element.id == memberId);
      member.role = null;
      commit("updateStaff", member);
    },
    togglePositionListing({ commit }, position) {
      commit("toggleListing", position);
    },
    createCandidate({ commit, rootState }, data) {
      let gender = selectRandom(rootState.random_genders);
      let firstName = null;
      switch (gender) {
        case "male":
          firstName = selectRandom(rootState.random_maleFirstNames);
          break;
        case "female":
          firstName = selectRandom(rootState.random_femaleFirstNames);
          break;
      }
      const candidate = new Candidate({
        gender: gender,
        age: randomNumberBetween(18, 100),
        firstName: firstName,
        lastName: selectRandom(rootState.random_lastNames),
        compensation: randomNumberBetween(1500, 6000),
        skills: {
          technical: randomNumberBetween(-100, 100),
          strategic: randomNumberBetween(-100, 100),
          leadership: randomNumberBetween(-100, 100),
          communication: randomNumberBetween(-100, 100),
          financial: randomNumberBetween(-100, 100),
          analytical: randomNumberBetween(-100, 100),
          creative: randomNumberBetween(-100, 100),
          promotional: randomNumberBetween(-100, 100),
        },
        listing: data.listingId,
      });
      commit("saveCandidate", candidate);
    },
    acceptCandidate({ commit }, data) {
      const teamMember = new staffMember({
        id: generator.generate(),
        gender: data.gender,
        age: data.age,
        firstName: data.firstName,
        lastName: data.lastName,
        title: null,
        compensation: data.compensation,
        skills: data.skills,
        role: null,
        restricted: false,
      });
      commit("saveTeamMember", teamMember);
      commit("deleteCandidate", data.id);
    },
    setSelectedTask({ state, commit }, data) {
      let position = state.positions.find(
        (element) => element.id == data.positionId
      );
      position.selectedTask = data.taskId;
      commit("updatePosition", position);
    },
    workTask({ state, commit, dispatch, getters }, data) {
      let position = state.positions.find((element) => element.id == data.id);
      const skill = 5;
      position.taskComplete = position.taskComplete + skill;
      if (position.taskComplete > 100) {
        console.log("task complete");
        dispatch(`task_${getters.get_taskById(position.selectedTask).tag}`);
        position.taskComplete = 0;
      }
      commit("updatePosition", position);
    },
  },
};

export default mod_People;
