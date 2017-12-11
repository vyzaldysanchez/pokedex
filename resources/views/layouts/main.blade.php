<!doctype html>
<html lang="{{ app()->getLocale() }}">
    @include ('partials.head')

    <body>
        <div class="container">
            @yield ('content')

            @include ('partials.footer')
        </div>
    </body>
</html>