@extends ('layouts.main')

@section ('content')
<div class="container password-reminder-container">
	<div class="col-md-8 col-md-offset-2">
		@if(session( 'status' ))
		<div class="alert alert-success">
			{{session( 'status' )}}
		</div>
		@else
		<h1>Recover your password</h1>

		<form method="POST" href="/password/recover">
			{{ csrf_field() }}

			<div class="form-group">
				<label for="email">Your email:</label>
				<input type="email" class="form-control" name="email" id="email" />
			</div>

			<div class="form-group">
				<button class="btn btn-primary">Recover</button>
        <a href="/" class="btn pull-right">Home</a>
			</div>
		</form>

		@include ('partials.errors')
    @endif
	</div>
</div>
@endsection