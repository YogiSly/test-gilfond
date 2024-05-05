<template>
  <div class="page">
    <div class="page__head">
      <span class="page__head-title">Жилфонд</span>
      <span class="page__head-user">Пользователь</span>
    </div>
    <div class="page__staff">
      <StaffSearch />
      <EmployeePreview />
    </div>
  </div>
</template>
<script setup>
import StaffSearch from "../components/StaffSearch.vue";
import EmployeePreview from "../components/EmployeePreview.vue";
</script>
<style scoped lang="scss">
.page {
  display: flex;
  flex-direction: column;
  gap: 26px;
  padding: 50px;
  width: 100%;
  height: 100%;
  min-height: 100vh;

  &__head {
    display: flex;
    justify-content: space-between;
  }

  &__head-title {
    font-size: 32px;
    font-weight: 700;
    line-height: 39.01px;
    text-align: left;
    color: #e31f24;
  }

  &__head-user {
    font-size: 16px;
    font-weight: 400;
    line-height: 19.5px;
    text-align: left;
  }

  &__staff {
    display: flex;
    justify-content: space-between;
    height: 100%;
    box-shadow: 0px 0px 10px 0px #0000001a;
    border-radius: 10px;
    min-height: calc(100vh - 165px);
  }
}
</style>
