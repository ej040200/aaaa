// Selecting The Container.
const container = document.querySelector('.container');
// The Scroll Event.
window.addEventListener('scroll',()=>{
	const {scrollHeight,scrollTop,clientHeight} = document.documentElement;
	if(scrollTop + clientHeight > scrollHeight - 5){
		setTimeout(createPost,2000);

	}
});
// The createPost function creates The HTML for the blog post.
// It append it to the container.
function createPost(){
	const post = document.createElement('div');
	post.className = 'text';
	post.innerHTML = `<h1>Lorem ipsum dolor sit amet</h1>
	<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque eos, atque sed saepe
	   tempore, sequi qui excepturi voluptate ut perspiciatis culpa sit harum, corrupti ullam 
	   voluptatibus obcaecati sint dignissimos quas.</p>`;
//   Appending the post to the container.
	container.appendChild(post);
}
