<style scoped>
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .layout-content{
        min-height: 200px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }
    .layout-content-main{
        height: 100%;
        padding: 10px;
    }
</style>
<template>
    <div>
        <div class="layout-breadcrumb">
            <slot name="breadcrumb"></slot>
        </div>
        <div class="layout-content">
            <div class="layout-content-main">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

