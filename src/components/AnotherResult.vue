<template>
    <div>
      <p>Counter is: {{ doubleCounter }}</p>
      <p>Number of clicks: {{ stringCounter }}</p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
   // mapGetters makes computed props in background and maps them to the getters in the store
        // computed: {
        //   counter() {
        //     return this.$store.getters.doubleCounter;
        //   },
        //   clicks() {
        //     return this.$store.getters.stringCounter;
        //   }
        // }
        computed: {
          ...mapGetters([
            'doubleCounter',
            'stringCounter'
          ]),
          ourOwnComputedProp() {
            
          }
        }
    } 
</script>

