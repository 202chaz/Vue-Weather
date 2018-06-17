<template>
  <div id="weatherForm">
    <form v-on:submit="formSubmit">
      <input type="text" v-model="userInput" placeholder="Enter a zipcode" class="input-field" maxlength="5">
      <button type="submit" class="button">Search</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Weather',
  data: function() {
    return {
      userInput:''
    }
  },
  methods: {
    formSubmit(e) {
      this.$emit('formSubmit', this.userInput);
      e.preventDefault();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  body {
    background:#227c96;
  }
  input[type=text] {
    border-radius: 3px;
    width:12%;
    height:60px;
    border:none;
    margin-bottom:80px;
    outline: 0;
    transition: all .3s ease-in-out;
    padding: 10px 0 10px 15px;
    background:#3a8ba2;
  }
  ::placeholder {
    color: #efefef;
    text-indent: 0;
    font-weight: 300;
    font-size:25px
  }
  .input-field {
    font-size: 25px;
  }
  .button {
    padding:14px 5px 14px 5px;
    font-size:25px;
    border-radius: 3px;
    border:1px solid #3a8ba2;
    background:#227c96;
    color:#fff;
  }
  .button:hover {
    cursor:pointer;
  }
</style>
