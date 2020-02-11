<template>
  <table class="report">
    <tr class="report__row">
      <td class="report__column report__column_name">Владелец:</td>
      <td class="report__column">{{ data.owner }}</td>
    </tr>
    <tr class="report__row">
      <td class="report__column report__column_name">Год производства:</td>
      <td class="report__column">{{ data.year }}</td>
    </tr>
    <tr class="report__row">
      <td class="report__column report__column_name">
        Колличество владельцев:
      </td>
      <td class="report__column">{{ data.ownersCount }}</td>
    </tr>
    <tr class="report__row">
      <td class="report__column report__column_name">Факты ДДП:</td>
      <td class="report__column report__column_name">
        {{ data.crashesCount }}
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  name: "CarReport",
  props: {
    data: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
.report {
  border-collapse: collapse;
  width: 100%;
}

.report__row {
  border: var(--element-border);
}

.report__column {
  width: 60%;
  padding: 8px;
}

.report__column_name {
  width: 40%;
}
</style>
