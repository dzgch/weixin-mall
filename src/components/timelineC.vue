<template>
    <div class="timeline-demo">
		<timeline>
			<timeline-item>
				<h4 class="recent">{{ title }}</h4>
				<p class="recent">{{ time }}</p>
			</timeline-item>
		</timeline>
        <flow orientation="vertical" style="height:250px;">
      <flow-state state="1" :title="$t('Paid')" is-done></flow-state>
      <flow-line is-done></flow-line>

      <flow-state state="2" :title="$t('Shipped')" is-done></flow-state>
      <flow-line :tip="$t('In progress')"></flow-line>

      <flow-state state="3" :title="$t('Delivered')"></flow-state>
      <flow-line></flow-line>

      <flow-state state="4" :title="tt"></flow-state>
    </flow>
	</div>
</template>
<i18n>
In progress:
  zh-CN: 进行中
Paid:
  zh-CN: 已付款
Shipped:
  zh-CN: 已发货
Delivered:
  zh-CN: 待收货
Done:
  zh-CN: 完成
</i18n>
<script>
import { Timeline,TimelineItem,Flow, FlowState, FlowLine } from 'vux'
export default {
    name:"timelineC",
    components:{
        Timeline
        ,TimelineItem
        ,Flow
        ,FlowState
        ,FlowLine
    },
    props:{
        title:{
            default:""
        },
        tt:{
            default:"<div>111111111</div>"
        },
        time:{
            default:"2016-04-17 12:00:00"
        }
    },
    data () {
    return {
      count: 3
    }
  }
}
</script>

<style lang="less" scoped>
.timeline-demo {
	p {
		color: #888;
		font-size: 14px;
	}
	h4 {
		color: #666;
		font-weight: normal;
	}
	.recent {
		color: rgb(4, 190, 2)
	}
}
</style>
