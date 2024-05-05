<template>
  <div
    class="card"
    :class="{ 'card--selected': selectedEmpl?.id == employee?.id }"
  >
    <img class="card__img" src="/noimage.png" alt="" />
    <div
      class="card__info"
      :class="{ 'card__info--selected': selectedEmpl?.id == employee?.id }"
    >
      <span class="card__name">{{ employee.username }}</span>
      <div class="card__email">{{ employee.email }}</div>
    </div>
  </div>
</template>
<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const selectedEmpl = computed(() => store.getters.employee);

const props = defineProps(["employee"]);
</script>
<style scoped lang="scss">
.card {
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 0px 10px 0px #0000001a;
  border-radius: 10px;
  cursor: pointer;

  &__img {
    width: 70px;
    height: 70px;
  }

  &__info {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 5px;
    padding: 15px;
    max-width: 170px;
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;

    &--selected {
      background-color: #e0e0e0;
    }
  }

  &__name {
    font-size: 14px;
    font-weight: 600;
    line-height: 17.07px;
    text-align: left;
    color: #333333;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &__email {
    font-size: 14px;
    font-weight: 400;
    line-height: 17.07px;
    text-align: left;
    color: #76787d;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &--selected {
    outline: 1px solid #e0e0e0;
  }
}
</style>
