<template>
	<view>
		<view class="login-nav flex justify-center align-center">
			<text>
				请登录
			</text>
		</view>
		<scroll-view :scroll-y="true">
			<view class="flex justify-center logo">
				<view class="cu-avatar xl round  lage-avatar logo-lage" :style="'background-image:url('+logoUrl+');'">
				</view>
			</view>
			<view class="margin-top">
				<view class="cu-form-group margin-top">
					<view class="title">用户名</view>
					<input placeholder="请输入用户名" name="input" v-model="username"></input>
				</view>
				<view class="cu-form-group">
					<view class="title">密码</view>
					<input placeholder="请输入密码" type="password" name="input" v-model="password"></input>
				</view>
			</view>

			<view class="padding flex flex-direction">
				<button class="cu-btn bg-green margin-tb-sm lg" @tap="doLogin()">登录</button>
			</view>
		</scroll-view>



	</view>
</template>

<script>
	
	import {login,reLogin} from '../../lib/java110/api/Java110SessionApi.js'
	import conf from '../../conf/config.js'
	
	export default {
		data() {
			return {
				logoUrl: '',
				username: 'wuxw',
				password: 'admin'
			}
		},
		onLoad() {
			uni.hideTabBar({
				animation: false
			});
			reLogin();

			this.logoUrl = conf.baseUrl + 'logo.png';
		
		},
		onBackPress(options) {
			if (options.from === 'navigateBack') {
			  return false;
			}
			plus.runtime.quit();
			return true;
		},
		methods: {

			doLogin: function() {
				let _that = this;
				if (this.username == '') {
					uni.showToast({
						icon: 'none',
						title: "用户名不能为空"
					});
					return;
				}

				if (this.password == '') {
					uni.showToast({
						icon: 'none',
						title: "密码不能为空"
					});
					return;
				}
				
				login(this.username,this.password)
				.then(res=>{
					uni.reLaunch({
						url:'/pages/index/index'
					})
				},err=>{
					uni.showToast({
						icon: 'none',
						title: err
					});
				})
			}
		}
	}
</script>

<style>
	.logo {
		margin-top: 160upx;
		margin-bottom: 140upx;
	}

	.logo .logo-lage {
		height: 180upx;
		width: 180upx;
	}

	.login-nav {
		background-color: #00AA00;
		height: 120upx;
	}

	.login-nav text {
		color: #FFFFFF;
		font-size: 30upx;
	}
</style>
