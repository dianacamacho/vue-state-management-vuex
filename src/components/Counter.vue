<template>
    <div>
        <button class="btn btn-primary" @click="increment({by: 100})">Increment</button>
        <button class="btn btn-primary" @click="decrement({by: 50})">Decrement</button>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';
    import { mapActions } from 'vuex';
    export default {
        methods: {
            // ...mapMutations([
            //     'increment',
            //     'decrement'
            // ]),
            ...mapActions([
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

