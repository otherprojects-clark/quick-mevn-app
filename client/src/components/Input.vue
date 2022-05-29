<template>
	<div>
		<form @submit="submitForm">
			<div>
				<label for="name">Name </label> <br>
				<input type="text" v-model="name" name="name" minlength="3" required> 				
			</div>
			<div>
				<label for="age">Age </label> <br>
				<input type="number" v-model="age" name="age" required>			
			</div>
			<input type="submit" value="Submit" class="button">
			<input type="reset" value="Reset" class="reset">
		</form>
	</div>
</template>

<script>
import axios from 'axios'

const server = 'http://127.0.0.1:8000/'

export default {	
	data(){
		return {
			name: '',
			age: ''
		}
	},
	methods: {
		async submitForm(){
			// submit method, axios' post
			await axios.post(server + 'submit', {
				name: this.name,
				age: this.age,
			}).then(res => {console.log(res)})

			alert(`you've submitted the form ${this.name}`);
		}
	}
}
</script>


<style>
form {
	display: flex;
	flex-direction: column;
	gap: 5px;
}
form .button {
	width: 30%;
	margin: 10px 0 0 0;
}
form .reset {
	width: 30%;
}
</style>