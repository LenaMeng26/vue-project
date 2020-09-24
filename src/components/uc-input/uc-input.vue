<template>
  <div class="uc-input">
    <p>
        <label>{{label}}</label>
        <input :type="type" :value="value" :placeholder="placeholder"  @input="$emit('input',$event.target.value)" />
    </p>
  </div>
</template>

<script>
export default {
  name: "uc-input",
  props: {
    type: {
      type: String,
      default: "text",
    },
    label: {
      type: String,
      default: "",
    },
   value:{
      type: String,
      default: "",
   },
    placeholder:{
      type:String,
      default:''
    }


  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  width: 75%;
  /* margin-bottom: 0.2rem; */
  display: flex;
  line-height: 0.65rem;
  justify-content: space-between;
}

input {
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  width: 60vw;
  text-indent: 1.2em;
   background: white;
}

label {
  width: 1.5rem;
}
</style>
