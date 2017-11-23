@component ('mail::message') 
# Password reset requested

*You are receiving this email because you requested to change your password.*

_In case you are not the one who requested this, ignore this message, otherwise:_

@component('mail::button', ['url' => $url])
Reset your password here
@endcomponent

Thank you for using your Pokedex!

@endcomponent