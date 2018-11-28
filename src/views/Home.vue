<template>
    <Mapbox id="map"
            access-token="pk.eyJ1IjoiZ2VubmFkaXkiLCJhIjoiMm9WN3VWQSJ9.b9s_EXvxcqiAbaf5GzrEnA"
            :map-options="{
                        // style: 'mapbox://styles/mapbox/dark-v9',
                        style: 'mapbox://styles/gennadiy/cjiw5qm9q21nf2rl7suhlzbm5',
                        center: [0, 25],
                        zoom: 2
                        }"
            :geolocate-control="{
                        show: true,
                        position: 'top-right'
                        }"
            :scale-control="{
                        show: true,
                        position: 'bottom-right'
                        }"
            :fullscreen-control="{
                        show: true,
                        position: 'top-right'
                        }">
    </Mapbox>
    <!--
        <v-container fluid>
            <v-slide-y-transition mode="out-in">
                <v-layout column align-center>
                    <img src="@/assets/logo.png" alt="Vuetify.js" class="mb-5">
                    <blockquote>
                        &#8220;First, solve the problem. Then, write the code.&#8221;
                        <footer>
                            <small>
                                <em>&mdash;John Johnson</em>
                            </small>
                        </footer>
                    </blockquote>
                </v-layout>
            </v-slide-y-transition>
        </v-container>
    -->
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import VCard from "vuetify/src/components/VCard/VCard";
    import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
    import Mapbox from "@/components/Mapbox.vue";


    @Component({
        components: {
            HelloWorld,
            VCard,
            Mapbox
        },
    })
    export default class Home extends Vue {

    }
</script>

<style>
    html {
        overflow-y: auto;
    }

    #map {
        width: 100%;
        height: 100%;
    }
</style>
