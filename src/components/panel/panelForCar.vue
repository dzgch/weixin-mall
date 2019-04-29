<template>
    <div class="panel-car c-line">
        <div class="check-c">
            <check-icon :value.sync="checkedOne"  @click.native="getChecked(checkedOne)"></check-icon>
        </div>
        <div class="c-img-main"  @click="clickToDetails" :style="{backgroundImage:'url('+carList.picurl+')'}">
            
        </div>
        <div class="c-content"  @click="clickToDetails">
            <div class="c-title">{{ carList.name }}</div>
            <div class="c-car-money">
                <span class="c-money">购买：￥{{ (Number(carList.price)).toFixed(2) }}</span>
            </div>
            <!-- <div class="c-car-money-rent">
                <span class="c-money">租赁：￥{{ (Number(carList.rentPrice)).toFixed(2)}}</span>
               
            </div> -->
        </div>
        <div class="car-num">
                <inline-x-number :min="1" v-model="carList.count" @on-change="change"></inline-x-number>
        </div>
    </div>
</template>

<script>
// 购物车图文
import { Flexbox, FlexboxItem,Group,XNumber,InlineXNumber,CheckIcon } from 'vux'
import { mapState, mapMutations,mapGetters, mapActions } from 'vuex';
export default {
    name:"PanelForCar",
    components:{
        Flexbox,
        FlexboxItem
        ,Group,XNumber
        ,InlineXNumber
        ,CheckIcon
    },
    props:{
        carList:{
            type:[Object,Array]
        },
         isShow:{
            default:false
        },
         checked:{
             type:Boolean
         }
    },
    data(){
        return {
            sign:"￥",
            checkedOne:this.checked
        }
    },
    
    methods:{
        clickToDetails(){
            this.$router.push({
                path:this.$store.state.goodsDetailsPath,
                query:{
                    id:this.carList.commodityid
                }
            })
        },
        ...mapMutations([
            'setShopdelList',
            'removeShopdelList',
            'setAllCheckCar'
        ]),
        ...mapActions([
            'getshopcarUpdate'
        ]),
        change(val,old){
            // 修改购物车数量
            console.log(old)
            this.getshopcarUpdate(this.carList).then(res=>{
                this.$emit("on-update")
            })
        },
         changeCheck(){
            this.checkedOne=false
        },
        getChecked(val){
            console.log(val)
             if(val){
                  this.setShopdelList(this.carList.carid)
              }else{
                  this.removeShopdelList(this.carList.carid)

              }
            //   this.checkedOne=!val
          
        }
    },
    computed:{
        ...mapGetters([
        'getShopDel',
        'getShopcarList',
        'getAllCheckCar'
      ])
    },
    
}
</script>

<style lang="less">
@import '~vux/src/styles/1px.less';

@car-height:150px;
.panel-car{
    margin-top:15px;
    padding:30px 35px;
    background-color: @bg-color;
    position: relative;
    .check-c{
      display: inline-block;
      line-height: @car-height;
    }
    &.c-line:after{
        height:0;
        border:none;
    }
    
    .c-img-main {
        width: 160px;
        height: @car-height;
        border-radius: 4px;
        vertical-align: top;
    }
   
    .car-num{
        display: inline-block;
        position: absolute;
        right: 35px;
        vertical-align: middle;
        top: 62%;
        
            // .vux-inline-x-number{
            //     position: absolute;
            //     right:20px;
            // }

    }
    .c-content{
        height:@car-height;
        position: relative;
        display: inline-block;
        vertical-align: top;
        width:45%;
        .c-title{
            margin-top:15px;
            padding:0 10px;
        }
        .c-car-money{
            position: absolute;
            bottom: 30px;
            width:100%;
            .c-money{
                	font-size: 26px;
                    letter-spacing: 1px;
                    color: @theme-color;
            }
            
        }
        .c-car-money-rent{
            .c-car-money;
            bottom:0px;
        }
    }
}

</style>
