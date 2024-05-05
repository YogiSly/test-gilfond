<template>
  <div class="preview">
    <div v-if="employee" class="preview__card">
      <img src="/noimage-big.png" alt="" />
      <div class="preview__info">
        <span class="preview__name">{{ employee.name }}</span>
        <div class="preview__props">
          <span class="preview__label">email:</span>
          <span class="preview__value">{{ employee.email }}</span>
        </div>
        <div class="preview__props">
          <span class="preview__label">phone:</span>
          <span class="preview__value">{{ employee.phone }}</span>
        </div>
        <span class="preview__descr-label">О себе:</span>
        <span class="preview__descr"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.</span
        >
      </div>
    </div>
    <span v-else>Выберите сотрудника, чтобы посмотреть его профиль</span>
  </div>
</template>
<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const employee = computed(() => store.getters.employee);
</script>
<style scoped lang="scss">
.preview {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: #fdfdfd;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  &__card {
    display: flex;
    justify-content: space-between;
    gap: 60px;
    width: 100%;
    padding: 30px 30px 30px 20px;
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }

  &__name {
    font-size: 16px;
    font-weight: 600;
    line-height: 22.4px;
    text-align: left;
  }

  &__props {
    display: flex;
    gap: 12px;
  }

  &__label {
    font-size: 14px;
    font-weight: 600;
    line-height: 19.6px;
    text-align: left;
    color: #333333;
  }

  &__value {
    font-size: 14px;
    font-weight: 400;
    line-height: 19.6px;
    text-align: left;
    color: #76787d;
  }

  &__descr-label {
    font-size: 16px;
    font-weight: 600;
    line-height: 22.4px;
    text-align: left;
    color: #333333;
    margin-top: 10px;
  }

  &__descr {
    font-size: 14px;
    font-weight: 400;
    line-height: 17.07px;
    text-align: left;
    color: #76787d;
    margin-top: 15px;
  }
}
</style>
