<template>
    <div>
        <!-- to pass multiple arguments to increment action, put them all inside hash object -->
        <button class="btn btn-primary" @click="asyncIncrement({by: 50, duration: 1000})">Increment</button>
        <button class="btn btn-primary" @click="asyncDecrement({by: 25, duration: 1000})">Decrement</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    export default {
        methods: {
            ...mapActions([
                'asyncIncrement',
                'asyncDecrement'
            ])
        }
    }
</script>

