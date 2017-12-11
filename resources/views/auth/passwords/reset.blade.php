@extends ('layouts.main') 

@section('content')
<div class="container password-reminder-container">
	<div class="col-md-8 col-md-offset-2">
		<h1>Set your new password</h1>

		<form method="POST" action="/password/reset">
			{{csrf_field()}}

			<div class="form-group">
				<label for="password">Password</label>
				<input type="password" name="password" id="password" class="form-control" required />
			</div>

			<div class="form-group">
				<label for="password">Password confirmation</label>
				<input type="password" name="password_confirmation" id="password_confirmation" class="form-control" required />
			</div>

			<div class="form-group">
				<button type="submit" class="btn btn-primary btn-block">
					Set new password
				</button>
			</div>

			<input type="hidden" name="token" value="{{$token}}"/>
      <input type="hidden" name="email" value="{{$email}}"/>
		</form>

		@include ('partials.errors')
	</div>
</div>
@endsection