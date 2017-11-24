@if($errors->any())
<div class="alert alert-danger">
	<ul>
		@foreach ($errors->all() as $error)
		<li>{{ $error }}</li>
		@endforeach
	</ul>
</div>
@elseif (Session::has('error'))
<div class="alert alert-danger">
	<ul>
		<li>{{ session('error') }}</li>
	</ul>
</div>
@endif
