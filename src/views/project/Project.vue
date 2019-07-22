<template>
    <b-layout-no-left>
        <div class="project_container">
            <div class="project_nav">
                <dl>
                    <dt>绘画方式</dt>
                    <dd>
                        <router-link :to="{path:'/project', query:{id:1}}">手绘</router-link>  
                        <router-link :to="{path:'/project', query:{id:2}}">板绘</router-link>
                        <router-link :to="{path:'/project', query:{id:3}}">墙绘</router-link>
                    </dd>
                    
                </dl>
                <dl>
                    <dt>类别</dt>
                    <dd>
                        <!-- <span :class="activeCategoryClass == index ? 'active':''" v-for="(category,index) in categories" :key="index" @click="getCategorie(index)">
                            <router-link :to="{path:'/project', query:{id:category.id}}">{{category.category_name}}</router-link>
                        </span> -->
                        <router-link v-for="(category,index) in categories" 
                            :key="category.value" 
                            :to="{path:'/project', query:{c:category.id,l:activeLabelClass}}"
                            :class="activeCategoryClass == category.id ? 'active':''"
                            @click.native="getCategorie(category.id)" 
                            > 
                            {{category.category_name}}
                        </router-link> 
                        
                    </dd>
                </dl>

                <dl>
                    <dt>标签</dt>
                    <dd>
                        <!-- <span :class="activeLabelClass == index ? 'active':''" v-for="(label, index) in label" :key="index" @click="getLabel(index)">
                            <router-link  :to="{path:'/project', query:{id:label.id}}">{{label.label_name}}</router-link>
                        </span> -->
                        <router-link v-for="(label, index) in label"
                                    :key="label.value"
                                    :to="{path:'/project', query:{c:activeCategoryClass,l:label.id}}"
                                    :class="activeLabelClass == label.id ? 'active':''"
                                    @click.native="getLabel(label.id)">
                            {{label.label_name}}
                        </router-link>
                    </dd>
                </dl>

            </div>
            <div class="node">
                <router-link to="/">首页</router-link>
            </div>
            <div class="project_content">
                <!-- <router-view></router-view> -->
                <project-list></project-list>
                
            </div>
        </div>
    </b-layout-no-left>
</template>

<script>
import { mapState } from "vuex";

export default {
    data() {
        return {
            activeCategoryClass: 0,
            activeLabelClass: 0
        }
    },
        // metaInfo: {
        //     title: "ds",
        //     meta: [
                
        //         { name: 'd', content: 'width=1300, user-scalable=yes, target-densitydpi=device-dpi' }
        //     ]
        // },
    methods: {
        project: function(categories_id) {
            // alert(categories_id)
            // 根据 project 分类进行读取信息
            // this.$route.push({name:'/project', params:{id:categories_id}})

            // this.$store.dispatch('getProjectId', categories_id)
        },
        getCategorie: function(index){
            this.activeCategoryClass = index;
        },
        getLabel: function(index) {
            this.activeLabelClass = index
        },
        
    },
    mounted() {
        this.$store.dispatch('getLabel')
        this.$store.dispatch('getCategories')
        if(this.$route.query.c){
            // alert(this.$route.query.item)
            this.activeCategoryClass = this.$route.query.c
        }else{
            this.activeCategoryClass = 0;
        }
        if(this.$route.query.l) {
            this.activeLabelClass = this.$route.query.l
        }else{
            this.activeLabelClass = 0
        }
    },
    // computed: {
    //     ...mapState(['project'])
    // }
    computed: {
        ...mapState(['label']),
        ...mapState(['categories']),
    }
}
</script>

<style scoped>
    .project_container {
        overflow: auto;
        margin: 0 auto;
        /* width: auto; */
        padding: 0;
        /* text-align: center; */
        /* top: 100px;*/
        max-width: 1300px;
        /* margin: 0 10% 0 10%; */

    }
    /* ============= 导航条 ============ */
    .project_nav {
        margin-top: 20px;
        /* text-align: center; */
        /* margin: 0 auto; */
        padding: 11px;
        /* float: left; */
        display: inline-block;
        position: relative;
        /* left: 8%; */
        width: 1276px;
        border: 1px solid black;
        border-radius: 5px;
        clear: both;
    }
    .project_nav dl {
        display: block;
        padding-bottom: 2px;
        margin: 0;
        font-size: 12px;
        color: black;
        font-weight: bold;
        padding-top: 10px;
        /* text-align: center; */
    }
    /* ============= node =============== */
    .node {
        padding: 2px 0 2px 0;
    }
    /* ============== category ========== */

    .project_nav dl dt {
        display: inline-block;
        float: left;
        /* text-align: center; */
        width: 100px;
        overflow: hidden;
    }
    .project_nav dl dd {
        /* width: 1200px; */
        height: 20px;
        /* float: left; */
        position: relative;
        /* margin: 0 0 10px 5px; */
        /* display: inline-block; */
    }
    .project_nav dd a {
        /* width: 50px; */
        text-decoration-line: none;
        color: rgba(0, 0, 0, 0.6);
        display: inline;
        margin: 0 10px 0 10px;
    }
    /* .project_nav_2 {
        display: block;
        padding-bottom: 2px;
        margin: 0;
    } */
    .project_content {
        /* clear: both; */
        display: inline-block;
        position: relative;
        padding: 10px;
        /* left: 8%; */
        width: 1280px;
    }
    .active {
        background: red;
        /* font-size: 200px; */
    }
</style>
