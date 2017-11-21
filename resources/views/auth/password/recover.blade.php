@extends ('layouts.main') 

@section ('content')
<div class="container">
	<div class="col-md-8 col-md-offset-2">
		<h1>Recover your password</h1>

		<form method="POST" href="/password/recover">
			{{ csrf_field() }}

			<div class="form-group">
        <label for="email">Your email:</label>
				<input type="email" class="form-control" name="email" id="email" />
			</div>

			<div class="form-group">
				<button class="btn btn-primary">Recover</button>
			</div>
		</form>

    @include ('partials.errors')
	</div>
</div>
@endsection