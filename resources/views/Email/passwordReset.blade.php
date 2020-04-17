@component('mail::message')
# Change password Request

Clique no botão abaixo para alterar a senha

@component('mail::button', ['url' => 'http://localhost:4200/response-password-reset?token='.$token])
Redefinir senha
@endcomponent

Obrigado,<br>
{{ config('app.name') }}
@endcomponent