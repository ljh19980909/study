<template>
    <div class="city">
        <div class="city_container">
            <div id="head_top">
                <i class="el-icon-arrow-left heade_i"></i>
                <div class="title_head ellipsis">
                    <span>郑州</span>
                </div>
                <router-link to="/home" class="change_city">切换城市</router-link>
            </div>
            <div>
                <el-input placeholder="输入学校、商务楼、地址" class="text"></el-input>
                <el-button type="primary" icon="el-icon-search" class="submit">提交</el-button>
            </div>
            <div class="search_history">
                <h4>搜索历史</h4>
                <ul class="getpois_ul">
                    <li>
                        <h4 class="pois_name ellipsis">郑州黄河文化公园</h4>
                        <p class="pois_address ellipsis">河南省郑州市惠济区江山路黄河南岸1号</p>
                    </li>
                </ul>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "Citys"
    }
</script>

<style scoped>
    .city_container {
        padding-top: 1.45rem;
    }

    #head_top {
        background-color: #3190e8;
        position: fixed;
        z-index: 100;
        left: 0;
        top: 0;
        width: 100%;
        height: 1.25rem;
    }

    .heade_i {
        line-height: 1.25rem;
        float: left;
        color: #FFFFFF;
        font-size: .7rem;
    }

    .title_head {
        line-height: 1.25rem;
        float: left;
        width: 50%;
        text-align: center;
        font-size: .5rem;
        margin-left: 1.5rem;
        color: #FFFFFF;
        font-weight: 600;
    }

    .change_city {
        float: right;
        color: #FFFFFF;
        font-size: .4rem;
        line-height: 1.25rem;
        margin-right: .2rem;
    }

    .text {
        width: 90%;
        margin-left: 5%;
        margin-bottom: .3rem;
    }

    .submit {
        width: 90%;
        margin-left: 5%;
        color: #FFFFFF;
        margin-bottom: .3rem;
    }

    .search_history {
        background-color: #f5f5f5;
    }

    .search_history>h4 {
        border-top: 1px solid #e4e4e4;
        border-bottom: 1px solid #e4e4e4;
        padding-left: .5rem;
        font: .3rem/.6rem Microsoft YaHei;
    }
    .getpois_ul{
        background-color: #fff;
        border-top: 1px solid #e4e4e4;
    }
    .getpois_ul li {
        margin: 0 auto;
        padding-top: .45rem;
        border-bottom: 1px solid #e4e4e4;
    }
    .getpois_ul li .pois_name {
        margin: 0 auto .35rem;
        width: 90%;
        font-size: .45rem;
        color: #333;
    }
    .ellipsis {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .getpois_ul li .pois_address {
        width: 90%;
        margin: 0 auto .45rem;
        font-size: .35rem;
        color: #999;
    }
</style>
