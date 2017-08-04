<style scoped>


</style>
<template>
    <page>
        <div slot="breadcrumb">
            <Breadcrumb>
                <Breadcrumb-item>首页</Breadcrumb-item>
                <Breadcrumb-item>订单列表</Breadcrumb-item>
            </Breadcrumb>
        </div>
    </page>
</template>
<script>
    export default {
        components: {},
        data() {
            return {}
        },
        computed: {},
        created() {

        },
        mounted() {
            console.log(this.$route.params)
        },
        methods: {}
    }
</script>
