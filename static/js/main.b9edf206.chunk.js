(this["webpackJsonper-project"]=this["webpackJsonper-project"]||[]).push([[0],{26:function(e,t,a){e.exports=a(39)},35:function(e,t,a){},37:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(15),s=a.n(o),c=a(5),l=(a(35),a(36),a(2)),i=a(3),u=a(6),m=a(4),p=a(7),d=(a(37),a(11)),f=function(e){return{type:"UPDATE_TASK",task:e}},b=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).onCloseForm=function(){a.props.onCloseForm()},a.onChange=function(e){var t=e.target,n=t.name,r=t.value;"status"===n&&(r="true"===t.value),a.setState(Object(d.a)({},n,r))},a.onSaveTask=function(e){e.preventDefault(),a.props.onSaveTask(a.state),a.onCloseForm()},a.onClear=function(){a.setState({name:"",status:!1})},a.state={id:"",name:"",status:!1},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"UNSAFE_componentWillMount",value:function(){this.props.task&&this.setState({id:this.props.task.id,name:this.props.task.name,status:this.props.task.status})}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){e&&e.updateTask?this.setState({id:e.updateTask.id,name:e.updateTask.name,status:e.updateTask.status}):e.updateTask||this.onClear()}},{key:"render",value:function(){var e=this.state.id;return this.props.isDisplayForm?r.a.createElement("div",{className:"card"},r.a.createElement("h3",{className:"card-header text-center"},""!==e?"Update ToDo":"Add ToDo",r.a.createElement("i",{className:"fas fa-times-circle ml-5",onClick:this.onCloseForm})),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:this.onSaveTask},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Name: "),r.a.createElement("input",{type:"text",className:"form-control",name:"name",value:this.state.name,onChange:this.onChange})),r.a.createElement("label",null,"Status: "),r.a.createElement("select",{className:"form-control",name:"status",value:this.state.status,onChange:this.onChange},r.a.createElement("option",{value:!0},"Done"),r.a.createElement("option",{value:!1},"Not Done")),r.a.createElement("div",{className:"mt-4 "},r.a.createElement("button",{type:"submit",className:"btn btn-success"},r.a.createElement("i",{className:"fas fa-plus mr-2"}),"Save"),"\xa0\xa0\xa0\xa0",r.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:this.onClear},r.a.createElement("i",{className:"fas fa-times mr-2"}),"Exit"))))):null}}]),t}(n.Component),h=Object(c.b)((function(e){return{isDisplayForm:e.isDisplayForm,updateTask:e.updateTask}}),(function(e,t){return{onSaveTask:function(t){e(function(e){return{type:"SAVE_TASK",task:e}}(t))},onCloseForm:function(){e({type:"CLOSE_FORM"})}}}))(b),E=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).onChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(d.a)({},n,r))},a.onSearch=function(){a.props.onSearch(a.state.keyword)},a.state={keyword:""},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.keyword;return r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{className:"form-control",type:"text",name:"keyword",value:e,onChange:this.onChange}),r.a.createElement("div",{className:"input-group-btn"},r.a.createElement("span",{className:"input-group-btn"},r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.onSearch},r.a.createElement("span",{className:"fa fa-search mr-2"}),"Search")))))}}]),t}(n.Component),v=Object(c.b)((function(e){return{}}),(function(e,t){return{onSearch:function(t){e(function(e){return{type:"SEARCH",keyword:e}}(t))}}}))(E),O=a(13),y=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).onClick=function(e,t){a.props.onSort({by:e,value:t})},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(O.a,null,r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"dropdown"},r.a.createElement("button",{className:"btn btn-secondary dropdown-toggle",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Sort"),r.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton"},r.a.createElement("div",{onClick:function(){e.onClick("name",1)}},r.a.createElement(O.b,{to:"",className:"name"===this.props.sort.by&&1===this.props.sort.value?"dropdown-item font-weight-bold":"dropdown-item"},"A -> Z")),r.a.createElement("div",{onClick:function(){e.onClick("name",-1)}},r.a.createElement(O.b,{to:"",className:"name"===this.props.sort.by&&-1===this.props.sort.value?"dropdown-item font-weight-bold":"dropdown-item"},"Z -> A")),r.a.createElement("div",{onClick:function(){e.onClick("status",1)}},r.a.createElement(O.b,{to:"",className:"status"===this.props.sort.by&&1===this.props.sort.value?"dropdown-item font-weight-bold":"dropdown-item"},"Status: Done")),r.a.createElement("div",{onClick:function(){e.onClick("status",-1)}},r.a.createElement(O.b,{to:"",className:"status"===this.props.sort.by&&-1===this.props.sort.value?"dropdown-item font-weight-bold":"dropdown-item"},"Status: Not Done"))))))}}]),t}(n.Component),k=Object(c.b)((function(e){return{sort:e.sort}}),(function(e,t){return{onSort:function(t){e(function(e){return{type:"SORT",sort:e}}(t))}}}))(y),g=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"row mt-2"},r.a.createElement(v,null),r.a.createElement(k,null))}}]),t}(n.Component),T=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).onUpdateStatus=function(){a.props.onUpdateStatus(a.props.task.id)},a.onDeleteTask=function(){a.props.onDeleteTask(a.props.task.id),a.props.onCloseForm()},a.onUpdateTask=function(){a.props.onOpenForm(),a.props.onUpdateTask(a.props.task)},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.task,a=e.index;return r.a.createElement("tr",null,r.a.createElement("td",null,a),r.a.createElement("td",null,t.name),r.a.createElement("td",{className:"text-center"},r.a.createElement("button",{type:"button",className:!0===t.status?"btn btn-success":"btn btn-secondary",onClick:this.onUpdateStatus},!0===t.status?"Done":"Not Done")),r.a.createElement("td",{className:"text-center"},r.a.createElement("button",{type:"button",className:"btn btn-warning",onClick:this.onUpdateTask},r.a.createElement("i",{className:"fas fa-pencil-alt mr-1"}),"Edit"),"\xa0\xa0",r.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:this.onDeleteTask},r.a.createElement("i",{className:"fas fa-trash-alt mr-1"}),"Delete")))}}]),t}(n.Component),S=Object(c.b)((function(e){return{}}),(function(e,t){return{onUpdateStatus:function(t){e(function(e){return{type:"UPDATE_STATUS_TASK",id:e}}(t))},onDeleteTask:function(t){e(function(e){return{type:"DELETE_TASK",id:e}}(t))},onCloseForm:function(){e({type:"CLOSE_FORM"})},onOpenForm:function(){e({type:"OPEN_FORM"})},onUpdateTask:function(t){e(f(t))}}}))(T),N=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).onChange=function(e){var t=e.target,n=t.name,r="checkbox"===t.type?t.checked:t.value,o={name:"filterName"===n?r:a.state.filterName,status:"filterStatus"===n?r:a.state.filterStatus};a.props.onFilterTable(o),a.setState(Object(d.a)({},n,r))},a.state={filterName:"",filterStatus:-1},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.tasks,a=e.filterTable,n=e.keyword,o=e.sort;a&&(a.name&&(t=t.filter((function(e){return-1!==e.name.toLowerCase().indexOf(a.name.toLowerCase())}))),t=t.filter((function(e){return-1===a.status?e:e.status===(1===a.status)}))),t=t.filter((function(e){return-1!==e.name.toLowerCase().indexOf(n)})),"name"===o.by?t.sort((function(e,t){return e.name>t.name?o.value:e.name<t.name?-o.value:0})):t.sort((function(e,t){return e.status>t.status?-o.value:e.status<t.status?o.value:0}));var s=this.state,c=s.filterName,l=s.filterStatus,i=t.map((function(e,t){return r.a.createElement(S,{key:e.id,index:t+1,task:e})}));return r.a.createElement("table",{className:"table table-bordered table-hover"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"text-center"},"STT"),r.a.createElement("th",{className:"text-center"},"T\xean"),r.a.createElement("th",{className:"text-center"},"Tr\u1ea1ng Th\xe1i"),r.a.createElement("th",{className:"text-center"},"H\xe0nh \u0110\u1ed9ng"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null),r.a.createElement("td",null,r.a.createElement("input",{type:"text",className:"form-control",name:"filterName",value:c,onChange:this.onChange})),r.a.createElement("td",null,r.a.createElement("select",{className:"form-control",name:"filterStatus",value:l,onChange:this.onChange},r.a.createElement("option",{value:-1}," All"),r.a.createElement("option",{value:1},"Done"),r.a.createElement("option",{value:0}," Not Done"))),r.a.createElement("td",null)),i))}}]),t}(n.Component),j=Object(c.b)((function(e){return{tasks:e.tasks,filterTable:e.filterTable,keyword:e.search,sort:e.sort}}),(function(e,t){return{onFilterTable:function(t){e(function(e){return{type:"FILTER_TABLE",filter:e}}(t))}}}))(N),w=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).onToggleForm=function(){var e=a.props.updateTask;e&&""!==e?a.props.onOpenForm():a.props.onToggleForm(),a.props.onClearTask({id:"",name:"",status:!1})},a.onShowForm=function(){a.setState({isDisplayForm:!0})},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.isDisplayForm;return r.a.createElement("div",{className:"container mt-3"},r.a.createElement("div",null,r.a.createElement("h1",{className:"text-center"},"To Do App")),r.a.createElement("div",{className:"row mt-5"},r.a.createElement("div",{className:e?"col-md-4":""},r.a.createElement(h,null)),r.a.createElement("div",{className:e?"col-md-8":"col-md-12"},r.a.createElement("button",{type:"button",className:"btn btn-success",onClick:this.onToggleForm},r.a.createElement("span",{className:"fa fa-plus mr-2"})," Add ToDo"),r.a.createElement(g,null),r.a.createElement("br",null),r.a.createElement("div",{className:"col-md-12 p-0"},r.a.createElement(j,null)))))}}]),t}(n.Component),C=Object(c.b)((function(e){return{isDisplayForm:e.isDisplayForm,updateTask:e.updateTask}}),(function(e,t){return{onToggleForm:function(){e({type:"TOGGLE_FORM"})},onClearTask:function(t){e(f(t))},onOpenForm:function(){e({type:"OPEN_FORM"})}}}))(w);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=a(12),F=a(17);function _(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function A(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?_(a,!0).forEach((function(t){Object(d.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):_(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var x=function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)},L=function(){return x()+"-"+x()+"-"+x()+x()+"-"+x()+x()+"-"+x()},U=function(e,t){var a=-1;return e.forEach((function(e,n){e.id===t&&(a=n)})),a},R=JSON.parse(localStorage.getItem("tasks")),P=R||[],M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0,a="",n=-1;switch(t.type){case"LIST_ALL":return e;case"SAVE_TASK":var r={id:t.task.id,name:t.task.name,status:"true"===t.task.status||!0===t.task.status};return r.id?e[n=U(e,r.id)]=r:(r.id=L(),e.push(r)),localStorage.setItem("tasks",JSON.stringify(e)),Object(F.a)(e);case"UPDATE_STATUS_TASK":a=t.id;var o=A({},e[n=U(e,a)]);return o.status=!o.status,e[n]=o,localStorage.setItem("tasks",JSON.stringify(e)),Object(F.a)(e);case"DELETE_TASK":return a=t.id,n=U(e,a),e.splice(n,1),localStorage.setItem("tasks",JSON.stringify(e)),Object(F.a)(e);default:return e}},I=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_FORM":return!e;case"OPEN_FORM":return!0;case"CLOSE_FORM":return!1;default:return e}},K={id:"",name:"",status:!1},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_TASK":return t.task;default:return e}},J={name:"",status:-1},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FILTER_TABLE":return{name:t.filter.name,status:parseInt(t.filter.status,10)};default:return e}},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH":return t.keyword;default:return e}},W={by:"name",value:1},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SORT":return{by:t.sort.by,value:t.sort.value};default:return e}},H=Object(D.b)({tasks:M,isDisplayForm:I,updateTask:B,filterTable:G,search:V,sort:X}),Z=Object(D.c)(H,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());s.a.render(r.a.createElement(c.a,{store:Z},r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[26,1,2]]]);
//# sourceMappingURL=main.b9edf206.chunk.js.map