/**
 * CSS Background Change Using MooTools (in a way that it isn't supposed to be used)
 *
 * DO NOT USE THIS FOR PRODUCTION. This is a very bad MooTools script that does not 
 * use best practices for developing MooTools code. You should write flexible code 
 * using MooTools classes. This is meant to be a 5-minute solution for a Photoshop design tutorial. 
 * I'm going to say it again: DO NOT USE THIS FOR PRODUCTION.
 * See David Walsh's MooTools 1.2 Class Template: http://davidwalsh.name/mootools-12-class-template
 *
 * LICENSE: MIT License http://www.opensource.org/licenses/mit-license.php
 * 
 * @author: Jacob Gube <jacob@sixrevisions.com>
 * @copyright: 2010-Present Design Instruct
 * @version: 0.1
 */
window.addEvent('domready', function(){
	
	var position = 0;
	var maxPosition = 2;
	
	dealWithControls(position);
	
	var images = new Array();
	
	// WTF?! #1
	images[0] = new Array(
				'DesignInstuct.com',
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vestibulum imperdiet hendrerit. Quisque tincidunt aliquam',
				'static/img/bg_slide01.png'
				);
	
	images[1] = new Array(
				'Six Revisions',
				'Fusce semper tortor a tellus ornare sed consequat diam elementum. In porta lacinia lacus id porttitor.',
				'static/img/bg_slide02.png'
				);
	
	images[2] = new Array(
				'A Tutorial',
				'Morbi vestibulum imperdiet hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
				'static/img/bg_slide03.png'
				);
	
	$$('.controls li').addEvent('click', function(){
		var controlClicked = this.getProperty('class');
		//WOWOWIWOWWTF? Flexibility and reuse?? #2
		position = (controlClicked=='left') ? position-1 : position+1;
		
		dealWithControls(position);
		
		//OMFGWTF?! #3
		$$('.description').set('html', '<h3>'+images[position][0]+'</h3><p>'+images[position][1]+'</p>');
		
		$$('.slides-holder').tween('background','url('+images[position][2]+')');
		
	});

//MEGA WTF I WILL BURN IN BAD JAVASCRIPT CODER HELL #4
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
