<template>
	<div class="home">
		<ul>
			<router-link v-for="(item, index) in list" :to="'/detail/' + item.user_id" :key="index">
			<li>
				<img :src="item.avatar"/>
				<p class="user_name">{{item.user_name}}</p>	
				
				<!--<img src="http://api.baxiaobu.com/Public/Uploads/2019-04-29/5cc6ae8ecab7e.jpg" onerror="javascript:this.src='http://api.baxiaobu.com/Public/Uploads/2019-04-26/5cc2eb9ecccb1.png'"/>-->
			</li>
			</router-link>
		</ul>
	</div>
</template>

<script>
	import io from 'socket.io-client';
	
	export default {
		data(){
			return {
				list:[]
			}
		},
		created(){
			const url = "http://api.baxiaobu.com/index.php/home/v1/getuserlist";
			
			this.$axios.get(url).then((res)=>{
				console.log(res);
				this.list = res.data.userList
			})
		}
	}
</script>

<style lang="less">
	.home {
		li {
			height: 88px;
			position: relative;
			
			img {
				position: absolute;
				border-radius: 30px;
				top: 10px;
				left: 10px;
				width: 60px;
				height: 60px;
			}
			
			.user_name {
				position: absolute;
				left: 90px;
				top: 10px;
			}
		}
	}
</style>