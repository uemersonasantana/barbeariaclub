<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="icon" type="image/x-icon" href="favicon.ico">
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap" rel="stylesheet">
        <script defer src="https://use.fontawesome.com/releases/v5.0.8/js/all.js"></script>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <base href="/">
        <title>Barbearia Club</title>
    </head>
    <body>
        <app-root></app-root>
        <script src="{{asset('js/runtime-es2015.js')}}" type="module"></script>
        <script src="{{asset('js/runtime-es5.js')}}" nomodule defer></script>
        <script src="{{asset('js/polyfills-es5.js')}}" nomodule defer></script>
        <script src="{{asset('js/polyfills-es2015.js')}}" type="module"></script>
        <script src="{{asset('js/styles-es2015.js')}}" type="module"></script>
        <script src="{{asset('js/styles-es5.js')}}" nomodule defer></script>
        <script src="{{asset('js/vendor-es2015.js')}}" type="module"></script>
        <script src="{{asset('js/vendor-es5.js')}}" nomodule defer></script>
        <script src="{{asset('js/main-es2015.js')}}" type="module"></script>
        <script src="{{asset('js/main-es5.js')}}" nomodule defer></script>
    </body>
</html>