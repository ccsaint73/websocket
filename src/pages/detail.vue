<template>
	<div class="detail">
		<ul>
			<li></li>
		</ul>
		
		<div class="message">
			<input type="text" v-model="msg" />
			<van-button type="primary" @click="handleClick">发送</van-button>
		</div>
	</div>
</template>

<script>
	import io from 'socket.io-client';
	
	export default {
		data(){
			return {
				socket:'',
				msg:''
			}
		},
		created(){
			this.socket = io('ws://localhost:8000');
			
			var user_id = this.$route.params.id;
			
//			console.log(user_id);
			this.socket.on(user_id, (data)=>{
				console.log(data)
			})
		},
		methods:{
			handleClick(){
				this.socket.emit('msg', this.msg)
			}
		}
	}
	
</script>

<style lang="less">
	.detail {
		.message {
			position: fixed;
			bottom: 0px;
			left: 0px;
			height: 44px;
			width: 100%;
			
			input {
				position: absolute;
				left: 10px;
				width: 200px;
				height: 30px;
			}
			
			button {
				position: absolute;
				top: 0px;
				right: 10px;
				height: 30px;
				line-height: 30px;
			}
		}
	}
</style>