<template>
    <div class="tasks">
        <TasksPanel/>
    </div>
</template>

<script>
    import TasksPanel from "@/components/TasksPanel.vue";

    export default {
        inherit: true,
        components: {TasksPanel},
        created: function () {
        },
        methods: {
        }
    }

</script>
<!--
<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import {ComponentOptions} from 'vue'; // @ is an alias to /src

    @Component({
        components: {
            TasksPanel,
        },
    })
    export default class Tasks extends Vue {
    }
</script>
-->

<style>
    html {
        overflow-y: auto;
    }
</style>
