function auth(){
	if($("[name='image']").val()=='' || $("[name='tags']").val() == '' ||$("[name='title']").val() == '' ||$("[name='description']").val()==''){ 
		alert('Llena todos los campos no seas flojo');
		return false;
	}
	else{
		return true;
	}
}
function Delete(id){
	fetch(`http://localhost:5000/api/post/${id}`,{
		method: 'DELETE'
	})
}
function cancel(){
	console.log('Paso')
	$("[name='title']").val('');
	$("[name='image']").val('');
	$("[name='tags']").val('');
	$("[name='description']").val('');
}