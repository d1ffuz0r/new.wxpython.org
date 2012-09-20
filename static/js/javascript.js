window.addEvent('domready', function(){

	var position = 0;
	var maxPosition = 2;

	dealWithControls(position);

	var images = new Array();

	images[0] = new Array(
				'Task Coach',
				'Task Coach is a simple open source todo manager to keep track of personal tasks and todo lists.',
				'/static/img/slider/taskcoach.png'
				);

	images[1] = new Array(
				'Wing IDE',
				'Fusce semper tortor a tellus ornare sed consequat diam elementum. In porta lacinia lacus id porttitor.',
				'/static/img/slider/wingide.png'
				);

	images[2] = new Array(
				'Boa constructor',
				'Morbi vestibulum imperdiet hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
				'/static/img/slider/boaconstruct.jpeg'
				);

	$$('.controls li').addEvent('click', function(){
		var controlClicked = this.getProperty('class');
		position = (controlClicked=='left') ? position-1 : position+1;
		dealWithControls(position);
		$$('.description').set('html', '<h3>'+images[position][0]+'</h3><p>'+images[position][1]+'</p>');
		$$('.slides-holder').tween('background','url('+images[position][2]+')');

	});

function dealWithControls(p){
	if(p==0){
		$$('.left').fade('out');
	} else if(p!=0) {
		$$('.left').fade('in');
	}
	if(p==maxPosition){
		$$('.right').fade('out');
	} else if(p!=maxPosition) {
		$$('.right').fade('in');
	}
}
});
