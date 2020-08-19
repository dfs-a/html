const app = new Vue({
	el:'#app',
	data:{
		books:[
			{
				id:1,
				name:'《算法导论》',
				date:'2020-8',
				price:85.00,
				count:1
			},
			{
				id:2,
				name:'《UNIX编程艺术》',
				date:'2020-7',
				price:59.00,
				count:1
			},
			{
				id:3,
				name:'《编程珠玑》',
				date:'2020-6',
				price:39.00,
				count:1
			},
			{
				id:4,
				name:'《代码大全》',
				date:'2020-9',
				price:128.00,
				count:1
			},
			
		]
	},
	methods:{
		// getFinalPrice(price){
		// 	return '￥'+price.toFixed(2)
		// }
		decrement(index){
			this.books[index].count++
		},
		increment(index){
			this.books[index].count--
		},
		removeHandler(index){
			this.books.splice(index, 1)
		},
	},
	computed:{
		totalprice(){
			let totalprice = 0
			for (let i = 0;i<this.books.length;i++){
				totalprice += this.books[i].price * this.books[i].count
			}
			return totalprice
		}
	},
	filters:{//过滤器相当于把前面的参数传进了方法当中
		showPrice(price){
			return '￥' + price.toFixed(2)
		}
	}
})