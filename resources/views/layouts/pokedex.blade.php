<!doctype html>
<html lang="{{ app()->getLocale() }}">
    @include ('partials.head')

    <body>
        <main>
            @yield ('content')

            @include ('partials.footer')
        </main>
    </body>
</html>