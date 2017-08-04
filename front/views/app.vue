<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
    }

    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
    .layout-menu-left{
        background: #464c5b;
    }
    .layout-header{
        height: 60px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
    }
    .layout-logo-left{
        width: 90%;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 10px 15px;
        color: white;
        flex-wrap: wrap;
    }
</style>
<template>
    <div class="layout" :style="{ height: clientHeight + 'px' }">
        <Row type="flex" :style="{ height: clientHeight + 'px' }">
            <i-col span="5" class="layout-menu-left">
                <Menu active-name="1-2" theme="dark" width="auto" :active-name="menuItemActive" :open-names="['1']" @on-select="select" ref="menu">
                    <router-link to="/">
                        <div class="layout-logo-left" @click="toHome">
                            <h3>SAHX-Admin</h3>
                            <h5>&nbsp;管理后台</h5>
                        </div>
                    </router-link>

                    <Menu-group title="订单">
                        <Menu-item name="1">
                            <Icon type="clipboard"></Icon>
                            订单列表
                        </Menu-item>
                    </Menu-group>
                    <Menu-group title="用户">
                        <Menu-item name="2">
                            <Icon type="ios-list"></Icon>
                            用户列表
                        </Menu-item>
                    </Menu-group>
                    <Menu-group title="Banner">
                        <Menu-item name="3-1">
                            <Icon type="images"></Icon>
                            Banner列表
                        </Menu-item>
                        <Menu-item name="3-2">
                            <Icon type="image"></Icon>
                            新增Banner
                        </Menu-item>
                    </Menu-group>
                    <Menu-group title="商品">
                        <Menu-item name="4-1">
                            <Icon type="images"></Icon>
                            商品列表
                        </Menu-item>
                        <Menu-item name="4-2">
                            <Icon type="image"></Icon>
                            新增商品
                        </Menu-item>
                    </Menu-group>
                </Menu>
            </i-col>
            <i-col span="19">
                <div class="layout-header">
                    <p>您好，Admin</p>
                    <Button type="text" @click="logout">退出登录</Button>
                </div>
                <router-view></router-view>
                <div class="layout-copy">
                    2017 &copy; SAHX
                </div>
            </i-col>
        </Row>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                clientHeight:0,
                menuItemActive: '0'
            }
        },
        created(){
            let clientHeight = document.body.clientHeight;
            this.clientHeight = clientHeight;
        },
        methods:{
            toHome(){
                let menu = this.$refs.menu;
                this.$nextTick(()=>{
                    menu.currentActiveName = '0'
                });
                this.routerTo('home');
            },
            select(e){
                switch(e){
                    case '1':
                        this.routerTo('order',{id:1});
                        break
                }
            },
            logout(){
                window.location.href = '/index/logout'
            }
        }
    }
</script>