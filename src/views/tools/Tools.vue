<template>
    <b-layout-no-left>
        <div class="tools_container">
            <router-view></router-view>
        </div>
    </b-layout-no-left>
</template>

<script>
export default {

}
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .tools_container {
        min-height: 800px;
        overflow: auto;
        margin: 0 auto;
        /* width: auto; */
        padding: 0;
        /* text-align: center; */
        /* top: 100px;*/
        max-width: 1300px;
    }
</style>
