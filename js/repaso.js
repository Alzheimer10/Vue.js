function findById(items,id){
	for (var i in items) {
		if (items[i].id == id)
			return items[i];
	}
		return null
};
Vue.component('hello-vue',{
	template: '<h2>Hello Vue.js</h2>'
});

Vue.filter('category_name',function(id){
	var category = findById(this.categories,id);
	return category != null ? category.name : 'NULL';
});

Vue.component('note-row',{
	template: "#note_row_tpl",
	props: ['note','categories'],
	data: function(){
		return {
			editing: false
		};
	},
	methods:{
		update: function(){
			this.editing = false;
		},
		cancel: function(){
			this.editing = true;
		},
		edit: function(){
			this.editing = true;
		},
		remove: function(){
			this.$parent.notes.$remove(this.note);
		}
	}
});
Vue.component('select_category',{
	template: '#select_category_tpl',
	props: ['categories','id']
});
var app = new Vue({
	el: '#app',
	data: {
		notes:[
			{
				text: 'Laravel 5.1 es LTS',
				category_id: 4
			},
			{
				text: 'Vue.js framework de javascript',
				category_id: 2
			},
			{
				text: 'Registrate en Styde hoy en styde.net',
				category_id: 1
			}
		],
		new_note: {
			category_id: 1,
			text: ''
		},
		categories:[
			{
				id:  1,
				name: 'Styde'
			},
			{
				id:  2,
				name: 'Lavascript'
			},
			{
				id:  4,
				name: 'Laravel'
			}
		]
	},
	filters: {

	},
	methods:{
		createNote: function(){
			this.notes.push(this.new_note);
			this.new_note ={note: '',category_id:''};
		}
	}
});