<html>
<head>
	<title>MarionetteJS Experiment</title>
	<link rel="stylesheet" href="_assets/css/bootstrap.min.css">
	<link rel="stylesheet" href="_assets/css/style.css">
	<script src='_assets/js/_lib/jquery-1.7.2.min.js'></script>
	<script src='_assets/js/_lib/underscore.js'></script>
	<script src='_assets/js/_lib/backbone.js'></script>
	<script src='_assets/js/_lib/backbone.marionette.js'></script>
</head>
<body>
	
	<div class="container">
		<header class='row'>
			<h2>Account Summary</h2>
			<ul class='nav nav-pills'>
				<li class='active'><a href="#/starters">menu one</a></li>
				<li><a href="#/salads">menu two</a></li>
				<li><a href="#/mains">menu three</a></li>
				<li><a href="#desserts">menu four</a></li>
			</ul>
			<hr>
		</header>

		<div class="row">
			<div class="jumbotron">
				<h2>Account Summary</h2>
				<p>
					<small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur dolorum, perferendis quibusdam. Magni recusandae aperiam et blanditiis omnis, consectetur optio exercitationem aliquam, aspernatur facere, quisquam nulla eos. Aliquid, aperiam exercitationem?</small>
				</p>
			</div>
		</div>

		<div class="row">
			<div class="col-md-3" id='leftNavigation'>
				<div id="main-region"></div>
			</div>
			<div class="col-md-9" id='account-summary-grid'>
				<table style='width: 850px; text-align: center'>
					<thead>
						<tr>
							<th>Header One</th>
							<th>Header Two</th>
							<th>Header Three</th>
							<th>Header Four</th>
							<th>Header Five</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>One</td>
							<td>Two</td>
							<td>three</td>
							<td>four</td>
							<td>five</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>

		<!-- footer -->
		<footer class="row">
			<p style='text-align: center; margin-top: 15px;'>&copy; copyright 2015 | www.accountsummary.com</p>
		</footer>
	</div>

	<script type='text/template' id='myTemplate'>
		<div id="left-nav-region">
			<div id='regionOne'>One</div>
			<div id='regionTwo'>Two</div>
			<div id='regionThree'>Three</div>
			<div id='regionFour'>Four</div>
		</div>
	</script>

	<script src="_assets/js/main.js"></script>
</body>
</html>
















(function(){
	window.App = {
		Models: {},
		Views: {},
		Collections: {},
		Regions: new Marionette.Application()
	};

	App.Regions.addRegions({
		main: '#main-region'
	});

	//Task model
	App.Models.TaskModel = Backbone.Model.extend({
		defaults: {
			title: 'Some task title'
		}
	});

	//Task view
	App.Views.TaskView = Marionette.LayoutView.extend({
		onShow: function () {
			this.suffleContainer();
			this.renderView();
		},
		template: _.template($('#myTemplate').html()),
		suffleContainer: function () {
			var obj = {
				4: 'Two',
				2: 'One',
				1: 'Three',
				3: 'Four'
			};
			var regionContainer = $('#left-nav-region');
			var elems = ('#regionOne, #regionTwo, #regionThree, #regionFour');
			//var index = _.keys(obj);
			$(elems).each(function (index, el){
				index ++;
				$(el).attr('class', obj[index]);
			});
			//$('#left-nav-region').html('');
			var classes = ['One', 'Two', 'Three', 'Four'];
			$(classes).each(function(index, el){
				var el = '.' + classes[index];
				$('#left-nav-region').prepend($(el));
				console.log(el);
			});
		},
		renderView: function () {
			//console.log('hello!');
		}
	});

	var task = new App.Models.TaskModel();
	var taskView = new App.Views.TaskView({model: task});
	App.Regions.main.show(taskView);
}());


