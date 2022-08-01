<template>
  <div class="secure">
    <ImpozitForm />
  </div>
</template>


<script>
  import ImpozitForm from '@/components/ImpozitComponentPacta.vue';
    export default {
        name: 'SecureView',
        components: {
          ImpozitForm
        },
        data() {
          return {}
        },
        mounted() {
            if(!this.$root.authenticated) {
                //console.log("autentificat",this.$root.authenticated);
                this.$router.replace({ name: "login" });
            }
        },
    }
</script>