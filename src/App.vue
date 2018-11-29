<template>
    <v-app>
        <!--
                <v-navigation-drawer
                        persistent
                        :mini-variant="miniVariant"
                        :clipped="clipped"
                        v-model="drawer"
                        enable-resize-watcher
                        fixed
                        app
                >
                    <v-list>
                        <v-list-tile
                                value="true"
                                v-for="(item, i) in items"
                                :key="i"
                        >
                            <v-list-tile-action>
                                <v-icon v-html="item.icon"></v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title v-text="item.title"></v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
                </v-navigation-drawer>
        -->
        <v-toolbar app tabs dark color="primary" :clipped-left="clipped">
            <!--
                            <v-toolbar-side-icon></v-toolbar-side-icon>
            -->

            <v-toolbar-title class="headline">
                <span>Hydro </span>
                <span class="font-weight-light">Earth</span>
            </v-toolbar-title>

            <!--<v-toolbar-title class="white&#45;&#45;text">Hydro Earth</v-toolbar-title>-->

            <!--
                        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            -->
            <!--
                        <v-btn icon @click.stop="miniVariant = !miniVariant">
                            <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
                        </v-btn>
                        <v-btn icon @click.stop="clipped = !clipped">
                            <v-icon>web</v-icon>
                        </v-btn>
                        <v-btn icon @click.stop="fixed = !fixed">
                            <v-icon>web</v-icon>
                        </v-btn>
                        <v-toolbar-title v-text="title"></v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-btn icon @click.stop="rightDrawer = !rightDrawer">
                            <v-icon>menu</v-icon>
                        </v-btn>
            -->
            <v-spacer></v-spacer>

            <div>
                <v-tabs dark color="primary" slider-color="yellow" v-model="activeTab">
                    <v-tab to="/">
                        Home
                    </v-tab>
                    <v-tab to="/tasks">
                        Tasks
                    </v-tab>
                    <!--
                                        <v-tab to="/about">
                                            About
                                        </v-tab>
                    -->
                </v-tabs>
            </div>

            <!--
                        <v-spacer></v-spacer>
            -->
            <!--
                        <v-btn icon @click="handleClickSignIn">Login</v-btn>
            -->

            <v-tooltip bottom>
                <v-btn icon slot="activator" @click="signInWithGoogle" v-if="!isLoggedIn">
                    <v-icon>account_box</v-icon>
                </v-btn>
                <span>Sign-in</span>
            </v-tooltip>

            <v-tooltip bottom>
                <v-btn icon slot="activator" @click="signOut" v-if="isLoggedIn">
                    <img :src="$store.state.user.photoURL" alt="avatar"
                         style="width: 30px; height: 30px; border-radius: 50%;"/>
                </v-btn>
                <span>Sign-out</span>
            </v-tooltip>

            <!--

                            <v-btn icon>
                                <v-icon>search</v-icon>
                            </v-btn>
            -->

        </v-toolbar>

        <v-content>
            <router-view/>

            <!--<transition name="ripple">-->
                <!---->
            <!--</transition>-->

        </v-content>

        <v-footer :fixed="fixed" app dark color="primary">
            <v-btn
                    v-if="activeTab === '/tasks'"
                    absolute
                    dark
                    fab
                    small
                    top
                    right
                    color="green"
                    @click="addTask"
            >
                <v-icon>add</v-icon>
            </v-btn>

            <v-spacer></v-spacer>
            <span>&copy; Deltares 2018</span>
            <v-spacer></v-spacer>
        </v-footer>
    </v-app>
</template>

<script>
    import {Vue} from "vue";
    import {VToolbar, VLabel, VTooltip, VCard, VTabs, VTab, VTabItem} from "vuetify/lib"
    import ModelsPanel from './components/TasksPanel'

    import firebase from 'firebase'
    import {bus} from "@/bus";

    export default {
        name: 'App',
        components: {
            VToolbar,
            VTabs,
            VTab,
            VTabItem,
            VLabel,
            VTooltip,
            ModelsPanel,
            VCard
        },
        data() {
            return {
                activeTab: 0,
                clipped: false,
                drawer: true,
                fixed: false,
                items: [{
                    icon: 'bubble_chart',
                    title: 'Inspire'
                }],
                miniVariant: false,
                right: true,
                rightDrawer: false,
                title: 'Hydro Engine',
                isLoggedIn: false
            }
        },
        created: function () {
            var c = this;

            firebase.auth().onAuthStateChanged(user => {
                c.$store.state.user = user;

                console.log('State changed.');

                if (user) {
                    user.getIdToken(/* forceRefresh */ true).then(function (idToken) {
                        // Send token to your backend via HTTPS
                        // ...

                        c.$store.state.userToken = idToken;
                        c.isLoggedIn = true;

                        console.log('id_token: ' + idToken);
                        console.log(user);

                        // hack
                        vm.$forceUpdate();
                        console.log('Refreshing ...')
                    }).catch(function (error) {
                        // Handle error
                    });
                }
            })
        },
        methods: {
            addTask: function(event) {
                bus.$emit('addTask');
            },

            signInWithGoogle() {
                var c = this;

                const provider = new firebase.auth.GoogleAuthProvider();
                firebase.auth().signInWithPopup(provider).then((result) => {
                    c.$store.state.user = result.user;
                    c.$store.state.userAccessToken = result.credential.accessToken;
                    c.isLoggedIn = true;
                    // console.log(result.credential)

                    console.log('Current user: ' + firebase.auth().currentUser);
                    c.$forceUpdate();
                }).catch(error => console.log(error))
            },

            signOut() {
                var c = this;

                c.isLoggedIn = false;
                c.$store.state.user = null;
                c.$store.state.userToken = null;
                c.$store.state.userAccessToken = null;

                firebase.auth().signOut().then(() => {
                    c.isLoggedIn = false;
                    c.$store.state.user = null;
                    c.$forceUpdate();
                }).catch(err => console.log(error))
            }
        },
    }
</script>

<style>
</style>

<style src="mapbox-gl/dist/mapbox-gl.css"></style>
