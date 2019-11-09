<template>
  <div class="structure">
    <div class="department">
      <h4>Top management</h4>
      <ul>
        <li>Alex Alexandrov</li>
      </ul>
    </div>
    <div class="department">
      <h4>Sales</h4>
      <ul>
        <li></li>
      </ul>
    </div>
    <div class="department">
      <h4>HR</h4>
      <ul>
        <li></li>
      </ul>
    </div>
    <div class="department">
      <h4>IT</h4>
      <ul>
        <li></li>
      </ul>
    </div>
    <div class="department">
      <h4>Accounting</h4>
      <ul>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.structure {
  width: 80%;
  margin: 10px auto;
  border: 1px solid black;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  .department {
    outline: 1px solid green;

    h4 {
      margin: 0;
      padding: 0;
    }
    ul {
      padding: 0;

      li {
        list-style-type: none;
      }
    }
  }
}
</style>