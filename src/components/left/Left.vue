<template>
    <div class="left">
        <ul>

            <slot></slot>

        </ul>
    </div>
</template>

<script>

</script>

<style >
    *{
    margin: 0;
    padding: 0;
    }
    .layout .left {
        width: 10%;
    }
    .left{
        position: fixed;
        width: 10%;
        top: 60px;
        height: calc(100% - 60px);
        border-right: 1px solid #dfe4ed;
        overflow: auto;
        font-size: 14px;
        background-color: rgb(74, 74, 74)
        
    }
    .left ul{
        list-style: none;
    }
</style>
