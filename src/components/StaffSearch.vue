<template>
  <div class="search">
    <label class="search__label">Поиск сотрудников</label>
    <input
      v-model="employee"
      class="search__input"
      type="text"
      placeholder="Введите Id или имя"
      @input="getStaff"
    />
    <div class="result">
      <span class="result__title">Результаты</span>
      <template v-if="staff && staff.length > 0">
        <EmployeeCard
          v-for="empl in staff"
          :key="empl.id"
          :employee="empl"
          @click="selectEmpl(empl)"
        />
      </template>
      <span v-else-if="employee && employee != ''" class="result__info"
        >ничего не найдено</span
      >
      <span v-if="!employee || employee == ''" class="result__info"
        >начните поиск</span
      >
    </div>
    <div v-if="preloader" class="preloader">
      <Loader />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import EmployeeCard from "./EmployeeCard.vue";
import { useDebounceFn } from "@vueuse/core";
import Loader from "./Loader.vue";
import { useStore } from "vuex";

const store = useStore();
const employee = ref();
const preloader = ref(false);
const staff = ref([]);

const selectEmpl = (empl) => {
  store.dispatch("selectEmployee", empl);
};

const tranform = () => {
  let queryUserName = "";
  let queryId = "";
  employee.value.split(",").forEach((element) => {
    if (!isNaN(element.trim())) {
      queryId == ""
        ? (queryId += "id=" + element.trim())
        : (queryId += "&id=" + element.trim());
    } else {
      queryUserName == ""
        ? (queryUserName += "username=" + element.trim())
        : (queryUserName += "&username=" + element.trim());
    }
  });
  return { queryUserName, queryId };
};

const getStaff = useDebounceFn(async () => {
  preloader.value = true;
  selectEmpl(null);
  staff.value = [];
  const { queryUserName, queryId } = tranform();
  if (queryUserName) {
    const resName = await fetch(
      `https://jsonplaceholder.typicode.com/users?${queryUserName}`
    );
    if (resName.ok) {
      staff.value = await resName.json();
    }
  }
  if (queryId) {
    const resId = await fetch(
      `https://jsonplaceholder.typicode.com/users?${queryId}`
    );
    if (resId.ok) {
      const dataResId = await resId.json();
      staff.value = [...staff.value, ...dataResId];
    }
  }
  preloader.value = false;
}, 500);
</script>
<style scoped lang="scss">
.search {
  display: flex;
  flex-direction: column;
  gap: 22px;
  position: relative;
  width: 291px;
  background-color: #fdfdfd;
  padding: 27px 23px;
  border-right: 1px solid #dededd;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

  &__label {
    font-size: 16px;
    font-weight: 600;
    line-height: 22.4px;
    text-align: left;
    color: #333333;
  }

  &__input {
    padding: 14px 16px;
    border: 1.5px solid #e9ecef;
    border-radius: 8px;
  }
  &__input:focus-visible {
    outline: 0px;
  }
}
.result {
  display: flex;
  flex-direction: column;
  gap: 18px;

  &__title {
    font-size: 16px;
    font-weight: 600;
    line-height: 22.4px;
    text-align: left;
    color: #333333;
  }

  &__info {
    font-size: 14px;
    font-weight: 400;
    line-height: 17.07px;
    text-align: left;
    color: #76787d;
  }
}
.preloader {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(118, 120, 125, 0.1);
  z-index: 1000;
}
</style>
