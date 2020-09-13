<template>
    <div>
        <p>{{ movie.title }}</p>
        <button v-on:click='toggle = ! toggle'>See Detials</button>
        <p v-if="toggle">{{ movie.descritpion }}</p>
    </div>
</template>

<script>
export default {
    name:"Accordion",

    props: ['movie'],

    data: function () {
        return {
            toggle: false,
        }
    }
}
</script>