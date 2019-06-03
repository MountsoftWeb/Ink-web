<template>
    <div class="project_content">
        <div class="projrct_content_main">
            <p>Project</p>
        </div>
    </div>
    
</template>

<script>
export default {
    data() {
        return {
            id: 0
        }
    },
    methods: {
        show() {
            console.log(this.$route.query.id)
            this.id = this.$route.query.id
        }
    },
    created() {
    },
    mounted() {
        this.show()
    },
    watch: {
        '$route' (to, from) {
        // 刷新参数放到这里里面去触发就可以刷新相同界面了
        this.show()
  }
}
    

}
</script>

<style scoped>
    .project_content {
        margin: 0;
        padding: 2px;
    }
    .projrct_content_main {
        width: 100px;
        height: 300px;
    }
</style>
