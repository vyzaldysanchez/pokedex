@if(session('status'))
<div class="alert alert-info alert-dismissible show notification">
	{{session('status')}}
	<button type="button" class="close" data-dismiss="alert" aria-label="Close">
		<span aria-hidden="true">&times;</span>
	</button>
</div>
@endif