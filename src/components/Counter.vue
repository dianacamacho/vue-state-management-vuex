<template>
    <div>
        <button class="btn btn-primary" @click="increment">Increment</button>
        <button class="btn btn-primary" @click="decrement">Decrement</button>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';
    export default {
        methods: {
            ...mapMutations([
                'increment',
                'decrement'
            ])
        }
    }
    // export default {

    //     methods: {
    //         // increment() {
    //         //     this.$store.state.counter++;
    //         // },
    //         // decrement() {
    //         //     this.$store.state.counter--;
    //         // }
    //         // using Vuex mutations instead:
    //         increment() {
    //             this.$store.commit('increment');
    //         },
    //         decrement() {
    //             this.$store.commit('decrement');
    //         }
    //     }
    // }
</script>

