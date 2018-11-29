<template>
    <v-flex xs10 offset-xs1>
        <v-subheader>Tasks</v-subheader>
        <v-data-table
                :headers="headers"
                :items="tasks"
                class="elevation-1"
                :pagination.sync="pagination"
                :rows-per-page-items="[ 10, 25, 50, { 'text': '$vuetify.dataIterator.rowsPerPageAll', 'value': -1 } ]"
        >
            <!--hide-actions-->

            <template slot="items" slot-scope="props">
                <td>{{ props.item.name }}</td>
                <td class="text-xs-left">{{ props.item.author }}</td>
                <td class="text-xs-left">{{ props.item.created }}</td>
                <td class="text-xs-left">{{ props.item.type }}</td>
                <td class="text-xs-left">
                    {{ props.item.status }}
                    <v-progress-circular v-if="isRunning(props.item)"
                                         :size="15"
                                         :width="2"
                                         indeterminate
                                         color="primary"
                    ></v-progress-circular>
                </td>
                <td class="px-0 ma-0">
                    <v-btn icon class="primary--text px-0 ma-0" @click.stop="onDownload(props.item.url)"
                           :disabled="!props.item.url">
                        <v-icon>cloud_download</v-icon>
                    </v-btn>
                </td>
                <td class="px-0 ma-0">
                    <v-btn icon class="primary--text ma-0" @click.stop="onDeleteTask(props.item)">
                        <v-icon>delete</v-icon>
                    </v-btn>
                </td>
            </template>
        </v-data-table>

        <v-dialog v-model="showAddTaskDialog" @keydown.esc="showAddTaskDialog = false" width="800px">
            <v-card>
                <v-card-title
                        class="grey lighten-4 py-4 title"
                >
                    Add new task
                </v-card-title>
                <v-container grid-list-sm class="pa-4">
                    <v-layout row wrap>
                        <v-flex xs12>
                            <v-text-field
                                    v-model="newTask.name"
                                    label="Name"
                                    prepend-icon="notes"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs3>
                            <v-select
                                    v-model="newTask.type"
                                    :items="modelTypes"
                                    label="Model Type"
                                    prepend-icon="notes"
                                    @change="onNewTaskModelTypeChanged"
                            ></v-select>
                        </v-flex>
                        <v-flex xs9>
                        </v-flex>
                        <v-flex xs12>
                            <v-text-field
                                    v-model="newTask.description"
                                    prepend-icon="notes"
                                    label="Description"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12>
                            <v-textarea
                                    v-model="newTask.parameters"
                                    prepend-icon="notes"
                                    label="Parameters"
                                    value="..."
                                    rows="10"
                            ></v-textarea>
                        </v-flex>
                    </v-layout>
                </v-container>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="showAddTaskDialog = false">Cancel</v-btn>
                    <v-btn flat @click="onSaveNewTask">Save</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-flex>
</template>

<script>
    import VDataTable from "vuetify/src/components/VDataTable/VDataTable"
    import VSubheader from "vuetify/src/components/VSubheader/VSubheader"
    import {bus} from '../bus';

    // const SERVER_URL = "http://localhost:8080";
    // const SERVER_URL = "//v1-dot-hydro-earth.appspot.com";
    const SERVER_URL = "//hydro-earth.appspot.com";

    export default {
        inherit: true,
        components: {
            VDataTable,
            VSubheader
        },
        created: function () {
            bus.$on('addTask', this.onAddTask);

            console.log('Fetching data ...');

            const c = this;

            function fetchData(token) {
                fetch(SERVER_URL + '/tasks/', {
                    method: "GET",
                    mode: 'cors',
                    cache: 'no-cache',
                    headers: {
                        'Authorization': token
                    }
                }).then((res) => {
                    return res.json()
                }).then((json) => {
                    c.tasks = json.tasks.map((d) => {
                        return {
                            name: d.title || d.name,
                            author: d.createdBy,
                            created: d.createdTime,
                            description: d.description,
                            type: d.type,
                            status: d.status,
                            id: d.id,
                            url: d.url
                        }
                    });

                    c.nextPageToken = json.next_page_token;

                    console.log('Fetched tasks: ' + c.tasks.length)
                })
            }

            fetchData(this.$store.state.userToken);

            function getTemplate(modelType) {
                fetch(SERVER_URL + '/tasks/templates/' + modelType, {
                    method: "GET",
                    mode: 'cors',
                    cache: 'no-cache',
                }).then((res) => {
                    return res.text()
                }).then((text) => {
                    c.modelTemplates[modelType] = text;
                    console.log('Fetched model template: ' + modelType);
                    console.log(text);
                })
            }

            getTemplate('wflow');
            getTemplate('iMOD');

            /*
                        if (!this.$store.state.userToken) {
                            console.log('No user token.');

                            // hack
                            function refreshData() {
                                const token = c.$store.state.userToken;
                                if (token) {
                                    fetchData(token);
                                } else {
                                    setTimeout(refreshData, 500);
                                }
                            }

                            setTimeout(refreshData, 500);
                        } else {
                            fetchData(this.$store.state.userToken)
                        }
            */


        },
        data() {
            return {
                showAddTaskDialog: false,
                newTask: {
                    name: '',
                    author: '',
                    created: null,
                    description: '',
                    parameters: '',
                    type: '',
                    status: '',
                    id: '',
                    url: ''
                },
                modelTypes: ['wflow', 'iMOD'],
                modelTemplates: {},
                pagination: {sortBy: 'created', descending: true},
                headers: [
                    {text: 'Name', align: 'left', value: 'name'},
                    {text: 'Author', value: 'author'},
                    {text: 'Created', value: 'created'},
                    {text: 'Type', value: 'type'},
                    {text: 'Status', value: 'status'},
                    {text: '', value: 'download'},
                    {text: '', value: 'delete'}
                ],
                tasks: [],
                isRunning: function (task) {
                    return task.status === 'UPLOADING_DATA' || task.status === 'CREATED';
                }
            }
        },
        methods: {
            onDownload: function (url) {
                const anchor = document.createElement('a');
                anchor.href = url;
                anchor.target = '_blank';
                anchor.click();
            },
            onNewTaskModelTypeChanged: function (event) {
                this.newTask.parameters = this.modelTemplates[this.newTask.type];
            },
            onDeleteTask: function (task) {
                if (!this.validateUser('delete task')) {
                    return;
                }

                const c = this;

                let data = JSON.stringify(task);

                // delete task
                fetch(SERVER_URL + '/tasks/' + task.id + '/delete', {
                    method: "POST",
                    mode: 'cors',
                    cache: 'no-cache',
                    headers: {
                        "Content-Type": "application/json; charset=utf-8",
                        'Authorization': this.$store.state.userToken
                    },
                    body: data
                }).then((res) => {
                    return res.json;
                }).then((json) => {
                    console.log(json)
                    c.$forceUpdate();

                    let index = c.tasks.findIndex(t => t.id === task.id);
                    let removed = c.tasks.splice(index, 1);
                    console.log('Removed: ' + JSON.stringify(removed));
                })
            },
            onAddTask: function () {
                if (!this.validateUser('add a new task')) {
                    return;
                }

                this.showAddTaskDialog = true
            },
            onSaveNewTask: function () {
                console.log('Saving task ...');

                let task = this.newTask;
                console.log(task);

                var data = JSON.stringify(task);

                let c = this;

                // add new task
                fetch(SERVER_URL + '/tasks/add', {
                    method: "POST",
                    mode: 'cors',
                    cache: 'no-cache',
                    headers: {
                        "Content-Type": "application/json; charset=utf-8",
                        'Authorization': this.$store.state.userToken
                    },
                    body: data
                }).then((res) => {
                    return res.json()
                }).then((json) => {
                    console.log('New model: ');
                    console.log(json);

                    let task = {
                        name: json.title || json.name,
                        author: json.createdBy,
                        created: json.createdTime,
                        description: json.description,
                        type: json.type,
                        status: json.status,
                        id: json.id,
                        url: json.url
                    };

                    c.tasks.push(task)

                    /*
                    c.tasks = json.map((d) => {
                        return {
                            name: d.title,
                            author: d.createdById,
                            created: d.createdTime,
                            description: d.description,
                            type: d.type,
                            status: d.status,
                            id: d.id,
                            url: d.url
                        }
                    });*/
                });

                this.showAddTaskDialog = false;
            },
            validateUser: function (action) {
                if (!this.$store.state.user) {
                    alert('You need to login to ' + action);
                    return false;
                }

                return true;
            }
        }
    }
</script>
