const localdb = process.env.localdb;

if(process.env.NODE_ENV  === 'production'){
	module.exports ={
		mongo:''
	}
}else{
		module.exports = {
		mongo : 'mongodb://localhost:27017/booker'
	}
}
