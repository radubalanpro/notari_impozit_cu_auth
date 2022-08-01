<template>
  <div class="container h-100">
    <div class="row align-items-center h-100">
      <!-- de aici fac centrarea-->
      <div class="col-8 mx-auto">
        <!-- de aici se da marimea -->

        <div id="impozit" class="card">
          <div class="card-header">Card header</div>

          <div class="card-body">
            <form
              @keydown.enter="dontSubmitForm"
              class="form-control form-control-sm"
            >
              <div class="mb-1">
                <input class="mt-2" type="date" v-model="form.datacurenta" />
                <!-- <date-pick v-model="form.datacurenta"></date-pick> -->
              </div>

              <!-- nume si prenume -->
              <label for="numepren" class="form-label form-label-sm"
                >Nume</label
              >
              <div class="mb-1">
                <input
                  id="numepren"
                  v-model="form.nume"
                  type="text"
                  class="form-control form-control-sm"
                  aria-describedby="numeHelp"
                  v-on:keyup.enter="focusNrChitanta"
                />
                <div id="numeHelp" class="form-text">Nume si prenume</div>
              </div>

              <!-- numar chitanta -->
              <label for="numarchitanta" class="form-label form-label-sm"
                >Nr. chitanta</label
              >
              <div class="mb-1">
                <input
                  id="numarchitanta"
                  v-model="form.nrchit"
                  type="text"
                  class="form-control form-control-sm"
                  aria-describedby="chitHelp"
                  v-on:keyup.enter="focusSuma"
                  @focus="$event.target.select()"
                />
                <div id="chitHelp" class="form-text">
                  Numarul chitantei de impozit
                </div>
              </div>

              <!-- suma -->
              <label for="sumachitanta" class="form-label form-label-sm"
                >Suma</label
              >
              <div class="mb-1">
                <input
                  id="sumachitanta"
                  v-model="form.suma"
                  inputmode="decimal"
                  type="number"
                  step="0.01"
                  min="0"
                  class="form-control form-control-sm"
                  aria-describedby="sumachitHelp"
                  v-on:keyup.enter="focusLocalitateImpozit"
                  @focus="$event.target.select()"
                />
                <div id="sumachitHelp" class="form-text">Suma platita</div>
              </div>

              <!-- selector locaitati -->
              <div class="mb-1">
                <select
                  v-model="form.localitateSelectata"
                  class="form-control form-control-sm"
                  name="localitateImpozit"
                  id="localitateImpozit"
                  aria-describedby="localitateHelp"
                  v-on:change="onChangeMethod"
                >
                  <option
                    v-bind="localitate"
                    v-bind:key="localitate.numeLocalitate"
                    v-bind:value="localitate.idLocalitate"
                    v-for="localitate in localitati"
                  >
                    {{ localitate.numeLocalitate }}
                  </option>
                  >
                </select>
                <div id="localitateHelp" class="form-text">
                  Localitatea unde se plateste impozitul
                </div>
                <div class="mt-1">
                  Selectie curenta:
                  <strong> {{ form.localitateSelectata }} </strong>
                </div>
              </div>

              <!-- cod fiscal -->
              <label for="codfiscal" class="form-label form-label-sm"
                >CUI</label
              >
              <div class="mb-1">
                <input
                  id="codfiscal"
                  v-model="form.cui"
                  type="text"
                  class="form-control form-control-sm"
                  aria-describedby="cuiHelp"
                  disabled
                />
                <div id="cuiHelp" class="form-text">
                  CUI localitate selectata
                </div>
              </div>

              <div class="mb-1 text-center">
                <button class="btn btn-dark text-center" v-on:click="salvare">
                  Salvare date
                </button>
              </div>
              <!-- <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-secondary">Secondary</button>
    <button type="button" class="btn btn-success">Success</button>
    <button type="button" class="btn btn-danger">Danger</button>
    <button type="button" class="btn btn-warning">Warning</button>
    <button type="button" class="btn btn-info">Info</button>
    <button type="button" class="btn btn-light">Light</button>
    <button type="button" class="btn btn-dark">Dark</button> -->
            </form>
          </div>
          <div class="card-footer text-muted">Card footer</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// ce e aici se executa la fiecare instanta a component-ului
// import { ref } from 'vue';
// import Datepicker from '@vuepic/vue-datepicker';
// import '@vuepic/vue-datepicker/dist/main.css';
// const date = ref();
</script>

<script>
// ce e aici se executa o singura data
import axios from "axios";
//import DatePick from 'vue-date-pick';

export default {
  //components: {DatePick},
  name: "ImpozitForm",
  // components: {
  //   Datepicker,
  // },
  setup() {
    // ce e aici se executa la fiecare instanta a component-ului, doar ca aici spre deosebire de script setup trebuie sa avem si return si altele
    // return {}
  },
  data() {
    return {
      form: {
        datacurenta: new Date().toISOString().slice(0, 10),
        nume: "",
        nrchit: "",
        suma: 0.0,
        cui: "111111111",
        localitateSelectata: 1,
      },
      localitati: [],
      // localitati: [
      //   { idLocalitate: '1', numeLocalitate: 'TECUCI' },
      //   { idLocalitate: '2', numeLocalitate: 'Cudalbi' },
      //   { idLocalitate: '3', numeLocalitate: 'Corod', disabled: true },
      // ],
    };
  },
  methods: {
    salvare(e) {
      e.preventDefault();
      if (!this.form.nume) {
        alert("Introduceti numele !!!");
        return;
      }

      console.log(this.form.nume);
      console.log(this.form.nrchit);
      console.log(this.form.localitateSelectata);
      alert(JSON.stringify(this.form));
      console.log(JSON.stringify(this.form));
      (this.form.nume = ""),
        (this.form.nrchit = ""),
        (this.form.localitateSelectata = 1),
        (this.form.suma = 0.0);
    },

    focusNrChitanta: function (e) {
      e.preventDefault();
      document.getElementById("numarchitanta").focus();
    },

    focusSuma: function (e) {
      e.preventDefault();
      document.getElementById("sumachitanta").focus();
    },

    focusLocalitateImpozit: function (e) {
      e.preventDefault();
      document.getElementById("localitateImpozit").focus();
    },

    dontSubmitForm(e) {
      e.preventDefault();
      console.log("S-a apasat enter dar nu se face submit");
      return false;
    },

    onChangeMethod(e) {
      console.log("S-a schimbat valoarea");
      var valoare = parseInt(e.target.value);
      var name = e.target.options[e.target.options.selectedIndex].text;
      console.log(valoare, name);
      let cuiCautat = this.localitati.find(
        (p) => p.idLocalitate == valoare
      ).cuiLocalitate;
      console.log(cuiCautat, " este cui-ul ");
      this.form.cui = cuiCautat;
      // switch (valoare) {
      //   case 1:
      //     this.form.cui = 111111111;
      //     console.log(e.target.value);
      //     break;
      //   case 2:
      //     this.form.cui = 222222222;
      //     console.log(e.target.value);
      //     break;
      //   case 3:
      //     this.form.cui = 333333333;
      //     console.log(e.target.value);
      //     break;
      //   default:
      //     this.form.cui = 111111111;
      // }
    },

    getLocalitati() {
      var urlLocalitati = `http://192.168.0.24:3000/api/getLocalitatiFromDB`;
      console.log("Start get localitati din baza de date");
      axios
        .get(urlLocalitati)
        .then((response) => {
          console.log(response.data.data);
          this.localitati = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          console.log("Done loading!");
        });
    },

    currentDateTime() {
      const current = new Date();
      const date =
        current.getFullYear() +
        "-" +
        (current.getMonth() + 1) +
        "-" +
        current.getDate();
      //const time = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
      //const dateTime = date +' '+ time;

      return date;
    },
  },

  mounted() {
    this.getLocalitati();
    //console.log("count din vuex store state ",this.$store.state.count) // this.$store
  },

  created() {
    //this.testare();
  },

  computed: {
    // count() {
    //   //console.log("count din vuex store state ",this.$store.state.count) // this.$store
    //   return this.$store.state.count
    //   },
  },
};
</script>

<style scoped>
#impozit {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 20px;
  margin-right: 20px;
}
</style>
