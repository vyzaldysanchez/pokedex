<!doctype html>
<html lang="{{ app()->getLocale() }}">
    @include ('partials.head')

    <body>
          @yield ('content')

          @include ('partials.footer')
    </body>
</html>