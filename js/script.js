let cells = document.getElementById('cells');
let first_task_name = document.getElementById('first-task-name');
let first_number = document.getElementById('first-number');



$(cells).on('scroll', function() {

	first_task_name.style.marginTop = -cells.scrollTop + 'px';
	first_number.style.marginLeft = -cells.scrollLeft + 'px';
});

