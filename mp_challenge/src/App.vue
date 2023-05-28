<script>
import ListItem from "./components/ListItem.vue";
import TheRectangle from "./components/TheRectangle.vue";
export default {
  components: { TheRectangle, ListItem },
  data() {
    return {
      showRectangle: false,
      inputOneValue: "",
      inputTwoValue: "",
      inputThreeValue: "",
      newArray: [],
      showAlert: false,
    };
  },
  methods: {
    setRectangleVisibility() {
      this.showRectangle = !this.showRectangle;
    },
    createArray(firstString, secondString) {
      if (firstString && secondString) {
        this.showAlert = false; //pomyślałam, że dobrze byłoby dodać jakąś małą formę walidacji
        //zostawiłam to małe powtórzenie przez wzgląd na potencjalnie lepszą czytelność kodu(?) ;)
        const arrayOne = firstString.split(",");
        const arrayTwo = secondString.split(",");
        this.newArray = arrayOne.filter(
          (element) => !arrayTwo.includes(element)
        );
      } else this.showAlert = true;
    },
  },
};
</script>

<template>
  <section id="main" class="flex-center">
    <base-card>
      <the-rectangle v-show="showRectangle" />
      <base-button
        button-type="button"
        buttonClass="gradient"
        :button-text="showRectangle ? 'Hide Rectangle' : 'Show Rectangle'"
        :button-title="showRectangle ? 'Hide Rectangle' : 'Show Rectangle'"
        @click="setRectangleVisibility"
      />
    </base-card>
    <base-card>
      <base-input
        inputId="userInputOne"
        inputType="text"
        inputLabel="Input 1"
        v-model.trim="inputOneValue"
      />
      <p>
        Value from 1st input: <span class="info">{{ inputOneValue }}</span>
      </p>
    </base-card>

    <base-card>
      <div v-if="showAlert" role="alert" class="error">
        <p>Please write something in the input fields below</p>
      </div>
      <base-input
        inputId="userInputTwo"
        inputType="text"
        inputLabel="Input A"
        v-model.trim="inputTwoValue"
      />
      <base-input
        inputId="userInputThree"
        inputType="text"
        inputLabel="Input B"
        v-model.trim="inputThreeValue"
      />
      <base-button
        button-type="button"
        button-class="basic"
        button-text="Create newArray"
        button-title="Create new array"
        @click="createArray(inputTwoValue, inputThreeValue)"
      />
    </base-card>
    <base-card>
      <div v-if="newArray.length > 0">
        <h2>newArray (A-B)</h2>
        <ul>
          <list-item
            v-for="(item, index) in newArray"
            :key="index"
            :item="item"
          />
        </ul>
      </div>
      <h2 v-else>New Array is empty</h2>
    </base-card>
  </section>
</template>




