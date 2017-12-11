@extends ('layouts.pokedex')

@section('content') 
    @include ('partials.notification')

    <div id="pokedex-box"></div>

    @include ('partials.errors')
@endsection