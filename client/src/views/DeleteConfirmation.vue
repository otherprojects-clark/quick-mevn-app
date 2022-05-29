<template>
	<div class="main">
		<span style="margin-bottom: 10px;">Are you sure?</span>
		<form @submit="deleteAll">
			<div>
				<input type="radio" name="confirm" value="yes" v-model="confirm">
				<label for="confirm">Yes</label>			
			</div>
			<div>
				<input type="radio" name="confirm" value="no" v-model="confirm">
				<label for="confirm">No</label>			
			</div>
			<div style="margin-top: 13px">
				<input type="submit" value="Submit">			
			</div>
		</form>
		<button @click="this.$router.push('/')">Cancel</button>				
	</div>
</template>

<script>
import axios from 'axios'
import { server } from '../components/Input.vue'

export default {
	data(){
		return {
			confirm: ''
		}
	},
	methods: {
		async deleteAll(){	
			if (this.confirm == 'yes') {
				await axios.post(server + 'del').then(res => {
					alert(res.data)
					document.location.href = '/'
				})
			} else {
				this.$router.push('/')
			}
		}
	}
}
</script>

<style>
.main {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 30px;
}
</style>