<template>
    <div class="mainBox">
        <header>微前端实践</header>
        <section class="wrapperBox">
            <div class="menuBox">
                <div class="menuItem"
                    :class="currentId == item.id ? 'actived' : '' "
                    v-for="item in menuLists"
                    :key="item.id"
                    @click="selectMenu(item)">
                    <span>{{item.name}}</span>
                </div>
            </div>
            <section class="contBox">
                <!-- 主应用渲染区域 -->
                <router-view/>
                <!-- 子应用挂载区域 -->
                <div id="micro-app-container"></div>
            </section>
        </section>
    </div>
</template>

<script>
export default {
    name: "Index",
    data() {
        return {
            currentId: 1,
            menuLists: [{
                    id: 1,
                    name: "主应用页面",
                    url: '/home'
                },
                {
                    id: 2,
                    name: "Vue 页面",
                    url: '/app-vue'
                },
                {
                    id: 3,
                    name: "React 页面",
                    url: '/app-react'
                },
                {
                    id: 4,
                    name: "Angular 页面",
                    url: '/app-angular'
                }
            ],
            path: '',
        }
    },
    created() {
        this.path = this.$route.path;
        this.menuLists.map(item => {
            if(item.url == this.path) {
                this.currentId = item.id;
            }
        })
    },
    methods: {
        selectMenu(val) {
            this.currentId = val.id;
            if(val.url && this.$route.path !== val.url) {
                this.$router.push(val.url);
            }
        }
    }
}
</script>

<style lang="less" scoped>
.mainBox {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    header {
        width: 100%;
        height: 60px;
        line-height: 60px;
        font-size: 18px;
        background-color: #fff;
        border-bottom: 1px solid #ccc;
    }
    .wrapperBox {
        display: flex;
        height: 100%;
        .menuBox {
            width: 200px;
            // height: 100%;
            background-color: #fff;
            border-right: 1px solid #ccc ;
            .menuItem {
                width: 100%;
                height: 60px;
                line-height: 60px;
                cursor: pointer;
                span {
                    font-size: 16px;
                    display: inline-block;
                }
            }
            .actived {
                background-color: #ecf5ff;
                color: #409eff;
            }
        }
        .contBox {
            width: 100%;
            // height: 100%;
            #micro-app-container {
                width: 100%;
                // height: 100%;
                // max-height: 500px;
                overflow: auto;
            }
        }
    }
}
</style>